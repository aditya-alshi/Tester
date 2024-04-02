import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const allListingSelector = state => state.listing.entities;

export default function Listing(){

    const listings = useSelector(allListingSelector);
    
    return(
        <div className="listing--wrapper">

        </div>
    )
}