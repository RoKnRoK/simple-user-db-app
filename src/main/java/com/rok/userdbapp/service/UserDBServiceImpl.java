package com.rok.userdbapp.service;

import com.rok.userdbapp.dao.UserDao;
import com.rok.userdbapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
public class UserDBServiceImpl implements UserDBService {

    private UserDao userDao;

    public List<User> getUsers() {
        System.out.println("Retrieving users");
        return userDao.getUsers();
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
