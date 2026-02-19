# Lab 5.2 — Typing State & Event Handlers

This folder contains the React TypeScript project for **Lab 5.2** (Week 5): typed useState hooks and typed event handlers.

## Project

- `react-search/` — Vite + TypeScript + React project

## What implements the tasks

- **Task 1 (Typed useState)**: `src/components/SearchApp.tsx`
  - `useState<User[]>(INITIAL_DATA)` — explicit generic ensures array type safety even with empty initial value (Ch. 6, p. 100)
  - `useState<User[]>([])` — generic needed because TS cannot infer `User` from empty array
  - `useState<string>('')` — explicit typing (though TS can infer string)
  - Sample data: 5 users in `INITIAL_DATA` array

- **Task 2 (Typed Event Handlers)**: `src/components/SearchApp.tsx`
  - `handleSearch`: `(event: React.ChangeEvent<HTMLInputElement>) => void`
    - Typed event handler for input changes (Ch. 6, p. 101)
    - Filters users by name in real-time
  - `handleClear`: `(event: React.MouseEvent<HTMLButtonElement>) => void`
    - Typed click handler for button
    - Resets search term and filtered users

- **Task 3 (Integration and Validation)**: `src/components/SearchApp.tsx`
  - Renders `filteredUsers` using `UserCard` component
  - Shows "No results found" when list is empty
  - **Zero use of `any`** — all types are explicit
  - All event handlers properly typed
  - All state variables use correct generics

## TypeScript Features Demonstrated

- **Generics in useState**: `useState<User[]>([])` ensures type safety
- **React.ChangeEvent**: Typed event for input changes
- **React.MouseEvent**: Typed event for button clicks
- **Type Inference**: TS infers `string` from `useState("")`, but explicit generics are used for clarity
- **Zero `any`**: All types are explicit, no use of `any` keyword

## Why React.ChangeEvent instead of `any`?

- **Type Safety**: `event.target.value` is guaranteed to exist and be a string
- **IDE Support**: Autocomplete and type hints for event properties
- **Error Prevention**: TypeScript catches typos (e.g., `event.target.val` would error)
- **Documentation**: Types serve as inline documentation

## When explicit generics are needed vs type inference

- **Needed**: `useState<User[]>([])` — empty array, TS can't infer `User`
- **Optional but clear**: `useState<string>('')` — TS infers string, but explicit is clearer
- **Not needed**: `useState(0)` — TS infers `number` from initial value

## How to run

1. Open a terminal in `Lab_05/task2/react-search`.
2. Install dependencies (once):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (for example `http://localhost:5173`).

5. Verify TypeScript compilation:

   ```bash
   npm run build
   ```

   Should compile with **zero TypeScript errors** and **zero use of `any`**.
