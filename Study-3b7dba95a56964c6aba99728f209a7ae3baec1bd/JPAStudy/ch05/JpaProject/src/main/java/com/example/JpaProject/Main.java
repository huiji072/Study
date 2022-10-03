package com.example.JpaProject;

import com.example.JpaProject.entity.Member;
import com.example.JpaProject.entity.Product;

import javax.persistence.*;
import java.util.List;

public class Main {
    static EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("jpabook");


    public static void main(String... args) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();

        save(em);
        find(em);
        findInverse(em);

        TypedQuery<Member> query =
                em.createQuery("select m from Member m", Member.class);
        List<Member> memberList = query.getResultList();

        tx.commit();
        em.close();
        emf.close();
    }


    public static void save(EntityManager em) {

        Product productA = new Product();
        productA.setId("productA");
        productA.setName("상품A");
        em.persist(productA);

        Member member1 = new Member();
        member1.setId("member1");
        member1.setUsername("회원1");
        member1.getProducts().add(productA); //연관관계 설정
        em.persist(member1);

    }

    public static void find(EntityManager em) {

        Member member = em.find(Member.class, "member1");
        List<Product> products = member.getProducts();
        for(Product product : products) {
            System.out.println("product.name = " + product.getName());
        }

    }

    public static void findInverse(EntityManager em) {

        Product product = em.find(Product.class, "ProductA");
        List<Member> members = product.getMembers();
        for(Member member : members) {
            System.out.println("member = " + member.getUsername());
        }

    }

    public static void addProduct(Product product, EntityManager) {
        Member member = em.find(Member.class, "member1");
        List<Product> products = member.getProducts();
        products.add(product);
        product.getMembers().add(this);
    }


}
