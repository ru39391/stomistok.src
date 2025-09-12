import type { TResourceData, TResourceResData } from '@shared/types';

export type TLogoResData = Omit<TResourceResData, 'data'> & { data: Record<string, string>; };

export interface ILogo {
  isIconVisible?: boolean;
  theme?: 'default';
};
