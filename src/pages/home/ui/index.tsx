import { FC } from 'react';

import { Layout } from '@widgets/layout';
import { Depts } from '@features/depts';
import { Doctors } from '@features/doctors';
import { Hardware } from '@features/hardware';

const HomePage: FC = () => {
  return (
    <Layout>
      <Hardware />
      <Doctors />
      <Depts />
    </Layout>
  )
};

export default HomePage;
