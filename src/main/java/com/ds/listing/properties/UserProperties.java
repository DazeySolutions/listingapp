package com.ds.listing.properties;

import java.io.IOException;
import java.util.Properties;

/**
 * Created by bithack on 3/31/15.
 */
public class UserProperties {
    private static UserProperties _instance = null;

    private Properties props;

    private boolean valid = true;

    protected UserProperties(){
        try {
            props = new Properties();
            props.load(getClass().getResourceAsStream("/META-INF/kmhenry.properties"));
        } catch (IOException e) {
            //squash error
            valid = false;
        }
    }

    public boolean isValid(){
        return valid;
    }

    public static UserProperties getInstance(){
        if(_instance == null){
            _instance = new UserProperties();
        }
        return _instance;
    }

    public String getValue(String key){
        return props.getProperty(key);
    }

}
