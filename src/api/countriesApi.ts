import { CountryCardType } from '../types/CountryCardType';
import { CountryDetailsType } from '../types/CountryDetailsType';

import { config } from './config';

export const countriesApi = {
  async getAllCountries(): Promise<CountryCardType[]> {
    const res = await config.get<CountryCardType[]>(
      'all?fields=name,region,capital,flags,population,cca3',
    );

    return res.data;
  },

  async getCountryDetailsByCode(code: string): Promise<CountryDetailsType> {
    const res = await config.get<CountryDetailsType>(
      `https://restcountries.com/v2/alpha/${code}`,
    );

    return res.data;
  },

  async getNeighborsByListCodes(codes: string): Promise<CountryDetailsType[]> {
    const res = await config.get<CountryDetailsType[]>(
      `https://restcountries.com/v2/alpha?codes=${codes}`,
    );

    return res.data;
  },
};
