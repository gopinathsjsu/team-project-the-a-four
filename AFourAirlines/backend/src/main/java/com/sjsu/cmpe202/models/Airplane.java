package com.sjsu.cmpe202.models;

import lombok.*;

import javax.persistence.*;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Airplane {
    /*
    id
    int AI PK
    make
    varchar(45)
    model
    varchar(45)
    capacity
    varchar(45)
    */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "make")
    private String make;
    @Column(name = "model")
    private String model;
    @Column(name = "capacity")
    private String capacity;
}
