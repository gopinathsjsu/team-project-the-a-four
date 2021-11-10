package com.sjsu.cmpe202.models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
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
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="dob")
    private LocalDate dateOfBirth;
    @Column(name="contact_ph")
    private String phone;
    @Column(name="email")
    private String email;
    @Column(name="address_id")
    private Integer addressId;
    @Column(name="identification_number")
    private String identificationNumber;
    @Column(name="rewards_id")
    private Integer rewardsId;
    @Column(name="is_employee")
    private Boolean isEmployee;
}
