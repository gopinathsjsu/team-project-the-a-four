package com.sjsu.cmpe202.service;

import com.sjsu.cmpe202.dao.FlightRepository;
import com.sjsu.cmpe202.dao.SeatRepository;
import com.sjsu.cmpe202.models.Flight;
import com.sjsu.cmpe202.models.Seat;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;

@Service @Slf4j @Transactional
public class FlightService {
    @Autowired
    FlightRepository flightRepository;

    @Autowired
    SeatRepository seatRepository;

    public Optional<Flight> getFlightDetailsById(Integer flightId) { return flightRepository.findById(flightId); }

    public Optional<ArrayList<Flight>> getFlights(String sourceAirport, String destinationAirport, LocalDate departureDate, LocalDate arrivalDate) {
        return flightRepository.getFlights(sourceAirport, destinationAirport, departureDate, arrivalDate);
    }

    public Flight save(Flight flight) {
        return flightRepository.save(flight);
    }

    public ArrayList<Seat> getAvailableSeats(Integer flightId) {
        return seatRepository.getAvailableSeatsForFlight(flightId);
    }

    public ArrayList<Seat> getAllSeats(Integer flightId) {
        return seatRepository.getAllSeatsForFlight(flightId);
    }
}
