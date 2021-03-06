var escapeRegExp = function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

var replaceAll = function replaceAll(string, find, replace) {
    return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};
var appDependencies = ['ui.router', 'toaster', 'ngAnimate', 'ngLodash', 'restangular', 'ngTable', 'mgcrea.ngStrap'];
var ngListApp = angular.module("ngListApp", appDependencies);

angular.isUndefinedOrNull = function undefinedOrNull(value){
    return angular.isUndefined(value) || value === null;
};
angular.isUndefinedOrNullOrEmpty = function undefinedOrNull(value){
    return angular.isUndefined(value) || value === null || value === "";
};
ngListApp.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
ngListApp.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/rest');
});
ngListApp.run(function($rootScope, $state, Auth){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if(!Auth.isLoggedIn() && toState.name !== 'login'){
            event.preventDefault();
            $state.go('login');
        }
    });
})
.factory('Cats', function(){
    this.model = {"status":"success","payload":{"0":{"value":"45110","name":"Accessories","recomend":{"0":"Brand","1":{},"2":"MPN","3":{},"4":"Country\/Region of Manufacture","5":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"1":{"value":"29223","name":"Antiquarian & Collectible","recomend":{"0":"Binding","1":{"0":"Fine Binding","1":"Hardcover","2":"Hardcover w\/Jacket","3":"Leather","4":"Loose Pages, Articles","5":"Manuscript, Unbound","6":"Pamphlet","7":"Softcover, Wraps","8":"Vellum"},"2":"Subject","3":{"0":"Americana","1":"Art & Photography","2":"Biography & Autobiography","3":"Children's","4":"Cooking","5":"Exploration & Travel","6":"Fraternal, Social Organizations","7":"History","8":"Home & Garden","9":"Illustrated","10":"Law & Government","11":"Literature & Fiction","12":"Military & War","13":"Outdoor & Nature","14":"Performing Arts","15":"Philosophy","16":"Pulps","17":"Reference","18":"Religion & Spirituality","19":"Science & Medicine","20":"Sports","21":"Vintage Paperbacks"},"4":"Topic","5":{"0":"Action, Adventure","1":"Africa","2":"Agriculture","3":"Almanacs","4":"Alternative Medicine","5":"American (US)","6":"Ancient","7":"Anthologies","8":"Anthropology","9":"Archeology","10":"Architecture","11":"Art History & Criticism","12":"Art Instruction","13":"Asia","14":"Asian","15":"Astronomy","16":"Atlases","17":"Australia, Oceania","18":"Baking","19":"Basic, General Cooking","20":"Bibliographies, Indexes","21":"Biological Science","22":"Buddhism","23":"Business","24":"Canada","25":"Central America","26":"Chemistry","27":"Christianity, Bibles","28":"Civil War (1861-65)","29":"Classics","30":"Devotions, Meditations","31":"Diaries & Correspondence","32":"Dictionaries, Thesauri","33":"Drama","34":"Earth Science","35":"Ecology, Environment","36":"Electronics","37":"Encyclopedias","38":"Engineering","39":"Essays & Speeches","40":"Europe","41":"European","42":"Fairy Tales & Fantasy","43":"Fiction","44":"Fantasy","45":"Religious, Inspirational","46":"Field Guides","47":"Fine Arts","48":"Fine Arts: Catalogs, Exhibitions","49":"Fine Arts: Collections","50":"Fine Arts: Monographs","51":"First Aid","52":"Folklore, Mythology","53":"Foreign Militaries","54":"Genealogy","55":"Geology","56":"Historical","57":"Horror","58":"Humor","59":"Hymnals","60":"Indian Wars","61":"Islam","62":"Judaism","63":"Korean War (1950-53)","64":"Language Study","65":"Latin American","66":"Literary","67":"Literary Criticism","68":"Literature","69":"Literature, Ancient","70":"Literature, Modern","71":"Mathematics","72":"Medicine","73":"Middle East","74":"Military","75":"Modern","76":"Movie","77":"Music","78":"Mystery, Thriller","79":"Natural Disasters","80":"Nonfiction","81":"North America","82":"Novels","83":"Nursery Books","84":"Nursing","85":"Occult","86":"Ornithology","87":"Paleontology","88":"Performing Arts","89":"Pharmacology","90":"Photography","91":"Photography: Catalogs, Exhibitions","92":"Photography: Collections","93":"Photography: Monographs","94":"Physics","95":"Poetry","96":"Poetry & Plays","97":"Political","98":"Prayerbooks","99":"Psychology","100":"Reference","101":"Religion","102":"Revolutionary War (1775-83)","103":"Romance","104":"Royalty","105":"School Books","106":"School Yearbooks","107":"Science & Pyschology","108":"Science Fiction","109":"Scouting","110":"Series Books","111":"Sermons, Homilies","112":"Sets","113":"Short Stories","114":"South America","115":"Spanish-American War (1898-1907)","116":"Spirituality","117":"Sports","118":"Surgery","119":"Theater","120":"Travel","121":"TV & Movie","122":"United States","123":"US Armed Forces","124":"Vietnam War (1961-75)","125":"War of 1812","126":"Wars Involving US","127":"Wars Throughout History","128":"Weapons","129":"Weather","130":"Westerns","131":"Wildlife","132":"World","133":"Writing","134":"WWI (1914-18)","135":"WWII (1939-45)","136":"Mystery"},"6":"Year Printed","7":{},"8":"Special Attributes","9":{"0":"1st Edition","1":"Illustrated","2":"Signed","3":"Miniature"},"10":"Origin","11":{"0":"American","1":"Asian","2":"English","3":"European","4":"Middle Eastern"},"12":"Country\/Region of Manufacture","13":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"2":{"value":"29792","name":"Audiobooks","recomend":{"0":"Subject","1":{"0":"Biography & Autobiography","1":"Business & Economics","2":"Children's","3":"Fiction & Literature","4":"Health & Fitness","5":"History","6":"Humor","7":"Instructional","8":"Literary Criticism","9":"Parenting & Family","10":"Philosophy","11":"Poetry","12":"Psychology","13":"Relationships","14":"Religion & Spirituality","15":"Science & Medicine","16":"Self-Help","17":"Travel","18":"True Crime"},"2":"Topic","3":{"0":"Action, Adventure","1":"Fantasy","2":"Historical","3":"Horror","4":"Literature, Classic","5":"Literature, Modern","6":"Mystery, Thriller","7":"Religious","8":"Romance","9":"Science Fiction","10":"Short Stories","11":"Westerns","12":"Not Applicable"},"4":"Format","5":{"0":"Cassette","1":"CD","2":"MP3 CD"},"6":"Length","7":{"0":"Abridged","1":"Unabridged"},"8":"Language","9":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish"},"10":"Country\/Region of Manufacture","11":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"3":{"value":"118254","name":"Catalogs","recomend":{"0":"Country\/Region of Manufacture","1":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"4":{"value":"279","name":"Children & Young Adults","recomend":{"0":"Format","1":{"0":"Board Book","1":"Cloth Book","2":"Hardcover","3":"Paperback","4":"Mixed Lot"},"2":"Publication Year","3":{},"4":"Subject","5":{"0":"ABCs & Numbers","1":"Activity & Coloring Books","2":"Annuals","3":"Bedtime","4":"Biography","5":"Classics","6":"Fairy Tales & Myths","7":"Fiction","8":"Geography","9":"Health & Fitness","10":"History","11":"Holidays","12":"Humor","13":"Learning to Read","14":"Nursery Rhymes","15":"Performing Arts","16":"Picture Books","17":"Poetry","18":"Pop-Up, Movable","19":"Reference","20":"Religion","21":"School Books","22":"Science & Nature","23":"Scouting","24":"Series","25":"Social Situations","26":"Sports","27":"Technology","28":"Television Shows","29":"Transportation"},"6":"Topic","7":{"0":"Animals","1":"Coloring Books","2":"Coming of Age","3":"Crafts & How-To","4":"Fantasy","5":"Games & Mazes","6":"Ghosts, Spooky Stories","7":"Historical","8":"Mystery & Adventure","9":"Romance","10":"Science Fiction","11":"Sticker Books","12":"Not Applicable"},"8":"Age Level","9":{"0":"Baby & Preschool","1":"Ages 4-8","2":"Ages 9-12","3":"Young Adults"},"10":"Language","11":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish"},"12":"Special Attributes","13":{"0":"1st Edition","1":"Illustrated","2":"Signed","3":"Personalized","4":"Large Print"},"14":"Country\/Region of Manufacture","15":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"5":{"value":"11104","name":"Cookbooks","recomend":{"0":"Subject","1":{"0":"Architecture & Design","1":"Art & Photography","2":"Biography & Autobiography","3":"Books on Collecting","4":"Business & Economics","5":"Computers & Internet","6":"Cooking, Food & Wine","7":"Family & Relationships","8":"Games & Puzzles","9":"Health & Fitness","10":"History","11":"Hobbies & Crafts","12":"Home & Garden","13":"Humor","14":"Law & Government","15":"Literary Criticism","16":"Medical","17":"Military & War","18":"Outdoor & Nature","19":"Paranormal & Metaphysical","20":"Performing Arts","21":"Pets & Animal Care","22":"Philosophy","23":"Psychology","24":"Reference","25":"Religion & Spirituality","26":"Science & Technology","27":"Self-Help","28":"Social Sciences","29":"Sports & Recreation","30":"Teaching & Education","31":"Transportation","32":"Travel, Geography & Exploration","33":"True Crime"},"2":"Topic","3":{"0":"Abuse","1":"Accounting","2":"Action, Adventure","3":"Addiction, Recovery","4":"Africa","5":"Aging","6":"Agriculture","7":"Aircraft","8":"Air Force","9":"Almanacs","10":"Alternative Health","11":"Alternative Medicine","12":"American Indian Wars","13":"Anatomy, Physiology","14":"Ancient","15":"Animal Husbandry","16":"Anthropology","17":"Antiques","18":"Archaeology","19":"Architecture","20":"Army","21":"Art","22":"Art History & Criticism","23":"Art Instruction","24":"Artists","25":"Asia","26":"Astrology","27":"Astronomy, Space Exploration","28":"Atlases","29":"Australia, Oceania","30":"Australian","31":"Austria","32":"Automobiles","33":"Baking","34":"Baptist","35":"Barbecue & Grilling","36":"Baseball","37":"Basic Cooking & Reference","38":"Basketball","39":"Beauty & Grooming","40":"Bibles","41":"Bibliographies, Indexes","42":"Biological Science","43":"Birds","44":"Birds & Bird Watching","45":"Board Games","46":"Boats, Ships","47":"Bodybuilding","48":"Books","49":"Books on Books","50":"Botany","51":"Boxing","52":"British Wars","53":"Buddhism","54":"Building & Plans","55":"Business","56":"By Country","57":"By Region","58":"By Time Period","59":"Calligraphy","60":"Canada","61":"Canning & Preservation","62":"Card Games","63":"Careers, Job Hunting","64":"Caribbean","65":"Catalogs & Exhibitions","66":"Catholic","67":"Cats","68":"Central America, Mexico","69":"Certification","70":"Chemistry","71":"Chess","72":"China","73":"Christianity","74":"Civil War (1861-65)","75":"Classics","76":"Coast Guard","77":"Coins","78":"Community Recipe Collections","79":"Comparative Religion","80":"Construction","81":"Cooking for One","82":"Cricket","83":"Criticism","84":"Crocheting","85":"Cross-Stitch","86":"Crosswords & Puzzles","87":"Culinary Arts & Techniques","88":"Cycling","89":"Dance","90":"Databases","91":"Decorating","92":"Design","93":"Devotions, Meditations","94":"Dictionaries, Thesauri","95":"Diet, Weight Loss","96":"Divorce","97":"Dogs","98":"Do-It-Yourself","99":"Dolls","100":"Drawing & Cartooning","101":"Earth Science","102":"E-Business","103":"Ecology","104":"Economics","105":"Education","106":"Electronics","107":"Embroidery","108":"Encyclopedias","109":"Engineering","110":"England","111":"Entertaining & Dining","112":"Environment","113":"Episcopal","114":"Equestrian","115":"Ethnic & Cultural","116":"Ethnic & Minority Studies","117":"Europe","118":"Exercise & Fitness","119":"Extreme Sports","120":"Fantasy","121":"Fashion","122":"Feng Shui","123":"Field Guides","124":"Field Hockey","125":"Fine Arts","126":"First Aid","127":"Fish","128":"Folklore, Mythology","129":"Football","130":"Foreign Militaries","131":"Forensics","132":"France","133":"Gambling","134":"Games","135":"Game Theory","136":"Gardening & Landscaping","137":"Gay & Lesbian Studies","138":"Gender Studies","139":"Genealogy","140":"General","141":"General Business","142":"General Price Guides","143":"Germany","144":"Glass","145":"Golf","146":"Graphic Arts","147":"Graphic Design","148":"Graphics & Design","149":"Greek & Roman Wars","150":"Grief, Bereavement","151":"Hardware","152":"Health & Diseases","153":"Healthy & Special Diets","154":"Hiking, Camping","155":"Hinduism","156":"Historical","157":"Historic Figures","158":"Home Decor","159":"Horror","160":"Horses","161":"Humor","162":"Hunting, Fishing","163":"Ice Hockey","164":"India","165":"Industrial Design","166":"Inspirational","167":"Interior Design","168":"Internet","169":"Iraq\/Gulf Wars","170":"Ireland","171":"Islam","172":"Italy","173":"Japan","174":"Jewelry","175":"Judaism","176":"Knitting","177":"Korean War (1950-53)","178":"Language Study","179":"Latin America","180":"Law & Crime","181":"Literary","182":"Literary Collections","183":"Literary Criticism","184":"Literature, Ancient","185":"Literature, Classic","186":"Literature, Modern","187":"Logic & Brain Teasers","188":"Love, Relationships","189":"Lutheran","190":"Magic","191":"Marine Life","192":"Marines","193":"Marketing","194":"Marriage","195":"Martial Arts","196":"Mathematics","197":"Medical","198":"Medieval","199":"Mediterranean","200":"Mental Health","201":"Mental Illness","202":"Methodist","203":"Methods, Ingredients","204":"Mexico","205":"Middle East","206":"Military","207":"Model Railroads","208":"Modern","209":"Mormon","210":"Motivation","211":"Motor Sports","212":"Mountaineering","213":"Movie & Television","214":"Music","215":"Mystery, Detective","216":"Mystery, Espionage","217":"Mystery, General","218":"Mystery, Legal Thriller","219":"Mystery, Medical","220":"Mystery, Thriller","221":"Napoleonic Wars","222":"National Guard","223":"Natural Disasters","224":"Navy","225":"Needlepoint","226":"Netherlands","227":"Networking","228":"New Age","229":"North America","230":"Nursing","231":"Occult","232":"Olympic Games","233":"Operating Systems","234":"Origami, Paper Crafts","235":"Orthodox","236":"Painting","237":"Paleontology","238":"Paranormal","239":"Parenting","240":"Pediatrics","241":"Personal Finance","242":"Pharmacology, Drug Guides","243":"Photographers","244":"Photography","245":"Photography & Photojournalism","246":"Photography Subjects & Themes","247":"Photography Techniques","248":"Physics","249":"Plays, Screenplays","250":"Poetry","251":"Political","252":"Pottery & China","253":"Prayerbooks","254":"Pregnancy, Childbirth","255":"Presbyterian","256":"Product Design","257":"Programming","258":"Protestant","259":"Psychiatry","260":"Public Speaking","261":"Pulps","262":"Quack Medicine","263":"Quick & Easy Meals","264":"Quilting","265":"Racquet Sports","266":"Radio","267":"Railroadiana","268":"Reference","269":"Regional","270":"Regional: American (US)","271":"Regional: Asian","272":"Regional: European","273":"Regional: French","274":"Regional: Indian","275":"Regional: Italian","276":"Regional: Latin American","277":"Regional: Middle Eastern","278":"Regional: Spanish","279":"Religious","280":"Religious, Inspirational","281":"Renaissance","282":"Reptiles, Amphibians","283":"Revolutionary War (1775-83)","284":"Romance","285":"Romance, Contemporary","286":"Romance, Fantasy","287":"Romance, General","288":"Romance, Historical","289":"Royalty","290":"Rugby","291":"School Yearbooks","292":"Science & Technology","293":"Science Fiction","294":"Scrapbooking","295":"Sculpture","296":"Security","297":"Sermons","298":"Sewing, General","299":"Sewing, Needlework","300":"Sexuality","301":"Silver","302":"Skating","303":"Soccer","304":"Social Activists","305":"Sociology","306":"Soups & Stews","307":"South America","308":"Spain","309":"Specific Appliances","310":"Specific Ingredients","311":"Specific Wars","312":"Spirituality","313":"Sports","314":"Stamps","315":"Surgery, Anaesthesiology","316":"Sweden","317":"Taxes","318":"Technology","319":"Television","320":"Theater","321":"Tobacciana","322":"Toys","323":"Trading Cards","324":"Travel","325":"Travel, Geography, Exploration","326":"Trivia","327":"UFOlogy","328":"United States","329":"US: 19th Century","330":"US: 20th Century","331":"US: 21st Century","332":"US: African American","333":"US: Civil War Period","334":"US: Colonial Period","335":"US: General History","336":"US: General Travel","337":"US: Midwest","338":"US: Native American","339":"US: Northeast","340":"US: Revolutionary Period","341":"US: South","342":"US: State & Local","343":"US: West","344":"US Armed Forces","345":"Vegetarian & Vegan","346":"Veterinary Medicine","347":"Video & Electronic Game Theory","348":"Vietnam War (1961-75)","349":"Water Sports","350":"Weapons","351":"Weather","352":"Web Development","353":"Weddings","354":"Westerns","355":"Wildlife","356":"Wine & Beverages","357":"Winter Sports","358":"Witchcraft, Wicca, Pagan","359":"Women","360":"Women's Studies","361":"Woodwork","362":"World","363":"Wrestling","364":"Writing","365":"WWI (1914-18)","366":"WWII (1939-45)","367":"Zoology","368":"Not Applicable"},"4":"Format","5":{"0":"Hardcover","1":"Paperback","2":"CD-ROM (Non-Audio)","3":"Mixed Lot"},"6":"Special Attributes","7":{"0":"1st Edition","1":"Illustrated","2":"Signed","3":"Large Print"},"8":"Publication Year","9":{},"10":"Language","11":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish"},"12":"Country\/Region of Manufacture","13":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"6":{"value":"377","name":"Fiction & Literature","recomend":{"0":"Subject","1":{"0":"Action, Adventure","1":"Classics","2":"Drama","3":"Fantasy","4":"Folklore, Mythology","5":"Historical","6":"Horror","7":"Humor","8":"Letters","9":"Literary Collections","10":"Literature, Ancient","11":"Literature, Classic","12":"Literature, Modern","13":"Military","14":"Mystery, Thriller","15":"Plays, Screenplays","16":"Poetry","17":"Pulps","18":"Religious","19":"Romance","20":"Science Fiction","21":"Westerns"},"2":"Topic","3":{"0":"Christian","1":"Contemporary","2":"Detective","3":"Espionage","4":"Fantasy","5":"General Thriller","6":"Historical","7":"Legal Thriller","8":"Medical","9":"Paranormal","10":"Political","11":"Regency","12":"Short Stories","13":"Suspense","14":"Time Travel","15":"Women Sleuths","16":"Not Applicable"},"4":"Format","5":{"0":"Hardcover","1":"Paperback","2":"Mixed Lot"},"6":"Special Attributes","7":{"0":"1st Edition","1":"Illustrated","2":"Signed","3":"Large Print"},"8":"Publication Year","9":{},"10":"Language","11":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish"},"12":"Country\/Region of Manufacture","13":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"7":{"value":"280","name":"Magazine Back Issues","recomend":{"0":"Subject","1":{"0":"Agriculture","1":"Animals & Nature","2":"Antiques & Collectibles","3":"Architecture & Design","4":"Art & Photography","5":"Automobile","6":"Aviation","7":"Boats","8":"Business & Economics","9":"Celebrity","10":"Children","11":"Computers & Internet","12":"Cooking, Food & Wine","13":"Fashion","14":"Gay & Lesbian","15":"Health & Fitness","16":"History","17":"Hobbies & Crafts","18":"Home & Garden","19":"Horror & Monster","20":"Humor & Satire","21":"Literary","22":"Medicine","23":"Men's Interest","24":"Military & War"},"2":"Publication Name","3":{},"4":"Issue Type","5":{"0":"Annual","1":"Twice Yearly","2":"Quarterly","3":"Bimonthly","4":"Monthly","5":"Biweekly","6":"Weekly","7":"Special Issue","8":"Multiple Issues"},"6":"Month","7":{"0":"January","1":"February","2":"March","3":"April","4":"May","5":"June","6":"July","7":"August","8":"September","9":"October","10":"November","11":"December","12":"Not Applicable"},"8":"Year Published","9":{},"10":"Language","11":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish","8":"Portuguese"},"12":"Country\/Region of Manufacture","13":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"8":{"value":"378","name":"Nonfiction","recomend":{"0":"Subject","1":{"0":"Architecture & Design","1":"Art & Photography","2":"Biography & Autobiography","3":"Books on Collecting","4":"Business & Economics","5":"Computers & Internet","6":"Cooking, Food & Wine","7":"Family & Relationships","8":"Games & Puzzles","9":"Health & Fitness","10":"History","11":"Hobbies & Crafts","12":"Home & Garden","13":"Humor","14":"Law & Government","15":"Literary Criticism","16":"Medical","17":"Military & War","18":"Outdoor & Nature","19":"Paranormal & Metaphysical","20":"Performing Arts","21":"Pets & Animal Care","22":"Philosophy","23":"Psychology","24":"Reference","25":"Religion & Spirituality","26":"Science & Technology","27":"Self-Help","28":"Social Sciences","29":"Sports & Recreation","30":"Teaching & Education","31":"Transportation","32":"Travel, Geography & Exploration","33":"True Crime"},"2":"Topic","3":{"0":"Abuse","1":"Accounting","2":"Action, Adventure","3":"Addiction, Recovery","4":"Africa","5":"Aging","6":"Agriculture","7":"Aircraft","8":"Air Force","9":"Almanacs","10":"Alternative Health","11":"Alternative Medicine","12":"American Indian Wars","13":"Anatomy, Physiology","14":"Ancient","15":"Animal Husbandry","16":"Anthropology","17":"Antiques","18":"Archaeology","19":"Architecture","20":"Army","21":"Art","22":"Art History & Criticism","23":"Art Instruction","24":"Artists","25":"Asia","26":"Astrology","27":"Astronomy, Space Exploration","28":"Atlases","29":"Australia, Oceania","30":"Australian","31":"Austria","32":"Automobiles","33":"Baking","34":"Baptist","35":"Barbecue & Grilling","36":"Baseball","37":"Basic Cooking & Reference","38":"Basketball","39":"Beauty & Grooming","40":"Bibles","41":"Bibliographies, Indexes","42":"Biological Science","43":"Birds","44":"Birds & Bird Watching","45":"Board Games","46":"Boats, Ships","47":"Bodybuilding","48":"Books","49":"Books on Books","50":"Botany","51":"Boxing","52":"British Wars","53":"Buddhism","54":"Building & Plans","55":"Business","56":"By Country","57":"By Region","58":"By Time Period","59":"Calligraphy","60":"Canada","61":"Canning & Preservation","62":"Card Games","63":"Careers, Job Hunting","64":"Caribbean","65":"Catalogs & Exhibitions","66":"Catholic","67":"Cats","68":"Central America, Mexico","69":"Certification","70":"Chemistry","71":"Chess","72":"China","73":"Christianity","74":"Civil War (1861-65)","75":"Classics","76":"Coast Guard","77":"Coins","78":"Community Recipe Collections","79":"Comparative Religion","80":"Construction","81":"Cooking for One","82":"Cricket","83":"Criticism","84":"Crocheting","85":"Cross-Stitch","86":"Crosswords & Puzzles","87":"Culinary Arts & Techniques","88":"Cycling","89":"Dance","90":"Databases","91":"Decorating","92":"Design","93":"Devotions, Meditations","94":"Dictionaries, Thesauri","95":"Diet, Weight Loss","96":"Divorce","97":"Dogs","98":"Do-It-Yourself","99":"Dolls","100":"Drawing & Cartooning","101":"Earth Science","102":"E-Business","103":"Ecology","104":"Economics","105":"Education","106":"Electronics","107":"Embroidery","108":"Encyclopedias","109":"Engineering","110":"England","111":"Entertaining & Dining","112":"Environment","113":"Episcopal","114":"Equestrian","115":"Ethnic & Cultural","116":"Ethnic & Minority Studies","117":"Europe","118":"Exercise & Fitness","119":"Extreme Sports","120":"Fantasy","121":"Fashion","122":"Feng Shui","123":"Field Guides","124":"Field Hockey","125":"Fine Arts","126":"First Aid","127":"Fish","128":"Folklore, Mythology","129":"Football","130":"Foreign Militaries","131":"Forensics","132":"France","133":"Gambling","134":"Games","135":"Game Theory","136":"Gardening & Landscaping","137":"Gay & Lesbian Studies","138":"Gender Studies","139":"Genealogy","140":"General","141":"General Business","142":"General Price Guides","143":"Germany","144":"Glass","145":"Golf","146":"Graphic Arts","147":"Graphic Design","148":"Graphics & Design","149":"Greek & Roman Wars","150":"Grief, Bereavement","151":"Hardware","152":"Health & Diseases","153":"Healthy & Special Diets","154":"Hiking, Camping","155":"Hinduism","156":"Historical","157":"Historic Figures","158":"Home Decor","159":"Horror","160":"Horses","161":"Humor","162":"Hunting, Fishing","163":"Ice Hockey","164":"India","165":"Industrial Design","166":"Inspirational","167":"Interior Design","168":"Internet","169":"Iraq\/Gulf Wars","170":"Ireland","171":"Islam","172":"Italy","173":"Japan","174":"Jewelry","175":"Judaism","176":"Knitting","177":"Korean War (1950-53)","178":"Language Study","179":"Latin America","180":"Law & Crime","181":"Literary","182":"Literary Collections","183":"Literary Criticism","184":"Literature, Ancient","185":"Literature, Classic","186":"Literature, Modern","187":"Logic & Brain Teasers","188":"Love, Relationships","189":"Lutheran","190":"Magic","191":"Marine Life","192":"Marines","193":"Marketing","194":"Marriage","195":"Martial Arts","196":"Mathematics","197":"Medical","198":"Medieval","199":"Mediterranean","200":"Mental Health","201":"Mental Illness","202":"Methodist","203":"Methods, Ingredients","204":"Mexico","205":"Middle East","206":"Military","207":"Model Railroads","208":"Modern","209":"Mormon","210":"Motivation","211":"Motor Sports","212":"Mountaineering","213":"Movie & Television","214":"Music","215":"Mystery, Detective","216":"Mystery, Espionage","217":"Mystery, General","218":"Mystery, Legal Thriller","219":"Mystery, Medical","220":"Mystery, Thriller","221":"Napoleonic Wars","222":"National Guard","223":"Natural Disasters","224":"Navy","225":"Needlepoint","226":"Netherlands","227":"Networking","228":"New Age","229":"North America","230":"Nursing","231":"Occult","232":"Olympic Games","233":"Operating Systems","234":"Origami, Paper Crafts","235":"Orthodox","236":"Painting","237":"Paleontology","238":"Paranormal","239":"Parenting","240":"Pediatrics","241":"Personal Finance","242":"Pharmacology, Drug Guides","243":"Photographers","244":"Photography","245":"Photography & Photojournalism","246":"Photography Subjects & Themes","247":"Photography Techniques","248":"Physics","249":"Plays, Screenplays","250":"Poetry","251":"Political","252":"Pottery & China","253":"Prayerbooks","254":"Pregnancy, Childbirth","255":"Presbyterian","256":"Product Design","257":"Programming","258":"Protestant","259":"Psychiatry","260":"Public Speaking","261":"Pulps","262":"Quack Medicine","263":"Quick & Easy Meals","264":"Quilting","265":"Racquet Sports","266":"Radio","267":"Railroadiana","268":"Reference","269":"Regional","270":"Regional: American (US)","271":"Regional: Asian","272":"Regional: European","273":"Regional: French","274":"Regional: Indian","275":"Regional: Italian","276":"Regional: Latin American","277":"Regional: Middle Eastern","278":"Regional: Spanish","279":"Religious","280":"Religious, Inspirational","281":"Renaissance","282":"Reptiles, Amphibians","283":"Revolutionary War (1775-83)","284":"Romance","285":"Romance, Contemporary","286":"Romance, Fantasy","287":"Romance, General","288":"Romance, Historical","289":"Royalty","290":"Rugby","291":"School Yearbooks","292":"Science & Technology","293":"Science Fiction","294":"Scrapbooking","295":"Sculpture","296":"Security","297":"Sermons","298":"Sewing, General","299":"Sewing, Needlework","300":"Sexuality","301":"Silver","302":"Skating","303":"Soccer","304":"Social Activists","305":"Sociology","306":"Soups & Stews","307":"South America","308":"Spain","309":"Specific Appliances","310":"Specific Ingredients","311":"Specific Wars","312":"Spirituality","313":"Sports","314":"Stamps","315":"Surgery, Anaesthesiology","316":"Sweden","317":"Taxes","318":"Technology","319":"Television","320":"Theater","321":"Tobacciana","322":"Toys","323":"Trading Cards","324":"Travel","325":"Travel, Geography, Exploration","326":"Trivia","327":"UFOlogy","328":"United States","329":"US: 19th Century","330":"US: 20th Century","331":"US: 21st Century","332":"US: African American","333":"US: Civil War Period","334":"US: Colonial Period","335":"US: General History","336":"US: General Travel","337":"US: Midwest","338":"US: Native American","339":"US: Northeast","340":"US: Revolutionary Period","341":"US: South","342":"US: State & Local","343":"US: West","344":"US Armed Forces","345":"Vegetarian & Vegan","346":"Veterinary Medicine","347":"Video & Electronic Game Theory","348":"Vietnam War (1961-75)","349":"Water Sports","350":"Weapons","351":"Weather","352":"Web Development","353":"Weddings","354":"Westerns","355":"Wildlife","356":"Wine & Beverages","357":"Winter Sports","358":"Witchcraft, Wicca, Pagan","359":"Women","360":"Women's Studies","361":"Woodwork","362":"World","363":"Wrestling","364":"Writing","365":"WWI (1914-18)","366":"WWII (1939-45)","367":"Zoology","368":"Not Applicable"},"4":"Format","5":{"0":"Hardcover","1":"Paperback","2":"CD-ROM (Non-Audio)","3":"Mixed Lot"},"6":"Special Attributes","7":{"0":"1st Edition","1":"Illustrated","2":"Signed","3":"Large Print"},"8":"Publication Year","9":{},"10":"Language","11":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish"},"12":"Country\/Region of Manufacture","13":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"9":{"value":"2228","name":"Textbooks, Education","recomend":{"0":"Subject","1":{"0":"Architecture & Design","1":"Art & Photography","2":"Business & Economics","3":"Computers & Internet","4":"Education, Teaching","5":"Engineering","6":"English, Grammar","7":"Gardening & Landscaping","8":"Geography","9":"Health Education","10":"History","11":"Homeschooling","12":"Language Study","13":"Law & Government","14":"Literature & Fiction","15":"Math","16":"Medicine","17":"Music","18":"Performing Arts","19":"Philosophy","20":"Political Science","21":"Psychology","22":"Reference","23":"Religion","24":"Science & Tech"},"2":"Product Type","3":{"0":"Textbook","1":"Textbook Bundle, Kit","2":"Workbook, Study Guide"},"4":"Format","5":{"0":"Hardcover","1":"Paperback","2":"Mixed Lot"},"6":"Educational Level","7":{"0":"All Ages","1":"Preschool","2":"Elementary School","3":"Middle School","4":"High School","5":"College","6":"Professional"},"8":"Publication Year","9":{},"10":"Language","11":{"0":"Chinese","1":"English","2":"French","3":"German","4":"Italian","5":"Japanese","6":"Russian","7":"Spanish"},"12":"Country\/Region of Manufacture","13":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"10":{"value":"29399","name":"Wholesale & Bulk Lots","recomend":{"0":"Country\/Region of Manufacture","1":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"}}},"11":{"value":"268","name":"Other","recomend":{"0":"Country\/Region of Manufacture","1":{"0":"Unknown","1":"Afghanistan","2":"Albania","3":"Algeria","4":"American Samoa","5":"Andorra","6":"Angola","7":"Anguilla","8":"Antarctica","9":"Antigua and Barbuda","10":"Argentina","11":"Armenia","12":"Aruba","13":"Australia","14":"Austria","15":"Azerbaijan","16":"Bahamas","17":"Bahrain","18":"Bangladesh","19":"Barbados","20":"Belarus","21":"Belgium","22":"Belize","23":"Benin","24":"Bermuda","25":"Bhutan","26":"Bolivia","27":"Bosnia and Herzegovina","28":"Botswana","29":"Bouvet Island","30":"Brazil","31":"British Indian Ocean Territory","32":"Brunei Darussalam","33":"Bulgaria","34":"Burkina Faso","35":"Burundi","36":"Cambodia","37":"Cameroon","38":"Canada","39":"Cape Verde","40":"Cayman Islands","41":"Central African Republic","42":"Chad","43":"Chile","44":"China","45":"Christmas Island","46":"Cocos (Keeling) Islands","47":"Colombia","48":"Comoros","49":"Congo","50":"Congo, The Democratic Republic of the","51":"Cook Islands","52":"Costa Rica","53":"Cote d'Ivoire","54":"Croatia","55":"Cyprus","56":"Czech Republic","57":"Denmark","58":"Djibouti","59":"Dominica","60":"Dominican Republic","61":"Ecuador","62":"Egypt","63":"El Salvador","64":"Equatorial Guinea","65":"Eritrea","66":"Estonia","67":"Ethiopia","68":"Falkland Islands (Malvinas)","69":"Faroe Islands","70":"Fiji","71":"Finland","72":"France","73":"French Guiana","74":"French Polynesia Includes Tahiti","75":"French Southern Territories","76":"Gabon","77":"Gambia","78":"Georgia","79":"Germany","80":"Ghana","81":"Gibraltar","82":"Greece","83":"Greenland","84":"Grenada","85":"Guadeloupe","86":"Guam","87":"Guatemala","88":"Guernsey","89":"Guinea","90":"Guinea-Bissau","91":"Guyana","92":"Haiti","93":"Heard Island and Mcdonald Islands","94":"Holy See (Vatican City State)","95":"Honduras","96":"Hong Kong","97":"Hungary","98":"Iceland","99":"India","100":"Indonesia","101":"Iraq","102":"Ireland","103":"Israel","104":"Italy","105":"Jamaica","106":"Japan","107":"Jersey","108":"Jordan","109":"Kazakhstan","110":"Kenya","111":"Kiribati","112":"Korea, Republic of","113":"Kuwait","114":"Kyrgyzstan","115":"Lao People's Democratic Republic","116":"Latvia","117":"Lebanon","118":"Lesotho","119":"Liberia","120":"Libyan Arab Jamahiriya","121":"Liechtenstein","122":"Lithuania","123":"Luxembourg","124":"Macao","125":"Macedonia, the Former Yugoslav Republic of","126":"Madagascar","127":"Malawi","128":"Malaysia","129":"Maldives","130":"Mali","131":"Malta","132":"Marshall Islands","133":"Martinique","134":"Mauritania","135":"Mauritius","136":"Mayotte","137":"Mexico","138":"Micronesia, Federated States of","139":"Moldova, Republic of","140":"Monaco","141":"Mongolia","142":"Montenegro","143":"Montserrat","144":"Morocco","145":"Mozambique","146":"Namibia","147":"Nauru","148":"Nepal","149":"Netherlands","150":"Netherlands Antilles","151":"New Caledonia","152":"New Zealand","153":"Nicaragua","154":"Niger","155":"Nigeria","156":"Niue","157":"Norfolk Island","158":"Northern Mariana Islands","159":"Norway","160":"Oman","161":"Pakistan","162":"Palau","163":"Palestinian territory, Occupied","164":"Panama","165":"Papua New Guinea","166":"Paraguay","167":"Peru","168":"Philippines","169":"Pitcairn","170":"Poland","171":"Portugal","172":"Puerto Rico","173":"Qatar","174":"Reunion","175":"Romania","176":"Russian Federation","177":"Rwanda","178":"Saint Helena","179":"Saint Kitts and Nevis","180":"Saint Lucia","181":"Saint Pierre and Miquelon","182":"Saint Vincent and the Grenadines","183":"Samoa","184":"San Marino","185":"Sao Tome and Principe","186":"Saudi Arabia","187":"Senegal","188":"Serbia","189":"Seychelles","190":"Sierra Leone","191":"Singapore","192":"Slovakia","193":"Slovenia","194":"Solomon Islands","195":"Somalia","196":"South Africa","197":"South Georgia and the South Sandwich Islands","198":"Spain","199":"Sri Lanka","200":"Suriname","201":"Svalbard and Jan Mayen","202":"Swaziland","203":"Sweden","204":"Switzerland","205":"Taiwan","206":"Tajikistan","207":"Tanzania, United Republic of","208":"Thailand","209":"Togo","210":"Tokelau","211":"Tonga","212":"Trinidad and Tobago","213":"Tunisia","214":"Turkey","215":"Turkmenistan","216":"Turks and Caicos Islands","217":"Tuvalu","218":"Uganda","219":"Ukraine","220":"United Arab Emirates","221":"United Kingdom","222":"United States","223":"Uruguay","224":"Uzbekistan","225":"Vanuatu","226":"Venezuela","227":"Vietnam","228":"Virgin Islands, British","229":"Virgin Islands, U S","230":"Wallis and Futuna","231":"Western Sahara","232":"Yemen","233":"Zambia","234":"Zimbabwe"},"2":"Format","3":{},"4":"Type","5":{}}}}};
    return this;
})
.factory('Auth', function(){
    var observerCallbacks = [];

  this.registerObserverCallback = function(callback){
    observerCallbacks.push(callback);
  };

//   var store = function(){
//      localStorage.setItem('listuser', angular.fromJson(user));
//   };
 
//      var retrieve = function(){
//          if(localStorage.hasOwnProperty('listuser')){
//             user = angular.toJson(localStorage.getItem('listuser'));
//          }
//      };
     
  var notifyObservers = function(){
    angular.forEach(observerCallbacks, function(callback){
      callback();
    });
  };
  this.setUser = function(aUser){
            user = aUser;
            // store();
            notifyObservers();
        };
    this.isLoggedIn = function(){
            // if(!user){
            //     retrieve();
            // }
            return (user)?user:false;
        };
    var user;
    return this;
})
.controller('LoginController', ['$scope', 'Auth', 'Restangular','$state', function($scope, Auth, Restangular, $state){
    $scope.userName = '';
    $scope.password = '';
    $scope.login = function login(){
        Restangular.all('users/login').post({user:$scope.userName, password:$scope.password}).then(function(data){
           Auth.setUser(data);
           $state.go('default');
        });
    };
}])
.controller('LogoutController', ['$scope', 'Auth', 'Restangular','$state', function($scope, Auth, Restangular, $state){
    $scope.logout = function logout(){
        Auth.setUser(undefined);
        $state.go('login');
    };
    $scope.logout();
}]);

/**
* UI ROUTER CONFIG FILE
* router.js
*/
ngListApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.when('',['$state', function($state){
        $state.go('default');
    }]);
    $urlRouterProvider.when('/',['$state', function($state){
        $state.go('default');
    }]);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('default', {
            url:'/',
            templateUrl: 'partials/home.html',
            controller: 'HomePageController'
        })
        .state('login',{
            url:'/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .state('logout',{
            url:'/logout',
            templateUrl: 'partials/logout.html',
            controller: 'LogoutController'
        })
        .state('list', {
            url:'/list',
            templateUrl: 'partials/list.html',
            controller: 'ListMainController'
        })
        .state('list.new',{
            url:'/new',
            templateUrl: 'partials/list/new.html',
            controller: 'NewListController'
        })
        .state('list.unsold',{
            url:'/unsold',
            templateUrl: 'partials/list/unsold.html',
            controller: 'UnsoldListController'
        })
        .state('list.saved',{
            url:'/saved',
            templateUrl: 'partials/list/saved.html',
            controller: 'SavedListController'
        });
}] );

/**
* CONTROLLERS FILE
* controllers.js
*/
ngListApp.controller('SiteController', ['$scope', 'toaster', '$window', '$http', '$stateParams', '$state', 'Auth', function ($scope, toaster, $window, $http, $stateParams, $state, Auth){
    $scope.loggedin = false;
    $scope.user = {};
    $scope.init = function init(){
        $scope.loggedin = Auth.isLoggedIn()? true : false;
        $scope.user = Auth.isLoggedIn();
    };
    Auth.registerObserverCallback($scope.init);
    $scope.init();
}]);
ngListApp.controller('HomePageController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
ngListApp.controller('SavedListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
ngListApp.controller('UnsoldListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout','ngTableParams', 'Restangular','Cats', function($scope, $http, $stateParams, $window, lodash, $timeout, ngTableParams, Restangular, Cats){
    $scope.selectedItem;
    $scope.isEdit = false;
    $scope.currPage = 1;
    $scope.pages = 1;
    $scope.categories;
    var page = 1;
    $scope.selectedCategory;
    $scope.specifics;
    $scope.selectedStoreCategory;
    $scope.loading = true;
    $scope.started = false;
    $scope.byfile = false;
    $scope.needcats = true;

    $scope.storeCategoryIDs = [
		{
			name:"Other",
			value: 1
		},
		{
			name:"Textbook",
			value: 331155519
		},
		{
			name:"child young adult book",
			value: 319734419
		},
		{
			name:"Fiction Book",
			value: 319734319
		},
		{
			name:"Non-Fiction Book",
			value: 319734219
		}
	];
	$scope.switchToCSV = function switchToCSV(){
        $scope.byfile = !$scope.byfile;  
	    $scope.enableDrop();
    };
    $scope.enableDrop = function enableDrop(){
        var dropZone = angular.element('.drop_zone');
        dropZone.bind('dragover', handleDragOver);
        dropZone.bind('drop', setFile);
    };	
    var setFile = function setFile(evt){
        evt.stopPropagation();
        evt.preventDefault();
        var reader = new FileReader();
        reader.onload = function(onLoadEvent){
            $scope.fileContents = onLoadEvent.target.result;
            $scope.fileContents = csvToJSON($scope.fileContents);
            
            $scope.initByFile();
        }
        
        reader.readAsText(evt.dataTransfer.files[0]);
    };
	$scope.startFile = function startFile(){
        $scope.started = true;
        $scope.loading = true;
        var reader = new FileReader();
        reader.onload = function(onLoadEvent){
            $scope.fileContents = onLoadEvent.target.result;
            $scope.fileContents = CSV2JSON($scope.fileContents);
            
            $scope.initByFile();
        }
        
        reader.readAsText(angular.element(".csvfile")[0].files[0]);
	};
	
	var csvToJSON = function csvToJSON(csv){
        var lines=csv.split("\n");
        var result = [];
        var headers=lines[0].split("\",\"");
        for(var k=0; k<headers.length; k++ ){
            headers[k] = replaceAll(headers[k],"\"","");
        }
        for(var i=1;i<lines.length;i++){
            var obj = {};
            var currentline=lines[i].split(",");
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = replaceAll(currentline[j],"\"","");
            }
            
            result.push(obj);
        }
        return result;
	};


    var CSVToArray = function CSVToArray(strData, strDelimiter) {
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp((
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
        var arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec(strData)) {
            var strMatchedDelimiter = arrMatches[1];
        
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                arrData.push([]);
            }
            if (arrMatches[2]) {
                var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"), "\"");
            } else {
                var strMatchedValue = arrMatches[3];
            }
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        return (arrData);
    };

    var CSV2JSON = function CSV2JSON(csv) {
        var array = CSVToArray(csv);
        var objArray = [];
        for (var i = 1; i < array.length; i++) {
            objArray[i - 1] = {};
            for (var k = 0; k < array[0].length && k < array[i].length; k++) {
                var key = array[0][k];
                objArray[i - 1][key] = array[i][k]
            }
        }
        return objArray;
    };



	var startPos = 0;
	$scope.initByFile = function initByFile(){
        var categoryArray = [];
        if($scope.needcats){
            lodash.forEach(Cats.model.payload, function(category) {
                categoryArray.push(category);
            });
            $scope.categories = categoryArray;
            $scope.needcats = false;
        }
        $scope.started = true;
        $scope.loading = true;
        $scope.rows = undefined;
        
        var requestData = [];
        for(var i=startPos; (i<$scope.fileContents.length && i<startPos+10); i++){
            var obj = {
                id: $scope.fileContents[i]["Item ID"]
            };
            requestData.push(obj);
        }
        Restangular.one('ebay').post('list',requestData).then(function(res){
            $scope.rows = res.listings;
            $scope.pages = parseInt(($scope.fileContents.length-startPos)/10)+($scope.fileContents.length-startPos)%10;
            startPos += 10;
            $scope.tableParams.reload();
            $scope.getItemsDetails();
        });
	};

  var handleDragOver =  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  };
  

    $scope.initAuto =  function initAuto(){
        var categoryArray = [];
        if($scope.needcats){
            lodash.forEach(Cats.model.payload, function(category) {
                categoryArray.push(category);
            });
            $scope.categories = categoryArray;
            $scope.needcats = false;
        }
        $scope.started = true;
        $scope.loading = true;
        $scope.rows = undefined;
        Restangular.one('ebay/id/'+page).get().then(function(res){
            $scope.rows = res.listings;
            $scope.pages = res.numPages;
            $scope.tableParams.reload();
            $scope.getItemsDetails();
        });
    };
    $scope.addListings = function addListings(){
        lodash.each($scope.rows, function(item){
            delete item.checked;
            if(angular.isUndefinedOrNullOrEmpty(item.book.depth)){
                item.book.depth = 1.5;
            }
            if(angular.isUndefinedOrNullOrEmpty(item.book.width)){
                item.book.width = 5.5;
            }
            if(angular.isUndefinedOrNullOrEmpty(item.book.height)){
                item.book.height = 8.5;
            }
            Restangular.one("/list").post('new',item).then(function(data){
                if(!data.status){
                    item.error = true;
                }else{
                    item.complete = true;
                }
            });
        });
    };
    $scope.nextPage = function nextPage(){
        if($scope.byfile){
            $scope.initByFile();
        }else{
            $scope.initAuto();
        }
    };
    
    $scope.edit = function edit(ebayId){
        lodash.each($scope.rows, function(currentItem){
            if(currentItem.ebayListingId === ebayId){
                $scope.selectedItem = currentItem;
                if(!angular.isUndefinedOrNullOrEmpty($scope.selectedItem.book.asin)){
                    lodash.each($scope.storeCategoryIDs, function(cat){
                        if(cat.value === currentItem.storeCategory){
                            $scope.selectedStoreCategory = cat;
                        }
                    });
                    lodash.each($scope.categories, function(cat){
                        if(cat.value == currentItem.category){
                            $scope.selectedCategory = cat;
                            $scope.setCategoryInfo();
                        }
                    });
                    $scope.isEdit = true;
                }else{
                    alert("Book does not have amazon information, remove before submitting.");
                }
            }
        })
    };
    
    $scope.cancel = function cancel(){
        $scope.isEdit = false;
    };
    
    $scope.done = function done(){
        $scope.selectedItem.nvps = [];
        
        lodash.each($scope.specifics, function(specific){
            var spec = {
                id: null,
                name: specific.name,
                value: ''
            }
            if(typeof(specific.value)==="object"){
                spec.value = specific.value.name;
            }else{
                spec.value = specific.value;
            }
           $scope.selectedItem.nvps.push(spec);
        });
        $scope.selectedItem.storeCategory = $scope.selectedStoreCategory.value;
        $scope.category = $scope.selectedCategory;
        $scope.selectedItem.checked = true;
        $scope.isEdit = false;
    };
    
    $scope.remove = function remove(ebayId){
        lodash.remove($scope.rows, function(currentItem){ return currentItem.ebayListingId === ebayId});
    };
    $scope.setCategoryInfo = function setCategoryInfo(){
        if (!angular.isUndefinedOrNullOrEmpty($scope.selectedCategory)) {
            $scope.specifics = [];
            _.forEach($scope.selectedCategory.recomend, function(value, index) {
                if (parseInt(index) % 2 === 0) {
                    var opts = [];
                    _.forEach($scope.selectedCategory.recomend[parseInt(index) + 1], function(value) {
                        opts.push({
                            name: value
                        });
                    });
                    if (value === "Publication Year") {
                        $scope.specifics.push({
                            name: value,
                            options: [],
                            value: $scope.selectedItem.book.publishDate.substring(0, 4)
                        });
                    } else if (value === "Language") {
                        $scope.specifics.push({
                            name: value,
                            options: [],
                            value: "English"
                        });
                    } else if (value === "Country/Region of Manufacture") {
                        $scope.specifics.push({
                            name: value,
                            options: [],
                            value: "United States"
                        });
                    } else if (value === "Special Attributes") {
                        if($scope.selectedItem.firstEdition){
                            $scope.specifics.push({
                                name: value,
                                options: [],
                                value: "1st Edition"
                            });
                        }else if($scope.selectedItem.illustrated){
                            $scope.specifics.push({
                                name: value,
                                options: [],
                                value: "Illustrated"
                            });
                        }else if($scope.selectedItem.book.hardcover){
                            $scope.specifics.push({
                                name: value,
                                options: [],
                                value: "Hardcover"
                            });
                        }else{
                            $scope.specifics.push({
                                name: value,
                                options: [],
                                value: "Paperback"
                            });
                        }
                    }
                    else if(value == "Format"){
                        if($scope.selectedItem.book.hardcover){
                            $scope.specifics.push({
                                name: value,
                                options: [],
                                value: "Hardcover"
                            });
                        }else{
                            $scope.specifics.push({
                                name: value,
                                options: [],
                                value: "Paperback"
                            });
                        }
                    }
					else {
                        $scope.specifics.push({
                            name: value,
                            options: opts,
                            value: ''
                        });
                    }
                }
            });
        }  
    };
    $scope.$watch('selectedCategory', function() {
      $scope.setCategoryInfo();
    });
    
    $scope.getItemsDetails = function getItemsDetails(itemid){
        lodash.each($scope.rows, function(item, index){
            $http.get('http://dazeysolutions.com/includes/amazonSearch.php',{
                params:{
                    ISBN: item.book.isbn
                }
            })
            .success(function(data){
                if(angular.isUndefinedOrNullOrEmpty(data.payload[1][0])){
                    $http.get('http://dazeysolutions.com/includes/amazonSearch.php',{
                        params:{
                            ISBN: item.book.isbn
                        }
                    })
                    .success(function(data){
                        if(angular.isUndefinedOrNullOrEmpty(data.payload[1][0])){        
                            alert("Unable to retrieve data for: "+item.ebayTitle+" retry later");
                        }else{
                            processSearch(data,item);
                        }
                        
                    });
                }else{
                    processSearch(data, item);                    
                }
            });
        });
    };
    
    var processSearch = function(data, item){
        var title = item.ebayTitle;
        title = title.toLowerCase();
        if(title.indexOf("1st/1st")>=0){
            item.firstEdition = true;
            item.firstPrinting = true;
        }
        if(title.indexOf("dj")>=0){
            item.dustJacket = true;
        }
        if(title.indexOf("illust")>=0){
            item.illustrated = true;
        }
        if(title.indexOf("bce")>=0){
            item.bookClub = true;
        }
        if(!angular.isUndefinedOrNullOrEmpty(item.conditionDescription)){
            if(item.conditionDescription.indexOf(item.book.isbn)==-1){
                item.conditionDescription += " - "+item.book.isbn;
            }
        }else{
            item.conditionDescription += item.book.isbn;
        }
        var addOnTitle = "";
        var as = data.payload[1][0].AttributeSets[0];
        var asin = data.payload[1][0].Identifiers.MarketplaceASIN.ASIN;
        item.book.asin = asin;
        if(typeof(as.Author) === "object"){
            item.book.author = as.Author[0];
        }else{
            item.book.author = as.Author;
        }
        addOnTitle += " " + item.book.author;
        item.book.publishDate = as.PublicationDate;
        var date = new Date();
        item.ebayDescription+="<p>"+date.toDateString();+"</p>";
        item.ebayDescription+="<p>"+item.book.isbn+"</p>";
        if(as.Binding === "Hardcover"){
            item.book.hardcover = true
            addOnTitle += " HC";
            if(item.bookClub){
                addOnTitle += " BCE";
            }
            if(item.dustJacket){
                addOnTitle += " DJ";
            }
            if(item.firstPrinting && item.firstEdition){
                addOnTitle += " 1st/1st";
            }
            addOnTitle += " Free Ship";
        }
        var extra = 0.25;
        item.book.title = as.Title;
        item.book.title = replaceAll(item.book.title, "/", " ");
        var end = 80;
        end = 79 - addOnTitle.length
        item.ebayTitle = item.book.title.substring(0, end) + addOnTitle;
        if(!angular.isUndefinedOrNullOrEmpty(as.PackageDimensions)){
            if(angular.isUndefinedOrNullOrEmpty(as.PackageDimensions.Weight)){
                as.PackageDimensions.Weight = extra.toString();
            }else{
                as.PackageDimensions.Weight = parseFloat(as.PackageDimensions.Weight)+extra;
                as.PackageDimensions.Weight = as.PackageDimensions.Weight.toString();
            }
            item.book.weightMajor = parseInt(as.PackageDimensions.Weight);
            item.book.weightMinor = Math.ceil((parseFloat(as.PackageDimensions.Weight)*16) % 16);
            while(item.book.weightMinor >= 16){
                item.book.weightMinor -=16;
                item.book.weightMajor += 1;
            }
            if(angular.isUndefinedOrNullOrEmpty(as.PackageDimensions.Height) || as.PackageDimensions.Height == 0){
                item.book.depth = "8.5"
            }else{
                item.book.depth = as.PackageDimensions.Height;
            }
            if(angular.isUndefinedOrNullOrEmpty(as.PackageDimensions.Length) || as.PackageDimensions.Length == 0){
                item.book.height = "5.5";
            }else{
                item.book.height = as.PackageDimensions.Length;    
            }
            if(angular.isUndefinedOrNullOrEmpty(as.PackageDimensions.Width) || as.PackageDimensions.Width == 0){
                item.book.width = "1.5";
            }else{
                item.book.width = as.PackageDimensions.Width;
            }
            
        }
        var imageURL = as.SmallImage.URL.replace("SL75", "SL500");
        item.book.imageUrl = "http://dazeysolutions.com/images/"+asin+".jpg";
        $http.get("http://dazeysolutions.com/includes/get_image.php", {
            params:{
                imagename: asin+".jpg",
                imageurl: imageURL
            }
        })
        .success(function(data){
           loadImage(item); 
            });
    };
    
    var loadImage = function loadImage(item) {
        item.loadingImage = true;
        var src = item.book.imageUrl;
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = function() {
            var imageRatio = img.width / img.height,
                canvasRatio = 1000 / 690;
            if (imageRatio !== canvasRatio) {
                if ((1000 / imageRatio) > 690) {
                    img.width = 690 * imageRatio;
                    img.height = 690;
                } else {
                    img.width = 1000;
                    img.height = 1000 / imageRatio;
                }
            } else {
                img.width = 1000;
                img.height = 690;
            }
            var canvas = angular.element("<canvas height='690' width='1000'></canvas>");
            var context = canvas[0].getContext('2d');
            context.drawImage(img,((1000 / 2)-(img.width/2)), ((690 / 2)-(img.height/2)), img.width, img.height);
            var save = canvas[0].toDataURL("image/jpg");
            $http.post("http://dazeysolutions.com/includes/resize.php", {
                fileName: item.book.asin,
                data: save
            }).success(function(data) {
                delete item.loadingImage;
                console.log(data.success);
            });
        };
        img.src = src;
    };
    
    $scope.rows;
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 20           // count per page
    }, {
        counts: [],
        total: 0,
        getData: function($defer, params) {
               params.total(20);
               $scope.loading = false;
               $defer.resolve($scope.rows);
           
        }
    });
    $scope.init();
}]);
ngListApp.controller('NewListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);

ngListApp.controller('ListMainController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
