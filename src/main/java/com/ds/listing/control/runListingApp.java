package com.ds.listing.control;

import com.ds.listing.properties.UserProperties;
import com.ds.listing.properties.eBayAuth;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.ejb.Singleton;
import javax.ejb.Startup;

/**
 * Startup
 * Created by bithack on 3/31/15.
 */
@Singleton
@Startup
public class runListingApp {
    @PostConstruct
    private void startup() {
        System.out.println("Setting up server");
        UserProperties.getInstance();
        eBayAuth.getInstance().getApiContenxt();
        System.out.println("Server Started");

    }



    @PreDestroy
    private void shutdown(){

    }
}
