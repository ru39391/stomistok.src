import { ReactNode } from 'react';

export interface IContactsIcon {
  value: string;
  icon: ReactNode;
}

export interface IContactsItem {
  caption?: string;
  value?: string;
  classMod?: string;
  isItemHidden?: boolean;
  isCaptionHidden?: boolean;
  url?: string;
  children?: ReactNode;
}

export interface IContactsWrapper {
  classMod?: string;
  children: ReactNode;
}
