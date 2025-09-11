import { FC } from 'react';

import { Logo } from '@features/logo';
import { NavTopList } from '@features/nav';
import { ContactsTopList } from '@features/contacts';
import { SocialList } from '@features/social';

const Header: FC = () => {
  return (
    <>
      <header className="flex justify-between xl:grid xl:grid-cols-2 2xl:grid-cols-3 items-center border-b-1 border-zinc-300 p-4 lg:py-5">
        <div className="xl:col-auto 2xl:col-span-2">
          <SocialList classMod="social-wrapper_type_group" />
        </div>
        <ContactsTopList />
      </header>
      <div className="flex flex-wrap justify-between items-center sticky top-0 z-1 p-4 bg-white lg:py-5 lg:gap-12">
        <Logo />
        <NavTopList />
      </div>
    </>
  );
};

export default Header;
