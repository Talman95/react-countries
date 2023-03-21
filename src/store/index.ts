import { countriesActions } from './slices/countriesSlice';
import { filterActions } from './slices/filterSlice';
import { getAllCountries } from './thunks/getAllCountries';

export * from './selectors/countriesSelectors';

export const allCountriesActions = {
  getAllCountries,
  ...countriesActions,
};

export const allFilterActions = {
  ...filterActions,
};
