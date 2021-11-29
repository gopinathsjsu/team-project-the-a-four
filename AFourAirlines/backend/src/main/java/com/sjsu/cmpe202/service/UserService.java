package com.sjsu.cmpe202.service;

import com.sjsu.cmpe202.dao.UserRepository;
import com.sjsu.cmpe202.models.MyUserDetails;
import com.sjsu.cmpe202.models.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service @Slf4j @Transactional
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findById(username);
         if(!user.isPresent()){
             throw new UsernameNotFoundException("User not found with username: " + username);
         }else{
             log.info("user is {}",user.get());
            return new MyUserDetails(user.get());
        }
    }

    public User save(User user) {
        user.setPassword(bcryptEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> getUserDetails(String userName) {
        return userRepository.findById(userName);
    }

    public Iterable<User> getAllUserDetails() {
        return userRepository.findAll();
    }

}
