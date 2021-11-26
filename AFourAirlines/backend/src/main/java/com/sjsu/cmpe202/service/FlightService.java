package com.sjsu.cmpe202.service;

import com.sjsu.cmpe202.dao.FlightRepository;
import com.sjsu.cmpe202.models.Flight;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

@Service @Slf4j
public class FlightService {
    @Autowired
    FlightRepository flightRepository;

    public Optional<Flight> getFlightDetailsById(Integer flightId) { return flightRepository.findById(flightId); }

    public Optional<ArrayList<Flight>> getFlights(String sourceAirport, String destinationAirport, LocalDate departureDate, LocalDate arrivalDate) {
        return flightRepository.getFlights(sourceAirport, destinationAirport, departureDate, arrivalDate);
    }
}
