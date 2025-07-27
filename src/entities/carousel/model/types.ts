import { ReactNode } from 'react';
import type { TPlainData, TResourceData } from '@shared/types';

export interface ICarouselItem {
  name: string;
  desc: string;
  pics: TPlainData;
  url: string;
}

export interface ICarouselTitle {
  title: string;
  url: string;
}

export interface ICarouselWrapper {
  title: ICarouselTitle['title'];
  url: ICarouselTitle['url'];
  items?: TResourceData[];
  children?: ReactNode;
  heading?: ReactNode;
}
