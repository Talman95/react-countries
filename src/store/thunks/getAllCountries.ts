import { createAsyncThunk } from '@reduxjs/toolkit';

import { countriesApi } from 'api/countriesApi';
import { showErrorUtil } from 'utils/showErrorUtil';

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, thunkApi) => {
    try {
      const res = await countriesApi.getAllCountries();

      return res;
    } catch (e) {
      return showErrorUtil(e, thunkApi);
    }
  },
);
