package com.rok.userdbapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Arrays;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@Entity
public class User implements Serializable {



    @Column(name = "uname")
    private String name;
    @Column(name = "upass")
    private char[] password;
    private String id;

    @Id
    public String getId() {
        return id;
    }

    public void setId(String id) {
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
