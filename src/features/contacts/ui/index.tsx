import { FC } from 'react';

import { ContactsItem } from '@entities/contacts';
import { EmailIcon, PhoneIcon } from '@shared/icons';
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
    <div className="flex justify-between gap-2 md:gap-6 xl:gap-1">
      <ContactsItem caption="Позвоните нам" value={phone} url={`tel:${phone}`} isColored={true} icon={<PhoneIcon />} />
      <ContactsItem caption="Напишите нам" value={email} url={`mailto:${email}`} icon={<EmailIcon />} />
      <ContactsItem caption="Время работы" value={handleOpenHours(open || [])} />
    </div>
  );
};

export default ContactsList;
