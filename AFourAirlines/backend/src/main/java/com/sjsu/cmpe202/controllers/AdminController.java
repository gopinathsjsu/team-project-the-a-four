package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.JwtResponse;
import com.sjsu.cmpe202.models.Reservation;
import com.sjsu.cmpe202.models.User;
import com.sjsu.cmpe202.service.ReservationService;
import com.sjsu.cmpe202.service.UserService;
import com.sjsu.cmpe202.validators.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api/admin")
@Slf4j
public class AdminController {

    @Autowired
    UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody User user) {
        String token = null;
        try {
            log.error("user request is {}", user);
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

    @GetMapping("/get-all-user-details")
    public ResponseEntity<?> getAllUserDetails() throws Exception {
        log.info("Entering getAllUserDetails Api");
        Iterable<User> userList = null;
        try {
            userList = userService.getAllUserDetails();
        } catch (Exception e) {
            log.error("Error occured in getAllUserDetails :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getAllUserDetails Api");
        }
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/get-all-reservations")
    public ResponseEntity<?> getAllReservations() throws Exception {
        log.info("Entering getReservationsForUser Api");
        Iterable<Reservation> reservations = null;
        try {
            reservations = reservationService.getAllReservations();
        } catch (Exception e) {
            log.error("Error occured in getReservationsForUser :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getReservationsForUser Api");
        }
        return ResponseEntity.ok(reservations);
    }
}
