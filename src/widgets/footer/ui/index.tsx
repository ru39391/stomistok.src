import { FC } from 'react';

import { ContactsBottomList, ContactsPhoneList } from '@features/contacts';
import { Copyright } from '@features/copyright';
import { Logo } from '@features/logo';
import { NavBottomList } from '@features/nav';
import { SocialList } from '@features/social';

const Footer: FC = () => {
  return (
    <footer className="text-white bg-blue-950">
      <div className="border-b-1 border-gray-200 py-10 lg:py-16">
        <div className="wrapper flex flex-col justify-between md:flex-row md:flex-wrap">
          <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/3 xl:w-3/12 lg:order-1">
            <Logo isIconVisible={true} theme="default" />
            <ContactsPhoneList classMod="flex-col gap-y-2" />
          </div>
          <div className="flex flex-col justify-between gap-8 mb-10 lg:mb-0 lg:w-1/3 xl:w-3/12 lg:order-3 xl:order-2">
            <ContactsBottomList classMod="flex-col gap-y-2" />
            <SocialList classMod="gap-2" />
          </div>
          <div className="md:w-2/3 lg:w-1/2 xl:w-4/12 lg:order-2 xl:order-3">
            <NavBottomList />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
