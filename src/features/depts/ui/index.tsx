import { FC } from 'react';

import useDeptsData from '../hooks/useDeptsData';
import { HighlightItem } from '@entities/highlight-item';
import type { IDeptList } from '../model/types';

const DeptList: FC<IDeptList> = ({ title, subdepts }) => {
  return (
    <div className="container">
      <div className="col-lg-6 px-0">
        <a className="tabtitles__item" href="#">{title}</a>
        <div className="highlights__tab d-lg-flex flex-wrap">
          {subdepts.map(({ id, pagetitle, pics, uri }) => <HighlightItem key={id.toString()} name={pagetitle} img={pics[0]?.src} url={uri}  />)}
        </div>
      </div>
    </div>
  )
};

const Depts: FC = () => {
  const { isDeptsLoading, deptsList } = useDeptsData();

  if(isDeptsLoading) {
    return '';
  }

  return (
    <div className="highlights border-0 row align-items-start px-0 px-sm-3 px-lg-0">
      {deptsList.map(item => <DeptList key={item.id.toString()} {...item} />)}
    </div>
  )
};

export default Depts;
