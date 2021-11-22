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

public class Mileage {
    /*
rewards_number
int AI PK
balance_points
int
*/
    @Id
    private int id;
    @Column(name="balance_points")
    private String balancePoints;
}
