import { BorderType } from '../../types/BorderType';
import { CountryDetailsType } from '../../types/CountryDetailsType';
import { RootState } from '../store';

export const selectCountryInfo = (state: RootState): CountryDetailsType | null =>
  state.countryInfo.country;

export const selectBorders = (state: RootState): BorderType[] =>
  state.countryInfo.borders;

export const selectBordersLoading = (state: RootState): boolean =>
  state.countryInfo.bordersIsLoading;
