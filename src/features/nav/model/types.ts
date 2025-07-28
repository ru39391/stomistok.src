import type { TResourceData, TResourceResData } from '@shared/types';

export type TNavResData = Omit<TResourceResData, 'data'> & { data: TResourceData[]; };

