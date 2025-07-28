import type { TTestimonialData } from '@entities/testimonial/types';
import type { TTestimonialsResData } from '../types';

const handleTestimonialData = (items: TTestimonialsResData['data']): (Omit<TTestimonialData, 'rating'> & { rating: string[]; isExpanderVisible: boolean; })[] => {
  const testimonials = items.filter(({ isHidden }) => isHidden === 0);

  return testimonials.map(({ name, intro, props: { content }, createdon, rating, ...data }) => {
    const dateArr = createdon.split(' ')[0];
    const desc = content.length <= 115 ? content : `${content.substring(0, 115)}...`;

    return {
      ...data,
      name: intro,
      intro: name.replace(intro, ''),
      // TODO: настроить обработку тэгов в content
      props: { content, desc, rating: rating.toString()},
      createdon: dateArr.split('-').reverse().join('.'),
      rating: [...Array(rating)].map((_, index) => (index + 1).toString()),
      isExpanderVisible: content.length > 115
    }
  })
};

export default handleTestimonialData;
