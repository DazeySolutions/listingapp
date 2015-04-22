package com.ds.listing.rest;

import java.util.ArrayList;
import com.ds.listing.model.Listing;

public class UnsoldListData {
    private ArrayList<Listing> listings;
    private int numPages;
    private int numResults;
    
    public ArrayList<Listing> getListings(){
        return this.listings;
    }
    public void setListings(ArrayList<Listing> listings){
        this.listings = listings;
    }
    public int getNumPages(){
        return this.numPages;
    }
    public int getNumResults(){
        return this.numResults;
    }
    public void setNumPages(int numPages){
        this.numPages = numPages;
    }
    public void setNumResults(int numResults){
        this.numResults = numResults;
    }
}
