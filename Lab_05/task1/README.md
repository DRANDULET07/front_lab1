# Lab 5.1 — Typed Components & Props Validation

This folder contains the React TypeScript project for **Lab 5.1** (Week 5): TypeScript interfaces, type aliases, and typed component props.

## Project

- `react-types/` — Vite + TypeScript + React project

## What implements the tasks

- **Task 1 (Project Setup and Interface Definitions)**: `src/types.ts`
  - `User` interface — object shape for user data (Ch. 6, p. 96)
  - `SkillLevel` type alias — union type: 'Beginner' | 'Intermediate' | 'Expert' (Ch. 6, p. 97)
  - `Skill` interface — object shape for skill data
  - `tsconfig.json` has `"strict": true` for compile-time type checking

- **Task 2 (Typed UserCard Component)**: `src/components/UserCard.tsx`
  - `UserCardProps` interface with:
    - `user: User` (required)
    - `isActive?: boolean` (optional prop with default value `true`)
    - `children: React.ReactNode` (any renderable content)
  - Component uses props correctly, renders user data and children

- **Task 3 (Typed SkillList Component)**: `src/components/SkillList.tsx`
  - `SkillListProps` interface with `skills: Skill[]` (typed array)
  - Maps over skills array and renders each skill
  - Conditional styling by level (color coding: Beginner=red, Intermediate=orange, Expert=green)

## TypeScript Features Demonstrated

- **Interfaces**: Used for object shapes (`User`, `Skill`, `UserCardProps`, `SkillListProps`)
- **Type Aliases**: Used for union types (`SkillLevel`)
- **Optional Props**: `isActive?` with default value
- **React.ReactNode**: For `children` prop accepting any renderable content
- **Array Types**: `Skill[]` for typed arrays
- **Strict Mode**: `"strict": true` in tsconfig.json ensures compile-time type checking

## Why TypeScript over PropTypes?

- **Compile-time checking**: TypeScript catches errors before code runs (vs PropTypes runtime warnings)
- **IDE support**: Autocomplete, type hints, and refactoring tools
- **Zero runtime overhead**: Types are erased at compile time
- **Better developer experience**: Immediate feedback in the editor

## How to run

1. Open a terminal in `Lab_05/task1/react-types`.
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

   Should compile with **zero TypeScript errors**.
