package com.sjsu.cmpe202.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    //@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer number;
    @Id
    @Column(name = "pnr")
    private String pnr;
    @Column(name = "username")
    private String username;
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "flight")
    private Flight flight;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "seat")
    private Seat seat;
    @Column(name = "price")
    private Integer price;
    @Column(name = "status")
    private String status;
    @Column(name = "identification_number")
    private String identificationNumber;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "dob")
    private LocalDate dateOfBirth;

}