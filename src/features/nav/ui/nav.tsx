import { FC, useState } from 'react';

import { Logo } from '@features/logo';
import { EditIcon } from '@shared/icons';
import { useItemsData } from '@shared/hooks';
import { NavToggler } from './';

const Nav: FC = () => {
  const [isNavHidden, setNavHidden] = useState(true);
  const { isLoading, itemsList: { site, nav } } = useItemsData('nav');

  if(isLoading) {
    return '';
  }

  return (
    <div className="flex flex-wrap justify-between items-center sticky top-0 z-1 p-4 bg-white lg:py-5 lg:gap-12">
      {site && <Logo {...site} />}
      <nav className={`flex-col justify-center w-full absolute left-0 top-[100%] bg-white lg:flex lg:w-auto lg:static lg:flex-row lg:items-center lg:gap-12 ${isNavHidden ? 'hidden' : 'flex'}`}>
        {Array.isArray(nav) && nav.map(
          ({
            id,
            menutitle,
            pagetitle,
            uri
          }) => <a key={id.toString()} className="px-4 transition border-transparent py-4 font-semibold text-neutral-700 hover:text-cyan-600 hover:border-cyan-600  lg:px-0 xl:border-b-1 xl:py-0 xl:pb-1" href={uri}>{menutitle || pagetitle}</a>
        )}
      </nav>
      <div className="flex gap-2">
        <button
          className="flex"
          type="button"
          title="Записаться на приём"
        >
          <span className="btn-icon text-white bg-blue-950 xl:hidden"><EditIcon /></span>
          <span className="btn px-5 py-4 text-white bg-cyan-600 hover:bg-blue-950 hidden xl:flex">Записаться на приём</span>
        </button>
        <NavToggler isNavHidden={isNavHidden} handleClick={() => setNavHidden(!isNavHidden)} />
      </div>
    </div>
  )
};

export default Nav;
