package com.sjsu.cmpe202.service;

import com.sjsu.cmpe202.dao.UserRepository;
import com.sjsu.cmpe202.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Optional<User> getUserDetails(String userName) {
        return userRepository.findById(userName);
    }

    public Iterable<User> getAllUserDetails(String userName) {
        return userRepository.findAll();
    }

}
