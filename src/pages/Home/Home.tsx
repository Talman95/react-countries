import { FC } from 'react';

import { Controls } from './components/Controls/Controls';
import s from './Home.module.scss';

export const Home: FC = () => {
  return (
    <main className={s.main}>
      <Controls />
    </main>
  );
};
