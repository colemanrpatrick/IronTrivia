package com.IronTrivia.services;

import com.IronTrivia.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by alexanderhughes on 3/17/16.
 */
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUserName(String name);
}
