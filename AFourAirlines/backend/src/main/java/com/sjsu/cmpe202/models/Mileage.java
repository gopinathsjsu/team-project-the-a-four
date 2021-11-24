package com.sjsu.cmpe202.models;
import lombok.*;

import javax.persistence.*;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Mileage {
    /*
rewards_number
int AI PK
balance_points
int
*/
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "balance_points")
    private String balancePoints;
}
