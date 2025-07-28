import { FC } from 'react';

import { Layout } from '@widgets/layout';
import { Depts } from '@features/depts';
import { Doctors } from '@features/doctors';
import { Hardware } from '@features/hardware';
import { Testimonials } from '@features/testimonials';

const HomePage: FC = () => {
  return (
    <Layout>
      <Testimonials /><hr />
      <Hardware /><hr />
      <Doctors /><hr />
      <Depts /><hr />
    </Layout>
  )
};

export default HomePage;
