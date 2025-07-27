import type { TPlainData } from './';

export type TResourceNumKeys = 'id' | 'menuindex';

export type TResourceStrKeys = 'menutitle' | 'pagetitle' | 'introtext' | 'uri' | 'class_key';

export type TResourceDataKeys = 'redirect' | 'seo';

export type TResourceData = Record<TResourceNumKeys, number> & Record<TResourceStrKeys, string> & Record<TResourceDataKeys, TPlainData> & { pics: TPlainData[]; };

export type TResourceResData = { success: boolean; data: TResourceData[]; };
