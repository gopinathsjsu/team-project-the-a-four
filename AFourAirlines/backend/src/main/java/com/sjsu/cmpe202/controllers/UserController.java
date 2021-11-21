package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.User;
import com.sjsu.cmpe202.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    //Controller - pickup rest requests
    //Service- business logic
    //Config -- configuration
    //DAO -- REPOSITORY
    //Util --
    //Validator/Filter
    @Autowired
    UserService userService;

    @GetMapping("/getuserdetails ")
    public Optional<User> getUserDetails(@RequestParam String userName) {
        return userService.getUserDetails(userName);
    }
}
