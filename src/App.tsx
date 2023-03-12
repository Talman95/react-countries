import { FC } from 'react';

import { AppRoutes } from './routes/AppRoutes';
import { Header } from './shared/Header/Header';

export const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};
