import { FC } from 'react';

import { useItemsData } from '@shared/hooks';
import { CarouselWrapper } from '@entities/carousel';
import { TestimonialItem } from '@entities/testimonial';
import { TestimonialsContent, TestimonialsHeading } from './';
import handleTestimonialData from '../lib/handleTestimonialData';

const Testimonials: FC = () => {
  const { isLoading, itemsList } = useItemsData('testimonials');

  if(isLoading) {
    return '';
  }

  return (
    <CarouselWrapper heading={<TestimonialsHeading title="Отзывы наших пациентов" url="otzyivyi" />} title="" url="">
      {handleTestimonialData(itemsList).map(
        ({ isExpanderVisible, ...item }) => <TestimonialItem key={item.id.toString()} {...item}><TestimonialsContent {...item.props} isExpanderVisible={isExpanderVisible} /></TestimonialItem>
      )}
    </CarouselWrapper>
  )
};

export default Testimonials;
