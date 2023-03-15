import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { CountryCardType } from '../../../../../types/CountryCardType';

import s from './CountryCard.module.scss';

type PropsType = {
  card: CountryCardType;
};

export const CountryCard: FC<PropsType> = ({ card }) => {
  const navigate = useNavigate();

  const countryData = [
    { label: 'Population', value: card.population },
    { label: 'Region', value: card.region },
    { label: 'Capital', value: card.capital[0] },
  ];

  const onCardClick = (): void => {
    navigate(`/country/${card.cca3}`);
  };

  return (
    <article className={s.card} onClick={onCardClick} aria-hidden="true">
      <img src={card.flags.png} alt={card.flags.alt} />

      <div className={s.info}>
        <h6 className={s.name}>
          <b>{card.name.common}</b>
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
