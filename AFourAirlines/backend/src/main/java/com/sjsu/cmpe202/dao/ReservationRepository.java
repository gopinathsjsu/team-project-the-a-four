package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
}
