import { CountryDetailsType } from '../../types/CountryDetailsType';
import { RootState } from '../store';

export const selectCountryInfo = (state: RootState): CountryDetailsType | null =>
  state.countryInfo.country;
