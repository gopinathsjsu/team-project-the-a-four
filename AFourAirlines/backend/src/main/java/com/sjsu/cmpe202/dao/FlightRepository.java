package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.Flight;
import org.springframework.data.repository.CrudRepository;

public interface FlightRepository extends CrudRepository<Flight, Integer> {

}