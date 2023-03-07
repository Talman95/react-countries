import { FC } from 'react';

import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};
