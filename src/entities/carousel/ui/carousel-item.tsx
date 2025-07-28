import { FC } from 'react';

import { Picture } from '@shared/ui';
import type { ICarouselItem } from '../types';

const CarouselItem: FC<ICarouselItem> = ({ name, desc, pics, url }) => {
  return (
    <div className="item">
      <a href={url}>
        <Picture alt={name} src={pics?.src} thumb={pics?.thumb} />
        <span className="spec-name d-block"><b>{name}</b> {desc}</span>
      </a>
    </div>
  )
};

export default CarouselItem;
