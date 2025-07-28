import { ReactNode } from 'react';
import type { TContentData } from '@shared/types';

export type TTestimonialData = TContentData & Record<'rating' | 'source', number>;

export interface ITestimonialItem {
  name: TTestimonialData['name'];
  intro: TTestimonialData['intro'];
  props: TTestimonialData['props'];
  createdon: TTestimonialData['createdon'];
  rating: string[];
  children: ReactNode;
}
