import { createSelector } from '@reduxjs/toolkit';

import { CountryCardType } from '../../types/CountryCardType';
import { RootState } from '../store';

import { selectRegionOption, selectSearch } from './filterSelectors';

export const selectAllCountries = (state: RootState): CountryCardType[] =>
  state.countries.items;

export const selectCountriesByFilter = createSelector(
  [selectAllCountries, selectSearch, selectRegionOption],
  (allCountries, search, option) => {
    let filteredCountries = allCountries;

    if (search.trim()) {
      filteredCountries = filteredCountries.filter(({ name }) =>
        name.common.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (option) {
      filteredCountries = filteredCountries.filter(
        ({ region }) => region === option.value,
      );
    }

    return filteredCountries;
  },
);
