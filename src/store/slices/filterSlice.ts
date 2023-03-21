import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RegionOptionType } from '../../types/RegionOptionType';

const initialState = {
  search: '',
  region: null as null | RegionOptionType,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<{ name: string }>) {
      state.search = action.payload.name;
    },
    changeRegion(state, action: PayloadAction<{ region: RegionOptionType | null }>) {
      state.region = action.payload.region;
    },
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
