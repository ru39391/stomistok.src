import { FC } from 'react';

import { CarouselTitle } from '@entities/carousel';

import type { ITestimonialsHeading } from '../types';

const TestimonialsHeading: FC<ITestimonialsHeading> = ({ title, url }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between">
      <CarouselTitle title={title} url={url} />
      <a className="section-btn section-btn_icon section-btn_icon-edit mb-2" href={url}>
        <span className="d-block d-sm-inline-block align-top">Оставить отзыв /</span> Читать все отзывы
      </a>
    </div>
  )
};

export default TestimonialsHeading;
