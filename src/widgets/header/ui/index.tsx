import { FC } from 'react';

import { Nav } from '@features/Nav';
import { ContactsList } from '@features/Contacts';
import { SocialList } from '@features/Social';

const Header: FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-5">
        <SocialList classMod="social-wrapper_type_group" />
        <ContactsList />
      </div>
      <Nav />
    </>
  );
};

export default Header;
