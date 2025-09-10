import { FC } from 'react';

import { LogoIcon } from '@shared/icons';
import { useItemsData } from '@shared/hooks';

const Nav: FC = () => {
  const { isLoading, itemsList: { site, nav } } = useItemsData('nav');

  if(isLoading) {
    return '';
  }

  return (
    <div className="flex flex-wrap justify-between items-start p-4 lg:static lg:flex-row lg:items-center lg:py-5 lg:gap-12">
      <a className="flex flex-row items-center order-1 gap-2" href={site?.url}>
        <span className="btn-icon p-px py-0 text-cyan-600"><LogoIcon /></span>
        <span className="flex flex-col">
          <span className="text-blue-950 text-3xl font-bold">{site?.name}</span>
          <span className="text-cyan-800 text-xs">{site?.desc}</span>
        </span>
      </a>
      <nav className="flex flex-col grow order-3 lg:order-2 lg:flex-row lg:justify-end lg:items-center xl:justify-center lg:gap-12">
        {Array.isArray(nav) && nav.map(
          ({
            id,
            menutitle,
            pagetitle,
            uri
          }) => <a key={id.toString()} className="transition border-transparent py-4 font-semibold text-neutral-700 hover:text-cyan-600 hover:border-cyan-600 lg:border-b-1 lg:py-0 lg:pb-1" href={uri}>{menutitle || pagetitle}</a>
        )}
      </nav>
      <button
        className="btn flex order-2 px-5 py-4 text-white bg-cyan-600 hover:bg-blue-950 lg:order-3 lg:hidden xl:flex"
        type="button"
        title="Записаться на приём"
      >
        Записаться на приём
      </button>
    </div>
  )
};

export default Nav;
