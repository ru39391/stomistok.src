import type { TPhonesResData } from "../types";

const fetchPhonesData = (): Promise<TPhonesResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: {
            phones: [
              "+7 (495) 597-73-00",
              "+7 (495) 597-74-77",
              "+7 (963) 782-28-33"
            ],
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

export default fetchPhonesData;
