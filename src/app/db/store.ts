import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { clearPostID, setPostID } from './postSlice';
import reducer from './postSlice';

export const combinedReducers = combineReducers({
  post: reducer,

});

function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: combinedReducers
  });
}
export const store = configureStore({
  reducer: combinedReducers
});

export type RootState = ReturnType<typeof combinedReducers>;
export type AppDispatch = typeof store.dispatch;