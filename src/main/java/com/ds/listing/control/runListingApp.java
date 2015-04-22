package com.ds.listing.control;

import com.ds.listing.properties.UserProperties;
import com.ds.listing.properties.eBayAuth;
import com.ds.listing.model.Listing;
import com.ds.listing.services.eBayListingService;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.ejb.Singleton;
import javax.ejb.Schedule;
import javax.ejb.Startup;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

/**
 * Startup
 * Created by bithack on 3/31/15.
 */
@Singleton
@Startup
public class runListingApp {
    @Inject
    private UserProperties props;
    
    @Inject
    private eBayAuth auth;
    
    @PersistenceContext(unitName="primary")
    private EntityManager em;

    @Schedule(second = "*/15", minute = "*", hour = "*")
    public void checkForNewListings() {
        eBayListingService listingService = new eBayListingService(auth.getApiContext());
//        listingService.getCurrentListings();
        List<Listing> listings = findListings();
        for(Listing item : listings){
            if(listingService.addListing(item)){
                item.setStatus(true);
                em.persist(item);
            }
        }
     }
    private List<Listing> findListings(){
        Query query = em.createQuery("Select l from Listing l where l.status = false");
        return (List<Listing>) query.getResultList();
    }
    
    @PostConstruct
    private void startup() {
        System.out.println("Server Started");
    }



    @PreDestroy
    private void shutdown(){

    }
}
