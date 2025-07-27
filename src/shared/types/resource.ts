import type { TPlainData } from './';

export type TResourceData = Record<'id' | 'menuindex', number> & Record<string, string> & { pics: TPlainData[]; redirect: TPlainData; seo: TPlainData; };

export type TResourceResData = { success: boolean; data: TResourceData[]; };
