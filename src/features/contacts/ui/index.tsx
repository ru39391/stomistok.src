import { FC } from 'react';

import { ContactsItem } from '@entities/contacts';
import { useItemsData } from '@shared/hooks';
import type { IContactsList } from '../types';
import handleOpenHours from '../lib/handleOpenHours';

const ContactsList: FC<IContactsList> = () => {
  const {
    isLoading,
    itemsList: { email, open, phone }
  } = useItemsData('contacts');

  if(isLoading) {
    return '';
  }

  return (
    <div className="contacts-wrapper flex flex-row">
      <ContactsItem caption="Позвоните нам:" value={phone} url={`tel:${phone}`} />
      <ContactsItem caption="Напишите нам:" value={email} url={`mailto:${email}`} />
      <ContactsItem caption="Время работы:" value={handleOpenHours(open || [])} />
    </div>
  );
};

export default ContactsList;
