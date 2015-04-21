package com.ds.listing.services;

import com.ds.listing.model.Listing;
import com.ds.listing.model.NameValuePair;
import com.ebay.sdk.TimeFilter;
import com.ebay.sdk.call.AddFixedPriceItemCall;
import com.ebay.sdk.call.GetSellerListCall;
import com.ebay.sdk.util.eBayUtil;
import com.ebay.soap.eBLBaseComponents.*;
import com.ebay.sdk.ApiContext;

import java.util.ArrayList;
import java.util.Calendar;

/**
 * Created by bithack on 3/31/15.
 */
public class eBayListingService {
    private ApiContext apiContext;

    public eBayListingService(ApiContext apiContext) {
        this.apiContext = apiContext;
    }

    public void getCurrentListings() {
        try {
            GetSellerListCall api = new GetSellerListCall(apiContext);
            api.setAdminEndedItemsOnly(false);
            Calendar timeFrom = Calendar.getInstance();
            timeFrom.add(Calendar.DATE, -121);
            Calendar timeTo = Calendar.getInstance();
            timeTo.add(Calendar.DATE, -1);
            TimeFilter endTimeFilter = new TimeFilter(timeFrom, timeTo);
            api.setEndTimeFilter(endTimeFilter);
            api.setGranularityLevel(GranularityLevelCodeType.FINE);
            PaginationType pagType = new PaginationType();
            pagType.setEntriesPerPage(10);
            pagType.setPageNumber(0);
            api.setPagination(pagType);
            ItemType[] items = api.getSellerList();
            for (ItemType item : items) {
                System.out.println(item.getItemID() + " - " + item.getTitle());
            }
        } catch (Exception e) {

        }
    }

