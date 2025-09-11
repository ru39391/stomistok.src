import type { TCopyrightResData } from '../types';

const fetchCopyrightData = (): Promise<TCopyrightResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: {
            copyright: {
              year: "2025",
              name: "Клиника Здоровья Исток",
              desc: "Все права защищены.",
            },
            nav: [
              {
                id: 9,
                menuindex: 20,
                menutitle: "",
                pagetitle: "Лицензии и юридическая информация",
                introtext: "",
                uri: "liczenzii-i-yuridicheskaya-informacziya",
                class_key: "modDocument",
                redirect: {
                  old_uri: "liczenzii-i-yuridicheskaya-informacziya/",
                },
                seo: {
                  title:
                    "Лицензии и юридическая информация | Клиника Здоровья Исток в Звенигороде",
                  desc: "На этой странице вы найдёте юридическую информацию о Клинике Здоровья Исток – юридический адрес, контактные данные, реквизиты, данные о руководителе и др. Для загрузки доступны лицензии ООО «Фирма Исток» и ООО Клиника Исток.",
                  kws: "",
                },
                pics: [],
              },
              {
                id: 10,
                menuindex: 13,
                menutitle: "",
                pagetitle: "Вакансии клиники",
                introtext: "",
                uri: "vakansii",
                class_key: "modDocument",
                redirect: {
                  old_uri: "vakansii/",
                },
                seo: {
                  title: "Вакансии в Звенигороде: Клиника Здоровья Исток",
                  desc: "Наш медицинский центр постоянно развивается и мы всегда рады новым коллегам и специалистам. Приглашаем на работу опытных специалистов и начинающих активных соискателей. ",
                  kws: "",
                },
                pics: [],
              },
              {
                id: 12,
                menuindex: 24,
                menutitle: "",
                pagetitle: "Условия обработки персональных данных",
                introtext: "",
                uri: "uslovya-obrabotki-personalnyix-dannyix",
                class_key: "modDocument",
                redirect: {
                  old_uri: "uslovya-obrabotki-personalnyix-dannyix/",
                },
                seo: {
                  title:
                    "Условия обработки персональных данных | Клиника Здоровья Исток",
                  desc: "Согласие на обработку персональных данных ООО «Фирма Исток» и ООО Клиника Исток.",
                  kws: "",
                },
                pics: [],
              },
            ],
          },
        }),
      200
    );
  });

export default fetchCopyrightData;
