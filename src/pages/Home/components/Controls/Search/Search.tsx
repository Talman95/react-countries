import { ChangeEvent, FC } from 'react';

import { IoSearch } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import s from './Search.module.scss';

import { useActions } from 'hooks/useActions';
import { allFilterActions } from 'store';
import { selectSearch } from 'store/selectors/filterSelectors';

export const Search: FC = () => {
  const search = useSelector(selectSearch);

  const filterActions = useActions(allFilterActions);

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    filterActions.changeName({ name: e.currentTarget.value });
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
