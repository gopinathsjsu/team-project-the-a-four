package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.Reservation;
import com.sjsu.cmpe202.service.ReservationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/api/reservations")
@Slf4j
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @GetMapping("/get-reservation-by-id")
    public ResponseEntity<?> getReservationById(@RequestParam Integer reservationId) throws Exception {
        log.info("Entering getReservationById Api");
        Optional<Reservation> reservation = null;
        try {
            reservation = reservationService.getReservationById(reservationId);
        } catch (Exception e) {
            log.error("Error occured in getReservationById :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getReservationById Api");
        }
        return ResponseEntity.ok(reservation);
    }

    @GetMapping("/get-reservations-for-user")
    public ResponseEntity<?> getReservationsForUser() throws Exception {
        log.info("Entering getReservationsForUser Api");
        ArrayList<Reservation> reservations = null;
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            reservations = reservationService.getReservationsForUser(username);
        } catch (Exception e) {
            log.error("Error occured in getReservationsForUser :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getReservationsForUser Api");
        }
        return ResponseEntity.ok(reservations);
    }

    @PostMapping("/create-reservation")
    public ResponseEntity<?> createReservation(@RequestBody List<Reservation> reservations) throws Exception {
        log.info("Entering createReservation Api");
        String status = null;
        try {
            status = reservationService.saveAll(reservations);
        } catch (Exception e) {
            log.error("Error occured while updating reservation :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        }
        return ResponseEntity.ok(status);
    }

    @PutMapping("/update-reservation")
    public ResponseEntity<?> updateReservation(@RequestBody List<Reservation> reservations) throws Exception {
        log.info("Entering updateReservation Api");
        String status = null;
        try {
            status = reservationService.updateReservation(reservations);
        } catch (Exception e) {
            log.error("Error occured while updating reservation :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        }
        return ResponseEntity.ok(status);
    }

}
