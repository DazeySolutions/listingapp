package com.ds.listing.properties;

import com.ebay.sdk.ApiContext;
import com.ebay.sdk.ApiCredential;

/**
 * ebay auth credentials
 * Created by bithack on 3/31/15.
 */
public class eBayAuth {
    private static eBayAuth _instance = null;
    private ApiContext _apiContext = null;

    protected eBayAuth(){
    }

    public static eBayAuth getInstance(){
        if(_instance == null){
            _instance = new eBayAuth();
        }

        return _instance;
    }

    public ApiContext getApiContenxt(){
        if(_apiContext == null){
            setupContext();
        }
        return _apiContext;
    }

    private void setupContext(){
        _apiContext = new ApiContext();
        ApiCredential cred = _apiContext.getApiCredential();
        cred.seteBayToken(UserProperties.getInstance().getValue("ebaytoken"));
        _apiContext.setApiServerUrl(UserProperties.getInstance().getValue("ebaysoapurl"));
    }

}
