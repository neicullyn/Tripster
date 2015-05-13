function showSubcategory(e) {
	this_category = this.getAttribute("id").split("-").slice(1).join(" ");
	console.log(this_category);

	var dude = document.getElementById("dude");
	$("#dude").show();

	test_action = document.getElementById("test-action");
	console.log(test_action.getAttribute("id"));
	$("#"+test_action.getAttribute("id")).removeClass("hidden");
}


btn_active_life = document.getElementById("btn-active-life");


btn_active_life.addEventListener("click", showSubcategory, false);













var myObj = [
    {
        "alias": "abruzzese",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "abruzzese"
    },
    {
        "alias": "absinthebars",
        "country_whitelist": [
            "cz"
        ],
        "parents": [
            "bars"
        ],
        "title": "absinthe bars"
    },
    {
        "alias": "accessories",
        "parents": [
            "fashion"
        ],
        "title": "accessories"
    },
    {
        "alias": "accountants",
        "parents": [
            "professional"
        ],
        "title": "accountants"
    },
    {
        "alias": "active",
        "parents": [
            null
        ],
        "title": "active life"
    },
    {
        "alias": "acupuncture",
        "parents": [
            "health"
        ],
        "title": "acupuncture"
    },
    {
        "alias": "adoptionservices",
        "parents": [
            "localservices"
        ],
        "title": "adoption services"
    },
    {
        "alias": "adult",
        "parents": [
            "shopping"
        ],
        "title": "adult"
    },
    {
        "alias": "adultedu",
        "parents": [
            "education"
        ],
        "title": "adult education"
    },
    {
        "alias": "adultentertainment",
        "parents": [
            "nightlife"
        ],
        "title": "adult entertainment"
    },
    {
        "alias": "advertising",
        "parents": [
            "professional"
        ],
        "title": "advertising"
    },
    {
        "alias": "afghani",
        "country_blacklist": [
            "tr",
            "mx",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "afghan"
    },
    {
        "alias": "african",
        "country_blacklist": [
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "african"
    },
    {
        "alias": "agriturismi",
        "country_whitelist": [
            "fr",
            "it",
            "cl"
        ],
        "parents": [
            "hotels"
        ],
        "title": "agriturismi"
    },
    {
        "alias": "aircraftdealers",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "aircraft dealers"
    },
    {
        "alias": "airlines",
        "parents": [
            "transport"
        ],
        "title": "airlines"
    },
    {
        "alias": "airport_shuttles",
        "parents": [
            "transport"
        ],
        "title": "airport shuttles"
    },
    {
        "alias": "airportlounges",
        "parents": [
            "bars"
        ],
        "title": "airport lounges"
    },
    {
        "alias": "airports",
        "parents": [
            "hotelstravel"
        ],
        "title": "airports"
    },
    {
        "alias": "alentejo",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "alentejo"
    },
    {
        "alias": "algarve",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "algarve"
    },
    {
        "alias": "allergist",
        "parents": [
            "physicians"
        ],
        "title": "allergists"
    },
    {
        "alias": "alsatian",
        "country_whitelist": [
            "fr",
            "de"
        ],
        "parents": [
            "french"
        ],
        "title": "alsatian"
    },
    {
        "alias": "altoatesine",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "altoatesine"
    },
    {
        "alias": "amateursportsteams",
        "parents": [
            "active"
        ],
        "title": "amateur sports teams"
    },
    {
        "alias": "amusementparks",
        "parents": [
            "active"
        ],
        "title": "amusement parks"
    },
    {
        "alias": "anesthesiologists",
        "country_whitelist": [
            "be",
            "fr",
            "au",
            "se",
            "pt",
            "it",
            "us"
        ],
        "parents": [
            "physicians"
        ],
        "title": "anesthesiologists"
    },
    {
        "alias": "animalshelters",
        "parents": [
            "pets"
        ],
        "title": "animal shelters"
    },
    {
        "alias": "antiques",
        "parents": [
            "shopping"
        ],
        "title": "antiques"
    },
    {
        "alias": "apartments",
        "parents": [
            "realestate"
        ],
        "title": "apartments"
    },
    {
        "alias": "appliances",
        "parents": [
            "homeandgarden"
        ],
        "title": "appliances"
    },
    {
        "alias": "appraisalservices",
        "parents": [
            "localservices"
        ],
        "title": "appraisal services"
    },
    {
        "alias": "apulian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "apulian"
    },
    {
        "alias": "aquariums",
        "parents": [
            "active"
        ],
        "title": "aquariums"
    },
    {
        "alias": "aquariumservices",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "petservices"
        ],
        "title": "aquarium services"
    },
    {
        "alias": "arabian",
        "country_blacklist": [
            "dk"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "arabian"
    },
    {
        "alias": "arabpizza",
        "country_whitelist": [
            "br"
        ],
        "parents": [
            "arabian"
        ],
        "title": "arab pizza"
    },
    {
        "alias": "arcades",
        "parents": [
            "arts"
        ],
        "title": "arcades"
    },
    {
        "alias": "archery",
        "parents": [
            "active"
        ],
        "title": "archery"
    },
    {
        "alias": "architects",
        "parents": [
            "professional"
        ],
        "title": "architects"
    },
    {
        "alias": "architecturaltours",
        "parents": [
            "tours"
        ],
        "title": "architectural tours"
    },
    {
        "alias": "argentine",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "argentine"
    },
    {
        "alias": "armenian",
        "country_whitelist": [
            "es",
            "be",
            "fr",
            "tr",
            "it",
            "us",
            "cz",
            "ar",
            "gb",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "armenian"
    },
    {
        "alias": "arroceria_paella",
        "country_whitelist": [
            "es"
        ],
        "parents": [
            "spanish"
        ],
        "title": "arroceria / paella"
    },
    {
        "alias": "artclasses",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "education"
        ],
        "title": "art classes"
    },
    {
        "alias": "arts",
        "parents": [
            null
        ],
        "title": "arts & entertainment"
    },
    {
        "alias": "artsandcrafts",
        "parents": [
            "shopping"
        ],
        "title": "arts & crafts"
    },
    {
        "alias": "artschools",
        "parents": [
            "specialtyschools"
        ],
        "title": "art schools"
    },
    {
        "alias": "artspacerentals",
        "country_whitelist": [
            "hk",
            "se",
            "sg",
            "jp",
            "it",
            "us"
        ],
        "parents": [
            "realestate"
        ],
        "title": "art space rentals"
    },
    {
        "alias": "artsupplies",
        "parents": [
            "artsandcrafts"
        ],
        "title": "art supplies"
    },
    {
        "alias": "arttours",
        "parents": [
            "tours"
        ],
        "title": "art tours"
    },
    {
        "alias": "asianfusion",
        "parents": [
            "restaurants"
        ],
        "title": "asian fusion"
    },
    {
        "alias": "asturian",
        "country_whitelist": [
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "asturian"
    },
    {
        "alias": "atvrentals",
        "country_whitelist": [
            "fi",
            "se",
            "us",
            "no"
        ],
        "parents": [
            "active"
        ],
        "title": "atv rentals/tours"
    },
    {
        "alias": "auctionhouses",
        "country_whitelist": [
            "es",
            "be",
            "fr",
            "dk",
            "pt",
            "it",
            "us",
            "au",
            "gb",
            "mx",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "auction houses"
    },
    {
        "alias": "audiologist",
        "country_blacklist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "physicians"
        ],
        "title": "audiologist"
    },
    {
        "alias": "australian",
        "country_blacklist": [
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "australian"
    },
    {
        "alias": "austrian",
        "country_blacklist": [
            "dk",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "austrian"
    },
    {
        "alias": "authorized_postal_representative",
        "country_whitelist": [
            "se",
            "no"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "authorized postal representative"
    },
    {
        "alias": "auto",
        "parents": [
            null
        ],
        "title": "automotive"
    },
    {
        "alias": "auto_detailing",
        "country_blacklist": [
            "ch",
            "au",
            "dk",
            "br",
            "de",
            "es",
            "at"
        ],
        "parents": [
            "auto"
        ],
        "title": "auto detailing"
    },
    {
        "alias": "autocustomization",
        "country_whitelist": [
            "sg",
            "pt",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "auto customization"
    },
    {
        "alias": "autodamageassessment",
        "country_whitelist": [
            "de",
            "dk",
            "se",
            "no"
        ],
        "parents": [
            "auto"
        ],
        "title": "car inspectors"
    },
    {
        "alias": "autoelectric",
        "country_whitelist": [
            "it",
            "br"
        ],
        "parents": [
            "auto"
        ],
        "title": "auto electric services"
    },
    {
        "alias": "autoglass",
        "country_blacklist": [
            "dk",
            "es"
        ],
        "parents": [
            "auto"
        ],
        "title": "auto glass services"
    },
    {
        "alias": "autoloanproviders",
        "country_whitelist": [
            "au",
            "pt",
            "sg",
            "tr",
            "it",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "auto loan providers"
    },
    {
        "alias": "autopartssupplies",
        "parents": [
            "auto"
        ],
        "title": "auto parts & supplies"
    },
    {
        "alias": "autorepair",
        "parents": [
            "auto"
        ],
        "title": "auto repair"
    },
    {
        "alias": "auvergnat",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "french"
        ],
        "title": "auvergnat"
    },
    {
        "alias": "azores",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "azores"
    },
    {
        "alias": "baby_gear",
        "parents": [
            "shopping"
        ],
        "title": "baby gear & furniture"
    },
    {
        "alias": "baden",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "german"
        ],
        "title": "baden"
    },
    {
        "alias": "badminton",
        "country_blacklist": [
            "nz",
            "sg",
            "br",
            "es",
            "pl"
        ],
        "parents": [
            "active"
        ],
        "title": "badminton"
    },
    {
        "alias": "bagels",
        "country_blacklist": [
            "au",
            "es"
        ],
        "parents": [
            "food"
        ],
        "title": "bagels"
    },
    {
        "alias": "baguettes",
        "country_whitelist": [
            "pt",
            "no",
            "de",
            "tr",
            "it",
            "se",
            "mx"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "baguettes"
    },
    {
        "alias": "bailbondsmen",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "localservices"
        ],
        "title": "bail bondsmen"
    },
    {
        "alias": "bakeries",
        "parents": [
            "food"
        ],
        "title": "bakeries"
    },
    {
        "alias": "bangladeshi",
        "country_blacklist": [
            "es",
            "tr",
            "dk",
            "pt",
            "mx"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "bangladeshi"
    },
    {
        "alias": "bankruptcy",
        "parents": [
            "lawyers"
        ],
        "title": "bankruptcy law"
    },
    {
        "alias": "banks",
        "parents": [
            "financialservices"
        ],
        "title": "banks & credit unions"
    },
    {
        "alias": "barbers",
        "parents": [
            "beautysvc"
        ],
        "title": "barbers"
    },
    {
        "alias": "barreclasses",
        "country_whitelist": [
            "au",
            "pt",
            "us"
        ],
        "parents": [
            "fitness"
        ],
        "title": "barre classes"
    },
    {
        "alias": "bars",
        "parents": [
            "nightlife"
        ],
        "title": "bars"
    },
    {
        "alias": "bartenders",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "dk",
            "pt",
            "ca",
            "de",
            "it",
            "us",
            "au"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "bartenders"
    },
    {
        "alias": "bartendingschools",
        "parents": [
            "specialtyschools"
        ],
        "title": "bartending schools"
    },
    {
        "alias": "basketballcourts",
        "country_blacklist": [
            "nl",
            "ca",
            "pl",
            "cz",
            "gb",
            "br",
            "ie",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "basketball courts"
    },
    {
        "alias": "basque",
        "country_blacklist": [
            "tr",
            "au",
            "sg",
            "dk",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "basque"
    },
    {
        "alias": "bathing_area",
        "country_whitelist": [
            "pt",
            "no",
            "fi",
            "de",
            "jp",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "bathing area"
    },
    {
        "alias": "batterystores",
        "parents": [
            "shopping"
        ],
        "title": "battery stores"
    },
    {
        "alias": "battingcages",
        "country_whitelist": [
            "jp",
            "sg",
            "us",
            "tw"
        ],
        "parents": [
            "active"
        ],
        "title": "batting cages"
    },
    {
        "alias": "bavarian",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "bavarian"
    },
    {
        "alias": "bbq",
        "country_blacklist": [
            "au",
            "br",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "barbeque"
    },
    {
        "alias": "beachbars",
        "country_whitelist": [
            "fr",
            "ch",
            "nl",
            "pt",
            "no",
            "de",
            "it",
            "au",
            "at",
            "sg",
            "se"
        ],
        "parents": [
            "bars"
        ],
        "title": "beach bars"
    },
    {
        "alias": "beaches",
        "parents": [
            "active"
        ],
        "title": "beaches"
    },
    {
        "alias": "beachvolleyball",
        "country_whitelist": [
            "dk",
            "no",
            "de",
            "jp",
            "au",
            "at",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "beach volleyball"
    },
    {
        "alias": "beautysvc",
        "parents": [
            null
        ],
        "title": "beauty & spas"
    },
    {
        "alias": "bedbreakfast",
        "country_blacklist": [
            "sg"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "bed & breakfast"
    },
    {
        "alias": "beer_and_wine",
        "parents": [
            "food"
        ],
        "title": "beer, wine & spirits"
    },
    {
        "alias": "beerbar",
        "country_whitelist": [
            "be",
            "fr",
            "pt",
            "cl",
            "nz",
            "au",
            "mx",
            "es"
        ],
        "parents": [
            "bars"
        ],
        "title": "beer bar"
    },
    {
        "alias": "beergarden",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "beer garden"
    },
    {
        "alias": "beergardens",
        "country_whitelist": [
            "fr",
            "au",
            "se",
            "de",
            "it",
            "us",
            "pl"
        ],
        "parents": [
            "nightlife"
        ],
        "title": "beer gardens"
    },
    {
        "alias": "beerhall",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "beer hall"
    },
    {
        "alias": "beira",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "beira"
    },
    {
        "alias": "beisl",
        "country_whitelist": [
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "beisl"
    },
    {
        "alias": "belgian",
        "country_blacklist": [
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "belgian"
    },
    {
        "alias": "berrichon",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "french"
        ],
        "title": "berrichon"
    },
    {
        "alias": "bespoke",
        "country_whitelist": [
            "fr",
            "pt",
            "de",
            "it",
            "us",
            "at",
            "sg",
            "es"
        ],
        "parents": [
            "shopping"
        ],
        "title": "bespoke clothing"
    },
    {
        "alias": "bettingcenters",
        "country_blacklist": [
            "fr",
            "no",
            "ca",
            "us",
            "nz",
            "br",
            "fi",
            "sg",
            "es"
        ],
        "parents": [
            "arts"
        ],
        "title": "betting centers"
    },
    {
        "alias": "beverage_stores",
        "country_whitelist": [
            "es",
            "ch",
            "pt",
            "cl",
            "de",
            "tr",
            "it",
            "au",
            "at",
            "se"
        ],
        "parents": [
            "food"
        ],
        "title": "beverage store"
    },
    {
        "alias": "bicyclepaths",
        "country_whitelist": [
            "dk",
            "pt",
            "cl",
            "no",
            "nz",
            "ar",
            "au",
            "fi",
            "mx"
        ],
        "parents": [
            "active"
        ],
        "title": "bicycle paths"
    },
    {
        "alias": "bicycles",
        "country_whitelist": [
            "dk"
        ],
        "parents": [
            null
        ],
        "title": "bicycles"
    },
    {
        "alias": "bike_repair_maintenance",
        "parents": [
            "localservices"
        ],
        "title": "bike repair/maintenance"
    },
    {
        "alias": "bikeassociations",
        "country_whitelist": [
            "dk",
            "pt"
        ],
        "parents": [
            "bicycles"
        ],
        "title": "bike associations"
    },
    {
        "alias": "bikerentals",
        "parents": [
            "active"
        ],
        "title": "bike rentals"
    },
    {
        "alias": "bikerepair",
        "country_whitelist": [
            "dk",
            "pt"
        ],
        "parents": [
            "bicycles"
        ],
        "title": "bike repair"
    },
    {
        "alias": "bikes",
        "parents": [
            "sportgoods"
        ],
        "title": "bikes"
    },
    {
        "alias": "bikesharing",
        "parents": [
            "transport"
        ],
        "title": "bike sharing"
    },
    {
        "alias": "bikeshop",
        "country_whitelist": [
            "dk",
            "pt"
        ],
        "parents": [
            "bicycles"
        ],
        "title": "bike shop"
    },
    {
        "alias": "bingo",
        "country_whitelist": [
            "es",
            "dk",
            "cl",
            "no",
            "it",
            "us",
            "nz",
            "ar",
            "au",
            "gb",
            "br",
            "fi",
            "ie",
            "mx",
            "se"
        ],
        "parents": [
            "arts"
        ],
        "title": "bingo halls"
    },
    {
        "alias": "bistros",
        "country_blacklist": [
            "es",
            "ca",
            "dk",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "bistros"
    },
    {
        "alias": "blacksea",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "black sea"
    },
    {
        "alias": "blinds",
        "parents": [
            "homeservices"
        ],
        "title": "shades & blinds"
    },
    {
        "alias": "blowfish",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "blowfish"
    },
    {
        "alias": "blowoutservices",
        "country_whitelist": [
            "pt",
            "ca",
            "tr",
            "us",
            "cz",
            "au",
            "gb",
            "ie"
        ],
        "parents": [
            "hair"
        ],
        "title": "blow dry/out services"
    },
    {
        "alias": "boatcharters",
        "parents": [
            "eventservices"
        ],
        "title": "boat charters"
    },
    {
        "alias": "boatdealers",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "boat dealers"
    },
    {
        "alias": "boating",
        "parents": [
            "active"
        ],
        "title": "boating"
    },
    {
        "alias": "boatrepair",
        "parents": [
            "professional"
        ],
        "title": "boat repair"
    },
    {
        "alias": "bodyshops",
        "country_blacklist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "auto"
        ],
        "title": "body shops"
    },
    {
        "alias": "bookbinding",
        "country_whitelist": [
            "be",
            "fr",
            "fi",
            "tr",
            "it",
            "es"
        ],
        "parents": [
            "localservices"
        ],
        "title": "bookbinding"
    },
    {
        "alias": "bookstores",
        "parents": [
            "media"
        ],
        "title": "bookstores"
    },
    {
        "alias": "bootcamps",
        "country_whitelist": [
            "nz",
            "au",
            "es",
            "pt",
            "se",
            "it",
            "us"
        ],
        "parents": [
            "fitness"
        ],
        "title": "boot camps"
    },
    {
        "alias": "bourguignon",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "french"
        ],
        "title": "bourguignon"
    },
    {
        "alias": "bowling",
        "parents": [
            "active"
        ],
        "title": "bowling"
    },
    {
        "alias": "boxing",
        "country_blacklist": [
            "es",
            "dk",
            "no",
            "tr",
            "cz",
            "au",
            "pl",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "fitness"
        ],
        "title": "boxing"
    },
    {
        "alias": "brasseries",
        "parents": [
            "restaurants"
        ],
        "title": "brasseries"
    },
    {
        "alias": "brazilian",
        "parents": [
            "restaurants"
        ],
        "title": "brazilian"
    },
    {
        "alias": "brazilianempanadas",
        "country_whitelist": [
            "br"
        ],
        "parents": [
            "brazilian"
        ],
        "title": "brazilian empanadas"
    },
    {
        "alias": "breakfast_brunch",
        "parents": [
            "restaurants"
        ],
        "title": "breakfast & brunch"
    },
    {
        "alias": "breweries",
        "parents": [
            "food"
        ],
        "title": "breweries"
    },
    {
        "alias": "brewingsupplies",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "shopping"
        ],
        "title": "brewing supplies"
    },
    {
        "alias": "bridal",
        "parents": [
            "shopping"
        ],
        "title": "bridal"
    },
    {
        "alias": "british",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "british"
    },
    {
        "alias": "bubbletea",
        "country_whitelist": [
            "be",
            "fr",
            "dk",
            "no",
            "tw",
            "de",
            "jp",
            "us",
            "hk",
            "au",
            "gb",
            "fi",
            "sg",
            "pl"
        ],
        "parents": [
            "food"
        ],
        "title": "bubble tea"
    },
    {
        "alias": "buddhist_temples",
        "parents": [
            "religiousorgs"
        ],
        "title": "buddhist temples"
    },
    {
        "alias": "buffets",
        "parents": [
            "restaurants"
        ],
        "title": "buffets"
    },
    {
        "alias": "buildingsupplies",
        "parents": [
            "homeservices"
        ],
        "title": "building supplies"
    },
    {
        "alias": "bulgarian",
        "country_blacklist": [
            "nl",
            "dk",
            "pt",
            "no",
            "ca",
            "tr",
            "us",
            "cz",
            "nz",
            "br",
            "sg",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "bulgarian"
    },
    {
        "alias": "bulkbilling",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "medcenters"
        ],
        "title": "bulk billing"
    },
    {
        "alias": "bungeejumping",
        "country_whitelist": [
            "nz",
            "pt"
        ],
        "parents": [
            "active"
        ],
        "title": "bungee jumping"
    },
    {
        "alias": "burgers",
        "parents": [
            "restaurants"
        ],
        "title": "burgers"
    },
    {
        "alias": "burmese",
        "country_blacklist": [
            "fi",
            "tr",
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "burmese"
    },
    {
        "alias": "buses",
        "parents": [
            "transport"
        ],
        "title": "buses"
    },
    {
        "alias": "businesslawyers",
        "country_whitelist": [
            "ca",
            "ie",
            "gb",
            "us",
            "pt"
        ],
        "parents": [
            "lawyers"
        ],
        "title": "business law"
    },
    {
        "alias": "bustours",
        "parents": [
            "tours"
        ],
        "title": "bus tours"
    },
    {
        "alias": "butcher",
        "country_blacklist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "food"
        ],
        "title": "butcher"
    },
    {
        "alias": "c_and_mh",
        "parents": [
            "health"
        ],
        "title": "counseling & mental health"
    },
    {
        "alias": "cabaret",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "arts"
        ],
        "title": "cabaret"
    },
    {
        "alias": "cabinetry",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "cabinetry"
    },
    {
        "alias": "cafes",
        "country_blacklist": [
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cafes"
    },
    {
        "alias": "cafeteria",
        "country_blacklist": [
            "fr",
            "ie",
            "ca",
            "cz",
            "nz",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cafeteria"
    },
    {
        "alias": "cajun",
        "country_blacklist": [
            "au",
            "sg",
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cajun/creole"
    },
    {
        "alias": "cakeshop",
        "country_blacklist": [
            "nl",
            "cl",
            "ca",
            "tr",
            "us",
            "cz",
            "ar",
            "es",
            "hk",
            "fi",
            "pl"
        ],
        "parents": [
            "food"
        ],
        "title": "patisserie/cake shop"
    },
    {
        "alias": "calabrian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "calabrian"
    },
    {
        "alias": "cambodian",
        "country_blacklist": [
            "fi",
            "tr",
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cambodian"
    },
    {
        "alias": "campgrounds",
        "parents": [
            "hotelstravel"
        ],
        "title": "campgrounds"
    },
    {
        "alias": "candy",
        "parents": [
            "gourmet"
        ],
        "title": "candy stores"
    },
    {
        "alias": "cannabis_clinics",
        "country_whitelist": [
            "nl",
            "gb",
            "ie",
            "ca",
            "tr",
            "us",
            "pl"
        ],
        "parents": [
            "health"
        ],
        "title": "cannabis clinics"
    },
    {
        "alias": "canteen",
        "country_whitelist": [
            "ch",
            "dk",
            "no",
            "de",
            "jp",
            "it",
            "at",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "canteen"
    },
    {
        "alias": "cantonese",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "tw",
            "jp",
            "it",
            "us",
            "hk",
            "nz",
            "ar",
            "au",
            "gb",
            "sg",
            "se"
        ],
        "parents": [
            "chinese"
        ],
        "title": "cantonese"
    },
    {
        "alias": "car_dealers",
        "parents": [
            "auto"
        ],
        "title": "car dealers"
    },
    {
        "alias": "carbuyers",
        "country_whitelist": [
            "au",
            "nz",
            "sg",
            "br",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "car buyers"
    },
    {
        "alias": "cardiology",
        "parents": [
            "physicians"
        ],
        "title": "cardiologists"
    },
    {
        "alias": "careercounseling",
        "parents": [
            "professional"
        ],
        "title": "career counseling"
    },
    {
        "alias": "caribbean",
        "country_blacklist": [
            "fi",
            "tr",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "caribbean"
    },
    {
        "alias": "carpenters",
        "country_blacklist": [
            "tr"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "carpenters"
    },
    {
        "alias": "carpet_cleaning",
        "parents": [
            "localservices"
        ],
        "title": "carpet cleaning"
    },
    {
        "alias": "carpeting",
        "parents": [
            "homeservices"
        ],
        "title": "carpeting"
    },
    {
        "alias": "carpetinstallation",
        "parents": [
            "homeservices"
        ],
        "title": "carpet installation"
    },
    {
        "alias": "carrental",
        "parents": [
            "hotelstravel"
        ],
        "title": "car rental"
    },
    {
        "alias": "carshares",
        "country_whitelist": [
            "fr",
            "ch",
            "dk",
            "no",
            "ca",
            "de",
            "us",
            "au",
            "at"
        ],
        "parents": [
            "auto"
        ],
        "title": "car share services"
    },
    {
        "alias": "carwash",
        "parents": [
            "auto"
        ],
        "title": "car wash"
    },
    {
        "alias": "casinos",
        "country_blacklist": [
            "hk",
            "jp"
        ],
        "parents": [
            "arts"
        ],
        "title": "casinos"
    },
    {
        "alias": "castles",
        "country_whitelist": [
            "es",
            "be",
            "fr",
            "ch",
            "pt",
            "no",
            "de",
            "jp",
            "it",
            "at",
            "fi",
            "se",
            "gb"
        ],
        "parents": [
            "arts"
        ],
        "title": "castles"
    },
    {
        "alias": "catalan",
        "country_whitelist": [
            "es",
            "fr",
            "tr",
            "it",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "catalan"
    },
    {
        "alias": "catering",
        "parents": [
            "eventservices"
        ],
        "title": "caterers"
    },
    {
        "alias": "centralbrazilian",
        "country_whitelist": [
            "br"
        ],
        "parents": [
            "brazilian"
        ],
        "title": "central brazilian"
    },
    {
        "alias": "challengecourses",
        "country_whitelist": [
            "hk",
            "nz",
            "ch",
            "at",
            "de",
            "us"
        ],
        "parents": [
            "active"
        ],
        "title": "challenge courses"
    },
    {
        "alias": "champagne_bars",
        "country_blacklist": [
            "au"
        ],
        "parents": [
            "bars"
        ],
        "title": "champagne bars"
    },
    {
        "alias": "cheekufta",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "turkish"
        ],
        "title": "chee kufta"
    },
    {
        "alias": "cheese",
        "parents": [
            "gourmet"
        ],
        "title": "cheese shops"
    },
    {
        "alias": "cheesesteaks",
        "country_whitelist": [
            "nl",
            "gb",
            "au",
            "ca",
            "ie",
            "us",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cheesesteaks"
    },
    {
        "alias": "chicken_wings",
        "country_whitelist": [
            "ie",
            "ca",
            "de",
            "tr",
            "us",
            "ar",
            "at",
            "br",
            "sg",
            "gb"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "chicken wings"
    },
    {
        "alias": "chickenshop",
        "parents": [
            "restaurants"
        ],
        "title": "chicken shop"
    },
    {
        "alias": "childcare",
        "parents": [
            "localservices"
        ],
        "title": "child care & day care"
    },
    {
        "alias": "childcloth",
        "parents": [
            "fashion"
        ],
        "title": "children's clothing"
    },
    {
        "alias": "chilean",
        "country_whitelist": [
            "fi",
            "fr",
            "br",
            "cl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "chilean"
    },
    {
        "alias": "chimneysweeps",
        "country_blacklist": [
            "ar",
            "mx"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "chimney sweeps"
    },
    {
        "alias": "chinese",
        "parents": [
            "restaurants"
        ],
        "title": "chinese"
    },
    {
        "alias": "chinesebazaar",
        "country_whitelist": [
            "es",
            "pt"
        ],
        "parents": [
            "shopping"
        ],
        "title": "chinese bazaar"
    },
    {
        "alias": "chiropractors",
        "parents": [
            "health"
        ],
        "title": "chiropractors"
    },
    {
        "alias": "chocolate",
        "parents": [
            "gourmet"
        ],
        "title": "chocolatiers & shops"
    },
    {
        "alias": "choirs",
        "country_blacklist": [
            "be",
            "nl",
            "ca",
            "us",
            "cz",
            "nz",
            "br",
            "sg",
            "pl"
        ],
        "parents": [
            "arts"
        ],
        "title": "choirs"
    },
    {
        "alias": "christmastrees",
        "parents": [
            "homeandgarden"
        ],
        "title": "christmas trees"
    },
    {
        "alias": "churches",
        "parents": [
            "religiousorgs"
        ],
        "title": "churches"
    },
    {
        "alias": "churros",
        "country_whitelist": [
            "es",
            "ar",
            "mx",
            "pt",
            "cl"
        ],
        "parents": [
            "food"
        ],
        "title": "churros"
    },
    {
        "alias": "circusschools",
        "country_whitelist": [
            "fi",
            "fr",
            "mx",
            "pt"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "circus schools"
    },
    {
        "alias": "climbing",
        "parents": [
            "active"
        ],
        "title": "climbing"
    },
    {
        "alias": "clowns",
        "country_blacklist": [
            "pl",
            "se",
            "no",
            "fi",
            "sg",
            "tr",
            "es"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "clowns"
    },
    {
        "alias": "cocktailbars",
        "parents": [
            "bars"
        ],
        "title": "cocktail bars"
    },
    {
        "alias": "coffee",
        "parents": [
            "food"
        ],
        "title": "coffee & tea"
    },
    {
        "alias": "coffeeshops",
        "country_whitelist": [
            "nl",
            "pt"
        ],
        "parents": [
            "nightlife"
        ],
        "title": "coffeeshops"
    },
    {
        "alias": "coffeeteasupplies",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "food"
        ],
        "title": "coffee & tea supplies"
    },
    {
        "alias": "collegecounseling",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "education"
        ],
        "title": "college counseling"
    },
    {
        "alias": "collegeuniv",
        "parents": [
            "education"
        ],
        "title": "colleges & universities"
    },
    {
        "alias": "colombian",
        "country_whitelist": [
            "be",
            "fr",
            "cl",
            "fi",
            "ca",
            "mx",
            "us"
        ],
        "parents": [
            "latin"
        ],
        "title": "colombian"
    },
    {
        "alias": "comedyclubs",
        "parents": [
            "nightlife"
        ],
        "title": "comedy clubs"
    },
    {
        "alias": "comfortfood",
        "country_whitelist": [
            "ar",
            "fi",
            "ca",
            "jp",
            "mx",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "comfort food"
    },
    {
        "alias": "comicbooks",
        "country_blacklist": [
            "dk"
        ],
        "parents": [
            "media"
        ],
        "title": "comic books"
    },
    {
        "alias": "commercialrealestate",
        "country_whitelist": [
            "be",
            "nl",
            "pt",
            "au",
            "ca",
            "de",
            "us"
        ],
        "parents": [
            "realestate"
        ],
        "title": "commercial real estate"
    },
    {
        "alias": "communitycenters",
        "country_whitelist": [
            "ca",
            "ie",
            "gb",
            "pt",
            "no"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "community centers"
    },
    {
        "alias": "computers",
        "parents": [
            "shopping"
        ],
        "title": "computers"
    },
    {
        "alias": "concept_shops",
        "country_blacklist": [
            "es",
            "cl",
            "jp",
            "ca",
            "tr",
            "it",
            "us",
            "cz",
            "nz",
            "ar",
            "pl",
            "br",
            "hk",
            "sg",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "concept shops"
    },
    {
        "alias": "congee",
        "country_whitelist": [
            "hk",
            "sg",
            "tw"
        ],
        "parents": [
            "chinese"
        ],
        "title": "congee"
    },
    {
        "alias": "contractors",
        "parents": [
            "homeservices"
        ],
        "title": "contractors"
    },
    {
        "alias": "convenience",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "food"
        ],
        "title": "convenience stores"
    },
    {
        "alias": "conveyorsushi",
        "country_whitelist": [
            "hk",
            "sg",
            "jp",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "conveyor belt sushi"
    },
    {
        "alias": "cookingclasses",
        "parents": [
            "artsandcrafts"
        ],
        "title": "cooking classes"
    },
    {
        "alias": "cookingschools",
        "parents": [
            "specialtyschools"
        ],
        "title": "cooking schools"
    },
    {
        "alias": "copyshops",
        "parents": [
            "localservices"
        ],
        "title": "printing services"
    },
    {
        "alias": "corsican",
        "country_whitelist": [
            "be",
            "fr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "corsican"
    },
    {
        "alias": "cosmeticdentists",
        "parents": [
            "dentists"
        ],
        "title": "cosmetic dentists"
    },
    {
        "alias": "cosmetics",
        "parents": [
            "beautysvc",
            "shopping"
        ],
        "title": "cosmetics & beauty supply"
    },
    {
        "alias": "cosmeticsurgeons",
        "parents": [
            "physicians"
        ],
        "title": "cosmetic surgeons"
    },
    {
        "alias": "cosmetology_schools",
        "parents": [
            "specialtyschools"
        ],
        "title": "cosmetology schools"
    },
    {
        "alias": "costumes",
        "parents": [
            "artsandcrafts"
        ],
        "title": "costumes"
    },
    {
        "alias": "countryclubs",
        "country_whitelist": [
            "cl",
            "jp",
            "it",
            "us",
            "ar",
            "br",
            "sg",
            "mx",
            "es"
        ],
        "parents": [
            "arts"
        ],
        "title": "country clubs"
    },
    {
        "alias": "countrydancehalls",
        "country_whitelist": [
            "se",
            "us"
        ],
        "parents": [
            "nightlife"
        ],
        "title": "country dance halls"
    },
    {
        "alias": "couriers",
        "parents": [
            "localservices"
        ],
        "title": "couriers & delivery services"
    },
    {
        "alias": "courthouses",
        "country_whitelist": [
            "be",
            "fr",
            "ch",
            "nl",
            "pt",
            "no",
            "de",
            "it",
            "us",
            "au",
            "at"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "courthouses"
    },
    {
        "alias": "cprclasses",
        "country_whitelist": [
            "au",
            "se",
            "us",
            "pt"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "cpr classes"
    },
    {
        "alias": "creperies",
        "parents": [
            "restaurants"
        ],
        "title": "creperies"
    },
    {
        "alias": "criminaldefense",
        "parents": [
            "lawyers"
        ],
        "title": "criminal defense law"
    },
    {
        "alias": "csa",
        "country_whitelist": [
            "fr",
            "ch",
            "de",
            "at",
            "us"
        ],
        "parents": [
            "food"
        ],
        "title": "csa"
    },
    {
        "alias": "cuban",
        "country_blacklist": [
            "sg",
            "tr",
            "dk"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cuban"
    },
    {
        "alias": "cucinacampana",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "cucina campana"
    },
    {
        "alias": "culturalcenter",
        "country_blacklist": [
            "ch",
            "nl",
            "ca",
            "de",
            "tr",
            "cz",
            "nz",
            "at",
            "br",
            "ie"
        ],
        "parents": [
            "arts"
        ],
        "title": "cultural center"
    },
    {
        "alias": "cupcakes",
        "country_blacklist": [
            "es",
            "ca",
            "tr",
            "cz",
            "gb",
            "br",
            "ie",
            "pl"
        ],
        "parents": [
            "food"
        ],
        "title": "cupcakes"
    },
    {
        "alias": "currencyexchange",
        "parents": [
            "financialservices"
        ],
        "title": "currency exchange"
    },
    {
        "alias": "currysausage",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "curry sausage"
    },
    {
        "alias": "custommerchandise",
        "parents": [
            "shopping"
        ],
        "title": "customized merchandise"
    },
    {
        "alias": "cyclingclasses",
        "country_blacklist": [
            "nz",
            "ar",
            "br",
            "pt",
            "ca",
            "ie",
            "mx"
        ],
        "parents": [
            "active"
        ],
        "title": "cycling classes"
    },
    {
        "alias": "cypriot",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "cypriot"
    },
    {
        "alias": "czech",
        "country_whitelist": [
            "be",
            "fr",
            "dk",
            "no",
            "ca",
            "de",
            "it",
            "us",
            "pl",
            "cz",
            "au",
            "gb",
            "fi",
            "ie",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "czech"
    },
    {
        "alias": "czechslovakian",
        "country_whitelist": [
            "ar",
            "mx",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "czech/slovakian"
    },
    {
        "alias": "damagerestoration",
        "country_whitelist": [
            "nz",
            "au",
            "pt",
            "sg",
            "tr",
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "damage restoration"
    },
    {
        "alias": "dance_schools",
        "parents": [
            "specialtyschools"
        ],
        "title": "dance schools"
    },
    {
        "alias": "danceclubs",
        "parents": [
            "nightlife"
        ],
        "title": "dance clubs"
    },
    {
        "alias": "dancerestaurants",
        "country_whitelist": [
            "fi"
        ],
        "parents": [
            "nightlife"
        ],
        "title": "dance restaurants"
    },
    {
        "alias": "dancestudio",
        "parents": [
            "fitness"
        ],
        "title": "dance studios"
    },
    {
        "alias": "danish",
        "country_whitelist": [
            "fr",
            "dk",
            "se",
            "no"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "danish"
    },
    {
        "alias": "datarecovery",
        "country_whitelist": [
            "es",
            "be",
            "fr",
            "ch",
            "pt",
            "de",
            "it",
            "us",
            "au",
            "at",
            "se"
        ],
        "parents": [
            "itservices"
        ],
        "title": "data recovery"
    },
    {
        "alias": "daycamps",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "active"
        ],
        "title": "day camps"
    },
    {
        "alias": "debtrelief",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "financialservices"
        ],
        "title": "debt relief services"
    },
    {
        "alias": "delicatessen",
        "country_blacklist": [
            "it",
            "us"
        ],
        "parents": [
            "food"
        ],
        "title": "delicatessen"
    },
    {
        "alias": "delis",
        "country_blacklist": [
            "ch",
            "dk",
            "pt",
            "cl",
            "de",
            "it",
            "no",
            "at",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "delis"
    },
    {
        "alias": "dentalhygeiniststorefront",
        "country_whitelist": [
            "ca"
        ],
        "parents": [
            "dentalhygienists"
        ],
        "title": "storefront clinics"
    },
    {
        "alias": "dentalhygienists",
        "country_whitelist": [
            "ca",
            "de",
            "pt"
        ],
        "parents": [
            "health"
        ],
        "title": "dental hygienists"
    },
    {
        "alias": "dentalhygienistsmobile",
        "country_whitelist": [
            "ca"
        ],
        "parents": [
            "dentalhygienists"
        ],
        "title": "mobile clinics"
    },
    {
        "alias": "dentists",
        "parents": [
            "health"
        ],
        "title": "dentists"
    },
    {
        "alias": "departmentsofmotorvehicles",
        "country_blacklist": [
            "be",
            "fr"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "departments of motor vehicles"
    },
    {
        "alias": "deptstores",
        "parents": [
            "shopping",
            "fashion"
        ],
        "title": "department stores"
    },
    {
        "alias": "dermatology",
        "parents": [
            "physicians"
        ],
        "title": "dermatologists"
    },
    {
        "alias": "desserts",
        "parents": [
            "food"
        ],
        "title": "desserts"
    },
    {
        "alias": "diagnosticimaging",
        "country_whitelist": [
            "fr",
            "pt",
            "ca",
            "us",
            "au",
            "gb",
            "br",
            "ie",
            "mx"
        ],
        "parents": [
            "diagnosticservices"
        ],
        "title": "diagnostic imaging"
    },
    {
        "alias": "diagnosticservices",
        "country_whitelist": [
            "be",
            "fr",
            "pt",
            "ca",
            "it",
            "us",
            "au",
            "gb",
            "br",
            "ie",
            "mx"
        ],
        "parents": [
            "health"
        ],
        "title": "diagnostic services"
    },
    {
        "alias": "dimsum",
        "country_blacklist": [
            "tr",
            "br",
            "pt"
        ],
        "parents": [
            "chinese"
        ],
        "title": "dim sum"
    },
    {
        "alias": "diners",
        "country_blacklist": [
            "fi",
            "au",
            "se",
            "no"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "diners"
    },
    {
        "alias": "discgolf",
        "country_blacklist": [
            "au",
            "sg",
            "dk"
        ],
        "parents": [
            "active"
        ],
        "title": "disc golf"
    },
    {
        "alias": "discountstore",
        "parents": [
            "shopping"
        ],
        "title": "discount store"
    },
    {
        "alias": "distilleries",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "food"
        ],
        "title": "distilleries"
    },
    {
        "alias": "divebars",
        "country_blacklist": [
            "au"
        ],
        "parents": [
            "bars"
        ],
        "title": "dive bars"
    },
    {
        "alias": "diving",
        "parents": [
            "active"
        ],
        "title": "diving"
    },
    {
        "alias": "divorce",
        "parents": [
            "lawyers"
        ],
        "title": "divorce & family law"
    },
    {
        "alias": "diyfood",
        "country_blacklist": [
            "es",
            "fr",
            "ch",
            "cl",
            "de",
            "it",
            "no",
            "nz",
            "at",
            "fi",
            "se"
        ],
        "parents": [
            "food"
        ],
        "title": "do-it-yourself food"
    },
    {
        "alias": "djs",
        "parents": [
            "eventservices"
        ],
        "title": "djs"
    },
    {
        "alias": "dog_parks",
        "parents": [
            "parks"
        ],
        "title": "dog parks"
    },
    {
        "alias": "dogwalkers",
        "parents": [
            "petservices"
        ],
        "title": "dog walkers"
    },
    {
        "alias": "dolmusstation",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "transport"
        ],
        "title": "dolmus station"
    },
    {
        "alias": "dominican",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "caribbean"
        ],
        "title": "dominican"
    },
    {
        "alias": "donairs",
        "country_whitelist": [
            "be",
            "fr",
            "dk",
            "ca",
            "tr",
            "pl"
        ],
        "parents": [
            "food"
        ],
        "title": "donairs"
    },
    {
        "alias": "donburi",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "donburi"
    },
    {
        "alias": "donuts",
        "country_blacklist": [
            "es",
            "dk",
            "se",
            "no"
        ],
        "parents": [
            "food"
        ],
        "title": "donuts"
    },
    {
        "alias": "doorsales",
        "country_whitelist": [
            "nz",
            "pt",
            "it",
            "us",
            "br"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "door sales/installation"
    },
    {
        "alias": "doulas",
        "country_whitelist": [
            "be",
            "fr",
            "it",
            "pt",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "doulas"
    },
    {
        "alias": "driving_schools",
        "parents": [
            "specialtyschools"
        ],
        "title": "driving schools"
    },
    {
        "alias": "drugstores",
        "country_blacklist": [
            "fr",
            "dk",
            "cl",
            "no",
            "tr",
            "ar",
            "fi",
            "mx",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "drugstores"
    },
    {
        "alias": "drycleaninglaundry",
        "parents": [
            "localservices"
        ],
        "title": "dry cleaning & laundry"
    },
    {
        "alias": "drywall",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "drywall installation & repair"
    },
    {
        "alias": "duilawyers",
        "country_whitelist": [
            "ca",
            "de",
            "us"
        ],
        "parents": [
            "lawyers"
        ],
        "title": "dui law"
    },
    {
        "alias": "dumplings",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "dumplings"
    },
    {
        "alias": "earnosethroat",
        "parents": [
            "physicians"
        ],
        "title": "ear nose & throat"
    },
    {
        "alias": "eastern_european",
        "country_whitelist": [
            "fr",
            "au"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "eastern european"
    },
    {
        "alias": "easterngerman",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "german"
        ],
        "title": "eastern german"
    },
    {
        "alias": "easternmexican",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "eastern mexican"
    },
    {
        "alias": "editorialservices",
        "country_whitelist": [
            "be",
            "nl",
            "pt",
            "cl",
            "de",
            "it",
            "us",
            "ar",
            "br",
            "mx"
        ],
        "parents": [
            "professional"
        ],
        "title": "editorial services"
    },
    {
        "alias": "education",
        "parents": [
            null
        ],
        "title": "education"
    },
    {
        "alias": "educationservices",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "education"
        ],
        "title": "educational services"
    },
    {
        "alias": "egyptian",
        "country_whitelist": [
            "be",
            "ca",
            "fr",
            "us",
            "it"
        ],
        "parents": [
            "mideastern"
        ],
        "title": "egyptian"
    },
    {
        "alias": "electricians",
        "parents": [
            "homeservices"
        ],
        "title": "electricians"
    },
    {
        "alias": "electronics",
        "parents": [
            "shopping"
        ],
        "title": "electronics"
    },
    {
        "alias": "electronicsrepair",
        "parents": [
            "localservices"
        ],
        "title": "electronics repair"
    },
    {
        "alias": "elementaryschools",
        "parents": [
            "education"
        ],
        "title": "elementary schools"
    },
    {
        "alias": "eltern_cafes",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "food",
            "restaurants"
        ],
        "title": "parent cafes"
    },
    {
        "alias": "embassy",
        "country_blacklist": [
            "tr"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "embassy"
    },
    {
        "alias": "embroideryandcrochet",
        "country_whitelist": [
            "br",
            "pt",
            "no",
            "it",
            "us",
            "mx"
        ],
        "parents": [
            "artsandcrafts"
        ],
        "title": "embroidery & crochet"
    },
    {
        "alias": "emergencyrooms",
        "country_whitelist": [
            "se",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "emergency rooms"
    },
    {
        "alias": "emilian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "emilian"
    },
    {
        "alias": "employmentagencies",
        "parents": [
            "professional"
        ],
        "title": "employment agencies"
    },
    {
        "alias": "employmentlawyers",
        "parents": [
            "lawyers"
        ],
        "title": "employment law"
    },
    {
        "alias": "endocrinologists",
        "country_whitelist": [
            "es",
            "fr",
            "it",
            "us"
        ],
        "parents": [
            "physicians"
        ],
        "title": "endocrinologists"
    },
    {
        "alias": "endodontists",
        "parents": [
            "dentists"
        ],
        "title": "endodontists"
    },
    {
        "alias": "eroticmassage",
        "country_blacklist": [
            "dk",
            "cl",
            "jp",
            "no",
            "tr",
            "us",
            "hk",
            "tw",
            "fi",
            "se"
        ],
        "parents": [
            "beautysvc"
        ],
        "title": "erotic massage"
    },
    {
        "alias": "estateliquidation",
        "parents": [
            "realestate"
        ],
        "title": "estate liquidation"
    },
    {
        "alias": "estateplanning",
        "country_blacklist": [
            "se",
            "no"
        ],
        "parents": [
            "lawyers"
        ],
        "title": "estate planning law"
    },
    {
        "alias": "ethiopian",
        "country_blacklist": [
            "dk",
            "pt",
            "sg",
            "tr",
            "mx",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "ethiopian"
    },
    {
        "alias": "ethnicgrocery",
        "country_whitelist": [
            "de",
            "au",
            "pt"
        ],
        "parents": [
            "food"
        ],
        "title": "ethnic grocery"
    },
    {
        "alias": "ethnicmarkets",
        "country_blacklist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "gourmet"
        ],
        "title": "ethnic food"
    },
    {
        "alias": "eventphotography",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "pt",
            "de",
            "jp",
            "it",
            "us",
            "ar",
            "au"
        ],
        "parents": [
            "photographers"
        ],
        "title": "event photography"
    },
    {
        "alias": "eventplanning",
        "parents": [
            "eventservices"
        ],
        "title": "party & event planning"
    },
    {
        "alias": "eventservices",
        "parents": [
            null
        ],
        "title": "event planning & services"
    },
    {
        "alias": "experiences",
        "country_whitelist": [
            "de",
            "pt",
            "se",
            "no"
        ],
        "parents": [
            "active"
        ],
        "title": "experiences"
    },
    {
        "alias": "eyelashservice",
        "country_blacklist": [
            "br",
            "dk",
            "es",
            "it"
        ],
        "parents": [
            "beautysvc"
        ],
        "title": "eyelash service"
    },
    {
        "alias": "fabricstores",
        "parents": [
            "artsandcrafts"
        ],
        "title": "fabric stores"
    },
    {
        "alias": "facepainting",
        "country_whitelist": [
            "nz",
            "au",
            "br",
            "us"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "face painting"
    },
    {
        "alias": "fado_houses",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "fado houses"
    },
    {
        "alias": "falafel",
        "country_blacklist": [
            "ar",
            "mx",
            "pt"
        ],
        "parents": [
            "mediterranean"
        ],
        "title": "falafel"
    },
    {
        "alias": "familydr",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "physicians"
        ],
        "title": "family practice"
    },
    {
        "alias": "farmersmarket",
        "parents": [
            "food"
        ],
        "title": "farmers market"
    },
    {
        "alias": "fashion",
        "parents": [
            "shopping"
        ],
        "title": "fashion"
    },
    {
        "alias": "fasil",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "nightlife"
        ],
        "title": "fasil music"
    },
    {
        "alias": "fencesgates",
        "country_whitelist": [
            "nz",
            "br",
            "pt",
            "sg",
            "it",
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "fences & gates"
    },
    {
        "alias": "fencing",
        "parents": [
            "active"
        ],
        "title": "fencing clubs"
    },
    {
        "alias": "ferries",
        "country_whitelist": [
            "dk",
            "pt",
            "no",
            "jp",
            "de",
            "tr",
            "it",
            "hk",
            "nz",
            "es",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "transport"
        ],
        "title": "ferries"
    },
    {
        "alias": "fertility",
        "parents": [
            "physicians"
        ],
        "title": "fertility"
    },
    {
        "alias": "festivals",
        "parents": [
            "arts"
        ],
        "title": "festivals"
    },
    {
        "alias": "filipino",
        "country_blacklist": [
            "fi",
            "tr",
            "dk",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "filipino"
    },
    {
        "alias": "financialadvising",
        "parents": [
            "financialservices"
        ],
        "title": "financial advising"
    },
    {
        "alias": "financialservices",
        "parents": [
            null
        ],
        "title": "financial services"
    },
    {
        "alias": "firearmtraining",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "firearm training"
    },
    {
        "alias": "firedepartments",
        "country_blacklist": [
            "nz",
            "gb",
            "br",
            "sg",
            "ca",
            "ie"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "fire departments"
    },
    {
        "alias": "fireplace",
        "parents": [
            "homeservices"
        ],
        "title": "fireplace services"
    },
    {
        "alias": "fireprotection",
        "parents": [
            "homeservices"
        ],
        "title": "fire protection services"
    },
    {
        "alias": "firewood",
        "country_whitelist": [
            "fr",
            "dk",
            "se",
            "no",
            "fi",
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "firewood"
    },
    {
        "alias": "fireworks",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "shopping"
        ],
        "title": "fireworks"
    },
    {
        "alias": "firstaidclasses",
        "country_blacklist": [
            "be",
            "fr",
            "nl",
            "br",
            "ie",
            "sg",
            "nz"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "first aid classes"
    },
    {
        "alias": "fischbroetchen",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "fischbroetchen"
    },
    {
        "alias": "fishing",
        "parents": [
            "active"
        ],
        "title": "fishing"
    },
    {
        "alias": "fishmonger",
        "country_whitelist": [
            "au",
            "dk",
            "pt",
            "no",
            "fi",
            "de",
            "se"
        ],
        "parents": [
            "food"
        ],
        "title": "fishmonger"
    },
    {
        "alias": "fishnchips",
        "country_blacklist": [
            "br",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "fish & chips"
    },
    {
        "alias": "fitness",
        "parents": [
            "active"
        ],
        "title": "fitness & instruction"
    },
    {
        "alias": "fitnessequipment",
        "parents": [
            "shopping"
        ],
        "title": "fitness/exercise equipment"
    },
    {
        "alias": "fleamarkets",
        "parents": [
            "shopping"
        ],
        "title": "flea markets"
    },
    {
        "alias": "flemish",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "belgian"
        ],
        "title": "flemish"
    },
    {
        "alias": "flightinstruction",
        "parents": [
            "specialtyschools"
        ],
        "title": "flight instruction"
    },
    {
        "alias": "flooring",
        "parents": [
            "homeservices"
        ],
        "title": "flooring"
    },
    {
        "alias": "florists",
        "parents": [
            "flowers"
        ],
        "title": "florists"
    },
    {
        "alias": "flowers",
        "parents": [
            "shopping"
        ],
        "title": "flowers & gifts"
    },
    {
        "alias": "flyboarding",
        "parents": [
            "active"
        ],
        "title": "flyboarding"
    },
    {
        "alias": "fondue",
        "country_blacklist": [
            "dk",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "fondue"
    },
    {
        "alias": "food",
        "parents": [
            null
        ],
        "title": "food"
    },
    {
        "alias": "food_court",
        "country_whitelist": [
            "no",
            "ie",
            "ca",
            "us",
            "nz",
            "au",
            "gb",
            "sg",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "food court"
    },
    {
        "alias": "foodbanks",
        "parents": [
            "nonprofit"
        ],
        "title": "food banks"
    },
    {
        "alias": "fooddeliveryservices",
        "parents": [
            "food"
        ],
        "title": "food delivery services"
    },
    {
        "alias": "foodsafety",
        "country_whitelist": [
            "sg",
            "pt",
            "us"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "food safety training"
    },
    {
        "alias": "foodstands",
        "parents": [
            "restaurants"
        ],
        "title": "food stands"
    },
    {
        "alias": "foodtours",
        "parents": [
            "tours"
        ],
        "title": "food tours"
    },
    {
        "alias": "foodtrucks",
        "country_blacklist": [
            "cz",
            "sg",
            "es"
        ],
        "parents": [
            "food"
        ],
        "title": "food trucks"
    },
    {
        "alias": "football",
        "parents": [
            "active"
        ],
        "title": "soccer"
    },
    {
        "alias": "formalwear",
        "country_whitelist": [
            "fr",
            "pt",
            "ca",
            "de",
            "us",
            "nz",
            "au",
            "at",
            "br",
            "sg"
        ],
        "parents": [
            "fashion"
        ],
        "title": "formal wear"
    },
    {
        "alias": "framing",
        "parents": [
            "artsandcrafts"
        ],
        "title": "framing"
    },
    {
        "alias": "freediving",
        "parents": [
            "diving"
        ],
        "title": "free diving"
    },
    {
        "alias": "french",
        "parents": [
            "restaurants"
        ],
        "title": "french"
    },
    {
        "alias": "friterie",
        "country_whitelist": [
            "be",
            "fr",
            "au",
            "it",
            "pl"
        ],
        "parents": [
            "food"
        ],
        "title": "friterie"
    },
    {
        "alias": "friulan",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "friulan"
    },
    {
        "alias": "funeralservices",
        "parents": [
            "localservices"
        ],
        "title": "funeral services & cemeteries"
    },
    {
        "alias": "funfair",
        "country_whitelist": [
            "ch",
            "de",
            "at",
            "pt"
        ],
        "parents": [
            "festivals"
        ],
        "title": "fun fair"
    },
    {
        "alias": "furniture",
        "parents": [
            "homeandgarden"
        ],
        "title": "furniture stores"
    },
    {
        "alias": "furnitureassembly",
        "parents": [
            "homeservices"
        ],
        "title": "furniture assembly"
    },
    {
        "alias": "furniturerepair",
        "parents": [
            "localservices"
        ],
        "title": "furniture repair"
    },
    {
        "alias": "fuzhou",
        "country_whitelist": [
            "hk",
            "sg",
            "tw"
        ],
        "parents": [
            "chinese"
        ],
        "title": "fuzhou"
    },
    {
        "alias": "galician",
        "country_whitelist": [
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "galician"
    },
    {
        "alias": "galleries",
        "parents": [
            "arts",
            "shopping"
        ],
        "title": "art galleries"
    },
    {
        "alias": "garage_door_services",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "no",
            "ca",
            "us",
            "nz",
            "br",
            "fi",
            "mx",
            "es"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "garage door services"
    },
    {
        "alias": "gardeners",
        "parents": [
            "homeservices"
        ],
        "title": "gardeners"
    },
    {
        "alias": "gardening",
        "parents": [
            "homeandgarden"
        ],
        "title": "nurseries & gardening"
    },
    {
        "alias": "gardens",
        "parents": [
            "arts"
        ],
        "title": "botanical gardens"
    },
    {
        "alias": "gastroenterologist",
        "parents": [
            "physicians"
        ],
        "title": "gastroenterologist"
    },
    {
        "alias": "gastropubs",
        "country_blacklist": [
            "dk",
            "it"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "gastropubs"
    },
    {
        "alias": "gaybars",
        "parents": [
            "bars"
        ],
        "title": "gay bars"
    },
    {
        "alias": "gelato",
        "country_whitelist": [
            "au",
            "it",
            "us",
            "pt"
        ],
        "parents": [
            "food"
        ],
        "title": "gelato"
    },
    {
        "alias": "general_litigation",
        "parents": [
            "lawyers"
        ],
        "title": "general litigation"
    },
    {
        "alias": "generaldentistry",
        "parents": [
            "dentists"
        ],
        "title": "general dentistry"
    },
    {
        "alias": "generalfestivals",
        "country_whitelist": [
            "ch",
            "de",
            "at",
            "pt"
        ],
        "parents": [
            "festivals"
        ],
        "title": "general festivals"
    },
    {
        "alias": "georgian",
        "country_whitelist": [
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "georgian"
    },
    {
        "alias": "german",
        "parents": [
            "restaurants"
        ],
        "title": "german"
    },
    {
        "alias": "gerontologist",
        "parents": [
            "physicians"
        ],
        "title": "gerontologists"
    },
    {
        "alias": "giblets",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "giblets"
    },
    {
        "alias": "giftshops",
        "country_blacklist": [
            "sg",
            "tr",
            "pl"
        ],
        "parents": [
            "flowers"
        ],
        "title": "gift shops"
    },
    {
        "alias": "glassandmirrors",
        "country_blacklist": [
            "nl",
            "ca",
            "tr",
            "cz",
            "ar",
            "au",
            "gb",
            "ie",
            "mx",
            "pl"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "glass & mirrors"
    },
    {
        "alias": "gliding",
        "country_whitelist": [
            "ch",
            "at",
            "pt",
            "no",
            "de",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "gliding"
    },
    {
        "alias": "gluhwein",
        "country_whitelist": [
            "ch",
            "de",
            "at",
            "se"
        ],
        "parents": [
            "food"
        ],
        "title": "mulled wine"
    },
    {
        "alias": "gluten_free",
        "parents": [
            "restaurants"
        ],
        "title": "gluten-free"
    },
    {
        "alias": "gokarts",
        "parents": [
            "active"
        ],
        "title": "go karts"
    },
    {
        "alias": "goldbuyers",
        "country_whitelist": [
            "es",
            "be",
            "fr",
            "ch",
            "nl",
            "pt",
            "ca",
            "de",
            "it",
            "us",
            "at",
            "br",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "gold buyers"
    },
    {
        "alias": "golf",
        "parents": [
            "active"
        ],
        "title": "golf"
    },
    {
        "alias": "golfequipment",
        "country_whitelist": [
            "be",
            "nl",
            "au",
            "ca",
            "de",
            "us"
        ],
        "parents": [
            "sportgoods"
        ],
        "title": "golf equipment"
    },
    {
        "alias": "golfshops",
        "country_blacklist": [
            "ie",
            "ca",
            "sg",
            "nz",
            "br"
        ],
        "parents": [
            "shopping"
        ],
        "title": "golf equipment shops"
    },
    {
        "alias": "gourmet",
        "parents": [
            "food"
        ],
        "title": "specialty food"
    },
    {
        "alias": "gozleme",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "turkish"
        ],
        "title": "gozleme"
    },
    {
        "alias": "graphicdesign",
        "parents": [
            "professional"
        ],
        "title": "graphic design"
    },
    {
        "alias": "greek",
        "parents": [
            "restaurants"
        ],
        "title": "greek"
    },
    {
        "alias": "grocery",
        "parents": [
            "food"
        ],
        "title": "grocery"
    },
    {
        "alias": "groomer",
        "parents": [
            "petservices"
        ],
        "title": "pet groomers"
    },
    {
        "alias": "guesthouses",
        "country_blacklist": [
            "sg",
            "dk"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "guest houses"
    },
    {
        "alias": "guitarstores",
        "parents": [
            "musicinstrumentservices"
        ],
        "title": "guitar stores"
    },
    {
        "alias": "gun_ranges",
        "country_blacklist": [
            "be",
            "fr",
            "ch",
            "dk",
            "de",
            "at",
            "br",
            "sg"
        ],
        "parents": [
            "active"
        ],
        "title": "gun/rifle ranges"
    },
    {
        "alias": "guns_and_ammo",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "shopping"
        ],
        "title": "guns & ammo"
    },
    {
        "alias": "gutterservices",
        "country_blacklist": [
            "ar",
            "mx",
            "pt"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "gutter services"
    },
    {
        "alias": "gymnastics",
        "country_whitelist": [
            "dk",
            "pt",
            "no",
            "ca",
            "us",
            "nz",
            "br",
            "mx"
        ],
        "parents": [
            "active"
        ],
        "title": "gymnastics"
    },
    {
        "alias": "gyms",
        "parents": [
            "fitness"
        ],
        "title": "gyms"
    },
    {
        "alias": "gyudon",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "donburi"
        ],
        "title": "gyudon"
    },
    {
        "alias": "hair",
        "parents": [
            "beautysvc"
        ],
        "title": "hair salons"
    },
    {
        "alias": "hair_extensions",
        "country_blacklist": [
            "be",
            "nl",
            "cl",
            "tr",
            "it",
            "cz",
            "ar",
            "es",
            "hk",
            "pl"
        ],
        "parents": [
            "beautysvc",
            "hair"
        ],
        "title": "hair extensions"
    },
    {
        "alias": "hairloss",
        "parents": [
            "beautysvc"
        ],
        "title": "hair loss centers"
    },
    {
        "alias": "hairremoval",
        "parents": [
            "beautysvc"
        ],
        "title": "hair removal"
    },
    {
        "alias": "hairstylists",
        "country_whitelist": [
            "au",
            "sg",
            "se",
            "us",
            "pt"
        ],
        "parents": [
            "hair"
        ],
        "title": "hair stylists"
    },
    {
        "alias": "haitian",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "caribbean"
        ],
        "title": "haitian"
    },
    {
        "alias": "hakka",
        "country_whitelist": [
            "hk",
            "sg",
            "tw"
        ],
        "parents": [
            "chinese"
        ],
        "title": "hakka"
    },
    {
        "alias": "halal",
        "country_blacklist": [
            "tr",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "halal"
    },
    {
        "alias": "handrolls",
        "country_whitelist": [
            "tw",
            "br"
        ],
        "parents": [
            "japanese"
        ],
        "title": "hand rolls"
    },
    {
        "alias": "handyman",
        "parents": [
            "homeservices"
        ],
        "title": "handyman"
    },
    {
        "alias": "hanggliding",
        "country_whitelist": [
            "be",
            "fr",
            "pt",
            "it",
            "us",
            "nz",
            "au",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "hang gliding"
    },
    {
        "alias": "hardware",
        "parents": [
            "homeandgarden"
        ],
        "title": "hardware stores"
    },
    {
        "alias": "hats",
        "country_blacklist": [
            "ch",
            "nl",
            "cl",
            "jp",
            "tr",
            "pl",
            "cz",
            "ar",
            "at",
            "hk",
            "ie",
            "se",
            "gb"
        ],
        "parents": [
            "fashion"
        ],
        "title": "hats"
    },
    {
        "alias": "hawaiian",
        "country_blacklist": [
            "au",
            "tr",
            "dk",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "hawaiian"
    },
    {
        "alias": "hawkercentre",
        "country_whitelist": [
            "hk",
            "sg"
        ],
        "parents": [
            "food"
        ],
        "title": "hawker centre"
    },
    {
        "alias": "health",
        "parents": [
            null
        ],
        "title": "health & medical"
    },
    {
        "alias": "healthinsurance",
        "country_whitelist": [
            "nz",
            "au",
            "br",
            "pt",
            "de",
            "mx"
        ],
        "parents": [
            "health"
        ],
        "title": "health insurance offices"
    },
    {
        "alias": "healthmarkets",
        "parents": [
            "gourmet"
        ],
        "title": "health markets"
    },
    {
        "alias": "healthretreats",
        "country_blacklist": [
            "ar",
            "mx"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "health retreats"
    },
    {
        "alias": "healthtrainers",
        "parents": [
            "fitness"
        ],
        "title": "trainers"
    },
    {
        "alias": "hearing_aids",
        "country_whitelist": [
            "be",
            "fr",
            "ch",
            "dk",
            "pt",
            "no",
            "de",
            "at",
            "br",
            "fi"
        ],
        "parents": [
            "health"
        ],
        "title": "hearing aids"
    },
    {
        "alias": "hearingaidproviders",
        "country_blacklist": [
            "es",
            "nl",
            "dk",
            "hk",
            "jp",
            "tr",
            "cz",
            "nz",
            "au",
            "gb",
            "se",
            "ie",
            "pl"
        ],
        "parents": [
            "health"
        ],
        "title": "hearing aid providers"
    },
    {
        "alias": "henghwa",
        "country_whitelist": [
            "sg"
        ],
        "parents": [
            "chinese"
        ],
        "title": "henghwa"
    },
    {
        "alias": "herbsandspices",
        "parents": [
            "gourmet"
        ],
        "title": "herbs & spices"
    },
    {
        "alias": "hessian",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "german"
        ],
        "title": "hessian"
    },
    {
        "alias": "heuriger",
        "country_whitelist": [
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "heuriger"
    },
    {
        "alias": "hifi",
        "parents": [
            "shopping"
        ],
        "title": "high fidelity audio equipment"
    },
    {
        "alias": "highschools",
        "parents": [
            "education"
        ],
        "title": "middle schools & high schools"
    },
    {
        "alias": "hiking",
        "parents": [
            "active"
        ],
        "title": "hiking"
    },
    {
        "alias": "himalayan",
        "parents": [
            "restaurants"
        ],
        "title": "himalayan/nepalese"
    },
    {
        "alias": "hindu_temples",
        "parents": [
            "religiousorgs"
        ],
        "title": "hindu temples"
    },
    {
        "alias": "historicaltours",
        "parents": [
            "tours"
        ],
        "title": "historical tours"
    },
    {
        "alias": "hkcafe",
        "country_whitelist": [
            "hk"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "hong kong style cafe"
    },
    {
        "alias": "hobbyshops",
        "parents": [
            "shopping"
        ],
        "title": "hobby shops"
    },
    {
        "alias": "hokkien",
        "country_whitelist": [
            "sg"
        ],
        "parents": [
            "chinese"
        ],
        "title": "hokkien"
    },
    {
        "alias": "home_inspectors",
        "parents": [
            "homeservices"
        ],
        "title": "home inspectors"
    },
    {
        "alias": "home_organization",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "home organization"
    },
    {
        "alias": "homeandgarden",
        "parents": [
            "shopping"
        ],
        "title": "home & garden"
    },
    {
        "alias": "homeappliancerepair",
        "parents": [
            "localservices"
        ],
        "title": "appliances & repair"
    },
    {
        "alias": "homeautomation",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "home automation"
    },
    {
        "alias": "homecleaning",
        "parents": [
            "homeservices"
        ],
        "title": "home cleaning"
    },
    {
        "alias": "homedecor",
        "parents": [
            "homeandgarden"
        ],
        "title": "home decor"
    },
    {
        "alias": "homehealthcare",
        "parents": [
            "health"
        ],
        "title": "home health care"
    },
    {
        "alias": "homeservices",
        "parents": [
            null
        ],
        "title": "home services"
    },
    {
        "alias": "homestaging",
        "country_blacklist": [
            "ch",
            "at",
            "pt",
            "br",
            "de",
            "it",
            "es"
        ],
        "parents": [
            "realestate"
        ],
        "title": "home staging"
    },
    {
        "alias": "hometheatreinstallation",
        "country_blacklist": [
            "dk"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "home theatre installation"
    },
    {
        "alias": "homewindowtinting",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "home window tinting"
    },
    {
        "alias": "honey",
        "country_whitelist": [
            "fr",
            "fi",
            "de",
            "tr",
            "it",
            "se"
        ],
        "parents": [
            "food"
        ],
        "title": "honey"
    },
    {
        "alias": "hookah_bars",
        "country_blacklist": [
            "au",
            "pt",
            "cl"
        ],
        "parents": [
            "bars"
        ],
        "title": "hookah bars"
    },
    {
        "alias": "horse_boarding",
        "country_whitelist": [
            "de",
            "us"
        ],
        "parents": [
            "pets"
        ],
        "title": "horse boarding"
    },
    {
        "alias": "horsebackriding",
        "parents": [
            "active"
        ],
        "title": "horseback riding"
    },
    {
        "alias": "horsequipment",
        "country_whitelist": [
            "fr",
            "nl",
            "dk",
            "no",
            "de",
            "it",
            "es",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "horse equipment shops"
    },
    {
        "alias": "horseracing",
        "country_whitelist": [
            "ch",
            "pt",
            "no",
            "de",
            "jp",
            "us",
            "ar",
            "au",
            "at",
            "fi",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "horse racing"
    },
    {
        "alias": "horumon",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "horumon"
    },
    {
        "alias": "hospice",
        "parents": [
            "health"
        ],
        "title": "hospice"
    },
    {
        "alias": "hospitals",
        "parents": [
            "health"
        ],
        "title": "hospitals"
    },
    {
        "alias": "hostels",
        "parents": [
            "hotelstravel"
        ],
        "title": "hostels"
    },
    {
        "alias": "hot_air_balloons",
        "country_blacklist": [
            "be",
            "fr",
            "nl",
            "dk",
            "ie",
            "ca",
            "nz",
            "br",
            "sg"
        ],
        "parents": [
            "active"
        ],
        "title": "hot air balloons"
    },
    {
        "alias": "hotdog",
        "parents": [
            "restaurants"
        ],
        "title": "hot dogs"
    },
    {
        "alias": "hotdogs",
        "parents": [
            "restaurants"
        ],
        "title": "fast food"
    },
    {
        "alias": "hotel_bar",
        "country_whitelist": [
            "dk",
            "pt",
            "no",
            "fi",
            "br",
            "se"
        ],
        "parents": [
            "bars"
        ],
        "title": "hotel bar"
    },
    {
        "alias": "hotels",
        "parents": [
            "eventservices",
            "hotelstravel"
        ],
        "title": "hotels"
    },
    {
        "alias": "hotelstravel",
        "parents": [
            null
        ],
        "title": "hotels & travel"
    },
    {
        "alias": "hotpot",
        "country_whitelist": [
            "hk",
            "ca",
            "jp",
            "fr",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "hot pot"
    },
    {
        "alias": "hottubandpool",
        "parents": [
            "homeandgarden"
        ],
        "title": "hot tub & pool"
    },
    {
        "alias": "hunan",
        "country_whitelist": [
            "hk",
            "fr",
            "sg",
            "tw"
        ],
        "parents": [
            "chinese"
        ],
        "title": "hunan"
    },
    {
        "alias": "hungarian",
        "country_blacklist": [
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "hungarian"
    },
    {
        "alias": "hvac",
        "parents": [
            "homeservices"
        ],
        "title": "heating & air conditioning/hvac"
    },
    {
        "alias": "hypnosis",
        "country_blacklist": [
            "es",
            "nl",
            "cl",
            "tr",
            "cz",
            "ar",
            "au",
            "gb",
            "hk",
            "ie",
            "pl"
        ],
        "parents": [
            "health"
        ],
        "title": "hypnosis/hypnotherapy"
    },
    {
        "alias": "iberian",
        "country_whitelist": [
            "ca",
            "pt",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "iberian"
    },
    {
        "alias": "icecream",
        "parents": [
            "food"
        ],
        "title": "ice cream & frozen yogurt"
    },
    {
        "alias": "immigrationlawyers",
        "parents": [
            "lawyers"
        ],
        "title": "immigration law"
    },
    {
        "alias": "indonesian",
        "country_blacklist": [
            "mx",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "indonesian"
    },
    {
        "alias": "indoor_playcenter",
        "country_whitelist": [
            "dk",
            "pt",
            "no",
            "de",
            "jp",
            "it",
            "nz",
            "au",
            "es",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "indoor playcentre"
    },
    {
        "alias": "indpak",
        "parents": [
            "restaurants"
        ],
        "title": "indian"
    },
    {
        "alias": "insulationinstallation",
        "parents": [
            "homeservices"
        ],
        "title": "insulation installation"
    },
    {
        "alias": "insurance",
        "parents": [
            "financialservices"
        ],
        "title": "insurance"
    },
    {
        "alias": "interiordesign",
        "parents": [
            "homeservices"
        ],
        "title": "interior design"
    },
    {
        "alias": "internalmed",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "physicians"
        ],
        "title": "internal medicine"
    },
    {
        "alias": "international",
        "country_whitelist": [
            "fr",
            "ch",
            "pt",
            "cl",
            "de",
            "hk",
            "at",
            "br",
            "sg"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "international"
    },
    {
        "alias": "internetbooth",
        "country_whitelist": [
            "cl",
            "ar",
            "mx",
            "br",
            "it"
        ],
        "parents": [
            "localservices"
        ],
        "title": "internet booths & calling centers"
    },
    {
        "alias": "internetcafe",
        "parents": [
            "food"
        ],
        "title": "internet cafes"
    },
    {
        "alias": "investing",
        "parents": [
            "financialservices"
        ],
        "title": "investing"
    },
    {
        "alias": "iplaw",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "lawyers"
        ],
        "title": "ip & internet law"
    },
    {
        "alias": "irish",
        "parents": [
            "restaurants"
        ],
        "title": "irish"
    },
    {
        "alias": "irish_pubs",
        "country_blacklist": [
            "cz",
            "ar",
            "cl",
            "hk",
            "ie",
            "sg",
            "mx"
        ],
        "parents": [
            "bars"
        ],
        "title": "irish pub"
    },
    {
        "alias": "irrigation",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "irrigation"
    },
    {
        "alias": "island_pub",
        "country_whitelist": [
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "island pub"
    },
    {
        "alias": "isps",
        "parents": [
            "professional",
            "homeservices"
        ],
        "title": "internet service providers"
    },
    {
        "alias": "israeli",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "israeli"
    },
    {
        "alias": "italian",
        "parents": [
            "restaurants"
        ],
        "title": "italian"
    },
    {
        "alias": "itservices",
        "parents": [
            "localservices"
        ],
        "title": "it services & computer repair"
    },
    {
        "alias": "izakaya",
        "country_whitelist": [
            "nz",
            "au",
            "br",
            "tw",
            "sg",
            "jp",
            "mx"
        ],
        "parents": [
            "japanese"
        ],
        "title": "izakaya"
    },
    {
        "alias": "jaliscan",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "jaliscan"
    },
    {
        "alias": "japacurry",
        "country_whitelist": [
            "hk",
            "sg",
            "jp",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "japanese curry"
    },
    {
        "alias": "japanese",
        "parents": [
            "restaurants"
        ],
        "title": "japanese"
    },
    {
        "alias": "jazzandblues",
        "parents": [
            "arts",
            "nightlife"
        ],
        "title": "jazz & blues"
    },
    {
        "alias": "jetskis",
        "parents": [
            "active"
        ],
        "title": "jet skis"
    },
    {
        "alias": "jewelry",
        "parents": [
            "shopping"
        ],
        "title": "jewelry"
    },
    {
        "alias": "jewelryrepair",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "pt",
            "jp",
            "ca",
            "tr",
            "it",
            "us",
            "cz",
            "au",
            "es",
            "pl"
        ],
        "parents": [
            "localservices"
        ],
        "title": "jewelry repair"
    },
    {
        "alias": "jewish",
        "country_whitelist": [
            "de",
            "it",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "jewish"
    },
    {
        "alias": "jpsweets",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "food"
        ],
        "title": "japanese sweets"
    },
    {
        "alias": "juicebars",
        "parents": [
            "food"
        ],
        "title": "juice bars & smoothies"
    },
    {
        "alias": "junkremovalandhauling",
        "parents": [
            "localservices"
        ],
        "title": "junk removal & hauling"
    },
    {
        "alias": "kaiseki",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "kaiseki"
    },
    {
        "alias": "karaoke",
        "parents": [
            "nightlife"
        ],
        "title": "karaoke"
    },
    {
        "alias": "kebab",
        "country_blacklist": [
            "ca",
            "nl",
            "gb",
            "us",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "kebab"
    },
    {
        "alias": "kids_activities",
        "country_blacklist": [
            "ca",
            "sg"
        ],
        "parents": [
            "active"
        ],
        "title": "kids activities"
    },
    {
        "alias": "kimonos",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "fashion"
        ],
        "title": "kimonos"
    },
    {
        "alias": "kiosk",
        "country_blacklist": [
            "be",
            "fr",
            "nl",
            "cl",
            "ie",
            "ca",
            "it",
            "us",
            "cz",
            "nz",
            "gb",
            "br",
            "hk",
            "sg",
            "mx"
        ],
        "parents": [
            "food",
            "shopping"
        ],
        "title": "kiosk"
    },
    {
        "alias": "kitchenandbath",
        "parents": [
            "homeandgarden"
        ],
        "title": "kitchen & bath"
    },
    {
        "alias": "kitchenincubators",
        "country_whitelist": [
            "gb",
            "us"
        ],
        "parents": [
            "realestate"
        ],
        "title": "kitchen incubators"
    },
    {
        "alias": "kiteboarding",
        "country_blacklist": [
            "es",
            "be",
            "ch",
            "cl",
            "ca",
            "it",
            "cz",
            "ar",
            "at",
            "br",
            "hk",
            "mx",
            "pl",
            "gb"
        ],
        "parents": [
            "active"
        ],
        "title": "kiteboarding"
    },
    {
        "alias": "knifesharpening",
        "country_whitelist": [
            "es",
            "au",
            "it",
            "us"
        ],
        "parents": [
            "localservices"
        ],
        "title": "knife sharpening"
    },
    {
        "alias": "knittingsupplies",
        "parents": [
            "shopping"
        ],
        "title": "knitting supplies"
    },
    {
        "alias": "korean",
        "parents": [
            "restaurants"
        ],
        "title": "korean"
    },
    {
        "alias": "kosher",
        "country_blacklist": [
            "tr",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "kosher"
    },
    {
        "alias": "kurdish",
        "country_whitelist": [
            "se",
            "no"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "kurdish"
    },
    {
        "alias": "kushikatsu",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "kushikatsu"
    },
    {
        "alias": "laboratorytesting",
        "country_whitelist": [
            "be",
            "fr",
            "pt",
            "it",
            "us",
            "au",
            "br",
            "mx"
        ],
        "parents": [
            "diagnosticservices"
        ],
        "title": "laboratory testing"
    },
    {
        "alias": "lactationservices",
        "country_whitelist": [
            "be",
            "fr",
            "it",
            "pt",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "lactation services"
    },
    {
        "alias": "lakes",
        "parents": [
            "active"
        ],
        "title": "lakes"
    },
    {
        "alias": "landmarks",
        "parents": [
            "publicservicesgovt"
        ],
        "title": "landmarks & historical buildings"
    },
    {
        "alias": "landscapearchitects",
        "parents": [
            "homeservices"
        ],
        "title": "landscape architects"
    },
    {
        "alias": "landscaping",
        "country_blacklist": [
            "dk",
            "es"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "landscaping"
    },
    {
        "alias": "language_schools",
        "parents": [
            "specialtyschools"
        ],
        "title": "language schools"
    },
    {
        "alias": "laos",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "laos"
    },
    {
        "alias": "laotian",
        "parents": [
            "restaurants"
        ],
        "title": "laotian"
    },
    {
        "alias": "laser_hair_removal",
        "country_blacklist": [
            "dk",
            "es"
        ],
        "parents": [
            "hairremoval"
        ],
        "title": "laser hair removal"
    },
    {
        "alias": "laserlasikeyes",
        "parents": [
            "health"
        ],
        "title": "laser eye surgery/lasik"
    },
    {
        "alias": "lasertag",
        "country_blacklist": [
            "ie",
            "br"
        ],
        "parents": [
            "active"
        ],
        "title": "laser tag"
    },
    {
        "alias": "latin",
        "parents": [
            "restaurants"
        ],
        "title": "latin american"
    },
    {
        "alias": "lawn_bowling",
        "country_whitelist": [
            "nz",
            "au",
            "pt",
            "no",
            "fi",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "lawn bowling"
    },
    {
        "alias": "lawyers",
        "parents": [
            "professional"
        ],
        "title": "lawyers"
    },
    {
        "alias": "leather",
        "parents": [
            "fashion"
        ],
        "title": "leather goods"
    },
    {
        "alias": "lebanese",
        "country_blacklist": [
            "hk",
            "ar",
            "jp"
        ],
        "parents": [
            "mideastern"
        ],
        "title": "lebanese"
    },
    {
        "alias": "legalservices",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "pt",
            "tr",
            "it",
            "us",
            "nz",
            "au",
            "sg"
        ],
        "parents": [
            "professional"
        ],
        "title": "legal services"
    },
    {
        "alias": "leisure_centers",
        "country_blacklist": [
            "dk"
        ],
        "parents": [
            "active"
        ],
        "title": "leisure centers"
    },
    {
        "alias": "libraries",
        "parents": [
            "publicservicesgovt"
        ],
        "title": "libraries"
    },
    {
        "alias": "liceservices",
        "country_blacklist": [
            "hk",
            "ar",
            "cl",
            "fi",
            "de",
            "jp",
            "mx"
        ],
        "parents": [
            "health"
        ],
        "title": "lice services"
    },
    {
        "alias": "lifecoach",
        "parents": [
            "professional"
        ],
        "title": "life coach"
    },
    {
        "alias": "lighting",
        "parents": [
            "homeservices"
        ],
        "title": "lighting fixtures & equipment"
    },
    {
        "alias": "ligurian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "ligurian"
    },
    {
        "alias": "limos",
        "parents": [
            "transport"
        ],
        "title": "limos"
    },
    {
        "alias": "linens",
        "country_whitelist": [
            "be",
            "fr",
            "it",
            "pt"
        ],
        "parents": [
            "homeandgarden"
        ],
        "title": "linens"
    },
    {
        "alias": "lingerie",
        "parents": [
            "fashion"
        ],
        "title": "lingerie"
    },
    {
        "alias": "localflavor",
        "parents": [
            null
        ],
        "title": "local flavor"
    },
    {
        "alias": "localservices",
        "parents": [
            null
        ],
        "title": "local services"
    },
    {
        "alias": "locksmiths",
        "parents": [
            "homeservices"
        ],
        "title": "keys & locksmiths"
    },
    {
        "alias": "lounges",
        "parents": [
            "bars"
        ],
        "title": "lounges"
    },
    {
        "alias": "luggage",
        "parents": [
            "shopping"
        ],
        "title": "luggage"
    },
    {
        "alias": "lumbard",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "lumbard"
    },
    {
        "alias": "lyonnais",
        "country_whitelist": [
            "be",
            "fr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "lyonnais"
    },
    {
        "alias": "madeira",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "madeira"
    },
    {
        "alias": "magicians",
        "country_blacklist": [
            "pl",
            "se",
            "no",
            "fi",
            "sg",
            "tr",
            "es"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "magicians"
    },
    {
        "alias": "mags",
        "parents": [
            "media"
        ],
        "title": "newspapers & magazines"
    },
    {
        "alias": "mahjong",
        "country_whitelist": [
            "hk",
            "jp"
        ],
        "parents": [
            "arts"
        ],
        "title": "mah jong halls"
    },
    {
        "alias": "mailboxcenters",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "localservices"
        ],
        "title": "mailbox centers"
    },
    {
        "alias": "makeupartists",
        "parents": [
            "beautysvc"
        ],
        "title": "makeup artists"
    },
    {
        "alias": "malaysian",
        "country_blacklist": [
            "sg",
            "tr",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "malaysian"
    },
    {
        "alias": "mamak",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "malaysian"
        ],
        "title": "mamak"
    },
    {
        "alias": "marchingbands",
        "country_whitelist": [
            "ch",
            "pt",
            "no",
            "de",
            "tr",
            "at",
            "se",
            "gb"
        ],
        "parents": [
            "arts"
        ],
        "title": "marching bands"
    },
    {
        "alias": "marketing",
        "parents": [
            "professional"
        ],
        "title": "marketing"
    },
    {
        "alias": "markets",
        "parents": [
            "gourmet"
        ],
        "title": "fruits & veggies"
    },
    {
        "alias": "marketstalls",
        "country_whitelist": [
            "ie",
            "gb",
            "pt"
        ],
        "parents": [
            "shopping"
        ],
        "title": "market stalls"
    },
    {
        "alias": "martialarts",
        "parents": [
            "fitness"
        ],
        "title": "martial arts"
    },
    {
        "alias": "masonry_concrete",
        "country_blacklist": [
            "be",
            "nz",
            "nl",
            "gb",
            "br",
            "ie",
            "sg"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "masonry/concrete"
    },
    {
        "alias": "massage",
        "parents": [
            "beautysvc"
        ],
        "title": "massage"
    },
    {
        "alias": "massage_schools",
        "parents": [
            "specialtyschools"
        ],
        "title": "massage schools"
    },
    {
        "alias": "massage_therapy",
        "country_whitelist": [
            "br",
            "it",
            "us",
            "pt"
        ],
        "parents": [
            "health"
        ],
        "title": "massage therapy"
    },
    {
        "alias": "massmedia",
        "parents": [
            null
        ],
        "title": "mass media"
    },
    {
        "alias": "matchmakers",
        "country_whitelist": [
            "us",
            "fr",
            "ca",
            "pt",
            "dk"
        ],
        "parents": [
            "professional"
        ],
        "title": "matchmakers"
    },
    {
        "alias": "materialeelettrico",
        "country_whitelist": [
            "cl",
            "ar",
            "mx",
            "es",
            "it"
        ],
        "parents": [
            "homeandgarden"
        ],
        "title": "materiale elettrico"
    },
    {
        "alias": "maternity",
        "parents": [
            "fashion"
        ],
        "title": "maternity wear"
    },
    {
        "alias": "mattresses",
        "parents": [
            "homeandgarden"
        ],
        "title": "mattresses"
    },
    {
        "alias": "meatballs",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "meatballs"
    },
    {
        "alias": "meats",
        "parents": [
            "gourmet"
        ],
        "title": "meat shops"
    },
    {
        "alias": "medcenters",
        "parents": [
            "health"
        ],
        "title": "medical centers"
    },
    {
        "alias": "media",
        "parents": [
            "shopping"
        ],
        "title": "books, mags, music & video"
    },
    {
        "alias": "medicalfoot",
        "country_whitelist": [
            "ch",
            "au",
            "at",
            "no",
            "de",
            "se"
        ],
        "parents": [
            "health"
        ],
        "title": "medical foot care"
    },
    {
        "alias": "medicalspa",
        "parents": [
            "health",
            "beautysvc"
        ],
        "title": "medical spas"
    },
    {
        "alias": "medicalsupplies",
        "country_whitelist": [
            "ch",
            "dk",
            "pt",
            "no",
            "ca",
            "de",
            "jp",
            "it",
            "us",
            "at",
            "es"
        ],
        "parents": [
            "shopping"
        ],
        "title": "medical supplies"
    },
    {
        "alias": "medicaltransportation",
        "country_whitelist": [
            "be",
            "fr",
            "au",
            "pt",
            "sg",
            "it",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "medical transportation"
    },
    {
        "alias": "meditationcenters",
        "country_blacklist": [
            "ar",
            "mx"
        ],
        "parents": [
            "fitness"
        ],
        "title": "meditation centers"
    },
    {
        "alias": "mediterranean",
        "parents": [
            "restaurants"
        ],
        "title": "mediterranean"
    },
    {
        "alias": "menscloth",
        "parents": [
            "fashion"
        ],
        "title": "men's clothing"
    },
    {
        "alias": "menshair",
        "country_whitelist": [
            "au",
            "pt",
            "us"
        ],
        "parents": [
            "hair"
        ],
        "title": "men's hair salons"
    },
    {
        "alias": "metalfabricators",
        "country_blacklist": [
            "ar",
            "mx",
            "se"
        ],
        "parents": [
            "localservices"
        ],
        "title": "metal fabricators"
    },
    {
        "alias": "mexican",
        "parents": [
            "restaurants"
        ],
        "title": "mexican"
    },
    {
        "alias": "mideastern",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "middle eastern"
    },
    {
        "alias": "midwives",
        "parents": [
            "health"
        ],
        "title": "midwives"
    },
    {
        "alias": "milkbars",
        "country_whitelist": [
            "au",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "milk bars"
    },
    {
        "alias": "milkshakebars",
        "country_whitelist": [
            "gb"
        ],
        "parents": [
            "food"
        ],
        "title": "milkshake bars"
    },
    {
        "alias": "minho",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "minho"
    },
    {
        "alias": "mini_golf",
        "country_blacklist": [
            "it"
        ],
        "parents": [
            "active"
        ],
        "title": "mini golf"
    },
    {
        "alias": "mobiledentrepair",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "mobile dent repair"
    },
    {
        "alias": "mobilehomes",
        "parents": [
            "realestate"
        ],
        "title": "mobile home dealers"
    },
    {
        "alias": "mobilephonerepair",
        "country_blacklist": [
            "ie"
        ],
        "parents": [
            "itservices"
        ],
        "title": "mobile phone repair"
    },
    {
        "alias": "mobilephones",
        "parents": [
            "shopping"
        ],
        "title": "mobile phones"
    },
    {
        "alias": "modern_australian",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "modern australian"
    },
    {
        "alias": "modern_european",
        "parents": [
            "restaurants"
        ],
        "title": "modern european"
    },
    {
        "alias": "mohels",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "mohels"
    },
    {
        "alias": "mongolian",
        "country_blacklist": [
            "fi",
            "tr",
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "mongolian"
    },
    {
        "alias": "moroccan",
        "country_blacklist": [
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "moroccan"
    },
    {
        "alias": "mortgagebrokers",
        "country_blacklist": [
            "br",
            "dk",
            "es"
        ],
        "parents": [
            "realestate"
        ],
        "title": "mortgage brokers"
    },
    {
        "alias": "mosques",
        "parents": [
            "religiousorgs"
        ],
        "title": "mosques"
    },
    {
        "alias": "motorcycle_rental",
        "country_whitelist": [
            "fr",
            "pt",
            "no",
            "it",
            "us",
            "nz",
            "au",
            "br",
            "fi",
            "sg",
            "mx",
            "es"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "motorcycle rental"
    },
    {
        "alias": "motorcycledealers",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "auto"
        ],
        "title": "motorcycle dealers"
    },
    {
        "alias": "motorcyclerepair",
        "parents": [
            "auto"
        ],
        "title": "motorcycle repair"
    },
    {
        "alias": "motorcyclinggear",
        "country_blacklist": [
            "ca",
            "ie",
            "nz",
            "br",
            "gb"
        ],
        "parents": [
            "shopping"
        ],
        "title": "motorcycle gear"
    },
    {
        "alias": "mountainbiking",
        "parents": [
            "active"
        ],
        "title": "mountain biking"
    },
    {
        "alias": "mountainhuts",
        "country_whitelist": [
            "fr",
            "ch",
            "cl",
            "de",
            "it",
            "us",
            "pl",
            "cz",
            "nz",
            "ar",
            "at",
            "no",
            "se"
        ],
        "parents": [
            "hotels"
        ],
        "title": "mountain huts"
    },
    {
        "alias": "movers",
        "parents": [
            "homeservices"
        ],
        "title": "movers"
    },
    {
        "alias": "movietheaters",
        "parents": [
            "arts"
        ],
        "title": "cinema"
    },
    {
        "alias": "museums",
        "parents": [
            "arts"
        ],
        "title": "museums"
    },
    {
        "alias": "musicalinstrumentsandteachers",
        "parents": [
            "shopping"
        ],
        "title": "musical instruments & teachers"
    },
    {
        "alias": "musicians",
        "country_blacklist": [
            "dk",
            "no",
            "fi",
            "sg",
            "tr",
            "es",
            "pl"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "musicians"
    },
    {
        "alias": "musicinstrumentservices",
        "parents": [
            "localservices"
        ],
        "title": "musical instrument services"
    },
    {
        "alias": "musicproduction",
        "parents": [
            "professional"
        ],
        "title": "music production services"
    },
    {
        "alias": "musicvenues",
        "parents": [
            "arts",
            "nightlife"
        ],
        "title": "music venues"
    },
    {
        "alias": "musicvideo",
        "parents": [
            "media"
        ],
        "title": "music & dvds"
    },
    {
        "alias": "nannys",
        "country_blacklist": [
            "es",
            "ca",
            "cz",
            "pl",
            "br",
            "fi",
            "ie",
            "se",
            "gb"
        ],
        "parents": [
            "localservices"
        ],
        "title": "nanny services"
    },
    {
        "alias": "napoletana",
        "country_whitelist": [
            "fr",
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "napoletana"
    },
    {
        "alias": "naturopathic",
        "parents": [
            "physicians"
        ],
        "title": "naturopathic/holistic"
    },
    {
        "alias": "neurologist",
        "parents": [
            "physicians"
        ],
        "title": "neurologist"
    },
    {
        "alias": "newamerican",
        "country_whitelist": [
            "ie",
            "gb",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "american (new)"
    },
    {
        "alias": "newcanadian",
        "country_whitelist": [
            "ca"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "canadian (new)"
    },
    {
        "alias": "newzealand",
        "country_whitelist": [
            "nz"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "new zealand"
    },
    {
        "alias": "nicois",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "french"
        ],
        "title": "nicoise"
    },
    {
        "alias": "nightfood",
        "country_whitelist": [
            "no",
            "tr",
            "dk",
            "se",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "night food"
    },
    {
        "alias": "nightlife",
        "parents": [
            null
        ],
        "title": "nightlife"
    },
    {
        "alias": "nonprofit",
        "parents": [
            "localservices"
        ],
        "title": "community service/non-profit"
    },
    {
        "alias": "norcinerie",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "norcinerie"
    },
    {
        "alias": "northeasternbrazilian",
        "country_whitelist": [
            "br"
        ],
        "parents": [
            "brazilian"
        ],
        "title": "northeastern brazilian"
    },
    {
        "alias": "northernbrazilian",
        "country_whitelist": [
            "br"
        ],
        "parents": [
            "brazilian"
        ],
        "title": "northern brazilian"
    },
    {
        "alias": "northerngerman",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "german"
        ],
        "title": "northern german"
    },
    {
        "alias": "northernmexican",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "northern mexican"
    },
    {
        "alias": "norwegian",
        "country_whitelist": [
            "fr",
            "no"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "traditional norwegian"
    },
    {
        "alias": "notaries",
        "country_blacklist": [
            "no"
        ],
        "parents": [
            "localservices"
        ],
        "title": "notaries"
    },
    {
        "alias": "nudist",
        "country_whitelist": [
            "dk",
            "pt",
            "no",
            "fi",
            "de",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "nudist"
    },
    {
        "alias": "nursepractitioner",
        "parents": [
            "health"
        ],
        "title": "nurse practitioner"
    },
    {
        "alias": "nursingschools",
        "parents": [
            "specialtyschools"
        ],
        "title": "nursing schools"
    },
    {
        "alias": "nutritionists",
        "parents": [
            "health"
        ],
        "title": "nutritionists"
    },
    {
        "alias": "nyonya",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "malaysian"
        ],
        "title": "nyonya"
    },
    {
        "alias": "oaxacan",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "oaxacan"
    },
    {
        "alias": "obgyn",
        "parents": [
            "physicians"
        ],
        "title": "obstetricians & gynecologists"
    },
    {
        "alias": "observatories",
        "parents": [
            "arts"
        ],
        "title": "observatories"
    },
    {
        "alias": "occupationaltherapy",
        "country_whitelist": [
            "au",
            "gb",
            "pt",
            "ca",
            "de",
            "ie",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "occupational therapy"
    },
    {
        "alias": "oden",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "oden"
    },
    {
        "alias": "officecleaning",
        "parents": [
            "professional"
        ],
        "title": "office cleaning"
    },
    {
        "alias": "officeequipment",
        "parents": [
            "shopping"
        ],
        "title": "office equipment"
    },
    {
        "alias": "officiants",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "officiants"
    },
    {
        "alias": "oilchange",
        "country_blacklist": [
            "ch",
            "at",
            "br",
            "no",
            "de",
            "se"
        ],
        "parents": [
            "auto"
        ],
        "title": "oil change stations"
    },
    {
        "alias": "okinawan",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "okinawan"
    },
    {
        "alias": "okonomiyaki",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "okonomiyaki"
    },
    {
        "alias": "oncologist",
        "parents": [
            "physicians"
        ],
        "title": "oncologist"
    },
    {
        "alias": "onigiri",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "onigiri"
    },
    {
        "alias": "opensandwiches",
        "country_whitelist": [
            "tr",
            "dk",
            "se",
            "no"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "open sandwiches"
    },
    {
        "alias": "opera",
        "parents": [
            "arts"
        ],
        "title": "opera & ballet"
    },
    {
        "alias": "opthamalogists",
        "parents": [
            "physicians"
        ],
        "title": "ophthalmologists"
    },
    {
        "alias": "opticians",
        "parents": [
            "shopping"
        ],
        "title": "eyewear & opticians"
    },
    {
        "alias": "optometrists",
        "parents": [
            "health"
        ],
        "title": "optometrists"
    },
    {
        "alias": "oralsurgeons",
        "parents": [
            "dentists"
        ],
        "title": "oral surgeons"
    },
    {
        "alias": "organic_stores",
        "parents": [
            "food"
        ],
        "title": "organic stores"
    },
    {
        "alias": "oriental",
        "country_whitelist": [
            "fr",
            "ch",
            "de",
            "at",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "oriental"
    },
    {
        "alias": "orthodontists",
        "parents": [
            "dentists"
        ],
        "title": "orthodontists"
    },
    {
        "alias": "orthopedists",
        "parents": [
            "physicians"
        ],
        "title": "orthopedists"
    },
    {
        "alias": "orthotics",
        "country_whitelist": [
            "fr",
            "dk",
            "no",
            "ie",
            "it",
            "us",
            "nz",
            "au",
            "gb",
            "br",
            "fi",
            "sg",
            "es"
        ],
        "parents": [
            "health"
        ],
        "title": "orthotics"
    },
    {
        "alias": "osteopathicphysicians",
        "parents": [
            "physicians"
        ],
        "title": "osteopathic physicians"
    },
    {
        "alias": "osteopaths",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "medcenters"
        ],
        "title": "osteopaths"
    },
    {
        "alias": "othersalons",
        "parents": [
            "beautysvc"
        ],
        "title": "nail salons"
    },
    {
        "alias": "outdoorgear",
        "parents": [
            "sportgoods"
        ],
        "title": "outdoor gear"
    },
    {
        "alias": "outlet_stores",
        "parents": [
            "shopping"
        ],
        "title": "outlet stores"
    },
    {
        "alias": "oyakodon",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "donburi"
        ],
        "title": "oyakodon"
    },
    {
        "alias": "pachinko",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "arts"
        ],
        "title": "pachinko"
    },
    {
        "alias": "paddleboarding",
        "country_whitelist": [
            "fr",
            "dk",
            "pt",
            "no",
            "ie",
            "us",
            "nz",
            "au",
            "fi",
            "sg",
            "es"
        ],
        "parents": [
            "active"
        ],
        "title": "paddleboarding"
    },
    {
        "alias": "paintandsip",
        "country_whitelist": [
            "hk",
            "us"
        ],
        "parents": [
            "arts"
        ],
        "title": "paint & sip"
    },
    {
        "alias": "paintball",
        "country_blacklist": [
            "sg"
        ],
        "parents": [
            "active"
        ],
        "title": "paintball"
    },
    {
        "alias": "painters",
        "parents": [
            "homeservices"
        ],
        "title": "painters"
    },
    {
        "alias": "pakistani",
        "parents": [
            "restaurants"
        ],
        "title": "pakistani"
    },
    {
        "alias": "palatine",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "german"
        ],
        "title": "palatine"
    },
    {
        "alias": "panzerotti",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "food"
        ],
        "title": "panzerotti"
    },
    {
        "alias": "parentingclasses",
        "parents": [
            "specialtyschools"
        ],
        "title": "parenting classes"
    },
    {
        "alias": "parking",
        "parents": [
            "auto"
        ],
        "title": "parking"
    },
    {
        "alias": "parks",
        "parents": [
            "active"
        ],
        "title": "parks"
    },
    {
        "alias": "parma",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "parma"
    },
    {
        "alias": "partybikerentals",
        "country_whitelist": [
            "be",
            "nl",
            "es",
            "de",
            "ie",
            "us"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "party bike rentals"
    },
    {
        "alias": "partybusrentals",
        "country_whitelist": [
            "be",
            "ch",
            "nl",
            "cl",
            "de",
            "tr",
            "us",
            "nz",
            "ar",
            "au",
            "at",
            "fi",
            "sg",
            "se",
            "gb"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "party bus rentals"
    },
    {
        "alias": "partyequipmentrentals",
        "country_whitelist": [
            "es",
            "be",
            "fr",
            "pt",
            "cl",
            "tr",
            "it",
            "us",
            "au",
            "gb",
            "sg",
            "se"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "party equipment rentals"
    },
    {
        "alias": "partysupplies",
        "parents": [
            "eventservices"
        ],
        "title": "party supplies"
    },
    {
        "alias": "pastashops",
        "country_whitelist": [
            "ar",
            "it",
            "us",
            "cl"
        ],
        "parents": [
            "gourmet"
        ],
        "title": "pasta shops"
    },
    {
        "alias": "patentlaw",
        "country_whitelist": [
            "de",
            "it"
        ],
        "parents": [
            "professional"
        ],
        "title": "patent law"
    },
    {
        "alias": "pawn",
        "country_blacklist": [
            "tr",
            "br"
        ],
        "parents": [
            "shopping"
        ],
        "title": "pawn shops"
    },
    {
        "alias": "paydayloans",
        "country_blacklist": [
            "nz",
            "ch",
            "dk",
            "de",
            "it",
            "es",
            "at"
        ],
        "parents": [
            "financialservices"
        ],
        "title": "check cashing/pay-day loans"
    },
    {
        "alias": "payroll",
        "country_whitelist": [
            "be",
            "nz",
            "nl",
            "au",
            "sg",
            "tr",
            "us"
        ],
        "parents": [
            "professional"
        ],
        "title": "payroll services"
    },
    {
        "alias": "pediatric_dentists",
        "parents": [
            "dentists"
        ],
        "title": "pediatric dentists"
    },
    {
        "alias": "pediatricians",
        "parents": [
            "physicians"
        ],
        "title": "pediatricians"
    },
    {
        "alias": "pedicabs",
        "country_whitelist": [
            "se",
            "us"
        ],
        "parents": [
            "transport"
        ],
        "title": "pedicabs"
    },
    {
        "alias": "pekinese",
        "country_whitelist": [
            "hk",
            "fr",
            "tw",
            "sg",
            "jp",
            "it"
        ],
        "parents": [
            "chinese"
        ],
        "title": "pekinese"
    },
    {
        "alias": "pensions",
        "country_whitelist": [
            "br",
            "de",
            "jp",
            "at",
            "es"
        ],
        "parents": [
            "hotels"
        ],
        "title": "pensions"
    },
    {
        "alias": "perfume",
        "country_blacklist": [
            "nl",
            "ca",
            "tr",
            "us",
            "br",
            "fi",
            "sg",
            "pl"
        ],
        "parents": [
            "shopping",
            "beautysvc"
        ],
        "title": "perfume"
    },
    {
        "alias": "periodontists",
        "parents": [
            "dentists"
        ],
        "title": "periodontists"
    },
    {
        "alias": "permanentmakeup",
        "country_blacklist": [
            "dk",
            "no",
            "ie",
            "ca",
            "cz",
            "nz",
            "pl",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "beautysvc"
        ],
        "title": "permanent makeup"
    },
    {
        "alias": "persian",
        "parents": [
            "restaurants"
        ],
        "title": "persian/iranian"
    },
    {
        "alias": "personal_injury",
        "parents": [
            "lawyers"
        ],
        "title": "personal injury law"
    },
    {
        "alias": "personal_shopping",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "shopping"
        ],
        "title": "personal shopping"
    },
    {
        "alias": "personalassistants",
        "country_whitelist": [
            "pt",
            "us"
        ],
        "parents": [
            "professional"
        ],
        "title": "personal assistants"
    },
    {
        "alias": "personalchefs",
        "parents": [
            "eventservices"
        ],
        "title": "personal chefs"
    },
    {
        "alias": "peruvian",
        "country_blacklist": [
            "fi",
            "sg",
            "tr",
            "dk",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "peruvian"
    },
    {
        "alias": "pest_control",
        "parents": [
            "localservices"
        ],
        "title": "pest control"
    },
    {
        "alias": "pet_sitting",
        "country_blacklist": [
            "br"
        ],
        "parents": [
            "petservices"
        ],
        "title": "pet boarding/pet sitting"
    },
    {
        "alias": "pet_training",
        "parents": [
            "petservices"
        ],
        "title": "pet training"
    },
    {
        "alias": "petadoption",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "pets"
        ],
        "title": "pet adoption"
    },
    {
        "alias": "pets",
        "parents": [
            null
        ],
        "title": "pets"
    },
    {
        "alias": "petservices",
        "parents": [
            "pets"
        ],
        "title": "pet services"
    },
    {
        "alias": "petstore",
        "parents": [
            "pets"
        ],
        "title": "pet stores"
    },
    {
        "alias": "pharmacy",
        "country_blacklist": [
            "fi",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "pharmacy"
    },
    {
        "alias": "photoboothrentals",
        "country_blacklist": [
            "hk",
            "ar",
            "cl",
            "fi",
            "jp",
            "mx"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "photo booth rentals"
    },
    {
        "alias": "photographers",
        "parents": [
            "eventservices"
        ],
        "title": "photographers"
    },
    {
        "alias": "photographystores",
        "parents": [
            "shopping"
        ],
        "title": "photography stores & services"
    },
    {
        "alias": "physicaltherapy",
        "parents": [
            "health"
        ],
        "title": "physical therapy"
    },
    {
        "alias": "physicians",
        "parents": [
            "health"
        ],
        "title": "doctors"
    },
    {
        "alias": "piadina",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "food"
        ],
        "title": "piadina"
    },
    {
        "alias": "pianobars",
        "country_blacklist": [
            "es",
            "ch",
            "ie",
            "cz",
            "nz",
            "au",
            "at",
            "br",
            "fi",
            "sg",
            "pl"
        ],
        "parents": [
            "nightlife"
        ],
        "title": "piano bars"
    },
    {
        "alias": "pianoservices",
        "parents": [
            "musicinstrumentservices"
        ],
        "title": "piano services"
    },
    {
        "alias": "pianostores",
        "parents": [
            "musicinstrumentservices"
        ],
        "title": "piano stores"
    },
    {
        "alias": "piemonte",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "piemonte"
    },
    {
        "alias": "piercing",
        "parents": [
            "beautysvc"
        ],
        "title": "piercing"
    },
    {
        "alias": "pierogis",
        "country_whitelist": [
            "pl"
        ],
        "parents": [
            "polish"
        ],
        "title": "pierogis"
    },
    {
        "alias": "pilates",
        "parents": [
            "fitness"
        ],
        "title": "pilates"
    },
    {
        "alias": "pita",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "pita"
    },
    {
        "alias": "pizza",
        "parents": [
            "restaurants"
        ],
        "title": "pizza"
    },
    {
        "alias": "planetarium",
        "parents": [
            "arts"
        ],
        "title": "planetarium"
    },
    {
        "alias": "playgrounds",
        "parents": [
            "active"
        ],
        "title": "playgrounds"
    },
    {
        "alias": "plumbing",
        "parents": [
            "homeservices"
        ],
        "title": "plumbing"
    },
    {
        "alias": "plus_size_fashion",
        "country_blacklist": [
            "ch",
            "cl",
            "ie",
            "jp",
            "ca",
            "tr",
            "cz",
            "ar",
            "at",
            "hk",
            "sg",
            "mx",
            "pl",
            "gb"
        ],
        "parents": [
            "fashion"
        ],
        "title": "plus size fashion"
    },
    {
        "alias": "podiatrists",
        "parents": [
            "physicians"
        ],
        "title": "podiatrists"
    },
    {
        "alias": "poledancingclasses",
        "country_blacklist": [
            "es",
            "be",
            "ch",
            "pt",
            "cl",
            "ca",
            "de",
            "tr",
            "cz",
            "ar",
            "at",
            "ie",
            "mx",
            "pl",
            "gb"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "pole dancing classes"
    },
    {
        "alias": "policedepartments",
        "parents": [
            "publicservicesgovt"
        ],
        "title": "police departments"
    },
    {
        "alias": "polish",
        "country_blacklist": [
            "fi",
            "sg",
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "polish"
    },
    {
        "alias": "poolbilliards",
        "country_blacklist": [
            "es",
            "ch",
            "no",
            "de",
            "cz",
            "at",
            "se",
            "fi",
            "pl"
        ],
        "parents": [
            "shopping"
        ],
        "title": "pool & billiards"
    },
    {
        "alias": "poolcleaners",
        "country_blacklist": [
            "dk",
            "no"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "pool cleaners"
    },
    {
        "alias": "poolhalls",
        "parents": [
            "nightlife"
        ],
        "title": "pool halls"
    },
    {
        "alias": "poolservice",
        "parents": [
            "homeservices"
        ],
        "title": "pool & hot tub service"
    },
    {
        "alias": "popupshops",
        "country_blacklist": [
            "br",
            "pt"
        ],
        "parents": [
            "shopping"
        ],
        "title": "pop-up shops"
    },
    {
        "alias": "portuguese",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "portuguese"
    },
    {
        "alias": "postoffices",
        "parents": [
            "publicservicesgovt"
        ],
        "title": "post offices"
    },
    {
        "alias": "potatoes",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "potatoes"
    },
    {
        "alias": "poutineries",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "poutineries"
    },
    {
        "alias": "powdercoating",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "localservices"
        ],
        "title": "powder coating"
    },
    {
        "alias": "preschools",
        "country_blacklist": [
            "dk"
        ],
        "parents": [
            "education"
        ],
        "title": "preschools"
    },
    {
        "alias": "pressurewashers",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "pressure washers"
    },
    {
        "alias": "pretzels",
        "country_whitelist": [
            "de",
            "pt",
            "us"
        ],
        "parents": [
            "food"
        ],
        "title": "pretzels"
    },
    {
        "alias": "printmedia",
        "parents": [
            "massmedia"
        ],
        "title": "print media"
    },
    {
        "alias": "privateinvestigation",
        "parents": [
            "professional"
        ],
        "title": "private investigation"
    },
    {
        "alias": "privateschools",
        "country_whitelist": [
            "nz",
            "au",
            "br",
            "pt",
            "no",
            "mx",
            "se"
        ],
        "parents": [
            "education"
        ],
        "title": "private schools"
    },
    {
        "alias": "privatetutors",
        "parents": [
            "education"
        ],
        "title": "private tutors"
    },
    {
        "alias": "proctologist",
        "parents": [
            "physicians"
        ],
        "title": "proctologists"
    },
    {
        "alias": "professional",
        "parents": [
            null
        ],
        "title": "professional services"
    },
    {
        "alias": "propane",
        "country_blacklist": [
            "nz",
            "ar",
            "mx"
        ],
        "parents": [
            "localservices"
        ],
        "title": "propane"
    },
    {
        "alias": "propertymgmt",
        "parents": [
            "realestate"
        ],
        "title": "property management"
    },
    {
        "alias": "prosthetics",
        "country_whitelist": [
            "es",
            "au",
            "it",
            "us"
        ],
        "parents": [
            "health"
        ],
        "title": "prosthetics"
    },
    {
        "alias": "provencal",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "french"
        ],
        "title": "provencal"
    },
    {
        "alias": "psychiatrists",
        "parents": [
            "physicians"
        ],
        "title": "psychiatrists"
    },
    {
        "alias": "psychic_astrology",
        "parents": [
            "arts"
        ],
        "title": "psychics & astrologers"
    },
    {
        "alias": "psychoanalysts",
        "country_whitelist": [
            "fr"
        ],
        "parents": [
            "c_and_mh"
        ],
        "title": "psychoanalysts"
    },
    {
        "alias": "psychologists",
        "country_blacklist": [
            "pt",
            "cl",
            "ie",
            "ca",
            "jp",
            "cz",
            "ar",
            "gb",
            "hk",
            "sg",
            "mx",
            "pl"
        ],
        "parents": [
            "c_and_mh"
        ],
        "title": "psychologists"
    },
    {
        "alias": "psychotherapists",
        "country_whitelist": [
            "fr",
            "ch",
            "dk",
            "no",
            "de",
            "at",
            "br",
            "fi",
            "sg"
        ],
        "parents": [
            "c_and_mh"
        ],
        "title": "psychotherapists"
    },
    {
        "alias": "pubfood",
        "country_whitelist": [
            "au"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "pub food"
    },
    {
        "alias": "publicplazas",
        "country_blacklist": [
            "be",
            "nl",
            "ca",
            "us",
            "nz",
            "au",
            "gb",
            "br",
            "ie"
        ],
        "parents": [
            "active"
        ],
        "title": "public plazas"
    },
    {
        "alias": "publicrelations",
        "parents": [
            "professional"
        ],
        "title": "public relations"
    },
    {
        "alias": "publicservicesgovt",
        "parents": [
            null
        ],
        "title": "public services & government"
    },
    {
        "alias": "publictransport",
        "parents": [
            "transport"
        ],
        "title": "public transportation"
    },
    {
        "alias": "pubs",
        "parents": [
            "bars"
        ],
        "title": "pubs"
    },
    {
        "alias": "pueblan",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "pueblan"
    },
    {
        "alias": "puertorican",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "caribbean"
        ],
        "title": "puerto rican"
    },
    {
        "alias": "pulmonologist",
        "parents": [
            "physicians"
        ],
        "title": "pulmonologist"
    },
    {
        "alias": "pumpkinpatches",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "homeandgarden"
        ],
        "title": "pumpkin patches"
    },
    {
        "alias": "racetracks",
        "country_blacklist": [
            "ch",
            "at",
            "br",
            "ie",
            "ca",
            "de",
            "sg"
        ],
        "parents": [
            "arts"
        ],
        "title": "race tracks"
    },
    {
        "alias": "radiologists",
        "parents": [
            "physicians"
        ],
        "title": "radiologists"
    },
    {
        "alias": "radiostations",
        "parents": [
            "massmedia"
        ],
        "title": "radio stations"
    },
    {
        "alias": "rafting",
        "parents": [
            "active"
        ],
        "title": "rafting/kayaking"
    },
    {
        "alias": "ramen",
        "parents": [
            "japanese"
        ],
        "title": "ramen"
    },
    {
        "alias": "raw_food",
        "parents": [
            "restaurants"
        ],
        "title": "live/raw food"
    },
    {
        "alias": "realestate",
        "parents": [
            null,
            "homeservices"
        ],
        "title": "real estate"
    },
    {
        "alias": "realestateagents",
        "parents": [
            "realestate"
        ],
        "title": "real estate agents"
    },
    {
        "alias": "realestatelawyers",
        "parents": [
            "lawyers"
        ],
        "title": "real estate law"
    },
    {
        "alias": "realestatesvcs",
        "country_blacklist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "realestate"
        ],
        "title": "real estate services"
    },
    {
        "alias": "record_labels",
        "country_whitelist": [
            "ch",
            "de",
            "at",
            "pt"
        ],
        "parents": [
            "localservices"
        ],
        "title": "record labels"
    },
    {
        "alias": "recording_studios",
        "parents": [
            "localservices"
        ],
        "title": "recording & rehearsal studios"
    },
    {
        "alias": "recreation",
        "parents": [
            "active"
        ],
        "title": "recreation centers"
    },
    {
        "alias": "recyclingcenter",
        "parents": [
            "localservices"
        ],
        "title": "recycling center"
    },
    {
        "alias": "refinishing",
        "parents": [
            "homeservices"
        ],
        "title": "refinishing services"
    },
    {
        "alias": "reflexology",
        "country_blacklist": [
            "dk",
            "se",
            "no",
            "fi",
            "tr",
            "es",
            "pl"
        ],
        "parents": [
            "health"
        ],
        "title": "reflexology"
    },
    {
        "alias": "registrationservices",
        "country_whitelist": [
            "br",
            "it",
            "us",
            "pt"
        ],
        "parents": [
            "auto"
        ],
        "title": "registration services"
    },
    {
        "alias": "registry_office",
        "country_whitelist": [
            "ch",
            "dk",
            "pt",
            "fi",
            "de",
            "it",
            "at"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "registry office"
    },
    {
        "alias": "rehabilitation_center",
        "country_whitelist": [
            "pt",
            "de",
            "jp",
            "it",
            "us",
            "es",
            "fi",
            "se"
        ],
        "parents": [
            "health"
        ],
        "title": "rehabilitation center"
    },
    {
        "alias": "reiki",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "health"
        ],
        "title": "reiki"
    },
    {
        "alias": "religiousorgs",
        "parents": [
            null
        ],
        "title": "religious organizations"
    },
    {
        "alias": "religiousschools",
        "country_whitelist": [
            "nz",
            "au",
            "br",
            "pt",
            "mx",
            "us"
        ],
        "parents": [
            "education"
        ],
        "title": "religious schools"
    },
    {
        "alias": "residences",
        "country_whitelist": [
            "sg",
            "it",
            "es"
        ],
        "parents": [
            "hotels"
        ],
        "title": "residences"
    },
    {
        "alias": "resorts",
        "country_whitelist": [
            "au",
            "pt",
            "us"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "resorts"
    },
    {
        "alias": "restaurants",
        "parents": [
            null
        ],
        "title": "restaurants"
    },
    {
        "alias": "reststops",
        "parents": [
            "hotels"
        ],
        "title": "rest stops"
    },
    {
        "alias": "retirement_homes",
        "parents": [
            "health"
        ],
        "title": "retirement homes"
    },
    {
        "alias": "reupholstery",
        "parents": [
            "localservices"
        ],
        "title": "furniture reupholstery"
    },
    {
        "alias": "rhematologists",
        "country_whitelist": [
            "es",
            "fr",
            "it",
            "us"
        ],
        "parents": [
            "physicians"
        ],
        "title": "rheumatologists"
    },
    {
        "alias": "rhinelandian",
        "country_whitelist": [
            "de"
        ],
        "parents": [
            "german"
        ],
        "title": "rhinelandian"
    },
    {
        "alias": "ribatejo",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "ribatejo"
    },
    {
        "alias": "riceshop",
        "country_whitelist": [
            "jp",
            "tr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "rice"
    },
    {
        "alias": "robatayaki",
        "country_whitelist": [
            "hk",
            "jp",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "robatayaki"
    },
    {
        "alias": "rock_climbing",
        "country_whitelist": [
            "pt",
            "no",
            "jp",
            "us",
            "nz",
            "ar",
            "au",
            "es",
            "fi",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "rock climbing"
    },
    {
        "alias": "rodizios",
        "country_whitelist": [
            "ar",
            "br",
            "pt"
        ],
        "parents": [
            "brazilian"
        ],
        "title": "rodizios"
    },
    {
        "alias": "rolfing",
        "country_whitelist": [
            "ca",
            "pt",
            "us"
        ],
        "parents": [
            "beautysvc"
        ],
        "title": "rolfing"
    },
    {
        "alias": "roman",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "roman"
    },
    {
        "alias": "romanian",
        "country_whitelist": [
            "be",
            "fr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "romanian"
    },
    {
        "alias": "roofing",
        "parents": [
            "homeservices"
        ],
        "title": "roofing"
    },
    {
        "alias": "rotisserie_chicken",
        "country_whitelist": [
            "fr",
            "cl",
            "it",
            "nz",
            "ar",
            "au",
            "br",
            "mx",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "rotisserie chicken"
    },
    {
        "alias": "rugs",
        "country_blacklist": [
            "ch",
            "nl",
            "cl",
            "ca",
            "de",
            "jp",
            "cz",
            "ar",
            "at",
            "hk",
            "ie",
            "mx",
            "pl"
        ],
        "parents": [
            "homeandgarden"
        ],
        "title": "rugs"
    },
    {
        "alias": "rumanian",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "rumanian"
    },
    {
        "alias": "russian",
        "parents": [
            "restaurants"
        ],
        "title": "russian"
    },
    {
        "alias": "rv_dealers",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "dk",
            "no",
            "ca",
            "it",
            "us",
            "es",
            "br",
            "fi",
            "se"
        ],
        "parents": [
            "auto"
        ],
        "title": "rv dealers"
    },
    {
        "alias": "rvparks",
        "country_whitelist": [
            "es",
            "fr",
            "no",
            "de",
            "tr",
            "it",
            "us",
            "cz",
            "se",
            "fi",
            "pl"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "rv parks"
    },
    {
        "alias": "rvrental",
        "country_blacklist": [
            "sg",
            "dk",
            "br"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "rv rental"
    },
    {
        "alias": "rvrepair",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "rv repair"
    },
    {
        "alias": "sailing",
        "country_blacklist": [
            "tr",
            "pl",
            "us"
        ],
        "parents": [
            "active"
        ],
        "title": "sailing"
    },
    {
        "alias": "sakebars",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "bars"
        ],
        "title": "sake bars"
    },
    {
        "alias": "salad",
        "parents": [
            "restaurants"
        ],
        "title": "salad"
    },
    {
        "alias": "salumerie",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "food"
        ],
        "title": "salumerie"
    },
    {
        "alias": "salvadoran",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "latin"
        ],
        "title": "salvadoran"
    },
    {
        "alias": "sambaschools",
        "country_whitelist": [
            "fi",
            "it",
            "br",
            "se"
        ],
        "parents": [
            "specialtyschools"
        ],
        "title": "samba schools"
    },
    {
        "alias": "sandwiches",
        "parents": [
            "restaurants"
        ],
        "title": "sandwiches"
    },
    {
        "alias": "sardinian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "sardinian"
    },
    {
        "alias": "saunas",
        "country_whitelist": [
            "be",
            "fr",
            "ch",
            "pt",
            "no",
            "de",
            "jp",
            "it",
            "cz",
            "hk",
            "at",
            "fi",
            "se"
        ],
        "parents": [
            "health"
        ],
        "title": "saunas"
    },
    {
        "alias": "scandinavian",
        "country_blacklist": [
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "scandinavian"
    },
    {
        "alias": "scandinaviandesign",
        "country_whitelist": [
            "fi",
            "dk",
            "se",
            "no"
        ],
        "parents": [
            "shopping"
        ],
        "title": "scandinavian design"
    },
    {
        "alias": "scottish",
        "country_whitelist": [
            "ch",
            "at",
            "ca",
            "de",
            "ie",
            "us",
            "gb"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "scottish"
    },
    {
        "alias": "screen_printing_tshirt_printing",
        "country_whitelist": [
            "be",
            "ch",
            "nl",
            "pt",
            "de",
            "jp",
            "us",
            "au",
            "at"
        ],
        "parents": [
            "localservices"
        ],
        "title": "screen printing/t-shirt printing"
    },
    {
        "alias": "screenprinting",
        "parents": [
            "localservices"
        ],
        "title": "screen printing"
    },
    {
        "alias": "scuba",
        "parents": [
            "diving"
        ],
        "title": "scuba diving"
    },
    {
        "alias": "seafood",
        "parents": [
            "restaurants"
        ],
        "title": "seafood"
    },
    {
        "alias": "seafoodmarkets",
        "parents": [
            "gourmet"
        ],
        "title": "seafood markets"
    },
    {
        "alias": "security",
        "country_blacklist": [
            "be",
            "ca",
            "nz",
            "br"
        ],
        "parents": [
            "professional"
        ],
        "title": "security services"
    },
    {
        "alias": "securitysystems",
        "parents": [
            "homeservices"
        ],
        "title": "security systems"
    },
    {
        "alias": "selfstorage",
        "parents": [
            "localservices"
        ],
        "title": "self storage"
    },
    {
        "alias": "senegalese",
        "country_whitelist": [
            "be",
            "ca",
            "fr",
            "us",
            "it"
        ],
        "parents": [
            "african"
        ],
        "title": "senegalese"
    },
    {
        "alias": "septicservices",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "localservices"
        ],
        "title": "septic services"
    },
    {
        "alias": "serbocroatian",
        "country_whitelist": [
            "be",
            "fr",
            "ch",
            "cl",
            "de",
            "it",
            "pl",
            "ar",
            "at",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "serbo croatian"
    },
    {
        "alias": "servicestations",
        "parents": [
            "auto"
        ],
        "title": "gas & service stations"
    },
    {
        "alias": "sessionphotography",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "pt",
            "de",
            "it",
            "us",
            "au"
        ],
        "parents": [
            "photographers"
        ],
        "title": "session photography"
    },
    {
        "alias": "sewingalterations",
        "parents": [
            "localservices"
        ],
        "title": "sewing & alterations"
    },
    {
        "alias": "sextherapists",
        "parents": [
            "c_and_mh"
        ],
        "title": "sex therapists"
    },
    {
        "alias": "shanghainese",
        "country_whitelist": [
            "be",
            "fr",
            "tw",
            "jp",
            "it",
            "us",
            "hk",
            "au",
            "sg",
            "se"
        ],
        "parents": [
            "chinese"
        ],
        "title": "shanghainese"
    },
    {
        "alias": "sharedofficespaces",
        "parents": [
            "realestate"
        ],
        "title": "shared office spaces"
    },
    {
        "alias": "shavedice",
        "country_whitelist": [
            "ar",
            "cl",
            "sg",
            "it",
            "us",
            "mx"
        ],
        "parents": [
            "food"
        ],
        "title": "shaved ice"
    },
    {
        "alias": "shipping_centers",
        "country_blacklist": [
            "se",
            "no"
        ],
        "parents": [
            "localservices"
        ],
        "title": "shipping centers"
    },
    {
        "alias": "shoerepair",
        "parents": [
            "localservices"
        ],
        "title": "shoe repair"
    },
    {
        "alias": "shoes",
        "parents": [
            "fashion"
        ],
        "title": "shoe stores"
    },
    {
        "alias": "shopping",
        "parents": [
            null
        ],
        "title": "shopping"
    },
    {
        "alias": "shoppingcenters",
        "parents": [
            "shopping"
        ],
        "title": "shopping centers"
    },
    {
        "alias": "shredding",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "professional"
        ],
        "title": "shredding services"
    },
    {
        "alias": "shrines",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "religiousorgs"
        ],
        "title": "shrines"
    },
    {
        "alias": "shutters",
        "parents": [
            "homeservices"
        ],
        "title": "shutters"
    },
    {
        "alias": "sicilian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "sicilian"
    },
    {
        "alias": "signature_cuisine",
        "country_whitelist": [
            "es",
            "ar",
            "pt",
            "se",
            "no"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "signature cuisine"
    },
    {
        "alias": "signmaking",
        "country_whitelist": [
            "be",
            "fr",
            "dk",
            "it",
            "us",
            "nz",
            "br",
            "sg",
            "se"
        ],
        "parents": [
            "professional"
        ],
        "title": "signmaking"
    },
    {
        "alias": "singaporean",
        "country_blacklist": [
            "dk",
            "pt",
            "fi",
            "sg",
            "tr",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "singaporean"
    },
    {
        "alias": "skate_parks",
        "parents": [
            "parks"
        ],
        "title": "skate parks"
    },
    {
        "alias": "skateshops",
        "parents": [
            "sportgoods"
        ],
        "title": "skate shops"
    },
    {
        "alias": "skatingrinks",
        "parents": [
            "active"
        ],
        "title": "skating rinks"
    },
    {
        "alias": "skiing",
        "country_whitelist": [
            "es",
            "ch",
            "dk",
            "pt",
            "cl",
            "ca",
            "de",
            "jp",
            "no",
            "nz",
            "ar",
            "at",
            "fi",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "skiing"
    },
    {
        "alias": "skincare",
        "parents": [
            "beautysvc"
        ],
        "title": "skin care"
    },
    {
        "alias": "skiresorts",
        "country_blacklist": [
            "sg",
            "dk",
            "br",
            "mx"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "ski resorts"
    },
    {
        "alias": "skischools",
        "parents": [
            "specialtyschools"
        ],
        "title": "ski schools"
    },
    {
        "alias": "skishops",
        "country_blacklist": [
            "dk",
            "pt",
            "ie",
            "tw",
            "tr",
            "hk",
            "gb",
            "br",
            "sg",
            "mx"
        ],
        "parents": [
            "sportgoods"
        ],
        "title": "ski & snowboard shops"
    },
    {
        "alias": "skydiving",
        "parents": [
            "active"
        ],
        "title": "skydiving"
    },
    {
        "alias": "sledding",
        "country_whitelist": [
            "ch",
            "pt",
            "no",
            "ca",
            "de",
            "tr",
            "it",
            "us",
            "nz",
            "at",
            "fi"
        ],
        "parents": [
            "active"
        ],
        "title": "sledding"
    },
    {
        "alias": "sleepspecialists",
        "parents": [
            "health"
        ],
        "title": "sleep specialists"
    },
    {
        "alias": "sleepwear",
        "country_whitelist": [
            "au",
            "pt"
        ],
        "parents": [
            "fashion"
        ],
        "title": "sleepwear"
    },
    {
        "alias": "slovakian",
        "country_whitelist": [
            "be",
            "fr",
            "ca",
            "it",
            "us",
            "cz",
            "au",
            "gb",
            "ie",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "slovakian"
    },
    {
        "alias": "smog_check_stations",
        "country_blacklist": [
            "fi",
            "dk",
            "se",
            "no"
        ],
        "parents": [
            "auto"
        ],
        "title": "smog check stations"
    },
    {
        "alias": "snowremoval",
        "country_blacklist": [
            "hk",
            "nz",
            "mx",
            "br"
        ],
        "parents": [
            "localservices"
        ],
        "title": "snow removal"
    },
    {
        "alias": "soba",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "soba"
    },
    {
        "alias": "social_clubs",
        "parents": [
            "arts"
        ],
        "title": "social clubs"
    },
    {
        "alias": "softwaredevelopment",
        "parents": [
            "professional"
        ],
        "title": "software development"
    },
    {
        "alias": "solarinstallation",
        "parents": [
            "homeservices"
        ],
        "title": "solar installation"
    },
    {
        "alias": "soulfood",
        "country_whitelist": [
            "es",
            "nl",
            "no",
            "ca",
            "us",
            "gb",
            "se",
            "ie",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "soul food"
    },
    {
        "alias": "soup",
        "parents": [
            "restaurants"
        ],
        "title": "soup"
    },
    {
        "alias": "southafrican",
        "country_whitelist": [
            "be",
            "fr",
            "au",
            "ca",
            "it",
            "us"
        ],
        "parents": [
            "african"
        ],
        "title": "south african"
    },
    {
        "alias": "southern",
        "country_whitelist": [
            "nl",
            "ca",
            "tr",
            "us",
            "pl",
            "cz",
            "nz",
            "gb",
            "ie",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "southern"
    },
    {
        "alias": "souvenirs",
        "country_blacklist": [
            "ca",
            "sg",
            "pl"
        ],
        "parents": [
            "shopping"
        ],
        "title": "souvenir shops"
    },
    {
        "alias": "spanish",
        "parents": [
            "restaurants"
        ],
        "title": "spanish"
    },
    {
        "alias": "spas",
        "parents": [
            "beautysvc"
        ],
        "title": "day spas"
    },
    {
        "alias": "specialbikes",
        "country_whitelist": [
            "dk",
            "pt"
        ],
        "parents": [
            "bicycles"
        ],
        "title": "special bikes"
    },
    {
        "alias": "specialed",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "education"
        ],
        "title": "special education"
    },
    {
        "alias": "specialtyschools",
        "parents": [
            "education"
        ],
        "title": "specialty schools"
    },
    {
        "alias": "speech_therapists",
        "parents": [
            "health"
        ],
        "title": "speech therapists"
    },
    {
        "alias": "spiritual_shop",
        "country_whitelist": [
            "be",
            "fr",
            "nl",
            "dk",
            "pt",
            "cl",
            "de",
            "jp",
            "it",
            "no",
            "ar",
            "br",
            "fi",
            "mx"
        ],
        "parents": [
            "shopping"
        ],
        "title": "spiritual shop"
    },
    {
        "alias": "sport_equipment_hire",
        "country_whitelist": [
            "au",
            "pt"
        ],
        "parents": [
            "active"
        ],
        "title": "sport equipment hire"
    },
    {
        "alias": "sportgoods",
        "parents": [
            "shopping"
        ],
        "title": "sporting goods"
    },
    {
        "alias": "sports_clubs",
        "parents": [
            "active"
        ],
        "title": "sports clubs"
    },
    {
        "alias": "sportsbars",
        "country_blacklist": [
            "ch",
            "at"
        ],
        "parents": [
            "bars"
        ],
        "title": "sports bars"
    },
    {
        "alias": "sportsmed",
        "parents": [
            "physicians"
        ],
        "title": "sports medicine"
    },
    {
        "alias": "sportspsychologists",
        "country_whitelist": [
            "nz",
            "sg",
            "it",
            "us"
        ],
        "parents": [
            "c_and_mh"
        ],
        "title": "sports psychologists"
    },
    {
        "alias": "sportsteams",
        "parents": [
            "arts"
        ],
        "title": "professional sports teams"
    },
    {
        "alias": "sportswear",
        "parents": [
            "fashion",
            "sportgoods"
        ],
        "title": "sports wear"
    },
    {
        "alias": "spraytanning",
        "country_blacklist": [
            "cz",
            "pl",
            "br",
            "ca",
            "ie",
            "se"
        ],
        "parents": [
            "tanning"
        ],
        "title": "spray tanning"
    },
    {
        "alias": "squash",
        "country_blacklist": [
            "nz",
            "sg",
            "br",
            "pt"
        ],
        "parents": [
            "active"
        ],
        "title": "squash"
    },
    {
        "alias": "srilankan",
        "parents": [
            "restaurants"
        ],
        "title": "sri lankan"
    },
    {
        "alias": "stadiumsarenas",
        "parents": [
            "arts"
        ],
        "title": "stadiums & arenas"
    },
    {
        "alias": "stationery",
        "parents": [
            "eventservices",
            "artsandcrafts",
            "flowers"
        ],
        "title": "cards & stationery"
    },
    {
        "alias": "steak",
        "parents": [
            "restaurants"
        ],
        "title": "steakhouses"
    },
    {
        "alias": "stereo_installation",
        "country_blacklist": [
            "ch",
            "at",
            "dk"
        ],
        "parents": [
            "auto"
        ],
        "title": "car stereo installation"
    },
    {
        "alias": "stockings",
        "country_whitelist": [
            "cz",
            "pt"
        ],
        "parents": [
            "fashion"
        ],
        "title": "stockings"
    },
    {
        "alias": "streetart",
        "country_whitelist": [
            "dk",
            "pt",
            "no",
            "de",
            "it",
            "nz",
            "au",
            "br",
            "mx",
            "se"
        ],
        "parents": [
            "arts"
        ],
        "title": "street art"
    },
    {
        "alias": "streetvendors",
        "parents": [
            "food"
        ],
        "title": "street vendors"
    },
    {
        "alias": "structuralengineers",
        "country_blacklist": [
            "ar",
            "mx"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "structural engineers"
    },
    {
        "alias": "stucco",
        "parents": [
            "homeservices"
        ],
        "title": "stucco services"
    },
    {
        "alias": "sud_ouest",
        "country_whitelist": [
            "be",
            "fr"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "french southwest"
    },
    {
        "alias": "sugaring",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "hairremoval"
        ],
        "title": "sugaring"
    },
    {
        "alias": "sukiyaki",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "sukiyaki"
    },
    {
        "alias": "summer_camps",
        "parents": [
            "active"
        ],
        "title": "summer camps"
    },
    {
        "alias": "surfing",
        "country_whitelist": [
            "fr",
            "nl",
            "dk",
            "pt",
            "de",
            "jp",
            "it",
            "us",
            "nz",
            "es",
            "br",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "surfing"
    },
    {
        "alias": "surflifesaving",
        "country_whitelist": [
            "nz",
            "au",
            "br",
            "pt"
        ],
        "parents": [
            "active"
        ],
        "title": "surf lifesaving"
    },
    {
        "alias": "surfshop",
        "country_blacklist": [
            "be",
            "fr",
            "nl",
            "no",
            "ie",
            "ca",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "fashion"
        ],
        "title": "surf shop"
    },
    {
        "alias": "surgeons",
        "country_whitelist": [
            "es",
            "ch",
            "at",
            "pt",
            "de",
            "it",
            "us"
        ],
        "parents": [
            "physicians"
        ],
        "title": "surgeons"
    },
    {
        "alias": "sushi",
        "parents": [
            "restaurants"
        ],
        "title": "sushi bars"
    },
    {
        "alias": "swabian",
        "country_whitelist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "swabian"
    },
    {
        "alias": "swedish",
        "country_whitelist": [
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "swedish"
    },
    {
        "alias": "swimminglessons",
        "parents": [
            "fitness",
            "specialtyschools"
        ],
        "title": "swimming lessons/schools"
    },
    {
        "alias": "swimmingpools",
        "parents": [
            "active"
        ],
        "title": "swimming pools"
    },
    {
        "alias": "swimwear",
        "parents": [
            "fashion"
        ],
        "title": "swimwear"
    },
    {
        "alias": "swissfood",
        "country_whitelist": [
            "ch",
            "de"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "swiss food"
    },
    {
        "alias": "synagogues",
        "parents": [
            "religiousorgs"
        ],
        "title": "synagogues"
    },
    {
        "alias": "szechuan",
        "country_whitelist": [
            "fr",
            "ie",
            "tw",
            "jp",
            "us",
            "hk",
            "nz",
            "au",
            "gb",
            "sg"
        ],
        "parents": [
            "chinese"
        ],
        "title": "szechuan"
    },
    {
        "alias": "tabernas",
        "country_whitelist": [
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "tabernas"
    },
    {
        "alias": "tablaoflamenco",
        "country_whitelist": [
            "es",
            "pt"
        ],
        "parents": [
            "arts"
        ],
        "title": "tablao flamenco"
    },
    {
        "alias": "tableware",
        "country_whitelist": [
            "be",
            "fr",
            "pt"
        ],
        "parents": [
            "homeandgarden"
        ],
        "title": "tableware"
    },
    {
        "alias": "tacos",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "tacos"
    },
    {
        "alias": "taichi",
        "parents": [
            "fitness"
        ],
        "title": "tai chi"
    },
    {
        "alias": "taiwanese",
        "country_blacklist": [
            "fi",
            "tr",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "taiwanese"
    },
    {
        "alias": "takoyaki",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "takoyaki"
    },
    {
        "alias": "talentagencies",
        "country_blacklist": [
            "es",
            "ch",
            "cl",
            "ie",
            "ca",
            "tr",
            "cz",
            "nz",
            "au",
            "at",
            "hk",
            "sg",
            "pl",
            "gb"
        ],
        "parents": [
            "professional"
        ],
        "title": "talent agencies"
    },
    {
        "alias": "tamales",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "tamales"
    },
    {
        "alias": "tanning",
        "parents": [
            "beautysvc"
        ],
        "title": "tanning"
    },
    {
        "alias": "tanningbeds",
        "country_blacklist": [
            "cz",
            "br",
            "pl",
            "se",
            "fi"
        ],
        "parents": [
            "tanning"
        ],
        "title": "tanning beds"
    },
    {
        "alias": "tapas",
        "country_blacklist": [
            "fi",
            "au",
            "sg"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "tapas bars"
    },
    {
        "alias": "tapasmallplates",
        "parents": [
            "restaurants"
        ],
        "title": "tapas/small plates"
    },
    {
        "alias": "tattoo",
        "parents": [
            "beautysvc"
        ],
        "title": "tattoo"
    },
    {
        "alias": "tattooremoval",
        "parents": [
            "physicians"
        ],
        "title": "tattoo removal"
    },
    {
        "alias": "taxidermy",
        "country_blacklist": [
            "nl",
            "dk",
            "no",
            "ie",
            "ca",
            "nz",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "professional"
        ],
        "title": "taxidermy"
    },
    {
        "alias": "taxis",
        "parents": [
            "transport"
        ],
        "title": "taxis"
    },
    {
        "alias": "taxlaw",
        "country_whitelist": [
            "be",
            "fr",
            "au",
            "br",
            "de",
            "sg",
            "us"
        ],
        "parents": [
            "lawyers"
        ],
        "title": "tax law"
    },
    {
        "alias": "taxoffice",
        "country_blacklist": [
            "es",
            "ca",
            "sg",
            "pl",
            "us"
        ],
        "parents": [
            "publicservicesgovt"
        ],
        "title": "tax office"
    },
    {
        "alias": "taxservices",
        "parents": [
            "financialservices"
        ],
        "title": "tax services"
    },
    {
        "alias": "tcm",
        "parents": [
            "health"
        ],
        "title": "traditional chinese medicine"
    },
    {
        "alias": "tea",
        "parents": [
            "food"
        ],
        "title": "tea rooms"
    },
    {
        "alias": "telecommunications",
        "country_blacklist": [
            "hk",
            "ar",
            "jp",
            "mx",
            "cl"
        ],
        "parents": [
            "itservices"
        ],
        "title": "telecommunications"
    },
    {
        "alias": "televisionserviceproviders",
        "parents": [
            "homeservices"
        ],
        "title": "television service providers"
    },
    {
        "alias": "televisionstations",
        "parents": [
            "massmedia"
        ],
        "title": "television stations"
    },
    {
        "alias": "tempura",
        "country_whitelist": [
            "jp",
            "sg",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "tempura"
    },
    {
        "alias": "tenantlaw",
        "parents": [
            "professional"
        ],
        "title": "tenant and eviction law"
    },
    {
        "alias": "tennis",
        "parents": [
            "active"
        ],
        "title": "tennis"
    },
    {
        "alias": "teochew",
        "country_whitelist": [
            "hk",
            "sg",
            "tw"
        ],
        "parents": [
            "chinese"
        ],
        "title": "teochew"
    },
    {
        "alias": "teppanyaki",
        "country_whitelist": [
            "tw",
            "jp",
            "us",
            "hk",
            "nz",
            "au",
            "sg",
            "mx"
        ],
        "parents": [
            "japanese"
        ],
        "title": "teppanyaki"
    },
    {
        "alias": "testprep",
        "parents": [
            "education"
        ],
        "title": "test preparation"
    },
    {
        "alias": "tex-mex",
        "country_blacklist": [
            "au",
            "dk",
            "es",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "tex-mex"
    },
    {
        "alias": "thai",
        "parents": [
            "restaurants"
        ],
        "title": "thai"
    },
    {
        "alias": "theater",
        "parents": [
            "arts"
        ],
        "title": "performing arts"
    },
    {
        "alias": "thrift_stores",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "shopping"
        ],
        "title": "thrift stores"
    },
    {
        "alias": "tickets",
        "country_whitelist": [
            "ch",
            "pt",
            "no",
            "de",
            "pl",
            "at",
            "fi",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "tickets"
    },
    {
        "alias": "ticketsales",
        "country_blacklist": [
            "es",
            "nl",
            "ie",
            "tr",
            "cz",
            "nz",
            "pl",
            "br",
            "fi",
            "sg",
            "se",
            "gb"
        ],
        "parents": [
            "arts"
        ],
        "title": "ticket sales"
    },
    {
        "alias": "tires",
        "parents": [
            "auto"
        ],
        "title": "tires"
    },
    {
        "alias": "tobaccoshops",
        "parents": [
            "shopping"
        ],
        "title": "tobacco shops"
    },
    {
        "alias": "tofu",
        "country_whitelist": [
            "jp"
        ],
        "parents": [
            "gourmet"
        ],
        "title": "tofu shops"
    },
    {
        "alias": "tonkatsu",
        "country_whitelist": [
            "jp",
            "sg",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "tonkatsu"
    },
    {
        "alias": "tours",
        "parents": [
            "hotelstravel"
        ],
        "title": "tours"
    },
    {
        "alias": "towing",
        "parents": [
            "auto"
        ],
        "title": "towing"
    },
    {
        "alias": "toys",
        "parents": [
            "shopping"
        ],
        "title": "toy stores"
    },
    {
        "alias": "tradamerican",
        "parents": [
            "restaurants"
        ],
        "title": "american (traditional)"
    },
    {
        "alias": "tradefairs",
        "country_whitelist": [
            "ch",
            "nl",
            "pt",
            "no",
            "jp",
            "de",
            "tr",
            "it",
            "nz",
            "at",
            "fi",
            "mx"
        ],
        "parents": [
            "festivals"
        ],
        "title": "trade fairs"
    },
    {
        "alias": "traditional_swedish",
        "country_whitelist": [
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "traditional swedish"
    },
    {
        "alias": "trains",
        "country_whitelist": [
            "be",
            "fr",
            "dk",
            "no",
            "de",
            "us",
            "au",
            "br",
            "se"
        ],
        "parents": [
            "transport"
        ],
        "title": "trains"
    },
    {
        "alias": "trainstations",
        "parents": [
            "hotelstravel"
        ],
        "title": "train stations"
    },
    {
        "alias": "trampoline",
        "country_whitelist": [
            "dk",
            "ca",
            "tr",
            "it",
            "us",
            "cz",
            "au",
            "pl"
        ],
        "parents": [
            "active"
        ],
        "title": "trampoline parks"
    },
    {
        "alias": "translationservices",
        "country_blacklist": [
            "es",
            "se"
        ],
        "parents": [
            "professional"
        ],
        "title": "translation services"
    },
    {
        "alias": "transport",
        "parents": [
            "hotelstravel"
        ],
        "title": "transportation"
    },
    {
        "alias": "tras_os_montes",
        "country_whitelist": [
            "pt"
        ],
        "parents": [
            "portuguese"
        ],
        "title": "tras-os-montes"
    },
    {
        "alias": "trattorie",
        "country_whitelist": [
            "fr",
            "it"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "trattorie"
    },
    {
        "alias": "travelservices",
        "parents": [
            "hotelstravel"
        ],
        "title": "travel services"
    },
    {
        "alias": "treeservices",
        "parents": [
            "homeservices"
        ],
        "title": "tree services"
    },
    {
        "alias": "trinidadian",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "caribbean"
        ],
        "title": "trinidadian"
    },
    {
        "alias": "triviahosts",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "trivia hosts"
    },
    {
        "alias": "trophyshops",
        "country_blacklist": [
            "dk",
            "no",
            "ca",
            "tr",
            "nz",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "trophy shops"
    },
    {
        "alias": "truck_rental",
        "country_whitelist": [
            "fr",
            "au",
            "pt",
            "ca",
            "de",
            "it",
            "us"
        ],
        "parents": [
            "auto"
        ],
        "title": "truck rental"
    },
    {
        "alias": "tubing",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "active"
        ],
        "title": "tubing"
    },
    {
        "alias": "turkish",
        "country_blacklist": [
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "turkish"
    },
    {
        "alias": "turkishravioli",
        "country_whitelist": [
            "tr"
        ],
        "parents": [
            "turkish"
        ],
        "title": "turkish ravioli"
    },
    {
        "alias": "tuscan",
        "country_whitelist": [
            "fr",
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "tuscan"
    },
    {
        "alias": "tutoring",
        "parents": [
            "education"
        ],
        "title": "tutoring centers"
    },
    {
        "alias": "udon",
        "country_whitelist": [
            "hk",
            "fi",
            "dk",
            "no",
            "tw",
            "jp",
            "se"
        ],
        "parents": [
            "japanese"
        ],
        "title": "udon"
    },
    {
        "alias": "ukrainian",
        "country_blacklist": [
            "tr",
            "dk",
            "es"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "ukrainian"
    },
    {
        "alias": "unagi",
        "country_whitelist": [
            "tw",
            "jp"
        ],
        "parents": [
            "japanese"
        ],
        "title": "unagi"
    },
    {
        "alias": "uniforms",
        "country_blacklist": [
            "ch",
            "nl",
            "dk",
            "cl",
            "jp",
            "tr",
            "pl",
            "cz",
            "ar",
            "at",
            "ie",
            "se"
        ],
        "parents": [
            "shopping"
        ],
        "title": "uniforms"
    },
    {
        "alias": "university_housing",
        "parents": [
            "realestate"
        ],
        "title": "university housing"
    },
    {
        "alias": "urgent_care",
        "parents": [
            "health"
        ],
        "title": "urgent care"
    },
    {
        "alias": "urologists",
        "country_whitelist": [
            "be",
            "fr",
            "ch",
            "pt",
            "ca",
            "de",
            "jp",
            "it",
            "us",
            "at",
            "fi",
            "ie",
            "gb"
        ],
        "parents": [
            "physicians"
        ],
        "title": "urologists"
    },
    {
        "alias": "usedbooks",
        "country_blacklist": [
            "be",
            "nl",
            "cl",
            "ie",
            "jp",
            "ca",
            "tr",
            "us",
            "cz",
            "ar",
            "au",
            "gb",
            "hk",
            "sg"
        ],
        "parents": [
            "shopping"
        ],
        "title": "used bookstore"
    },
    {
        "alias": "utilities",
        "country_whitelist": [
            "au",
            "gb",
            "pt",
            "sg",
            "it",
            "us"
        ],
        "parents": [
            "homeservices"
        ],
        "title": "utilities"
    },
    {
        "alias": "uzbek",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "uzbek"
    },
    {
        "alias": "vacation_rentals",
        "country_blacklist": [
            "be",
            "sg",
            "at",
            "nl"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "vacation rentals"
    },
    {
        "alias": "vacationrentalagents",
        "country_blacklist": [
            "sg",
            "es"
        ],
        "parents": [
            "hotelstravel"
        ],
        "title": "vacation rental agents"
    },
    {
        "alias": "valetservices",
        "country_whitelist": [
            "tr",
            "br",
            "us"
        ],
        "parents": [
            "eventservices"
        ],
        "title": "valet services"
    },
    {
        "alias": "vapeshops",
        "country_blacklist": [
            "hk"
        ],
        "parents": [
            "shopping"
        ],
        "title": "vape shops"
    },
    {
        "alias": "vegan",
        "parents": [
            "restaurants"
        ],
        "title": "vegan"
    },
    {
        "alias": "vegetarian",
        "parents": [
            "restaurants"
        ],
        "title": "vegetarian"
    },
    {
        "alias": "vehicleshipping",
        "parents": [
            "auto"
        ],
        "title": "vehicle shipping"
    },
    {
        "alias": "venetian",
        "country_whitelist": [
            "it"
        ],
        "parents": [
            "italian"
        ],
        "title": "venetian"
    },
    {
        "alias": "venezuelan",
        "country_whitelist": [
            "ca",
            "us"
        ],
        "parents": [
            "latin"
        ],
        "title": "venezuelan"
    },
    {
        "alias": "venison",
        "country_whitelist": [
            "it",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "venison"
    },
    {
        "alias": "venues",
        "parents": [
            "eventservices"
        ],
        "title": "venues & event spaces"
    },
    {
        "alias": "vet",
        "parents": [
            "pets"
        ],
        "title": "veterinarians"
    },
    {
        "alias": "videoandgames",
        "parents": [
            "media"
        ],
        "title": "videos & video game rental"
    },
    {
        "alias": "videofilmproductions",
        "parents": [
            "professional"
        ],
        "title": "video/film production"
    },
    {
        "alias": "videogamestores",
        "parents": [
            "media"
        ],
        "title": "video game stores"
    },
    {
        "alias": "videographers",
        "parents": [
            "eventservices"
        ],
        "title": "videographers"
    },
    {
        "alias": "vietnamese",
        "parents": [
            "restaurants"
        ],
        "title": "vietnamese"
    },
    {
        "alias": "vintage",
        "parents": [
            "fashion"
        ],
        "title": "used, vintage & consignment"
    },
    {
        "alias": "vinyl_records",
        "country_blacklist": [
            "dk"
        ],
        "parents": [
            "media"
        ],
        "title": "vinyl records"
    },
    {
        "alias": "vocation",
        "parents": [
            "specialtyschools"
        ],
        "title": "vocational & technical school"
    },
    {
        "alias": "volleyball",
        "country_whitelist": [
            "fr",
            "dk",
            "no",
            "de",
            "jp",
            "nz",
            "au",
            "at",
            "br",
            "fi",
            "sg",
            "se"
        ],
        "parents": [
            "active"
        ],
        "title": "volleyball"
    },
    {
        "alias": "walkinclinics",
        "country_whitelist": [
            "be",
            "ca",
            "au",
            "fr",
            "it"
        ],
        "parents": [
            "medcenters"
        ],
        "title": "walk-in clinics"
    },
    {
        "alias": "walkingtours",
        "parents": [
            "tours"
        ],
        "title": "walking tours"
    },
    {
        "alias": "watch_repair",
        "parents": [
            "localservices"
        ],
        "title": "watch repair"
    },
    {
        "alias": "watches",
        "parents": [
            "shopping"
        ],
        "title": "watches"
    },
    {
        "alias": "waterdelivery",
        "country_whitelist": [
            "hk",
            "br",
            "us"
        ],
        "parents": [
            "localservices"
        ],
        "title": "water delivery"
    },
    {
        "alias": "waterpurification",
        "parents": [
            "homeservices"
        ],
        "title": "water purification services"
    },
    {
        "alias": "watertaxis",
        "country_whitelist": [
            "nz",
            "au"
        ],
        "parents": [
            "transport"
        ],
        "title": "water taxis"
    },
    {
        "alias": "waxing",
        "parents": [
            "hairremoval"
        ],
        "title": "waxing"
    },
    {
        "alias": "web_design",
        "parents": [
            "professional"
        ],
        "title": "web design"
    },
    {
        "alias": "wedding_planning",
        "parents": [
            "eventservices"
        ],
        "title": "wedding planning"
    },
    {
        "alias": "weightlosscenters",
        "parents": [
            "health"
        ],
        "title": "weight loss centers"
    },
    {
        "alias": "westernjapanese",
        "country_whitelist": [
            "jp",
            "sg",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "western style japanese food"
    },
    {
        "alias": "wheelrimrepair",
        "country_whitelist": [
            "it",
            "us",
            "pt"
        ],
        "parents": [
            "auto"
        ],
        "title": "wheel & rim repair"
    },
    {
        "alias": "wholesale_stores",
        "parents": [
            "shopping"
        ],
        "title": "wholesale stores"
    },
    {
        "alias": "wigs",
        "country_whitelist": [
            "be",
            "fr",
            "pt",
            "no",
            "ca",
            "de",
            "it",
            "us",
            "au",
            "fi",
            "mx",
            "es"
        ],
        "parents": [
            "shopping"
        ],
        "title": "wigs"
    },
    {
        "alias": "wildlifehunting",
        "country_whitelist": [
            "us"
        ],
        "parents": [
            "active"
        ],
        "title": "wildlife hunting ranges"
    },
    {
        "alias": "windowsinstallation",
        "parents": [
            "homeservices"
        ],
        "title": "windows installation"
    },
    {
        "alias": "windowwashing",
        "parents": [
            "homeservices"
        ],
        "title": "window washing"
    },
    {
        "alias": "windshieldinstallrepair",
        "country_blacklist": [
            "ch",
            "de",
            "at"
        ],
        "parents": [
            "auto"
        ],
        "title": "windshield installation & repair"
    },
    {
        "alias": "wine_bars",
        "parents": [
            "bars"
        ],
        "title": "wine bars"
    },
    {
        "alias": "wineries",
        "country_blacklist": [
            "fi"
        ],
        "parents": [
            "arts",
            "food"
        ],
        "title": "wineries"
    },
    {
        "alias": "winetours",
        "parents": [
            "tours"
        ],
        "title": "wine tours"
    },
    {
        "alias": "wok",
        "country_blacklist": [
            "cz",
            "ie",
            "jp",
            "ca",
            "tr",
            "it",
            "us",
            "hk",
            "nz",
            "ar",
            "au",
            "gb",
            "br",
            "sg",
            "pl"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "wok"
    },
    {
        "alias": "womenscloth",
        "parents": [
            "fashion"
        ],
        "title": "women's clothing"
    },
    {
        "alias": "wraps",
        "country_whitelist": [
            "no",
            "dk",
            "se",
            "pt"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "wraps"
    },
    {
        "alias": "xmasmarkets",
        "country_blacklist": [
            "be",
            "nl",
            "ie",
            "ca",
            "tr",
            "us",
            "nz",
            "br",
            "sg"
        ],
        "parents": [
            "festivals"
        ],
        "title": "christmas markets"
    },
    {
        "alias": "yakiniku",
        "country_whitelist": [
            "jp",
            "sg",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "yakiniku"
    },
    {
        "alias": "yakitori",
        "country_whitelist": [
            "jp",
            "sg",
            "tw"
        ],
        "parents": [
            "japanese"
        ],
        "title": "yakitori"
    },
    {
        "alias": "yelpevents",
        "parents": [
            "localflavor"
        ],
        "title": "yelp events"
    },
    {
        "alias": "yoga",
        "parents": [
            "fitness"
        ],
        "title": "yoga"
    },
    {
        "alias": "youth_club",
        "country_whitelist": [
            "fr",
            "dk",
            "pt",
            "no",
            "fi",
            "it",
            "se"
        ],
        "parents": [
            "localservices"
        ],
        "title": "youth club"
    },
    {
        "alias": "yucatan",
        "country_whitelist": [
            "mx"
        ],
        "parents": [
            "mexican"
        ],
        "title": "yucatan"
    },
    {
        "alias": "yugoslav",
        "country_whitelist": [
            "be",
            "fr",
            "au",
            "pt",
            "it",
            "se"
        ],
        "parents": [
            "restaurants"
        ],
        "title": "yugoslav"
    },
    {
        "alias": "zapiekanka",
        "country_whitelist": [
            "pl"
        ],
        "parents": [
            "food"
        ],
        "title": "zapiekanka"
    },
    {
        "alias": "zoos",
        "parents": [
            "active"
        ],
        "title": "zoos"
    },
    {
        "alias": "zorbing",
        "country_whitelist": [
            "nz",
            "pt"
        ],
        "parents": [
            "active"
        ],
        "title": "zorbing"
    }
];


