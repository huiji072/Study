package com.example.JpaProject.entity;

import com.example.JpaProject.DeliveryStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "delivery")
public class Delivery {

    @Id
    @Column(name = "delivery_id")
    private Long id;

    @OneToOne(mappedBy = "delivery")
    private Order order;

    private String city;
    private String street;
    private String zipcode;

    private DeliveryStatus status;

}
