package com.ds.listing.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@SuppressWarnings("serial")
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = "isbn"), name="books")
public class Book implements Serializable {

    @Id
    @GeneratedValue
    @Column(name="book_id")
    private Long id;
    
    @Column(name="isbn", columnDefinition="VARCHAR(13) NOT NULL")
    private String isbn;
    
    @Column(name="title", columnDefinition="VARCHAR(256) NOT NULL")
    private String title;
    
    @Column(name="author", columnDefinition="VARCHAR(64) NOT NULL")
    private String author;
    
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    
    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

}
