package com.example.JpaProject.entity;

import javax.persistence.*;

@Entity
public class Child {

    @Id
    private String id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "parent_id1", referencedColumnName = "parent_id1"),
            @JoinColumn(name = "parent_id1", referencedColumnName = "parent_id1")
    })
    private Parent parent;

}
