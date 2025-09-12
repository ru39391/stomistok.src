import { FC } from 'react';

import type { IContactsItem } from '../types';

const ContactsItem: FC<IContactsItem> = ({ caption, children, classMod, isCaptionHidden, isItemHidden, value, url }) => {
  const rowClassMod = caption ? 'flex flex-col items-start' : '';

  return (
    <div className={`font-semibold ${isItemHidden ? 'hidden md:flex md:flex-col' : rowClassMod}`}>
      {caption ? <div className={`text-xs text-cyan-500 mb-1 ${isCaptionHidden ? 'hidden md:block' : ''}`}>{caption}:</div> : ''}
      {url
        ? <a
            className={`transition-all border-transparent xl:pb-1 xl:border-b-1 ${classMod || ''}`}
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
