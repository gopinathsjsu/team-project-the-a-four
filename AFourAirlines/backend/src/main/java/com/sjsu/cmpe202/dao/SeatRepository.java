package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.Seat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface SeatRepository extends CrudRepository<Seat, Integer> {

    @Query("select s from Seat s where s.flightId = ?1 and s.reserved=0")
    ArrayList<Seat> getAvailableSeatsForFlight(Integer flightId);


    @Query("select s from Seat s where s.flightId = ?1")
    ArrayList<Seat> getAllSeatsForFlight(Integer flightId);
}

