package com.ds.listing.services;

import com.ds.listing.model.Listing;

import java.util.ArrayList;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Singleton
public class ListingService {
  
  @PersistenceContext(unitName="primary")
  private EntityManager em;
  
  public ArrayList<Listing> getAllListings(){
      Query query = em.createQuery("select l from Listing");
      return (ArrayList<Listing>)query.getResultList();
  }
  
}
