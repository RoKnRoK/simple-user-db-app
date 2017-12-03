package com.rok.userdbapp.dao;

import com.rok.userdbapp.entity.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@Transactional
public interface UserDao {

    List<User> getUsers(int pageNumber, int pageSize);

    void addUser(User newUser);

    void addOrUpdateUser(User newUser);

    void deleteUser(int userId);
}
