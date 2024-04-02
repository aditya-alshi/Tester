import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    country: [],
    amenities: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        toggleCountry(state, action){
            if(action.payload.changeType === "selected"){
                state.country.push(action.payload.countryName)
            }else if(action.payload.changeType === "removed"){
                state.country = state.country.filter(item => item !== action.payload.countryName)
            }
        },
        toggleAmenities(state, action){
            if(action.payload.changeType === "selected"){
                state.amenities.push(action.payload.amenitiesName)
            }else if(action.payload.changeType === "removed"){
                state.amenities = state.amenities.filter(item => item !== action.payload.amenitiesName)
            }
        }
    }
})

export default filterSlice.reducer;
export const { toggleCountry, toggleAmenities } = filterSlice.actions;