package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.JwtResponse;
import com.sjsu.cmpe202.models.Reservation;
import com.sjsu.cmpe202.models.User;
import com.sjsu.cmpe202.service.UserService;
import com.sjsu.cmpe202.validators.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
@Slf4j
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody User user) {
        log.info("Entering authenticate Api");
        String token = null;
        try {
            log.debug("user request is {}", user);
            authenticate(user.getUsername(), user.getPassword());

            final UserDetails userDetails = userService
                    .loadUserByUsername(user.getUsername());

            token = jwtTokenUtil.generateToken(userDetails);
            log.debug("Token generated is {}", token);
        } catch (Exception e) {
            log.error("Exception occured {}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting authenticate Api");
        }
        return ResponseEntity.ok(new JwtResponse(token));

    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws Exception {
        log.info("Entering registerUser Api");
        String status = null;
        try {
            log.debug("user request is {}", user);
            status = userService.save(user);
        } catch (Exception e) {
            log.error("Exception occured {}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting registerUser Api");
        }
        return ResponseEntity.ok(status);
    }

    @PutMapping("/update-user-details")
    public ResponseEntity<?> updateUser(@RequestBody User user) throws Exception {
        log.info("Entering updateUser Api");
        Optional<Reservation> reservation = null;
        String status = null;
        try {
            status = userService.save(user);
        } catch (Exception e) {
            log.error("Error occured in getReservationById :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting updateUser Api");
        }
        return ResponseEntity.ok(status);
    }

    @GetMapping("/get-user-details")
    public ResponseEntity<?> getUserDetails(@RequestParam String username) throws Exception {
        log.info("Entering getUserDetails Api");
        Optional<User> user = null;
        try {
            user = userService.getUserDetails(username);
        } catch (Exception e) {
            log.error("Error occured in getReservationById :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getUserDetails Api");
        }
        return ResponseEntity.ok(user);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            log.error("Exception occured {}", e);
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            log.error("INVALID_CREDENTIALS {}", e);
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
