import { FC } from 'react';

import { LogoIcon } from '@shared/icons';
import { useItemsData } from '@shared/hooks';
import type { ILogo } from '../types';

const Logo: FC<ILogo> = ({ theme }) => {
  const { isLoading, itemsList: { name, desc, url } } = useItemsData('logo');

  const themeData = {
    logo: theme === 'default' ? 'text-cyan-300' : 'text-cyan-600',
    name: theme === 'default' ? 'text-white' : 'text-blue-950',
    desc: theme === 'default' ? 'text-white' : 'text-cyan-800'
  }

  if(isLoading) {
    return '';
  }

  return (
    <a className="flex items-center gap-2" href={url}>
      <span className={`btn-icon hidden p-px py-0 ${themeData.logo} sm:block`}><LogoIcon /></span>
      <span className="flex flex-col">
        <span className={`${themeData.name} text-2xl sm:text-3xl font-bold`}>{name}</span>
        <span className={`${themeData.desc} text-xs`}>{desc}</span>
      </span>
    </a>
  )
};

export default Logo;
