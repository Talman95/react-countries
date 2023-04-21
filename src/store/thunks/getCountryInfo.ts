import { createAsyncThunk } from '@reduxjs/toolkit';

import { countriesApi } from 'api/countriesApi';
import { showErrorUtil } from 'utils/showErrorUtil';

export const getCountryInfo = createAsyncThunk(
  'countryInfo/getCountryInfo',
  async (code: string, thunkApi) => {
    try {
      const res = await countriesApi.getCountryDetailsByCode(code);

      return res;
    } catch (e) {
      return showErrorUtil(e, thunkApi);
    }
  },
);
