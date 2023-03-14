import { FC } from 'react';

import { CountryDetailsType } from '../../../../types/CountryDetailsType';
import { mapArrayOfObjects } from '../../../../utils/mapArrayOfObjects';

import { BorderCountryTagGroup } from './BorderCountryTagGroup/BorderCountryTagGroup';
import s from './InfoCountry.module.scss';

type PropsType = {
  country: CountryDetailsType;
};

export const InfoCountry: FC<PropsType> = ({ country }) => {
  const countryData = [
    { label: 'Native Name', value: country.nativeName },
    { label: 'Population', value: country.population },
    { label: 'Region', value: country.region },
    { label: 'Sub Region', value: country.subregion },
    { label: 'Capital', value: country.capital },
  ];

  const countryArraysData = [
    { label: 'Top Level Domain', value: country.topLevelDomain || [] },
    { label: 'Currency', value: country.currencies || [] },
    { label: 'Languages', value: country.languages || [] },
  ];

  return (
    <div className={s.wrapper}>
      <img src={country.flag} alt={`${country.name} flag`} />

      <div className={s.details}>
        <h1>{country.name}</h1>

        <div className={s.listGroup}>
          <div className={s.list}>
            {countryData.map(({ label, value }) => (
              <p key={label}>
                <b>{label}: </b>
                {value}
              </p>
            ))}
          </div>

          <div className={s.list}>
            {countryArraysData.map(({ label, value }) => (
              <p key={label}>
                <b>{label}: </b>
                {value.map(mapArrayOfObjects)}
              </p>
            ))}
          </div>
        </div>

        <BorderCountryTagGroup tagNames={country.borders} />
      </div>
    </div>
  );
};
