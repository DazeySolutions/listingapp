package com.ds.listing.services;

import com.ds.listing.model.User;

import java.util.ArrayList;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Singleton
public class UserService {
  
    @PersistenceContext(unitName="primary")
    private EntityManager em;
  
    public User login(String userName, String password){
        try{
            Query query = em.createQuery("select u from User u where  u.name = :username AND u.failed < 4").setParameter("username", userName);
            User current = (User)query.getSingleResult();
            System.out.println(current.getPassword()+" - "+password);
            if(current.getPassword() == password){
                System.out.println("Success");
                return current;
            }else{
                current.setFailed(current.getFailed()+1);
                return null;
            }
        }catch (Exception e){
            System.out.println("error occurred");
            return null;
        }
  }
  
}
