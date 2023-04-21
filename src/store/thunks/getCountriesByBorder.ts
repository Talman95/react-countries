import { createAsyncThunk } from '@reduxjs/toolkit';

import { countriesApi } from 'api/countriesApi';
import { showErrorUtil } from 'utils/showErrorUtil';

export const getNeighboringCountries = createAsyncThunk(
  'countries/getNeighboringCountries',
  async (tagNames: string[], thunkApi) => {
    try {
      const codes = tagNames.join(',');
      const res = await countriesApi.getNeighborsByListCodes(codes);

      const neighborsNames = res.map(({ name, alpha3Code }) => ({
        name,
        alpha3Code,
      }));

      return neighborsNames;
    } catch (e) {
      return showErrorUtil(e, thunkApi);
    }
  },
);
