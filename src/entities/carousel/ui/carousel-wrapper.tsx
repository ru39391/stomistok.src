import { FC } from 'react';

import CarouselItem from './carousel-item';
import { CarouselTitle } from '../';
import type { ICarouselWrapper } from '../types';

const CarouselWrapper: FC<ICarouselWrapper> = ({ items, title, url, children, heading }) => {
  return (
    <div className="container">
      {heading || <CarouselTitle title={title} url={url} />}
      <div className="carousel text-center">
        {Array.isArray(items)
          ? items.map(({ id, introtext, pagetitle, pics, uri }) => <CarouselItem key={id.toString()} name={pagetitle} desc={introtext} pics={pics[0]} url={uri} />)
          : children
        }
      </div>
    </div>
  )
};

export default CarouselWrapper;
