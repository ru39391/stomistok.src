import { FC } from 'react';

import type { IContactsItem } from '../types';

const ContactsItem: FC<IContactsItem> = ({ caption, value, url, isColored, icon }) => {
  return (
    <div className={`font-semibold ${url ? 'flex flex-col' : 'hidden md:flex md:flex-col'}`}>
      <div className="text-xs text-cyan-500 mb-1 hidden md:block">{caption}:</div>
      {url
        ? <a
            className={`transition border-transparent xl:pb-1 xl:border-b-1 ${isColored ? 'md:text-red-600 hover:border-red-600' : 'hover:border-black'}`}
            href={url}
            title={caption}
          >
            <span className="btn-icon text-white bg-cyan-500 flex flex-col md:hidden">{icon}</span>
            <span className="hidden md:block">{value}</span>
          </a>
        : <div className="xl:pb-1">{value}</div>
      }
    </div>
  )
};

export default ContactsItem;
