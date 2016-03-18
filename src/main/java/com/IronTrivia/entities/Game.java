package com.IronTrivia.entities;

import javax.persistence.*;
import java.util.ArrayList;

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

    public Game() {
    }

    public int getId() {
        return id;

    }

    public ArrayList<String> getPlayers() {
        return playerNames;
    }

    public void setPlayers(ArrayList<String> playerNames) {
        this.playerNames = playerNames;
    }
}
