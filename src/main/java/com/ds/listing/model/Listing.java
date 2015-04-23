package com.ds.listing.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Listings
 * Created by bithack on 3/30/15.
 */

@SuppressWarnings("serial")
@Entity
public class Listing implements Serializable{
    @Id
    @Column(name="listing_id")
    private Long id;

    private String ebayListingId;

    @OneToOne(fetch = FetchType.EAGER)
    private Book book;

    @Column(name="ebay_title", columnDefinition = "varchar(80) NOT NULL")
    private String ebayTitle;

    @Column(name="ebay_price")
    private Double ebayPrice;

    @Column(name="ebay_condition_description", columnDefinition = "varchar(80) NOT NULL")
    private String conditionDescription;

    @Column(name = "ebay_condition")
    private int ebayCondition;

    @Column(name="amazon_condition")
    private int amzCondition;

    @Column(name="amazon_price")
    private Double amzPrice;

    @OneToMany(mappedBy = "owner")
    private List<NameValuePair> nvps;

    private boolean dustJacket;
    private boolean bookClub;
    private boolean firstEdition;
    private boolean firstPrinting;
    private boolean illustrated;

    private boolean status;
    
    private String category;
    private long storeCategory;
    
    private int quantity;

    @Lob
    private String ebayDescription;

    public int getAmzCondition() {
        return amzCondition;
    }

    public void setAmzCondition(int amzCondition) {
        this.amzCondition = amzCondition;
    }

    public String getConditionDescription() {
        return conditionDescription;
    }

    public void setConditionDescription(String conditionDescription) {
        this.conditionDescription = conditionDescription;
    }

    public int getEbayCondition() {
        return ebayCondition;
    }

    public void setEbayCondition(int ebayCondition) {
        this.ebayCondition = ebayCondition;
    }

    public String getEbayDescription() {
        return ebayDescription;
    }

    public void setEbayDescription(String ebayDescription) {
        this.ebayDescription = ebayDescription;
    }

    public List<NameValuePair> getNvps() {
        return nvps;
    }

    public void setNvps(List<NameValuePair> nvps) {
        this.nvps = nvps;
    }

    public Double getAmzPrice() {
        return amzPrice;
    }

    public void setAmzPrice(Double amzPrice) {
        this.amzPrice = amzPrice;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Double getEbayPrice() {
        return ebayPrice;
    }

    public void setEbayPrice(Double ebayPrice) {
        this.ebayPrice = ebayPrice;
    }

    public String getEbayTitle() {
        return ebayTitle;
    }

    public void setEbayTitle(String ebayTitle) {
        this.ebayTitle = ebayTitle;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isBookClub() {
        return bookClub;
    }

    public void setBookClub(boolean bookClub) {
        this.bookClub = bookClub;
    }

    public boolean isDustJacket() {
        return dustJacket;
    }

    public void setDustJacket(boolean dustJacket) {
        this.dustJacket = dustJacket;
    }

    public boolean isFirstEdition() {
        return firstEdition;
    }

    public void setFirstEdition(boolean firstEdition) {
        this.firstEdition = firstEdition;
    }

    public boolean isFirstPrinting() {
        return firstPrinting;
    }

    public void setFirstPrinting(boolean firstPrinting) {
        this.firstPrinting = firstPrinting;
    }

    public boolean isIllustrated() {
        return illustrated;
    }

    public void setIllustrated(boolean illustrated) {
        this.illustrated = illustrated;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public long getStoreCategory() {
        return storeCategory;
    }

    public void setStoreCategory(long storeCategory) {
        this.storeCategory = storeCategory;
    }

    public String getEbayListingId() {
        return ebayListingId;
    }

    public void setEbayListingId(String ebayListingId) {
        this.ebayListingId = ebayListingId;
    }
}
