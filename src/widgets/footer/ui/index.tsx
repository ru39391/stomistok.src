import { FC } from 'react';

import { Logo } from '@features/logo';
import { Copyright } from '@features/copyright';

const Footer: FC = () => {
  return (
    <footer className="text-white bg-blue-950">
      <div className="border-b-1 border-gray-200">
        <div className="wrapper">
          <Logo theme="default" />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
