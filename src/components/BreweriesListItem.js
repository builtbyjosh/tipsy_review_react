import React from "react";
import BreweryDetails from "./BreweryDetails";


const  BreweriesListItem = ({ brewery }) => {
  return (
    <a href={`/breweries/${brewery.id}`}>{brewery.name}</a>
  )
}

export default BreweriesListItem

// address_2: null
// address_3: null
// brewery_type: "micro"
// city: "Oxford"
// country: "United States"
// county_province: null
// created_at: "2018-07-24T00:00:00.000Z"
// id: 9108
// latitude: null
// longitude: null
// name: "Bog Turtle Brewery, LLC"
// obdb_id: "bog-turtle-brewery-llc-oxford"
// phone: "4847580416"
// postal_code: "19363-1601"
// state: "Pennsylvania"
// street: "14 S 3rd St Ste 1"
// updated_at: "2018-08-11T00:00:00.000Z"
// website_url: "http://www.bogturtlebrewery.com"
