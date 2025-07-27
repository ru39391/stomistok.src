import type { TResourceData } from '@shared/types';

export type TDeptData = {
  id: TResourceData['id'];
  title: TResourceData['pagetitle'];
  subdepts: TResourceData[];
}

