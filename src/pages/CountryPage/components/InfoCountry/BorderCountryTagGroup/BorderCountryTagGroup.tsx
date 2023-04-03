import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../../../../../hooks/useActions';
import { Button } from '../../../../../shared/Button/Button';
import { allCountryInfoActions } from '../../../../../store';
import {
  selectBorders,
  selectBordersLoading,
} from '../../../../../store/selectors/countryInfoSelectors';

import s from './BorderCountryTagGroup.module.scss';

type PropsType = {
  tagNames: string[] | null;
};

export const BorderCountryTagGroup: FC<PropsType> = ({ tagNames }) => {
  const navigate = useNavigate();

  const borders = useSelector(selectBorders);
  const isLoading = useSelector(selectBordersLoading);

  const countryActions = useActions(allCountryInfoActions);

  useEffect(() => {
    if (!isLoading) {
      countryActions.setBordersLoading({ isLoading: true });
    }

    if (tagNames) {
      countryActions.getNeighboringCountries(tagNames);
    } else {
      countryActions.setBordersLoading({ isLoading: false });
    }
  }, [countryActions, tagNames]);

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
