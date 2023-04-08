import { ToastType } from '../../types/ToastType';
import { RootState } from '../store';

export const selectToasts = (state: RootState): ToastType[] => state.toasts.toasts;
