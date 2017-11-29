package com.rok.userdbapp.dao;

import com.rok.userdbapp.entity.User;

import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
public interface UserDao {

    List<User> getUsers(int pageNumber, int pageSize);

    void addUser(User newUser);
}
