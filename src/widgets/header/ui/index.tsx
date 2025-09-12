import { FC } from 'react';

import { Logo } from '@features/logo';
import { NavTopList } from '@features/nav';
import { ContactsTopList } from '@features/contacts';
import { SocialList } from '@features/social';

const Header: FC = () => {
  return (
    <>
      <header className="flex justify-between items-center gap-x-4 border-b-1 border-zinc-300 p-4 lg:py-5">
        <SocialList classMod="social-wrapper_type_group" />
        <ContactsTopList classMod="grow justify-end" />
      </header>
      <div className="flex flex-wrap justify-between items-center sticky top-0 z-1 p-4 bg-white lg:py-5 lg:gap-12">
        <Logo />
        <NavTopList />
      </div>
    </>
  );
};

export default Header;
