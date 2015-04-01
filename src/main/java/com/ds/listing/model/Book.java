package com.ds.listing.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;


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
    
    @Column(name="asin", columnDefinition="VARCHAR(26) NOT NULL")
    private String asin;
    
    @Column(name="title", columnDefinition="VARCHAR(256) NOT NULL")
    private String title;
    
    @Column(name="author", columnDefinition="VARCHAR(64) NOT NULL")
    private String author;

    @Column(name="hard_cover")
    private boolean hardcover;
    
    private BigDecimal depth;
    private BigDecimal height;
    private BigDecimal width;
    private BigDecimal weightMajor;
    private BigDecimal weightMinor;
    
    private Date publishDate;
    
    @Lob
    private String imageUrl;
    
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public boolean isHardcover() {
        return hardcover;
    }
    public void setHardcover(boolean hardcover) {
        this.hardcover = hardcover;
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

    public String getAsin() {
        return asin;
    }

    public void setAsin(String asin) {
        this.asin = asin;
    }

    public BigDecimal getDepth() {
        return depth;
    }

    public void setDepth(BigDecimal depth) {
        this.depth = depth;
    }

    public BigDecimal getHeight() {
        return height;
    }

    public void setHeight(BigDecimal height) {
        this.height = height;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public BigDecimal getWeightMajor() {
        return weightMajor;
    }

    public void setWeightMajor(BigDecimal weightMajor) {
        this.weightMajor = weightMajor;
    }

    public BigDecimal getWeightMinor() {
        return weightMinor;
    }

    public void setWeightMinor(BigDecimal weightMinor) {
        this.weightMinor = weightMinor;
    }

    public BigDecimal getWidth() {
        return width;
    }

    public void setWidth(BigDecimal width) {
        this.width = width;
    }
}
