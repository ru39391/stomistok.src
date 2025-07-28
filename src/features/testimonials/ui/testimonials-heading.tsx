import { FC } from 'react';

import { CarouselTitle } from '@entities/carousel';

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

export default TestimonialsHeading;
