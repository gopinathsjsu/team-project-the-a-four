package com.sjsu.cmpe202.models;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Payment {
    /*
id
int AI PK
username
varchar(15)
card_type
varchar(15)
card_number
varchar(45)
expiry
date
name_on_card
varchar(45)
billing_address_id
int
    */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "username")
    private String userName;
    @Column(name = "card_type")
    private String cardType;
    @Column(name = "card_number")
    private String cardNumber;
    @Column(name = "expiry")
    private LocalDate expiryDate;
    @Column(name = "name_on_card")
    private String nameOnCard;
    @Column(name = "billing_address_id")
    private int billingAddressId;
}
