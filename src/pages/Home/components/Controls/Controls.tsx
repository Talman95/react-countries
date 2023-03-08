import { FC, useState } from 'react';

import { RegionOptionType } from '../../../../types/RegionOptionType';

import s from './Controls.module.scss';
import { CustomSelect } from './CustomSelect/CustomSelect';
import { Search } from './Search/Search';

export const Controls: FC = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<RegionOptionType | null>(null);

  return (
    <div className={s.controls}>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect value={region} setValue={setRegion} />
    </div>
  );
};
