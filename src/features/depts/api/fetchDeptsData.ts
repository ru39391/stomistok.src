import type { TDeptResData } from '../types';

const fetchDeptsData = (): Promise<TDeptResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: [
            {
              id: 14,
              menuindex: 0,
              menutitle: "",
              pagetitle: "ВЗРОСЛОЕ ОТДЕЛЕНИЕ",
              introtext: "",
              uri: "vzrosloe-otdelenie",
              class_key: "modDocument",
              redirect: {
                old_uri: "vzrosloe-otdelenie/",
              },
              seo: {
                title: "",
                desc: "",
                kws: "",
              },
              pics: [],
              children: [
                {
                  id: 130,
                  menuindex: 1,
                  menutitle: "",
                  pagetitle: "Стоматология",
                  introtext: "",
                  uri: "stomatologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "stomatologiya/",
                  },
                  seo: {
                    title:
                      "Стоматология в Звенигороде | Цены, услуги, технологии Клиники Здоровья Исток",
                    desc: "Клиника Здоровья Исток, Отделение Стоматологии в Звенигороде ★ Консультация лучших стоматологов ★ Лечение и имплантация зубов ★ Протезирование зубов ★ Детская стоматология ★ Выгодные цены  ",
                    kws: "лечение зубов, записаться к стоматологу, стоматология Звенигород, протезирование зубов, имплантация зубов, стоматология цены",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WStom.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WStom.svg",
                    },
                  ],
                },
                {
                  id: 131,
                  menuindex: 4,
                  menutitle: "",
                  pagetitle: "Анализы",
                  introtext: "",
                  uri: "all-types-of-analyses",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "all-types-of-analyses/",
                  },
                  seo: {
                    title:
                      "Сдать анализы в Звенигороде в Клинике Здоровья Исток ★ Цены ★ Отзывы ★ Записаться на приём ",
                    desc: "Лабораторная диагностика в Звенигороде в Клинике Здоровья Исток ★ Лаборатория НИИ Роспотребнадзора.",
                    kws: "анализы, лабораторные исследования, кровь, моча, диагностика",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WAnalizy.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WAnalizy.svg",
                    },
                  ],
                },
                {
                  id: 132,
                  menuindex: 7,
                  menutitle: "",
                  pagetitle: "Гинекология",
                  introtext: "",
                  uri: "ginekologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "ginekologiya/",
                  },
                  seo: {
                    title:
                      "Отделение Гинекологии ★ Женская консультация в Звенигороде ★ Цены ★ Запись на приём",
                    desc: "Гинеколог в Звенигороде ★ УЗИ-диагностика - оборудование эксперт-класса ★ Ведение беременности ★ Подбор контрацепции ★ Лечение климакса ★ Кольпоскопия",
                    kws: "гинеколог, гинекология, женский доктор, здоровье женщины, врач-гинеколог, звенигород, женская консультация",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WGynecology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WGynecology.svg",
                    },
                  ],
                },
                {
                  id: 133,
                  menuindex: 13,
                  menutitle: "",
                  pagetitle: "Отоларингология",
                  introtext: "",
                  uri: "otolaringologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "otolaringologiya/",
                  },
                  seo: {
                    title:
                      "Центр отоларингологии Клиники Здоровья Исток в Звенигороде | Запись на прием к платному отоларингологу",
                    desc: "Центр отоларингологии Клиники Здоровья Исток предоставляет услуги квалифицированных специалистов для взрослых и детей в любое время года. Прием отоларинголога педиатра позволяет пройти диагностический осмотр и выявить причину болезни.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WLor.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WLor.svg",
                    },
                  ],
                },
                {
                  id: 134,
                  menuindex: 8,
                  menutitle: "",
                  pagetitle: "Кардиология",
                  introtext: "",
                  uri: "kardiologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "kardiologiya/",
                  },
                  seo: {
                    title:
                      "Отделение кардиологии ✓ Врачи-кардиологи в Звенигороде",
                    desc: "Опытные кардиологи и диагносты нашей Клиники помогают не только вылечить, но предотвратить заболевания сердечно-сосудистой системы, таких как ИБС, аритмия, ",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/W-Kardiology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/W-Kardiology.svg",
                    },
                  ],
                },
                {
                  id: 135,
                  menuindex: 10,
                  menutitle: "",
                  pagetitle: "Неврология и мануальная терапия",
                  introtext: "",
                  uri: "nevrologiya-massazh",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "nevrologiya-massazh/",
                  },
                  seo: {
                    title:
                      "Отделение неврологии и мануальной терапии Клиники Здоровья Исток в Звенигороде",
                    desc: "Консультация у невропатолога поможет определить причину заболевания и выбрать оптимальную схему лечения. Невролог, отталкиваясь от текущего состояния пациента, назначает наиболее подходящие методики лечения.  В Клинике Здоровья Исток вы можете записаться на консультацию к врачу-неврологу, пройти курс лечебного массажа.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WNeurology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WNeurology.svg",
                    },
                  ],
                },
                {
                  id: 136,
                  menuindex: 20,
                  menutitle: "",
                  pagetitle: "Эндокринология",
                  introtext: "",
                  uri: "endokrinologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "endokrinologiya/",
                  },
                  seo: {
                    title:
                      "Эндокринология в Звенигороде | Запись на прием и консультация эндокринолога",
                    desc: "Эндокринология – раздел медицины, который занимается диагностикой и лечением заболеваний эндокринной системы. ✓ Коррекция гормональных нарушений. ✓ Лечение сахарного диабета 1 и 2 типов. ✓ Лечение заболеваний щитовидной железы. ✓ Нормализация веса при ожирении. ✓ Помощь при остеопорозе. ",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WEndokrinologiya.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WEndokrinologiya.svg",
                    },
                  ],
                },
                {
                  id: 137,
                  menuindex: 16,
                  menutitle: "",
                  pagetitle: "УЗИ - диагностика",
                  introtext: "",
                  uri: "ultrazvukovaya-diagnostika",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "ultrazvukovaya-diagnostika/",
                  },
                  seo: {
                    title:
                      "Ультразвуковое исследование УЗИ и дуплексное сканирование УЗДГ в Звенигороде",
                    desc: "Сделать УЗИ в Звенигороде у лучших специалистов ● Качественное исследование на оборудовании экспертного класса ● Диагностирование патологии ",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/W-USI.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/W-USI.svg",
                    },
                  ],
                },
                {
                  id: 138,
                  menuindex: 12,
                  menutitle: "",
                  pagetitle: "Остеопатия",
                  introtext: "",
                  uri: "osteoterapiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "osteoterapiya/",
                  },
                  seo: {
                    title:
                      "Остеопатия в клинике Исток. Прием хорошего опытного врача остеопата в клинике Исток, Звенигород.",
                    desc: "Остеопатия – это одно из лидирующих направлений медицины, по праву активно набирающее популярность в последнее время и составляющее центр современных научных исследований. Все этапы остеопатического лечения заключаются исключительно в манипуляциях руками врача.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WOsteopat.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WOsteopat.svg",
                    },
                  ],
                },
                {
                  id: 139,
                  menuindex: 9,
                  menutitle: "",
                  pagetitle: "Косметология",
                  introtext: "",
                  uri: "kosmetologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "kosmetologiya/",
                  },
                  seo: {
                    title:
                      "Косметология в Звенигороде  | Прием косметолога в Звенигороде  | Цены, отзывы",
                    desc: "Отделение косметологии в Клинике Здоровья Исток в Звенигороде предлагает широкий выбор аппаратных, инъекционных и терапевтических процедур для красоты и здоровья кожи и волос. ✓ Лазерная эпиляция. ✓ Комплексное омоложение. ✓ Лечение акне, купероза, пигментации. ✓ И многое другое.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WKosmetology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WKosmetology.svg",
                    },
                  ],
                },
                {
                  id: 140,
                  menuindex: 3,
                  menutitle: "",
                  pagetitle: "Аллергология и Иммунология",
                  introtext: "",
                  uri: "alergologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "alergologiya/",
                  },
                  seo: {
                    title:
                      "Аллерголог-иммунолог в Звенигороде и Одинцово | Клиника Здоровья Исток",
                    desc: "В отделении Аллергологии и Иммунологии Клиники Здоровья Исток ведут приём квалифицированные специалисты с большим опытом работы, которые помогут Вам выявить причину возникновения аллергической реакции, ослабления иммунитета, восстановить и поддержать защитные функции организма.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WAllergology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WAllergology.svg",
                    },
                  ],
                },
                {
                  id: 141,
                  menuindex: 5,
                  menutitle: "",
                  pagetitle: "Гастроэнтерология и Диетология",
                  introtext: "",
                  uri: "gastroenterologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "gastroenterologiya/",
                  },
                  seo: {
                    title:
                      "Гастроэнтеролог в Звенигороде в Звенигороде и Одинцово ❘ Цена ❘ Отзывы пациентов",
                    desc: "Гастроэнтеролог в Клинике Здоровья Исток, г. Звенигород. Диагностика и лечение заболеваний и патологий ЖКТ. Запись на прием. Услуги. Стоимость.",
                    kws: "гастроэнтеролог, стоимость, запись, прием, звенигород, клиника, исток",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/gastroenterologi/Gastroenterolog.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/gastroenterologi/Gastroenterolog.svg",
                    },
                  ],
                },
                {
                  id: 142,
                  menuindex: 7,
                  menutitle: "",
                  pagetitle: "Дерматология и Венерология",
                  introtext: "",
                  uri: "dermatovenerologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "dermatovenerologiya/",
                  },
                  seo: {
                    title:
                      "Дерматовенерология в клинике Исток. Запись на прием к врачу дерматологу — венерологу.",
                    desc: "Дерматовенерология включает в себя дерматологию- область медицины, изучающая строение кожи и ее придатков. Наши специалисты в кратчайшие сроки способны оказать Вам высококвалифицированную помощь, выявить патологию, назначить грамотное лечение.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WDermatology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WDermatology.svg",
                    },
                  ],
                },
                {
                  id: 143,
                  menuindex: 11,
                  menutitle: "",
                  pagetitle: "Общая Терапия",
                  introtext: "",
                  uri: "terapiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "terapiya/",
                  },
                  seo: {
                    title:
                      "Отделение Терапии Клиники Здоровья Исток в Звенигороде",
                    desc: "Квалифицированные врачи-терапевты Клиники Здоровья Исток помогут найти причину Вашего заболевания, назначат необходимые анализы, подберут грамотные методы и схемы лечения, направят к узкому специалисту.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WTherapy.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WTherapy.svg",
                    },
                  ],
                },
                {
                  id: 144,
                  menuindex: 21,
                  menutitle: "",
                  pagetitle: "КОМПЛЕКСНЫЕ ПРОГРАММЫ",
                  introtext:
                    "<p> Клиника Здоровья Исток предлагает воспользоваться комплексными программами обследования и лечения, которые позволят сохранить здоровье и сэкономить не только деньги, но и время! </p>\r\n",
                  uri: "kompleksnyie-programmyi",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "kompleksnyie-programmyi/",
                  },
                  seo: {
                    title:
                      "Комплексные программы наблюдения, обследования и лечения для детей и взрослых в Звенигороде и Одинцово",
                    desc: "Удобные и выгодные комплексы по гинекологии, эндокринологии, кардиологии, педиатрии и другим направлениям в Клинике Здоровья Исток, Звенигород, г.о. Одинцово",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/Kompljeksnyje programmy obszije.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/Kompljeksnyje programmy obszije.svg",
                    },
                  ],
                },
                {
                  id: 145,
                  menuindex: 15,
                  menutitle: "",
                  pagetitle: "Трихология",
                  introtext: "",
                  uri: "trixologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "trixologiya/",
                  },
                  seo: {
                    title: "Трихология | Консультация трихолога в Звенигороде",
                    desc: "Перхоть? Плохой рост волос? Облысение? Пора на прием к врачу-трихологу! В Клинике Здоровья Исток вас ждут грамотные доктора, которые помогут выявить причины проблем с волосами и кожей головы, и назначить подходящее лечение.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/Trichologija.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/Trichologija.svg",
                    },
                  ],
                },
                {
                  id: 146,
                  menuindex: 2,
                  menutitle: "",
                  pagetitle: "Антистресс-стоматология",
                  introtext: "",
                  uri: "gastroezofagelnaya-reflyuksnaya-bolezn-(gerb)",
                  class_key: "modWebLink",
                  redirect: {
                    old_uri: "antistress-stomatologiya/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [],
                },
                {
                  id: 147,
                  menuindex: 22,
                  menutitle: "",
                  pagetitle: "Вызов специалистов на дом",
                  introtext: "",
                  uri: "vyizov-speczialista-na-dom",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "vyizov-speczialista-na-dom/",
                  },
                  seo: {
                    title:
                      "Вызвать доктора или сдать анализы на дому для взрослых и детей в Звенигороде",
                    desc: "Если по каким-либо причинам Вы не можете или не хотите прийти на прием в Клинику - специалисты Клиники Здоровья Исток могут приехать к Вам домой. На дом выезжают педиатр, терапевт, кардиолог, невролог и процедурная медсестра.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/Vizov vrasha na dom1.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/Vizov vrasha na dom1.svg",
                    },
                  ],
                },
                {
                  id: 148,
                  menuindex: 14,
                  menutitle: "",
                  pagetitle: "Офтальмология",
                  introtext: "",
                  uri: "otdelenie-oftalmologii",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "otdelenie-oftalmologii/",
                  },
                  seo: {
                    title:
                      "Офтальмология в Клинике Здоровья Исток в Звенигороде",
                    desc: "В Клинике Здоровья Исток работает Отделение офтальмологии. Мы предлагаем: ✓ консультации опытных врачей-офтальмологов ✓ диагностику заболеваний глаз на современном оборудовании ✓ профилактические осмотры ✓ подбор очков и контактных линз ✓ экстренную помощь при травмах глаз.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/oftalmologia-icons/oftalmologiya_5_2.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/oftalmologia-icons/oftalmologiya_5_2.svg",
                    },
                  ],
                },
                {
                  id: 149,
                  menuindex: 19,
                  menutitle: "",
                  pagetitle: "Хирургия",
                  introtext: "",
                  uri: "otdelenie-ambulatornoj-xirurgii",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "otdelenie-ambulatornoj-xirurgii/",
                  },
                  seo: {
                    title: "Хирург в Звенигороде в Клинике Здоровья Исток",
                    desc: "В Отделении хирургии Клиники Здоровья Исток ведут прием высококвалифицированные специалисты, к которым вы можете обратиться при: ✓ острой боли в животе ✓ ранах, порезах и ушибах ✓ воспалениях и нагноениях ✓ ожогах и обморожениях ✓ вросшем ногте ✓ сосудистых «звёздочках».",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/hirurgiya/hirurgiya_3_2.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/hirurgiya/hirurgiya_3_2.svg",
                    },
                  ],
                },
                {
                  id: 150,
                  menuindex: 17,
                  menutitle: "",
                  pagetitle: "Урология и Андрология",
                  introtext: "",
                  uri: "urologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "urologiya/",
                  },
                  seo: {
                    title:
                      "Урология и андрология в Звенигороде в Клинике Здоровья Исток",
                    desc: " Жалуетесь на учащенное мочеиспускание или у вас болят почки? А, может быть, есть проблемы с потенцией? Приходите в Отделение Урологии в Клинику Здоровья Исток в Звенигороде. Опытные врачи урологи-андрологи ждут вас!",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/urologiya-icons/urologiya_icon_2.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/urologiya-icons/urologiya_icon_2.svg",
                    },
                  ],
                },
                {
                  id: 151,
                  menuindex: 18,
                  menutitle: "",
                  pagetitle: "Флебология",
                  introtext: "",
                  uri: "flebologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "flebologiya/",
                  },
                  seo: {
                    title: "Флеболог в Звенигороде в Клинике Здоровья Исток",
                    desc: "Беспокоят проблемы с венами? Запишитесь на консультацию к врачу-флебологу в Клинику Здоровья Исток. Грамотный специалист проведет осмотр с использованием современных методов диагностики (включая УЗИ) и даст рекомендации по лечению.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/flebologiya-icons/flebologiya_icon_1.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/flebologiya-icons/flebologiya_icon_1.svg",
                    },
                  ],
                },
              ],
            },
            {
              id: 15,
              menuindex: 1,
              menutitle: "",
              pagetitle: "ДЕТСКОЕ ОТДЕЛЕНИЕ",
              introtext: "",
              uri: "detskoe-otdeleni",
              class_key: "modDocument",
              redirect: {
                old_uri: "detskoe-otdeleni/",
              },
              seo: {
                title: "",
                desc: "",
                kws: "",
              },
              pics: [],
              children: [
                {
                  id: 152,
                  menuindex: 12,
                  menutitle: "",
                  pagetitle: "Педиатрия",
                  introtext: "",
                  uri: "pediatriya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "pediatriya/",
                  },
                  seo: {
                    title:
                      "Детское отделение педиатрии Клиники Здоровья Исток в Звенигороде",
                    desc: "Врач-педиатр – это своего рода терапевт, только для детей. Такой специалист должен обладать глубокими знаниями в различных отраслях медицины. Именно такие доктора ведут приём в Клинике Здоровья Исток. Мы предлагаем: ★ приём больных пациентов ★ профилактические осмотры здоровых детей ★ выезд врача на дом ★ прививки.",
                    kws: "Педиатрия",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WPediatria.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WPediatria.svg",
                    },
                  ],
                },
                {
                  id: 153,
                  menuindex: 5,
                  menutitle: "",
                  pagetitle: "Гинекология",
                  introtext: "",
                  uri: "detskaya-ginekologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "detskaya-ginekologiya/",
                  },
                  seo: {
                    title: "Детский гинеколог в Звенигороде ✓ Запись на прием ",
                    desc: "Гинекология для девочек ✓ Лечение гинекологических заболеваний у детей ✓ Комфорт и доверие",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WGynecology.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WGynecology.svg",
                    },
                  ],
                },
                {
                  id: 154,
                  menuindex: 17,
                  menutitle: "",
                  pagetitle: "Эндокринология",
                  introtext: "",
                  uri: "/endokrinologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "/endokrinologiya/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WEndokrinologiya.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WEndokrinologiya.svg",
                    },
                  ],
                },
                {
                  id: 155,
                  menuindex: 13,
                  menutitle: "",
                  pagetitle: "Психология",
                  introtext: "",
                  uri: "psyhology",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "psyhology/",
                  },
                  seo: {
                    title: "Отделение детской Психологии. Звенигород.",
                    desc: "Специалисты отделения Детской Психологии Клиники Здоровья Исток помогут ребенку разрешить конфликты со сверстниками,  повысить успеваемость в школе, справиться с истериками. \r\n\r\n\r\n",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WPsyholog.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WPsyholog.svg",
                    },
                  ],
                },
                {
                  id: 156,
                  menuindex: 8,
                  menutitle: "",
                  pagetitle: "Неврология и Массаж",
                  introtext: "",
                  uri: "detskaya-nevrologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "detskaya-nevrologiya/",
                  },
                  seo: {
                    title:
                      "Отделение детской неврологии в Звенигороде | Хороший детский невролог",
                    desc: "Отделения детской неврологии Клиники Здоровья Исток ● Детский невролог: лечение патологий , диагностика, профосмотр",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/W Neurology Kids.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/W Neurology Kids.svg",
                    },
                  ],
                },
                {
                  id: 157,
                  menuindex: 6,
                  menutitle: "",
                  pagetitle: "Дерматология",
                  introtext:
                    "<p>Кожа — это самый большой орган человека, и часто она сигнализирует нам о том, что в организме что-то происходит не так. Определить причину и помочь найти решение проблем, проявившихся на коже, ногтях, волосах ребенка поможет детский врач-дерматолог.</p>",
                  uri: "dermatologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "dermatologiya/",
                  },
                  seo: {
                    title: "Детский дерматолог в Звенигороде",
                    desc: "Специалисты Клиники Здоровья Исток помогу найти причину проблем  подобрать лечение заболеваний кожи, волос и ногтей у детей любого возраста, а также оформить справку в бассейн.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WDermatologKids.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WDermatologKids.svg",
                    },
                  ],
                },
                {
                  id: 158,
                  menuindex: 10,
                  menutitle: "",
                  pagetitle: "Отоларингология",
                  introtext: "",
                  uri: "/otolaringologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "/otolaringologiya/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WLorKids.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WLorKids.svg",
                    },
                  ],
                },
                {
                  id: 159,
                  menuindex: 3,
                  menutitle: "",
                  pagetitle: "Анализы",
                  introtext: "",
                  uri: "https://stomistok.ru/all-types-of-analyses",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "https://stomistok.ru/all-types-of-analyses/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WAnalizy.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WAnalizy.svg",
                    },
                  ],
                },
                {
                  id: 160,
                  menuindex: 15,
                  menutitle: "",
                  pagetitle: "УЗИ - диагностика",
                  introtext:
                    "<p>УЗИ-диагностика — это передовой метод исследования состояния внутренних органов и сосудов, который имеет много преимуществ перед другими методами. Ультразвуковой исследование безопасно, информативно и не причиняет никакого дискомфорта пациенту. Еще одним важным преимуществом этого метода диагностики является доступная стоимость.</p>",
                  uri: "uzi-diagnostika-detam",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "uzi-diagnostika-detam/",
                  },
                  seo: {
                    title: "УЗИ диагностика детям в Звенигороде",
                    desc: "Ультразвуковое исследование - безопасный и безболезненный способ диагностики различных патологий и заболеваний у детей.\r\nВ Клинике Здоровья Исток исследования выполняются на аппаратах экспертного и высокого класса специалистами с большим опытом работы. \r\n",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/W-USI.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/W-USI.svg",
                    },
                  ],
                },
                {
                  id: 161,
                  menuindex: 7,
                  menutitle: "",
                  pagetitle: "Логопедия",
                  introtext:
                    "\r\n <p>Если малыш отказывается говорить словами, капризничает, когда его не понимают, если Ваш дошкольник не может освоить определенные звуки, или у него возникают сложности при изложении мыслей - обратитесь к нашим специалистам! Логопеды, педагоги-дефектологи отделения Речевого Развития Клиники Здоровья Исток помогут ребенку решить проблемы с речью.</p>\r\n\t",
                  uri: "logopediya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "logopediya/",
                  },
                  seo: {
                    title:
                      "Клиника Здоровья Исток.Отделение Речевого Развития. Логопед.",
                    desc: "Логопеды, педагоги-дефектологи отделения Речевого Развития Клиники Здоровья Исток помогут ребенку решить проблемы с речью.\r\n\r\n\r\n",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WLogopedia.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WLogopedia.svg",
                    },
                  ],
                },
                {
                  id: 162,
                  menuindex: 1,
                  menutitle: "",
                  pagetitle: "Стоматология детская",
                  introtext: "",
                  uri: "stomatologiya-detskaya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "stomatologiya-detskaya/",
                  },
                  seo: {
                    title:
                      "Детская стоматология в Звенигороде | Лечение зубов детям",
                    desc: "Детский стоматолог в Звенигороде ★ Лечение зубов детям без слез ★ Лечение во сне",
                    kws: "болит зуб у ребенка, лечение зубов детям, детский стоматолог, ортодонт, стоматология",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WStomKids.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WStomKids.svg",
                    },
                  ],
                },
                {
                  id: 163,
                  menuindex: 4,
                  menutitle: "",
                  pagetitle: "Аллергология и Иммунология",
                  introtext: "",
                  uri: "/alergologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "/alergologiya/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/WAllergologyKids.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/WAllergologyKids.svg",
                    },
                  ],
                },
                {
                  id: 164,
                  menuindex: 2,
                  menutitle: "",
                  pagetitle: "Антистресс-стоматология",
                  introtext: "",
                  uri: "konsultacziya-vracha-xirurga",
                  class_key: "modWebLink",
                  redirect: {
                    old_uri: "antistress-stomatologiya-(lechenie-vo-sne)/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [],
                },
                {
                  id: 165,
                  menuindex: 19,
                  menutitle: "",
                  pagetitle: "Вызов специалистов на дом",
                  introtext: "",
                  uri: "https://stomistok.ru/vyizov-speczialista-na-dom",
                  class_key: "modWebLink",
                  redirect: {
                    old_uri: "vyizov-speczialistov-na-dom/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [],
                },
                {
                  id: 166,
                  menuindex: 9,
                  menutitle: "",
                  pagetitle: "Остеопатия",
                  introtext: "",
                  uri: "osteopatiya-dlya-detej-kakie-problemyi-ona-reshaet-i-v-chem-ee-preimushhestva",
                  class_key: "modDocument",
                  redirect: {
                    old_uri:
                      "osteopatiya-dlya-detej-kakie-problemyi-ona-reshaet-i-v-chem-ee-preimushhestva/",
                  },
                  seo: {
                    title:
                      "Остеопат для детей, для новорожденных в Клинике Здоровья Исток в Звенигороде",
                    desc: "Детский остеопат принимает в Клинике Здоровья Исток в Звенигороде. Для новорожденных предусмотрено лечение родовых травм и внутриутробных дисфункций, для детишек постарше – помощь при нарушениях речевого развития, сколиозе, плоскостопии и других проблемах.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/osteoterapiya/WOsteopat_detskiy_1.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/osteoterapiya/WOsteopat_detskiy_1.svg",
                    },
                  ],
                },
                {
                  id: 167,
                  menuindex: 17,
                  menutitle: "",
                  pagetitle: "КОМПЛЕКСНЫЕ ПРОГРАММЫ ДЛЯ ДЕТЕЙ",
                  introtext:
                    "<p>Комплексные программы обследования и лечения позволят сохранить здоровье и сэкономить не только деньги, но и время!</p>",
                  uri: "kompleksnyie-programmyi-dlya-detej",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "kompleksnyie-programmyi-dlya-detej/",
                  },
                  seo: {
                    title:
                      "Комплексные программы наблюдения, обследования и лечения для детей в Звенигороде и Одинцово",
                    desc: "В Клинике Здоровья Исток доступны Комплексные программы лечения и диагностики для детей: ✓ Программы наблюдения детей первого года жизни ✓ Комплексная УЗИ-диагностика новорожденных ✓ Диспансеризация перед детским садом/школой (форма 026/у). Качественные медицинские услуги по выгодной цене!",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/Kompljeksnyje programmy obszije.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/Kompljeksnyje programmy obszije.svg",
                    },
                  ],
                },
                {
                  id: 168,
                  menuindex: 16,
                  menutitle: "",
                  pagetitle: "Урология-андрология",
                  introtext: "",
                  uri: "detskaya-urologiya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "detskaya-urologiya/",
                  },
                  seo: {
                    title:
                      "Детский уролог-андролог в Звенигороде в Клинике Здоровья Исток",
                    desc: "В нашей Клинике открыто Отделение детской урологии! ✓ диагностика и лечение заболеваний мочевыводящей и мочеполовой системы ✓ выявление проблем на ранних стадиях ✓ ультразвуковые исследования ✓ профилактические осмотры.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/urologiya-icons/urologiya_icon_2.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/urologiya-icons/urologiya_icon_2.svg",
                    },
                  ],
                },
                {
                  id: 169,
                  menuindex: 16,
                  menutitle: "",
                  pagetitle: "Хирургия",
                  introtext: "",
                  uri: "http://stomistok.ru/otdelenie-ambulatornoj-xirurgii",
                  class_key: "modWebLink",
                  redirect: {
                    old_uri: "xirurgiya-deti/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [],
                },
                {
                  id: 170,
                  menuindex: 11,
                  menutitle: "",
                  pagetitle: "Офтальмология",
                  introtext: "",
                  uri: "https://stomistok.ru/otdelenie-oftalmologii",
                  class_key: "modWebLink",
                  redirect: {
                    old_uri: "oftalmologiya-detskaya/",
                  },
                  seo: {
                    title: "",
                    desc: "",
                    kws: "",
                  },
                  pics: [],
                },
                {
                  id: 171,
                  menuindex: 4,
                  menutitle: "",
                  pagetitle: "Гастроэнтерология",
                  introtext: "",
                  uri: "gastroenterologiya-detskaya",
                  class_key: "modDocument",
                  redirect: {
                    old_uri: "gastroenterologiya-detskaya/",
                  },
                  seo: {
                    title: "Детская гастроэнтерология в Звенигороде",
                    desc: "Специалисты детского Отделения гастроэнтерологии в Клинике Здоровья Исток в Звенигороде занимаются диагностикой и лечением заболеваний желудочно-кишечного тракта у пациентов от 7 до 18 лет. ✓ Комплексный подход. ✓ Высокая точность диагностики. ✓ Современные протоколы лечения.",
                    kws: "",
                  },
                  pics: [
                    {
                      src: "http://stomistok.modx/assets/images/icons/gastroenterologi/Gastroenterolog.svg",
                      thumb:
                        "http://stomistok.modx/ssets/images/icons/gastroenterologi/Gastroenterolog.svg",
                    },
                  ],
                },
              ],
            },
          ]
        }),
      200
    );
  });

export default fetchDeptsData;
