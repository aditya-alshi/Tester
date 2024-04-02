import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const allListingSelector = (state) => state.listing.entities;

const finalListingSelector = createSelector(
    state => state.listing.entities,
    state => state.filter.country,
    state => state.filter.amenities,
    (entities, selectedCountry, selectedAmenities)=>{
        if(selectedAmenities.length === 0 && selectedCountry.length ===0){
            return entities;
        }
        return entities.filter(item=>
            (selectedCountry.length > 0 ? selectedCountry.includes(item.address.country) : true)
            &&
            (selectedAmenities.every(sammi=>item.amenities.includes(sammi)))
        )
    }
)

export default function Listing() {
  const listings = useSelector(finalListingSelector);


  const listingRederer = listings.map((hotel) => (
    <div key={hotel._id} className="hotel--wrapper">
      <p className="hotel--name">{hotel.name}</p>
      <p>
        <u>Country</u> : {hotel.address.country}
      </p>
      <h3>Amenitis: </h3>
      {hotel.amenities.map((ammi, index) => (
        <div key={index} className="amemities--wrapper">
          {ammi}
        </div>
      ))}
    </div>
  ));


  return <div className="listing--wrapper">
    {listingRederer.length}
    {listingRederer}</div>;
}
