/**
 * O'ZBEKISTON RESPUBLIKASI DAVLAT UMUMTA'LIM MAKTABI RASMIY VEB-SAYTI
 * Official Public School Website Script (Pure Vanilla ES6+)
 * Multilingual (UZ, RU, EN), Light/Dark Themes, Timetable, Directory, Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. COMPREHENSIVE I18N MULTILINGUAL TRANSLATION REPOSITORY
  // =========================================================================
  const i18nData = {
    uz: {
      gov_republic: "O‘zbekiston Respublikasi Maktabgacha va maktab ta‘limi vazirligi",
      gov_hotline: "Ishonch telefoni: 1006",
      school_name_short: "142-Umumta'lim Maktabi",
      school_locality_short: "Toshkent shahri, Mirzo Ulug'bek tumani",

      nav_home: "Bosh sahifa",
      nav_about: "Maktab haqida",
      nav_admin: "Ma’muriyat",
      nav_teachers: "O‘qituvchilar",
      nav_timetable: "Dars jadvali",
      nav_news: "Yangiliklar",
      nav_life: "O‘quvchilar hayoti",
      nav_docs: "Hujjatlar",
      nav_parents: "Ota-onalarga",
      nav_gallery: "Fotolavhalar",
      nav_faq: "FAQ",
      nav_contact: "Bog‘lanish",
      nav_search: "Qidiruv",

      hero_kicker: "Davlat umumiy o‘rta ta’lim muassasasi",
      hero_title: "Bilim — kelajak poydevori!",
      hero_desc: "Maktabimizda sifatli ta’lim, zamonaviy bilimlar va yuksak ma’naviyat orqali vatanimiz ravnaqiga hissa qo‘shuvchi barkamol avlodni tarbiyalaymiz.",
      hero_btn_about: "Maktab haqida",
      hero_btn_news: "Yangiliklarni ko‘rish",
      hero_feat1: "Ixtisoslashtirilgan sinflar",
      hero_feat2: "STEAM & Raqamli laboratoriyalar",
      hero_feat3: "Xalqaro olimpiada g'oliblari",
      hero_facade_tag: "O'quv binosi",
      hero_facade_title: "142-sonli umumiy o'rta ta'lim maktabi",

      stat_students: "1,450+",
      stat_students_label: "O‘quvchilar soni",
      stat_teachers: "86",
      stat_teachers_label: "Malakali o‘qituvchilar",
      stat_classes: "48",
      stat_classes_label: "Sinflar soni",
      stat_clubs: "24",
      stat_clubs_label: "Fan va sport to‘garaklari",
      stat_note: "* Ma'lumotlar joriy o'quv yili uchun namunaviy ko'rsatkichlar asosida keltirilgan.",

      about_kicker: "Tarix va qadriyatlar",
      about_title: "Ta’lim va tarbiya maskanimiz",
      about_p1: "Maktabimiz ko‘p yillik boy an’ana va yutuqlarga ega bo‘lib, o‘quvchilarning intellektual va ma’naviy salohiyatini yuksaltirishga xizmat qiladi. Davlat ta’lim standartlari asosida har bir o‘quvchiga individual yondashuv yo‘lga qo‘yilgan.",
      about_p2: "Bizning maqsadimiz — zamonaviy fan va texnologiyalarni chuqur o‘zlashtirgan, mustaqil fikrlaydigan va vatanparvar yoshlarni voyaga yetkazishdir.",
      about_mission_title: "Bizning missiyamiz",
      about_mission_desc: "Har bir o'quvchining qobiliyatini kashf qilish va sifatli ta'lim berish.",
      about_vision_title: "Bizning maqsadimiz",
      about_vision_desc: "Zamonaviy innovatsiyalar va milliy qadriyatlarni uyg'unlashtirish.",
      about_btn_more: "Batafsil ma'lumot",

      fac_kicker: "Shart-sharoitlar",
      fac_title: "Maktab infratuzilmasi",
      fac_lib_title: "Kutubxona markazi",
      fac_lib_desc: "20,000 dan ortiq badiiy, ilmiy va darslik adabiyotlari jamg'armasi.",
      fac_it_title: "Kompyuter sinflari",
      fac_it_desc: "Optik tolali internet va zamonaviy kompyuterlar bilan jihozlangan IT xonalari.",
      fac_sport_title: "Sport majmuasi",
      fac_sport_desc: "Keng yopiq sport zali va sun'iy qoplamali futbol maydoni.",
      fac_lab_title: "STEAM laboratoriyalari",
      fac_lab_desc: "Fizika, kimyo va biologiya fanlari bo'yicha amaliy tajriba laboratoriyalari.",

      admin_kicker: "Rahbariyat",
      admin_title: "Maktab ma’muriyati",
      admin_subtitle: "Ta'lim sifatini nazorat qiluvchi va jamoani boshqaruvchi rasmiy rahbarlar",
      admin_p1_role: "Maktab direktori",
      admin_p1_name: "Azizova Nigora Baxtiyorovna",
      admin_p1_bio: "Oliy toifali pedagog, 20 yillik tajribaga ega. Xalq ta'limi a'lochisi ko'krak nishoni sohibi.",
      admin_p1_reception: "Dushanba va Chorshanba: 14:00 - 17:00",
      admin_p2_role: "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
      admin_p2_name: "Rustamov Shavkat Komilovich",
      admin_p2_bio: "Matematika fani o'qituvchisi, ilg'or ta'lim metodikasi va o'quv rejalari koordinatori.",
      admin_p2_reception: "Seshanba va Payshanba: 10:00 - 13:00",
      admin_p3_role: "Ma’naviy-ma’rifiy ishlar bo‘yicha o‘rinbosar",
      admin_p3_name: "Saidova Dilnoza Akbarovna",
      admin_p3_bio: "O'quvchilar tarbiyasi, to'garaklar va madaniy-ma'rifiy tadbirlar bo'yicha mas'ul rahbar.",
      admin_p3_reception: "Juma: 14:00 - 17:00",
      admin_reception_label: "Fuqarolarni qabul qilish vaqti:",

      teachers_kicker: "Pedagogik jamoa",
      teachers_title: "Bizning o‘qituvchilarimiz",
      teachers_subtitle: "Yuqori toifali va tajribali ustozlar o'quvchilarga chuqur bilim beradi",
      teachers_search_ph: "O'qituvchi ismi yoki fan bo'yicha qidiring...",
      cat_all: "Barcha fanlar",
      cat_lang: "Ona tili va adabiyot",
      cat_math: "Matematika",
      cat_it: "Informatika",
      cat_science: "Aniq fanlar",
      cat_foreign: "Xorijiy tillar",
      cat_primary: "Boshlang‘ich ta’lim",

      routine_kicker: "Tartib va intizom",
      routine_title: "Maktab kun tartibi va qo'ng'iroqlar",
      routine_shift1: "1-smena: 08:00 - 13:10",
      routine_shift2: "2-smena: 13:30 - 18:20",
      routine_duration: "Dars davomiyligi: 45 daqiqa",
      routine_recess: "Katta tanaffus: 15 daqiqa",

      tt_kicker: "O‘quv jarayoni",
      tt_title: "Interaktiv dars jadvali",
      tt_subtitle: "Sinf, guruh va haftaning kunini tanlab dars jadvali bilan tanishing",
      tt_class_label: "Sinfni tanlang:",
      tt_group_label: "Guruh:",
      tt_period: "Dars",
      tt_time: "Vaqti",
      tt_subject: "Fan",
      tt_teacher: "O‘qituvchi",
      tt_room: "Xona",

      news_kicker: "So'nggi voqealar",
      news_title: "Maktab yangiliklari va e’lonlar",
      news_subtitle: "Ta'lim tadbirlari, olimpiada natijalari va maktab hayotiga doir eng yangi xabarlar",
      news_tab_all: "Barchasi",
      news_tab_academic: "Olimpiadalar",
      news_tab_events: "Tadbirlar",
      news_tab_announcements: "E'lonlar",
      news_read_more: "Batafsil o'qish",

      life_kicker: "Ijod va sport",
      life_title: "O‘quvchilar hayoti va yutuqlari",
      life_tab_achievements: "Olimpiada va yutuqlar",
      life_tab_clubs: "To'garaklar",
      life_tab_initiatives: "Tashabbuslar va Kengash",

      docs_kicker: "Ochiqlik va shaffoflik",
      docs_title: "Rasmiy hujjatlar",
      docs_subtitle: "Maktab faoliyatiga oid normativ-huquqiy hujjatlar va nizomlar",
      docs_download_btn: "Hujjatni yuklab olish",

      parents_kicker: "Hamkorlik",
      parents_title: "Ota-onalar va o‘quvchilarga",
      parents_subtitle: "Maktabga qabul, ichki tartib-qoidalar va maslahatlar",
      parent_card1_title: "1-sinfga qabul",
      parent_card1_desc: "Elektron qabul jarayoni, talab qilinadigan hujjatlar va suhbat bosqichlari.",
      parent_card2_title: "Maktab formasi",
      parent_card2_desc: "Davlat standarti bo'yicha belgilangan maktab kiyimi talablari.",
      parent_card3_title: "Psixolog maslahati",
      parent_card3_desc: "O'quvchilarning moslashuvi va ruhiy xotirjamligi bo'yicha professional tavsiyalar.",
      parent_card4_title: "Ota-onalar majlisi",
      parent_card4_desc: "Chorak yakunlari va umumiy yig'ilishlarning rasmiy taqvimi.",

      gallery_kicker: "Hayotiy lahzalar",
      gallery_title: "Maktab fotogalereyasi",

      faq_kicker: "Ko'p beriladigan savollar",
      faq_title: "Savol va javoblar",

      appeal_kicker: "Jamoatchilik nazorati",
      appeal_title: "Elektron murojaat yuborish",
      appeal_subtitle: "Maktab ma'muriyatiga taklif, murojaat yoki arizangizni onlayn tarzda yuboring",
      appeal_name: "To‘liq ismingiz",
      appeal_phone: "Telefon raqamingiz",
      appeal_email: "Elektron pochta (ixtiyoriy)",
      appeal_type: "Murojaat turi",
      appeal_message: "Murojaat matni",
      appeal_consent: "Shaxsiy ma'lumotlarim qayta ishlanishiga roziman",
      appeal_submit: "Murojaatni yuborish",
      appeal_notice: "Eslatma: Ushbu forma namunaviy bo'lib, murojaatlar davlat portali orqali rasmiy ro'yxatga olinadi.",

      contact_kicker: "Biz bilan bog'lanish",
      contact_title: "Aloqa ma’lumotlari",
      contact_address_label: "Manzilimiz",
      contact_address_val: "Toshkent shahri, Mirzo Ulug'bek tumani, Mustaqillik shoh ko'chasi, 42-uy",
      contact_phone_label: "Telefon raqamlari",
      contact_phone_val: "+998 (71) 234-56-78, +998 (71) 234-56-79",
      contact_email_label: "Elektron manzil",
      contact_email_val: "info@maktab142.uz",
      contact_hours_label: "Ish vaqti",
      contact_hours_val: "Dushanba - Shanba: 08:00 - 18:30",

      footer_about_text: "O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi tasarrufidagi 142-sonli umumiy o'rta ta'lim maktabi rasmiy portali.",
      footer_nav: "Menyu",
      footer_resources: "Foydali resurslar",
      footer_rights: "Barcha huquqlar qonun bilan himoyalangan.",
      toast_appeal_sent: "Murojaatingiz qabul qilindi. Ma'muriyat tez orada siz bilan bog'lanadi."
    },

    ru: {
      gov_republic: "Министерство дошкольного и школьного образования Республики Узбекистан",
      gov_hotline: "Горячая линия: 1006",
      school_name_short: "Школа №142",
      school_locality_short: "город Ташкент, Мирзо-Улугбекский район",

      nav_home: "Главная",
      nav_about: "О школе",
      nav_admin: "Администрация",
      nav_teachers: "Учителя",
      nav_timetable: "Расписание",
      nav_news: "Новости",
      nav_life: "Школьная жизнь",
      nav_docs: "Документы",
      nav_parents: "Родителям",
      nav_gallery: "Галерея",
      nav_faq: "Вопросы",
      nav_contact: "Контакты",
      nav_search: "Поиск",

      hero_kicker: "Государственное общеобразовательное учреждение",
      hero_title: "Знания — фундамент будущего!",
      hero_desc: "В нашей школе мы воспитываем гармоничное поколение через качественное образование, современные технологии и высокие духовно-нравственные ценности.",
      hero_btn_about: "О школе",
      hero_btn_news: "Смотреть новости",
      hero_feat1: "Специализированные классы",
      hero_feat2: "STEAM и цифровые лаборатории",
      hero_feat3: "Победители олимпиад",
      hero_facade_tag: "Учебный корпус",
      hero_facade_title: "Общеобразовательная школа №142",

      stat_students: "1,450+",
      stat_students_label: "Учащихся",
      stat_teachers: "86",
      stat_teachers_label: "Квалифицированных педагогов",
      stat_classes: "48",
      stat_classes_label: "Классов",
      stat_clubs: "24",
      stat_clubs_label: "Кружков и секций",
      stat_note: "* Данные приведены на основе типовых показателей текущего учебного года.",

      about_kicker: "История и традиции",
      about_title: "Обитель знаний и воспитания",
      about_p1: "Наша школа имеет богатую историю и традиции. Мы обеспечиваем индивидуальный подход к каждому ученику в строгом соответствии с Государственными образовательными стандартами.",
      about_p2: "Наша главная миссия — воспитание всесторонне развитых, свободно мыслящих граждан, готовых внести достойный вклад в развитие общества.",
      about_mission_title: "Наша миссия",
      about_mission_desc: "Раскрыть потенциал каждого ребенка и дать прочные академические знания.",
      about_vision_title: "Наши ориентиры",
      about_vision_desc: "Гармония передовых мировых методик и национального воспитания.",
      about_btn_more: "Подробнее о школе",

      fac_kicker: "Условия обучения",
      fac_title: "Инфраструктура школы",
      fac_lib_title: "Библиотечный центр",
      fac_lib_desc: "Фонд из более чем 20,000 экземпляров учебной, научной и художественной литературы.",
      fac_it_title: "Компьютерные классы",
      fac_it_desc: "Оснащенные современными ПК и высокоскоростным оптоволоконным интернетом кабинеты.",
      fac_sport_title: "Спортивный комплекс",
      fac_sport_desc: "Просторный крытый спортзал и футбольное поле с искусственным газоном.",
      fac_lab_title: "STEAM-лаборатории",
      fac_lab_desc: "Лабораторные комплексы для практических опытов по физике, химии и биологии.",

      admin_kicker: "Руководство",
      admin_title: "Администрация школы",
      admin_subtitle: "Официальные руководители образовательного процесса и школьного коллектива",
      admin_p1_role: "Директор школы",
      admin_p1_name: "Азизова Нигора Бахтияровна",
      admin_p1_bio: "Педагог высшей категории с 20-летним стажем. Награждена нагрудным знаком «Отличник народного образования».",
      admin_p1_reception: "Понедельник и Среда: 14:00 - 17:00",
      admin_p2_role: "Заместитель директора по учебной работе",
      admin_p2_name: "Рустамов Шавкат Комилович",
      admin_p2_bio: "Учитель математики, координатор учебных планов и методической работы.",
      admin_p2_reception: "Вторник и Четверг: 10:00 - 13:00",
      admin_p3_role: "Заместитель директора по воспитательной работе",
      admin_p3_name: "Саидова Дильноза Акбаровна",
      admin_p3_bio: "Куратор духовно-просветительских мероприятий, кружковой деятельности и ученического самоуправления.",
      admin_p3_reception: "Пятница: 14:00 - 17:00",
      admin_reception_label: "Приемные часы граждан:",

      teachers_kicker: "Педагогический состав",
      teachers_title: "Наши преподаватели",
      teachers_subtitle: "Опытные педагоги высшей и первой категории, передающие прочные знания",
      teachers_search_ph: "Поиск по имени учителя или предмету...",
      cat_all: "Все предметы",
      cat_lang: "Язык и литература",
      cat_math: "Математика",
      cat_it: "Информатика",
      cat_science: "Естественные науки",
      cat_foreign: "Иностранные языки",
      cat_primary: "Начальные классы",

      routine_kicker: "Распорядок",
      routine_title: "Режим дня и расписание звонков",
      routine_shift1: "1-я смена: 08:00 - 13:10",
      routine_shift2: "2-я смена: 13:30 - 18:20",
      routine_duration: "Длительность урока: 45 минут",
      routine_recess: "Большая перемена: 15 минут",

      tt_kicker: "Учебный процесс",
      tt_title: "Интерактивное расписание занятий",
      tt_subtitle: "Выберите класс, букву и день недели для просмотра уроков",
      tt_class_label: "Класс:",
      tt_group_label: "Литера:",
      tt_period: "Урок",
      tt_time: "Время",
      tt_subject: "Предмет",
      tt_teacher: "Учитель",
      tt_room: "Кабинет",

      news_kicker: "События",
      news_title: "Новости и объявления школы",
      news_subtitle: "Официальные сообщения, результаты олимпиад и яркие моменты школьной жизни",
      news_tab_all: "Все новости",
      news_tab_academic: "Олимпиады",
      news_tab_events: "Мероприятия",
      news_tab_announcements: "Объявления",
      news_read_more: "Читать далее",

      life_kicker: "Творчество и спорт",
      life_title: "Жизнь учеников и достижения",
      life_tab_achievements: "Победы и награды",
      life_tab_clubs: "Кружки и секции",
      life_tab_initiatives: "Школьный совет",

      docs_kicker: "Открытость",
      docs_title: "Официальные документы",
      docs_subtitle: "Нормативно-правовые акты, регламенты и отчеты учреждения",
      docs_download_btn: "Скачать документ",

      parents_kicker: "Сотрудничество",
      parents_title: "Родителям и учащимся",
      parents_subtitle: "Порядок приема, требования к школьной форме и полезная информация",
      parent_card1_title: "Прием в 1-й класс",
      parent_card1_desc: "Порядок электронной подачи документов, список справок и этапы собеседования.",
      parent_card2_title: "Школьная форма",
      parent_card2_desc: "Требования к утвержденной единой школьной форме для мальчиков и девочек.",
      parent_card3_title: "Служба психолога",
      parent_card3_desc: "Советы специалистов по адаптации первоклассников и психологической поддержке.",
      parent_card4_title: "Родительские собрания",
      parent_card4_desc: "График проведения четвертных собраний и открытых консультаций.",

      gallery_kicker: "Школьная хроника",
      gallery_title: "Фотогалерея школы",

      faq_kicker: "Помощь",
      faq_title: "Часто задаваемые вопросы",

      appeal_kicker: "Обратная связь",
      appeal_title: "Электронное обращение граждан",
      appeal_subtitle: "Отправьте вопрос, предложение или заявление администрации школы онлайн",
      appeal_name: "Ф.И.О. заявителя",
      appeal_phone: "Номер телефона",
      appeal_email: "Электронная почта (необязательно)",
      appeal_type: "Тема обращения",
      appeal_message: "Текст обращения",
      appeal_consent: "Я даю согласие на обработку персональных данных",
      appeal_submit: "Отправить обращение",
      appeal_notice: "Примечание: Данная форма является демонстрационной. Официальные обращения фиксируются в установленном законодательством порядке.",

      contact_kicker: "Как нас найти",
      contact_title: "Контактная информация",
      contact_address_label: "Адрес",
      contact_address_val: "город Ташкент, Мирзо-Улугбекский район, проспект Мустакиллик, дом 42",
      contact_phone_label: "Телефоны канцелярии",
      contact_phone_val: "+998 (71) 234-56-78, +998 (71) 234-56-79",
      contact_email_label: "Электронная почта",
      contact_email_val: "info@maktab142.uz",
      contact_hours_label: "Часы работы",
      contact_hours_val: "Понедельник - Суббота: 08:00 - 18:30",

      footer_about_text: "Официальный веб-сайт общеобразовательной школы №142 Министерства дошкольного и школьного образования Республики Узбекистан.",
      footer_nav: "Навигация",
      footer_resources: "Полезные ресурсы",
      footer_rights: "Все права защищены законодательством.",
      toast_appeal_sent: "Ваше обращение принято. Администрация школы свяжется с вами."
    },

    en: {
      gov_republic: "Ministry of Preschool and School Education of the Republic of Uzbekistan",
      gov_hotline: "Hotline: 1006",
      school_name_short: "Public School No. 142",
      school_locality_short: "Tashkent City, Mirzo Ulugbek District",

      nav_home: "Home",
      nav_about: "About School",
      nav_admin: "Administration",
      nav_teachers: "Faculty",
      nav_timetable: "Timetable",
      nav_news: "News",
      nav_life: "Student Life",
      nav_docs: "Documents",
      nav_parents: "Parents",
      nav_gallery: "Gallery",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_search: "Search",

      hero_kicker: "State General Education Institution",
      hero_title: "Knowledge is the foundation of the future!",
      hero_desc: "We cultivate a well-rounded generation equipped with quality education, modern competencies, and high moral values to serve our nation.",
      hero_btn_about: "About School",
      hero_btn_news: "View Announcements",
      hero_feat1: "Specialized Academic Tracks",
      hero_feat2: "STEAM & Digital Labs",
      hero_feat3: "Olympiad Awardees",
      hero_facade_tag: "Academic Campus",
      hero_facade_title: "General Education School No. 142",

      stat_students: "1,450+",
      stat_students_label: "Enrolled Students",
      stat_teachers: "86",
      stat_teachers_label: "Certified Educators",
      stat_classes: "48",
      stat_classes_label: "Classrooms",
      stat_clubs: "24",
      stat_clubs_label: "Extracurricular Clubs",
      stat_note: "* Information reflects standard academic metrics for the current school year.",

      about_kicker: "History & Ethos",
      about_title: "A Center for Education and Character",
      about_p1: "Our institution upholds rich traditions of academic excellence and holistic student development, following the National Educational Standards of the Republic of Uzbekistan.",
      about_p2: "Our core mission is to foster independent thinkers, civic responsibility, and proficient scholars ready for higher education and technological careers.",
      about_mission_title: "Our Mission",
      about_mission_desc: "Unlocking each student's potential through tailored pedagogies.",
      about_vision_title: "Our Vision",
      about_vision_desc: "Harmonizing international educational standards with national values.",
      about_btn_more: "Detailed Information",

      fac_kicker: "School Grounds",
      fac_title: "Campus Infrastructure",
      fac_lib_title: "Library Center",
      fac_lib_desc: "Comprehensive repository of over 20,000 academic, scientific, and literary titles.",
      fac_it_title: "Computer Classrooms",
      fac_it_desc: "Equipped with high-speed fiber-optic network and modern desktop computers.",
      fac_sport_title: "Sports Complex",
      fac_sport_desc: "Spacious indoor gymnasium and regulation outdoor turf soccer field.",
      fac_lab_title: "STEAM Laboratories",
      fac_lab_desc: "Practical experimental facilities for physics, chemistry, and biology.",

      admin_kicker: "Leadership",
      admin_title: "School Administration",
      admin_subtitle: "Official leadership responsible for academic standards and student welfare",
      admin_p1_role: "School Principal",
      admin_p1_name: "Azizova Nigora Bakhtiyorovna",
      admin_p1_bio: "Senior educator with 20 years of academic experience. Honored with National Excellence in Education Award.",
      admin_p1_reception: "Monday and Wednesday: 14:00 - 17:00",
      admin_p2_role: "Deputy Principal for Academic Affairs",
      admin_p2_name: "Rustamov Shavkat Komilovich",
      admin_p2_bio: "Mathematics educator, coordinator of curriculum development and instructional frameworks.",
      admin_p2_reception: "Tuesday and Thursday: 10:00 - 13:00",
      admin_p3_role: "Deputy Principal for Student Affairs",
      admin_p3_name: "Saidova Dilnoza Akbarovna",
      admin_p3_bio: "Oversees student character education, extracurricular clubs, and youth leadership.",
      admin_p3_reception: "Friday: 14:00 - 17:00",
      admin_reception_label: "Public Reception Hours:",

      teachers_kicker: "Teaching Staff",
      teachers_title: "Our Faculty Members",
      teachers_subtitle: "Experienced teachers dedicated to rigorous academic instruction",
      teachers_search_ph: "Search faculty by name or subject...",
      cat_all: "All Subjects",
      cat_lang: "Native Language & Lit",
      cat_math: "Mathematics",
      cat_it: "Informatics & IT",
      cat_science: "Natural Sciences",
      cat_foreign: "Foreign Languages",
      cat_primary: "Primary Education",

      routine_kicker: "Daily Routine",
      routine_title: "School Hours & Bell Schedule",
      routine_shift1: "1st Shift: 08:00 - 13:10",
      routine_shift2: "2nd Shift: 13:30 - 18:20",
      routine_duration: "Class Duration: 45 minutes",
      routine_recess: "Main Recess: 15 minutes",

      tt_kicker: "Academics",
      tt_title: "Interactive Class Timetable",
      tt_subtitle: "Select grade level, section, and day of the week to inspect schedule",
      tt_class_label: "Grade:",
      tt_group_label: "Section:",
      tt_period: "Period",
      tt_time: "Time",
      tt_subject: "Subject",
      tt_teacher: "Instructor",
      tt_room: "Room",

      news_kicker: "Announcements",
      news_title: "School News & Bulletins",
      news_subtitle: "Official announcements, academic milestones, and student activities",
      news_tab_all: "All Articles",
      news_tab_academic: "Olympiads",
      news_tab_events: "Events",
      news_tab_announcements: "Notices",
      news_read_more: "Read Full Article",

      life_kicker: "Activities",
      life_title: "Student Life & Honors",
      life_tab_achievements: "Academic Honors",
      life_tab_clubs: "School Clubs",
      life_tab_initiatives: "Student Council",

      docs_kicker: "Governance",
      docs_title: "Public School Documents",
      docs_subtitle: "Statutory charters, institutional policies, and annual reports",
      docs_download_btn: "Download Document",

      parents_kicker: "Community",
      parents_title: "Parents & Students Portal",
      parents_subtitle: "Admission guidelines, uniform codes, and academic schedules",
      parent_card1_title: "Grade 1 Admissions",
      parent_card1_desc: "Online registration procedures, prerequisite records, and placement interviews.",
      parent_card2_title: "Uniform Guidelines",
      parent_card2_desc: "State-approved dress codes for boys and girls.",
      parent_card3_title: "Psychological Services",
      parent_card3_desc: "Guidance on transitional student wellbeing and developmental milestones.",
      parent_card4_title: "Parent Conferences",
      parent_card4_desc: "Term schedules for academic reviews and consultative assemblies.",

      gallery_kicker: "Campus Life",
      gallery_title: "Photo Archive",

      faq_kicker: "Inquiries",
      faq_title: "Frequently Asked Questions",

      appeal_kicker: "Citizen Inquiries",
      appeal_title: "Submit a Public Inquiry",
      appeal_subtitle: "Send an official petition, inquiry, or recommendation to school leadership",
      appeal_name: "Full Name",
      appeal_phone: "Telephone Number",
      appeal_email: "Email Address (optional)",
      appeal_type: "Inquiry Category",
      appeal_message: "Message Details",
      appeal_consent: "I consent to the lawful processing of provided personal data",
      appeal_submit: "Submit Inquiry",
      appeal_notice: "Notice: This form operates in demonstration mode. Official submissions are processed through state registries.",

      contact_kicker: "Get In Touch",
      contact_title: "Official Contact Details",
      contact_address_label: "Campus Address",
      contact_address_val: "Tashkent City, Mirzo Ulugbek District, Mustaqillik Avenue, House 42",
      contact_phone_label: "Administrative Telephone",
      contact_phone_val: "+998 (71) 234-56-78, +998 (71) 234-56-79",
      contact_email_label: "Official Email",
      contact_email_val: "info@maktab142.uz",
      contact_hours_label: "Working Hours",
      contact_hours_val: "Monday - Saturday: 08:00 - 18:30",

      footer_about_text: "Official web portal of Public General Education School No. 142 under the Ministry of Preschool and School Education of Uzbekistan.",
      footer_nav: "Directory",
      footer_resources: "Government Portals",
      footer_rights: "All rights reserved by national legislation.",
      toast_appeal_sent: "Your inquiry has been logged. The administration will contact you shortly."
    }
  };

  // =========================================================================
  // 2. TEACHERS DIRECTORY DATA (SAMPLE REPRESENTATIVE PORTAL PROFILES)
  // =========================================================================
  const teachersData = [
    {
      id: 1,
      name: "Qosimov Alisher Zokirovich",
      categoryKey: "math",
      subject: { uz: "Matematika va Algebra", ru: "Математика и Алгебра", en: "Mathematics & Algebra" },
      grade: { uz: "Oliy toifa", ru: "Высшая категория", en: "Senior Specialist" },
      experience: { uz: "18 yil pedagogik staj", ru: "18 лет стажа", en: "18 years experience" },
      bio: {
        uz: "Respublika matematika olimpiadalari g'oliblari tayyorlagan. Zamonaviy interaktiv metodlar ustasi.",
        ru: "Подготовил победителей республиканских олимпиад. Применяет интерактивные методы преподавания.",
        en: "Trained national math Olympiad champions. Expert in interactive problem-solving techniques."
      },
      initials: "AQ"
    },
    {
      id: 2,
      name: "Tursunova Gulnora Erkinovna",
      categoryKey: "lang",
      subject: { uz: "Ona tili va adabiyot", ru: "Родной язык и литература", en: "Native Language & Literature" },
      grade: { uz: "Oliy toifa", ru: "Высшая категория", en: "Senior Specialist" },
      experience: { uz: "22 yil pedagogik staj", ru: "22 года стажа", en: "22 years experience" },
      bio: {
        uz: "O'quvchilarda nutq madaniyati va mutolaa ko'nikmalarini shakllantirish bo'yicha ko'p yillik mutaxassis.",
        ru: "Специалист по культуре речи, выразительному чтению и глубокому анализу классической литературы.",
        en: "Longstanding expert in speech culture, literary discourse, and creative writing."
      },
      initials: "GT"
    },
    {
      id: 3,
      name: "Sobirov Jamshid Rustamovich",
      categoryKey: "it",
      subject: { uz: "Informatika va Raqamli texnologiyalar", ru: "Информатика и IT", en: "Informatics & Computing" },
      grade: { uz: "1-toifa", ru: "1-я категория", en: "1st Category" },
      experience: { uz: "9 yil pedagogik staj", ru: "9 лет стажа", en: "9 years experience" },
      bio: {
        uz: "Python dasturlash tili, robototexnika va veb-texnologiyalar bo'yicha to'garak rahbari.",
        ru: "Руководитель кружка по программированию на Python, основам робототехники и веб-разработке.",
        en: "Leader of extracurricular coding in Python, basic robotics, and web essentials."
      },
      initials: "JS"
    },
    {
      id: 4,
      name: "Xodjayeva Malika Anvarovna",
      categoryKey: "science",
      subject: { uz: "Fizika va Astronomiya", ru: "Физика и Астрономия", en: "Physics & Astronomy" },
      grade: { uz: "Oliy toifa", ru: "Высшая категория", en: "Senior Specialist" },
      experience: { uz: "15 yil pedagogik staj", ru: "15 лет стажа", en: "15 years experience" },
      bio: {
        uz: "Laboratoriya mashg'ulotlari va tajriba asosida fizika qonuniyatlarini tushuntirishda yetakchi ustoz.",
        ru: "Учит физике через наглядные лабораторные опыты и практические исследования природных явлений.",
        en: "Teaches principles through hands-on laboratory experiments and physics simulations."
      },
      initials: "MX"
    },
    {
      id: 5,
      name: "Karimova Ziyoda Mirjalolovna",
      categoryKey: "science",
      subject: { uz: "Kimyo va Biologiya", ru: "Химия и Биология", en: "Chemistry & Biology" },
      grade: { uz: "1-toifa", ru: "1-я категория", en: "1st Category" },
      experience: { uz: "12 yil pedagogik staj", ru: "12 лет стажа", en: "12 years experience" },
      bio: {
        uz: "Tibbiyot va tabiiy fanlar yo'nalishidagi sinflarda chuqurlashtirilgan darslar olib boradi.",
        ru: "Проводит углубленные уроки в классах медико-биологического направления.",
        en: "Conducts specialized tracks for students aiming for healthcare and life sciences."
      },
      initials: "ZK"
    },
    {
      id: 6,
      name: "Davlatova Feruza Olimovna",
      categoryKey: "foreign",
      subject: { uz: "Ingliz tili (CEFR B2/C1)", ru: "Английский язык", en: "English Language (IELTS/CEFR)" },
      grade: { uz: "Oliy toifa", ru: "Высшая категория", en: "Senior Specialist" },
      experience: { uz: "11 yil pedagogik staj", ru: "11 лет стажа", en: "11 years experience" },
      bio: {
        uz: "Xalqaro til sertifikati sohibi. O'quvchilarni xalqaro imtihonlarga tayyorlash bo'yicha mas'ul.",
        ru: "Обладатель международных сертификатов. Готовит старшеклассников к языковым экзаменам.",
        en: "Certified language examiner preparing students for academic proficiency tests."
      },
      initials: "FD"
    },
    {
      id: 7,
      name: "Nematov Botir Komilovich",
      categoryKey: "science",
      subject: { uz: "Tarix va Huquq asoslari", ru: "История и Право", en: "History & Law Fundamentals" },
      grade: { uz: "1-toifa", ru: "1-я категория", en: "1st Category" },
      experience: { uz: "14 yil pedagogik staj", ru: "14 лет стажа", en: "14 years experience" },
      bio: {
        uz: "O'zbekiston va jahon tarixi, huquqiy savodxonlik to'garagi rahbari.",
        ru: "Преподаватель истории Узбекистана, всемирной истории и основ правоведения.",
        en: "Instructor of regional and global civilizations and civic jurisprudence."
      },
      initials: "BN"
    },
    {
      id: 8,
      name: "Umarova Nargiza Shavkatovna",
      categoryKey: "primary",
      subject: { uz: "Boshlang'ich sinf ta'limi", ru: "Начальные классы", en: "Primary Education" },
      grade: { uz: "Oliy toifa", ru: "Высшая категория", en: "Senior Specialist" },
      experience: { uz: "19 yil pedagogik staj", ru: "19 лет стажа", en: "19 years experience" },
      bio: {
        uz: "Bolalarda ilk savodxonlik, chiroyli yozuv va mantiqiy fikrlashni rivojlantirish bo'yicha mutaxassis.",
        ru: "Опытный наставник первоклассников, эксперт по скорочтению и каллиграфии.",
        en: "Experienced early childhood educator specializing in foundational literacy."
      },
      initials: "NU"
    }
  ];

  // =========================================================================
  // 3. NEWS & ANNOUNCEMENTS DATA
  // =========================================================================
  const newsData = [
    {
      id: 1,
      categoryKey: "academic",
      category: { uz: "Olimpiada", ru: "Олимпиада", en: "Olympiad" },
      date: "14.10.2026",
      title: {
        uz: "Maktabimiz o‘quvchilari tuman fan olimpiadasida 12 ta faxrli o‘rinni egalladi",
        ru: "Ученики школы заняли 12 призовых мест на районном этапе предметной олимпиады",
        en: "Students secure 12 honor positions at the regional academic Olympiad"
      },
      desc: {
        uz: "Matematika, fizika va ona tili fanlari bo‘yicha o‘tkazilgan tuman bosqichida maktabimiz vakillari eng yuqori natijalarni ko‘rsatib, shahar bosqichiga yo‘llanma oldilar.",
        ru: "В районном туре по точным и гуманитарным дисциплинам наши ученики показали выдающиеся результаты и прошли в городской финал.",
        en: "Our delegates exhibited outstanding results in mathematics, physics, and linguistics, advancing to the municipal finals."
      }
    },
    {
      id: 2,
      categoryKey: "events",
      category: { uz: "Tadbir", ru: "Мероприятие", en: "Event" },
      date: "08.10.2026",
      title: {
        uz: "«Yashil maktab» loyihasi: o‘quvchilar 150 tup manzarali ko‘chat o‘tqazdilar",
        ru: "Проект «Зеленая школа»: учащиеся высадили 150 декоративных деревьев",
        en: "Green School initiative: students plant 150 ornamental trees on campus"
      },
      desc: {
        uz: "Ekologik madaniyatni oshirish va atrof-muhitni asrash maqsadida ota-onalar va o‘qituvchilar ishtirokida obodonlashtirish aksiyasi bo‘lib o‘tdi.",
        ru: "С целью бережного отношения к природе на школьной территории прошла акция по благоустройству с участием родителей и педагогов.",
        en: "Aiming to promote ecological stewardship, parents and faculty joined in beautifying campus green spaces."
      }
    },
    {
      id: 3,
      categoryKey: "announcements",
      category: { uz: "E'lon", ru: "Объявление", en: "Notice" },
      date: "01.10.2026",
      title: {
        uz: "1-chorak yakuniy ota-onalar umumiy yig‘ilishi jadvali e’lon qilindi",
        ru: "Опубликован график итоговых родительских собраний за 1-ю четверть",
        en: "First quarter parent-teacher conference schedule officially announced"
      },
      desc: {
        uz: "O‘quvchilarning choraklik o‘zlashtirish ko‘rsatkichlari, davomati va ichki tartib masalalari muhokamasi uchun barcha sinflar kesimida yig‘ilishlar bo‘lib o‘tadi.",
        ru: "На собраниях будут подведены итоги академической успеваемости, посещаемости и обсуждены планы на каникулярный период.",
        en: "Meetings across all grade levels will review academic achievement, attendance rates, and upcoming recess programs."
      }
    }
  ];

  // =========================================================================
  // 4. TIMETABLE SCHEDULE REPOSITORY (CONFIGURABLE SAMPLE DATA)
  // =========================================================================
  const sampleSchedule = {
    monday: [
      { num: 1, time: "08:00 - 08:45", subject: { uz: "Ona tili", ru: "Родной язык", en: "Native Language" }, teacher: "Tursunova G.", room: "204" },
      { num: 2, time: "08:50 - 09:35", subject: { uz: "Algebra", ru: "Алгебра", en: "Algebra" }, teacher: "Qosimov A.", room: "310" },
      { num: 3, time: "09:40 - 10:25", subject: { uz: "Fizika", ru: "Физика", en: "Physics" }, teacher: "Xodjayeva M.", room: "112" },
      { num: 4, time: "10:40 - 11:25", subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" }, teacher: "Davlatova F.", room: "208" },
      { num: 5, time: "11:30 - 12:15", subject: { uz: "O'zbekiston tarixi", ru: "История Узбекистана", en: "History" }, teacher: "Nematov B.", room: "302" },
      { num: 6, time: "12:20 - 13:05", subject: { uz: "Jismoniy tarbiya", ru: "Физкультура", en: "Physical Ed." }, teacher: "Ergashev D.", room: "Sport zal" }
    ],
    tuesday: [
      { num: 1, time: "08:00 - 08:45", subject: { uz: "Geometriya", ru: "Геометрия", en: "Geometry" }, teacher: "Qosimov A.", room: "310" },
      { num: 2, time: "08:50 - 09:35", subject: { uz: "Informatika", ru: "Информатика", en: "Informatics" }, teacher: "Sobirov J.", room: "IT-1" },
      { num: 3, time: "09:40 - 10:25", subject: { uz: "Kimyo", ru: "Химия", en: "Chemistry" }, teacher: "Karimova Z.", room: "215" },
      { num: 4, time: "10:40 - 11:25", subject: { uz: "Adabiyot", ru: "Литература", en: "Literature" }, teacher: "Tursunova G.", room: "204" },
      { num: 5, time: "11:30 - 12:15", subject: { uz: "Biologiya", ru: "Биология", en: "Biology" }, teacher: "Karimova Z.", room: "215" },
      { num: 6, time: "12:20 - 13:05", subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" }, teacher: "Davlatova F.", room: "208" }
    ],
    wednesday: [
      { num: 1, time: "08:00 - 08:45", subject: { uz: "Algebra", ru: "Алгебра", en: "Algebra" }, teacher: "Qosimov A.", room: "310" },
      { num: 2, time: "08:50 - 09:35", subject: { uz: "Ona tili", ru: "Родной язык", en: "Native Language" }, teacher: "Tursunova G.", room: "204" },
      { num: 3, time: "09:40 - 10:25", subject: { uz: "Geografiya", ru: "География", en: "Geography" }, teacher: "Aliyeva N.", room: "105" },
      { num: 4, time: "10:40 - 11:25", subject: { uz: "Jahon tarixi", ru: "Всемирная история", en: "World History" }, teacher: "Nematov B.", room: "302" },
      { num: 5, time: "11:30 - 12:15", subject: { uz: "Fizika", ru: "Физика", en: "Physics" }, teacher: "Xodjayeva M.", room: "112" },
      { num: 6, time: "12:20 - 13:05", subject: { uz: "Chaqiruvga qadar tayyorgarlik", ru: "НВП", en: "Civic Defense" }, teacher: "Mirzayev S.", room: "Harbiy xona" }
    ],
    thursday: [
      { num: 1, time: "08:00 - 08:45", subject: { uz: "Rus tili", ru: "Русский язык", en: "Russian Language" }, teacher: "Semyonova O.", room: "206" },
      { num: 2, time: "08:50 - 09:35", subject: { uz: "Geometriya", ru: "Геометрия", en: "Geometry" }, teacher: "Qosimov A.", room: "310" },
      { num: 3, time: "09:40 - 10:25", subject: { uz: "Kimyo laboratoriya", ru: "Химия (лабораторная)", en: "Chemistry Lab" }, teacher: "Karimova Z.", room: "Kimyo lab" },
      { num: 4, time: "10:40 - 11:25", subject: { uz: "Adabiyot", ru: "Литература", en: "Literature" }, teacher: "Tursunova G.", room: "204" },
      { num: 5, time: "11:30 - 12:15", subject: { uz: "Tarbiya fani", ru: "Воспитание", en: "Ethics & Civic Values" }, teacher: "Saidova D.", room: "Akt zal" }
    ],
    friday: [
      { num: 1, time: "08:00 - 08:45", subject: { uz: "Informatika", ru: "Информатика", en: "Informatics" }, teacher: "Sobirov J.", room: "IT-2" },
      { num: 2, time: "08:50 - 09:35", subject: { uz: "Algebra", ru: "Алгебра", en: "Algebra" }, teacher: "Qosimov A.", room: "310" },
      { num: 3, time: "09:40 - 10:25", subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" }, teacher: "Davlatova F.", room: "208" },
      { num: 4, time: "10:40 - 11:25", subject: { uz: "O'zbekiston tarixi", ru: "История Узбекистана", en: "History" }, teacher: "Nematov B.", room: "302" },
      { num: 5, time: "11:30 - 12:15", subject: { uz: "Jismoniy tarbiya", ru: "Физкультура", en: "Physical Ed." }, teacher: "Ergashev D.", room: "Sport zal" }
    ],
    saturday: [
      { num: 1, time: "08:00 - 08:45", subject: { uz: "Biologiya", ru: "Биология", en: "Biology" }, teacher: "Karimova Z.", room: "215" },
      { num: 2, time: "08:50 - 09:35", subject: { uz: "Fizika laboratoriya", ru: "Физика (лабораторная)", en: "Physics Lab" }, teacher: "Xodjayeva M.", room: "Fizika lab" },
      { num: 3, time: "09:40 - 10:25", subject: { uz: "Ona tili", ru: "Родной язык", en: "Native Language" }, teacher: "Tursunova G.", room: "204" },
      { num: 4, time: "10:40 - 11:25", subject: { uz: "Sinf soati / To'garaklar", ru: "Классный час / Кружки", en: "Homeroom / Clubs" }, teacher: "Sinf rahbari", room: "Sinf xonasi" }
    ]
  };

  // =========================================================================
  // 5. OFFICIAL DOCUMENTS REPOSITORY
  // =========================================================================
  const docsData = [
    {
      title: {
        uz: "Umumiy o‘rta ta’lim maktabining davlat Ustavi",
        ru: "Устав государственного общеобразовательного учреждения",
        en: "Official Public School Charter & Governance Statute"
      },
      type: "PDF",
      size: "2.4 MB",
      date: "01.09.2026"
    },
    {
      title: {
        uz: "Maktab ichki mehnat va o‘quv tartib qoidalari",
        ru: "Правила внутреннего распорядка для сотрудников и учащихся",
        en: "Internal Operational Regulations & Conduct Standards"
      },
      type: "PDF",
      size: "1.1 MB",
      date: "05.09.2026"
    },
    {
      title: {
        uz: "2026-2027 o‘quv yili uchun yillik ish rejasi",
        ru: "Годовой план учебно-воспитательной работы на 2026-2027 уч. год",
        en: "Annual Academic and Strategic Activity Plan 2026-2027"
      },
      type: "PDF",
      size: "3.2 MB",
      date: "10.09.2026"
    },
    {
      title: {
        uz: "1-sinfga qabul qilish tartibi va talab qilinadigan hujjatlar",
        ru: "Регламент приема в 1-й класс и перечень необходимых документов",
        en: "First-Grade Enrollment Regulation and Prerequisite Checklists"
      },
      type: "PDF",
      size: "850 KB",
      date: "15.08.2026"
    },
    {
      title: {
        uz: "Maktab jamoatchilik va moliyaviy ochiqlik hisoboti",
        ru: "Публичный отчет о прозрачности и финансовой деятельности",
        en: "Public Accountability & Financial Transparency Report"
      },
      type: "PDF",
      size: "1.8 MB",
      date: "20.09.2026"
    },
    {
      title: {
        uz: "Ota-onalar qo‘mitasi faoliyati to‘g‘risidagi nizom",
        ru: "Положение о деятельности родительского комитета",
        en: "Statutory Charter of the Parent-Teacher Advisory Council"
      },
      type: "PDF",
      size: "620 KB",
      date: "02.09.2026"
    }
  ];

  // =========================================================================
  // 6. PHOTO GALLERY DATA & LIGHTBOX
  // =========================================================================
  const galleryItems = [
    { title: { uz: "Maktab asosiy fasadi va maydoni", ru: "Главный фасад и площадь школы", en: "Main campus facade and courtyard" }, category: "campus" },
    { title: { uz: "Raqamli texnologiyalar va IT xonasi", ru: "Кабинет цифровых технологий и IT", en: "Digital laboratory and IT classroom" }, category: "classes" },
    { title: { uz: "Axborot-kutubxona resurs markazi", ru: "Информационно-библиотечный центр", en: "Library and media resource center" }, category: "campus" },
    { title: { uz: "Keng yopiq sport zali mashg'ulotlari", ru: "Занятия в просторном спортзале", en: "Indoor gymnasium athletic drills" }, category: "sports" },
    { title: { uz: "STEAM kimyo-fizika laboratoriyasi", ru: "STEAM лаборатория химии и физики", en: "STEAM chemistry and physics lab" }, category: "classes" },
    { title: { uz: "Bilimlar kuni va bayram tantanasi", ru: "Праздничная линейка ко Дню знаний", en: "Knowledge Day opening ceremony" }, category: "events" }
  ];

  // =========================================================================
  // 7. APPLICATION STATE
  // =========================================================================
  const state = {
    currentLang: localStorage.getItem('school_lang') || 'uz',
    currentTheme: localStorage.getItem('school_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    teacherCategory: 'all',
    teacherSearch: '',
    newsCategory: 'all',
    currentDay: 'monday',
    lightboxIndex: 0
  };

  document.documentElement.lang = state.currentLang;
  document.documentElement.setAttribute('data-theme', state.currentTheme);

  // =========================================================================
  // 8. NOTIFICATION TOAST UTILITY
  // =========================================================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // =========================================================================
  // 9. I18N RENDER ENGINE
  // =========================================================================
  function setLanguage(lang) {
    if (!i18nData[lang]) return;
    state.currentLang = lang;
    localStorage.setItem('school_lang', lang);
    document.documentElement.lang = lang;

    // Update all text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[lang][key]) {
        el.textContent = i18nData[lang][key];
      }
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (i18nData[lang][key]) {
        el.setAttribute('placeholder', i18nData[lang][key]);
      }
    });

    // Update Language Dropdown Button Text
    const langBtnText = document.getElementById('current-lang-text');
    if (langBtnText) {
      const labelMap = { uz: 'O‘zbekcha', ru: 'Русский', en: 'English' };
      langBtnText.textContent = labelMap[lang] || 'O‘zbekcha';
    }

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Re-render data-dependent components
    renderTeachers();
    renderNews();
    renderTimetable();
    renderDocuments();
    renderGallery();
  }

  // Language Dropdown Events
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.remove('show');
      });
    });
  }

  // =========================================================================
  // 10. THEME SWITCHER (LIGHT / DARK)
  // =========================================================================
  function setTheme(theme) {
    state.currentTheme = theme;
    localStorage.setItem('school_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  // =========================================================================
  // 11. SUBTLE 3D ACADEMIC CANVAS (THREE.JS WITH 2D FALLBACK)
  // =========================================================================
  function initAcademicHero3D() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    if (typeof THREE === 'undefined') {
      run2DCanvasFallback(canvas);
      return;
    }

    try {
      const container = canvas.parentElement;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 6.5;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'default'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(container.clientWidth, container.clientHeight);

      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Procedural 3D Academic Wisdom Rings (Subtle, slow orbit)
      const ringGeo = new THREE.TorusGeometry(1.9, 0.015, 16, 90);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00a896, transparent: true, opacity: 0.6 });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.rotation.x = Math.PI / 3;
      mainGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.2, 0.01, 16, 90);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x134074, transparent: true, opacity: 0.45 });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.y = Math.PI / 4;
      mainGroup.add(ring2);

      // Subtle Educational Geometric Solid (Icosahedron representing multi-faceted disciplines)
      const icosaGeo = new THREE.IcosahedronGeometry(1.2, 1);
      const icosaMat = new THREE.MeshStandardMaterial({
        color: 0x134074,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const icosa = new THREE.Mesh(icosaGeo, icosaMat);
      mainGroup.add(icosa);

      // Gentle floating particles representing ideas & discovery (250 particles)
      const pCount = 250;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i += 3) {
        const r = 1.8 + Math.random() * 2.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        pPos[i] = r * Math.sin(phi) * Math.cos(theta);
        pPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        pPos[i + 2] = r * Math.cos(phi);
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x00a896,
        transparent: true,
        opacity: 0.6
      });
      const particleCloud = new THREE.Points(pGeo, pMat);
      mainGroup.add(particleCloud);

      // Studio Lighting
      const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambLight);
      const dirLight = new THREE.DirectionalLight(0x00a896, 1.2);
      dirLight.position.set(3, 4, 5);
      scene.add(dirLight);

      // Parallax interaction
      let mouseX = 0;
      let mouseY = 0;
      window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
      });

      // Resize
      window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });

      // Render loop
      let isVisible = true;
      const obs = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      }, { threshold: 0.1 });
      obs.observe(container);

      function animate() {
        requestAnimationFrame(animate);
        if (!isVisible) return;

        ring1.rotation.z += 0.003;
        ring2.rotation.x += 0.002;
        icosa.rotation.y += 0.004;
        particleCloud.rotation.y += 0.001;

        // Smooth parallax
        mainGroup.rotation.y += (mouseX - mainGroup.rotation.y) * 0.04;
        mainGroup.rotation.x += (-mouseY - mainGroup.rotation.x) * 0.04;

        renderer.render(scene, camera);
      }
      animate();

    } catch (e) {
      console.warn("3D WebGL init fallback:", e);
      run2DCanvasFallback(canvas);
    }
  }

  function run2DCanvasFallback(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    let rot = 0;
    function render2D() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      // Outer orbit
      ctx.beginPath();
      ctx.ellipse(0, 0, 140, 60, rot, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 168, 150, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner orbit
      ctx.beginPath();
      ctx.ellipse(0, 0, 160, 70, -rot * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(19, 64, 116, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
      rot += 0.008;
      requestAnimationFrame(render2D);
    }
    render2D();
  }

  // =========================================================================
  // 12. ANIMATED STATISTICS COUNTERS (INTERSECTION OBSERVER)
  // =========================================================================
  function initCounters() {
    const section = document.getElementById('stats');
    if (!section) return;

    let animated = false;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateNumber('stat-num-students', 1450, '+');
        animateNumber('stat-num-teachers', 86, '');
        animateNumber('stat-num-classes', 48, '');
        animateNumber('stat-num-clubs', 24, '');
      }
    }, { threshold: 0.25 });
    obs.observe(section);

    function animateNumber(id, target, suffix) {
      const el = document.getElementById(id);
      if (!el) return;
      let start = 0;
      const duration = 1600;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);

        el.textContent = `${current.toLocaleString()}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${target.toLocaleString()}${suffix}`;
        }
      }
      requestAnimationFrame(update);
    }
  }

  // =========================================================================
  // 13. TEACHERS DIRECTORY RENDERING & FILTERING
  // =========================================================================
  function renderTeachers() {
    const grid = document.getElementById('teachers-grid');
    if (!grid) return;
    const lang = state.currentLang;
    const filter = state.teacherCategory;
    const search = state.teacherSearch.toLowerCase().trim();

    const filtered = teachersData.filter(t => {
      // Category match
      if (filter !== 'all' && t.categoryKey !== filter) return false;

      // Search match
      if (search) {
        const nameMatch = t.name.toLowerCase().includes(search);
        const subjMatch = t.subject[lang].toLowerCase().includes(search);
        if (!nameMatch && !subjMatch) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);">
          <p>${lang === 'uz' ? "O'qituvchilar topilmadi." : lang === 'ru' ? "Учителя не найдены." : "No teachers found."}</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(t => `
      <div class="official-card teacher-card">
        <div class="teacher-avatar">${t.initials}</div>
        <h3 class="teacher-name">${t.name}</h3>
        <p class="teacher-subject">${t.subject[lang]}</p>
        <span class="teacher-meta-tag">${t.grade[lang]} · ${t.experience[lang]}</span>
        <p class="teacher-bio">${t.bio[lang]}</p>
      </div>
    `).join('');
  }

  // Category filter tabs
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.teacherCategory = tab.getAttribute('data-cat');
      renderTeachers();
    });
  });

  const teacherInput = document.getElementById('teacher-search-input');
  if (teacherInput) {
    teacherInput.addEventListener('input', (e) => {
      state.teacherSearch = e.target.value;
      renderTeachers();
    });
  }

  // =========================================================================
  // 14. INTERACTIVE TIMETABLE SCHEDULE
  // =========================================================================
  function renderTimetable() {
    const tbody = document.getElementById('timetable-tbody');
    if (!tbody) return;
    const lang = state.currentLang;
    const daySchedule = sampleSchedule[state.currentDay] || sampleSchedule.monday;

    tbody.innerHTML = daySchedule.map(row => `
      <tr>
        <td><span class="lesson-badge">${row.num}</span></td>
        <td class="tabular-nums" style="font-weight: 600;">${row.time}</td>
        <td style="font-weight: 700; color: var(--text-main);">${row.subject[lang]}</td>
        <td>${row.teacher}</td>
        <td><span style="display: inline-block; padding: 2px 8px; border-radius: 4px; background: var(--bg-surface-alt); font-weight: 600;">${row.room}</span></td>
      </tr>
    `).join('');
  }

  // Weekday tabs
  document.querySelectorAll('.weekday-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.weekday-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentDay = tab.getAttribute('data-day');
      renderTimetable();
    });
  });

  const classSelect = document.getElementById('timetable-class-select');
  const groupSelect = document.getElementById('timetable-group-select');
  if (classSelect) classSelect.addEventListener('change', renderTimetable);
  if (groupSelect) groupSelect.addEventListener('change', renderTimetable);

  // =========================================================================
  // 15. NEWS & ANNOUNCEMENTS RENDERING & MODAL READER
  // =========================================================================
  function renderNews() {
    const grid = document.getElementById('news-grid');
    if (!grid) return;
    const lang = state.currentLang;
    const filter = state.newsCategory;

    const filtered = newsData.filter(item => {
      if (filter !== 'all' && item.categoryKey !== filter) return false;
      return true;
    });

    grid.innerHTML = filtered.map(item => `
      <div class="official-card news-card">
        <div class="news-cover-frame">
          <!-- Institutional SVG Pattern Cover -->
          <svg class="news-cover-svg" viewBox="0 0 400 200" preserveAspectRatio="none">
            <rect width="100%" height="100%" fill="var(--primary-navy)" />
            <circle cx="200" cy="100" r="140" fill="none" stroke="rgba(0,168,150,0.25)" stroke-width="2" />
            <polygon points="120,40 280,40 200,160" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
            <text x="50%" y="54%" text-anchor="middle" fill="#ffffff" font-size="28" font-family="Outfit" font-weight="700" letter-spacing="2" opacity="0.35">MAKTAB №142</text>
          </svg>
          <span class="news-badge">${item.category[lang]}</span>
        </div>
        <div class="news-body">
          <div class="news-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>${item.date}</span>
          </div>
          <h3 class="news-title">${item.title[lang]}</h3>
          <p class="news-desc">${item.desc[lang]}</p>
          <a href="#news" class="news-read-more" data-news-id="${item.id}">
            <span>${i18nData[lang].news_read_more}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>
      </div>
    `).join('');

    // Attach click handler for detailed view
    grid.querySelectorAll('.news-read-more').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(link.getAttribute('data-news-id'), 10);
        openNewsModal(id);
      });
    });
  }

  function openNewsModal(newsId) {
    const item = newsData.find(n => n.id === newsId);
    if (!item) return;
    const lang = state.currentLang;
    const modal = document.getElementById('generic-modal-overlay');
    const content = document.getElementById('generic-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="font-size: 0.8125rem; font-weight: 700; color: var(--accent-teal); text-transform: uppercase; margin-bottom: 8px;">
        ${item.category[lang]} · ${item.date}
      </div>
      <h2 style="font-size: 1.5rem; margin-bottom: 16px;">${item.title[lang]}</h2>
      <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.8; margin-bottom: 24px;">${item.desc[lang]}</p>
      <div style="padding: 16px; background-color: var(--bg-surface-alt); border-radius: var(--radius-sm); font-size: 0.8125rem; color: var(--text-light); margin-bottom: 24px;">
        ${lang === 'uz' ? "Ushbu xabar 142-sonli umumiy o'rta ta'lim maktabi rasmiy axborot xizmati tomonidan tasdiqlangan." : lang === 'ru' ? "Данное сообщение верифицировано пресс-службой общеобразовательной школы №142." : "Official announcement verified by the School No. 142 Information Department."}
      </div>
      <button class="btn btn-primary" id="modal-close-action" style="width: 100%;">
        ${lang === 'uz' ? 'Yopish' : lang === 'ru' ? 'Закрыть' : 'Close'}
      </button>
    `;

    modal.classList.add('open');
    document.getElementById('modal-close-action').addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  document.querySelectorAll('.news-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.newsCategory = tab.getAttribute('data-news-cat');
      renderNews();
    });
  });

  // =========================================================================
  // 16. SCHOOL LIFE TABS (ACHIEVEMENTS, CLUBS, INITIATIVES)
  // =========================================================================
  document.querySelectorAll('.life-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.life-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.life-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-panel');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });

  // =========================================================================
  // 17. OFFICIAL DOCUMENTS RENDERING & DOWNLOAD ACTION
  // =========================================================================
  function renderDocuments() {
    const grid = document.getElementById('documents-grid');
    if (!grid) return;
    const lang = state.currentLang;

    grid.innerHTML = docsData.map((doc, idx) => `
      <div class="official-card doc-card">
        <div class="doc-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div class="doc-info">
          <h4 class="doc-title">${doc.title[lang]}</h4>
          <div class="doc-meta">
            <span>${doc.type}</span> ·
            <span class="tabular-nums">${doc.size}</span> ·
            <span class="tabular-nums">${doc.date}</span>
          </div>
          <button class="btn btn-outline btn-sm download-doc-btn" data-doc-idx="${idx}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>${i18nData[lang].docs_download_btn}</span>
          </button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.download-doc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-doc-idx'), 10);
        const doc = docsData[idx];
        showToast(`${doc.title[lang]} (${doc.size}) — ${lang === 'uz' ? "Yuklab olish boshlandi" : lang === 'ru' ? "Скачивание начато" : "Download initiated"}`);
      });
    });
  }

  // =========================================================================
  // 18. PHOTO GALLERY RENDERING & LIGHTBOX
  // =========================================================================
  function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    const lang = state.currentLang;

    grid.innerHTML = galleryItems.map((item, idx) => `
      <div class="gallery-item" data-index="${idx}">
        <svg class="gallery-svg" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g-grad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0b2545" />
              <stop offset="100%" stop-color="#134074" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g-grad-${idx})" />
          <circle cx="200" cy="150" r="80" fill="none" stroke="rgba(0,168,150,0.3)" stroke-width="3" />
          <path d="M160,110 L240,110 L200,190 Z" fill="rgba(255,255,255,0.06)" />
          <text x="50%" y="52%" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Outfit" font-weight="700">FOTOLAVHA ${idx + 1}</text>
        </svg>
        <div class="gallery-caption-overlay">${item.title[lang]}</div>
      </div>
    `).join('');

    grid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        state.lightboxIndex = parseInt(item.getAttribute('data-index'), 10);
        openLightbox();
      });
    });
  }

  const lightbox = document.getElementById('lightbox-modal');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function openLightbox() {
    if (!lightbox) return;
    updateLightboxContent();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryItems[state.lightboxIndex];
    if (lightboxCaption && item) {
      lightboxCaption.textContent = item.title[state.currentLang];
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      state.lightboxIndex = (state.lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxContent();
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      state.lightboxIndex = (state.lightboxIndex + 1) % galleryItems.length;
      updateLightboxContent();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
  });

  // =========================================================================
  // 19. FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // =========================================================================
  // 20. PUBLIC APPEALS FORM VALIDATION & SUBMISSION
  // =========================================================================
  const appealForm = document.getElementById('appeal-form');
  if (appealForm) {
    appealForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('appeal-name');
      const phone = document.getElementById('appeal-phone');
      const message = document.getElementById('appeal-message');
      const consent = document.getElementById('appeal-consent');

      // Check name
      if (!name.value.trim() || name.value.trim().length < 3) {
        name.closest('.form-group').classList.add('has-error');
        valid = false;
      } else {
        name.closest('.form-group').classList.remove('has-error');
      }

      // Check phone
      if (!phone.value.trim() || phone.value.trim().length < 9) {
        phone.closest('.form-group').classList.add('has-error');
        valid = false;
      } else {
        phone.closest('.form-group').classList.remove('has-error');
      }

      // Check message
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.closest('.form-group').classList.add('has-error');
        valid = false;
      } else {
        message.closest('.form-group').classList.remove('has-error');
      }

      // Check consent
      if (!consent.checked) {
        alert(state.currentLang === 'uz' ? "Iltimos, ma'lumotlar qayta ishlanishiga rozilik bildiring." : "Пожалуйста, подтвердите согласие на обработку данных.");
        valid = false;
      }

      if (!valid) return;

      const submitBtn = document.getElementById('appeal-submit-btn');
      const prevText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = state.currentLang === 'uz' ? "Yuborilmoqda..." : state.currentLang === 'ru' ? "Отправка..." : "Submitting...";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = prevText;
        appealForm.reset();
        showToast(i18nData[state.currentLang].toast_appeal_sent);
      }, 1000);
    });

    const phoneField = document.getElementById('appeal-phone');
    if (phoneField) {
      phoneField.addEventListener('focus', () => {
        if (!phoneField.value) phoneField.value = '+998 ';
      });
    }
  }

  // =========================================================================
  // 21. GLOBAL SEARCH MODAL
  // =========================================================================
  const searchTrigger = document.getElementById('nav-search-trigger');
  const searchModal = document.getElementById('search-modal-overlay');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('search-results-list');

  if (searchTrigger && searchModal) {
    searchTrigger.addEventListener('click', () => {
      searchModal.classList.add('open');
      setTimeout(() => searchInput && searchInput.focus(), 100);
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
          searchResults.innerHTML = '';
          return;
        }

        const lang = state.currentLang;
        const matches = [];

        // Search Teachers
        teachersData.forEach(t => {
          if (t.name.toLowerCase().includes(query) || t.subject[lang].toLowerCase().includes(query)) {
            matches.push({ title: `${t.name} (${t.subject[lang]})`, section: i18nData[lang].nav_teachers, link: "#teachers" });
          }
        });

        // Search News
        newsData.forEach(n => {
          if (n.title[lang].toLowerCase().includes(query)) {
            matches.push({ title: n.title[lang], section: i18nData[lang].nav_news, link: "#news" });
          }
        });

        // Search Documents
        docsData.forEach(d => {
          if (d.title[lang].toLowerCase().includes(query)) {
            matches.push({ title: d.title[lang], section: i18nData[lang].nav_docs, link: "#documents" });
          }
        });

        if (matches.length === 0) {
          searchResults.innerHTML = `<li style="padding: 12px; color: var(--text-light); text-align: center;">${lang === 'uz' ? "Natijalar topilmadi" : "Ничего не найдено"}</li>`;
        } else {
          searchResults.innerHTML = matches.map(m => `
            <li style="padding: 10px; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <a href="${m.link}" class="search-result-link" style="font-weight: 600; color: var(--text-main); font-size: 0.875rem;">${m.title}</a>
              <span style="font-size: 0.75rem; color: var(--accent-teal); font-weight: 700;">${m.section}</span>
            </li>
          `).join('');

          searchResults.querySelectorAll('.search-result-link').forEach(link => {
            link.addEventListener('click', () => {
              searchModal.classList.remove('open');
            });
          });
        }
      });
    }
  }

  // Generic modal close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        modal.classList.remove('open');
      }
    });
  });

  // =========================================================================
  // 22. MOBILE NAVIGATION DRAWER & SCROLL SPY
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileClose = document.getElementById('mobile-drawer-close');

  function openMobileNav() {
    mobileDrawer.classList.add('open');
    mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.mobile-nav-links .nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Sticky Navbar & Back to Top
  const navbar = document.getElementById('main-navbar');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 20);
    if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollY > 400);

    // Active link highlighting
    const sections = ['hero', 'about', 'admin', 'teachers', 'timetable', 'news', 'life', 'documents', 'parents', 'contact'];
    let activeId = 'hero';
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop - 120;
        if (scrollY >= top) activeId = secId;
      }
    });

    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 23. INITIALIZATION CALLS
  // =========================================================================
  setLanguage(state.currentLang);
  initAcademicHero3D();
  initCounters();
});
