# Отчёт об использовании ИИ (Labs 01–04)

## Инструменты

- **ИИ-помощник**: Cursor (модель на базе GPT).

## Как я использовал ИИ

- Извлечение требований из PDF Lab 01 для заданий 1.1 и 1.2.
- Проектирование структуры папок `task1` и `task2` по правилам Git.
- Создание проектов на **Vite + TypeScript + React**:
  - `task1/react-highlight/` — declarative highlight toggle;
  - `task2/react-counter/` — счётчик.
- Реализация: версия на jQuery (imperative), компоненты **HighlightToggle** и **Counter** на React (`useState`).
- Черновики отчётов: `comparison_report.md`, `view_layer_explanation.md`, `AI_REPORT.md`.

## Проверка и правки

- Сверка логики с условиями (только state в React, без прямого DOM).
- Проверка CSS (`.highlight`, `background: yellow`) и корректного применения.
- Исправление сборки (`main.tsx`, JSX в `tsconfig.json`).

## Что я освоил

- Разница между **imperative** (jQuery) и **declarative** (React) подходами.
- Настройка **Vite + TypeScript + React**.
- Критический разбор сгенерированного кода и связь с теорией (глава 1: declarative UI, data over time, view layer).

---

## Lab 02 (Week 2): JSX, Fragments & Expressions

### Что сделал по заданию

- Добавил структуру папок **по требованиям PDF**:
  - `Lab_02/task1/react-fragments/` — Lab 2.1 (fragments + list mapping)
  - `Lab_02/task2/react-props/` — Lab 2.2 (Card/ProductList/Section)
- Реализовал Lab 2.1:
  - `FragmentLayout` — возвращает **ровно три sibling-элемента** (`header`, `main`, `footer`) внутри `<>...</>`.
  - `ItemList` — `.map()` по массиву, рендер `<li key={...}>` без предупреждений про ключи.
  - `ItemSummarySection` — фрагмент: заголовок + список + `Total: {items.length}`.
- Реализовал Lab 2.2:
  - `Card` — пропсы `title`, `children`, опционально `className`, выражения в JSX.
  - `ProductList` — массив продуктов + `.map()` + `key={product.id}` + динамические поля через `{}`.
  - `Section` — **фрагмент**: `<h2>{title}</h2>` + `{children}` без wrapper-`div`.

### Как использовал ИИ (примеры запросов)

- «Вытащи требования из Lab 02 PDF и разбей на компоненты/файлы».
- «Сделай компоненты под fragments + map list (ключи, items.length)».
- «Собери Card/ProductList/Section без лишних wrapper-элементов, только fragments».

### Внесённые правки / критическая проверка

- При генерации проекта `create-vite` получился шаблон **Vite + TypeScript (без React)**, поэтому я:
  - подключил `react`, `react-dom`, типы, и `@vitejs/plugin-react-swc`;
  - добавил `vite.config.ts`, `main.tsx`, `App.tsx`;
  - включил `jsx: "react-jsx"` в `tsconfig.json`;
  - удалил лишние файлы vanilla-шаблона (`src/main.ts`, `src/counter.ts`, `src/typescript.svg`).
- Проверил, что оба проекта собираются командой `npm run build` без ошибок.

### Что я освоил (Lab 02)

- Практика **Fragments** (`<>...</>`) как способа группировки без лишних DOM-узлов.
- Маппинг массивов в JSX и необходимость **уникальных `key`**.
- Передача данных через **props** и композиция через `children`.

---

## Lab 03 (Week 3): React Components and Hooks — Props, State, useState, useEffect

### Что сделал по заданию

- Добавил структуру папок **по требованиям PDF**:
  - `Lab_03/task1/react-counter/` — Lab 3.1 (StepCounter с множественными useState)
  - `Lab_03/task2/react-fetch/` — Lab 3.2 (UserProfile с useEffect и cleanup)
- Реализовал Lab 3.1:
  - `StepCounter` — принимает props `initialValue` (default: 0) и `step` (default: 1).
  - Использует **три useState**: `count`, `history` (массив), `operationCount`.
  - Кнопки Increment/Decrement изменяют count на `step`, обновляют history и operationCount.
  - Кнопка Reset сбрасывает всё к начальным значениям.
  - `CounterApp` — родительский компонент с двумя независимыми `StepCounter` (initialValue={0} step={1} и initialValue={10} step={5}).
  - Комментарий в коде объясняет разницу между props и state.
- Реализовал Lab 3.2:
  - `UserProfile` — использует **три useState**: `user`, `loading`, `error`.
  - **useEffect** для fetch данных из `https://jsonplaceholder.typicode.com/users/{userId}`.
  - **AbortController** для cleanup — отменяет запрос при unmount или изменении `userId`.
  - Отображение состояний: "Loading...", ошибка, данные пользователя.
  - `UserProfileApp` — родительский компонент управляет `userId` state, предоставляет кнопки "User 1/2/3" и "Refresh (Random User)".
  - **Dependency array** в useEffect включает `userId` — при изменении `userId` запускается новый fetch.
  - Комментарии объясняют dependency array и cleanup.

### Как использовал ИИ (примеры запросов)

