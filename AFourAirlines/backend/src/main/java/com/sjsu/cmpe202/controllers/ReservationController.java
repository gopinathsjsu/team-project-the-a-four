package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.service.ReservationService;
import com.sjsu.cmpe202.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    //getReservationById
    //getReservationsForUser
    //getAllReservations
    //createReservationForUser
    //updateReservation
}
