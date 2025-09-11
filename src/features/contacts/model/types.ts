import type { TResourceResData } from '@shared/types';

export type TContactsData = Record<'phone' | 'email', string> & { open: Record<string, string>[]; } & { address: Record<string, string>; };

export type TContactsResData = Omit<TResourceResData, 'data'> & { data: TContactsData; };

export interface IContactsList {
  classMod?: string;
}
