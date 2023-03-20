import { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';
import { allCountriesActions, selectAllCountries } from '../../store';
import { CountryCardType } from '../../types/CountryCardType';

import { Controls } from './components/Controls/Controls';
import { CountriesList } from './components/CountriesList/CountriesList';

export const Home: FC = () => {
  const countriesActions = useActions(allCountriesActions);

  const countries = useSelector(selectAllCountries);

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

  useEffect(() => {
    countriesActions.getAllCountries();
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
