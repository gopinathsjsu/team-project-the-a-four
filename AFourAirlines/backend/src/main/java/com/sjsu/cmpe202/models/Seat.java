package com.sjsu.cmpe202.models;
import lombok.*;

import javax.persistence.*;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Seat {
    /*
id
int AI PK
number
varchar(10)
airplane
int
reserved
tinyint(1)
    */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "number")
    private String number;
    @Column(name = "airplane")
    private int airplane;
    @Column(name = "flight_id")
    private int flightId;
    @Column(name = "reserved")
    private boolean reserved;
    @Column(name = "price")
    private int price;
}
