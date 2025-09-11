import { FC } from 'react';

import { useItemsData } from '@shared/hooks';

const Copyright: FC = () => {
  const { isLoading, itemsList: { copyright, nav } } = useItemsData('copyright');

  if(isLoading) {
    return '';
  }

  return (
    <div className="wrapper flex flex-col justify-between gap-2 py-8 xl:flex-row xl:items-center">
      {copyright && <div className="text-sm">&copy; {copyright?.year} {copyright?.name}. {copyright?.desc}</div>}
      <nav className="flex flex-col gap-x-6 md:flex-row md:items-center">
        {Array.isArray(nav) && nav.map(
          ({ id, menutitle, pagetitle, uri }) => <a key={id.toString()} className="text-xs py-3" href={uri}><span className="border-b-1 border-white">{menutitle || pagetitle}</span></a>)
        }
      </nav>
    </div>
  );
};

export default Copyright;
