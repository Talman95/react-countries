import { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { countriesApi } from '../../../../../api/countriesApi';
import { Button } from '../../../../../shared/Button/Button';

import s from './BorderCountryTagGroup.module.scss';

type PropsType = {
  tagNames: string[] | null;
};

type BorderType = {
  name: string;
  alpha3Code: string;
};

export const BorderCountryTagGroup: FC<PropsType> = ({ tagNames }) => {
  const [borders, setBorders] = useState<BorderType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchNeighbors = async (): Promise<void> => {
    setIsLoading(true);

    if (tagNames) {
      const codes = tagNames.join(',');
      const res = await countriesApi.getNeighborsByListCodes(codes);

      const neighborsNames = res.map(({ name, alpha3Code }) => ({
        name,
        alpha3Code,
      }));

      setBorders(neighborsNames);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (tagNames) {
      fetchNeighbors();
    }
  }, [tagNames]);

  return (
    <div className={s.bordersGroup}>
      <p>Border Countries: </p>

      {isLoading && <span>Loading...</span>}

      {!isLoading &&
        (borders.length > 0 ? (
          <div className={s.borderTag}>
            {borders.map(({ name, alpha3Code }) => {
              const onTagClick = (): void => {
                navigate(`/country/${alpha3Code}`);
              };

              return (
                <Button key={alpha3Code} onClick={onTagClick}>
                  {name}
                </Button>
              );
            })}
          </div>
        ) : (
          <span>There is no border country</span>
        ))}
    </div>
  );
};
