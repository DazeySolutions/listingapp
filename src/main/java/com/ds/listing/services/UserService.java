package com.ds.listing.services;

import com.ds.listing.model.Listing;

import java.util.ArrayList;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Singleton
public class UserService {
  
  @PersistenceContext(unitName="primary")
  private EntityManager em;
  
  public User login(String userName){
      Query query = em.createQuery("select u from User u where  u.name = :user AND u.failed < 4").setParameter("user", userName);
      User current = (User)query.getSingleResult();
      if(current.getPassword() == password){
          return current;
      }else{
          current.setFailed(current.getFailed()+1);
          return null;
      }
  }
  
}
