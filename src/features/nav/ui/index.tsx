import { FC } from 'react';

import { useItemsData } from '@shared/hooks';

const Nav: FC = () => {
  const { isLoading, itemsList } = useItemsData('nav');

  if(isLoading) {
    return '';
  }

  console.log(itemsList[0]);

  return (
    <div className="flex flex-row">
      <a className="logo" href="/">
      </a>
      <nav className="flex flex-row">
        {itemsList.map(({ id, menutitle, pagetitle, uri }) => <a key={id.toString()} href={uri}>{menutitle || pagetitle}</a>)}
      </nav>
    </div>
  )
};

export default Nav;
