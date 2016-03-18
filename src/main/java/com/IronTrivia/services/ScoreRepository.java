package com.IronTrivia.services;

import com.IronTrivia.entities.Game;
import com.IronTrivia.entities.Score;
import com.IronTrivia.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alexanderhughes on 3/17/16.
 */
public interface ScoreRepository extends CrudRepository<Score, Integer> {
    Score findFirstByGameOrderByScoreDesc(Game game);
    void deleteByGame(Game game);
    List<Score> findByGame(Game game);
    Score findByUserAndGame(User user, Game game);
}