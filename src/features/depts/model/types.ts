import type { TResourceData } from '@shared/types';

export type TDeptData = TResourceData & { children: TResourceData[] }

export interface IDeptList {
  id: TDeptData['id'];
  title: TDeptData['pagetitle'];
  subdepts: TDeptData['children'];
}

export interface IDeptsData {
  deptsList: IDeptList[];
  isDeptsLoading: boolean;
}
