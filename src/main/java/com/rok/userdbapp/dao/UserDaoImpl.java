package com.rok.userdbapp.dao;

import com.rok.userdbapp.entity.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
public class UserDaoImpl implements UserDao {

    @PersistenceContext(name = "UserDbUnit")
    private EntityManager entityManager;

    @Override
    public List<User> getUsers() {
        return entityManager.createQuery("SELECT u from User u", User.class).getResultList();
    }

}
