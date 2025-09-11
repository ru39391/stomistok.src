import type { TLogoResData } from '../types';

const fetchLogoData = (): Promise<TLogoResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: {
            url: "http://stomistok.modx/",
            name: "Исток",
            desc: "Медицинский центр",
          },
        }),
      200
    );
  });

export default fetchLogoData;
