package entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class Member {

    @Id
    @Column(name = "member_id")
    private Long id;

    private String name;

    //주소
    private String city;
    private String street;
    private String zipcode;

}
