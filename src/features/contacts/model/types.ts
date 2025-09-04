import type { TResourceResData } from '@shared/types';

export type TContactsData = Record<'phone' | 'email', string> & { open: Record<string, string>[]; };

export type TContactsResData = Omit<TResourceResData, 'data'> & { data: TContactsData; };

export interface IContactsList {
  email: TContactsData['email'];
  open: TContactsData['open'];
  phone: TContactsData['phone'];
}
