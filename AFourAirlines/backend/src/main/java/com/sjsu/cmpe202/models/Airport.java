package com.sjsu.cmpe202.models;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Airport {
    /*
airport_code
varchar(5) PK
city
varchar(45)
country
varchar(45)
timezone
varchar(45)
name
varchar(45)
    */
    @Id
    @Column(name = "airport_code",length = 10)
    private String airportCode;
    @Column(name = "city")
    private String city;
    @Column(name = "country")
    private String country;
    @Column(name = "timezone")
    private String timezone;
    @Column(name = "name")
    private String name;
}
