package com.rok.userdbapp.service;

import com.rok.userdbapp.dao.UserDao;
import com.rok.userdbapp.entity.User;

import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
public class UserDBServiceImpl implements UserDBService {

    private UserDao userDao;

    public List<User> getUsers(int pageNumber, int pageSize) {
        return userDao.getUsers(pageNumber, pageSize);
    }

    @Override
    public void addUser(User newUser) {
        userDao.addUser(newUser);
    }

    @Override
    public void addOrUpdateUser(User newUser) {
        userDao.addOrUpdateUser(newUser);
    }

    @Override
    public void deleteUser(int userId) {
        userDao.deleteUser(userId);
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
