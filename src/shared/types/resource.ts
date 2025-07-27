import type { TPlainData } from './base';

export type TResourceData = Record<'id' | 'menuindex', number> & Record<string, string> & { pics: TPlainData[]; redirect: TPlainData; seo: TPlainData; };

export type TResourceResData = { success: boolean; data: TResourceData[]; };

export type TDeptResData = Omit<TResourceResData, 'data'> & { data: (TResourceData & { children: TResourceData[] })[]; };

export type TItemsData = { isLoading: TResourceResData['success']; itemsList: TResourceResData['data']; };
