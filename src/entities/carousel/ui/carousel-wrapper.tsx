import { FC } from 'react';

import CarouselItem from './carousel-item';
import type { ICarouselWrapper } from '../model/types';

const CarouselWrapper: FC<ICarouselWrapper> = ({ items, title, url }) => {
  return (
    <div className="container">
      <a className="subtitle text-uppercase" href={url}>{title}</a>
      <div className="carousel text-center">
        {items.map(({ id, introtext, pagetitle, pics, uri }) => <CarouselItem key={id.toString()} name={pagetitle} desc={introtext} pics={pics[0]} url={uri} />)}
      </div>
    </div>
  )
};

export default CarouselWrapper;
