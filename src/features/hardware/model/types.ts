import type { THardwareData } from '@entities/hardware/types';
import type { TResourceResData } from '@shared/types';

export type THardwareResData = Omit<TResourceResData, 'data'> & { data: THardwareData[]; };
