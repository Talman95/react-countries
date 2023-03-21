import { RegionOptionType } from '../../types/RegionOptionType';
import { RootState } from '../store';

export const selectSearch = (state: RootState): string => state.filter.search;
export const selectRegionOption = (state: RootState): RegionOptionType | null =>
  state.filter.region;
