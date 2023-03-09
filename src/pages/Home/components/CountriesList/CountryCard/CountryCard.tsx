import { FC } from 'react';

import { CountryCardType } from '../../../../../types/CountryCardType';

import s from './CountryCard.module.scss';

type PropsType = {
  card: CountryCardType;
};

export const CountryCard: FC<PropsType> = ({ card }) => {
  const countryData = [
    { label: 'Population', value: card.population },
    { label: 'Region', value: card.region },
    { label: 'Capital', value: card.capital },
  ];

  return (
    <article className={s.card}>
      <img src={card.flags.svg} alt={`${card.name} flag`} />

      <div className={s.info}>
        <h6 className={s.name}>
          <b>{card.name}</b>
        </h6>

        {countryData.map(({ label, value }) => (
          <p key={label}>
            <b>{label}: </b>
            {value}
          </p>
        ))}
      </div>
    </article>
  );
};