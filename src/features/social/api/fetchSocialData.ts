import type { TSocialResData } from '../types';

const fetchSocialData = (): Promise<TSocialResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: [
            {
              key: 'ok',
              url: 'https://ok.ru/592785046296',
            },
            {
              key: 'tg',
              url: 'https://t.me/clinic_istok_zvenigorod/',
            },
            {
              key: 'vk',
              url: 'https://vk.com/club166111828',
            }
          ],
        }),
      200
    );
  });

export default fetchSocialData;
