import type { TDeptResData } from '@shared/types';
import type { TDeptData } from '../model/types';

const handleDeptsList = (items: TDeptResData['data']): TDeptData[] => items.map(
  ({ id, pagetitle, children }) => ({ id, title: pagetitle, subdepts: children })
);

export default handleDeptsList;
