package com.rok.userdbapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;

/**
 * Created by RoK.
 * All rights reserved =)
 */
@Entity
@Table(name = "USER_TBL")
public class User implements Serializable {

    private static long serialVersionUID = 65473829L;


    private String name;
    private char[] password;
    private UserType type;
    private Date dateCreated;
    private int id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "UNAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name="UPASS")
    public char[] getPassword() {
        return password;
    }

    public void setPassword(char[] password) {
        this.password = password;
    }

    @Column(name="UTYPE")
    @Enumerated(EnumType.STRING)
    public UserType getType() {
        return type;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    @Temporal(TemporalType.DATE)
    @Column(name = "DATE_CREATED")
    @JsonFormat(pattern="dd.MM.yyyy")
    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", password=" + Arrays.toString(password) +
                ", id='" + id + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
