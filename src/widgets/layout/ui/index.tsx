import { FC } from 'react';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

import type { ILayout } from '../model/types';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Footer />
      {children}
    </>
  );
};

export default Layout;
