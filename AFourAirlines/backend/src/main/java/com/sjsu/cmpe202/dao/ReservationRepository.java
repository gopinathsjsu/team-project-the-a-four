package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.Flight;
import com.sjsu.cmpe202.models.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;

public interface ReservationRepository extends CrudRepository<Reservation, String> {

    @Query(value = "SELECT * FROM reservation WHERE username = :userName", nativeQuery = true)
    ArrayList<Reservation> getReservationsForUser(@Param("userName") String userName);

    @Query(value = "SELECT * FROM reservation WHERE username = :userName AND pnr = :pnr", nativeQuery = true)
    ArrayList<Reservation> getAllReservationsFromUserNameAndPNR(@Param("userName") String userName, @Param("pnr" ) String pnr);


    @Query(value = "SELECT max(number) FROM reservation", nativeQuery = true)
    Integer getLastPNRNumber();

    @Query(value = "SELECT * FROM reservation WHERE pnr = :pnr", nativeQuery = true)
    Optional<ArrayList<Reservation>> getReservationsByPnr(@Param("pnr") String pnr);
}
