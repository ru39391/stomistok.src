import { FC } from 'react';

import { ContactsItem, ContactsWrapper } from '@entities/contacts';
import { FooterSection } from '@entities/footer';
import { useItemsData } from '@shared/hooks';
import type { IContactsList } from '../types';
import { handleAddressData } from '../lib';

const ContactsBottomList: FC<IContactsList> = ({ classMod }) => {
  const {
    isLoading,
    itemsList: { address, email, phone }
  } = useItemsData('contacts');

  if(isLoading) {
    return '';
  }

  return (
    <FooterSection caption="Контактная информация:">
      <ContactsWrapper classMod={classMod}>
        <ContactsItem
          caption="Адрес"
          value={handleAddressData(Object.values(address || {}))}
        />
        <ContactsItem
          caption="Напишите нам"
          value={email}
          url={`mailto:${email}`}
        />
        <ContactsItem
          caption="Позвоните нам"
          value={phone}
          url={`tel:${phone}`}
        />
      </ContactsWrapper>
    </FooterSection>
  );
};

export default ContactsBottomList;
