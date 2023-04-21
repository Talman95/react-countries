import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Controls } from './components/Controls/Controls';
import { CountriesList } from './components/CountriesList/CountriesList';

import { useActions } from 'hooks/useActions';
import { allCountriesActions } from 'store';
import { selectCountriesByFilter } from 'store/selectors/countriesSelectors';

export const Home: FC = () => {
  const countriesActions = useActions(allCountriesActions);

  const countries = useSelector(selectCountriesByFilter);

  useEffect(() => {
    countriesActions.getAllCountries();
  }, []);

  return (
    <>
      <Controls />
      <CountriesList countries={countries} />
    </>
  );
};
