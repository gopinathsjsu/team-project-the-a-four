package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.Flight;
import com.sjsu.cmpe202.models.Reservation;
import com.sjsu.cmpe202.service.FlightService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@Slf4j
@RequestMapping("/api/flights")
public class FlightController {
    @Autowired
    FlightService flightService;

    @GetMapping("/get-flight-details-by-id")
    public ResponseEntity<?> getFlightDetailsById(@RequestParam Integer flightId) throws Exception {
        log.info("Entering getFlightDetailsById Api");
        Optional<Flight> flight = null;
        try {
            flight = flightService.getFlightDetailsById(flightId);
        } catch (Exception e) {
            log.error("Error occured in getReservationById :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getFlightDetailsById Api");
        }
        return ResponseEntity.ok(flight);
    }

    @GetMapping("/get-flights")
    public ResponseEntity<?> getFlights(@RequestParam String sourceAirport, @RequestParam String destinationAirport, @RequestParam String departureDateString, @RequestParam String arrivalDateString) throws Exception {
        log.info("Entering getFlights Api");
        Optional<ArrayList<Flight>> flights = null;
        try {
            LocalDate departureDate = LocalDate.parse(departureDateString);
            LocalDate arrivalDate = LocalDate.parse(arrivalDateString);
            flights = flightService.getFlights(sourceAirport, destinationAirport, departureDate, arrivalDate);
        } catch (Exception e) {
            log.error("Error occured in getFlights :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting getFlights Api");
        }
        return ResponseEntity.ok(flights);
    }

    @PutMapping("/update-flight-details")
    public ResponseEntity<?> updateFlight(@RequestBody Flight flight) throws Exception {
        log.info("Entering updateFlight Api");
        String status = null;
        try {
            status = flightService.save(flight);
        } catch (Exception e) {
            log.error("Error occured in updateFlight :{}", e);
            return ResponseEntity.status(400).body(e.getMessage());
        } finally {
            log.info("Exiting updateFlight Api");
        }
        return ResponseEntity.ok(status);

    }

    @GetMapping("/get-available-seats")
    public ResponseEntity<?> getAvailableSeats(@RequestParam Integer flightId) throws Exception {
        log.info("flightiD is {}", flightId);
        return ResponseEntity.ok(flightService.getAvailableSeats(flightId));
    }

    @GetMapping("/get-all-seats")
    public ResponseEntity<?> getAllSeats(@RequestParam Integer flightId) throws Exception {
        log.info("flightiD is {}", flightId);
        return ResponseEntity.ok(flightService.getAllSeats(flightId));
    }
}
