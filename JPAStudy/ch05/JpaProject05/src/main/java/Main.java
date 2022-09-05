

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {

    static EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("jpabook");

    public static void main(String[] args) {
//        EntityManager em = emf.createEntityManager();
//        EntityTransaction tx = em.getTransaction();
//        tx.begin();
//
////        testSave(em);
//
//        tx.commit();
//
//        em.close();
//        emf.close();
    }

//    private static void testSave(final EntityManager em) {
//        // 팀1 저장
//        Team team1 = new Team("team1", "팀1");
//        em.persist(team1);
//
//        // 회원1 저장
//        Member member1 = new Member("member1", "회원1");
//        member1.setTeam(team1);  // 연관관계 설정 member1 -> team1
//        em.persist(member1);
//
//        // 회원1 저장
//        Member member2 = new Member("member2", "회원2");
//        member2.setTeam(team1);  // 연관관계 설정 member1 -> team1
//        em.persist(member2);
//    }

}
