import { FC } from 'react';

import { ContactsIcon, ContactsItem, ContactsWrapper } from '@entities/contacts';
import { EmailIcon, PhoneIcon } from '@shared/icons';
import { useItemsData } from '@shared/hooks';
import type { IContactsList } from '../types';
import { handleOpenHours } from '../lib';

const ContactsTopList: FC<IContactsList> = ({ classMod }) => {
  const {
    isLoading,
    itemsList: { email, open, phone }
  } = useItemsData('contacts');

  if(isLoading) {
    return '';
  }

  return (
    <ContactsWrapper classMod={classMod}>
      <ContactsItem
        caption="Позвоните нам"
        classMod="md:text-red-600 hover:border-red-600"
        isCaptionHidden={true}
        url={`tel:${phone}`}
      >
        <ContactsIcon icon={<PhoneIcon />} value={phone} />
      </ContactsItem>
      <ContactsItem
        caption="Напишите нам"
        classMod="hover:border-black"
        isCaptionHidden={true}
        url={`mailto:${email}`}
      >
        <ContactsIcon icon={<EmailIcon />} value={email} />
      </ContactsItem>
      <ContactsItem
        caption="Время работы"
        isItemHidden={true}
        value={handleOpenHours(open || [])}
      />
    </ContactsWrapper>
  );
};

export default ContactsTopList;
