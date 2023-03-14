import { FC, useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../../shared/Button/Button';
import { CountryDetailsType } from '../../../../../types/CountryDetailsType';

import s from './BorderCountryTagGroup.module.scss';

type PropsType = {
  tagNames: string[];
};

export const BorderCountryTagGroup: FC<PropsType> = ({ tagNames }) => {
  const [borders, setBorders] = useState<string[]>([]);

  const navigate = useNavigate();

  const fetchNeighbours = async (): Promise<void> => {
    const res = await axios.get<CountryDetailsType[]>(
      `https://restcountries.com/v2/alpha?codes=${tagNames.join(',')}`,
    );

    setBorders(res.data.map(country => country.name));
  };

  useEffect(() => {
    if (tagNames.length > 0) {
      fetchNeighbours();
    }
  }, [tagNames]);

  return (
    <div className={s.bordersGroup}>
      <p>Border Countries: </p>

      {tagNames.length > 0 ? (
        <div className={s.borderTag}>
          {borders.map(name => {
            const onTagClick = (): void => {
              navigate(`/country/${name}`);
            };

            return (
              <Button key={name} onClick={onTagClick}>
                {name}
              </Button>
            );
          })}
        </div>
      ) : (
        <span>There is no border country</span>
      )}
    </div>
  );
};
