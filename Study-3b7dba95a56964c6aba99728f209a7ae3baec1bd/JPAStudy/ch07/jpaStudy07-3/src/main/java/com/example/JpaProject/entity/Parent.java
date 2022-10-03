package com.example.JpaProject.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(ParentId.class)
@Getter @Setter
public class Parent {

    @Id
    @Column(name = "parent_id1")
    private String id1;

    @Id
    @Column(name = "parend_id2")
    private String id2;

    private String name;

}
