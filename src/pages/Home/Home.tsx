import { FC, useEffect, useState } from 'react';

import { countriesApi } from '../../api/countriesApi';
import { CountryCardType } from '../../types/CountryCardType';

import { Controls } from './components/Controls/Controls';
import { CountriesList } from './components/CountriesList/CountriesList';

export const Home: FC = () => {
  const [countries, setCountries] = useState<CountryCardType[]>([]);
  const [filteredCountries, setFilteredCountries] =
    useState<CountryCardType[]>(countries);

  const filterCountries = (search: string, region?: string): void => {
    let filteredData = countries;

    if (search && search.trim() !== '') {
      filteredData = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (region) {
      filteredData = filteredData.filter(country => country.region === region);
    }

    setFilteredCountries(filteredData);
  };

  const fetchAllCountries = async (): Promise<void> => {
    const res = await countriesApi.getAllCountries();

    setCountries(res);
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <>
      <Controls filterCountries={filterCountries} />
      <CountriesList countries={filteredCountries} />
    </>
  );
};
