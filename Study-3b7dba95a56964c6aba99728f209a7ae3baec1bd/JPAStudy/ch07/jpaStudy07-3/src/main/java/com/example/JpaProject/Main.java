package com.example.JpaProject;



import com.example.JpaProject.entity.Parent;
import com.example.JpaProject.entity.ParentId;

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

        Parent parent = new Parent();
        parent.setId1("myId1");
        parent.setId2("myId2");
        parent.setName("parentName");

        em.persist(parent);

        ParentId parentId = new ParentId("myId1", "myId2");
        Parent parent1 = em.find(Parent.class, parentId);

        tx.commit();
        
        em.close();
        emf.close();
    }
    



}
