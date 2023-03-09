export type CountryCardType = {
  alpha3Code: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  independent: boolean;
  name: string;
  population: number;
  region: string;
};
