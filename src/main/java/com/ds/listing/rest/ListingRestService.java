package com.ds.listing.rest;

import com.ds.listing.model.Listing;
import com.ds.listing.services.ListingService;

import java.util.ArrayList;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/rest/list")
public class ListingRestService {
  
  @Inject
  private ListingService service;
  
  @GET
  @Produces("application/json")
  public ArrayList<Listing> getAllListings() {
      return service.getAllListings();
  }
}
