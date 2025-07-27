import { FC } from 'react';

import type { ICarouselTitle } from '../types';

const CarouselTitle: FC<ICarouselTitle> = ({ title, url }) => <a className="subtitle text-uppercase" href={url}>{title}</a>;

export default CarouselTitle;
