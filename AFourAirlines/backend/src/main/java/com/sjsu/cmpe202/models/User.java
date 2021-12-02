package com.sjsu.cmpe202.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class User {
    /*
    username
    varchar(15) PK
    password
    varchar(45)
    first_name
    varchar(45)
    last_name
    varchar(45)
    dob
    date
    contact_ph
    varchar(15)
    email
    varchar(45)
    address_id
    int
    identification_number
    varchar(45)
    rewards_id
    int
    is_employee
    tinyint
     */
    @Id
    @Column(length = 15)
    private String username;
    @Column(name = "password")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "dob")
    private LocalDate dateOfBirth;
    @Column(name = "contact_ph")
    private String phone;
    @Column(name = "email")
    private String email;
    //@Column(name = "address_id")
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;
    @Column(name = "identification_number")
    private String identificationNumber;
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "rewards_id")
    private Mileage mileage;
    @Column(name = "role")
    private String role;

}
