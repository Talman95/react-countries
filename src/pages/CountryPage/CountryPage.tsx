import { FC, useEffect, useState } from 'react';

import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../shared/Button/Button';
import { CountryDetailsType } from '../../types/CountryDetailsType';

import { InfoCountry } from './components/InfoCountry/InfoCountry';

export const CountryPage: FC = () => {
  const [country, setCountry] = useState<CountryDetailsType | null>(null);

  const navigate = useNavigate();

  const { name } = useParams();

  const fetchCountry = async (): Promise<void> => {
    const res = await axios.get<CountryDetailsType[]>(
      `https://restcountries.com/v2/name/${name}`,
    );

    setCountry(res.data[0]);
  };

  const onBackButtonClick = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    fetchCountry();
  }, [name]);

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
