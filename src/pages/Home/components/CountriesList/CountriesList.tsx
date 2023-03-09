import { FC } from 'react';

import { CountryCardType } from '../../../../types/CountryCardType';

import s from './CountriesList.module.scss';
import { CountryCard } from './CountryCard/CountryCard';

const countries: CountryCardType[] = [];

export const CountriesList: FC = () => {
  return (
    <div className={s.list}>
      {countries.map(card => (
        <CountryCard key={card.alpha3Code} card={card} />
      ))}
    </div>
  );
};
