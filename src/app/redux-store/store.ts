import {combineReducers, configureStore} from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import postReducer from './slices/postSlice';
import filterReducer from './slices/filterSlice';
import sortReducer from './slices/sortSlice';

export const combinedReducers = combineReducers({
  page: pageReducer,
  posts: postReducer,
  filters: filterReducer,
  sort: sortReducer
});

export const store = configureStore({
  reducer: combinedReducers
});

export type RootState = ReturnType<typeof combinedReducers>;
export type AppDispatch = typeof store.dispatch;