import { useState, useEffect } from 'react';

import fetchDeptsData from '../api/fetchDeptsData';
import type { IDeptsData } from '../model/types';

// TODO: стандартизировать useDeptsData
const useDeptsData = (): IDeptsData => {
  const [deptsList, setDeptsList] = useState<IDeptsData['deptsList']>([]);
  const [isDeptsLoading, setDeptsLoading] = useState<IDeptsData['isDeptsLoading']>(false);

  const handleDeptsData = async () => {
    setDeptsLoading(true);

    try {
      const { success, data } = await fetchDeptsData();

      if(!success) {
        throw Error('useDeptsData error');
      }

      setDeptsList(
        data.map(({ id, pagetitle, children }) => ({ id, title: pagetitle, subdepts: children }))
      );
    } catch (error) {
      console.error(error);
    } finally {
      setDeptsLoading(false);
    }
  };

  useEffect(() => {
    handleDeptsData();
  }, []);

  return {
    deptsList,
    isDeptsLoading,
  }
}

export default useDeptsData;