    public boolean addListing(Listing listing) {
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

    private ItemType buildItemType(Listing listing) {
        ItemType item = new ItemType();

        item.setTitle(listing.getEbayTitle());

        item.setListingType(ListingTypeCodeType.FIXED_PRICE_ITEM);

        item.setCurrency(CurrencyCodeType.USD);

        setPrice(item, listing.getEbayPrice());
        item.setQuantity(listing.getQuantity());

        item.setListingDuration(ListingDurationCodeType.DAYS_30.value());

        item.setPostalCode("40065");
        item.setLocation("Shelbyville");
        item.setCountry(CountryCodeType.US);
        //Generate Category Type
        CategoryType cat = new CategoryType();
        cat.setCategoryID(listing.getCategory());

        item.setPrimaryCategory(cat);

        item.setConditionID(listing.getEbayCondition());
        item.setConditionDescription(listing.getConditionDescription());
        item.setDescription(listing.getEbayDescription());

        //Generate Listing Designer Type
        ListingDesignerType design = new ListingDesignerType();
        design.setThemeID(223353102);
        item.setListingDesigner(design);

        setItemSpecifics(item, listing);
        setStoreFront(item, listing.getStoreCategory());
        setPicture(item, listing);
        setPrimaryCategory(item, listing.getCategory());
        setProductLiting(item, listing.getBook().getIsbn());

        item.setCategoryBasedAttributesPrefill(true);
        item.setCategoryMappingAllowed(true);

        BuyerPaymentMethodCodeType[] pymtMethods = new BuyerPaymentMethodCodeType[4];
        pymtMethods[0] = BuyerPaymentMethodCodeType.VISA_MC;
        pymtMethods[1] = BuyerPaymentMethodCodeType.DISCOVER;
        pymtMethods[2] = BuyerPaymentMethodCodeType.AM_EX;
        pymtMethods[3] = BuyerPaymentMethodCodeType.PAY_PAL;
        item.setPaymentMethods(pymtMethods);

        item.setPayPalEmailAddress("kmhenry70@hotmail.com");
        item.setDispatchTimeMax(0);

        setShippingDetails(item, listing);
        setReturnPolicy(item);
        return item;
    }

    private void setReturnPolicy(ItemType item) {
        ReturnPolicyType rpt = new ReturnPolicyType();
        rpt.setReturnsAcceptedOption("ReturnsAccepted");
        rpt.setExtendedHolidayReturns(true);
        rpt.setRefundOption("MoneyBack");
        rpt.setReturnsWithinOption("Days_30");
        rpt.setShippingCostPaidByOption("Buyer");
        item.setReturnPolicy(rpt);
    }

    private void setShippingDetails(ItemType item, Listing listing) {
        ShippingDetailsType sdt = new ShippingDetailsType();
        CalculatedShippingRateType csrt = new CalculatedShippingRateType();
        csrt.setOriginatingPostalCode("40065");
        MeasureType w, d, l;
        w = new MeasureType();
        d = new MeasureType();
        l = new MeasureType();
        w.setUnit("in");
        d.setUnit("in");
        l.setUnit("in");
        w.setValue(listing.getBook().getWidth());
        d.setValue(listing.getBook().getDepth());
        l.setValue(listing.getBook().getHeight());
        csrt.setPackageDepth(d);
        csrt.setPackageWidth(w);
        csrt.setPackageLength(l);
        MeasureType weightMajor, weightMinor;
        weightMajor = new MeasureType();
        weightMinor = new MeasureType();
        weightMajor.setUnit("lb");
        weightMinor.setUnit("oz");
        weightMajor.setValue(listing.getBook().getWeightMajor());
        weightMinor.setValue(listing.getBook().getWeightMinor());

        csrt.setWeightMajor(weightMajor);
        csrt.setWeightMinor(weightMinor);
        csrt.setShippingPackage(ShippingPackageCodeType.PACKAGE_THICK_ENVELOPE);
        csrt.setShippingIrregular(true);
        sdt.setCalculatedShippingRate(csrt);
        sdt.setGlobalShipping(true);
        InternationalShippingServiceOptionsType ss = new InternationalShippingServiceOptionsType();
        ss.setShippingServicePriority(1);
        ss.setShippingService("USPSFirstClassMailInternational");
        String[] values = new String[1];
        values[0] = "WorldWide";
        ss.setShipToLocation(values);
        sdt.setInternationalShippingServiceOption(0, ss);
        sdt.setShippingType(ShippingTypeCodeType.FLAT_DOMESTIC_CALCULATED_INTERNATIONAL);
        ShippingServiceOptionsType[] sso = new ShippingServiceOptionsType[2];
        sso[0].setShippingServicePriority(1);
        sso[0].setShippingService("USPSMedia");
        sso[1].setShippingServicePriority(2);
        sso[1].setShippingService("USPSPriorityFlatRateEnvelope");
        AmountType samt = new AmountType();
        samt.setCurrencyID(CurrencyCodeType.USD);
        samt.setValue(0.00);
        sso[0].setShippingServiceCost(samt);
        AmountType samt2 = new AmountType();
        samt2.setCurrencyID(CurrencyCodeType.USD);
        samt2.setValue(4.95);
        sdt.setShippingServiceOptions(sso);

        item.setShippingDetails(sdt);

    }

    private void setProductLiting(ItemType item, String isbn) {
        ProductListingDetailsType pldt = new ProductListingDetailsType();
        pldt.setISBN(isbn);
        item.setProductListingDetails(pldt);
    }

    private void setPrimaryCategory(ItemType item, String category) {
        CategoryType ct = new CategoryType();
        ct.setCategoryID(category);
        item.setPrimaryCategory(ct);
    }

    private void setPicture(ItemType item, Listing listing) {
        PictureDetailsType pdt = new PictureDetailsType();
        pdt.setGalleryType(GalleryTypeCodeType.GALLERY);
        String[] imageURLS = new String[12];

        for (int i = 0; i < 12; i++) {
            imageURLS[i] = "http://kmhenry70.com/images/" + listing.getBook().getAsin() + ".jpg";
        }
        pdt.setPictureURL(imageURLS);
        item.setPictureDetails(pdt);
    }

    private void setItemSpecifics(ItemType item, Listing listing) {

        NameValueListArrayType itemSpecificsArrayType = new NameValueListArrayType();
        ArrayList<NameValueListType> itemSpecificsArray = new ArrayList<>();
        for (NameValuePair pair : listing.getNvps()) {
            NameValueListType itemSpecific = new NameValueListType();
            itemSpecific.setName(pair.getName());
            itemSpecific.setValue(new String[]{pair.getValue()});
            itemSpecificsArray.add(itemSpecific);
        }


        itemSpecificsArrayType.setNameValueList(itemSpecificsArray.toArray(new NameValueListType[itemSpecificsArray.size()]));
        item.setItemSpecifics(itemSpecificsArrayType);

    }

    private void setStoreFront(ItemType item, long storeCategory) {
        StorefrontType storeFront = new StorefrontType();
        storeFront.setStoreCategoryID(storeCategory);

        item.setStorefront(storeFront);
    }

    private void setPrice(ItemType item, Double price) {
        AmountType amt = new AmountType();
        amt.setCurrencyID(CurrencyCodeType.USD);
        amt.setValue(price);
        item.setStartPrice(amt);
    }

}
