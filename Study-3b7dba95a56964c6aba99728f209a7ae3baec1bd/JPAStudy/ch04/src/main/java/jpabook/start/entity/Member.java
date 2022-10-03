package jpabook.start.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "MEMEBER_ID")
    private Long id;

    private String name;
    
    //주소
    private String city;
    private String street;
    private String zipcode;
    
}

/*

식별자는 @Id와 @GeneratedValud를 사용해서 데이터베이스에서 자동 생성.
@GeneratedValue 의 기본 생성 전략은 AUTO이므로 선택한 데이터베이스 방언에 따라
IDENTITY, SEQUENCE, TABLE 중 하나가  선택된다.
H2 데이터베이스는 SEQUENCE를 사용한다.

 */
