import { ReactNode } from 'react';

export interface IContactsItem {
  caption: string;
  value: string;
  url?: string;
  isColored?: boolean;
  icon?: ReactNode;
}
