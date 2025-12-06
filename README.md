# Animal Crossing Bingo

A React-based Bingo card generator using Animal Crossing villagers. Users can select which villagers to include or exclude, mark squares, and persist their game state across page refreshes.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
---

## Features

- Responsive layout using Material-UI.
- Generate Bingo cards of size 3x3, 4x4, 5x5, or 6x6.
- Optionally include a “Free Space” in the center.
- Select villagers from the card to be excluded.
- Maximum of 10 villagers can be excluded.
- Filters are stored in the URL
- Click squares to mark/unmark them.
- Message displayed when a row/ column/ diagonal is completed.
- Dark mode/ light mode switcher

### Future Features
- Calculate "new" bingos.
- Perserve state in local storage

---

## Getting Started

### Prerequisites

- Node.js (>=16)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/animal-crossing-bingo.git
cd animal-crossing-bingo

# Install dependencies
npm install
# or
yarn install
```
---
## Available Scripts
- npm dev – Runs the app in development mode.
- npm build – Builds the app for production.
- npm lint – Runs TypeScript/ESLint checks.
---

## Technologies Used
- React – Frontend framework
- TypeScript 
- Material-UI (MUI) – UI components
- React Router – Navigation and URL params

---
## Folder Structure
```
src/
├── components/
│   ├── Board.tsx
│   ├── Controls.tsx
│   ├── HowToPlay.tsx
│   ├── Square.tsx
│   └── VillagerSelector.tsx
├── hooks/
│   └── useGenerateBingoCard.ts
├── consts/
│   └── index.ts
├── types/
│   └── index.ts
├── bingo.tsx
└── index.tsx
```
---
## Credits

- [Animal Crossing NPM package](https://www.npmjs.com/package/animal-crossing?activeTab=readme)
- [Animal Crossing spreadsheet](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627)
