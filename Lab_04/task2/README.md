# Lab 4.2 — Refactoring (ArticleList, ArticleItem, AddArticle)

This folder contains the React project for **Lab 4.2** (Week 4): refactoring monolithic components into smaller, reusable components following Ch. 5 patterns.

## Project

- `react-articles/` — Vite + TypeScript + React project

## What implements the tasks

- **Task 1 (Monolithic Component)**: `src/components/ArticleManager.tsx`
  - Started as monolithic component managing articles array, form inputs (title, summary)
  - Functions: `onClickAdd`, `onClickRemove`
  - Reference Ch. 5, "The difficulty with monolithic components"

- **Task 2 (Extract AddArticle Component)**: `src/components/AddArticle.tsx`
  - Extracted form JSX into separate `AddArticle` component
  - Props: `name`, `title`, `summary`, `onChangeTitle`, `onChangeSummary`, `onClickAdd`
  - Following Ch. 5, "Implementing an AddArticle component"
  - `ArticleManager` uses `<AddArticle>` instead of inline form JSX

- **Task 3 (Extract ArticleList and ArticleItem Components)**: 
  - `src/components/ArticleList.tsx`: Maps articles array, renders `ArticleItem` components
  - `src/components/ArticleItem.tsx`: 
    - Manages its own `isOpened` state using `useState` (instead of parent's display prop)
    - Toggle logic moved into `ArticleItem` component
    - Better performance as each item controls its own expansion state independently
  - `ArticleManager` updated to use `<ArticleList>` component
  - Reference Ch. 5: ArticleItem manages its own display state for better performance

## Refactoring Approach

This project demonstrates component refactoring patterns from Ch. 5:
1. **Extract JSX**: Move JSX into separate components (`AddArticle`, `ArticleList`, `ArticleItem`)
2. **Pass Props**: Data and event handlers passed as props from parent to children
3. **Local State**: Move component-specific state (like `isOpened`) into child components
4. **Reusability**: Components are now reusable and can be composed independently

## Component Responsibilities

- **ArticleManager**: Manages articles array state, form input state, add/remove handlers
- **AddArticle**: Renders form inputs and add button (presentation component)
- **ArticleList**: Maps articles array and renders list of `ArticleItem` components
- **ArticleItem**: Renders individual article, manages its own expansion state

## How to run

1. Open a terminal in `Lab_04/task2/react-articles`.
2. Install dependencies (once):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (for example `http://localhost:5173`).
