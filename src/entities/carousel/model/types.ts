import type { TResourceData } from '@shared/types';

export interface ICarouselItem {
  name: TResourceData['pagetitle'];
  desc: TResourceData['introtext'];
  pics: TResourceData['pics'][number]
  url: TResourceData['uri'];
}

export interface ICarouselWrapper {
  title: string;
  url: string;
  items: TResourceData[];
}
