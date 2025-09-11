import { FC } from 'react';

import type { IFooterSection } from '../types';

const FooterSection: FC<IFooterSection> = ({ caption, children, classMod }) => {
  return (
    <div className={`flex flex-col pt-10 gap-y-4 ${classMod || ''}`}>
      <div className="text-xl font-semibold text-white">{caption}</div>
      {children}
    </div>
  );
};

export default FooterSection;
