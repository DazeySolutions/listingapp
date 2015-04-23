package com.ds.listing.rest;

import com.ds.listing.model.User;
import com.ds.listing.services.UserService;

import java.util.ArrayList;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/users")
public class UserRestService {
  
  @Inject
  private UserService service;
  
  @POST
  @Path("/login")
  @Produces("application/json")
  public User login(@HeaderParam("details") UserDetails details) {
      return service.login(details.getUser(), details.getPassword());
  }
  
}
class UserDetails {
    private String user;
    private String password;
    public String getUser(){
        return this.user;
    }
    public String getPassword(){
        return this.password;
    }
    public void setUser(String user){
        this.user = user;
    }
    public void setPassword(String password){
        this.password = password;
    }
}
