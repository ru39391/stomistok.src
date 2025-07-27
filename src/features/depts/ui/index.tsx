import { FC } from 'react';

import { useItemsData } from '@shared/hooks';
import { HighlightsWrapper } from '@entities/highlights';
import handleDeptsList from '../lib/handleDeptsList';

const Depts: FC = () => {
  const { isLoading, itemsList } = useItemsData('depts');

  if(isLoading) {
    return '';
  }

  return (
    <div className="highlights border-0 row align-items-start px-0 px-sm-3 px-lg-0">
      {handleDeptsList(itemsList).map(item => <HighlightsWrapper key={item.id.toString()} {...item} />)}
    </div>
  )
};

export default Depts;
