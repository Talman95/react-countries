import { FC } from 'react';

import { AppRoutes } from './routes/AppRoutes';
import { Header } from './shared/Header/Header';
import { ToastPortal } from './shared/ToastPortal/ToastPortal';

export const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <ToastPortal />
    </>
  );
};
