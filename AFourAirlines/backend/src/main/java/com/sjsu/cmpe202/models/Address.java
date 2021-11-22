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
public class Address {
    /*
id
int AI PK
street
varchar(45)
city
varchar(45)
state
varchar(45)
zip
varchar(45)
country
varchar(45)

    */
    @Id
    private int id;
    @Column(name="street")
    private String street;
    @Column(name="city")
    private String city;
    @Column(name="state")
    private String state;
    @Column(name="zip")
    private String zip;
    @Column(name="country")
    private String country;
}
