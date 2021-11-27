package com.sjsu.cmpe202.service;

import com.sjsu.cmpe202.dao.FlightRepository;
import com.sjsu.cmpe202.dao.ReservationRepository;
import com.sjsu.cmpe202.models.Flight;
import com.sjsu.cmpe202.models.Reservation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service @Slf4j
public class ReservationService {
    @Autowired
    ReservationRepository reservationRepository;

    public Optional<Reservation> getReservationById(Integer reservationId) { return reservationRepository.findById(reservationId); }

    public Optional<ArrayList<Reservation>> getReservationsForUser(String username) {
        return reservationRepository.getReservationsForUser(username);
    }
}
