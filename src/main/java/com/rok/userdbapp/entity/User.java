package com.rok.userdbapp.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@Entity
public class User implements Serializable {



    @Column
    private String name;

    @Column
    private char[] password;
    private int id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public char[] getPassword() {
        return password;
    }

    public void setPassword(char[] password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", password=" + Arrays.toString(password) +
                ", id='" + id + '\'' +
                '}';
    }
}
