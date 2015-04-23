package com.ds.listing.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;


@SuppressWarnings("serial")
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue
    @Column(name="user_id")
    private Long id;
    
    @Column(name="name")
    private String name;
    
    @Column(name="password")
    private String password;
    
    @Column(name="failed")
    private int failed;
    
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public int getFailed(){
        return this.failed;
    }
    
    public void setFailed(int failed){
        this.failed = failed;
    }
    
}
