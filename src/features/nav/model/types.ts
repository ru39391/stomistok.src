import type { TResourceData, TResourceResData } from '@shared/types';

export type TNavResData = Omit<TResourceResData, 'data'> & { data: TResourceData[]; };

export interface INavToggler {
  isNavHidden: boolean;
  handleClick: () => void;
}
