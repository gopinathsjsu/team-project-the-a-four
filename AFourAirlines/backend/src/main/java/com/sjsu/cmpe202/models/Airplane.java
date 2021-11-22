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
    private int id;
    @Column(name="make")
    private String make;
    @Column(name="model")
    private String model;
    @Column(name="capacity")
    private String capacity;
}
