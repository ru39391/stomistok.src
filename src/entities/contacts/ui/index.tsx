import { FC } from 'react';

import type { IContactsItem } from '../types';

import './index.css';

const ContactsItem: FC<IContactsItem> = ({ caption, value, url, isColored }) => {
  return (
    <div className={`contacts-item font-semibold ${url ? 'flex flex-col' : 'hidden md:flex md:flex-col'}`}>
      <div className="text-xs text-cyan-500 mb-1 hidden md:block">{caption}:</div>
      {url
        ? <a
            className={`contacts-item__link md:pb-1 md:border-b-1 border-transparent ${isColored ? 'md:text-red-600 hover:border-red-600' : 'hover:border-black'}`}
            href={url}
            title={caption}
          >
            <span>{value}</span>
          </a>
        : <div className="pb-1">{value}</div>
      }
    </div>
  )
};

export default ContactsItem;
