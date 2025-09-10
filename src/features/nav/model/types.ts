import type { TResourceData, TResourceResData } from '@shared/types';

export type TNavResData = Omit<TResourceResData, 'data'> & {
  data: {
    site: Record<string, string>;
    nav: TResourceData[];
  };
};

export interface INavToggler {
  isNavHidden: boolean;
  handleClick: () => void;
}
