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
    private ArrayList<String> playerNames;
    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Score> scoreList;

    public Game() {
    }

    public int getId() {
        return id;

    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<String> getPlayerNames() {
        return playerNames;
    }

    public void setPlayerNames(ArrayList<String> playerNames) {
        this.playerNames = playerNames;
    }

    public List<Score> getScoreList() {
        return scoreList;
    }

    public void setScoreList(List<Score> scoreList) {
        this.scoreList = scoreList;
    }
}
