import type { TContentData } from '@shared/types';
import type { TResourceResData } from '@shared/types';

export type THardwareResData = Omit<TResourceResData, 'data'> & { data: TContentData[]; };
