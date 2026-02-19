# Lab 1.1 — Declarative vs Imperative UI

This folder contains both implementations for the highlight toggle from **Lab 1.1**.

## Contents

- `imperative.html` — jQuery implementation (imperative DOM manipulation).
- `react-highlight/` — Vite + React + TypeScript project with declarative implementation.

## How to run the imperative version

1. Open `imperative.html` in any modern browser (double‑click or drag into the browser window).
2. Click **“Toggle Highlight”**.
3. The paragraph gains or loses the `.highlight` CSS class on each click.

## How to run the React (declarative) version

1. Open a terminal in `Lab_01/task1/react-highlight`.
2. Install dependencies (only needed once):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (for example `http://localhost:5173`) in the browser.
5. Use the **Add/Remove Highlight** button to toggle the `.highlight` class on the paragraph.

