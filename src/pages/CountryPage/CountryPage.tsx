import { FC, useEffect } from 'react';

import { IoArrowBack } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { InfoCountry } from './components/InfoCountry/InfoCountry';

import { useActions } from 'hooks/useActions';
import { Button } from 'shared/Button/Button';
import { allCountryInfoActions } from 'store';
import { selectCountryInfo } from 'store/selectors/countryInfoSelectors';

export const CountryPage: FC = () => {
  const navigate = useNavigate();

  const { code } = useParams();

  const country = useSelector(selectCountryInfo);

  const countryActions = useActions(allCountryInfoActions);

  const onBackButtonClick = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    if (code) {
      countryActions.getCountryInfo(code);
    }

    return () => {
      countryActions.removeData();
    };
  }, [code]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Button onClick={onBackButtonClick}>
        <IoArrowBack /> Back
      </Button>

      <InfoCountry country={country} />
    </>
  );
};
