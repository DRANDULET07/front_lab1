# Lab 4.1 — Event Handling (Form & Validation)

This folder contains the React project for **Lab 4.1** (Week 4): event handling, controlled components, form validation, and preventDefault.

## Project

- `react-form/` — Vite + TypeScript + React project

## What implements the tasks

- **Task 1 (Basic Form Structure with Event Handlers)**: `src/components/RegistrationForm.tsx`
  - State for form fields: `name`, `email`, `age` (useState for each)
  - State for errors: `nameError`, `emailError`, `ageError` (strings, initially empty)
  - `<form>` element with three controlled inputs (value + onChange)
  - Inline arrow functions for onChange handlers using synthetic events

- **Task 2 (Form Validation)**: `src/components/RegistrationForm.tsx`
  - `validateName()`: checks required, minimum 2 characters
  - `validateEmail()`: checks required, valid email format (regex)
  - `validateAge()`: checks required, is a number, ≥ 18
  - Validation runs on input change (in onChange handlers)
  - Error messages displayed below each input using conditional rendering

- **Task 3 (Form Submission with preventDefault)**: `src/components/RegistrationForm.tsx`
  - `onSubmit` handler calls `e.preventDefault()` to prevent default form submission
  - Validates all fields on submit
  - Shows success message if valid, clears form fields
  - Form does not submit to server (no page reload)

## Event Handling Approach

This component demonstrates React's declarative event handling (Ch. 4):
- **Controlled Components**: All inputs use `value` prop and `onChange` handler
- **Synthetic Events**: Event handlers receive React's synthetic event objects (`e.target.value`)
- **Inline Handlers**: Uses inline arrow functions: `onChange={(e) => setName(e.target.value)}`
- **preventDefault**: Form submission is prevented to handle validation client-side

## How to run

1. Open a terminal in `Lab_04/task1/react-form`.
2. Install dependencies (once):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (for example `http://localhost:5173`).
