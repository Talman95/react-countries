import { FC, ReactNode } from 'react';

import s from './Button.module.scss';

type PropsType = {
  onClick: () => void;
  children: ReactNode;
};

export const Button: FC<PropsType> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};
