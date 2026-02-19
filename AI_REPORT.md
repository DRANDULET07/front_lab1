# Отчёт об использовании ИИ (Labs 01–02)

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
