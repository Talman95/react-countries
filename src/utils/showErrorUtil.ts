import { Dispatch } from 'react';

import { AxiosError } from 'axios';

import { allToastsActions } from '../store';

type DispatchType = Dispatch<ReturnType<typeof allToastsActions.addToast>>;

type ThunkAPIType = {
  dispatch: DispatchType;
  rejectWithValue: Function;
};

export function showErrorUtil(e: any, thunkApi: ThunkAPIType): any {
  const error = e as Error | AxiosError;
  const { dispatch, rejectWithValue } = thunkApi;

  dispatch(allToastsActions.addToast({ message: error.message }));

  return rejectWithValue(error.message);
}
