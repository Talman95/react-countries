import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { countriesReducer } from './slices/countriesSlice';
import { countryInfoReducer } from './slices/countryInfoSlice';
import { filterReducer } from './slices/filterSlice';

const rootReducer = combineReducers({
  countries: countriesReducer,
  filter: filterReducer,
  countryInfo: countryInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;