# Lab 3.1 — Component with State (Advanced Counter)

This folder contains the React project for **Lab 3.1** (Week 3): multiple useState hooks, props with default values, and component composition.

## Project

- `react-counter/` — Vite + TypeScript + React project

## What implements the tasks

- **Task 1 (Basic Counter with Props)**: `src/components/StepCounter.tsx`
  - Accepts `initialValue` (default: 0) and `step` (default: 1) props
  - Uses `useState` to manage count, initialized from `initialValue`
  - Increment/Decrement buttons that change count by `step`

- **Task 2 (Multiple State Variables)**: `src/components/StepCounter.tsx`
  - Additional state: `history` (array), `operationCount` (number)
  - Updates history and operation count on each increment/decrement
  - Displays current count, total operations, and last 5 history values
  - Reset button that resets count to `initialValue`, clears history, and resets operation count

- **Task 3 (Component Composition)**: `src/components/CounterApp.tsx`
  - Renders two independent `StepCounter` instances:
    - First: `initialValue={0}` `step={1}`
    - Second: `initialValue={10}` `step={5}`
  - Includes comment explaining props vs state

## How to run

1. Open a terminal in `Lab_03/task1/react-counter`.
2. Install dependencies (once):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (for example `http://localhost:5173`).
