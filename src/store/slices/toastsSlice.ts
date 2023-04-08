import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { ToastType } from '../../types/ToastType';

const initialState = {
  toasts: [] as ToastType[],
};

const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    addToast(state, action: PayloadAction<{ message: string }>) {
      const id = v1();
      const toast = { id, message: action.payload.message };

      state.toasts.push(toast);
    },
    removeToast(state, action: PayloadAction<{ id: string }>) {
      const toastIndex = state.toasts.findIndex(({ id }) => id === action.payload.id);

      if (toastIndex > -1) {
        state.toasts.splice(toastIndex, 1);
      }
    },
  },
});

export const { reducer: toastsReducer, actions: toastsActions } = toastsSlice;
