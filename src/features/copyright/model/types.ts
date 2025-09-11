import type { TResourceData, TResourceResData } from '@shared/types';

export type TCopyrightResData = Omit<TResourceResData, 'data'> & {
  data: {
    copyright: Record<string, string>;
    nav: TResourceData[];
  };
};
