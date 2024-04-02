import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    country: [],
    amenitis: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{}
})

export default filterSlice.reducer;