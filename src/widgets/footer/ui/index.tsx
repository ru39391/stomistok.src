import { FC } from 'react';

import { ContactsBottomList } from '@features/contacts';
import { Copyright } from '@features/copyright';
import { Logo } from '@features/logo';
import { NavBottomList } from '@features/nav';
import { SocialList } from '@features/social';

const Footer: FC = () => {
  return (
    <footer className="text-white bg-blue-950">
      <div className="border-b-1 border-gray-200 py-16">
        <div className="wrapper flex justify-between">
          <div className="w-3/12">
            <Logo theme="default" />
          </div>
          <div className="flex flex-col justify-between gap-8 w-3/12">
            <ContactsBottomList classMod="flex-col gap-y-2" />
            <SocialList classMod="gap-2" />
          </div>
          <div className="w-4/12">
            <NavBottomList />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
