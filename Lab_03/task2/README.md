# Lab 3.2 — Data Loading with useEffect

This folder contains the React project for **Lab 3.2** (Week 3): useEffect hook, data fetching, loading/error states, cleanup with AbortController, and dependency arrays.

## Project

- `react-fetch/` — Vite + TypeScript + React project

## What implements the tasks

- **Task 1 (Basic Data Fetching)**: `src/components/UserProfile.tsx`
  - Uses `useState` for `user`, `loading`, `error`
  - Uses `useEffect` to fetch user data on mount from `https://jsonplaceholder.typicode.com/users/{userId}`
  - Displays "Loading..." when loading, error message on error, user info when loaded

- **Task 2 (Cleanup and Abort)**: `src/components/UserProfile.tsx` and `src/components/UserProfileApp.tsx`
  - Implements cleanup in `useEffect` using `AbortController`
  - Returns cleanup function that calls `abortController.abort()`
  - Refresh button in parent component fetches random user (ID 1-10)

- **Task 3 (Dependency Array and Optimization)**: `src/components/UserProfile.tsx` and `src/components/UserProfileApp.tsx`
  - `UserProfile` accepts `userId` prop
  - `useEffect` dependency array includes `userId` - fetches new user when `userId` changes
  - Parent component (`UserProfileApp`) manages `userId` state and provides buttons to change it
  - Includes comments explaining dependency array and cleanup

## API Used

- **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/users/{id}`
  - Returns user data: name, email, phone, website, address

## How to run

1. Open a terminal in `Lab_03/task2/react-fetch`.
2. Install dependencies (once):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (for example `http://localhost:5173`).
