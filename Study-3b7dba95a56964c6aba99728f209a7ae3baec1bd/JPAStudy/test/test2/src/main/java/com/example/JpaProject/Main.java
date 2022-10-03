package com.example.JpaProject;



import javax.persistence.*;
import java.util.List;

public class Main {
    static EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("jpabook");


    public static void main(String... args) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        
        tx.begin();
        //비즈니스 로직
        tx.commit();
        
        em.close();
        emf.close();
    }
    



}
