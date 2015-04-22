package com.ds.listing.rest;

import java.util.ArrayList;

import com.ds.listing.model.Listing;
import com.ds.listing.properties.eBayAuth;
import com.ds.listing.services.ListingService;
import com.ds.listing.services.eBayListingService;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/rest/ebay")
public class EBayRestService {
	
   @Inject
   private eBayAuth auth;
  
   @Inject
   private ListingService listService;
  
   @PersistenceContext(unitName="primary")
   private EntityManager em;
  
   @GET
   @Path("/{page:[0-9][0-9]*}")
   @Produces("application/json")
   public ArrayList<Listing> GetUnSold(@PathParam("page") int page){
     ArrayList<String> retStrings = new ArrayList<>();
     eBayListingService eBayService = new eBayListingService(auth.getApiContext());
     ArrayList<Listing> listings = new ArrayList<>();
     listings = eBayService.getCurrentListings(page);
     return listings;
   }
  
}
