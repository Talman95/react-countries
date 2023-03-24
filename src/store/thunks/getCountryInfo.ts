import { createAsyncThunk } from '@reduxjs/toolkit';

import { countriesApi } from '../../api/countriesApi';

export const getCountryInfo = createAsyncThunk(
  'countryInfo/getCountryInfo',
  async (code: string, { rejectWithValue }) => {
    try {
      const res = await countriesApi.getCountryDetailsByCode(code);

      return res;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);
