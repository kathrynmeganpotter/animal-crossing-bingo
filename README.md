# Animal Crossing Bingo

A React-based Bingo card generator using Animal Crossing villagers. Users can select which villagers to include or exclude, mark squares, and persist their game state across page refreshes.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Customizing the Game](#customizing-the-game)
- [Persistence](#persistence)
- [License](#license)

---

## Features

- Generate Bingo cards of size 3x3, 4x4, 5x5, or 6x6.
- Optionally include a “Free Space” in the center.
- Select villagers from the card to be excluded.
- Maximum of 10 villagers can be excluded.
- Click squares to mark/unmark them.
- Message displayed when a row/ column/ diagonal is completed.
- Responsive layout using Material-UI.
- Filters are stored in the URL

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

---
## Credits

- [Animal Crossing NPM package](https://www.npmjs.com/package/animal-crossing?activeTab=readme)
- [Animal Crossing spreadsheet](https://www.npmjs.com/package/animal-crossing?activeTab=readme](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627)
