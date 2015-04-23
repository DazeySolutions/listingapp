package com.ds.listing.rest;

import com.ds.listing.model.User;
import com.ds.listing.services.UserService;

import java.util.ArrayList;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/users")
public class UserRestService {
  
  @Inject
  private UserService service;
  
  @POST
  @Path("/login")
  @Produces("application/json")
  public User login(@FormParam("user") String user, @FormParam("password") String password) {
      return service.login(user, password);
  }
}
