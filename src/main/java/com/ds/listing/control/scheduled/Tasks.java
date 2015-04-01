package com.ds.listing.control.scheduled;

import com.ds.listing.model.Listing;
import com.ds.listing.services.eBayListingService;
import com.ds.listing.properties.eBayAuth;

import javax.ejb.Schedule;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;
import javax.inject.Inject;

/**
 * Scheduled Tasks
 * Created by bithack on 3/31/15.
 */
@Stateless
public class Tasks {

    @Inject
    private eBayAuth auth;

    @PersistenceContext(unitName="primary")
    private EntityManager em;

    @Schedule(second = "*/15", minute = "*", hour = "*")
    public void checkForNewListings() {
        System.out.println(auth.getVersion());
        eBayListingService listingService = new eBayListingService(auth.getApiContext());
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

}
