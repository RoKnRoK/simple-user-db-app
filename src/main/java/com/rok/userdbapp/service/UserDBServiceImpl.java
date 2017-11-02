package com.rok.userdbapp.service;

import com.rok.userdbapp.entity.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@Service
public class UserDBServiceImpl implements UserDBService {
    public List<User> getUsers() {
        System.out.println("Request recieved");
        User user = new User();
        user.setName("test");
        user.setPassword("test".toCharArray());
        ArrayList<User> users = new ArrayList<>();
        users.add(user);
        return users;
    }
}
