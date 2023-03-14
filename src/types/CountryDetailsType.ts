export type CountryDetailsType = {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: CurrencyType[];
  languages: LanguageType[];
  borders: string[];
};

type CurrencyType = {
  code: string;
  name: string;
  symbol: string;
};

type LanguageType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type WithNameType = CommonTypes<CurrencyType, LanguageType>;

type CommonTypes<A, B> = {
  [K in keyof A & keyof B]: A[K] | B[K];
};
