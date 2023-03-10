export type CountryCardType = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      fas: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  cca3: string;
  altSpellings: string[];
  region: string;
  population: number;
};
