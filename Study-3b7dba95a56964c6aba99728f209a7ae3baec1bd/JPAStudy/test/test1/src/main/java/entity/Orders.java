package entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.text.DateFormat;
import java.util.Date;

@Entity
@Getter @Setter
public class Orders {

    @Id @GeneratedValue
    @Column(name = "order_id")
    private Long id;

    @ManyToOne
    @Column(name = "member_id")
    private Long member;

    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

    private String status;

}
