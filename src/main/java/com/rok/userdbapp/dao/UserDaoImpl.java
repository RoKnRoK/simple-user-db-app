package com.rok.userdbapp.dao;

import com.rok.userdbapp.entity.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
public class UserDaoImpl implements UserDao {

    @PersistenceContext(name = "UserDbUnit")
    private EntityManager entityManager;

    @Override
    public List<User> getUsers(int pageNumber, int pageSize) {
        TypedQuery<User> query = entityManager.createQuery("SELECT u from User u", User.class);
        query.setFirstResult((pageNumber-1) * pageSize);
        query.setMaxResults(pageSize);
        return query.getResultList();
    }

    @Override
    public void addUser(User newUser) {
        entityManager.persist(newUser);
    }

    @Override
    public void addOrUpdateUser(User newUser) {
        entityManager.persist(entityManager.merge(newUser));
    }

    @Override
    public void deleteUser(int userId) {
        Query query = entityManager.createQuery("DELETE FROM User u WHERE u.id = :userId");
        query.setParameter("userId", userId);
        query.executeUpdate();
    }

}
