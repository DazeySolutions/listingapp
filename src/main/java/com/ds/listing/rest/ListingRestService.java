package com.ds.listing.rest;

import com.ds.listing.model.Listing;
import com.ds.listing.services.ListingService;

import com.ds.listing.services.eBayListingService;
import com.ds.listing.properties.eBayAuth;
import java.util.ArrayList;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;

@Path("/list")
public class ListingRestService {
  
  @Inject
  private ListingService service;
  
  @Inject
  private eBayAuth auth;
  
  @GET
  @Produces("application/json")
  public ArrayList<Listing> getAllListings() {
      return service.getAllListings();
  }
  
  @POST @Consumes("application/json")
  @Path("/new")
  public Response addListing(final Listing input){
      Response r = new Response();
      boolean status = false;
      eBayListingService eBayService = new eBayListingService(auth.getApiContext());
      try{
          status = eBayService.addListing(input);
      }catch(Exception e){
          r.setResponse("unknown error");
      }
      r.setStatus(status);
      
      return r;
  }
}

class Response {
    private boolean status;
    private String response;
    
    public String getResponse(){
        return this.response;
    }
    
    public boolean getStatus(){
        return this.status;
    }
    
    public void setResponse(String response){
        this.response = response;
    }
    
    public void setStatus(boolean status){
        this.status = status;
    }
}