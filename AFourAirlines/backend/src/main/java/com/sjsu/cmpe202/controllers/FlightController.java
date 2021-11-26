package com.sjsu.cmpe202.controllers;

import com.sjsu.cmpe202.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
    @Autowired
    FlightService flightService;

    @GetMapping("/get-flight-details-by-id")
    public ResponseEntity<?> getFlightDetailsById(@RequestParam Integer flightId) throws Exception {
        return ResponseEntity.ok(flightService.getFlightDetailsById(flightId));
    }
}
