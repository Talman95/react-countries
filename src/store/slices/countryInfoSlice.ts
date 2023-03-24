import { createSlice } from '@reduxjs/toolkit';

import { CountryDetailsType } from '../../types/CountryDetailsType';
import { getCountryInfo } from '../thunks/getCountryInfo';

const initialState = {
  country: null as CountryDetailsType | null,
};

const countryInfoSlice = createSlice({
  name: 'countryInfo',
  initialState,
  reducers: {
    removeData(state) {
      state.country = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCountryInfo.fulfilled, (state, action) => {
      state.country = action.payload;
    });
  },
});

export const { reducer: countryInfoReducer, actions: countryInfoActions } =
  countryInfoSlice;
