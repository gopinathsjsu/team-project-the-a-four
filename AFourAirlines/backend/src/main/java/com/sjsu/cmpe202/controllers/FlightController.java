package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.models.Flight;
import com.sjsu.cmpe202.service.FlightService;

import java.time.LocalDate;
import java.util.Date;
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
        return ResponseEntity.ok(flightService.getFlightDetailsById(flightId));
    }

    @GetMapping("/get-flights")
    public ResponseEntity<?> getFlights(@RequestParam String sourceAirport, @RequestParam String destinationAirport, @RequestParam String departureDateString, @RequestParam String arrivalDateString) throws Exception {
        LocalDate departureDate = LocalDate.parse(departureDateString);
        LocalDate arrivalDate = LocalDate.parse(arrivalDateString);
        return ResponseEntity.ok(flightService.getFlights(sourceAirport, destinationAirport, departureDate, arrivalDate));
    }

    @PutMapping("/update-flight-details")
    public ResponseEntity<?> updateFlight(@RequestBody Flight flight) throws Exception {
        log.info("flight is {}",flight);
        return ResponseEntity.ok(flightService.save(flight));

    }

    @GetMapping("/get-available-seats")
    public ResponseEntity<?> updateFlight(@RequestParam Integer flightId) throws Exception {
        log.info("flightiD is {}",flightId);
        return ResponseEntity.ok(flightService.getAvailableSeats(flightId));

    }
}
