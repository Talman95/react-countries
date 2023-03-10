import { CountryCardType } from '../types/CountryCardType';

import { config } from './config';

export const countriesApi = {
  async getAllCountries(): Promise<CountryCardType[]> {
    const res = await config.get<CountryCardType[]>(
      'all?fields=name,region,capital,flags,population,cca3',
    );

    return res.data;
  },
};
