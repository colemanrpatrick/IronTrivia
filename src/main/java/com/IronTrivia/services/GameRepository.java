package com.IronTrivia.services;

import com.IronTrivia.entities.Game;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alexanderhughes on 3/17/16.
 */
public interface GameRepository extends CrudRepository<Game, Integer> {
    List<Game> findAll();
}