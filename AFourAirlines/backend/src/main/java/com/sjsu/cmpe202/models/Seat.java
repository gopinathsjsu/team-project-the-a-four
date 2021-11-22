package com.sjsu.cmpe202.models;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity

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
    private int id;
    @Column(name="number")
    private String number;
    @Column(name="airplane")
    private int airplane;
    @Column(name="flight_id")
    private int flightId;
    @Column(name="reserved")
    private boolean reserved;
}
