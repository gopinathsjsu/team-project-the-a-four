package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.Optional;

public interface SeatRepository extends CrudRepository<Reservation, Integer> {

    @Query(value = "SELECT * FROM reservation WHERE passenger = :userName", nativeQuery = true)
    ArrayList<Reservation> getAvailableSeatsForFlight(@Param("userName") String userName);

}

