import { FC } from 'react';

import type { IContactsItem } from '../types';

import './index.css';

const ContactsItem: FC<IContactsItem> = ({ caption, value, url }) => {
  return (
    <div className="contacts-item mr-5">
      <div className="contacts-item__caption">{caption}</div>
      {url ? <a className="contacts-item__text" href={url}>{value}</a> : <div className="contacts-item">{value}</div>}
    </div>
  )
};

export default ContactsItem;
