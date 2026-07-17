# Plan — Modern Cleaning Business Website

Status: Phase 13 controlled design polish implemented; awaiting visual approval before any further iteration.

## Phase 0 — Project discovery

**Status: Completed.**

- **Цель:** утвердить бизнес, аудиторию, оффер, географию, CTA и scope.
- **Вход:** текущий чат и `docs/brief.md`.
- **Результат:** заполненный brief и решения D-006—D-011.
- **Готово, когда:** открытые продуктовые вопросы закрыты пользователем.
- **Нельзя:** искать дизайн, генерировать UI или писать код.

## Phase 1 — Reference research

**Status: Completed.**

- **Цель:** собрать малую доказательную подборку функциональных, UX, visual и anti-references.
- **Вход:** утверждённый brief.
- **Результат:** заполненный `docs/references.md`.
- **Готово, когда:** у каждого источника есть Source, Take, Avoid и Why.
- **Нельзя:** копировать чужой сайт или расширять scope из-за красивого референса.

## Phase 2 — Visual direction

**Status: Completed — Organic Austin Calm selected.**

- **Цель:** выбрать один характер бренда и правила интерфейса.
- **Вход:** brief и references.
- **Результат:** утверждённая visual direction: палитра, typography, imagery, layout, motion и anti-patterns.
- **Готово, когда:** выбран один вариант из максимум трёх и решение записано.
- **Нельзя:** создавать production-код; UI/UX Pro Max используется только здесь для направленного анализа.

## Phase 3 — ChatGPT UI reference generation

**Status: Completed — desktop reference approved.**

- **Цель:** получить цельный визуальный референс сайта.
- **Вход:** brief, references и visual direction.
- **Результат:** выбранные desktop reference, ключевые секции и mobile direction.
- **Готово, когда:** один набор достаточно точно отражает утверждённое направление.
- **Нельзя:** бесконечно генерировать варианты или считать картинку точным макетом.

## Phase 4 — Google Stitch prototyping

**Status: Completed — desktop and mobile Stitch screens created.**

- **Цель:** превратить требования и изображения в редактируемый UI-прототип.
- **Вход:** утверждённые материалы Phase 3.
- **Результат:** один согласованный Stitch-проект с desktop и mobile.
- **Готово, когда:** главный flow, секции и responsive-композиция согласованы.
- **Нельзя:** принимать первый результат без проверки или считать Stitch-код production-кодом.

**Phase 4 artifact:** `https://stitch.withgoogle.com/projects/1893122908879395195`

**Проверено перед экспортом:** на обоих frames присутствуют все пять услуг, включая `Post-Construction Cleaning`, а dropdown формы содержит те же пять вариантов.

## Phase 5 — Figma cleanup and design approval

**Status: Completed — desktop and mobile frames exported and approved.**

- **Цель:** получить окончательный визуальный источник истины.
- **Вход:** выбранный Stitch-дизайн.
- **Результат:** утверждённые desktop/mobile frames в Figma либо документированная замена, если экспорт не помогает.
- **Готово, когда:** выполнены критерии из `docs/design-process.md` и пользователь явно утвердил дизайн.
- **Нельзя:** начинать реализацию или полировать невидимые детали слоёв без практической пользы.

**Phase 5 artifact:** Figma Design file with separate full-page desktop and mobile frames. Export visually verified on 2026-07-16. Manual rebuilding of layers and Auto Layout is deferred because it does not improve the next implementation step.

## Phase 6 — Ecosystem audit

**Status: Completed — minimal stack and toolchain approved.**

- **Цель:** выбрать минимальный стек, skills и инструменты под утверждённый дизайн.
- **Вход:** brief и финальный дизайн.
- **Результат:** короткий список approved/rejected решений с причинами.
- **Готово, когда:** каждая новая зависимость доказала необходимость и подтверждена.
- **Нельзя:** устанавливать что-либо или исследовать инструменты вне реальных требований.

**Phase 6 result:** React + Vite + JavaScript, plain CSS with custom properties, native HTML controls/validation, `lucide-react` as the only additional runtime library, and Cloudflare Pages Git deployment. No packages were installed during this phase.

