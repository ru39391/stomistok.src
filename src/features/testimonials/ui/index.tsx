import { FC } from 'react';

import { useItemsData } from '@shared/hooks';
import { CarouselTitle, CarouselWrapper } from '@entities/carousel';

const TestimonialsHeading: FC = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between">
      <CarouselTitle title="Отзывы наших пациентов" url="otzyivyi" />
      <a className="section-btn section-btn_icon section-btn_icon-edit mb-2" href="otzyivyi">
        <span className="d-block d-sm-inline-block align-top">Оставить отзыв /</span> Читать все отзывы
      </a>
    </div>
  )
};

const Testimonials: FC = () => {
  const { isLoading, itemsList } = useItemsData('testimonials');

  if(isLoading) {
    return '';
  }

  return (
    <CarouselWrapper heading={<TestimonialsHeading />} title="Отзывы наших пациентов" url="otzyivyi">
      {itemsList.map(({ name }) => <p>{name}</p>)}
    </CarouselWrapper>
  )
};

export default Testimonials;
