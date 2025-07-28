import { FC } from 'react';

import { useItemsData } from '@shared/hooks';

const Nav: FC = () => {
  const { isLoading, itemsList } = useItemsData('nav');

  if(isLoading) {
    return '';
  }

  console.log(itemsList);

  return (
    <nav className="header__menu offset-md-3 offset-lg-0" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
      <div className="container d-md-flex flex-wrap">
        <div className="affix__menu col-12 d-lg-flex flex-wrap px-0">
          {itemsList.map(({ pagetitle }) => <li>{pagetitle}</li>)}
        </div>
      </div>
    </nav>
  )
};

export default Nav;
