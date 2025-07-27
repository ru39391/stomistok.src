import type { THardwareData } from '@entities/hardware/types';
import type { THardwareResData } from '../types';

// TODO: универсализировать названия полей для pagetitle: name, introtext: intro,
// вероятно решать этот на жтапе обработки ответа сервера
const handleHardwareList = (items: THardwareResData['data'], url: string): THardwareData[] => items.map(
  ({ name, intro, ...data }) => ({ ...data, pagetitle: name, introtext: intro, uri: `${url}#item-${data.id.toString()}` })
);

export default handleHardwareList;
