import { WithNameType } from '../types/CountryDetailsType';

export function mapArrayOfObjects<T>(
  value: string | WithNameType,
  index: number,
  array: T[],
): any {
  let name;

  if (typeof value === 'string') {
    name = value;
  } else {
    name = value.name;
  }

  return (
    <span key={name}>
      {name}
      {index !== array.length - 1 ? ', ' : null}
    </span>
  );
}
