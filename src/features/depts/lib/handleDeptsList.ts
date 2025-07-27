import type { TDeptData } from '@entities/dept/types';
import type { TDeptResData } from '../types';

const handleDeptsList = (items: TDeptResData['data']): TDeptData[] => items.map(
  ({ id, pagetitle, children }) => ({ id, title: pagetitle, subdepts: children })
);

export default handleDeptsList;
