import type { TContentData } from '@shared/types';

export type TTestimonialData = TContentData & Record<'rating' | 'source', number>;
