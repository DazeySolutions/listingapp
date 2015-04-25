package com.ds.listing.services;

import com.ds.listing.model.Listing;
import com.ds.listing.model.Book;
import com.ds.listing.model.NameValuePair;
import com.ebay.sdk.call.*;
import com.ebay.sdk.util.eBayUtil;
import com.ebay.soap.eBLBaseComponents.*;
import com.ebay.sdk.ApiContext;

import java.util.ArrayList;
import java.util.List;

import com.ds.listing.rest.UnsoldListData;

/**
 * Created by bithack on 3/31/15.
 * ebay api calls
 */
public class eBayListingService {
    private ApiContext apiContext;

    private static final String STOCK_DESCRIPTION = "<h3 style='text-align: center;'><span style='color: #ff0000;'>All items are stored in a pet free and smoke free environment.<br /><br /></span>General listing information on abbreviations used in title description HC-hardcover DJ-dust jacket BCE-Book club edition.<br /><br />All books are full size retail editions unless otherwise noted.<br /><br />Ship worldwide!<br /><br />International shipments will ship for the cheapest rate possible.<br /><br />Media mail normally takes 2 to 14 days for delivery.</h3><h5 style='text-align: center;'><em>(Estimated delivery dates are from the USPS, not the seller.)</em></h5><h3 style='text-align: center;'> Puerto Rico, Guam, Hawaii, Alaska and all other US Providences can take between four to six weeks.<br /><br />I provide shipping tracking numbers so that you may follow your purchase.<br /><br />Feedback is left when shipping is complete. <br /><br />Refund given on items if they are not as described, please contact seller.<br /><br />Returns are allowed if buyer pays shipping rates.<br /><br />Many payment forms are welcome.<br /><br />Check out my <a href='http://search.ebay.com/?sass=kmhenry70&amp;ht=-1' target='_blank'>other items</a>!<br /><br />Be sure to add me to your <a href='http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&amp;sellerid=kmhenry70&amp;sspageName=DB:FavList' target='_blank'>favorites list</a>!<br /><br /><a href='http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&amp;linkname=includenewsletter&amp;sellerid=kmhenry70' target='_blank'>Sign up for my email newsletters</a> by adding my eBay Store to your Favorites!</h3>";

    public eBayListingService(ApiContext apiContext) {
        this.apiContext = apiContext;
    }

    public Listing getItem(String id) {
        try {
            GetItemCall api = new GetItemCall(apiContext);
            ItemType item = api.getItem(id);
            return populateListing(item);
        } catch (Exception ignored) {

        }
        return null;
    }

    public ArrayList<RecommendationsType> getCategories(){
        try {
            GetCategoriesCall api = new GetCategoriesCall(apiContext);
            GetCategoriesCall apiChild = new GetCategoriesCall(apiContext);
            api.setLevelLimit(1);
            apiChild.setLevelLimit(2);
            apiChild.addDetailLevel(DetailLevelCodeType.RETURN_ALL);
            CategoryType[] parents = api.getCategories();

            for (CategoryType parent : parents) {
                if (parent.getCategoryName().equals("Books")){
                    String[] cat = new String[1];
                    cat[0] = parent.getCategoryID();
                    apiChild.setParentCategory(cat);
                }
            }
            CategoryType[] categories = apiChild.getCategories();
            ArrayList<String> catId = new ArrayList<>();
            for(CategoryType child : categories){
                if(!child.getCategoryName().equals("Books")){
                    catId.add(child.getCategoryID());
                }
            }
            GetCategorySpecificsCall catApi = new GetCategorySpecificsCall(apiContext);
            catApi.setCategoryID((String[]) catId.toArray());
            RecommendationsType[] rec = catApi.getCategorySpecifics();
            ArrayList<RecommendationsType> retList = new ArrayList<>();
            for(RecommendationsType item : rec){
                retList.add(item);
            }
            return retList;
        }catch (Exception ignored){

        }
        return null;
    }

