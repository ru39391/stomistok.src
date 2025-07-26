import { FC } from 'react';

import { Layout } from '@widgets/layout';
import { Depts } from '@features/depts';
import { Doctors } from '@features/doctors';

const HomePage: FC = () => {
  return (
    <Layout>
      <Doctors />
      <Depts />
    </Layout>
  )
};

export default HomePage;
