import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../types/Posts";

const initialState: Post = {
    id: '0',
    title: '',
    body: ''
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPostID: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.body = action.payload.body;
        },
        clearPostID: (state) => {
            state.id = '';
            state.title = '';
            state.body = '';
        }
    }
});

export const { setPostID, clearPostID } = postSlice.actions;
export default postSlice.reducer;