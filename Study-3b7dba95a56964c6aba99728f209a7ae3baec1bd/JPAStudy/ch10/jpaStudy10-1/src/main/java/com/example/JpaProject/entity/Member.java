package com.example.JpaProject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "Member")
public class Member {

    @Id
    @Column(name = "name")
    private String username;

}
