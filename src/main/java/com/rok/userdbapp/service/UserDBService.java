package com.rok.userdbapp.service;

import com.rok.userdbapp.entity.User;

import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
public interface UserDBService {

    List<User> getUsers(int pageNumber, int pageSize);

    void addUser(User newUser);

    void addOrUpdateUser(User newUser);

    void deleteUser(int userId);
}
