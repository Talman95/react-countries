import { createSlice } from '@reduxjs/toolkit';

import { CountryCardType } from '../../types/CountryCardType';
import { getAllCountries } from '../thunks/getAllCountries';

const initialState = {
  items: [] as CountryCardType[],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { reducer: countriesReducer, actions: countriesActions } = countriesSlice;
