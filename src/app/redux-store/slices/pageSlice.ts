import { createSlice } from "@reduxjs/toolkit";
import { Page } from "../../types/Page";

const initialState: Page = {
    page: 1,
    pageSize: 10
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            state.page -= 1;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
            state.page = 1;
        },
        resetPage: (state) => {
            state.page = 1;
        }
    }
});

export const { nextPage, prevPage, setPageSize, resetPage } = paginationSlice.actions;
export default paginationSlice.reducer;