# Decisions

Компактный журнал. Записывать только утверждённые решения; не превращать в дневник обсуждений.

| ID | Status | Decision | Reason |
|---|---|---|---|
| D-001 | Approved | Третья работа: **Modern Cleaning Business Website**. | Дополняет quote widget и dashboard полноценным коммерческим сайтом. |
| D-002 | Approved | Код начинается только после утверждения desktop/mobile дизайна. | Снижает переделки и расход токенов. |
| D-003 | Approved | Дизайн-процесс: ChatGPT reference → Stitch → при пользе Figma → Codex. | Stitch используется как дизайн-лаборатория, Codex — для проверяемой реализации. |
| D-004 | Approved | Ponytail `full` используется постоянно. | Минимум scope, зависимостей и повторного анализа. |
| D-005 | Approved | Проект остаётся demo/concept и не изображает оплаченный клиентский заказ. | Честное портфолио. |
| D-006 | Approved | Бренд: **Limestone & Linen Home Cleaning**; tagline: **A calmer home, thoughtfully cleaned.** | Передаёт Austin/Hill Country и спокойное upper-middle позиционирование. |
| D-007 | Approved | Регион: Austin, Texas; service area: Round Rock, Cedar Park, Pflugerville, Bee Cave, Lakeway и ближайшие communities. | Реалистичный локальный контекст без фиктивного адреса. |
| D-008 | Approved | Услуги: Standard, Deep, Move-In / Move-Out, Recurring и Post-Construction Cleaning. | Покрывает основные residential use cases без разрастания. |
| D-009 | Approved | Аудитория: занятые семьи и домовладельцы среднего и выше среднего дохода; upper-middle market. | Определяет спокойный, надёжный и аккуратный характер продукта. |
| D-010 | Approved | Primary CTA: `Get a Free Quote`; secondary CTA: `View Services`. | Один conversion goal и один навигационный путь. |
| D-011 | Approved | Использовать только demo trust patterns с явным portfolio-concept disclosure; testimonials необязательны и при использовании маркируются как demo. | Не имитирует реальные рейтинги, награды или подтверждённые credentials. |
| D-012 | Approved | Экспортировать выбранные Stitch screens в Figma и использовать их как визуальный источник истины. | Экспорт сохранил отдельные полные desktop/mobile frames и даёт достаточную опору для реализации. |
| D-013 | Approved | Demo-контакты: `(512) 555-0147`, `hello.limestoneandlinen@example.com`; физический адрес не указывать. | Зарезервированные/примерные данные, не принадлежащие реальному бизнесу. |
| D-014 | Approved | Второстепенный контент и имена команды можно генерировать без отдельных итераций, сохраняя последовательность brief. | Экономит токены без влияния на продуктовые решения. |
| D-015 | Approved | Visual direction: **Organic Austin Calm** — limestone cream, deep juniper, restrained terracotta; Lora + Public Sans; spacious editorial service layout. | Лучше всего соответствует бренду, региону и upper-middle позиционированию без luxury-пафоса. |
| D-016 | Rejected | Refined Editorial: Libre Bodoni, near-black и fashion-like композиция. | Слишком бутиковый и дистанцированный характер для семейного local service. |
| D-017 | Rejected | Friendly Modern: Outfit/Work Sans, blue-green startup palette и flat UI. | Понятно, но слишком типично и слабо поддерживает название Limestone & Linen. |
| D-018 | Approved | Motion остаётся на CSS transitions; GSAP не использовать без новой доказанной потребности. | Нужный уровень polish достигается без зависимости и лишней сложности. |
| D-019 | Approved | Desktop UI reference: `docs/assets/limestone-linen-desktop-reference.png`. | Соответствует brief и достаточно цельный для передачи в Stitch без повторной генерации. |
| D-020 | Approved | Social icons из сгенерированного footer не переносить. | У fictional demo brand нет реальных социальных аккаунтов или ссылок. |
| D-021 | Approved | Stitch-проект: `https://stitch.withgoogle.com/projects/1893122908879395195`. | Созданы согласованные desktop и mobile screens в утверждённом визуальном направлении. |
| D-022 | Superseded | Ранее предполагалось исправить вторую часть списка услуг в Figma. | Перед экспортом повторная проверка Stitch подтвердила все пять услуг и полный dropdown на обоих экранах; правка в Figma не нужна. |
| D-023 | Approved | Принять экспортированные desktop/mobile frames как утверждённый дизайн Phase 5 без ручного перестроения всех слоёв и Auto Layout. | Для portfolio demo визуальной точности достаточно; дополнительная очистка не улучшает реализацию и расходует время. |
| D-024 | Approved | Базовый стек: React + Vite + JavaScript, стандартный React template и обычный CSS с custom properties. | Совпадает с профилем и предыдущими работами, поддерживает нужную интерактивность без framework/server overhead. |
| D-025 | Approved | `lucide-react` — единственная дополнительная runtime-библиотека. | Даёт согласованные tree-shakable SVG-иконки; остальные задачи покрываются платформой. |
| D-026 | Approved | Использовать native HTML и React state: semantic sections, `details/summary` для FAQ, browser validation и локальное demo success state формы. | Не нужны form, validation, accordion, state-management или animation libraries. |
| D-027 | Rejected | Tailwind, UI kit, React Hook Form, Zod, Router, Zustand/Redux, Motion/GSAP, Playwright и backend services. | Для одной marketing page они не решают подтверждённую проблему и увеличивают код, зависимости и QA. |
| D-028 | Approved | Шрифты Lora/Public Sans подключить через Google Fonts с fallback; изображения хранить локально и оптимизировать нативными форматами. | Минимальная настройка без font/image packages и без hotlinking контентных изображений. |
| D-029 | Approved | Публикация: Cloudflare Pages через Git, build `npm run build`, output `dist`; Wrangler не устанавливать без необходимости ручного deploy. | Нативный статический workflow даёт production и preview deploys без отдельной инфраструктуры. |
| D-030 | Approved | Проверки: template ESLint и build во время реализации; browser smoke checks по фазам; UI/UX Pro Max, Web Interface Guidelines и web performance только в Phase 11. | Узкие проверки экономят время, а полный аудит остаётся один раз перед релизом. |
| D-031 | Approved | Не создавать дополнительные policy/design `.md` до кода; существующие шесть документов полностью покрывают правила, дизайн и план. | Дублирование создаст несколько источников истины и лишние обновления. |
| D-032 | Approved | Перед Phase 8 использовать единый pre-code gate и Definition of Done внутри `plan.md`. | Один контрольный список предотвращает пропуски без новой документационной структуры. |
| D-033 | Approved | Phase 7 и технический план утверждены пользователем; разрешён переход к Phase 8. | Pre-code gate пройден, scope и проверки зафиксированы до начала кода. |
| D-034 | Approved | Foundation реализован в минимальной структуре `main.jsx` + `App.jsx` + `styles.css`; новые abstraction folders не создавались. | Текущий размер проекта не оправдывает дополнительное дробление и boilerplate. |
| D-035 | Approved | Использовать восемь оригинальных изображений из утверждённого Stitch screen как локальные project assets. | Сохраняет визуальное соответствие Figma/Stitch и исключает hotlinking при публикации. |
| D-036 | Approved | Phase 9 сохраняет один `App.jsx` и один `styles.css`; form success state остаётся локальным React state. | Реальный код всё ещё не требует router, data layer, custom hooks или component abstraction folders. |
| D-037 | Approved | Mobile navigation реализована через native `dialog` с `showModal()`, `aria-expanded`, закрытием по кнопке и после выбора ссылки. | Браузер предоставляет modal semantics и управление фокусом без custom overlay, focus-trap library или новой архитектуры. |
| D-038 | Approved | Responsive-проверки сосредоточены на 768, 390 и 375 px; полный visual/performance audit перенесён в Phase 11. | Целевые ширины покрывают текущий scope, а один полный релизный аудит предотвращает повторную работу. |
| D-039 | Approved | Добавить минимальный `public/robots.txt`; canonical и sitemap создавать после получения production URL в Phase 12. | Исправляет подтверждённый SEO-дефект без выдуманного адреса сайта. |
| D-040 | Rejected | Добавлять `llms.txt` только ради отдельного Agentic Browsing score. | Файл не входит в scope, не улучшает согласованные SEO/accessibility цели и не нужен пользователю сайта. |
| D-041 | Approved | Итоговый portfolio repository размещён в `Ramoomes/limestone-linen-cleaning` и подключён к Cloudflare Pages через Git integration. | Соответствует выбранному пользователем GitHub-аккаунту и даёт автоматические Pages builds из `main`. |
| D-042 | Approved | Production URL: `https://limestone-linen-cleaning.pages.dev/`; использовать его в canonical, Open Graph, robots и sitemap. | URL подтверждён успешным production deployment и browser smoke test. |
| D-043 | Approved | В portfolio-polish заменить три недостаточно качественных Stitch asset: hero и care — на локальные upscale-фотографии, service area — на локальную карту Austin из OpenStreetMap/Wikimedia с видимой CC BY-SA attribution. | Устраняет растягивание исходников 512 px и вымышленную географию без новой библиотеки, API или изменения архитектуры. |
| D-044 | Approved | Перед controlled design polish сохранить стабильную версию commit `11e9146`; изменить только trust strip, иерархию services и editorial rhythm Why Us обычным CSS. | Уменьшает визуальную повторяемость без редизайна, новых зависимостей, изменения контента или функциональности. |
| D-045 | Approved | Recurring Cleaning получает умеренный визуальный приоритет через больший grid span, без badge, цены, overlay или нового декоративного стиля. | Создаёт практичную иерархию внутри пяти существующих услуг, сохраняя спокойное Organic Austin направление. |
| D-046 | Approved | Для первого native FAQ использовать boolean-атрибут `open` вместо неподдерживаемого React DOM prop `defaultOpen`. | Убирает console warning и сохраняет исходное начальное открытое состояние без новой логики или зависимости. |

## Формат новой записи

```text
ID | Approved / Rejected / Superseded | Краткое решение | Практическая причина
```