    public void getCurrentListings(int page, int resultPerPage, UnsoldListData data) {
        ArrayList<Listing> retValues = new ArrayList<>();
        try {
            GetMyeBaySellingCall api = new GetMyeBaySellingCall(apiContext);
            ItemListCustomizationType unsoldList = new ItemListCustomizationType();
            unsoldList.setSort(ItemSortTypeCodeType.END_TIME);
            unsoldList.setInclude(true);
            unsoldList.setDurationInDays(60);
            api.addDetailLevel(DetailLevelCodeType.RETURN_ALL);
            PaginationType pt = new PaginationType();
            pt.setEntriesPerPage(resultPerPage);

            int totalNumberOfPages;
            unsoldList.setPagination(pt);

            api.setUnsoldList(unsoldList);

            pt.setPageNumber(page);
            api.getMyeBaySelling();

            PaginatedItemArrayType unsoldItems = api.getReturnedUnsoldList();
            if(unsoldItems != null){
                PaginationResultType pr = unsoldItems.getPaginationResult();
                totalNumberOfPages = pr.getTotalNumberOfPages();
                ItemArrayType itemArray = unsoldItems.getItemArray();
                ItemType[] items = itemArray.getItem();

                for(ItemType item : items){
                    GetItemCall itemApi = new GetItemCall(apiContext);
                    itemApi.addDetailLevel(DetailLevelCodeType.RETURN_ALL);
                    ItemType fullItem = itemApi.getItem(item.getItemID());
                    try{
                        retValues.add(populateListing(fullItem));
                    }catch(Exception ignored){
                        ignored.printStackTrace();
                        System.out.println("unable to add record: " + ignored.getMessage());
                    }
                }
                data.setNumPages(totalNumberOfPages);
                data.setNumResults(pr.getTotalNumberOfEntries());
                data.setListings(retValues);
                System.out.println("Results #" + retValues.size());
            }

        } catch (Exception ignored) {
            System.out.println("unknown error");
        }


    }

    private Listing populateListing(ItemType item) throws Exception {
        Listing listing = new Listing();
        listing.setEbayTitle(item.getTitle());
        listing.setEbayListingId(item.getItemID());
        if (item.getConditionDescription() != null) {
            listing.setConditionDescription(item.getConditionDescription());
        }
        if (item.getStorefront() != null) {
            listing.setStoreCategory(item.getStorefront().getStoreCategoryID());
            long fabid = 28162;
            if (item.getStorefront().getStoreCategoryID() == fabid) {
                throw new Exception("not a book");
            }
        }
        if (item.getStartPrice() != null) {
            listing.setEbayPrice(item.getStartPrice().getValue());
        }
        Book b = new Book();
        if (item.getProductListingDetails() != null) {
            b.setIsbn(item.getProductListingDetails().getISBN());
        }
        if (item.getShippingDetails() != null) {
            if(item.getShippingDetails() != null){
                if( item.getShippingDetails().getCalculatedShippingRate().getWeightMajor() != null){
                    b.setWeightMajor(item.getShippingDetails().getCalculatedShippingRate().getWeightMajor().getValue());
                }
                if( item.getShippingDetails().getCalculatedShippingRate().getWeightMinor() != null){
                    b.setWeightMinor(item.getShippingDetails().getCalculatedShippingRate().getWeightMinor().getValue());
                }
                if( item.getShippingDetails().getCalculatedShippingRate().getPackageDepth() != null){
                    b.setDepth(item.getShippingDetails().getCalculatedShippingRate().getPackageDepth().getValue());
                }
                if( item.getShippingDetails().getCalculatedShippingRate().getPackageLength() != null){
                    b.setWidth(item.getShippingDetails().getCalculatedShippingRate().getPackageLength().getValue());
                }
                if( item.getShippingDetails().getCalculatedShippingRate().getPackageDepth() != null){
                    b.setHeight(item.getShippingDetails().getCalculatedShippingRate().getPackageDepth().getValue());
                }
            }
        }
        listing.setBook(b);
        if (item.getPrimaryCategory() != null) {
            listing.setCategory(item.getPrimaryCategory().getCategoryID());
        }
        listing.setEbayCondition(item.getConditionID());
        if (item.getSellingStatus() != null) {
            listing.setQuantity(item.getQuantity() - item.getSellingStatus().getQuantitySold());
        } else {
            listing.setQuantity(item.getQuantity());
        }
        listing.setEbayDescription(STOCK_DESCRIPTION);
        return listing;
    }

    public boolean addListing(Listing listing) throws Exception{
        try {
            ItemType item = buildItemType(listing);
            AddFixedPriceItemCall api = new AddFixedPriceItemCall(apiContext);
            api.setItem(item);

            FeesType fees = api.addFixedPriceItem();
            double listingFee = eBayUtil.findFeeByName(fees.getFee(), "ListingFee").getFee().getValue();
            System.out.println("Listing fee is: " + Double.toString(listingFee));
            listing.setEbayListingId(item.getItemID());
            return true;
        } catch (Exception e) {
            System.out.println("Error adding item");
            throw new Exception("Error adding item");
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
