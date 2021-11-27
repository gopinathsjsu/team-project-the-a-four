package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.JwtResponse;
import com.sjsu.cmpe202.models.User;
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

    @PostMapping("/authenticate")
    public ResponseEntity<JwtResponse> authenticate(@RequestBody User user) {
        String token = null;
        try {
            log.error("user request is {}",user);
            authenticate(user.getUsername(), user.getPassword());

            final UserDetails userDetails = userService
                    .loadUserByUsername(user.getUsername());

            token = jwtTokenUtil.generateToken(userDetails);
        } catch (Exception e) {
            log.error("Exception occured {}", e);
            throw new BadCredentialsException(user.getUsername());
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
        return ResponseEntity.ok(userService.getAllUserDetails());
    }

    @GetMapping("/hello")
    public String helloAdmin() {
        return "hello admin";
    }
}
