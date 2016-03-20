package com.IronTrivia.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by alexanderhughes on 3/17/16.
 */
@Entity
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue
    private int id;
    @Transient
    private List<String> playerNames;
    @OneToMany(mappedBy = "game")
    private List<Score> scoreList;

    public Game() {
    }

    public int getId() {
        return id;

    }

    public List<String> getPlayerNames() {
        return playerNames;
    }

    public void setPlayerNames(List<String> playerNames) {
        this.playerNames = playerNames;
    }

    public List<Score> getScoreList() {
        return scoreList;
    }

    public void setScoreList(List<Score> scoreList) {
        this.scoreList = scoreList;
    }
}
