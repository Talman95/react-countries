import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Path } from 'enums/Path';
import { CountryPage } from 'pages/CountryPage/CountryPage';
import { Home } from 'pages/Home/Home';

export const AppRoutes: FC = () => {
  return (
    <main className="main">
      <Routes>
        <Route path={Path.HOME_PAGE} element={<Home />} />
        <Route path={Path.COUNTRY_PAGE} element={<CountryPage />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </main>
  );
};
