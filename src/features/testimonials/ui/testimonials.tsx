import { FC } from 'react';

import { useItemsData } from '@shared/hooks';
import { TestimonialContent, TestimonialItem } from '@entities/testimonial';
import handleTestimonialData from '../lib/handleTestimonialData';

import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials: FC = () => {
  const { isLoading, itemsList } = useItemsData('testimonials');

  if(isLoading) {
    return '';
  }

  return (
    <div className="wrapper">
      <div className="rounded-3xl px-16 pt-16 pb-10 bg-cyan-500">
        <div className="text-5xl text-white font-semibold mb-10">Отзывы наших пациентов</div>
        <Swiper slidesPerView={2}>
          {handleTestimonialData(itemsList).map(
            ({ isExpanderVisible, ...item }) => <SwiperSlide key={item.id.toString()}>
              <TestimonialItem {...item}><TestimonialContent {...item.props} isExpanderVisible={isExpanderVisible} /></TestimonialItem>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  )
};

export default Testimonials;
