import { FC } from 'react';

import useDeptsData from '../hooks/useDeptsData';
import { HighlightsWrapper } from '@entities/highlights';

const Depts: FC = () => {
  const { isDeptsLoading, deptsList } = useDeptsData();

  if(isDeptsLoading) {
    return '';
  }

  return (
    <div className="highlights border-0 row align-items-start px-0 px-sm-3 px-lg-0">
      {deptsList.map(item => <HighlightsWrapper key={item.id.toString()} {...item} />)}
    </div>
  )
};

export default Depts;
