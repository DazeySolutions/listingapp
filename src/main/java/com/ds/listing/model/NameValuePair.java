package com.ds.listing.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Name Value Pair
 * Created by bithack on 3/30/15.
 */

@SuppressWarnings("serial")
@Entity
public class NameValuePair implements Serializable{
    @Id
    @Column(name="nvp_id")
    private Long id;

    private String name;
    private String value;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="owner")
    private Listing owner;

    public Listing getOwner() {
        return owner;
    }

    public void setOwner(Listing owner) {
        this.owner = owner;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
