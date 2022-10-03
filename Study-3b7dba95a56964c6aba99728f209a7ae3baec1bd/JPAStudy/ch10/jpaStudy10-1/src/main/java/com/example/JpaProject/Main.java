package com.example.JpaProject;

import com.example.JpaProject.entity.Member;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.util.List;

@Slf4j
public class Main {
    static EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("jpabook");


    public static void main(String... args) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        
        tx.begin();
        //비즈니스 로직

        String jpql = "select m from Member as m where m.username = 'kim'";
        List<Member> resultList = em.createQuery(jpql, Member.class).getResultList();

        log.info("resultList : " + resultList);

        tx.commit();
        
        em.close();
        emf.close();
    }
    



}
