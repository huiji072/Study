//package entity;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Getter @Setter
//public class Team {
//
//    @Id
//    @Column(name = "team_id")
//    private String id;
//
//    private String name;
//
//    @OneToMany(mappedBy = "team")
//    private List<Member> members = new ArrayList<Member>();
//
//    public Team() {
//    }
//
//    public Team(final String id, final String name) {
//        this.id = id;
//        this.name = name;
//    }
//}