## Phase 7 — Technical implementation plan

**Status: Completed — approved by user.**

- **Цель:** разбить реализацию на короткие проверяемые этапы.
- **Вход:** brief, дизайн и approved stack.
- **Результат:** файловая структура, этапы, проверки и acceptance criteria.
- **Готово, когда:** один план утверждён пользователем.
- **Нельзя:** создавать приложение или несколько альтернативных планов.

### Architecture

- Одна статическая React page без router, backend и API.
- Семантическая структура страницы и anchor navigation: `services`, `why-us`, `service-area`, `faq`, `quote`.
- Код Stitch не импортируется; реализация создаётся по утверждённым Figma frames.
- Контентные изображения хранятся локально; карта service area — декоративная локальная иллюстрация без map SDK.
- React state используется только для mobile menu и demo-состояния quote form.
- FAQ использует native `details/summary`; form — native validation и доступное success-сообщение.

### Minimal file structure

```text
index.html
package.json
src/
  main.jsx
  App.jsx
  styles.css
  assets/
    images/
public/
  favicon.svg
```

Не создавать `components/`, `hooks/`, `utils/`, `services/` или отдельный data layer, пока размер реального кода не докажет необходимость.

### Page order

1. Portfolio concept disclosure.
2. Header and mobile navigation.
3. Split hero with primary and secondary CTA.
4. Trust themes strip.
5. Five service cards.
6. Care / communication storytelling section.
7. Three-step process.
8. Austin service-area section.
9. FAQ and short quote form.
10. Footer with demo disclosure and fictional contacts.

### Phase 8 — Foundation work package

1. Создать стандартный Vite React JavaScript project в текущей папке.
2. Установить только `lucide-react`; сохранить template ESLint.
3. Удалить demo-контент шаблона.
4. Создать семантический skeleton страницы в `App.jsx`.
5. Добавить design tokens, typography, container и базовые responsive rules в `styles.css`.
6. Подключить Lora/Public Sans, metadata и `favicon.svg`.

**Проверки:** `npm run lint`, `npm run build`, локальное открытие без console errors.

**Готово, когда:** foundation запускается, содержит полный порядок секций без финальной полировки и использует утверждённые tokens.

### Phase 9 — Core page work package

1. Реализовать desktop header, hero и CTA anchors.
2. Реализовать trust strip и пять услуг с утверждённым demo-copy.
3. Реализовать storytelling, process и service-area sections.
4. Реализовать FAQ через `details/summary`.
5. Реализовать quote form: Name, Email, Phone, ZIP Code, Service и Home details.
6. На submit показать локальное demo success state без отправки данных; сохранить disclosure `Demo form — no information is submitted`.
7. Реализовать footer без social links и неподтверждённых claims.
8. Подключить локальные оптимизированные изображения и осмысленные `alt` либо пустой `alt` для декоративных изображений.

**Проверки:** основной CTA ведёт к форме; secondary CTA ведёт к услугам; FAQ, form validation и success state работают; `lint` и `build` проходят.

**Готово, когда:** desktop flow полностью работает и визуально соответствует Figma без добавления новых функций.

### Phase 10 — Responsive and accessibility work package

1. Сверить desktop на `1440px` и `1280px`.
2. Адаптировать tablet около `768px` и mobile `390px/375px` по утверждённому mobile frame.
3. Реализовать компактное mobile menu с обычной кнопкой, `aria-expanded` и закрытием после выбора anchor.
4. Проверить порядок контента, touch targets `44px`, видимые labels, focus states и keyboard navigation.
5. Добавить `prefers-reduced-motion`; исключить horizontal scroll и перекрытие CTA.

**Проверки:** ручной browser smoke test на целевых ширинах и с клавиатуры; `lint` и `build`.

**Готово, когда:** основной сценарий доступен на desktop/mobile, форма читаема и работает без масштабирования.

### Phase 11 — Release QA work package

