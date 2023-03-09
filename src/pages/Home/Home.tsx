import { FC } from 'react';

import { Controls } from './components/Controls/Controls';
import { CountriesList } from './components/CountriesList/CountriesList';
import s from './Home.module.scss';

export const Home: FC = () => {
  return (
    <main className={s.main}>
      <Controls />
      <CountriesList />
    </main>
  );
};
