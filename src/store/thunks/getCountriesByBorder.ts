import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { countriesApi } from '../../api/countriesApi';

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
      const error = e as AxiosError;

      return thunkApi.rejectWithValue(error.message);
    }
  },
);
