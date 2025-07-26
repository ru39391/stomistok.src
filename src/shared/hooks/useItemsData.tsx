import { useState, useEffect } from 'react';

import { HANDLERS } from '@shared/constants';
import type { TResourceResData } from '@shared/types';

const useItemsData = (key: string): TResourceResData => {
  const [itemsList, setItemsList] = useState<TResourceResData['data']>([]);
  const [isLoading, setLoading] = useState<TResourceResData['success']>(false);

  const handleItemsData = async () => {
    setLoading(true);

    try {
      const { success, data } = await HANDLERS[key];

      if(!success) {
        throw Error(`useItemsData error: ${key}`);
      }

      setItemsList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleItemsData();
  }, []);

  return {
    itemsList,
    isLoading,
  }
}

export default useItemsData;
