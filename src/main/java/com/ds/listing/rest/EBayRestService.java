package com.ds.listing.rest;

import java.util.ArrayList;

import com.ds.listing.model.Listing;
import com.ds.listing.properties.eBayAuth;
import com.ds.listing.services.ListingService;
import com.ds.listing.services.eBayListingService;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/rest/ebay")
public class EBayRestService {
	
   @Inject
   private eBayAuth auth;
  
   @Inject
  	private ListingService listService;

   @Inject
   private EntityManager em;
  
   @GET
   @Produces("application/json")
   private ArrayList<String> RelistUnSold(){
     ArrayList<String> retStrings = new ArrayList<>();
     eBayListingService eBayService = new eBayListingService(auth.getApiContext());
     ArrayList<Listing> listings = new ArrayList<>();
     listings = eBayService.getCurrentListings();
     return retStrings;
   }
  
}
