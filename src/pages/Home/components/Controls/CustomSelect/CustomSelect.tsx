import { FC } from 'react';

import { useSelector } from 'react-redux';
import Select from 'react-select';

import { useActions } from '../../../../../hooks/useActions';
import { allFilterActions } from '../../../../../store';
import { selectRegionOption } from '../../../../../store/selectors/filterSelectors';
import { RegionOptionType } from '../../../../../types/RegionOptionType';

import s from './CustomSelect.module.scss';

const options: RegionOptionType[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const selectStyles = {
  control: (styles: any) => ({
    ...styles,

    backgroundColor: 'var(--color-ui-base)',
    borderRadius: 'var(--radius)',
    padding: '0.25rem',
    height: '50px',
    border: 'none',
    boxShadow: 'var(--shadow)',
    zIndex: '100',
    cursor: 'pointer',
  }),
  singleValue: (styles: any) => ({
    ...styles,

    color: 'var(--color-text)',
  }),
  option: (provided: any, state: any) => ({
    ...provided,

    cursor: 'pointer',
    color: 'var(--color-text)',
    backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
  }),
};

export const CustomSelect: FC = () => {
  const region = useSelector(selectRegionOption);

  const filterActions = useActions(allFilterActions);

  const onChange = (option: RegionOptionType | null): void => {
    filterActions.changeRegion({ region: option });
  };

  return (
    <div className={s.wrapper}>
      <Select
        styles={selectStyles}
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={onChange}
      />
    </div>
  );
};
