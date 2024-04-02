import { configureStore } from "@reduxjs/toolkit";
import listingSlice from "./listing/lisitngSlice";
import filterSlice from "./filter/filterSlice";

const store = configureStore({
    reducer:{
        listing: listingSlice,
        filter: filterSlice
    }
})

export default store;