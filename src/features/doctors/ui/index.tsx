import { FC } from 'react';

import { useItemsData } from '@shared/hooks';
import { CarouselWrapper } from '@entities/carousel';

const Doctors: FC = () => {
  const { isLoading, itemsList } = useItemsData('doctors');

  if(isLoading) {
    return '';
  }

  return <CarouselWrapper items={itemsList} title="Специалисты" url="specialisty" />;
};

export default Doctors;
