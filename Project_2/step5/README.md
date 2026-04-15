# Project 2 Step 5 – Styling & Responsive Layouts

Student Name: YOUR_NAME
Student ID: YOUR_ID
Date: 2026

## Overview

This project demonstrates the implementation of responsive layouts in a React Native application using Flexbox, Safe Area handling, and adaptive UI components.

The goal of this assignment is to create a mobile interface that correctly adapts to different screen sizes, orientations, and devices (phone and tablet).

---

## Implemented Features

### 1. Responsive Grid Layout

* Implemented using a custom `GridLayout` component
* Supports dynamic number of columns
* Automatically calculates item width based on screen size
* Uses Flexbox (`flexDirection`, `flexWrap`) for layout

### 2. Card Component

* Reusable UI element
* Styled with shadows, padding, and rounded corners
* Used inside grid layout

### 3. Safe Area Handling

* Implemented using:

  * `SafeAreaView`
  * `useSafeAreaInsets()`
* Prevents overlap with:

  * Notches
  * Status bar
  * System UI

### 4. Responsive Header

* Custom `ResponsiveHeader` component
* Supports:

  * Left and right actions
  * Adaptive height
  * Platform-specific styling (Android/iOS)
* Adjusts size for tablets

### 5. Adaptive Layout

* Implemented in `AdaptiveLayout.tsx`
* Supports:

  * Phone layout (vertical)
  * Tablet layout (grid / sidebar)
  * Landscape orientation
* Uses:

  * `useWindowDimensions()`
  * Conditional rendering

### 6. Additional Components

* `FeatureCard` – feature description cards
* `StatsRow` – statistics display row
* `ResponsiveImage` – responsive image placeholder

---

## Responsive Design Techniques

The following techniques were used:

* `useWindowDimensions()`
  → Detect screen width and height

* Breakpoints:

  * Tablet: width ≥ 768
  * Landscape: width > height

* Flexbox:

  * `flexDirection`
  * `justifyContent`
  * `alignItems`

* Conditional layouts:

  * Phone vs Tablet rendering
  * Landscape adjustments

* Safe area handling:

  * `useSafeAreaInsets()`
  * `SafeAreaView`

---

## Project Structure

```
Project_2/
└── step5/
    ├── src/
    │   ├── components/
    │   │   ├── GridLayout.tsx
    │   │   ├── ResponsiveHeader.tsx
    │   │   └── AdaptiveLayout.tsx
    │   ├── screens/
    │   │   └── HomeScreen.tsx
    ├── App.tsx
    ├── package.json
    └── README.md
```

---

## Testing

The application was tested in different environments:

* Phone (Portrait mode)
* Phone (Landscape mode)
* Tablet view (simulated using large screen width)

Screenshots should be attached in submission.

---

## Conclusion

The project successfully demonstrates:

* Flexbox-based layout design
* Responsive UI adaptation
* Safe area support for mobile devices
* Reusable component-based architecture

---

## Git Commits

Example commits:

* feat: create Expo project for step5
* feat: add grid layout and card components
* feat: implement responsive header and adaptive layout

---

## AI Usage (if required)

Tool used: ChatGPT
Used for:

* Code structuring
* Debugging
* Understanding Flexbox and responsive layouts

All generated code was reviewed and tested before submission.
