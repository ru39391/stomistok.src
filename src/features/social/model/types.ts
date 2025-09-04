import type { TResourceResData } from '@shared/types';

export type TSocialData = Record<'key' | 'url', string>;

export type TSocialResData = Omit<TResourceResData, 'data'> & { data: TSocialData[]; };

export interface ISocialList {
  classMod?: string;
}
