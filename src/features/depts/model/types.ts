import type { TResourceData, TResourceResData } from '@shared/types';

export type TDeptResData = Omit<TResourceResData, 'data'> & { data: (TResourceData & { children: TResourceData[] })[]; };
