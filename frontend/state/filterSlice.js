import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filters',
    initialState: {size: 'All'},
    reducers: {
        updateFilter(state, action) {
            state.size = action.payload
        }
    }
})

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer