import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BorderType } from '../../types/BorderType';
import { CountryDetailsType } from '../../types/CountryDetailsType';
import { getNeighboringCountries } from '../thunks/getCountriesByBorder';
import { getCountryInfo } from '../thunks/getCountryInfo';

const initialState = {
  country: null as CountryDetailsType | null,
  borders: [] as BorderType[],
  bordersIsLoading: false,
};

const countryInfoSlice = createSlice({
  name: 'countryInfo',
  initialState,
  reducers: {
    removeData(state) {
      state.country = null;
      state.borders = [];
    },
    setBordersLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.bordersIsLoading = action.payload.isLoading;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCountryInfo.fulfilled, (state, action) => {
        state.country = action.payload;
      })
      .addCase(getNeighboringCountries.fulfilled, (state, action) => {
        state.borders = action.payload;
        state.bordersIsLoading = false;
      })
      .addCase(getNeighboringCountries.rejected, state => {
        state.bordersIsLoading = false;
      });
  },
});

export const { reducer: countryInfoReducer, actions: countryInfoActions } =
  countryInfoSlice;