1. Один финальный UI review через UI/UX Pro Max и Web Interface Guidelines.
2. Проверить title, description, headings, canonical/OG data после определения production URL, favicon, `robots.txt` и при необходимости `sitemap.xml`.
3. Проверить console, broken links, form states, responsive layouts и отсутствие реальных credentials.
4. Оптимизировать изображения только по измеренным результатам; выполнить performance review.
5. Повторно выполнить `lint`, production `build` и локальный preview smoke test.

**Готово, когда:** нет блокирующих accessibility/performance дефектов, console errors и расхождений основного flow.

### Phase 12 — Deployment work package

1. Создать/подключить GitHub repository.
2. Подключить Cloudflare Pages: build `npm run build`, output `dist`.
3. Проверить production URL, anchors, assets, form state и mobile layout.
4. Записать URL в README и metadata, если это требуется после первого deploy.

### Phase 13 — Portfolio work package

1. Подготовить README с demo disclosure, features, stack и live link.
2. Выбрать одну desktop cover и 4–6 desktop/mobile screenshots.
3. Записать одно видео `30–45s`: hero → services → FAQ/form → success.
4. Подготовить Upwork title, role, description и пять skills.

### Implementation acceptance criteria

- Все пять услуг присутствуют на desktop/mobile и в select формы.
- Header links и оба CTA ведут к правильным секциям.
- Form validation и demo success state работают; данные никуда не отправляются.
- Portfolio-concept disclosure заметен, контакты остаются вымышленными.
- Нет horizontal scroll, console errors и сломанных изображений.
- Keyboard navigation, focus, labels и reduced motion работают.
- `npm run lint` и `npm run build` проходят.
- Реализация визуально соответствует утверждённым Figma frames без pixel-perfect усложнения.

### Pre-code gate

**Status: Passed — user approved Phase 7.**

#### A. Project base

- [x] `AGENTS.md`, `brief.md`, `references.md`, `design-process.md`, `plan.md` и `decisions.md` существуют.
- [x] Документы не содержат блокирующих противоречий.
- [x] `plan.md` — единственный источник статуса и прогресса.
- [x] Brief, Figma desktop/mobile, references и design process утверждены.
- [x] Все продуктовые, дизайн- и технические решения D-001—D-032 записаны.

#### B. Active guidance

- `AGENTS.md` — правила работы агента.
- `brief.md` — продукт, контент, scope и visual tokens.
- `decisions.md` — утверждённые и отклонённые решения.
- `references.md` — референсы и anti-references.
- `design-process.md` — ChatGPT → Stitch → Figma → Codex.
- `plan.md` — архитектура, этапы, проверки и Definition of Done.

`CLAUDE.md`, `PROJECT_RULES.md`, `UI_GUIDELINES.md`, `DESIGN_SYSTEM.md`, `COMPONENT_GUIDE.md` и `CODING_STANDARDS.md` не создавать: их содержание уже покрыто существующими источниками истины. `README.md` создаётся в Phase 13 по фактическому результату.

#### C. Libraries

- React, React DOM и Vite — стандартный project foundation.
- `lucide-react` — единственная дополнительная runtime-библиотека.
- Template ESLint — существующая build-time проверка.
- Не использовать библиотеки из D-027 без нового подтверждённого требования.

#### D. Skills and tools

- Ponytail — постоянно.
- Browser tools — узкие smoke checks в Phase 8–10 и production check в Phase 12.
- UI/UX Pro Max, Web Interface Guidelines и web performance — один финальный аудит в Phase 11.
- GitHub и Cloudflare tools — только Phase 12.
- Context7, Playwright и Figma MCP не нужны текущему scope.

#### E. Architecture and implementation

- Pages: одна page.
- Sections: десять утверждённых блоков из `Page order`.
- Components: только при реальном повторении или чрезмерном росте `App.jsx`.
- Shared UI, custom hooks, utilities и types: не создавать заранее.
- Assets: локальные оптимизированные изображения и один favicon.
- Animations: CSS transitions с `prefers-reduced-motion`.
- Responsive, accessibility и SEO: реализовать по work packages Phase 10–11.

