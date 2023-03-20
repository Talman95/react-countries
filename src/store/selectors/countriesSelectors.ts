import { CountryCardType } from '../../types/CountryCardType';
import { RootState } from '../store';

export const selectAllCountries = (state: RootState): CountryCardType[] =>
  state.countries.items;
