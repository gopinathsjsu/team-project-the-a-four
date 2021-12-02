package com.sjsu.cmpe202.service;

import com.sjsu.cmpe202.dao.ReservationRepository;
import com.sjsu.cmpe202.dao.SeatRepository;
import com.sjsu.cmpe202.models.Reservation;
import com.sjsu.cmpe202.models.Seat;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Slf4j
@Transactional
public class ReservationService {


    ReservationRepository reservationRepository;


    SeatRepository seatRepository;

    AtomicInteger integer = new AtomicInteger(1);
    public static final String PNR_PREFIX = "A4";

    public ReservationService(@Autowired ReservationRepository reservationRepository, @Autowired SeatRepository seatRepository) {
        this.reservationRepository = reservationRepository;
        this.seatRepository = seatRepository;
        integer = new AtomicInteger(reservationRepository.getLastPNRNumber() + 1);
    }

    public Optional<Reservation> getReservationById(Integer reservationId) {
        return reservationRepository.findById(reservationId);
    }

    public ArrayList<Reservation> getReservationsForUser(String username) {
        return reservationRepository.getReservationsForUser(username);
    }

    public Reservation save(Reservation reservation) {
        return reservationRepository.save(reservation);
    }


    public String saveAll(List<Reservation> reservations) {
        log.info("Entering ReservationService.saveall");
        String status = "failed";
        try {
            String suffix = String.format("%05d", integer.get());
            String result = PNR_PREFIX.concat(suffix);
            System.out.println("Custom generated sequence is : " + result);
            for (Reservation reservation : reservations) {
                reservation.setPnr(result);
            }
            Object ob = reservationRepository.saveAll(reservations);
            if (ob != null) {
                status = "success";
                integer.incrementAndGet();
            }
        } finally {
            log.info("Exiting ReservationService.saveall");
        }
        return status;
    }

    public String updateReservation(List<Reservation> reservations) {
        log.info("Entering ReservationService.saveall");
        String status = "failed";
        try {
            if ("SCHEDULED".equals(reservations.get(0).getStatus().toUpperCase())) {
                List<Reservation> reservations_db = reservationRepository.getAllReservationsFromUserNameAndPNR(reservations.get(0).getUsername(), reservations.get(0).getPnr());
                List<Seat> seats = new ArrayList<>();
                for (Reservation res : reservations_db) {
                    Seat seat = res.getSeat();
                    seat.setReserved(false);
                    seats.add(seat);
                }
                seatRepository.saveAll(seats);
            }
            Object obj = reservationRepository.saveAll(reservations);
            status = obj != null ? "success" : status;
        } finally {
            log.info("Exiting ReservationService.saveall");
        }
        return status;
    }

    public Optional<ArrayList<Reservation>> getReservationsByPnr(String pnr) {
        return reservationRepository.getReservationsByPnr(pnr);
    }
}
