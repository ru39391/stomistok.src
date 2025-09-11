import type { TContactsData } from '../types';

const handleOpenHours = (arr: TContactsData['open']): string => {
  const openHours = arr.map(({ name, start, end }) => `${name} с ${start} до ${end}`);

  return openHours.reduce((acc, str, index, arr) => `${acc}${index === arr.length - 1 ? str : `${str}, `}`, '');
};

export default handleOpenHours;
