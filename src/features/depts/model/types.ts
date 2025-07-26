import type { TResourceData } from '@shared/types';

export type TDeptData = TResourceData & { children: TResourceData[] }

export interface IDeptList {
  id: TResourceData['id'];
  title: TResourceData['pagetitle'];
  subdepts: TResourceData[];
}

export interface IDeptsData {
  deptsList: IDeptList[];
  isDeptsLoading: boolean;
}
