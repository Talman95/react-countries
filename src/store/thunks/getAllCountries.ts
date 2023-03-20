import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { countriesApi } from '../../api/countriesApi';

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, thunkApi) => {
    try {
      const res = await countriesApi.getAllCountries();

      return res;
    } catch (e) {
      const error = e as AxiosError;

      return thunkApi.rejectWithValue(error.message);
    }
  },
);
