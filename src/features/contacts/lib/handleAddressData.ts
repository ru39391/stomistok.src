import type { TContactsData } from '../types';

const handleAddressData = (array: TContactsData['address'][number][]): string => array.reduce((acc, str, index, arr) => `${acc}${index === arr.length - 1 ? str : `${str}, `}`, '');

export default handleAddressData;
