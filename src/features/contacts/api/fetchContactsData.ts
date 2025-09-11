import type { TContactsResData } from "../types";

const fetchContactsData = (): Promise<TContactsResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: {
            address: {
              zip: "143180",
              region: "Московская область",
              city: "Звенигород",
              address: "ул. Комарова, д. 10",
            },
            phone: "+7 (495) 597-73-00",
            email: "info@stomistok.ru",
            open: [
              {
                key: "Mo",
                name: "Пн-Вс",
                start: "08:00",
                end: "21:00",
              },
            ],
          },
        }),
      200
    );
  });

export default fetchContactsData;
