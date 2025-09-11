import { FC } from 'react';

import type { IContactsIcon } from '../types';

const ContactsIcon: FC<IContactsIcon> = ({ icon, value }) => {
  return (
    <>
      <span className="btn-icon text-white bg-cyan-500 flex flex-col md:hidden">{icon}</span>
      <span className="hidden md:block">{value}</span>
    </>
  )
};

export default ContactsIcon;
