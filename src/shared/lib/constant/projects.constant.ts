import { createTag } from '@shared/lib/utils'
import type { ProjectEntity } from 'entities'

export const PROJECTS: ProjectEntity.Model.Types.Project[] = [
  {
    id: 'nyst',
    title: 'NYST',
    category: 'commercial',
    description:
      'Fullstack-платформа автоклуба: публичная часть с календарём мероприятий, авторизацией и членством, а также admin-панель для управления событиями, таблицами и данными пользователей. Стек: React, NestJS, TanStack Query, Zustand, JWT и Stripe.',
    tags: [
      createTag('React', 'framework', 'frontend', 'react'),
      createTag('TypeScript', 'language', 'frontend', 'typescript'),
      createTag('NestJS', 'framework', 'backend', 'nestjs'),
      createTag('Node.js', 'framework', 'backend', 'nodejs'),
      createTag('TanStack Query', 'library', 'frontend', 'reactquery'),
      createTag('Zustand', 'library', 'frontend', 'zustand'),
      createTag('JWT', 'integration', 'backend', 'nodejs'),
      createTag('Stripe', 'integration', 'backend', 'stripe'),
    ],
    preview: '/images/projects/commercial/nyst/banner.webp',
    images: [
      {
        src: '/images/projects/commercial/nyst/calendar.webp',
        description:
          'UI календаря событий: навигация по месяцам, сетка дат и маркеры заездов. Выбор события открывает detail-панель с датой, временем, изображением и условиями участия; в интерфейсе также отображаются ограничения и скидки для участников клуба.',
      },
      {
        src: '/images/projects/commercial/nyst/login.webp',
        description:
          'Сценарий авторизации в модальном окне поверх текущей страницы: поля email и password, toggle видимости пароля, remember-me checkbox, а также переходы к восстановлению пароля и регистрации.',
      },
      {
        src: '/images/projects/commercial/nyst/membership.webp',
        description:
          'Секция тарифов с сопоставлением trial- и basic-планов: стоимость, набор преимуществ и условия участия вынесены в отдельные блоки. CTA покупки расположен рядом с соответствующим тарифом, что связывает выбор плана с целевым действием.',
      },
      {
        src: '/images/projects/commercial/nyst/mobile-login&date.webp',
        description:
          'Адаптация ключевых сценариев под узкий viewport: календарная сетка перестраивается в вертикальный список event-карточек, форма авторизации занимает мобильный экран, а контент JetRiders отображается в одноколоночной компоновке.',
      },
      {
        src: '/images/projects/commercial/nyst/mobile-nav-bar&footer.webp',
        description:
          'Мобильный паттерн навигации: меню открывается поверх страницы и предоставляет ссылки на основные разделы. В адаптивном footer сгруппированы навигационные ссылки, контактные данные и ссылки на социальные сети.',
      },
      {
        src: '/images/projects/commercial/nyst/admin-events.webp',
        description:
          'Admin-панель со списком мероприятий: таблица для просмотра записей и их статусов, рядом доступны действия управления событиями. Скриншот показывает отдельный административный сценарий, не смешанный с публичным календарём.',
      },
      {
        src: '/images/projects/commercial/nyst/admin-table-edit.webp',
        description:
          'Экран редактирования табличных данных в admin-панели. Формы и действия вынесены в отдельный рабочий интерфейс для изменения записей без перехода в публичную часть сайта.',
      },
      {
        src: '/images/projects/commercial/nyst/admin-user-info.png',
        description:
          'Карточка пользователя в административной панели: сводные данные аккаунта и связанные показатели собраны в одном представлении для проверки и управления профилем.',
      },
    ],
    backendCodeSnippets: [
      {
        title: 'Example: Events API',
        language: 'typescript',
        code: `@UseGuards(JwtAuthGuard)
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll(@Query() query: FindEventsQueryDto) {
    return this.eventsService.findAll(query)
  }
}`,
      },
    ],
    linkToDeployProject: 'https://nyst.ubc.one/',
  },
  {
    id: 'gettbot',
    title: 'GETTBOT.IO',
    category: 'commercial',
    description:
      'SaaS-платформа: бесконечная лента, cursor pagination, фильтрация, поиск в URL и мультиязычность.',
    tags: [
      createTag('React', 'framework', 'frontend', 'react'),
      createTag('TypeScript', 'language', 'frontend', 'typescript'),
      createTag('TanStack Query', 'library', 'frontend', 'reactquery'),
      createTag('Axios', 'library', 'frontend', 'reactquery'),
      createTag('i18next', 'library', 'frontend', 'i18next'),
      createTag('Tailwind CSS', 'styling', 'frontend', 'tailwindcss'),
      createTag('REST API', 'integration', 'backend', 'nodejs'),
    ],
    preview: '/images/projects/commercial/gettbot/preview.webp',
    images: [
      {
        src: '/images/projects/commercial/gettbot/gettbot-preview.webp',
        description: '',
      },
      {
        src: '/images/projects/commercial/gettbot/gettbot-sorts.webp',
        description:
          'Реализация адаптивной сетки карточек маркетплейса с серверной фильтрацией (биржа, валюта, мин. инвестиции, поиск по ID) и кастомной сортировкой по множеству метрик. Состояние всех фильтров, сортировки и пагинации синхронизировано с URL (query string), что позволяет делиться ссылкой на конкретную выборку и сохранять состояние при перезагрузке.',
      },
      {
        src: '/images/projects/commercial/gettbot/gettbot-card-loaders-s-mode.webp',
        description: '',
      },
      {
        src: '/images/projects/commercial/gettbot/gettbot-card-loaders.webp',
        description:
          'Демонстрация ленивой загрузки (lazy loading) и скелетон-состояний для сеточного и альтернативного табличного (списочного) видов отображения стратегий. Вкладка Network подтверждает асинхронную подгрузку данных API, а также кэширование статических ресурсов (иконок, макетов) для оптимизации времени до первого рендера.',
      },
      {
        src: '/images/projects/commercial/gettbot/mobile.webp',
        description:
          'Адаптивная мобильная версия страницы с полной переработкой UI под тач-управление. Демонстрирует корректную работу React-компонентов при смене viewport, включая вынос фильтров в отдельный интерфейс и вертикальный стек карточек.',
      },
      {
        src: '/images/projects/commercial/gettbot/gettbot-en-translate.webp',
        description: '',
      },

      {
        src: '/images/projects/commercial/gettbot/gettbot-zh-translate.webp',
        description:
          'Страница принципов платформы с модульной компонентной версткой и кастомной 3D-графикой. Подтверждает реализацию мультиязычности (i18n) на уровне всего приложения: переключение локалей (EN, RU, ZH) происходит без перезагрузки страницы и без дублирования кода компонентов.',
      },
    ],
    linkToDeployProject: 'https://gettbot.io/',
  },
  {
    id: 'ava-security',
    title: 'AVA Security',
    category: 'commercial',
    description:
      'Двуязычный лендинг AI-видеонаблюдения (RU/EN) с hero-секцией, CTA и блоками Security и Autonomy. Отдельный экран демонстрирует сценарии видеоаналитики: детекцию людей и животных, выезд из зоны и дорожные столкновения. Реализована адаптивная и кроссбраузерная вёрстка.',
    preview: '/images/projects/commercial/ava-security-services/main-ru.webp',
    tags: [
      createTag('TypeScript', 'language', 'frontend', 'typescript'),
      createTag('Tailwind CSS', 'styling', 'frontend', 'tailwindcss'),
      createTag('RU / EN', 'integration', 'general', 'i18next'),
      createTag('Responsive Design', 'feature', 'general', 'react'),
    ],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services/main-en.webp',
        description:
          'Англоязычная версия главной страницы. Помимо hero-блока видны секции Security и Autonomy: локальная обработка событий, снижение нагрузки на операторов, автоматическое формирование фрагментов инцидентов и доставка уведомлений в приложение.',
      },
      {
        src: '/images/projects/commercial/ava-security-services/main-ru.webp',
        description:
          'Русскоязычная версия главной страницы с теми же блоками Security и Autonomy. Скриншот показывает локальный анализ событий, защиту данных, автоматическую запись фрагментов инцидентов и уведомления в приложении.',
      },
      {
        src: '/images/projects/commercial/ava-security-services/video.webp',
        description:
          'Секция видеоаналитики с переключаемыми типами детекции: людей, животных, выезда из зоны и дорожных столкновений. Основная область оформлена как видеоплеер с LIVE-индикатором и кнопкой запуска; внизу указаны технологии проекта.',
      },
    ],
    linkToDeployProject: 'https://ava-security.services/',
  },
  {
    id: 'a-birds-chat',
    title: 'A Birds Chat',
    category: 'commercial',
    description: 'Приложение для создания временных приватных чатов без регистрации.',
    tags: [
      createTag('Web App', 'feature', 'general', 'react'),
      createTag('Private Chats', 'feature', 'general', 'telegram'),
      createTag('i18n', 'library', 'frontend', 'i18next'),
      createTag('App Store Integration', 'integration', 'general', 'github'),
    ],
    preview: '/images/projects/commercial/a-birds-chat/preview.webp',
    images: [
      {
        src: '/images/projects/commercial/a-birds-chat/a-birds-banner.webp',
        description:
          'Промо-лендинг iOS-приложения: адаптивная сетка, мокап iPhone с экраном ввода PIN-кода. Реализованы мультиязычность, фиксированная навигация и прямая интеграция с App Store.',
      },
      {
        src: '/images/projects/commercial/a-birds-chat/a-birds-images.webp',
        description:
          'Сверстал сетку карточек с абсолютным позиционированием мокапов iPhone и сов, настроил z-index для наложения графики и overflow: hidden для обрезки. Обеспечил адаптивное перестроение композиции под мобильные.',
      },
    ],
    linkToDeployProject: 'https://abirdschat.uk/',
  },
  {
    id: 'ubc',
    title: 'UBC',
    category: 'commercial',
    description:
      'Адаптивный сайт проектного офиса: главная с позиционированием и CTA, каталог кейсов с описаниями и стеками технологий, мобильная версия с фиксированной нижней навигацией.',
    tags: [
      createTag('Project Catalog', 'feature', 'general', 'git'),
      createTag('Responsive Design', 'feature', 'general', 'react'),
      createTag('Mobile Navigation', 'feature', 'general', 'react'),
    ],
    preview: '/images/projects/commercial/ubc/preview.webp',
    images: [
      {
        src: '/images/projects/commercial/ubc/banner.webp',
        description:
          'Первый экран лендинга проектного офиса: бренд, value proposition и CTA «Discuss the project». Текстовый блок и иллюстрация собраны в двухколоночную композицию; декоративный фон поддерживает визуальную тему чертежей.',
      },
      {
        src: '/images/projects/commercial/ubc/cards.webp',
        description:
          'Секция портфолио с карточками кейсов: название проекта, категория, стек технологий и превью продукта. Компонент карточки объединяет метаданные с изображением результата, позволяя быстро сравнивать проекты в общей сетке.',
      },
      {
        src: '/images/projects/commercial/ubc/mobile.webp',
        description:
          'Мобильная адаптация портфолио: карточки перестроены в одну колонку, а нижняя навигация закреплена у края viewport. На карточке сохранены превью, описание и тип проекта; фиксированная панель даёт доступ к Cases, Main и Audit.',
      },
    ],
    linkToDeployProject: 'https://ubc.one/',
  },
  {
    id: 'piggy-hodle',
    title: 'PiggyHODL',
    category: 'commercial',
    description:
      'Интерфейс показывает позиции игроков, баланс piggies, билеты и количество приглашённых участников.',
    tags: [
      createTag('Telegram Mini App', 'integration', 'frontend', 'telegram'),
      createTag('Leaderboard', 'feature', 'general', 'git'),
      createTag('Referral System', 'feature', 'general', 'nodejs'),
    ],
    preview: '/images/projects/commercial/piggy-hodle/preview.webp',
    images: [
      {
        src: '/images/projects/commercial/piggy-hodle/dashboard.webp',
        description:
          'Экран игры с лидербордом: ранги и профили участников, количество билетов и рефералов, игровые показатели и CTA для подписки или запуска игры.',
      },
    ],
  },
  {
    id: 'water-meters',
    title: 'Water Meters',
    category: 'commercial',
    description:
      'Веб-интерфейс системы учёта водосчётчиков: вход в административную часть и табличное представление данных абонентов/приборов учёта с действиями над записями.',
    tags: [
      createTag('Admin Dashboard', 'feature', 'general', 'git'),
      createTag('Authentication', 'feature', 'general', 'nodejs'),
      createTag('Data Tables', 'feature', 'general', 'git'),
    ],
    preview: '/images/projects/commercial/water-meters/preview.webp',
    images: [
      {
        src: '/images/projects/commercial/water-meters/auth.webp',
        description:
          'Экран авторизации в административную часть: компактная форма входа с полями учётных данных и основным submit-действием на фоне тематической иллюстрации.',
      },
      {
        src: '/images/projects/commercial/water-meters/table.webp',
        description:
          'Табличный экран управления данными водосчётчиков: записи представлены строками с набором атрибутов, а операции доступны из строки таблицы. Интерфейс ориентирован на просмотр и обработку множества записей.',
      },
    ],
  },
  {
    id: 'defuture',
    title: 'DeFuture',
    category: 'commercial',
    description:
      'Telegram Mini App с профилем, заданиями, рейтингом, балансами и реферальной системой; данные приложения загружаются через backend API.',
    preview: 'none',
    tags: [
      createTag('React', 'framework', 'frontend', 'react'),
      createTag('TypeScript', 'language', 'frontend', 'typescript'),
      createTag('Telegram Mini Apps', 'integration', 'frontend', 'telegram'),
      createTag('Telegram WebApp API', 'integration', 'frontend', 'telegram'),
      createTag('REST API', 'integration', 'backend', 'nodejs'),
    ],
    images: [
      {
        src: '/images/projects/commercial/defuture/DeFuture.webp',
        description:
          'Telegram Mini App с профилем, заданиями, рейтингом, балансами, реферальной системой и интеграцией с backend API.',
      },
    ],
  },
  {
    id: 'cash-flow',
    title: 'Cash Flow',
    category: 'pet-project',
    description:
      'Fullstack-приложение для личных финансов: доходы и расходы, категории, бюджеты, фильтрация и пагинация транзакций.',
    tags: [
      createTag('React', 'framework', 'frontend', 'react'),
      createTag('TypeScript', 'language', 'frontend', 'typescript'),
      createTag('NestJS', 'framework', 'backend', 'nestjs'),
      createTag('PostgreSQL', 'database', 'backend', 'postgresql'),
      createTag('MikroORM', 'library', 'backend', 'postgresql'),
      createTag('TanStack Query', 'library', 'frontend', 'reactquery'),
      createTag('Zustand', 'library', 'frontend', 'zustand'),
      createTag('Docker', 'devops', 'general', 'docker'),
    ],
    images: [
      {
        src: '/images/projects/commercial/ava-security-services/ava-security-services.png',
        description: 'Banner',
      },
    ],
    backendCodeSnippets: [
      {
        title: 'Example: Transactions API',
        language: 'typescript',
        code: `@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll(@Query() query: TransactionsQueryDto) {
    return this.transactionsService.findAll(query)
  }
}`,
      },
    ],
  },
]
