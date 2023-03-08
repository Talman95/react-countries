import { FC } from 'react';

import Select from 'react-select';

import { RegionOptionType } from '../../../../../types/RegionOptionType';

import s from './CustomSelect.module.scss';

type PropsType = {
  value: RegionOptionType | null;
  setValue: (value: RegionOptionType | null) => void;
};

const options: RegionOptionType[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const CustomSelect: FC<PropsType> = ({ value, setValue }) => {
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

  const onChange = (option: RegionOptionType | null): void => {
    setValue(option);
  };

  return (
    <div className={s.wrapper}>
      <Select
        styles={selectStyles}
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
