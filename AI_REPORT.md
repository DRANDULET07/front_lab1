# Отчёт об использовании ИИ (Lab 01)

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