#### F. Release quality checklist

- [x] Desktop, tablet и mobile layouts.
- [x] Horizontal overflow и layout shifts.
- [x] Keyboard navigation, focus states, labels и contrast.
- [x] Header anchors, CTA, FAQ и form states.
- [x] Images, dimensions, lazy loading и meaningful alt text.
- [x] Broken links, console errors и React warnings.
- [x] Production `lint`, `build` и preview.
- [x] Performance trace: LCP 208 ms, CLS 0.00; Lighthouse Accessibility 100, Best Practices 100 и SEO 100 на desktop/mobile. Текущий DevTools Lighthouse tool не выдаёт Performance score, поэтому performance подтверждён trace-метриками.
- [ ] Production smoke test на Cloudflare Pages.

### Definition of Done

Проект завершён только когда:

- реализованы все утверждённые секции и полный quote flow;
- desktop/mobile визуально соответствуют Figma без ненужной pixel-perfect сложности;
- нет неподтверждённых claims, реальных контактов или отправки demo form data;
- desktop, tablet и mobile работают без overflow и сломанных состояний;
- accessibility basics, reduced motion, keyboard и focus проверены;
- console не содержит ошибок и React warnings; `lint` и production `build` проходят;
- release QA и Lighthouse targets пройдены либо отклонение явно объяснено;
- сайт опубликован и проверен на Cloudflare Pages;
- GitHub repository и README отражают фактическую реализацию;
- готовы cover, screenshots, video и данные карточки Upwork.

## Phase 8 — Foundation

**Status: Completed — foundation verified.**

- **Цель:** создать минимальный проект, design tokens и базовую семантическую структуру.
- **Вход:** утверждённый Phase 7.
- **Результат:** запускаемый foundation без лишних компонентов.
- **Готово, когда:** dev и production build работают, база соответствует дизайн-системе.
- **Нельзя:** реализовывать все секции или добавлять неподтверждённые зависимости.

**Phase 8 result:** создан минимальный React/Vite foundation, семантический порядок всех секций, design tokens, базовые desktop/mobile rules, metadata и favicon. `npm run lint`, `npm run build` и локальная browser/console smoke-проверка прошли без ошибок.

## Phase 9 — Core page implementation

**Status: Completed — desktop flow verified.**

- **Цель:** реализовать утверждённые секции и основной conversion flow.
- **Вход:** foundation и финальные макеты.
- **Результат:** функциональная desktop page с реальным контентом и рабочим CTA/form flow.
- **Готово, когда:** основной сценарий проходит полностью и визуально соответствует макету.
- **Нельзя:** добавлять backend, сложный калькулятор или новые страницы.

**Phase 9 result:** реализованы desktop header, hero, trust strip, пять service cards, storytelling, process, service-area map, пять FAQ, quote form и footer. Восемь утверждённых Stitch images сохранены локально. CTA anchors, FAQ, native validation, все пять service options и локальное success state проверены в браузере; данные не отправляются. Console, `npm run lint` и `npm run build` проходят без ошибок.

## Phase 10 — Responsive and accessibility

**Status: Completed — responsive and accessibility flow verified.**

- **Цель:** завершить mobile/tablet и основные accessible states.
- **Вход:** рабочая desktop page и mobile design.
- **Результат:** responsive layout, keyboard navigation, focus, labels и корректная семантика.
- **Готово, когда:** ключевой flow работает на целевых ширинах и с клавиатуры.
- **Нельзя:** проводить полный релизный аудит или менять visual direction.

**Phase 10 result:** desktop layout адаптирован для tablet и mobile; добавлено нативное modal menu через `dialog`, skip link и доступные состояния кнопки меню. На ширинах 768, 390 и 375 px горизонтального переполнения нет; mobile navigation, semantic main target, FAQ и форма доступны. Browser console, `npm run lint` и `npm run build` проходят без ошибок. Полный UI, performance и release-аудит остаётся единственным проходом Phase 11.

## Phase 11 — SEO, performance and QA

