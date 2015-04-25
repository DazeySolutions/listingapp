package com.ds.listing.rest;

import java.util.ArrayList;

import com.ds.listing.model.Listing;
import com.ds.listing.properties.eBayAuth;
import com.ds.listing.services.ListingService;
import com.ds.listing.services.eBayListingService;
import com.ebay.soap.eBLBaseComponents.RecommendationsType;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/ebay")
public class EBayRestService {
	
   @Inject
   private eBayAuth auth;
  
   @Inject
   private ListingService listService;
  
   @PersistenceContext(unitName="primary")
   private EntityManager em;
  
   @GET
   @Path("/{id}")
   @Produces(MediaType.APPLICATION_JSON)
    public UnsoldListData GetUnSold(@PathParam("id") String id ){
        UnsoldListData returnData = new UnsoldListData();
        ArrayList<String> retStrings = new ArrayList<>();
        eBayListingService eBayService = new eBayListingService(auth.getApiContext());
        int page;
        page = Integer.parseInt(id);
        eBayService.getCurrentListings(page, 20, returnData);
        return returnData;
   }

    @GET
    @Path("/categories")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<RecommendationsType> getCategories(){
        eBayListingService eBayService = new eBayListingService(auth.getApiContext());
        return eBayService.getCategories();
    }
//   @GET
//   @Path("/{id}")
//   @Produces(MediaType.APPLICATION_JSON)
//   public Listing getListing(@PathParam("id") String id){
//       eBayListingService eBayService = new eBayListingService(auth.getApiContext());
//       return eBayService.getItem(id);
//   }
  
}

