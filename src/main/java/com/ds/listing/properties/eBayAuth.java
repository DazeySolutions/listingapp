package com.ds.listing.properties;

import com.ebay.sdk.ApiContext;
import com.ebay.sdk.ApiCredential;
import java.util.Random;
import javax.ejb.Singleton;
import javax.annotation.PostConstruct;

/**
 * ebay auth credentials
 * Created by bithack on 3/31/15.
 */
@Singleton
public class eBayAuth {
    
    private ApiContext _apiContext = null;
    private int _version = 0;

    @PostConstruct
    private void init(){
        Random randomGenerator = new Random();
        _version = randomGenerator.nextInt(1000000);
        System.out.println("eBay Auth: ID# "+ Integer.toString(_version));
        setupContext();
    }

    public ApiContext getApiContext(){
        if(_apiContext == null){
            setupContext();
        }
        return _apiContext;
    }
    
    public String getVersion(){
        return "V - " + Integer.toString(_version);
    }

    private void setupContext(){
        _apiContext = new ApiContext();
        ApiCredential cred = _apiContext.getApiCredential();
        cred.seteBayToken(UserProperties.getInstance().getValue("ebaytoken"));
        _apiContext.setApiServerUrl(UserProperties.getInstance().getValue("ebaysoapurl"));
    }
    

}
