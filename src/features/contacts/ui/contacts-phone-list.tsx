import { FC } from 'react';

import { ContactsItem, ContactsWrapper } from '@entities/contacts';
import { FooterSection } from '@entities/footer';
import { useItemsData } from '@shared/hooks';
import { handleOpenHours } from '../lib';
import type { IContactsList } from '../types';

const ContactsPhoneList: FC<IContactsList> = ({ classMod }) => {
  const {
    isLoading,
    itemsList: { phones, open }
  } = useItemsData('phones');

  if(isLoading) {
    return '';
  }

  return (
    <FooterSection classMod="justify-between grow">
      <ContactsWrapper classMod={classMod}>
        {Array.isArray(phones) && phones.map((item, index) => <ContactsItem key={index.toString()} value={item} url={`tel:${item}`} />)}
        <ContactsItem caption="Время работы" value={handleOpenHours(open || [])}/>
      </ContactsWrapper>
      <button
        className="btn max-w-3xs px-5 py-4 text-white bg-cyan-600 hover:bg-white hover:text-blue-950"
        type="button"
        title="Записаться на приём"
      >
        Записаться на приём
      </button>
    </FooterSection>
  );
};

export default ContactsPhoneList;
