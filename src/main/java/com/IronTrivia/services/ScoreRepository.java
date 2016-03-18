package com.IronTrivia.services;

import com.IronTrivia.entities.Game;
import com.IronTrivia.entities.Score;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by alexanderhughes on 3/17/16.
 */
public interface ScoreRepository extends CrudRepository<Score, Integer> {
    Score findFirstByGameOrderByScoreDesc(Game game);
}