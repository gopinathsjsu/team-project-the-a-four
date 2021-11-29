package com.sjsu.cmpe202.models;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Flight {
    /*
id int AI PK
name
varchar(45)
source_airport
varchar(45)
dest_airport
varchar(45)
source_terminal
varchar(45)
dest_terminal
varchar(45)
source_gate
varchar(45)
dest_gate
varchar(45)
dep_date
varchar(45)
dep_time
varchar(45)
arr_date
varchar(45)
arr_time
varchar(45)
equipment
varchar(45)
    */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "source_airport")
    private String sourceAirport;
    @Column(name = "dest_airport")
    private String destinationAirport;
    @Column(name = "source_terminal")
    private String sourceTerminal;
    @Column(name = "dest_terminal")
    private String destinationTerminal;
    @Column(name = "source_gate")
    private String sourceGate;
    @Column(name = "dest_gate")
    private String destinationGate;
    @Column(name = "dep_date")
    private LocalDate departureDate;
    @Column(name = "arr_date")
    private LocalDate arrivalDate;
    @Column(name = "dep_time")
    private LocalTime departureTime;
    @Column(name = "arr_time")
    private LocalTime arrivalTime;
    @Column(name = "equipment")
    private int equipment;
    @Column(name = "base_price")
    private int basePrice;
}
