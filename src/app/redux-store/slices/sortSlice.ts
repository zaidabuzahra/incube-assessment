import { createSlice } from "@reduxjs/toolkit";
import { Sort } from "../../types/Sort";

const initialState: Sort = {
    sortBy: 'views',
    sortOrder: 'asc'
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        toggleSortDirection: (state) => {
            state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
        },
        resetSort: (state) =>{
            state.sortBy = 'views';
            state.sortOrder = 'asc';
        }
    }
});

export const { setSortBy, toggleSortDirection, resetSort } = sortSlice.actions;
export default sortSlice.reducer;