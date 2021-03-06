var mongoose = require("mongoose");
var Brewery = require("./models/brewery");
var Comment   = require("./models/comment");

var data = [
    {
        id: 2,
        name: "Avondale Brewing Co",
        description: "Housed in a historic building that was once a pharmacy, saloon, and brothel, Avondale Brewing is bridging the past and present together. We craft our brews with the same unique character and style as the stories that have inspired them. We are a locally owned and operated brewery that is dedicated to revitalizing our neighborhood and reviving the legacy of Avondale, Alabama.",
        brewery_type: "micro",
        street: "201 41st St S",
        city: "Birmingham",
        state: "Alabama",
        postal_code: "35222-1932",
        country: "United States",
        longitude: "-86.774322",
        latitude: "33.524521",
        phone: "2057775456",
        website_url: "http://www.avondalebrewing.com",
        updated_at: "2018-08-23T23:19:57.825Z",
        image: "https://avondalebrewing.com/images/logo.jpg",
    },
    {
        id: 44,
        name: "Trim Tab Brewing",
        description: "It began with an idea. We all have the possibility of changing the world with the things we can affect. The small things matter and are responsible for the big impacts we want to see in our lives. Craft beer for us is a way to spread that message and is a way to extend an invitation to make our world a better, more inspired place to live.",
        brewery_type: "micro",
        street: "2721 5th Ave S",
        city: "Birmingham",
        state: "Alabama",
        postal_code: "35233-3401",
        country: "United States",
        longitude: "-86.7914000624146",
        latitude: "33.5128492349817",
        phone: "2057030536",
        website_url: "http://www.trimtabbrewing.com",
        updated_at: "2018-08-23T23:20:31.423Z",
        image: "https://trimtabbrewing.com/wp-content/uploads/2014/06/tt_reserve_01.jpg",
    },
    {
        id: 46,
        name: "Yellowhammer Brewery",
        description: "Yellowhammer Brewing opened in west Huntsville in 2010.? We are dedicated to creating premium ales and lagers, drawing on Belgian and German brewing traditions with a Southern interpretation. Yellowhammer Brewing is a proud member of the Alabama Brewers Guild and supporter of Free The Hops.",
        brewery_type: "micro",
        street: "2600 Clinton Ave W",
        city: "Huntsville",
        state: "Alabama",
        postal_code: "35805-3046",
        country: "United States",
        longitude: "-86.5932014",
        latitude: "34.7277523",
        phone: "2569755950",
        website_url: "http://www.yellowhammerbrewery.com",
        updated_at: "2018-08-23T23:20:33.102Z",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/09/d0/38/e0/yellowhammer-brewing.jpg",
    },
    {
        id: 55,
        name: "Bearpaw River Brewing Co",
        description:'Bearpaw River Brewing Company makes fresh handcrafted beer for hard-working Alaskans. The brewery is run by four brothers from the valley: Jake, Jed, Jack, and James, all working together to bring you fresh, exciting, and original beer!',
        brewery_type: "micro",
        street: "4605 E Palmer Wasilla Hwy",
        city: "Wasilla",
        state: "Alaska",
        postal_code: "99654-7679",
        country: "United States",
        longitude: "-149.4127103",
        latitude: "61.5752695",
        phone: "",
        website_url: "http://bearpawriverbrewing.com",
        updated_at: "2018-08-23T23:20:40.743Z",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/02/50/ba/taproom.jpg",
    },
    {
        id: 76,
        name: "King Street Brewing Co",
        description: "Microbrewery taproom offering pints, growlers & keg refills, plus food-truck fare weekly.",
        brewery_type: "micro",
        street: "9050 King Street",
        city: "Anchorage",
        state: "Alaska",
        postal_code: "99515",
        country: "United States",
        longitude: "-149.879076042937",
        latitude: "61.1384893547315",
        phone: "9073365464",
        website_url: "http://www.kingstreetbrewing.com",
        updated_at: "2018-08-23T23:20:57.179Z",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/j_drgZzM94Gl2UFlW2GhHw/348s.jpg",
    },
    {
        id: 94,
        name: "1912 Brewing",
        description: "Founded in 2015 by Allan and Alicia Conger, 1912 Brewing was established on Tucson�s Westside with the values of family, dedication, and a passion for all things craft. This small, family, and veteran owned brewery has since developed into an exciting venue of collaboration and innovation.",
        brewery_type: "micro",
        street: "2045 N Forbes Blvd Ste 105",
        city: "Tucson",
        state: "Arizona",
        postal_code: "85745-1444",
        country: "United States",
        longitude: "-110.992750525872",
        latitude: "32.2467372722906",
        phone: "5202564851",
        website_url: "http://www.1912brewing.com",
        updated_at: "2018-08-23T23:21:11.302Z",
        image: "https://cdn-az.allevents.in/banners/cef518cf94b778233967e7b7fa31ad77-rimg-w300-h300-gmir.jpg",
    },
    {
        id: 98,
        name: "Bad Water Brewing",
        description: "Bad Water takes the extra time and effort to use traditional lagering methods with their Western Lager, and it shows in the quality.",
        brewery_type: "contract",
        street: "4216 N Brown Ave",
        city: "Scottsdale",
        state: "Arizona",
        postal_code: "85251-3914",
        country: "United States",
        longitude: "-111.924474347826",
        latitude: "33.4972615652174",
        phone: "5207459175",
        website_url: "http://www.badwaterbrewing.com",
        updated_at: "2018-08-23T23:21:15.169Z",
        image: "https://mouthbysouthwest.com/wp-content/uploads/2016/07/BadWater070616.jpg",
    },
    {
        id: 104,
        name: "BJs Restaurant \u0026 Brewery - Chandler",
        description: "Award-winning craft beer, Southern California Twist on Chicago-style pizza, world-renowned dessert � the Pizookie, and much more.",
        brewery_type: "brewpub",
        street: "3155 W Chandler Blvd",
        city: "Chandler",
        state: "Arizona",
        postal_code: "85226-5175",
        country: "United States",
        longitude: "-111.911126",
        latitude: "33.3053455",
        phone: "4809170631",
        website_url: "http://www.bjsrestaurants.com",
        updated_at: "2018-08-23T23:21:21.165Z",
        image: "https://cloudfront.bjsrestaurants.com/476.jpg",
    },
    {
        id: 107,
        name: "BlackRock Brewers",
        description: "As Tucson's Only East Side Brewery, we are dedicated to brewing approachable beer of the highest quality.  ",
        brewery_type: "micro",
        street: "1664 S Research Loop Ste 200",
        city: "Tucson",
        state: "Arizona",
        postal_code: "85710-6767",
        country: "United States",
        longitude: "-110.821778571134",
        latitude: "32.201608314954",
        phone: "5202073203",
        website_url: "http://www.brb.beer",
        updated_at: "2018-08-23T23:21:23.794Z",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/mMQKFvZwbyzhCAZB40eiYg/348s.jpg",
    },
    {
        id: 127,
        name: "Dragoon Brewing Co",
        description: "This microbrewery has an on-site tasting room serving its craft beers, plus a food truck option.",
        brewery_type: "micro",
        street: "1859 W Grant Rd Ste 111",
        city: "Tucson",
        state: "Arizona",
        postal_code: "85745-1214",
        country: "United States",
        longitude: "-111.005452051979",
        latitude: "32.2504946147872",
        phone: "5203293606",
        website_url: "http://www.dragoonbrewing.com",
        updated_at: "2018-08-23T23:21:40.563Z",
        image: "https://pbs.twimg.com/profile_images/597915213397012480/XXx3c_QP_400x400.jpg",
    },
    {
        id: 141,
        name: "Grand Canyon Brewing Company",
        description: "In mid-2017 the Grand Canyon Brewing Company moved 0.5 miles down the street from its longtime home behind Cruisers Route 66 Cafe, after 10 great years... it is time to grow. Originally the Winchester Steakhouse, and now destined to be the new home of Grand Canyon Brewery.",
        brewery_type: "micro",
        street: "233 W Route 66",
        city: "Williams",
        state: "Arizona",
        postal_code: "86046-2530",
        country: "United States",
        longitude: "-112.1892168",
        latitude: "35.2500282",
        phone: "8005132072",
        website_url: "http://www.grandcanyonbrewingco.com",
        updated_at: "2018-08-23T23:21:53.397Z",
        image: "https://lh3.googleusercontent.com/zP8V55aVcYIS2vFYy-OirGKpeMvFhwCKvJripgeNN6RFkFQ9x-yqbb93UryOJ80F2is820gdqL2Ge-V-O55cXShFREHFEQ=s750",
    },
    {
        id: 163,
        name: "Mudshark Brewing Co",
        description: "Convivial haunt serving fare such as burgers & pizza plus artisanal beer from its namesake brewery.",
        brewery_type: "micro",
        street: "210 Swanson Ave",
        city: "Lake Havasu City",
        state: "Arizona",
        postal_code: "86403-0966",
        country: "United States",
        longitude: "-114.342433477881",
        latitude: "34.4689736300844",
        phone: "9284532981",
        website_url: "http://www.mudsharkbrewingco.com",
        updated_at: "2018-08-23T23:22:12.542Z",
        image: "https://pbs.twimg.com/profile_images/966914242178723840/yTRsTAeQ_400x400.jpg",
    },
    {
        id: 182,
        name: "Richter Aleworks",
        description: "We all need a place to relax after work, so why not do it with a drink in your hand? Join us for a locally brewed beer.  Pair it with something delicious from our kitchen. ",
        brewery_type: "micro",
        street: "8279 W Lake Pleasant Pkwy Ste 110",
        city: "Peoria",
        state: "Arizona",
        postal_code: "85382-7434",
        country: "United States",
        longitude: "-112.238054093359",
        latitude: "33.6687744976834",
        phone: "6029086553",
        website_url: "http://www.richteraleworks.com",
        updated_at: "2018-08-23T23:22:29.385Z",
        image: "https://pbs.twimg.com/profile_images/647072002147119104/z5Ln6Y3o_400x400.jpg",
    },
    {
        id: 187,
        name: "SanTan Brewing Co",
        description: "Taphouse with diverse pub grub, a large selection of beer brewed in-house & occasional live music.",
        brewery_type: "regional",
        street: "8 S San Marcos Pl",
        city: "Chandler",
        state: "Arizona",
        postal_code: "85225-7862",
        country: "United States",
        longitude: "-111.8423459",
        latitude: "33.3032436",
        phone: "4809178700",
        website_url: "http://www.santanbrewing.com",
        updated_at: "2018-08-23T23:22:33.482Z",
        image: "https://pbs.twimg.com/profile_images/1039296779160698880/o_9Es4kK_400x400.jpg",
    },
    {
        id: 198,
        name: "State 48 Brewery",
        description: "State 48 Brewery is a locally owned and family run business. Our family has operated restaurants in Phoenix since the Eighties. We have always had an exceptional craft beer selection at each restaurant, with an emphasis on local Arizona breweries. We have dreamt of someday opening our own brewery, and now we are living the dream.",
        brewery_type: "brewpub",
        street: "13823 W Bell Rd",
        city: "Surprise",
        state: "Arizona",
        postal_code: "85374-3873",
        country: "United States",
        longitude: "-112.357813820157",
        latitude: "33.63822125",
        phone: "6235841095",
        website_url: "",
        updated_at: "2018-08-23T23:22:41.468Z",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/CjleHXQI4o9bJrq4rKVtIg/ls.jpg",
    },
    {
        id: 219,
        name: "Wren House Brewing Company",
        description: "Located in the Green Gables neighborhood of Phoenix, the property we now call home at Wren House sat unoccupied and disused for decades. We fell in love with its character, rebuilt the old guest house and garage in the backyard into our brewhouse, and converted the main 1920s bungalow house into our cozy taproom.",
        brewery_type: "micro",
        street: "2125 N 24th St",
        city: "Phoenix",
        state: "Arizona",
        postal_code: "85008-2713",
        country: "United States",
        longitude: "-112.0301125",
        latitude: "33.516633",
        phone: "6022449184",
        website_url: "http://www.wrenhousebrewing.com",
        updated_at: "2018-08-23T23:22:59.255Z",
        image: "https://pbs.twimg.com/profile_images/832274158067159040/LRmKsgf2_400x400.jpg",
    },
    {
        id: 225,
        name: "Brick Oven Pizza Co / Brick \u0026 Forge Brewing",
        description: "Pizza, craft beer, and fun!",
        brewery_type: "brewpub",
        street: "2410 Linwood Dr",
        city: "Paragould",
        state: "Arkansas",
        postal_code: "72450-6122",
        country: "United States",
        longitude: "-90.5204797204622",
        latitude: "36.0316358142169",
        phone: "8702364200",
        website_url: "http://www.brickovenpizzacompany.com",
        updated_at: "2018-08-23T23:23:05.438Z",
        image: "http://www.brickovenpizzacompany.com/content/img/bopclogo.jpg",
    },
    {
        id: 235,
        name: "Diamond Bear Brewing Co",
        description: "Microbrewery since 2000 offering renowned European-style brews on tap & in bottles, plus tours.",
        brewery_type: "micro",
        street: "600 N Broadway St",
        city: "North Little Rock",
        state: "Arkansas",
        postal_code: "72114-5381",
        country: "United States",
        longitude: "-92.2726892120821",
        latitude: "34.7594277548278",
        phone: "5017082739",
        website_url: "http://www.diamondbear.com",
        updated_at: "2018-08-23T23:23:14.931Z",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/07/06/68/78/bar-area-of-arkansas.jpg",
    },
    {
        id: 247,
        name: "Lost Forty Brewing",
        description: "We aim to craft beers as unwavering, wild, and uniquely Arkansas as the the land itself. Lost Forty is part tall tale, a little bit of hearsay, a lot of history",
        brewery_type: "micro",
        street: "501 Byrd St",
        city: "Little Rock",
        state: "Arkansas",
        postal_code: "72202",
        country: "United States",
        longitude: "-92.260019",
        latitude: "34.742845",
        phone: "5013197275",
        website_url: "http://www.lost40brewing.com/",
        updated_at: "2018-08-23T23:23:24.018Z",
        image: "https://www.endurancesportswire.com/wp-content/uploads/2011/04/Lost-40-Logo275.png",
    }
]



function seedDB() {
    //Remove all breweries
    Brewery.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed breweries!");
        //add a few breweries
        data.forEach(function (seed) {
            Brewery.create(seed, function (err, brewery) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a brewery");
                }
            });
        });
    });
}

module.exports = seedDB;