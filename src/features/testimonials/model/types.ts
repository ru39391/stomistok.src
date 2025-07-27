import type { TTestimonialData } from '@entities/testimonial/types';
import type { TResourceResData } from '@shared/types';

export type TTestimonialsResData = Omit<TResourceResData, 'data'> & { data: TTestimonialData[]; };

