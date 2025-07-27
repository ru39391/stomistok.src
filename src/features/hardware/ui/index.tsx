import { FC } from 'react';

import { useItemsData } from '@shared/hooks';
import { CarouselWrapper } from '@entities/carousel';
import handleHardwareList from '../lib/handleHardwareList';

const Hardware: FC = () => {
  const { isLoading, itemsList } = useItemsData('hardware');

  if(isLoading) {
    return '';
  }

  return <CarouselWrapper items={handleHardwareList(itemsList, 'texnologii-2')} title="Оборудование" url="texnologii-2" />;
};

export default Hardware;
