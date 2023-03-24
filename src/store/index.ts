import { countriesActions } from './slices/countriesSlice';
import { countryInfoActions } from './slices/countryInfoSlice';
import { filterActions } from './slices/filterSlice';
import { getAllCountries } from './thunks/getAllCountries';
import { getCountryInfo } from './thunks/getCountryInfo';

export * from './selectors/countriesSelectors';

export const allCountriesActions = {
  getAllCountries,
  ...countriesActions,
};

export const allFilterActions = {
  ...filterActions,
};

export const allCountryInfoActions = {
  getCountryInfo,
  ...countryInfoActions,
};
