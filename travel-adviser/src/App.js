import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './Components/Header/Header';
import { getPlacesData } from './api/travelAdvisorAPI';
import { useEffect, useMemo, useState } from 'react';
import MapComponent from './Components/Map/Map';
import List from './Components/List/List';
import "./App.css";

function App() {
  const [places, setPlaces] = useState([
    {
      "location_id": "6216167",
      "name": "Amara",
      "latitude": "17.449306",
      "longitude": "78.37898",
      "num_reviews": "374",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/06/e2/35/c0/amara-our-indian-specialty.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/06/e2/35/c0/amara-our-indian-specialty.jpg",
            "height": "50"
          },
          "original": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/06/e2/35/c0/amara-our-indian-specialty.jpg",
            "height": "683"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/06/e2/35/c0/amara-our-indian-specialty.jpg",
            "height": "683"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/e2/35/c0/amara-our-indian-specialty.jpg",
            "height": "366"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2014-11-11T07:15:56-0500",
        "caption": "Amara, our Indian specialty restaurant",
        "id": "115488192",
        "helpful_votes": "2",
        "published_date": "2014-11-11T07:15:56-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.872331619262695",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "1",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#1 of 5,816 Restaurants in Hyderabad",
      "distance": "7.8783115861080235",
      "distance_string": "7.9 km",
      "bearing": "southeast",
      "rating": "5.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6216167-Reviews-Amara-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6216167-Amara-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6623 2323",
      "website": "http://www.tridenthotels.com/Hyderabad/hotel.asp",
      "email": "reservations@tridenthotels.com",
      "address_obj": {
        "street1": "Lobby Level Cyber Tower Hitec City",
        "street2": "Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Lobby Level Cyber Tower Hitec City Madhapur, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "6362830",
      "name": "Kanak",
      "latitude": "17.449276",
      "longitude": "78.37894",
      "num_reviews": "177",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/19/1c/f4/24/ambiance.jpg",
            "height": "141"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/1c/f4/24/ambiance.jpg",
            "height": "50"
          },
          "original": {
            "width": "1280",
            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/1c/f4/24/ambiance.jpg",
            "height": "720"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/19/1c/f4/24/ambiance.jpg",
            "height": "576"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/1c/f4/24/ambiance.jpg",
            "height": "309"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2019-09-04T01:58:05-0400",
        "caption": "ambiance",
        "id": "421327908",
        "helpful_votes": "4",
        "published_date": "2019-09-04T01:58:05-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.639583587646484",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "22",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#20 of 5,816 Restaurants in Hyderabad",
      "distance": "7.877374078364103",
      "distance_string": "7.9 km",
      "bearing": "southeast",
      "rating": "5.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$1,500 - $3,000",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "Kanak, the Indian specialty restaurant at Trident, Hyderabad presents the best of authentic Indian cuisine. The carefully-planned menu offers a culinary journey through the Indian Subcontinent ranging from delicacies of the North West Frontier Province, to renowned Hyderabadi recipes and fresh coastal offerings. Two semi-private dining rooms offer an ideal seating for a corporate lunch or a family get together. Seafood display, tandoors, and grills accentuate the decor of the restaurant. Another important aspect of the restaurant is the wine tasting room where the Sommelier expertly pairs the ‘Pathar ka Ghost’ with Napa Valley Merlot’s or the ‘Butter Pepper Garlic Crab’ with Rieslings from Chateau St. Michel (Chateau is a masculine, not a feminine hence the wine would be called St. Michel).",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6362830-Reviews-Kanak-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6362830-Kanak-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6623 2323",
      "website": "http://www.tridenthotels.com/Hyderabad/hotel/dining.asp",
      "email": "reservations.hyderabad@tridenthotels.com",
      "address_obj": {
        "street1": "Trident, Hitec City",
        "street2": "Near cyber towers, Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Trident, Hitec City Near cyber towers, Madhapur, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "15780389",
      "name": "Mazzo",
      "latitude": "17.452448",
      "longitude": "78.36314",
      "num_reviews": "132",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/19/5c/61/64/pool-deck-area.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/5c/61/64/pool-deck-area.jpg",
            "height": "50"
          },
          "original": {
            "width": "1280",
            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/5c/61/64/pool-deck-area.jpg",
            "height": "797"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/19/5c/61/64/pool-deck-area.jpg",
            "height": "638"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/5c/61/64/pool-deck-area.jpg",
            "height": "343"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2019-09-23T08:10:10-0400",
        "caption": "Pool Deck Area",
        "id": "425484644",
        "helpful_votes": "3",
        "published_date": "2019-09-23T08:10:10-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.631310939788818",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "23",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#21 of 5,816 Restaurants in Hyderabad",
      "distance": "6.528766026101193",
      "distance_string": "6.5 km",
      "bearing": "southeast",
      "rating": "5.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d15780389-Reviews-Mazzo-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d15780389-Mazzo-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 91000 80131",
      "website": "http://www.marriott.com/hotels/hotel-information/restaurant/hydhy-marriott-executive-apartments-hyderabad/",
      "email": "supriya.sharma2@marriott.com",
      "address_obj": {
        "street1": "SLN Terminus, 10th floor, Jayabheri Enclave",
        "street2": "Beside Botanical Gardens, Gachibowli",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500032"
      },
      "address": "SLN Terminus, 10th floor, Jayabheri Enclave Beside Botanical Gardens, Gachibowli, Hyderabad 500032 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 420,
              "close_time": 1410
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "4617",
          "name": "Italian"
        },
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "6216329",
      "name": "Ohm",
      "latitude": "17.447096",
      "longitude": "78.38405",
      "num_reviews": "102",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/5d/c8/c9/ohm.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/5d/c8/c9/ohm.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/5d/c8/c9/ohm.jpg",
            "height": "1335"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/5d/c8/c9/ohm.jpg",
            "height": "683"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c8/c9/ohm.jpg",
            "height": "367"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-24T03:27:03-0400",
        "caption": "Ohm...",
        "id": "257804489",
        "helpful_votes": "0",
        "published_date": "2017-05-24T03:27:03-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.410087585449219",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "27",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#24 of 5,816 Restaurants in Hyderabad",
      "distance": "8.431921630175907",
      "distance_string": "8.4 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6216329-Reviews-Ohm-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6216329-Ohm-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6728 2828",
      "website": "http://www.hotelavasa.com",
      "email": "contact@avasahotels.com",
      "address_obj": {
        "street1": "64 Hi Tech City Road",
        "street2": "Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "64 Hi Tech City Road Madhapur, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "5379",
          "name": "Chinese"
        },
        {
          "key": "5473",
          "name": "Japanese"
        },
        {
          "key": "10653",
          "name": "Sushi"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10660",
          "name": "Thai"
        },
        {
          "key": "10690",
          "name": "Indonesian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "297586",
      "ad_position": "inline1",
      "ad_size": "8X8",
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "detail": "0",
      "page_type": "restaurants",
      "mob_ptype": "app_restaurants"
    },
    {
      "location_id": "6360258",
      "name": "Tuscany",
      "latitude": "17.449677",
      "longitude": "78.37933",
      "num_reviews": "128",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/6a/8f/64/getlstd-property-photo.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/6a/8f/64/getlstd-property-photo.jpg",
            "height": "50"
          },
          "original": {
            "width": "960",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/6a/8f/64/getlstd-property-photo.jpg",
            "height": "720"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/6a/8f/64/getlstd-property-photo.jpg",
            "height": "412"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/05/6a/8f/64/getlstd-property-photo.jpg",
            "height": "187"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2014-02-20T05:26:46-0500",
        "caption": "getlstd_property_photo",
        "id": "90869604",
        "helpful_votes": "1",
        "published_date": "2014-02-20T05:26:46-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.375823020935059",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "29",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#26 of 5,816 Restaurants in Hyderabad",
      "distance": "7.874830109414968",
      "distance_string": "7.9 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6360258-Reviews-Tuscany-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6360258-Tuscany-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6623 2323",
      "website": "http://www.tridenthotels.com/Hyderabad/hotel.asp",
      "email": "reservations.trident@tridenthotels.com",
      "address_obj": {
        "street1": "Hitech City Main Rd",
        "street2": "Patrika Nagar, HITEC City",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Hitech City Main Rd Patrika Nagar, HITEC City, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 1140,
              "close_time": 1410
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "4617",
          "name": "Italian"
        },
        {
          "key": "10654",
          "name": "European"
        },
        {
          "key": "10700",
          "name": "Soups"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "1819566",
      "name": "Food Exchange",
      "latitude": "17.472597",
      "longitude": "78.37279",
      "num_reviews": "235",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/24/db/57/the-square-novotel-hicc.jpg",
            "height": "141"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/24/db/57/the-square-novotel-hicc.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/24/db/57/the-square-novotel-hicc.jpg",
            "height": "1125"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/24/db/57/the-square-novotel-hicc.jpg",
            "height": "576"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/24/db/57/the-square-novotel-hicc.jpg",
            "height": "309"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-01T11:03:56-0400",
        "caption": "The square @ Novotel HICC. Outdoor seating and garden",
        "id": "254073687",
        "helpful_votes": "0",
        "published_date": "2017-05-01T11:03:56-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.132595062255859",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "37",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#33 of 5,816 Restaurants in Hyderabad",
      "distance": "5.715298245334922",
      "distance_string": "5.7 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$1,000 - $2,500",
      "neighborhood_info": [
        {
          "location_id": "21002068",
          "name": "Sultan Bazar"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "Previously known as The Square, Food Exchange is a contemporary, casual & multi-cuisine restaurant serving food from the four corners of the world. The restaurant is widely known for its innovative reinterpretation of popular dishes and cuisines. Buffet as well as ala carte options comprising global and local cuisines are available. Among the best restaurants in Hitech City, Hyderabad, Food Exchange is designed to be a Social Hub with flexible seating options & relaxed ambiance that's suitable for the family packs as well as \"together alone\" guests. A scenic poolside & beautifully landscaped lawns form the backdrop of the restaurant. The restaurant is a must-try for its signature dishes & beverages such as Guntur Style Chicken Pizza, Lamb Kheema Pav, Roghni Seekh, Bangkok Margarita, Chocopresso, authentic Filter Coffee.",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d1819566-Reviews-Food_Exchange-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d1819566-Food_Exchange-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6606 7575",
      "website": "http://www.novotelhyderabad.com/restaurants-bars/food-exchange-restaurant-hitech-city/",
      "email": "h6182-fb3@accor.com",
      "address_obj": {
        "street1": "Ground Floor Adjacent to Hitec City",
        "street2": "Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Ground Floor Adjacent to Hitec City Madhapur, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 390,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 390,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 390,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 390,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 390,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 390,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 390,
              "close_time": 1410
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10648",
          "name": "International"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "6216373",
      "name": "Republic Of Noodles",
      "latitude": "17.442898",
      "longitude": "78.37685",
      "num_reviews": "144",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/96/dd/87/caption.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/96/dd/87/caption.jpg",
            "height": "50"
          },
          "original": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/96/dd/87/caption.jpg",
            "height": "366"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/96/dd/87/caption.jpg",
            "height": "366"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/96/dd/87/caption.jpg",
            "height": "366"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-06-16T10:36:47-0400",
        "caption": "...",
        "id": "261545351",
        "helpful_votes": "0",
        "published_date": "2017-06-16T10:36:47-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "4.089803695678711",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "40",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#36 of 5,816 Restaurants in Hyderabad",
      "distance": "8.259404887767804",
      "distance_string": "8.3 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6216373-Reviews-Republic_Of_Noodles-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6216373-Republic_Of_Noodles-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 4421 2121",
      "website": "https://www.lemontreehotels.com/lemon-tree-premier/hyderabad/hotel-hyderabad/restaurants.aspx",
      "email": "hi.hy@lemontreehotels.com",
      "address_obj": {
        "street1": "Plot No.2, Survey No.64, HITEC City",
        "street2": "Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Plot No.2, Survey No.64, HITEC City Madhapur, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 900
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "5379",
          "name": "Chinese"
        },
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10660",
          "name": "Thai"
        },
        {
          "key": "10721",
          "name": "Burmese"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "19565060",
      "name": "Turquoise",
      "latitude": "17.449747",
      "longitude": "78.363556",
      "num_reviews": "90",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/36/81/5b/our-all-day-dining-restaurant.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/36/81/5b/our-all-day-dining-restaurant.jpg",
            "height": "50"
          },
          "original": {
            "width": "1280",
            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/36/81/5b/our-all-day-dining-restaurant.jpg",
            "height": "853"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/36/81/5b/our-all-day-dining-restaurant.jpg",
            "height": "683"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/36/81/5b/our-all-day-dining-restaurant.jpg",
            "height": "367"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2019-12-05T02:17:40-0500",
        "caption": "Our all day dining restaurant \"Turquoise\" offers 155 seating with a private dining room.",
        "id": "439779675",
        "helpful_votes": "0",
        "published_date": "2019-12-05T02:17:40-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.985718250274658",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "49",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#45 of 5,816 Restaurants in Hyderabad",
      "distance": "6.800606838854927",
      "distance_string": "6.8 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$850 - $5,000",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "Located in Gachibowli, Experience a wide spread of delights and local flavors at our restaurant, Turquoise which fuses tastes of modern European/Asian cuisines presented in a buffet setup with show kitchens and live counters. The restauarnt is perfect for all corporate & social team gettogether lunches.",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d19565060-Reviews-Turquoise-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d19565060-Turquoise-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "cafe",
          "name": "Café"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 91000 10219",
      "website": "https://www.marriott.com/hotels/hotel-information/restaurant/hydmd-le-meridien-hyderabad/",
      "email": "Vishal.Chawan@lemeridien.com",
      "address_obj": {
        "street1": "132 Miyapur Rd",
        "street2": "Le Meridien Hyderabad, Gachibowli",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500032"
      },
      "address": "132 Miyapur Rd Le Meridien Hyderabad, Gachibowli, Hyderabad 500032 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 450,
              "close_time": 1350
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10654",
          "name": "European"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7916251",
      "name": "Absolute Barbecues - Gachibowli, Hyderabad",
      "latitude": "17.442926",
      "longitude": "78.35731",
      "num_reviews": "153",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/08/4e/77/b4/photo1jpg.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/08/4e/77/b4/photo1jpg.jpg",
            "height": "50"
          },
          "original": {
            "width": "2048",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/08/4e/77/b4/photo1jpg.jpg",
            "height": "1536"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/08/4e/77/b4/photo1jpg.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/08/4e/77/b4/photo1jpg.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2015-07-08T09:09:32-0400",
        "caption": "",
        "id": "139360180",
        "helpful_votes": "2",
        "published_date": "2015-07-09T10:03:21-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.6961781978607178",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "69",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#63 of 5,816 Restaurants in Hyderabad",
      "distance": "7.119439837563838",
      "distance_string": "7.1 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$7 - $15",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "AB's is India's First WISH GRILL Restaurant. A place designed to take the adventure, excitement and joy of BARBECUING to all new heights. A place dedicated to you and your favourite people in the world – your GANGS. Where your job is to WISH. And ours is to make your wishes come TRUE – in unprecedented, flavour-packed, deliciously delightful ways! Why? … because what you like is more important than printed menus. … because you have a million moods and there should always be food to match. … because grillin' is not a way of cooking food, it's a way of life. … because taste counts; and you matter.",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7916251-Reviews-Absolute_Barbecues_Gachibowli_Hyderabad-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7916251-Absolute_Barbecues_Gachibowli_Hyderabad-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 73373 83763",
      "website": "http://www.absolutebarbecues.com",
      "email": "reservations@absolute-barbecue.com",
      "address_obj": {
        "street1": "CMC Centre Old Mumbai Highway",
        "street2": "Second Floor, Apurupa Sili,Indiranagar, Beside HP Petrol pump",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500032"
      },
      "address": "CMC Centre Old Mumbai Highway Second Floor, Apurupa Sili,Indiranagar, Beside HP Petrol pump, Hyderabad 500032 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10668",
          "name": "Grill"
        },
        {
          "key": "10643",
          "name": "Seafood"
        },
        {
          "key": "10651",
          "name": "Barbecue"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10676",
          "name": "Diner"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "11776",
          "name": "Bars & Pubs"
        },
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7975091",
      "name": "La Cantina",
      "latitude": "17.472342",
      "longitude": "78.372314",
      "num_reviews": "102",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0b/ae/c7/1e/baked-chips.jpg",
            "height": "141"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0b/ae/c7/1e/baked-chips.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0b/ae/c7/1e/baked-chips.jpg",
            "height": "1125"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0b/ae/c7/1e/baked-chips.jpg",
            "height": "576"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0b/ae/c7/1e/baked-chips.jpg",
            "height": "309"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-06-21T00:54:51-0400",
        "caption": "Baked Chips",
        "id": "196003614",
        "helpful_votes": "6",
        "published_date": "2016-06-21T00:54:51-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.6433088779449463",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "73",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#66 of 5,816 Restaurants in Hyderabad",
      "distance": "5.688435143770695",
      "distance_string": "5.7 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7975091-Reviews-La_Cantina-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7975091-La_Cantina-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6606 7591",
      "website": "http://www.novotelhyderabad.com/restaurants-bars/la-cantina/",
      "email": "h6182-du@accor.com",
      "address_obj": {
        "street1": "Ground Floor Hitec City",
        "street2": "Near Hitech City",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Ground Floor Hitec City Near Hitech City, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 1110,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 1110,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 1110,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 1110,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 1110,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10639",
          "name": "Latin"
        },
        {
          "key": "10655",
          "name": "Spanish"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "297586",
      "ad_position": "inline2",
      "ad_size": "8X8",
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "detail": "0",
      "page_type": "restaurants",
      "mob_ptype": "app_restaurants"
    },
    {
      "location_id": "4206510",
      "name": "Citrus Cafe",
      "latitude": "17.443455",
      "longitude": "78.37678",
      "num_reviews": "101",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/66/86/c9/waffle.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/66/86/c9/waffle.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/66/86/c9/waffle.jpg",
            "height": "1500"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/66/86/c9/waffle.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/66/86/c9/waffle.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-02-11T11:16:25-0500",
        "caption": "waffle",
        "id": "241600201",
        "helpful_votes": "0",
        "published_date": "2017-02-11T11:16:25-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.521023750305176",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "89",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#81 of 5,816 Restaurants in Hyderabad",
      "distance": "8.207001441229602",
      "distance_string": "8.2 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Open Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$1,500 - $1,800",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d4206510-Reviews-Citrus_Cafe-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d4206510-Citrus_Cafe-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 98104 62329",
      "website": "https://www.lemontreehotels.com/lemon-tree-premier/hyderabad/hotel-hyderabad/restaurants.aspx",
      "email": "fnb_mkt@lemontreehotels.com",
      "address_obj": {
        "street1": "2 Plot No",
        "street2": "Lemon Tree Hotel, Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "2 Plot No Lemon Tree Hotel, Madhapur, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ],
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ],
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ],
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ],
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ],
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ],
          [
            {
              "open_time": 0,
              "close_time": 1439
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "9908",
          "name": "American"
        },
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7726354",
      "name": "Chutney's",
      "latitude": "17.452501",
      "longitude": "78.38061",
      "num_reviews": "123",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/07/ec/a6/4e/south-indian-thalispicy.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/07/ec/a6/4e/south-indian-thalispicy.jpg",
            "height": "50"
          },
          "original": {
            "width": "1280",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/07/ec/a6/4e/south-indian-thalispicy.jpg",
            "height": "960"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/07/ec/a6/4e/south-indian-thalispicy.jpg",
            "height": "412"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/07/ec/a6/4e/south-indian-thalispicy.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2015-05-20T12:27:04-0400",
        "caption": "South Indian Thali...spicy and yummy !",
        "id": "132949582",
        "helpful_votes": "5",
        "published_date": "2015-05-20T14:36:50-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.520465612411499",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "90",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#82 of 5,816 Restaurants in Hyderabad",
      "distance": "7.751710621780861",
      "distance_string": "7.8 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7726354-Reviews-Chutney_s-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7726354-Chutney_s-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 4004 8484",
      "website": "http://www.chutneysrestaurant.com/?fbclid=IwAR2h8yWDFQvZkS9xTQNdF9oiAejrFQ9Yh_nDcpHgU83YvWO-DClWVrUWpFw",
      "address_obj": {
        "street1": "5th Floor Hi Tech City Road",
        "street2": null,
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "5th Floor Hi Tech City Road, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10992",
          "name": "Gluten Free Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7959054",
      "name": "Clever Fox Cafe",
      "latitude": "17.443193",
      "longitude": "78.37639",
      "num_reviews": "48",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/6a/55/5b/main-course.jpg",
            "height": "141"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/6a/55/5b/main-course.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/6a/55/5b/main-course.jpg",
            "height": "1125"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/6a/55/5b/main-course.jpg",
            "height": "576"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/6a/55/5b/main-course.jpg",
            "height": "309"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-29T03:02:50-0400",
        "caption": "Main course",
        "id": "258626907",
        "helpful_votes": "0",
        "published_date": "2017-05-29T03:02:50-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.505424737930298",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "93",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#84 of 5,816 Restaurants in Hyderabad",
      "distance": "8.203119800626126",
      "distance_string": "8.2 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7959054-Reviews-Clever_Fox_Cafe-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7959054-Clever_Fox_Cafe-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 98104 62329",
      "website": "https://www.facebook.com/Clever-Fox-Cafe-Hyderabad-649310158539122/",
      "email": "fnb_mkt@lemontreehotels.com",
      "address_obj": {
        "street1": "Red Fox Hotel, Hitec City Main Road, Opposite Tcs, Hitec City",
        "street2": null,
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Red Fox Hotel, Hitec City Main Road, Opposite Tcs, Hitec City, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "3343313",
      "name": "A'La Liberty",
      "latitude": "17.45907",
      "longitude": "78.35221",
      "num_reviews": "82",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/03/e5/ca/42/a-la-liberty.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/03/e5/ca/42/a-la-liberty.jpg",
            "height": "50"
          },
          "original": {
            "width": "1125",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/03/e5/ca/42/a-la-liberty.jpg",
            "height": "1500"
          },
          "large": {
            "width": "1125",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/03/e5/ca/42/a-la-liberty.jpg",
            "height": "1500"
          },
          "medium": {
            "width": "337",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/03/e5/ca/42/a-la-liberty.jpg",
            "height": "450"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2013-05-12T08:36:51-0400",
        "caption": "why to wait??",
        "id": "65391170",
        "helpful_votes": "0",
        "published_date": "2013-05-12T08:36:51-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.5022621154785156",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "96",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#87 of 5,816 Restaurants in Hyderabad",
      "distance": "5.279732139574228",
      "distance_string": "5.3 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d3343313-Reviews-A_La_Liberty-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d3343313-A_La_Liberty-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6644 7861",
      "website": "http://www.libertyexclusive.net/restaurant.htm",
      "email": "info@libertyexclusive.com",
      "address_obj": {
        "street1": "Leela Gopal Towers 2nd Floor 1'st Road",
        "street2": "Banjara Hills",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500037"
      },
      "address": "Leela Gopal Towers 2nd Floor 1'st Road Banjara Hills, Hyderabad 500037 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "4179764",
      "name": "Cafe Heart Cup",
      "latitude": "17.459862",
      "longitude": "78.36833",
      "num_reviews": "108",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/0d/2e/ba/photo3jpg.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/0d/2e/ba/photo3jpg.jpg",
            "height": "50"
          },
          "original": {
            "width": "1536",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/0d/2e/ba/photo3jpg.jpg",
            "height": "2048"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-p/0e/0d/2e/ba/photo3jpg.jpg",
            "height": "733"
          },
          "medium": {
            "width": "338",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/0d/2e/ba/photo3jpg.jpg",
            "height": "450"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-01-04T02:04:09-0500",
        "caption": "",
        "id": "235744954",
        "helpful_votes": "0",
        "published_date": "2017-01-04T02:04:09-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.464660167694092",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "104",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#94 of 5,816 Restaurants in Hyderabad",
      "distance": "6.2477658443543636",
      "distance_string": "6.2 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d4179764-Reviews-Cafe_Heart_Cup-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d4179764-Cafe_Heart_Cup-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6555 5254",
      "website": "http://www.heartcupcoffee.com",
      "address_obj": {
        "street1": "2-91/9, HSBC Lane, Kothaguda, Opposite TCS, Kondapur",
        "street2": "Next to F-Cafe & Lounge",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": null
      },
      "address": "2-91/9, HSBC Lane, Kothaguda, Opposite TCS, Kondapur Next to F-Cafe & Lounge, Hyderabad India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ],
          [
            {
              "open_time": 690,
              "close_time": 1410
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10640",
          "name": "Bar"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "11776",
          "name": "Bars & Pubs"
        },
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "6216298",
      "name": "Le Cafe",
      "latitude": "17.472918",
      "longitude": "78.37316",
      "num_reviews": "63",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/06/41/4e/67/le-cafe.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/06/41/4e/67/le-cafe.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/06/41/4e/67/le-cafe.jpg",
            "height": "1333"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/06/41/4e/67/le-cafe.jpg",
            "height": "682"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/41/4e/67/le-cafe.jpg",
            "height": "367"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2014-07-26T01:37:02-0400",
        "caption": "Le Cafe Novotel Hyderbad (European Sidewalk Cafe)",
        "id": "104943207",
        "helpful_votes": "1",
        "published_date": "2014-07-28T11:43:12-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.450449228286743",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "108",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#98 of 5,816 Restaurants in Hyderabad",
      "distance": "5.729862020016967",
      "distance_string": "5.7 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6216298-Reviews-Le_Cafe-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6216298-Le_Cafe-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6682 4422",
      "email": "h6182-fb1@accor.com",
      "address_obj": {
        "street1": "Ground Floor Novotel & Hicc Post Office Bag 1101",
        "street2": "Hitec City",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Ground Floor Novotel & Hicc Post Office Bag 1101 Hitec City, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10642",
          "name": "Cafe"
        },
        {
          "key": "4617",
          "name": "Italian"
        },
        {
          "key": "10646",
          "name": "Fast Food"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "297586",
      "ad_position": "inline3",
      "ad_size": "8X8",
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "detail": "0",
      "page_type": "restaurants",
      "mob_ptype": "app_restaurants"
    },
    {
      "location_id": "8147915",
      "name": "FireWater Kitchen and Bar",
      "latitude": "17.446915",
      "longitude": "78.37859",
      "num_reviews": "60",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/63/a3/55/complimentary.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/63/a3/55/complimentary.jpg",
            "height": "50"
          },
          "original": {
            "width": "1125",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/63/a3/55/complimentary.jpg",
            "height": "1500"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-p/0f/63/a3/55/complimentary.jpg",
            "height": "733"
          },
          "medium": {
            "width": "338",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/63/a3/55/complimentary.jpg",
            "height": "450"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-26T10:20:18-0400",
        "caption": "Complimentary",
        "id": "258188117",
        "helpful_votes": "0",
        "published_date": "2017-05-26T10:20:18-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.4502594470977783",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "109",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#99 of 5,816 Restaurants in Hyderabad",
      "distance": "8.043723663460238",
      "distance_string": "8 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d8147915-Reviews-FireWater_Kitchen_and_Bar-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d8147915-FireWater_Kitchen_and_Bar-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 96660 00066",
      "email": "ahmedali.firewater@gmail.com",
      "address_obj": {
        "street1": "5th Floor, Phoenix Tower a",
        "street2": "Opposite Trident Hotel, Hitech City",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "5th Floor, Phoenix Tower a Opposite Trident Hotel, Hitech City, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "5379",
          "name": "Chinese"
        },
        {
          "key": "10640",
          "name": "Bar"
        },
        {
          "key": "10648",
          "name": "International"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10670",
          "name": "Pub"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7351964",
      "name": "Rayalaseema Ruchulu",
      "latitude": "17.44529",
      "longitude": "78.37746",
      "num_reviews": "62",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/4a/ee/08/hitech-city.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/4a/ee/08/hitech-city.jpg",
            "height": "50"
          },
          "original": {
            "width": "1280",
            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/4a/ee/08/hitech-city.jpg",
            "height": "960"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/4a/ee/08/hitech-city.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/4a/ee/08/hitech-city.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2018-11-08T01:16:29-0500",
        "caption": "HITECH CITY",
        "id": "357232136",
        "helpful_votes": "1",
        "published_date": "2018-11-08T01:16:29-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.429323196411133",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "115",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#105 of 5,816 Restaurants in Hyderabad",
      "distance": "8.098150651359296",
      "distance_string": "8.1 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "price": "$300 - $700",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "Voted best in Andhra Cuisine 4 years in a row since 2008 by Times Good Food, Rayalaseema Ruchulu is a must visit for locals and visitors alike in Hyderabad! Starting out in in 2004 RR has now branched into 4 outlets in different parts of Hyderabad. With Uttam Reddy at the helm of affairs this restaurant chain brings out the best in the traditional style of cooking of the magnificent Rayalaseema region of Andhra Pradesh, India. All ingredients used at RR are fresh, handpicked and conform to the high standards that Uttam has set for these restaurants. Age old recipes are prepared under his keen watchful eye by a team of well trained and experienced chefs using traditional methods, select spices & herbs and the freshest produce available. With quality of food and service par excellence, RR is scoring high on celeb quotients. You are most likely to rub shoulders with celebrities and personalities from the film industry who are regulars here. Michelin starred Chef Vineet Bhatia on Fox traveler, Aditya Bal on Chak le and Aneesha Baig on NDTV have all come knocking on our doors to find out what makes us Tick!! So come and try our authentic Andhra Cuisine and we promise to take you on a gastronomic journey into the Rayalaseema Region that bound to come in for seconds !!We have four outlets i.e Jubilee Hills, Himayath Nagar, Ameerpet and Lakdi Ka Pul",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7351964-Reviews-Rayalaseema_Ruchulu-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7351964-Rayalaseema_Ruchulu-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 4015 0011",
      "website": "http://www.rayalaseemaruchulu.com",
      "email": "info@rayalaseemaruchulu.com",
      "address_obj": {
        "street1": "4th Floor, Sun Tower, Huda Techno Enclave Hitech City Rd",
        "street2": "4th Floor, Sun Tower, Huda Techno Enclave",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "4th Floor, Sun Tower, Huda Techno Enclave Hitech City Rd 4th Floor, Sun Tower, Huda Techno Enclave, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7959712",
      "name": "Pi",
      "latitude": "17.447084",
      "longitude": "78.38352",
      "num_reviews": "34",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/5d/ca/cb/ambiance.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/5d/ca/cb/ambiance.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/5d/ca/cb/ambiance.jpg",
            "height": "1331"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/5d/ca/cb/ambiance.jpg",
            "height": "681"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/ca/cb/ambiance.jpg",
            "height": "366"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-24T03:32:57-0400",
        "caption": "Ambiance",
        "id": "257805003",
        "helpful_votes": "0",
        "published_date": "2017-05-24T03:32:57-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.4185240268707275",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "120",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#109 of 5,816 Restaurants in Hyderabad",
      "distance": "8.393024586701099",
      "distance_string": "8.4 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7959712-Reviews-Pi-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7959712-Pi-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6728 2828",
      "website": "http://www.hotelavasa.com/#",
      "address_obj": {
        "street1": "Lobby Level Hi Tech City Road",
        "street2": null,
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Lobby Level Hi Tech City Road, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "3539514",
      "name": "Rubaiyat",
      "latitude": "17.444841",
      "longitude": "78.37672",
      "num_reviews": "91",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/09/8a/dd/5a/rubaiyat.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/8a/dd/5a/rubaiyat.jpg",
            "height": "50"
          },
          "original": {
            "width": "1600",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/09/8a/dd/5a/rubaiyat.jpg",
            "height": "1200"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/8a/dd/5a/rubaiyat.jpg",
            "height": "412"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/8a/dd/5a/rubaiyat.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2015-11-18T06:07:04-0500",
        "caption": "Rubaiyat",
        "id": "160095578",
        "helpful_votes": "1",
        "published_date": "2015-11-18T06:07:04-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.412057399749756",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "122",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#111 of 5,816 Restaurants in Hyderabad",
      "distance": "8.084707031085212",
      "distance_string": "8.1 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$50 - $2,500",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d3539514-Reviews-Rubaiyat-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d3539514-Rubaiyat-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 78930 10001",
      "website": "http://www.ohris.com/",
      "address_obj": {
        "street1": "Ground Floor Block I Hi Tech City Road",
        "street2": "Hitech city",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Ground Floor Block I Hi Tech City Road Hitech city, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 1440
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10751",
          "name": "Halal"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10751",
          "name": "Halal"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "3906185",
      "name": "Dil Punjabi",
      "latitude": "17.44339",
      "longitude": "78.38038",
      "num_reviews": "68",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/03/8f/62/ff/dil-punjabi.jpg",
            "height": "140"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/03/8f/62/ff/dil-punjabi.jpg",
            "height": "50"
          },
          "original": {
            "width": "1280",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/03/8f/62/ff/dil-punjabi.jpg",
            "height": "720"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/03/8f/62/ff/dil-punjabi.jpg",
            "height": "576"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/03/8f/62/ff/dil-punjabi.jpg",
            "height": "309"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2013-03-01T06:10:16-0500",
        "caption": "Restaurant Front View",
        "id": "59728639",
        "helpful_votes": "2",
        "published_date": "2013-03-01T06:10:16-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.396749496459961",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "126",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#114 of 5,816 Restaurants in Hyderabad",
      "distance": "8.461866011056907",
      "distance_string": "8.5 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "price": "$250 - $400",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "Dil Punjabi is a unique and fascinating \"Aqua Themed\" Restaurant, located at L3 (First Floor) Inorbit Mall, Hyderabad. Well known for it's most sumptuous Punjabi and North Indian Cuisine. Dil Punjabi also has a special area for kids, unique concepts, soothing ambience and is speedily becoming \"The place to chill\". The Dil Punjabi menu covers the most popular and delicious of North Indian Dishes, and with special emphasis on quality and authenticity it is a real treat for the Taste buds. The relaxing ambience creates that most essential soothing space to go along nicely with a great meal. The special area for kids helps occupy the little ones while the parents enjoy a relaxing meal. Launching soon, is our special themed kids menu which will excite both the Kid’s taste buds as well as their imagination. Dil Punjabi aims to fuse modern day technology and contemporary decor, with the retro \"Swadisht taste\" of Punjab to create an enjoyable experience.",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d3906185-Reviews-Dil_Punjabi-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d3906185-Dil_Punjabi-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 98660 20408",
      "website": "http://www.facebook.com/Dilpunjabi.dp",
      "email": "relevant.trade@gmail.com",
      "address_obj": {
        "street1": null,
        "street2": "Inorbit Mall",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Inorbit Mall, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "4424611",
      "name": "Little Italy",
      "latitude": "17.448078",
      "longitude": "78.37921",
      "num_reviews": "80",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/09/e8/7f/f2/little-italy.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/e8/7f/f2/little-italy.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/09/e8/7f/f2/little-italy.jpg",
            "height": "1483"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/09/e8/7f/f2/little-italy.jpg",
            "height": "759"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/e8/7f/f2/little-italy.jpg",
            "height": "185"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-01-01T06:26:09-0500",
        "caption": "Ambiance",
        "id": "166232050",
        "helpful_votes": "0",
        "published_date": "2016-01-01T06:26:09-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3952975273132324",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "128",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#116 of 5,816 Restaurants in Hyderabad",
      "distance": "7.993820053615976",
      "distance_string": "8 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d4424611-Reviews-Little_Italy-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d4424611-Little_Italy-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 3999 9500",
      "website": "http://littleitaly.in/restaurant/hydera1_main.html",
      "address_obj": {
        "street1": "3rd Floor, BK Towers, Near Cyber Towers, Hitech City",
        "street2": "B.K. Towers, Behind Cyber Towers, Hi-Tech City",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "3rd Floor, BK Towers, Near Cyber Towers, Hitech City B.K. Towers, Behind Cyber Towers, Hi-Tech City, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "4617",
          "name": "Italian"
        },
        {
          "key": "10648",
          "name": "International"
        },
        {
          "key": "10654",
          "name": "European"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "2654566",
      "name": "Nautanki Gali",
      "latitude": "17.444994",
      "longitude": "78.37673",
      "num_reviews": "197",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0b/6e/35/05/different-themes-to-sit.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0b/6e/35/05/different-themes-to-sit.jpg",
            "height": "50"
          },
          "original": {
            "width": "820",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0b/6e/35/05/different-themes-to-sit.jpg",
            "height": "542"
          },
          "large": {
            "width": "820",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0b/6e/35/05/different-themes-to-sit.jpg",
            "height": "542"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0b/6e/35/05/different-themes-to-sit.jpg",
            "height": "363"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-05-28T22:40:32-0400",
        "caption": "Different themes to sit",
        "id": "191771909",
        "helpful_votes": "3",
        "published_date": "2016-05-28T22:40:32-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3949801921844482",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "129",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#117 of 5,816 Restaurants in Hyderabad",
      "distance": "8.072831347594448",
      "distance_string": "8.1 km",
      "bearing": "southeast",
      "rating": "3.5",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d2654566-Reviews-Nautanki_Gali-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d2654566-Nautanki_Gali-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 78930 10001",
      "website": "http://www.ohris.com",
      "email": "info@ohris.com",
      "address_obj": {
        "street1": "Cyber Pearl, Ground Floor, Block I",
        "street2": "Hitech City, Madhapur",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Cyber Pearl, Ground Floor, Block I Hitech City, Madhapur, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1170,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10648",
          "name": "International"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "8104016",
      "name": "The Sky Lounge",
      "latitude": "17.447144",
      "longitude": "78.38386",
      "num_reviews": "40",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/5d/e9/a0/ambiance.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/5d/e9/a0/ambiance.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/5d/e9/a0/ambiance.jpg",
            "height": "918"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/5d/e9/a0/ambiance.jpg",
            "height": "470"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/e9/a0/ambiance.jpg",
            "height": "252"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-24T04:51:40-0400",
        "caption": "Ambiance",
        "id": "257812896",
        "helpful_votes": "0",
        "published_date": "2017-05-24T04:51:40-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.372850179672241",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "139",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#126 of 5,816 Restaurants in Hyderabad",
      "distance": "8.413759117830653",
      "distance_string": "8.4 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d8104016-Reviews-The_Sky_Lounge-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d8104016-The_Sky_Lounge-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6728 2828",
      "address_obj": {
        "street1": "64 Hi Tech City Survey",
        "street2": "Hotel Avasa",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "64 Hi Tech City Survey Hotel Avasa, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10640",
          "name": "Bar"
        },
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10670",
          "name": "Pub"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7355519",
      "name": "Punjabi Affair",
      "latitude": "17.44954",
      "longitude": "78.38277",
      "num_reviews": "60",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/63/09/cc/dining.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/63/09/cc/dining.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/63/09/cc/dining.jpg",
            "height": "1056"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/0a/63/09/cc/dining.jpg",
            "height": "540"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/63/09/cc/dining.jpg",
            "height": "290"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-02-21T04:11:14-0500",
        "caption": "Dining",
        "id": "174262732",
        "helpful_votes": "0",
        "published_date": "2016-02-21T04:11:14-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3638365268707275",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "143",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#129 of 5,816 Restaurants in Hyderabad",
      "distance": "8.144905755595358",
      "distance_string": "8.1 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7355519-Reviews-Punjabi_Affair-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7355519-Punjabi_Affair-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6451 5133",
      "website": "http://punjabiaffair.com",
      "address_obj": {
        "street1": "Mallapur Main Road, Opposite Krishe Sapphire Building",
        "street2": null,
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500076"
      },
      "address": "Mallapur Main Road, Opposite Krishe Sapphire Building, Hyderabad 500076 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "6360257",
      "name": "Ninety Six Bar",
      "latitude": "17.449804",
      "longitude": "78.37893",
      "num_reviews": "28",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/6a/8f/ad/getlstd-property-photo.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/6a/8f/ad/getlstd-property-photo.jpg",
            "height": "50"
          },
          "original": {
            "width": "585",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/6a/8f/ad/getlstd-property-photo.jpg",
            "height": "265"
          },
          "large": {
            "width": "585",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/6a/8f/ad/getlstd-property-photo.jpg",
            "height": "265"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/6a/8f/ad/getlstd-property-photo.jpg",
            "height": "249"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2014-02-20T05:30:11-0500",
        "caption": "getlstd_property_photo",
        "id": "90869677",
        "helpful_votes": "2",
        "published_date": "2014-02-20T05:30:11-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3605170249938965",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "145",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#131 of 5,816 Restaurants in Hyderabad",
      "distance": "7.834632991999762",
      "distance_string": "7.8 km",
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6360257-Reviews-Ninety_Six_Bar-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6360257-Ninety_Six_Bar-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6623 2323",
      "website": "https://www.tridenthotels.com/hotels-in-hyderabad/restaurant-in-hyderabad/ninety-six-bar?utm_source=GMBlisting&utm_medium=organic",
      "email": "reservations.hyderabad@tridenthotels.com",
      "address_obj": {
        "street1": "Hitech City, Near Cyber Towers, Madhapur",
        "street2": "Trident Hotel Hyderabad",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "Hitech City, Near Cyber Towers, Madhapur Trident Hotel Hyderabad, Hyderabad 500081 India",
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10640",
          "name": "Bar"
        },
        {
          "key": "10670",
          "name": "Pub"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "1057682",
      "name": "Siddique Kebab Corner",
      "latitude": "17.45937",
      "longitude": "78.36611",
      "num_reviews": "84",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/7c/08/c8/photo3jpg.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/7c/08/c8/photo3jpg.jpg",
            "height": "50"
          },
          "original": {
            "width": "2048",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/7c/08/c8/photo3jpg.jpg",
            "height": "1536"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/7c/08/c8/photo3jpg.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0d/7c/08/c8/photo3jpg.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-11-01T09:24:51-0400",
        "caption": "",
        "id": "226232520",
        "helpful_votes": "0",
        "published_date": "2016-11-02T07:55:39-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3595542907714844",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "146",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#132 of 5,816 Restaurants in Hyderabad",
      "distance": "6.126535688115269",
      "distance_string": "6.1 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$",
      "neighborhood_info": [
        {
          "location_id": "21002066",
          "name": "Jubilee Hills"
        },
        {
          "location_id": "21002067",
          "name": "Serilingampally"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d1057682-Reviews-Siddique_Kebab_Corner-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d1057682-Siddique_Kebab_Corner-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 99666 68562",
      "address_obj": {
        "street1": "Kothaguda Kothaguda X Roads",
        "street2": "Opposite Harsha Toyota",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500018"
      },
      "address": "Kothaguda Kothaguda X Roads Opposite Harsha Toyota, Hyderabad 500018 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 1020,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10646",
          "name": "Fast Food"
        },
        {
          "key": "10751",
          "name": "Halal"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10751",
          "name": "Halal"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "7342992",
      "name": "Palamuru Grill",
      "latitude": "17.452446",
      "longitude": "78.38488",
      "num_reviews": "80",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/09/e4/51/03/palamuru-grill.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/e4/51/03/palamuru-grill.jpg",
            "height": "50"
          },
          "original": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/e4/51/03/palamuru-grill.jpg",
            "height": "422"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/e4/51/03/palamuru-grill.jpg",
            "height": "422"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/e4/51/03/palamuru-grill.jpg",
            "height": "192"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2015-12-30T13:36:18-0500",
        "caption": "Restaurant",
        "id": "165957891",
        "helpful_votes": "3",
        "published_date": "2015-12-30T13:36:18-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3431026935577393",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "153",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#138 of 5,816 Restaurants in Hyderabad",
      "distance": "8.092432628529513",
      "distance_string": "8.1 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "price": "$500 - $1,000",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "Palamuru Grill has 8 operating Restaurants, Bars, Banquets in Hyderabad, Warangal, Khammam and Santa Clara California cities. We serve most authentic south Indian food in this state, we got several awards to our credit. 1) Palamur Grill ,Madhapur ( Hyd )unit is main unit in Hitechcity with dine in and open terrace dining also, with valet parking facility. 2) Palamuru grill and Bar ,Kondapur ( Hyd ) is very close to CBD of IT are of Hitechcity, with Bar facility , Valet parking is available 3) Palamuru Grill Kompally ( Hyd ), is situated on North part of Hyderabad with 125 seater restaurant and 300 seater nice banquet hall, ample parking in basement . 4) Palamuru Grill Jubilee Hills ( Hyd ), central Hyderabad, , valet parking available 5) Palamuru Grill Warangal, is situated close to NIT on NH, restaurant,, convention halls of up to 400 people capacity 6) Palamuru Grill Khammam:, Restaurant, Banquets, and also having 3 star level 45 hotel rooms, party halls ( Hotel Grand Gayathri)",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d7342992-Reviews-Palamuru_Grill-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d7342992-Palamuru_Grill-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 87129 90029",
      "website": "http://palamurugrill.com/",
      "email": "info.madhapur@palamurugrill.com",
      "address_obj": {
        "street1": "100 Feet Road",
        "street2": "Opposite Meridian School, Madhapur. Hyderabad",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "100 Feet Road Opposite Meridian School, Madhapur. Hyderabad, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1395
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 930
            },
            {
              "open_time": 1140,
              "close_time": 1350
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1395
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 960
            },
            {
              "open_time": 1140,
              "close_time": 1395
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10751",
          "name": "Halal"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "4307629",
      "name": "Rotis",
      "latitude": "17.445824",
      "longitude": "78.37713",
      "num_reviews": "96",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/06/ba/2a/34/rotis-hyderabad.jpg",
            "height": "141"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/06/ba/2a/34/rotis-hyderabad.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/06/ba/2a/34/rotis-hyderabad.jpg",
            "height": "1125"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/06/ba/2a/34/rotis-hyderabad.jpg",
            "height": "576"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/ba/2a/34/rotis-hyderabad.jpg",
            "height": "309"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2014-10-13T14:33:56-0400",
        "caption": "Veg platter",
        "id": "112863796",
        "helpful_votes": "0",
        "published_date": "2014-10-13T14:33:56-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.325641632080078",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "166",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#150 of 5,816 Restaurants in Hyderabad",
      "distance": "8.030459362055458",
      "distance_string": "8 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Closed Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "neighborhood_info": [
        {
          "location_id": "13087968",
          "name": "Hi-tech City/Gachibowli"
        }
      ],
      "ride_providers": [
        "olaCabs"
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d4307629-Reviews-Rotis-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d4307629-Rotis-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6586 8686",
      "website": "http://www.rotis.co.in",
      "address_obj": {
        "street1": "2nd Floor 18 Hardhik Crown",
        "street2": null,
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500081"
      },
      "address": "2nd Floor 18 Hardhik Crown, Hyderabad 500081 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ],
          [
            {
              "open_time": 660,
              "close_time": 1380
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "dietary_restrictions": [
        {
          "key": "10697",
          "name": "Vegan Options"
        },
        {
          "key": "10665",
          "name": "Vegetarian Friendly"
        }
      ],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    },
    {
      "location_id": "6216234",
      "name": "Fusion 9",
      "latitude": "17.475195",
      "longitude": "78.38468",
      "num_reviews": "58",
      "timezone": "Asia/Kolkata",
      "location_string": "Hyderabad, Hyderabad District, Telangana",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/f6/1d/60/kungpao-chicken-fried.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/f6/1d/60/kungpao-chicken-fried.jpg",
            "height": "50"
          },
          "original": {
            "width": "1112",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/f6/1d/60/kungpao-chicken-fried.jpg",
            "height": "1500"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-p/0a/f6/1d/60/kungpao-chicken-fried.jpg",
            "height": "741"
          },
          "medium": {
            "width": "334",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/f6/1d/60/kungpao-chicken-fried.jpg",
            "height": "450"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-04-21T01:27:35-0400",
        "caption": "Kungpao chicken & fried rice",
        "id": "183901536",
        "helpful_votes": "0",
        "published_date": "2016-04-21T01:27:35-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "doubleclick_zone": "as.india.andhra_pradesh.hyderabad",
      "preferred_map_engine": "default",
      "raw_ranking": "3.3094451427459717",
      "ranking_geo": "Hyderabad",
      "ranking_geo_id": "297586",
      "ranking_position": "175",
      "ranking_denominator": "4096",
      "ranking_category": "restaurant",
      "ranking": "#159 of 5,816 Restaurants in Hyderabad",
      "distance": "6.68911080130003",
      "distance_string": "6.7 km",
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "open_now_text": "Open Now",
      "is_long_closed": false,
      "price_level": "$$ - $$$",
      "price": "$12 - $14",
      "ride_providers": [
        "olaCabs"
      ],
      "description": "We, at Fusion 9,believe that we can reach out to people, build bonds, foster relationships and stay in love forever through food, fun and frolic.",
      "web_url": "https://www.tripadvisor.com/Restaurant_Review-g297586-d6216234-Reviews-Fusion_9-Hyderabad_Hyderabad_District_Telangana.html",
      "write_review": "https://www.tripadvisor.com/UserReview-g297586-d6216234-Fusion_9-Hyderabad_Hyderabad_District_Telangana.html",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "city",
              "name": "City"
            }
          ],
          "name": "Hyderabad",
          "abbrv": null,
          "location_id": "297586"
        },
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Hyderabad District",
          "abbrv": null,
          "location_id": "12389092"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Telangana",
          "abbrv": null,
          "location_id": "7058854"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "category": {
        "key": "restaurant",
        "name": "Restaurant"
      },
      "subcategory": [
        {
          "key": "sit_down",
          "name": "Sit down"
        }
      ],
      "parent_display_name": "Hyderabad",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+91 40 6999 3377",
      "website": "http://www.fusion9.in/",
      "email": "fusion9hyderabad@gmail.com",
      "address_obj": {
        "street1": "Inorbit Mall 5th Floor Hitech City",
        "street2": "5th Floor Inorbit Mall",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "postalcode": "500034"
      },
      "address": "Inorbit Mall 5th Floor Hitech City 5th Floor Inorbit Mall, Hyderabad 500034 India",
      "hours": {
        "week_ranges": [
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ],
          [
            {
              "open_time": 720,
              "close_time": 2160
            }
          ]
        ],
        "timezone": "Asia/Kolkata"
      },
      "is_candidate_for_contact_info_suppression": false,
      "cuisine": [
        {
          "key": "10640",
          "name": "Bar"
        },
        {
          "key": "4617",
          "name": "Italian"
        },
        {
          "key": "10346",
          "name": "Indian"
        },
        {
          "key": "10659",
          "name": "Asian"
        },
        {
          "key": "10670",
          "name": "Pub"
        }
      ],
      "dietary_restrictions": [],
      "establishment_types": [
        {
          "key": "10591",
          "name": "Restaurants"
        }
      ]
    }
  ]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");

  useMemo(() => {
    if (bounds && coordinates) {
      getPlacesData(type, bounds.northeast, bounds.southwest).then((data) => {
        setPlaces(data);
      });
    }
  }, [coordinates, type, bounds]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const position = await getCurrentPosition();
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentLocation();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  console.log(coordinates)
  console.log(places)

  return (
    <>
      <CssBaseline />
      <Header
        type={type}
        setType={setType}
        setCoordinates={setCoordinates}

      />
      <Grid container spacing={1} style={{ width: "100%" }}>
        <Grid item xs={12} md={6}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={6}>
          {coordinates.lat !== 0 && (
            <MapComponent
              setBounds={setBounds}
              setCoordinates={setCoordinates}
              coordinates={coordinates}
              places={places}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
