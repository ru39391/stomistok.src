import { FC } from 'react';

import { Nav } from '@features/Nav';
import { ContactsList } from '@features/Contacts';
import { SocialList } from '@features/Social';

const Header: FC = () => {
  return (
    <>
      <header className="flex justify-between xl:grid xl:grid-cols-2 2xl:grid-cols-3 items-center border-b-1 border-zinc-300 p-4 lg:py-5">
        <div className="xl:col-auto 2xl:col-span-2"><SocialList classMod="social-wrapper_type_group" /></div>
        <ContactsList />
      </header>
      <Nav />
    </>
  );
};

export default Header;
