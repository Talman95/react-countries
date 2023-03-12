import { FC, useEffect, useState } from 'react';

import { countriesApi } from '../../api/countriesApi';
import { CountryCardType } from '../../types/CountryCardType';

import { Controls } from './components/Controls/Controls';
import { CountriesList } from './components/CountriesList/CountriesList';

export const Home: FC = () => {
  const [countries, setCountries] = useState<CountryCardType[]>([]);

  const fetchAllCountries = async (): Promise<void> => {
    const res = await countriesApi.getAllCountries();

    setCountries(res);
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <>
      <Controls />
      <CountriesList countries={countries} />
    </>
  );
};
