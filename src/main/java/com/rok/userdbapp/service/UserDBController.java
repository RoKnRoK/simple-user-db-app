package com.rok.userdbapp.service;

import com.rok.userdbapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserDBController {

    @Autowired
    private UserDBService userService;


    @RequestMapping("")
    public List<User> getUsers(@RequestParam("page") int pageNumber, @RequestParam("size") int pageSize){
        return userService.getUsers(pageNumber, pageSize);
    }

    @PutMapping("")
    public void addOrUpdateUser(@RequestBody User newUser){
        userService.addOrUpdateUser(newUser);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable int userId){
        userService.deleteUser(userId);
    }
}
