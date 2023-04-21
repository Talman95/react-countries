import { FC } from 'react';

import s from './CountriesList.module.scss';
import { CountryCard } from './CountryCard/CountryCard';

import { CountryCardType } from 'types/CountryCardType';

type PropsType = {
  countries: CountryCardType[];
};

export const CountriesList: FC<PropsType> = ({ countries }) => {
  return (
    <div className={s.list}>
      {countries.map(country => (
        <CountryCard key={country.cca3} card={country} />
      ))}
    </div>
  );
};
