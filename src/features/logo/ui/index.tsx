import { FC } from 'react';

import { LogoIcon } from '@shared/icons';
import type { ILogo } from '../model/types';

const Logo: FC<ILogo> = ({ desc, name, url }) => {
  return (
    <a className="flex items-center gap-2" href={url}>
      <span className="btn-icon hidden p-px py-0 text-cyan-600 sm:block"><LogoIcon /></span>
      <span className="flex flex-col">
        <span className="text-blue-950 text-2xl sm:text-3xl font-bold">{name}</span>
        <span className="text-cyan-800 text-xs">{desc}</span>
      </span>
    </a>
  )
};

export default Logo;
