import type { TResourceResData } from '@shared/types';

const fetchDoctorsData = (): Promise<TResourceResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: [
            {
              id: 16,
              menuindex: 3,
              menutitle: "",
              pagetitle: "Брус Валентина Ивановна",
              introtext: "стоматолог-терапевт",
              uri: "brus-valentina-ivanovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "brus-valentina-ivanovna/",
              },
              seo: {
                title:
                  "Брус Валентина Ивановна – врач стоматолог-терапевт в Звенигороде",
                desc: "Брус Валентина Ивановна – стоматолог-терапевт, стоматолог-хирург с многолетним стажем работы. Ведет прием взрослых и детей в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Brus_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Brus_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 17,
              menuindex: 8,
              menutitle: "",
              pagetitle: "Белоусова Елена Михайловна",
              introtext:
                "стоматолог-терапевт,<br> терапевт-парадонтолог,<br>ортопед",
              uri: "krapivina-elena-mixajlovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "krapivina-elena-mixajlovna/",
              },
              seo: {
                title:
                  "Белоусова Елена Михайловна - врач стоматолог-терапевт в Звенигороде",
                desc: "Белоусова Елена Михайловна – врач стоматолог-терапевт, терапевт-пародонтолог, ортопед с опытом работы более 10 лет. Ведет прием в Клинике Здоровья Исток в Звенигороде. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Belousova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Belousova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 18,
              menuindex: 100,
              menutitle: "",
              pagetitle: "Ширяев Андрей Юрьевич",
              introtext:
                "ведущий специалист, <br> стоматолог-ортопед, имплантолог, хирург, <br>\r\nврач-гнатолог",
              uri: "shiryaev-andrej-yurevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "shiryaev-andrej-yurevich/",
              },
              seo: {
                title:
                  "Ширяев Андрей Юрьевич – стоматолог-хирург в Звенигороде | Запись на прием, отзывы",
                desc: "Ширяев Андрей Юрьевич – стоматолог-ортопед, имплантолог, хирург с опытом работы более 10 лет. Ведет прием в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ удаление зубов любой сложности ✓ все виды имплантации ✓ лечение во сне ✓ высокая точность работ любой сложности под оптикой ✓ 3D протезирование.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Shiryaev_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Shiryaev_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 19,
              menuindex: 4,
              menutitle: "",
              pagetitle: "Комаров Олег Васильевич",
              introtext:
                "ведущий специалист, <br> стоматолог-терапевт,<br>эндодонтист-микроскопист,<br>хирург",
              uri: "komarov-oleg-vasilevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "komarov-oleg-vasilevich/",
              },
              seo: {
                title:
                  "Комаров Олег Васильевич – врач стоматолог-хирург в Звенигороде",
                desc: "Комаров Олег Васильевич – стоматолог-терапевт, детский терапевт, хирург с опытом работы более 10 лет. Ведет прием пациентов всех возрастов в Клинике Здоровья исток в Звенигороде. Ключевые навыки: ✓ удаление зубов любой сложности ✓ работы любой сложности под оптикой.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Komarov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Komarov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 20,
              menuindex: 12,
              menutitle: "",
              pagetitle: "Григорьянц Ольга Николаевна",
              introtext: "стоматолог-терапевт,<br>хирург",
              uri: "grigoryanc-olga-nikolaevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "grigoryanc-olga-nikolaevna/",
              },
              seo: {
                title:
                  "Григорьянц Ольга Николаевна – стоматолог терапевт в Звенигороде | Запись на прием",
                desc: "Григорьянц  О.Н. – врач стоматолог-терапевт, хирург в Клинике Здоровья Исток в Звенигороде. Ведет прием взрослых пациентов. Опыт работы – более 10 лет. Отзывы, записаться на приём.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Grigoryanc_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Grigoryanc_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 21,
              menuindex: 14,
              menutitle: "",
              pagetitle: "Калугин Игорь Сергеевич",
              introtext:
                "стоматолог-ортопед, хирург, терапевт, <br> детский стоматолог",
              uri: "kalugin-igor-sergeevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "kalugin-igor-sergeevich/",
              },
              seo: {
                title:
                  "Калугин Игорь Сергеевич, врач-стоматолог в Звенигороде | Запись на прием",
                desc: "Калугин Игорь Сергеевич – врач-стоматолог, ортопед, хирург, терапевт, детский стоматолог с опытом работы более 10 лет. Ведет прием взрослых и детей в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kalugin_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kalugin_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 22,
              menuindex: 17,
              menutitle: "",
              pagetitle: "Милованова Анна Андреевна",
              introtext: "ведущий специалист, стоматолог-ортодонт ",
              uri: "milovanova-anna-andreevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "milovanova-anna-andreevna/",
              },
              seo: {
                title:
                  "Милованова Анна Андреевна – стоматолог ортодонт в Звенигороде | Запись на прием",
                desc: "Милованова А.А. – стоматолог-ортодонт в Клинике Здоровья Исток в Звенигороде. Ведет прием взрослых пациентов и детей. ✓ Исправление прикуса. ✓ Все виды брекет-систем. ✓ Элайнеры. Отзывы, записаться на прием.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Milovanova_NEW_2024_circle_3.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Milovanova_NEW_2024_circle_3.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 23,
              menuindex: 10,
              menutitle: "",
              pagetitle: "Соколова Лали Евгеньевна",
              introtext:
                "стоматолог-терапевт, ортопед,  <br>пародонтолог, эндодонтист-микроскопист",
              uri: "gorbacheva-lali-evgenevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "gorbacheva-lali-evgenevna/",
              },
              seo: {
                title:
                  "Соколова Лали Евгеньевна – стоматолог-терапевт в Звенигороде | Запись на прием",
                desc: "Соколова (Горбачева) Лали Евгеньевна – стоматолог-терапевт, микроскопист, пародонтолог, эндодонтист в Клинике Здоровья Исток в Звенигороде: ✓ лечение во сне  ✓ высокая точность работ любой сложности под оптикой.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Sokolova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Sokolova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 24,
              menuindex: 16,
              menutitle: "",
              pagetitle: "Марченко Оксана Михайловна",
              introtext:
                "к.м.н. , врач-кардиолог,<br>врач функциональной и УЗ-диагностики\r\n\r\n\r\n",
              uri: "marchenko-oksana-mixajlovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "marchenko-oksana-mixajlovna/",
              },
              seo: {
                title:
                  "Марченко Оксана Михайловна – врач кардиолог в Звенигороде | Отзывы, запись на приём",
                desc: "Марченко О.М. – к.м.н., врач-кардиолог, врач УЗ-диагностики, врач высшей категории с опытом работы более 10 лет. Ведет прием в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Marchenko_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Marchenko_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 25,
              menuindex: 37,
              menutitle: "",
              pagetitle: "Иванова Юлия Андреевна",
              introtext:
                "врач-дерматовенеролог,<br>врач-косметолог\r\n\r\n\r\n",
              uri: "ivanova-yuliya-andreevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "ivanova-yuliya-andreevna/",
              },
              seo: {
                title:
                  "Иванова Юлия Андреевна – врач косметолог, дерматовенеролог в Звенигороде | Запись на прием",
                desc: "Иванова Ю.А. – врач–дерматовенеролог, врач–косметолог в Клинике Здоровья Исток в Звенигороде. Опыт работы – более 10 лет. Ведет прием взрослых пациентов и детей. Отзывы, записаться на прием.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Ivanova_Julia_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Ivanova_Julia_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 26,
              menuindex: 1,
              menutitle: "",
              pagetitle: "Артёмкина Елена Ивановна",
              introtext:
                "врач-дерматовенеролог, трихолог, врач-косметолог, гирудотерапевт \r\n\r\n\r\n",
              uri: "artyomkina-elena-ivnovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "artyomkina-elena-ivnovna/",
              },
              seo: {
                title:
                  "Артёмкина Елена Ивновна – врач дерматовенеролог, трихолог, косметолог в Звенигороде",
                desc: "Артёмкина Е.И. – врач-дерматовенеролог, трихолог, врач-косметолог, гирудотерапевт в Клинике Здоровья Исток в Звенигороде. Специалист с опытом работы более 10 лет. Ведёт прием взрослых и детей. ✓  Лечение заболеваний волос и кожи головы. ✓ Инъекции молодости. ✓  Установка мезонитей.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Artyomkina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Artyomkina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 27,
              menuindex: 38,
              menutitle: "",
              pagetitle: "Обухова Нелли Рамильевна",
              introtext:
                "врач-дерматовенеролог,<br>врач-косметолог, трихолог\r\n\r\n\r\n",
              uri: "obuhova-nelli",
              class_key: "modDocument",
              redirect: {
                old_uri: "obuhova-nelli/",
              },
              seo: {
                title:
                  "Обухова Нелли Рамильевна – врач-дерматовенеролог, врач-косметолог в Звенигороде",
                desc: "Обухова Н.Р. – врач-дерматовенеролог, врач-косметолог, трихолог в Клинике Здоровья Исток в Звенигороде. Специалист с большим опытом работы. Ведёт приём взрослых пациентов и детей.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Obuhova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Obuhova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 28,
              menuindex: 0,
              menutitle: "",
              pagetitle: "Сацюк Леонид Дмитриевич",
              introtext:
                "врач-эндокринолог,<br>врач высшей категории\r\n\r\n\r\n",
              uri: "sacyuk-leonid-dmitrievich",
              class_key: "modDocument",
              redirect: {
                old_uri: "sacyuk-leonid-dmitrievich/",
              },
              seo: {
                title:
                  "Сацюк Леонид Дмитриевич – врач эндокринолог в Звенигороде и Одинцово | Запись на прием",
                desc: "Сацюк Л.Д. – врач высшей категории, врач-эндокринолог с опытом работы более 20 лет. Ведёт приём взрослых пациентов в Клинике Здоровья Исток в Звенигороде. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Satsuk_NEW_circle6.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Satsuk_NEW_circle6.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 29,
              menuindex: 73,
              menutitle: "",
              pagetitle: "Погорелова Ольга Олеговна",
              introtext:
                "к.м.н. врач-педиатр,<br>детский врач-инфекционист\r\n\r\n\r\n\r\n",
              uri: "pogorelova-olga-olegovna-2",
              class_key: "modDocument",
              redirect: {
                old_uri: "pogorelova-olga-olegovna-2/",
              },
              seo: {
                title:
                  "Погорелова Ольга Олеговна – врач педиатр в Звенигороде | Отзывы, запись на прием",
                desc: "Погорелова О.О. – к.м.н. врач-педиатр, детский врач-инфекционист в Клинике Здоровья Исток в Звенигороде. Медицинский стаж – более 10 лет.  Ведет прем в Клинике и на дому. Отзывы, записаться на прием.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Pogorelova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Pogorelova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 30,
              menuindex: 42,
              menutitle: "",
              pagetitle: "Шеленков Леонид Николаевич",
              introtext: "мануальный терапевт\r\n\r\n\r\n\r\n\r\n\r\n",
              uri: "shelenkov-leonid-nikolaevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "shelenkov-leonid-nikolaevich/",
              },
              seo: {
                title:
                  "Шеленков Леонид Николаевич – мануальный терапевт в Звенигороде | Запись на прием",
                desc: "Шеленков Л.Н. – мануальный терапевт в Клинике Здоровья Исток в Звенигороде. Опыт работы – более 20 лет. Лечение заболеваний позвоночника и суставов. Отзывы, записаться на приём.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Shelenkov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Shelenkov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 31,
              menuindex: 43,
              menutitle: "",
              pagetitle: "Лозицкая Ирина Валентиновна",
              introtext: "специалист по детскому массажу\r\n\r\n\r\n\r\n\r\n",
              uri: "5894-2",
              class_key: "modDocument",
              redirect: {
                old_uri: "5894-2/",
              },
              seo: {
                title:
                  "Лозицкая Ирина Валентиновна – детский массажист в Звенигороде | Отзывы, запись на прием",
                desc: "Лозицкая И.В. – специалист по детскому массажу в Клинике Здоровья Исток в Звенигороде. Опыт работы – более 20 лет. ★ Общий массаж  ★ Лечебный массаж  ★ Ортопедический массаж  ★ Логопедический массаж. Отзывы, записаться на прием.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Lozitskaya_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Lozitskaya_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 32,
              menuindex: 2,
              menutitle: "",
              pagetitle: "Барвина Ольга Филипповна",
              introtext:
                "главный врач,<br>врач высшей категории\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
              uri: "barvina-olga-filippovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "barvina-olga-filippovna/",
              },
              seo: {
                title:
                  "Барвина Ольга Филипповна - главный врач Клиники Здоровья Исток",
                desc: "Барвина Ольга Филипповна - главный врач Клиники Здоровья Исток в Звенигороде. Врач высшей категории с опытом работы более 30 лет. Занимается терапевтической и ортопедической стоматологией.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/BarvinaOlgaFillipovna_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/BarvinaOlgaFillipovna_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 33,
              menuindex: 11,
              menutitle: "",
              pagetitle: "Гордееня Максим Евгеньевич",
              introtext:
                "врач УЗ-диагностики <br> высшей категории, <br>врач-педиатр",
              uri: "gordeenya-maksim-evgenevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "gordeenya-maksim-evgenevich/",
              },
              seo: {
                title:
                  "Гордееня Максим Евгеньевич – врач высшей категории, педиатр, врач УЗ-диагностики в Звенигороде",
                desc: "Гордееня М.Е – врач высшей категории, педиатр, врач УЗ-диагностики в Клинике Здоровья Исток в Звенигороде. Специалист с опытом работы более 10 лет. Ведет как профилактический приём, так и приём по заболеваниям.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Gordeenya_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Gordeenya_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 34,
              menuindex: 48,
              menutitle: "",
              pagetitle: "Шакарян Татевик Агабековна",
              introtext: "косметолог-эстетист",
              uri: "shakaryan-tatevik-agabekovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "shakaryan-tatevik-agabekovna/",
              },
              seo: {
                title:
                  "Шакарян Татевик Агабековна – косметолог-эстетист в Звенигороде",
                desc: "Уходовые Программы. Аппаратная и инъекционная косметология.Запись на прием. Отзывы.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Shakaryan_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Shakaryan_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 35,
              menuindex: 34,
              menutitle: "",
              pagetitle: "Андреева Анастасия Валентиновна",
              introtext:
                "ведущий специалист, <br> стоматолог-терапевт, ортопед,<br>детский стоматолог",
              uri: "andreeva-anastasiya-valentinovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "andreeva-anastasiya-valentinovna/",
              },
              seo: {
                title:
                  "Андреева Анастасия Валентиновна – врач стоматолог-терапевт Андреева Анастасия Валентиновна | Отзывы, запись на приём",
                desc: "Андреева А.В. – врач стоматолог-терапевт, ортопед, детский врач-стоматолог. Ведет прием маленьких пациентов в Клинике Здоровья Исток. Лечит зубки в седации и во сне – бережно и без боли!",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Andreeva_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Andreeva_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 36,
              menuindex: 35,
              menutitle: "",
              pagetitle: "Смирнова Елена Геннадьевна",
              introtext: "стоматолог-терапевт, хирург, <br>детский стоматолог",
              uri: "smirnovaelenagennadiyevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "smirnovaelenagennadiyevna/",
              },
              seo: {
                title:
                  "Смирнова Елена Геннадьевна - стоматолог-терапевт в Звенигороде",
                desc: "Смирнова Елена Геннадьевна – стоматолог-терапевт, хирург, пародонтолог с опытом работы более 10 лет. Ведет прием детей и взрослых в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ лечение во сне ✓ лечение травмы зубов.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Smirnova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Smirnova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 37,
              menuindex: 45,
              menutitle: "",
              pagetitle: "Колесникова Софья Михайловна",
              introtext: "логопед, дефектолог\r\n\r\n\r\n\r\n",
              uri: "kolesnikova-sm",
              class_key: "modDocument",
              redirect: {
                old_uri: "kolesnikova-sm/",
              },
              seo: {
                title:
                  "Колесникова Софья Михайловна – логопед дефектолог в Звенигороде | Записаться на прием",
                desc: "Колесникова С.М. – логопед, дефектолог в Клинике Здоровья Исток в Звенигороде. Имеет опыт работы сурдопедагогом, тифлопедагогом, с детьми со сложными речевыми и поведенческими нарушениями. ★ Диагностические занятия ★ Запуск речи ★  Логопедический массаж.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kolesnikova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kolesnikova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 38,
              menuindex: 36,
              menutitle: "",
              pagetitle: "Тараканова Мария Юрьевна",
              introtext:
                "врач акушер-гинеколог, врач УЗ-диагностики, <br>ведущий специалист\r\n",
              uri: "tarakanova-mariya-yurevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "tarakanova-mariya-yurevna/",
              },
              seo: {
                title:
                  "Тараканова Мария Юрьевна – врач-гинеколог в Звенигороде | Запись на прием, отзывы",
                desc: "Тараканова Мария Юрьевна – врач акушер-гинеколог, врач УЗ-диагностики с опытом работы более 10 лет. Ведет приём в Клинике Здоровья Исток в Звенигороде: ✓ подготовка и ведение беременности ✓ коррекция гормональных нарушений ✓ цервикометрия ✓ фолликулометрия ✓ допплерометрия.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Tarakanova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Tarakanova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 39,
              menuindex: 46,
              menutitle: "",
              pagetitle: "Черемухина Мария Вячеславовна",
              introtext: "процедурная медсестра\r\n\r\n\r\n\r\n",
              uri: "cheremuhinamv",
              class_key: "modDocument",
              redirect: {
                old_uri: "cheremuhinamv/",
              },
              seo: {
                title:
                  "Черемухина Мария Вячеславовна – процедурная медсестра в Звенигороде | Запись на прием",
                desc: "Черемухина Мария Вячеславовна – процедурная медсестра в Клинике Здоровья Исток. Ведет прием взрослых пациентов и детей. Все виды анализов, диагностических исследований в Звенигороде. Отзывы, записаться на прием.\r\n",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Cheremuhina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Cheremuhina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 40,
              menuindex: 4,
              menutitle: "",
              pagetitle: "Белоус Виктор Иванович",
              introtext: "врач-невролог",
              uri: "belous-viktor-ivanovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "belous-viktor-ivanovich/",
              },
              seo: {
                title:
                  "Белоус Виктор Иванович – врач-невролог в Звенигороде | Запись на прием, отзывы",
                desc: "Белоус Виктор Иванович – врач-невролог с опытом работы более 10 лет. Ведёт приём в Клинике Здоровья Исток в Звенигороде. Обратитесь к доктору, если у вас наблюдаются: ✓ головокружения ✓ плохая память ✓ нарушения координации ✓ боли в позвоночнике.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Belous_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Belous_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 41,
              menuindex: 7,
              menutitle: "",
              pagetitle: "Ледуховская Евгения Владимировна",
              introtext: "врач-отоларинголог</br>",
              uri: "leduxovskaya-evgeniya-vladimirovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "leduxovskaya-evgeniya-vladimirovna/",
              },
              seo: {
                title:
                  "Ледуховская Евгения Владимировна – врач-отоларинголог в Звенигороде | Запись на прием и отзывы",
                desc: "Ледуховская Е.В. – ЛОР-врач (отоларинголог) с опытом работы более 10 лет. Ведет прием взрослых и детей с рождения в Звенигороде в Клинике Здоровья Исток. Навыки доктора: ✓ диагностика и лечение ЛОР-заболеваний ✓ экстренная помощь при травмах ЛОР-органов.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Ledouhovskaya_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Ledouhovskaya_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 42,
              menuindex: 50,
              menutitle: "",
              pagetitle: "Соболев Денис Евгеньевич",
              introtext: "врач функциональной диагностики",
              uri: "sobolev-denis-evgenevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "sobolev-denis-evgenevich/",
              },
              seo: {
                title:
                  "Соболев Денис Евгеньевич – врач функциональной диагностики в Звенигороде",
                desc: "Врач функциональной диагностики Соболев Денис Евгеньевич ведет приме в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ диагностика заболеваний сердца ✓ профилактические обследования сердца ✓ ЭКГ ✓ ЭХО-кардиография ✓ холтеровское мониторирование ✓ СМАД.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Sobolev_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Sobolev_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 43,
              menuindex: 51,
              menutitle: "",
              pagetitle: "Иванова Алена Евгеньевна",
              introtext: "стоматолог-терапевт, эндодонтист-микроскопист",
              uri: "ivanova-alena-evgenevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "ivanova-alena-evgenevna/",
              },
              seo: {
                title:
                  "Иванова Алена Евгеньевна - стоматолог в Звенигороде | Запись на прием, отзывы",
                desc: "Иванова Алена Евгеньевна – стоматолог-терапевт, микроскопист-эндодонтист с опытом работы более 10 лет. Ведет прием в Клинике Здоровья Исток в Звенигороде. С высокой точностью выполняет под оптикой работы любой сложности.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Ivanova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Ivanova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 44,
              menuindex: 56,
              menutitle: "",
              pagetitle: "Корякина Наталия Александровна",
              introtext: "врач-педиатр",
              uri: "koryakina-nataliya-aleksandrovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "koryakina-nataliya-aleksandrovna/",
              },
              seo: {
                title:
                  "Корякина Наталия Александровна – врач-педиатр в Звенигороде | Отзывы, запись на прием",
                desc: "Корякина Наталия Александровна – врач-педиатр с опытом работы более 10 лет. Ведёт приём в Клинике Здоровья Исток в Звенигороде. Постоянно повышает свою квалификацию.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Koryakina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Koryakina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 45,
              menuindex: 54,
              menutitle: "",
              pagetitle: "Агабабян Аида Араиковна",
              introtext: "стоматолог-ортодонт",
              uri: "agababyan-aida-araikovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "agababyan-aida-araikovna/",
              },
              seo: {
                title:
                  "Агабабян Аида Араиковна - врач стоматолог-ортодонт в Звенигороде",
                desc: "Врач-ортодонт Агабабян Аида Араиковна ведет прием взрослых и детей в Клинике Здоровья Исток в Звенигороде. Ключевые навыки доктора: ✓ установка брекетов  ✓ исправление прикуса. Запись на консультацию по телефону: +7 (495) 597-73-00.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Agababyan_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Agababyan_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 46,
              menuindex: 58,
              menutitle: "",
              pagetitle: "Войтова Екатерина Дмитриевна",
              introtext: "стоматолог-терапевт</br> эндодонтист-микроскопист",
              uri: "vojtova-ekaterina-dmitrievna",
              class_key: "modDocument",
              redirect: {
                old_uri: "vojtova-ekaterina-dmitrievna/",
              },
              seo: {
                title:
                  "Войтова Екатерина Дмитриевна - врач-стоматолог в Звенигороде | Запись на прием, отзывы",
                desc: "Войтова Екатерина Дмитриевна – стоматолог-терапевт, микроскопист-эндодонтист. Ведет прием в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ лечение кариеса, пульпита, периодонтита ✓ реставрация зубов любой сложности ✓ лечение корневых каналов.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Voitova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Voitova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 47,
              menuindex: 61,
              menutitle: "",
              pagetitle: "Гульпа Иван Сергеевич",
              introtext: "стоматолог-ортопед, хирург, имплантолог",
              uri: "gulpa-ivan-sergeevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "gulpa-ivan-sergeevich/",
              },
              seo: {
                title: "Гульпа Иван Сергеевич – врач-стоматолог в Звенигороде",
                desc: "Гульпа Иван Сергеевич – врач-стоматолог в Клинике Здоровья Исток в Звенигороде. Ведёт приём взрослых пациентов. На этой странице вы найдёте отзывы о стоматологе Гульпа И.С. и примеры его работ.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Gulpa_NEW_circle_new.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Gulpa_NEW_circle_new.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 48,
              menuindex: 62,
              menutitle: "",
              pagetitle: "Малихова Диана Вадимовна",
              introtext: "стоматолог-ортодонт",
              uri: "dranichnikova-diana-vadimovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "dranichnikova-diana-vadimovna/",
              },
              seo: {
                title:
                  "Врач-стоматолог, ортодонт Драничникова Диана Вадимовна, Звенигород",
                desc: "Примеры работ, отзывы о стоматологе-ортодонте Драничниковой Д.В. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Malihova_NEW_circle_2.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Malihova_NEW_circle_2.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 49,
              menuindex: 64,
              menutitle: "",
              pagetitle: "Терехова Татьяна Леонтьевна",
              introtext: "стоматолог-терапевт, </br> эндодонтист-микроскопист",
              uri: "terexova-tatyana-leontevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "terexova-tatyana-leontevna/",
              },
              seo: {
                title:
                  "Терехова Татьяна Леонтьевна – врач-стоматолог в Звенигороде | Запись на прием",
                desc: "Тереховой T.Л. – врач-стоматолог, эндодонтист-микроскопист в Клинике Здоровья Исток в Звенигороде. Отзывы, примеры работ, записаться на прием.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Terehova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Terehova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 50,
              menuindex: 20,
              menutitle: "",
              pagetitle: "Ильин Сергей Юрьевич",
              introtext:
                "к.м.н., <br> врач аллерголог-иммунолог, <br>терапевт,  диетолог",
              uri: "ilin-sergej-yurevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "ilin-sergej-yurevich/",
              },
              seo: {
                title:
                  " Ильин Сергей Юрьевич – аллерголог-иммунолог, терапевт, диетолог в Звенигороде | Отзывы, запись на прием",
                desc: "Ильин С.Ю. – к.м.н., аллерголог-иммунолог, терапевт, диетолог с опытом работы более 10 лет. Ведет прием взрослых пациентов и детей в Клинике Здоровья Исток в Звенигороде. ✓ Лечение аллергии. ✓ АСИТ-терапия. ✓ Лечение аутоиммунных заболеваний. ✓ Консультация врача-терапевта.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Illin_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Illin_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 51,
              menuindex: 5,
              menutitle: "",
              pagetitle: "Халиулин Артём Ренатович",
              introtext: "стоматолог-терапевт",
              uri: "xaliulin-artem-renatovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "xaliulin-artem-renatovich/",
              },
              seo: {
                title:
                  "Халиулин Артём Ренатович - врач-стоматолог в Звенигороде | Запись на прием, отзывы",
                desc: "Халиулин Артём Ренатович – врач-стоматолог в Клинике Здоровья Исток в Звенигороде. ✓ прием взрослых пациентов ✓ лечение кариеса ✓ эндодонтия",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Haliulin_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Haliulin_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 52,
              menuindex: 6,
              menutitle: "",
              pagetitle: "Юрков Павел Сергеевич",
              introtext:
                "к.м.н.,<br>врач УЗ-диагностики, <br>уролог-андролог, детский хирург, <br>врач высшей категории\r\n\r\n",
              uri: "yurkov-pavel-sergeevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "yurkov-pavel-sergeevich/",
              },
              seo: {
                title:
                  "Юрков Павел Сергеевич – врач узи-диагност, уролог-андролог, хирург в Звенигороде",
                desc: "Юрков Павел Сергеевич – к.м.н., врач УЗ-диагностики, уролог-андролог, детский хирург, врач высшей категории: ✓ опыт работы более 10 лет  ✓ прием детей. Профессиональный, неравнодушный доктор!",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Yurkov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Yurkov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 53,
              menuindex: 65,
              menutitle: "",
              pagetitle: "Каратаева Маргарита Юрьевна",
              introtext:
                "ведущий специалист, <br>детский стоматолог, стоматолог-терапевт",
              uri: "karataeva-margarita-yurevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "karataeva-margarita-yurevna/",
              },
              seo: {
                title:
                  "Каратаева Маргарита Юрьевна - стоматолог-терапевт в Звенигороде | Запись на прием, отзывы",
                desc: "Каратаева Маргарита Юрьевна – стоматолог-терапевт, детский стоматолог. Ведет прием в Клинике Здоровья Исток в Звенигороде. Ключевые навыки: ✓ лечение во сне ✓ высокая точность работ любой сложности под оптикой.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Karataeva_NEW_2024_circle-111.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Karataeva_NEW_2024_circle-111.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 54,
              menuindex: 67,
              menutitle: "",
              pagetitle: "Ильина Екатерина Олеговна",
              introtext:
                "врач-терапевт, гастроэнтеролог, <br>ведущий специалист",
              uri: "ilina-ekaterina-olegovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "ilina-ekaterina-olegovna/",
              },
              seo: {
                title:
                  "Ильина Екатерина Олеговна - врач-терапевт в Звенигороде | Запись на прием, отзывы",
                desc: "Ильина Екатерина Олеговна – врач-терапевт, гастроэнтеролог в Клинике Здоровья Исток в Звенигороде. Ведет прием пациентов в Клинике и на дому.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Illina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Illina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 55,
              menuindex: 55,
              menutitle: "",
              pagetitle: "Балан Евгения Георгиевна",
              introtext: "процедурная медсестра </br>\r\nвысшая категория",
              uri: "balan-evgeniya-aleksandrovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "balan-evgeniya-aleksandrovna/",
              },
              seo: {
                title:
                  "Балан Евгения Георгиевна - процедурная медсестра в Звенигороде",
                desc: "Балан Евгения Георгиевна – процедурная медсестра высшей категории с опытом работы более 10 лет. ✓ прием детей ✓ лабораторная диагностика ✓ востребованные виды анализов ✓ постановка капельниц",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Balan_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Balan_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 56,
              menuindex: 57,
              menutitle: "",
              pagetitle: "Лихачёва Ксения Викторовна",
              introtext:
                "врач-кардиолог, <br> врач функциональной диагностики высшей категории",
              uri: "lixachyova-kseniya-viktorovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "lixachyova-kseniya-viktorovna/",
              },
              seo: {
                title:
                  "Лихачёва Ксения Викторовна - врач-кардиолог в Звенигороде | Запись на прием, отзывы",
                desc: "Лихачёва Ксения Викторовна - врач-кардиолог, врач функциональной диагностики, врач высшей категории с опытом работы более 10 лет. Выезжает на дом по предварительной записи. Обратитесь к доктору при следующих симптомах: ✓ боли в области сердца ✓ повышенное АД ✓ одышка ✓ повышенный холестерин.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Lihachova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Lihachova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 57,
              menuindex: 60,
              menutitle: "",
              pagetitle: "Мохов Константин Олегович",
              introtext:
                "к.м.н. врач-невролог, </br> эпилептолог, </br> врач функциональной диагностики",
              uri: "moxov-konstantin-olegovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "moxov-konstantin-olegovich/",
              },
              seo: {
                title:
                  "Мохов Константин Юрьевич – кмн, врач невролог, эпилептолог в Звенигороде | Запись на прием",
                desc: "Мохов К.Ю. – к.м.н., врач-невролог, эпилептолог, врач функциональной диагностики. Специалист с опытом работы более 10 лет. Ведет прием взрослых и детей в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Mohov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Mohov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 58,
              menuindex: 69,
              menutitle: "",
              pagetitle: "Гурская Екатерина Максимовна",
              introtext: "детский стоматолог",
              uri: "gurskaya-ekaterina-maksimovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "gurskaya-ekaterina-maksimovna/",
              },
              seo: {
                title:
                  "Гурская Екатерина Максимовна – детский врач стоматолог-гигиенист в Звенигороде",
                desc: "Гурская Екатерина Максимовна – детский врач-стоматолог, стоматолог-гигиенист. Ведёт приём маленьких пациентов в Клинике Здоровья Исток в Звенигороде. Учит деток правильно чистить зубки!",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Gurskaya_NEW_circle3.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Gurskaya_NEW_circle3.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 59,
              menuindex: 71,
              menutitle: "",
              pagetitle: "Молчанова Екатерина Борисовна",
              introtext: "к.м.н., врач-отоларинголог",
              uri: "molchanova-ekaterina-borisovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "molchanova-ekaterina-borisovna/",
              },
              seo: {
                title:
                  "Молчанова Екатерина Борисовна – кмн, врач-отоларинголог в Звенигороде",
                desc: "Молчанова Е.Б. – кандидат медицинских наук, ЛОР-врач (отоларинголог) с опытом работы более 10 лет. Ведёт прием детей и взрослых в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Molchanova_circle!.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Molchanova_circle%21.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 60,
              menuindex: 72,
              menutitle: "",
              pagetitle: "Лучкова Александра Юрьевна",
              introtext: "врач-эндокринолог",
              uri: "luchkova-aleksandra-yurevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "luchkova-aleksandra-yurevna/",
              },
              seo: {
                title:
                  "Лучкова Александра Юрьевна – врач-эндокринолог в Звенигороде | Отзывы, запись на прием",
                desc: "Лучкова Александра Юрьевна – врач-эндокринолог с опытом работы более 10 лет. Ведет прием в Клинике Здоровья Исток в Звенигороде. Занимается лечением пациентов с сахарным диабетом, ожирением, патологиями щитовидной железы, остеопорозом, гормональными нарушениями и т.д.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Luchkova_NEW_circle_1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Luchkova_NEW_circle_1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 61,
              menuindex: 76,
              menutitle: "",
              pagetitle: "Цуканков Сергей Александрович",
              introtext: "стоматолог-хирург, имплантолог, ортопед",
              uri: "czukankov-sergej-aleksandrovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "czukankov-sergej-aleksandrovich/",
              },
              seo: {
                title:
                  "Цуканков Сергей Александрович - врач-стоматолог в Звенигороде | Запись на прием",
                desc: "Цуканков Сергей Александрович – стоматолог-хирург, ортопед. Ведет прием в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ цифровая стоматология: 3D-протезирование ✓ лечение кариеса и удаление зубов.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Tsukankov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Tsukankov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 62,
              menuindex: 79,
              menutitle: "",
              pagetitle: "Тимаев Руслан Владимирович",
              introtext: "врач-остеопат",
              uri: "timaev-ruslan-vladimirovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "timaev-ruslan-vladimirovich/",
              },
              seo: {
                title:
                  "Тимаев Руслан Владимирович - врач-остеопат в Звенигороде | Запись на прием, отзывы",
                desc: "Тимаев Руслан Владимирович – врач-остеопат с опытом работы более 10 лет. Ведет прием взрослых и детей в Клинике Здоровья Исток в Звенигороде. Постоянно повышает свою квалификацию.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Timaev_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Timaev_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 63,
              menuindex: 81,
              menutitle: "",
              pagetitle: "Мамедов Маджит",
              introtext:
                "стоматолог-терапевт, хирург, </br> ортопед, имплантолог",
              uri: "mamedov-madzhit",
              class_key: "modDocument",
              redirect: {
                old_uri: "mamedov-madzhit/",
              },
              seo: {
                title:
                  "Маджит Мамедов - врач-стоматолог в Звенигороде | Запись на прием, отзывы",
                desc: "Маджит Мамедов – стоматолог-терапевт, хирург, ортопед, имплантолог. Ведет прием в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ удаление зубов любой сложности ✓ все виды имплантации ✓ высокая точность работ любой сложности под оптикой.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Mamedov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Mamedov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 64,
              menuindex: 82,
              menutitle: "",
              pagetitle: "Марченко (Пырсина) Юлия Александровна",
              introtext:
                "врач-гинеколог,  <br>врач УЗ-диагностики, <br>детский гинеколог",
              uri: "pyirsina-yuliya-aleksandrovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "pyirsina-yuliya-aleksandrovna/",
              },
              seo: {
                title:
                  "Марченко (Пырсина ) Юлия Александровна – врач-гинеколог в Звенигороде | Запись на прием, отзывы",
                desc: "Юлия Александровна Марченко (Пырсина) – врач-гинеколог, врач УЗ-диагностики, детский гинеколог с опытом работы более 10 лет. Ведет прием в Клинике Здоровья Исток в Звенигороде. ✓ Прием детей с 0+ лет. ✓ Прием взрослых пациентов.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Pyrsina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Pyrsina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 65,
              menuindex: 83,
              menutitle: "",
              pagetitle: "Фаизова Лилия Талгатовна",
              introtext: "к.м.н., врач-педиатр",
              uri: "faizova-liliya-talgatovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "faizova-liliya-talgatovna/",
              },
              seo: {
                title:
                  "Фаизова Лилия Талгатовна - педиатр, детский нефролог в Звенигороде | Запись на прием, отзывы",
                desc: "Фаизова Лилия Талгатовна – кандидат медицинских наук, врач-педиатр, детский нефролог с опытом работы более 10 лет, ведет прием в Клинике Здоровья Исток в Звенигороде. Выезжает на дом по предварительной записи.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Faizova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Faizova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 66,
              menuindex: 85,
              menutitle: "",
              pagetitle: "Маслова Ирина Юрьевна",
              introtext: "процедурная медсестра",
              uri: "maslova-irina-yurevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "maslova-irina-yurevna/",
              },
              seo: {
                title:
                  "Маслова Ирина Юрьевна - процедурная медсестра в Звенигороде",
                desc: "Маслова Ирина Юрьевна, процедурная медсестра в Клинике Здоровья Исток в Звенигороде.\r\n✓ лабораторная диагностика  ✓ востребованные виды анализов  ✓капельницы  ✓комплексные программы исследований",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Maslova_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Maslova_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 67,
              menuindex: 87,
              menutitle: "",
              pagetitle: "Цурган (Банных) Елена Олеговна",
              introtext: "врач-дерматовенеролог, <br>косметолог, трихолог",
              uri: "bannyix-elena-olegovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "bannyix-elena-olegovna/",
              },
              seo: {
                title:
                  "Банных Елена Олеговна – врач-дерматолог, косметолог в Звенигороде ",
                desc: "Банных Елена Олеговна – врач-дерматолог, косметолог в Клинике Здоровья Исток в Звенигороде. Навыки доктора: ✓ контурная пластика  ✓ ботулинотерапия  ✓ химические пилинги  ✓ биоревитализация (биорепарация)  ✓ алмазная микродермабразия ✓ радиоволновое удаление образований.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Bannih_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Bannih_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 68,
              menuindex: 90,
              menutitle: "",
              pagetitle: "Рыбачук Наталья Евгеньевна",
              introtext: "стоматолог-терапевт, стоматолог-гигиенист",
              uri: "ryibachuk-natalya-evgenevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "ryibachuk-natalya-evgenevna/",
              },
              seo: {
                title:
                  "Рыбачук Наталья Евгеньевна – врач-стоматолог в Звенигороде",
                desc: "Рыбачук Наталья Евгеньевна  – врач-стоматолог, стоматолог-гигиенист в Клинике Здоровья Исток в Звенигороде. ✓ эстетическая реставрация зубов ✓ профгигиена полости рта ✓ эндодонтическое лечение.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Rybachuk_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Rybachuk_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 69,
              menuindex: 9,
              menutitle: "",
              pagetitle: "Абазов Вагиф Фирдовсиевич",
              introtext: "врач-уролог, <br>врач УЗ-диагностики",
              uri: "abazov-vagif-firdovsievich",
              class_key: "modDocument",
              redirect: {
                old_uri: "abazov-vagif-firdovsievich/",
              },
              seo: {
                title: "Абазов Вагиф Фирдовси-оглы – врач-уролог в Звенигороде",
                desc: "Абазов В.Ф. – врач уролог-андролог в  Клинике Здоровья Исток в Звенигороде. Занимается диагностикой и лечением заболеваний органов мочеполовой и мочевыделительной системы, вопросами бесплодия в браке.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Abazov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Abazov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 70,
              menuindex: 93,
              menutitle: "",
              pagetitle: "Соколов Виталий Владиславович",
              introtext: "врач-офтальмолог",
              uri: "sokolov-vitalij-vyacheslavovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "sokolov-vitalij-vyacheslavovich/",
              },
              seo: {
                title:
                  "Соколов Виталий Владиславович – врач офтальмолог в Звенигороде",
                desc: "Доктор Соколов В.В. ведёт прием взрослых и детей в Клинике Здоровья Исток в Звенигороде г.о. Одинцово. Опыт работы Виталия Владиславовича – более 10 лет. ✓ диагностика на современном оборудовании ✓ лечение широкого спектра офтальмологических заболеваний ✓ подбор очков и контактных линз. Отзывы, запись на прием.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Sokolov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Sokolov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 71,
              menuindex: 92,
              menutitle: "",
              pagetitle: "Гришина Ольга Алексеевна",
              introtext: "врач-хирург, флеболог, <br>врач УЗ-диагностики",
              uri: "grishina-olga-alekseevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "grishina-olga-alekseevna/",
              },
              seo: {
                title:
                  "Гришина Ольга Алексеевна – хирург, флеболог в Звенигороде | Запись на прием",
                desc: "Гришина О.А. – врач-хирург, флеболог, врач УЗ-диагностики с медицинским опытом более 10 лет. Ведет прием взрослых пациентов в Клинике Здоровья Исток в Звенигороде. Лечение гнойно-воспалительных процессов, заболеваний органов ЖКТ, сосудов нижних конечностей, суставов. Отзывы, записаться на приём.\r\n",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Grishina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Grishina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 72,
              menuindex: 63,
              menutitle: "",
              pagetitle: "Санду Елена Андреевна",
              introtext:
                "к.м.н., врач-невролог, цефалголог, эпилептолог, остеопат",
              uri: "sandu-elena-andreevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "sandu-elena-andreevna/",
              },
              seo: {
                title:
                  "Санду Елена Андреевна – невролог, остеопат в Звенигороде",
                desc: "Санду Е.А. – к.м.н., врач-невролог, цефалголог, эпилептолог и остеопат с опытом работы более 10 лет. Ведет прием взрослых пациентов в Клинике Здоровья исток в Звенигороде. Ключевые направления работы: ✓ различные виды цефалгий (в т.ч. мигрени)  ✓ соматоформные тревожные расстройства ✓ болезни позвоночника ✓  эпилепсия.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Sandu_NEW_circle_NEW.jpg",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Sandu_NEW_circle_NEW.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 73,
              menuindex: 65,
              menutitle: "",
              pagetitle: "Асадов Элджан Арифович",
              introtext: "стоматолог-ортодонт",
              uri: "eldzhan-asadov",
              class_key: "modDocument",
              redirect: {
                old_uri: "eldzhan-asadov/",
              },
              seo: {
                title:
                  "Асадов Элджан Арифович – стоматолог-ортодонт в Звенигороде | Отзывы и запись на прием",
                desc: "Асадов Э.А. – врач стоматолог-ортодонт в Клинике Здоровья Исток в Звенигороде. Ведёт приём взрослых пациентов и детей с 6 лет. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Asadov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Asadov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 74,
              menuindex: 67,
              menutitle: "",
              pagetitle: "Селевич Николай Николаевич",
              introtext: "врач анестезиолог-реаниматолог",
              uri: "selevich-nikolaj-nikolaevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "selevich-nikolaj-nikolaevich/",
              },
              seo: {
                title:
                  "Селевич Николай Николаевич – анестезиолог-реаниматолог в Звенигороде",
                desc: "Селевич Н.Н. – врач анестезиолог-реаниматолог, который работает как со взрослыми пациентами, так и с детьми. Стаж работы – с 2014 года. Доктор имеет большой опыт в детской анестезиологии-реанимации. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Selevich_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Selevich_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 75,
              menuindex: 69,
              menutitle: "",
              pagetitle: "Ашмарина Наталья Вениаминовна",
              introtext: "врач-гинеколог, <br>\r\nгинеколог-эндокринолог",
              uri: "ashmarina-natalya-veniaminovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "ashmarina-natalya-veniaminovna/",
              },
              seo: {
                title:
                  "Ашмарина Наталья Вениаминовна – врач гинеколог в Звенигороде",
                desc: "Ашмарина Н.В. – врач-гинеколог, гинеколог-эндокринолог, врач УЗ-диагностики, детский гинеколог с опытом работы более 30 лет. Ведёт прием взрослых и детей в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Ashmarina_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Ashmarina_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 76,
              menuindex: 70,
              menutitle: "",
              pagetitle: "Прощенков Алексей Евгеньевич",
              introtext: "стоматолог-хирург, <br>\r\nимплантолог",
              uri: "proshhenkov-aleksej-evgenevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "proshhenkov-aleksej-evgenevich/",
              },
              seo: {
                title:
                  "Прощенков Алексей Евгеньевич – стоматолог хирург в Звенигороде",
                desc: "Прощенков А.Е. – врач-стоматолог, хирург, ведет прием взрослых и детей в Клинике Здоровья Исток в Звенигороде. Ключевые направления работы: ✓ имплантация зубов ✓ удаление зубов ✓ синус-лифтинг ✓ костная пластика ✓ лечение кариеса ✓ профгигиена.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Proshenkov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Proshenkov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 77,
              menuindex: 71,
              menutitle: "",
              pagetitle: "Кузнецов Борис Владимирович",
              introtext: "врач-кардиолог",
              uri: "kuzneczov-boris-vladimirovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "kuzneczov-boris-vladimirovich/",
              },
              seo: {
                title:
                  "Кузнецов Борис Владимирович – врач кардиолог в Звенигороде",
                desc: "Кузнецов Б.В. – врач-кардиолог с опытом работы более 30 лет. Ведёт прием взрослых пациентов в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kuznetsov_NEW_circle.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kuznetsov_NEW_circle.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 78,
              menuindex: 74,
              menutitle: "",
              pagetitle: "Якушева Елена Гарьевна",
              introtext: "к.м.н., врач-отоларинголог",
              uri: "yakusheva-elena-garievna",
              class_key: "modDocument",
              redirect: {
                old_uri: "yakusheva-elena-garievna/",
              },
              seo: {
                title:
                  "Якушева Елена Гариевна – кмн, врач отоларинголог в Звенигороде | Записаться на прием",
                desc: "Якушева Е.Г. – кандидат медицинских наук (к.м.н.), врач-отоларинголог. Ведёт прием взрослых пациентов и детей с 0 лет в Клинике Здоровья Исток в Звенигороде. Медицинский стаж – с 1998 года. ✓ Лечение заболеваний ЛОР-органов. ✓ Удаление инородных тел. ✓ Лечение привычки к сосудосуживающим препаратам.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Yakusheva_NEW_circle_1111.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Yakusheva_NEW_circle_1111.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 79,
              menuindex: 75,
              menutitle: "",
              pagetitle: "Рожкова Кристина Александровна",
              introtext: "врач-терапевт",
              uri: "rozhkova-kristina-aleksandrovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "rozhkova-kristina-aleksandrovna/",
              },
              seo: {
                title:
                  "Рожкова Кристина Александровна – врач терапевт в Звенигороде | Отзывы, запись на прием",
                desc: "Рожкова К.А.– врач-терапевт в Клинике Здоровья Исток в Звенигороде. Ведет прием взрослых пациентов в Клинике и на дому.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Rojkova_NEW_circle_1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Rojkova_NEW_circle_1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 80,
              menuindex: 76,
              menutitle: "",
              pagetitle: "Василенко (Кондрашова) <br>Елизавета Сергеевна",
              introtext: "стоматолог-ортодонт",
              uri: "kondrashova-elizaveta-sergeevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "kondrashova-elizaveta-sergeevna/",
              },
              seo: {
                title:
                  "Василенко (Кондрашова) Елизавета Сергеевна – врач-ортодонт в Звенигороде | Отзывы, записаться на приём",
                desc: "Василенко Е.С. – врач-ортодонт, ведёт приём взрослых и детей в Клинике Здоровья Исток в Звенигороде. ✓ Создание эстетики улыбки. ✓ Исправление прикуса. ✓ Лечение на брекетах, элайнерах, съемных и несъемных ортодонтических аппаратах.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kondrashova_NEW_circle_2.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kondrashova_NEW_circle_2.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 81,
              menuindex: 78,
              menutitle: "",
              pagetitle: "Нечкин Виталий Юрьевич",
              introtext: "стоматолог-хирург, имплантолог",
              uri: "nechkin-vitalij-yurevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "nechkin-vitalij-yurevich/",
              },
              seo: {
                title:
                  "Нечкин Виталий Юрьевич – стоматолог хирург, имплантолог в Звенигороде | Записаться на прием",
                desc: "Нечкин В.Ю. – стоматолог-хирург, имплантолог, ведет прием взрослых пациентов в Клинике Здоровья исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Nechkin_NEW_circle_2.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Nechkin_NEW_circle_2.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 82,
              menuindex: 77,
              menutitle: "",
              pagetitle: "Тимохина Татьяна Юрьевна",
              introtext:
                "врач-кардиолог, врач-терапевт,<br>врач функциональной диагностики первой категории",
              uri: "timoxina-tatyana-yurevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "timoxina-tatyana-yurevna/",
              },
              seo: {
                title:
                  "Тимохина Татьяна Юрьевна – врач кардиолог, врач функциональной диагностики в Звенигороде",
                desc: "Тимохина Т.Ю. – врач-кардиолог и врач функциональной диагностики с опытом работы более 10 лет. Ведёт прием пациентов в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Tmokhina_NEW_circle_1_1_1_1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Tmokhina_NEW_circle_1_1_1_1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 83,
              menuindex: 78,
              menutitle: "",
              pagetitle: "Какубава Лариса Алексеевна",
              introtext: "врач УЗ-диагностики, врач-терапевт",
              uri: "kakubava-larisa-alekseevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "kakubava-larisa-alekseevna/",
              },
              seo: {
                title:
                  "Какубава Лариса Алексеевна – врач ультразвуковой диагностики и врач терапевт в Звенигороде",
                desc: "Какубава Л.А. – врач ультразвуковой диагностики врач-терапевт с медицинским стажем более 45 лет. Ведёт приём взрослых пациентов и детей с 3 лет в Клинике Здоровья Исток в Звенигороде. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kakubava_NEW_circle_1-1-1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kakubava_NEW_circle_1-1-1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 84,
              menuindex: 82,
              menutitle: "",
              pagetitle: "Сапронов Николай Николаевич",
              introtext: "врач анестезиолог-реаниматолог",
              uri: "sapronov-nikolaj-nikolaevich",
              class_key: "modDocument",
              redirect: {
                old_uri: "sapronov-nikolaj-nikolaevich/",
              },
              seo: {
                title:
                  "Сапронов Николай Николаевич – анестезиолог-реаниматолог в Звенигороде | Записаться на прием",
                desc: "Сапронов Н.Н. – врач анестезиолог-реаниматолог в Клинике Здоровья Исток в Звенигороде. Доктор вводит пациентов в наркоз или в седацию и контролирует их состояние во время выполнения стоматологических процедур. ",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Sapronov_NEW_circle_1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Sapronov_NEW_circle_1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 85,
              menuindex: 84,
              menutitle: "",
              pagetitle: "Кишнёва Мария Дмитриевна",
              introtext: "детский нейропсихолог",
              uri: "kishneva-mariya-dmitrievna",
              class_key: "modDocument",
              redirect: {
                old_uri: "kishneva-mariya-dmitrievna/",
              },
              seo: {
                title: "",
                desc: "",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kishnyova_NEW_circle_1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kishnyova_NEW_circle_1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 86,
              menuindex: 84,
              menutitle: "",
              pagetitle: "Пантелеев Дмитрий Львович",
              introtext: "врач-уролог, андролог, венеролог",
              uri: "panteleev-dmitrij-lvovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "panteleev-dmitrij-lvovich/",
              },
              seo: {
                title:
                  "Пантелеев Дмитрий Львович – врач уролог в Звенигороде | Отзывы, записаться на прием",
                desc: "Пантелеев Д.Л. – врач уролог-андролог с опытом работы более 20 лет. Доктор специализируется на лечении заболеваний мужской половой системы. Дмитрий Львович ведёт приём взрослых пациентов в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Panteleev_NEW_circle_1-1-new.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Panteleev_NEW_circle_1-1-new.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 87,
              menuindex: 86,
              menutitle: "",
              pagetitle: "Наумова Елена Сергеевна",
              introtext: "стоматолог-терапевт",
              uri: "naumova-elena-sergeevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "naumova-elena-sergeevna/",
              },
              seo: {
                title:
                  "Наумова Елена Сергеевна – стоматолог терапевт в Звенигороде | Записаться на прием, отзывы",
                desc: "Наумова Е.С. – врач стоматолог-терапевт с опытом работы более 20 лет. Ведет прием взрослых пациентов в Клинике Здоровья Исток в Звенигороде.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Naumova_NEW_circle_2.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Naumova_NEW_circle_2.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 88,
              menuindex: 88,
              menutitle: "",
              pagetitle: "Тарасова Асиат Тамерлановна",
              introtext: "врач-хирург, флеболог, <br>\r\nврач УЗ-диагностики",
              uri: "tarasova-asiat-tamerlanovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "tarasova-asiat-tamerlanovna/",
              },
              seo: {
                title:
                  "Тарасова Асиат Тамерлановна – врач флеболог в Звенигороде и Одинцово ❘ Записаться на прием ❘ Отзывы пациентов",
                desc: "Тарасова А.Т. – врач-флеболог, хирург, врач УЗ-диагностики с опытом работы более 20 лет. Ведет прием взрослых пациентов в Клинике Здоровья Исток в Звенигороде. ✓ ЭВЛК. ✓ Склеротерапия вен и сосудистых звездочек. ✓ УЗДГ вен нижних конечностей.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Tarasova_NEW_2024_circle-222.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Tarasova_NEW_2024_circle-222.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 89,
              menuindex: 89,
              menutitle: "",
              pagetitle: "Курбанкадиева Камила Курбанкадиевна",
              introtext: "стоматолог-гигиенист",
              uri: "kurbankadieva-kamila-kurbankadievna",
              class_key: "modDocument",
              redirect: {
                old_uri: "kurbankadieva-kamila-kurbankadievna/",
              },
              seo: {
                title:
                  "Курбанкадиева Камила Курбанкадиевна – стоматолог гигиенист в Звенигороде и Одинцово",
                desc: "Курбанкадиева К.К. – врач стоматолог-гигиенист в Клинике Здоровья Исток в Звенигороде. Ведёт прием взрослых пациентов. Основное направление работы – профессиональная гигиена полости рта.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Kurbankadieva_NEW_2025_circle-1-6.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Kurbankadieva_NEW_2025_circle-1-6.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 90,
              menuindex: 90,
              menutitle: "",
              pagetitle: "Сидоренко Дарина Михайловна",
              introtext: "врач-дерматовенеролог, косметолог,\r\nтрихолог",
              uri: "sidorenko-darina-mixajlovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "sidorenko-darina-mixajlovna/",
              },
              seo: {
                title:
                  "Сидоренко Дарина Михайловна – врач-дерматолог, косметолог в Звенигороде  ❘ Записаться на прием ❘ Отзывы пациентов",
                desc: "Сидоренко Д.М. – врач-дерматолог, косметолог, трихолог. Ведёт приём взрослых пациентов и детей с рождения в Клинике Здоровья Исток в Звенигороде. ✓ Диагностика и лечение дерматологических заболеваний. ✓ Удаление образований кожи. ✓ Чистки лица, пилинги, мезотерапия, биоревитализация и др.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Sidorenko_NEW_2025_circle-8.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Sidorenko_NEW_2025_circle-8.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 91,
              menuindex: 91,
              menutitle: "",
              pagetitle: "Цинганис Евгения Димитриосовна",
              introtext: "стоматолог-терапевт",
              uri: "czinganis-evgeniya-dimitriosovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "czinganis-evgeniya-dimitriosovna/",
              },
              seo: {
                title:
                  "Цинганис Евгения Димитриосовна – врач стоматолог в Звенигороде ❘ Записаться на прием ❘ Отзывы пациентов",
                desc: "Цинганис Е.Д. – врач стоматолог-терапевт. Ведёт приём взрослых пациентов в Клинике Здоровья Исток в Звенигороде.  ✓ Лечение кариеса, пульпита, периодонтита. ✓ Реставрация зубов. ✓ Отбеливание зубов. ✓ Профгигиена полости рта. ✓ Эндодонтическое лечение.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Tsinganis_NEW_2025_circle-2.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Tsinganis_NEW_2025_circle-2.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 92,
              menuindex: 93,
              menutitle: "",
              pagetitle: "Стародубов Алексей Петрович",
              introtext: "стоматолог-ортопед, имплантолог, хирург",
              uri: "starodubov-aleksej-petrovich",
              class_key: "modDocument",
              redirect: {
                old_uri: "starodubov-aleksej-petrovich/",
              },
              seo: {
                title:
                  "Стародубов Алексей Петрович – стоматолог ортопед, имплантолог, хирург в Звенигороде и Одинцово",
                desc: "Стародубов А.П. – врач-ортопед, имплантолог, хирург с опытом работы более 10 лет. Ведёт прием взрослых пациентов в Клинике Здоровья Исток в Звенигороде. ✓ Все виды протезирования зубов. ✓ Все виды имплантации. ✓ Эстетическая стоматология. ✓ Удаление зубов мудрости.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Starodubov_NEW_2025_circle-1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Starodubov_NEW_2025_circle-1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 93,
              menuindex: 94,
              menutitle: "",
              pagetitle: "Грачева Анастасия Игоревна",
              introtext: "стоматолог-терапевт, детский стоматолог",
              uri: "gracheva-anastasiya-igorevna",
              class_key: "modDocument",
              redirect: {
                old_uri: "gracheva-anastasiya-igorevna/",
              },
              seo: {
                title:
                  "Грачева Анастасия Игоревна – стоматолог-терапевт, детский стоматолог в Звенигороде ❘ Цена ❘ Отзывы пациентов",
                desc: "Грачева А.И. – врач стоматолог-терапевт, детский стоматолог. Ведёт прием взрослых пациентов и детей с 1 года в Клинике Здоровья Исток в Звенигороде. ✓ Лечение зубов в седации и во сне. ✓ Удаление зубов. ✓ Профгигиена полости рта. ✓ Эстетическая стоматология.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Gracheva_NEW_2025_circle-3.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Gracheva_NEW_2025_circle-3.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
            {
              id: 94,
              menuindex: 94,
              menutitle: "",
              pagetitle: "Микитяк Юлия Михайловна",
              introtext: "стоматолог-ортодонт",
              uri: "mikityak-yuliya-mixajlovna",
              class_key: "modDocument",
              redirect: {
                old_uri: "mikityak-yuliya-mixajlovna/",
              },
              seo: {
                title:
                  "Микитяк Юлия Михайловна – врач ортодонт в Звенигороде и Одинцово",
                desc: "Микитяк Ю.М. – врач-ортодонт в Клинике Здоровья Исток в Звенигороде. Ведет прием детей и взрослых пациентов. ✓ Исправление прикуса. ✓ Лечение на брекетах и элайнерах. ✓ Диагностика и коррекция заболеваний ВНЧС.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/spec/Mikityak_NEW_2025_circle-NEW_1.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/Mikityak_NEW_2025_circle-NEW_1.2ff53a0e58d5a032e24b13bc92a2b0ad.webp",
                },
              ],
            },
          ],
        }),
      200
    );
  });

export default fetchDoctorsData;
