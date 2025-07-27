import type { TPlainData, TResourceData } from '@shared/types';

export type THardwareData = Pick<TResourceData, 'id' | 'pics'> & Record<string, string> & Record<'props', TPlainData> & Record<'depts' | 'subdepts' | 'specs', number[] | ''> & { idx: number; isHidden: 1 | 0; };
