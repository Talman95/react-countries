import { FC, useEffect, useState } from 'react';

import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import { countriesApi } from '../../api/countriesApi';
import { Button } from '../../shared/Button/Button';
import { CountryDetailsType } from '../../types/CountryDetailsType';

import { InfoCountry } from './components/InfoCountry/InfoCountry';

export const CountryPage: FC = () => {
  const [country, setCountry] = useState<CountryDetailsType | null>(null);

  const navigate = useNavigate();

  const { code } = useParams();

  const fetchCountry = async (): Promise<void> => {
    if (code) {
      const res = await countriesApi.getCountryDetailsByCode(code);

      setCountry(res);
    }
  };

  const onBackButtonClick = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    fetchCountry();
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
