import type { TResourceResData } from '@shared/types';

export type TContactsData = Record<'phone' | 'email', string> & { open: Record<string, string>[]; } & { address: Record<string, string>; };

export type TContactsResData = Omit<TResourceResData, 'data'> & { data: TContactsData; };

export type TPhonesResData = Omit<TResourceResData, 'data'> & { data: { open: TContactsData['open']; phones: string[]; } };

export interface IContactsList {
  classMod?: string;
}
