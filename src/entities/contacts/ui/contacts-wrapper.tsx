import { FC } from 'react';

import type { IContactsWrapper } from '../types';

const ContactsWrapper: FC<IContactsWrapper> = ({ classMod, children }) => <div className={`flex justify-between gap-x-2 md:gap-x-6 xl:gap-x-1 ${classMod || ''}`}>{children}</div>;

export default ContactsWrapper;
