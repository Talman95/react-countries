import { FC, useEffect, useState } from 'react';

import { RegionOptionType } from '../../../../types/RegionOptionType';

import s from './Controls.module.scss';
import { CustomSelect } from './CustomSelect/CustomSelect';
import { Search } from './Search/Search';

type PropsType = {
  filterCountries: (name: string, region?: string) => void;
};

export const Controls: FC<PropsType> = ({ filterCountries }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<RegionOptionType | null>(null);

  useEffect(() => {
    filterCountries(search, region?.value);
  }, [search, region]);

  return (
    <div className={s.controls}>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect value={region} setValue={setRegion} />
    </div>
  );
};
