import { FC } from 'react';

import s from './Controls.module.scss';
import { CustomSelect } from './CustomSelect/CustomSelect';
import { Search } from './Search/Search';

export const Controls: FC = () => {
  return (
    <div className={s.controls}>
      <Search />
      <CustomSelect />
    </div>
  );
};
