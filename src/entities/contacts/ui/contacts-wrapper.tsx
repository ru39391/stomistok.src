import { FC } from 'react';

import type { IContactsWrapper } from '../types';

const ContactsWrapper: FC<IContactsWrapper> = ({ classMod, children }) => <div className={`flex gap-x-2 md:gap-x-8 xl:gap-x-10 ${classMod || ''}`}>{children}</div>;

export default ContactsWrapper;
