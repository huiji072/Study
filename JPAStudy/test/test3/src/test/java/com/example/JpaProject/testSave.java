package com.example.JpaProject;

import com.example.JpaProject.entity.Member;
import org.junit.jupiter.api.Test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class testSave {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpabook");
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();

    @Test
    public void save(EntityManager em) {

        Team team1 = new Team("team1", "팀1");
        em.persist(team1);

        Member member1 = new Member("member1", "회원1");
        member1.setTeam(team1);
        em.persist(member1);

        Member member2 = new Member("member2", "회원2");
        member1.setTeam(team1);
        em.persist(member2);

    }




}
