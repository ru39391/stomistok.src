import { FC } from 'react';

import { ArrowIcon } from '@shared/icons';
import { FooterSection } from '@entities/footer';
import { useItemsData } from '@shared/hooks';

const NavBottomList: FC = () => {
  const { isLoading, itemsList: nav } = useItemsData('footerNav');

  if(isLoading) {
    return '';
  }

  return (
    <FooterSection caption="Ознакомиться перед приёмом:" classMod="md:bg-blue-400/10 md:rounded-2xl md:px-8 md:py-10">
      <nav className="flex flex-col gap-y-3">
        {Array.isArray(nav) && nav.map(
          ({ id, menutitle, pagetitle, uri }) => <a key={id.toString()} className="flex justify-between items-center text-md font-medium gap-x-2 transition hover:text-cyan-600" href={uri}>{menutitle || pagetitle}<span className="max-w-[14px] flex-[0_0_14px] text-gray-300/50"><ArrowIcon /></span></a>)
        }
      </nav>
    </FooterSection>
  )
};

export default NavBottomList;
