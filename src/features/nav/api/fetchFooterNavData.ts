import type { TNavResData } from "../types";

const fetchFooterNavData = (): Promise<TNavResData> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          data: [
            {
              id: 2,
              menuindex: 2,
              menutitle: "",
              pagetitle: "Услуги",
              introtext: "",
              uri: "uslugi",
              class_key: "modDocument",
              redirect: {
                old_uri: "uslugi/",
              },
              seo: {
                title:
                  "Медицинские услуги Клиники Здоровья Исток в Звенигороде",
                desc: "Клиника Здоровья Исток предлагает широкий выбор медицинских услуг, в том числе по таким направлениям, как: ✓ взрослая и детская стоматология ✓ косметология ✓ кардиология ✓ общая терапия ✓ педиатрия ✓ гинекология ✓ отоларингология и др.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/nav-uslugi.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-uslugi.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
                {
                  src: "http://stomistok.modx/assets/images/nav-uslugi-hover.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-uslugi-hover.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
              ],
            },
            {
              id: 3,
              menuindex: 3,
              menutitle: "",
              pagetitle: "Специалисты",
              introtext: "",
              uri: "specialisty",
              class_key: "modDocument",
              redirect: {
                old_uri: "specialisty/",
              },
              seo: {
                title:
                  "Врачи медицинского центра Исток Клиника Здоровья в г. Звенигород",
                desc: "В медицинском центре Клиника Здоровья Исток ведут прием опытные врачи, в том числе кандидаты медицинских наук, готовые помочь выяснить причины проблем со здоровьем и подобрать эффективное лечение. Мы принимаем взрослых и детей!",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/nav-specials.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-specials.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
                {
                  src: "http://stomistok.modx/assets/images/nav-specials-hover.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-specials-hover.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
              ],
            },
            {
              id: 4,
              menuindex: 11,
              menutitle: "",
              pagetitle: "Стоимость",
              introtext: "",
              uri: "ceny",
              class_key: "modDocument",
              redirect: {
                old_uri: "ceny/",
              },
              seo: {
                title:
                  "Стоимость медицинских услуг, цены на лечение в Клинике Здоровья Исток",
                desc: "Расценки на медицинские услуги к Клинике Здоровья Исток вы найдете на этой странице. У нас одни из самых доступных цен в Звенигороде! Ознакомьтесь с прайс-листом, чтобы убедиться в этом лично.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/nav-price-hover.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-price-hover.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
              ],
            },
            {
              id: 5,
              menuindex: 12,
              menutitle: "",
              pagetitle: "Акции",
              introtext: "",
              uri: "akcii",
              class_key: "modDocument",
              redirect: {
                old_uri: "akcii/",
              },
              seo: {
                title:
                  " Акции и спецпредложения на медицинские услуги Клиники Здоровья Исток",
                desc: "В Клинике Здоровья Исток действуют спецпредложения, акции и скидки на различные услуги.",
                kws: "",
              },
              pics: [
                {
                  src: "http://stomistok.modx/assets/images/nav-actions.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-actions.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
                {
                  src: "http://stomistok.modx/assets/images/nav-actions-hover.png",
                  thumb:
                    "http://stomistok.modx/assets/components/phpthumbof/cache/nav-actions-hover.0ed0baeedfb87ed1ee7e4ee88c45aa2a.webp",
                },
              ],
            },
            {
              id: 6,
              menuindex: 12,
              menutitle: "",
              pagetitle: "Отзывы",
              introtext: "",
              uri: "otzyivyi",
              class_key: "modDocument",
              redirect: {
                old_uri: "otzyivyi/",
              },
              seo: {
              },
              pics: [
              ],
            },
            {
              id: 7,
              menuindex: 12,
              menutitle: "",
              pagetitle: "Статьи",
              introtext: "",
              uri: "stati",
              class_key: "modDocument",
              redirect: {
                old_uri: "stati/",
              },
              seo: {
              },
              pics: [
              ],
            },
            {
              id: 8,
              menuindex: 18,
              menutitle: "",
              pagetitle: "Документы для ознакомления",
              introtext: "",
              uri: "dokumentyi-dlya-oznakomleniya",
              class_key: "modDocument",
              redirect: {
                old_uri: "dokumentyi-dlya-oznakomleniya/",
              },
              seo: {
                title:
                  "Документы для ознакомления и полезная информация | Клиника Здоровья Исток",
                desc: "На данной странице представлены комплекты документов первичного пациента, правила оказания медицинской помощи несовершеннолетним пациентам, условия предоставления рассрочки на лечение и другая полезная информация о работе Клиники Здоровья Исток.",
                kws: "документы, лицензии, правила",
              },
              pics: [],
            },
          ],
        }),
      200
    );
  });

export default fetchFooterNavData;
