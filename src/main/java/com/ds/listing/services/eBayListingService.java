package com.ds.listing.services;

import com.ds.listing.model.Listing;
import com.ds.listing.model.NameValuePair;
import com.ds.listing.properties.eBayAuth;
import com.ebay.sdk.call.AddFixedPriceItemCall;
import com.ebay.sdk.util.eBayUtil;
import com.ebay.soap.eBLBaseComponents.*;

import java.util.ArrayList;

/**
 * Created by bithack on 3/31/15.
 */
public class eBayListingService {
    private ApiContext apiContext;
    
    public eBayListingService(ApiContext apiContext){
        this.apiContext = apiContext;
    }

    public boolean addListing(Listing listing){
        try {
            ItemType item = buildItemType(listing);
            AddFixedPriceItemCall api = new AddFixedPriceItemCall(apiContext);
            api.setItem(item);

            FeesType fees = api.addFixedPriceItem();
            double listingFee = eBayUtil.findFeeByName(fees.getFee(), "ListingFee").getFee().getValue();
            System.out.println("Listing fee is: " + new Double(listingFee).toString());
            listing.setEbayListingId(item.getItemID());
            return true;
        } catch (Exception e) {
            System.out.println("Error adding item");
            return false;
        }

    }

    private ItemType buildItemType(Listing listing){
        ItemType item = new ItemType();

        item.setTitle(listing.getEbayTitle());

        item.setListingType(ListingTypeCodeType.FIXED_PRICE_ITEM);

        item.setCurrency(CurrencyCodeType.USD);

        item.setListingDuration(ListingDurationCodeType.DAYS_30.value());

        item.setPostalCode("40065");

        item.setCountry(CountryCodeType.US);
        item.setQuantity(listing.getQuantity());
        //Generate Category Type
        CategoryType cat = new CategoryType();
        cat.setCategoryID(listing.getCategory());

        item.setPrimaryCategory(cat);

        item.setConditionID(listing.getEbayCondition());
        item.setConditionDescription(listing.getConditionDescription());
        item.setDescription(listing.getEbayDescription());

        //Generate Listing Designer Type
        ListingDesignerType design = new ListingDesignerType();
        design.setThemeID(158945);
        item.setListingDesigner(design);

        NameValueListArrayType itemSpecificsArrayType = new NameValueListArrayType();
        ArrayList<NameValueListType> itemSpecificsArray = new ArrayList<>();
        for(NameValuePair pair : listing.getNvps()){
            NameValueListType itemSpecific = new NameValueListType();
            itemSpecific.setName(pair.getName());
            itemSpecific.setValue(new String[] { pair.getValue() });
            itemSpecificsArray.add(itemSpecific);
        }
        

        itemSpecificsArrayType.setNameValueList(itemSpecificsArray.toArray(new NameValueListType[itemSpecificsArray.size()]));
        item.setItemSpecifics(itemSpecificsArrayType);

        StorefrontType storeFront = new StorefrontType();
        storeFront.setStoreCategoryID(listing.getStoreCategory());

        item.setStorefront(storeFront);

        //Generate Return Policy
        ReturnPolicyType returnPolicy = new ReturnPolicyType();
        returnPolicy.setReturnsAcceptedOption("ExtendedHolidayReturns");

        item.setReturnPolicy(returnPolicy);

        return item;
    }

}
