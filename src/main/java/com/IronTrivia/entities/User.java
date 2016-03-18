package com.IronTrivia.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by alexanderhughes on 3/17/16.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private int id;
    @NotNull
    private String userName;
    @NotNull
    private String passwordHash;
    @Column(nullable = true)
    private Boolean isReady = false;
    @Column(nullable = true)
    private Boolean hasAnswered = false;

    public User(String userName, String passwordHash) {
        this.userName = userName;
        this.passwordHash = passwordHash;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public Boolean getReady() {
        return isReady;
    }

    public void setReady(Boolean ready) {
        isReady = ready;
    }

    public Boolean getHasAnswered() {
        return hasAnswered;
    }

    public void setHasAnswered(Boolean hasAnswered) {
        this.hasAnswered = hasAnswered;
    }
}