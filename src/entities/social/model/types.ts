import { ReactNode } from 'react';
import type { TSocialData } from '@features/types';

export interface ISocialItem {
  key: TSocialData['key'];
  url: TSocialData['url'];
  children: ReactNode;
}
