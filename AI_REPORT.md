# AI Usage Report for Lab 01

## Tools used

- **AI assistant**: Cursor integrated AI (GPT‑based model).

## How I used AI

- I asked the AI to read the official **Lab 01: React Fundamentals** PDF and extract all requirements for Lab 1.1 and Lab 1.2.
- I requested help to design the folder structure `Lab_01/task1` and `Lab_01/task2` so that it matches the Git discipline rules in the assignment.
- I asked the AI to scaffold modern React projects (using Vite + TypeScript) for:
  - the **declarative highlight toggle** implementation in `task1/react-highlight/`,
  - the **counter app** in `task2/react-counter/`.
- I asked the AI to generate initial implementations of:
  - the jQuery **imperative** version of the highlight toggle (HTML + jQuery script),
  - the React **HighlightToggle** component using `useState`,
  - the React **Counter** component with Increment/Decrement buttons.
- I asked the AI to write draft texts for:
  - the **Lab 1.1 comparison report** (`comparison_report.md`),
  - the **Lab 1.2 view layer explanation** (`view_layer_explanation.md`),
  - and this **AI_REPORT.md** file.

## How I modified and verified the AI output

- I read through the generated HTML, TypeScript, and React components to make sure the logic actually matches the lab instructions (for example, that the highlight is controlled only via React state in the declarative version and not via direct DOM manipulation).
- I checked that the CSS defines the required `.highlight { background: yellow; }` (or equivalent highlight effect) and that it is applied correctly in both versions.
- I ensured the React components use `useState` properly and that the paragraph/className and counter value depend only on state.
- I worked with the AI to run `npm run build` for both React projects and fix TypeScript/JSX issues (renaming `main.ts` to `main.tsx` and enabling JSX in `tsconfig.json`) until the builds succeeded without errors.
- I reviewed and, where necessary, lightly edited the generated reports so that they accurately reference Chapter 1 topics such as “Declarative UI structures”, “Data changes over time”, “Performance matters”, and “React is just the view layer”.

## What I learned from using AI

- I saw a concrete example of the difference between **imperative** DOM manipulation (jQuery) and **declarative** UI in React, especially how state drives rendering instead of manual DOM updates.
- I learned how to set up a **Vite + TypeScript + React** project manually, including installing `react`, `react-dom`, and the corresponding type packages, and configuring TypeScript for JSX.
- I practiced reading AI‑generated code critically: checking for alignment with the assignment, fixing TypeScript configuration issues, and verifying that the React apps build and run correctly.
- I learned how to structure a small academic lab project with clear folders (`Lab_01/task1`, `Lab_01/task2`), documentation (`README.md` files), and written reports that connect code back to the textbook concepts.