- «Прочитай Lab 03 PDF и реализуй StepCounter с props, множественными useState, history и reset».
- «Сделай UserProfile с useEffect, AbortController cleanup, loading/error состояниями».
- «Объясни dependency array в useEffect и почему userId должен быть в зависимостях».

### Внесённые правки / критическая проверка

- При создании проектов через `create-vite` снова получились vanilla TypeScript шаблоны, поэтому:
  - установил `react`, `react-dom`, типы, `@vitejs/plugin-react-swc`;
  - добавил `vite.config.ts`, `main.tsx`, `App.tsx`;
  - включил `jsx: "react-jsx"` в `tsconfig.json`;
  - удалил лишние файлы (`src/main.ts`, `src/counter.ts`).
- Проверил, что оба проекта собираются без ошибок (`npm run build`).
- Убедился, что каждый `StepCounter` поддерживает независимое состояние (два экземпляра работают независимо).
- Проверил, что cleanup в useEffect правильно отменяет запросы при изменении `userId` или unmount.

### Что я освоил (Lab 03)

- **useState** для управления несколькими состояниями в одном компоненте (count, history, operationCount).
- **Props с default values** (`initialValue = 0`, `step = 1`) и их использование для инициализации state.
- **useEffect** для side effects (data fetching) и правильное использование **dependency array**.
- **AbortController** для cleanup — предотвращение memory leaks и race conditions.
- Разница между **props** (read-only, передаются от родителя) и **state** (управляется внутри компонента, триггерит re-render).
- Композиция компонентов — родительский компонент управляет состоянием и передаёт его через props дочерним компонентам.

---

## Lab 04 (Week 4): Event Handling & Reusable Components

### Что сделал по заданию

- Добавил структуру папок **по требованиям PDF**:
  - `Lab_04/task1/react-form/` — Lab 4.1 (RegistrationForm с валидацией)
  - `Lab_04/task2/react-articles/` — Lab 4.2 (ArticleManager рефакторинг)
- Реализовал Lab 4.1:
  - `RegistrationForm` — форма регистрации с тремя controlled inputs (name, email, age).
  - **Controlled components**: все inputs используют `value` prop и `onChange` handler (Ch. 4).
  - **Inline event handlers**: `onChange={(e) => setName(e.target.value)}` с синтетическими событиями.
  - **Валидация**: `validateName()` (required, min 2 chars), `validateEmail()` (required, valid format), `validateAge()` (required, ≥ 18).
  - Валидация запускается при изменении input (в onChange handlers).
  - Отображение ошибок под каждым полем через conditional rendering.
  - **preventDefault**: `onSubmit` handler вызывает `e.preventDefault()` для предотвращения отправки формы.
  - Сообщение об успехе при валидной отправке, очистка полей формы.
- Реализовал Lab 4.2:
  - Начал с монолитного `ArticleManager` компонента (Task 1).
  - **Извлёк AddArticle компонент** (Task 2): форма с props `name`, `title`, `summary`, handlers (Ch. 5).
  - **Извлёк ArticleList компонент** (Task 3): маппит articles, рендерит `ArticleItem`.
  - **Извлёк ArticleItem компонент** (Task 3): управляет своим состоянием `isOpened` через `useState` (вместо parent's display prop).
  - Toggle логика перемещена в `ArticleItem` — каждый элемент управляет своим расширением независимо.
  - Следует паттернам Ch. 5: извлечение JSX, передача props, локальное состояние в дочерних компонентах.

### Как использовал ИИ (примеры запросов)

- «Прочитай Lab 04 PDF и реализуй RegistrationForm с controlled components, валидацией и preventDefault».
- «Сделай рефакторинг ArticleManager: извлеки AddArticle, ArticleList, ArticleItem по паттернам Ch. 5».
- «ArticleItem должен управлять своим isOpened state через useState, а не через parent prop».

### Внесённые правки / критическая проверка

- При создании проектов через `create-vite` снова получились vanilla TypeScript шаблоны, поэтому:
  - установил `react`, `react-dom`, типы, `@vitejs/plugin-react-swc`;
  - добавил `vite.config.ts`, `main.tsx`, `App.tsx`;
  - включил `jsx: "react-jsx"` в `tsconfig.json`;
  - удалил лишние файлы (`src/main.ts`).
- Проверил, что оба проекта собираются без ошибок (`npm run build`).
- Убедился, что форма не отправляется на сервер (preventDefault работает).
- Проверил, что все inputs являются controlled components (value + onChange).
- Убедился, что `ArticleItem` использует свой `useState` для `isOpened`, а не prop от родителя.

### Что я освоил (Lab 04)

- **Event Handling в React**: declarative подход с inline handlers и синтетическими событиями (Ch. 4).
- **Controlled Components**: паттерн `value` + `onChange` для управления состоянием формы через React state.
- **preventDefault**: предотвращение стандартного поведения формы для клиентской валидации.
- **Валидация форм**: проверка на изменение (onChange) и при отправке (onSubmit).
- **Рефакторинг компонентов**: извлечение монолитного компонента в меньшие, переиспользуемые части (Ch. 5).
- **Локальное состояние в дочерних компонентах**: `ArticleItem` управляет своим `isOpened` state для лучшей производительности.
- **Композиция через props**: передача данных и handlers от родителя к дочерним компонентам.
