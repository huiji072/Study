package com.example.JpaProject.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "ORDERITEM")
public class OrderItem {

    @Id
    @Column(name = "order_item_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private int orderPrice;

    private int count;

}
