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
    int id;
    @Transient
    ArrayList<User> players;

    public Game() {
    }

    public int getId() {
        return id;

    }

    public ArrayList<User> getPlayers() {
        return players;
    }

    public void setPlayers(ArrayList<User> players) {
        this.players = players;
    }
}
