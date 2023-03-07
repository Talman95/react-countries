import { ChangeEvent, FC } from 'react';

import { IoSearch } from 'react-icons/io5';

import s from './Search.module.scss';

type PropsType = {
  search: string;
  setSearch: (search: string) => void;
};

export const Search: FC<PropsType> = ({ search, setSearch }) => {
  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className={s.wrapper}>
      <IoSearch size="1em" />
      <input
        type="search"
        placeholder="Search for a country..."
        value={search}
        onChange={onSearchInputChange}
      />
    </div>
  );
};
