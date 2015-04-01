package com.ds.listing.properties;

import java.io.IOException;
import java.util.Properties;
import javax.ejb.Singleton;
import javax.annotation.PostConstruct;

/**
 * Created by bithack on 3/31/15.
 */
 @Singleton
public class UserProperties {
    private Properties props;
    private boolean valid = true;

    @PostConstruct
    private void init(){
        try {
            props = new Properties();
            props.load(getClass().getResourceAsStream("/META-INF/kmhenry.properties"));
        } catch (IOException e) {
            valid = false;
        }
    }

    public boolean isValid(){
        return valid;
    }

    public String getValue(String key){
        return props.getProperty(key);
    }

}
