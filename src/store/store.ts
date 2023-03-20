import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { countriesReducer } from './slices/countriesSlice';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
