# Statista UI Prototype – Frontend Test
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### 1. Clone repository

```bash
git clone https://github.com/DEIN_USERNAME/statista-frontend-test.git
cd statista-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start server

```bash
npm run dev
```

Open in the browser: [http://localhost:3000](http://localhost:3000)

## Features

- Display of statistics (title, description, image, link)
- Components: `Header`, `Searchbar`, `ListItem`
- Responsive layout (mobile-first)
- Data integrated locally from `statistics.json

## Project structure

- `components/`
  - `Header.js`
  - `Searchbar.js`
  - `ListItem.js`
- `app/layout.js`
- `app/page.js`
- `statistics.json`

## Note

- The search is currently only a placeholder (layout)
- JSON data is not loaded via HTTP, but imported directly
- Images and links come from the statistics data (statistics.json)