**Status: Completed — release audit passed.**

- **Цель:** выполнить единственный полный релизный аудит.
- **Вход:** feature-complete сайт.
- **Результат:** исправленные ошибки, metadata, performance, accessibility и release checklist.
- **Готово, когда:** build, console, main flow, responsive, SEO и security/secret checks проходят.
- **Нельзя:** добавлять функции и переписывать архитектуру без найденного дефекта.

**Phase 11 result:** исправлено доступное имя логотипа, добавлен корректный `robots.txt`, первый FAQ переведён на нативное uncontrolled-состояние, уточнены touch и focus правила. UI/UX Pro Max и Web Interface Guidelines review, production form flow, anchors, изображения, responsive overflow, console, `npm run lint` и `npm run build` проверены. Lighthouse desktop/mobile: Accessibility 100, Best Practices 100, SEO 100. Performance trace: LCP 208 ms, CLS 0.00, измеримых savings нет. Canonical, sitemap и production URL остаются Phase 12.

## Phase 12 — Deployment

**Status: Completed — GitHub and Cloudflare Pages production verified.**

- **Цель:** опубликовать проверенную сборку.
- **Вход:** завершённый Phase 11.
- **Результат:** стабильный публичный URL и проверенный production smoke test.
- **Готово, когда:** live version совпадает со сборкой и основной сценарий работает.
- **Нельзя:** деплоить непроверенные изменения или добавлять инфраструктуру без нужды.

**Phase 12 result:** публичный репозиторий создан в `Ramoomes/limestone-linen-cleaning` и подключён к Cloudflare Pages через Git integration. Build command: `npm run build`; output: `dist`; production branch: `main`. Production URL: `https://limestone-linen-cleaning.pages.dev/`. Live title, секции, изображения, anchors и форма прошли browser smoke test. Canonical, Open Graph URL, `robots.txt` и `sitemap.xml` используют production URL.

## Phase 13 — Portfolio delivery

- **Цель:** оформить третью работу для Upwork и GitHub.
- **Вход:** live site и финальный README.
- **Результат:** title, role, description, 5 skills, cover, 4–6 screenshots, короткое видео и live link.
- **Готово, когда:** карточка опубликована и материалы проверены в preview.
- **Нельзя:** выдавать demo за оплаченный клиентский проект или бесконечно полировать опубликованный кейс.

### Controlled design polish pass

**Stable checkpoint:** `11e9146 Checkpoint stable design before polish`.

**Three strongest repetition causes:**

1. Trust strip reads as four equal table cells because every item has identical width, centering, height and vertical separators.
2. Services use five cards with identical dimensions, image ratios and copy blocks; the featured service differs mainly by a heavier border.
3. Why Us repeats a balanced split-section pattern and adds three full-width list dividers, so its rhythm feels mechanical rather than editorial.

**Minimal implementation plan:**

1. CSS-only trust-strip adjustment: remove vertical separators, loosen item alignment and preserve restrained outer boundaries.
2. CSS-only service hierarchy: use a 12-column desktop grid, let Recurring Cleaning span more space, reduce card borders and retain simple tablet/mobile reflow.
3. CSS-only Why Us adjustment: change the desktop column ratio, image scale, copy alignment and list spacing; remove unnecessary internal dividers.
4. Verify desktop, tablet and mobile; navigation, CTA, FAQ and form; overflow, console, lint and production build. Stop for visual review before deployment or another design pass.

**Scope guard:** preserve content, DOM order, functionality, brand tokens, typography, imagery, accessibility and existing breakpoints. No dependencies, new colors, effects, sections or complex positioning.

**Result:** trust strip separators removed and alignment loosened; services use a 12-column desktop hierarchy with Recurring Cleaning spanning more space; Why Us uses an image-led contained editorial composition with fewer internal rules. Desktop 1440px, tablet 768px and mobile 390px have no horizontal overflow. Desktop/mobile navigation, CTA links, five FAQ controls, native form validation and success state pass. Console is clean; lint and production build pass. Awaiting user visual review before commit or deployment.
