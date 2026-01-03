import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../../types/Filters";

const initialState: Filters = {
    selectedTags: [],
    selectedUserId: null,
    searchQuery: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSelectedTags: (state, action) => {
            state.selectedTags = action.payload;
        },
        setSelectedUserId: (state, action) => {
            state.selectedUserId = action.payload;
        },
        setSearchQuery: (state, action) =>{
            state.searchQuery = action.payload;
        }
    }
});

export const { setSelectedTags, setSelectedUserId, setSearchQuery } = filterSlice.actions;
export default filterSlice.reducer;