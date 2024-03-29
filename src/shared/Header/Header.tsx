import { FC, useEffect, useState } from 'react';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

import { Theme } from 'enums/Theme';

export const Header: FC = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('countries-theme') || Theme.LIGHT,
  );

  const onThemeChangeClick = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem('countries-theme', newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Link to="/">Where is the world?</Link>
        </div>
        <div className={s.wrapper} onClick={onThemeChangeClick} aria-hidden="true">
          {theme === Theme.LIGHT ? <IoMoonOutline size={14} /> : <IoMoon size={14} />}
          <span>{theme} Mode</span>
        </div>
      </div>
    </header>
  );
};
