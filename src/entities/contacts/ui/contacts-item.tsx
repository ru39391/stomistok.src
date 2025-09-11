import { FC } from 'react';

import type { IContactsItem } from '../types';

const ContactsItem: FC<IContactsItem> = ({ caption, children, classMod, value, url }) => {
  return (
    <div className={`font-semibold ${url ? 'flex flex-col' : 'hidden md:flex md:flex-col'}`}>
      {caption ? <div className="text-xs text-cyan-500 mb-1 hidden md:block">{caption}:</div> : ''}
      {url
        ? <a
            className={`transition border-transparent xl:pb-1 xl:border-b-1 ${classMod || ''}`}
            href={url}
            title={caption}
          >
            {children || value}
          </a>
        : <div className="xl:pb-1">{value}</div>
      }
    </div>
  )
};

export default ContactsItem;
