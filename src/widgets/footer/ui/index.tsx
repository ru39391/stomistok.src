import { FC } from 'react';

import { Copyright } from '@features/copyright';

const Footer: FC = () => {
  return (
    <footer className="text-white bg-blue-950">
      <div className="border-b-1 border-gray-200">
        <div className="wrapper">

        </div>
      </div>
      <div className="wrapper"><Copyright /></div>
    </footer>
  );
};

export default Footer;
