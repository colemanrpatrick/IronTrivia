package com.IronTrivia.controllers;

import com.IronTrivia.entities.Game;
import com.IronTrivia.entities.Score;
import com.IronTrivia.entities.User;

import com.IronTrivia.services.GameRepository;
import com.IronTrivia.services.ScoreRepository;
import com.IronTrivia.services.UserRepository;
import com.IronTrivia.utils.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by alexanderhughes on 3/17/16.
 */
@RestController
public class IronTriviaController {

    @Autowired
    UserRepository users;
    @Autowired
    ScoreRepository scores;
    @Autowired
    GameRepository games;

    Server dbui = null;

    @PostConstruct
    public void init() throws SQLException {
        dbui = Server.createWebServer().start();
    }

    @PreDestroy
    public void destroy() {
        dbui.stop();
    }
    //returns all users
    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public List<User> getUsers() {
        return (List<User>) users.findAll();
    }
    //sorry for long comments, being verbose to help in dev
    //login or create new user; i'll try to explain what's going on in methods so you js guys can follow along a little easier
    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public User addUser(@RequestBody User user, HttpSession session, @PathVariable("createNew") boolean createNew) throws Exception {
        if (!createNew) {//if user does not check the create new user box
            User loginUser = users.findByUserName(user.getUserName());//checking database if loginUser is null throws exception cuz that user doesn't exist
            if (loginUser == null) {
                throw new Exception("user does not exist");//probably better to be less specific when displaying the error to actual users, i.e incorrect username/password
            }
            else if (!PasswordStorage.verifyPassword(user.getPasswordHash(), loginUser.getPasswordHash())) {
                throw new Exception("Incorrect username/password");//checks the password
            }
            session.setAttribute("userName", loginUser.getUserName());
            return loginUser;//just returning the entire user object might change this later, might only need to send up the userName
        }                    //if return type is just username string when yall want the user's info you could just hit the /user/{userName} get route
        else {//check if the username is taken
            if (users.findByUserName(user.getUserName()) != null) {//checks if userName exists in the database, enforcing unique usernames with the logic
                throw new Exception("user already exists");
            }
            return users.save(user);//this method's return type is User so i have to return the new user. might be nice so you can say welcome new user dude
        }
    }
    //put route to update user info, just send
    @RequestMapping(path = "/user", method = RequestMethod.PUT)
    public User editUser(@RequestBody User user) {
        return users.save(user);//sends back the user with updated info
    }

    /*to grab a specific user, just in case yall want it; i could just grab info from the session, leaving it this way
    for now incase yall want to be able to grab some of any users info, if i do it that way this will take no params*/
    @RequestMapping(path = "/user/{userName}", method = RequestMethod.GET)
    public User getUser(@PathVariable("userName") String userName) {
        return users.findByUserName(userName);
    }
    //start of game routes
    //this route is void, no return type, just let me know if yall want something returned
    @RequestMapping(path = "/game", method = RequestMethod.POST)
    public void createGame(@RequestBody List<User> players, @RequestBody Game game) {
        game = games.save(game);
        for (User player : players) {
            User user = users.findByUserName(player.getUserName());//grabbing the player from database
            scores.save(new Score(user, game));//then creating a score for that user connected to that game, this is also the user's link to the game
        }
    }
    /*asks for game id creates session for this game for user
    * since this method returns the game that a session is created for
    * we probably wont need a separate get method for a single game,
    * this will return the game whenever everyone has answered and or said they
    * are ready, did this in post route since we are posting data to the server*/
    @RequestMapping(path = "/game/{id}", method = RequestMethod.POST)
    public Game viewGame(@PathVariable("id") int id, HttpSession session, @PathVariable("isReady") Boolean isReady, @PathVariable("hasAnswered") Boolean hasAnswered) throws Exception {
        Game game = games.findOne(id);
        User user = users.findByUserName((String) session.getAttribute("userName"));
        if (isReady != null) {
            user.setReady(isReady);
            users.save(user);
            //one liner :)
            for (User player : getPlayers(game)) {
                if (!player.isReady()) {
                    return null;//i think it will be very nice to have the game returned in this route, so a null return will be our indication of someone not yet being ready
                }
            }
        }
        else if (hasAnswered != null) {
            user.setHasAnswered(hasAnswered);
            users.save(user);
            //one liner :)
            for (User player : getPlayers(game)) {
                if (!player.isHasAnswered()) {
                    return null;//i think it will be very nice to have the game returned in this route, so a null return will be our indication of someone not yet being ready
                }
            }
        }
        session.setAttribute("gameId", id);
        return game;//if a game object is returned then everyone is ready/has answered
    }
    /*this route removes the game from the session and deletes the game
    * from the database, this route should be run after the game is finished
    * and it will also delete the scores associated with that game
    * also it returns the user that had the highest score*/
    @RequestMapping(path = "/game/{id}", method = RequestMethod.DELETE)
    public User deleteGame(@PathVariable("id") int id, HttpSession session) {
        Game game = games.findOne(id);
        User winner = scores.findFirstByGameOrderByScoreDesc(game).getUser();//grabs the user with the highest score
        session.removeAttribute("gameId");
        //had to store the winner since i cant grab it after the game is deleted
        scores.deleteByGame(game);//want to change the game deletion to cascade and delete the scores associated wiht it, to get rid of this line
        games.delete(id);
        return winner;
    }
    //route to grab list of all games
    @RequestMapping(path = "/game", method = RequestMethod.GET)
    public List<Game> getGames(HttpSession session) {
        return (List<Game>) games.findAll();
    }
    //may not need this, as the code sets the gameId attribute value every time the route to join a game is hit
    @RequestMapping(path = "/exit-game", method = RequestMethod.POST)
    public void exitGame(HttpSession session) {
        session.removeAttribute("gameId");
    }
    /*when the scores are created in the create game method, the score is instantiated at 0
    * this route increments the score by 5 if the user answered correctly*/
    @RequestMapping(path = "/score", method = RequestMethod.PUT)
    public Score updateScore(@PathVariable("isCorrect") Boolean isCorrect, HttpSession session) {
        Game game = games.findOne((Integer) session.getAttribute("gameId"));
        User user = users.findByUserName((String) session.getAttribute("userName"));
        Score score = scores.findByUserAndGame(user, game);
        if (isCorrect) {
            score.addToScore();//adds 5 to the user's score for this game if they had the correct answer
        }
        return score;
    }
    /*returns all the scores for a game, could use to display the scores for a game
    *the score objects have a user object in them, so we don't need to request
    *for the list of users separately, they will be included here*/
    @RequestMapping(path = "/score", method = RequestMethod.GET)
    public List<Score> getScores(HttpSession session) {
        Game game = games.findOne((Integer) session.getAttribute("gameId"));
        return scores.findByGame(game);
    }
    /*may not need this route as the /score get route will give the client
    * all of the users' score as well, but here it is*/
    @RequestMapping(path = "/score/{id}", method = RequestMethod.GET)
    public Score getScore(HttpSession session) {
        Game game = games.findOne((Integer) session.getAttribute("gameId"));
        User user = users.findByUserName((String) session.getAttribute("userName"));
        Score score = scores.findByUserAndGame(user, game);
        return score;
    }

    //a method to return the players in the game specified, to avoid some code duplication
    public ArrayList<User> getPlayers(Game game) {
        List<Score> gameScores = scores.findByGame(game);
        for (Score score : gameScores) {
            game.getPlayers().add(score.getUser());
        }
        return game.getPlayers();
    }
}
