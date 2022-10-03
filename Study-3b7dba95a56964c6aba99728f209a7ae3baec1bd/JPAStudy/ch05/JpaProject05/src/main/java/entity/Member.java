//package entity;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import javax.persistence.*;
//
//
//@Entity
//@Getter
//@Setter
//public class Member {
//
//    @Id
//    @Column(name = "member_id")
//    private String id;
//
//    private String username;
//
//    // 연관관계 매핑
//    @ManyToOne
////      (cascade = {CascadeType.ALL})
//    @JoinColumn(name = "team_id")
//    private Team team;
//
//    public Member() {
//    }
//
//    public Member(final String id, final String username) {
//        this.id = id;
//        this.username = username;
//    }
//
//}
