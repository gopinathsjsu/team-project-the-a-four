package com.sjsu.cmpe202.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    private Integer number;
    @Column(name = "PNR")
    private String PNR;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "passenger")
    private User passenger;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "flight")
    private Flight flight;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "seat")
    private Seat seat;
    @Column(name = "price")
    private Integer price;
    @Column(name = "status")
    private String status;
}