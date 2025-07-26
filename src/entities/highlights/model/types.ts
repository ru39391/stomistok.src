import type { TResourceData } from '@shared/types';

export interface IHighlightsItem {
  [key: string]: string;
}

export interface IHighlightsWrapper {
  title: TResourceData['pagetitle'];
  subdepts: TResourceData[];
}
