import { useState, useEffect } from 'react';

import { HANDLERS } from '@shared/constants';
import type { TItemsData } from '@shared/types';

const useItemsData = (key: string): TItemsData => {
  const [itemsList, setItemsList] = useState<TItemsData['itemsList']>([]);
  const [isLoading, setLoading] = useState<TItemsData['isLoading']>(false);

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
