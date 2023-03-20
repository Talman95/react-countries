import { useMemo } from 'react';

import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from './useAppDispatch';

export const useActions = <T extends ActionCreatorsMapObject>(actions: T): T => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
