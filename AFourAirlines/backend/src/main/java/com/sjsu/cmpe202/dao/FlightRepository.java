package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.Flight;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

public interface FlightRepository extends CrudRepository<Flight, Integer> {
    @Query(value = "SELECT * FROM flight WHERE source_airport = :sourceAirport AND dest_airport = :destinationAirport AND dep_date >= :departureDate AND arr_date <= :arrivalDate", nativeQuery = true)
    Optional<ArrayList<Flight>> getFlights(@Param("sourceAirport") String sourceAirport,
                                           @Param("destinationAirport") String destinationAirport, @Param("departureDate") LocalDate departureDate, @Param("arrivalDate") LocalDate arrivalDate);
}