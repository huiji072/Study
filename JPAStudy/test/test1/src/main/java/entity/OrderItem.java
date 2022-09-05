package entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Getter @Setter
public class OrderItem {

    @Id
    @Column(name = "order_item_id")
    private Long id;

    @ManyToOne
    @Column(name = "order_id")
    private Long orders;

    @ManyToOne
    @Column(name = "item_id")
    private Long item;

    private int orderPrice;

    private int count;

}
