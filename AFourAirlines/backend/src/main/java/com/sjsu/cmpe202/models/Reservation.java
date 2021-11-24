package com.sjsu.cmpe202.models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    /*
number
int AI PK
PNR
varchar(5)
passenger_id
varchar(15)
flight_id
int
seat_id
int
price
int
checked_in
tinyint
    */
    @Id
    private int number;
    @Column(name = "PNR")
    private String PNR;
    @Column(name = "passenger_id")
    private String passengerId;
    @Column(name = "flight_id")
    private int flightId;
    @Column(name = "seat_id")
    private int seatId;
    @Column(name = "price")
    private int price;
    @Column(name = "checked_in")
    private boolean checkedIn;
}
