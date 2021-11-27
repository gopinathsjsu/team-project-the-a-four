package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.Reservation;
import com.sjsu.cmpe202.models.User;
import com.sjsu.cmpe202.service.ReservationService;
import com.sjsu.cmpe202.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@RestController
@CrossOrigin
@RequestMapping("/api/reservations")
@Slf4j
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @GetMapping("/get-reservation-by-id")
    public ResponseEntity<?> getReservationById(@RequestParam Integer reservationId) throws Exception {
        return ResponseEntity.ok(reservationService.getReservationById(reservationId));
    }

    @GetMapping("/get-reservations-for-user")
    public ResponseEntity<?> getReservationsForUser() throws Exception {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return ResponseEntity.ok(reservationService.getReservationsForUser(username));
    }

    @PostMapping("/create-reservation")
    public ResponseEntity<?> createReservation(@RequestBody Reservation reservation) throws Exception {
        return ResponseEntity.ok(reservationService.save(reservation));
    }

    @PutMapping("/update-reservation")
    public ResponseEntity<?> updateReservation(@RequestBody Reservation reservation) throws Exception {
        return ResponseEntity.ok(reservationService.save(reservation));
    }

}
