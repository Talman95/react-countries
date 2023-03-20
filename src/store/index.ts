import { countriesActions } from './slices/countriesSlice';
import { getAllCountries } from './thunks/getAllCountries';

export * from './selectors/countriesSelectors';

export const allCountriesActions = {
  getAllCountries,
  ...countriesActions,
};
