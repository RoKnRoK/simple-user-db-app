package com.rok.userdbapp.service;

import com.rok.userdbapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@RestController
@RequestMapping("/user")
public class UserDBController {

    @Autowired
    UserDBService userService;


    @RequestMapping("/list")
    public String getUsers(){
        System.out.println("Request recieved");
        return userService.getUsers().stream().map (User::toString).collect(Collectors.joining("\n"));
    }
}
