import type { TPlainData } from './';

export type TContentDataStrKeys = 'name' | 'intro' | 'image' | 'createdon' | 'updatedon';

export type TContentDataNumKeys = 'id' | 'idx';

export type TContentDataArrKeys = 'depts' | 'subdepts' | 'specs';

export type TContentData = Record<TContentDataStrKeys, string> & Record<TContentDataNumKeys, number> & Record<TContentDataArrKeys, number[] | ''> & { props: TPlainData; pics: TPlainData[]; isHidden: 1 | 0; };
