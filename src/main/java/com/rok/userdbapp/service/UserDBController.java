package com.rok.userdbapp.service;

import com.rok.userdbapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserDBController {

    @Autowired
    private UserDBService userService;


    @RequestMapping("/list")
    public List<User> getUsers(){
        System.out.println("Request received");
//        return userService.getUsers().stream().map (User::toString).collect(Collectors.joining("\n"));
        return userService.getUsers();
    }
}
