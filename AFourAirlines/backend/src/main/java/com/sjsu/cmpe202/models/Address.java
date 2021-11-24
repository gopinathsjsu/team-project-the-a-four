package com.sjsu.cmpe202.models;

import lombok.*;

import javax.persistence.*;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "street")
    private String street;
    @Column(name = "city")
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "zip")
    private String zip;
    @Column(name = "country")
    private String country;
}
