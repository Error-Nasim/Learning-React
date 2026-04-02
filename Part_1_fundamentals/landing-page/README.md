# Landing Page (React + Vite Beginner Guide)

This project is a personal portfolio style landing page built with React.

This README is written for beginners, with very basic explanation, so you can revise later by reading only this file.

## 1. Project Overview

This app shows a complete one-page portfolio with sections:

- Header navigation
- Introduction (profile image + intro text)
- Skills section
- Projects section
- Footer with contact and social links

Live project link:

- https://first-portfolio-nasim.netlify.app/

## 2. What You Learn From This Project

This project helps practice:

- React component structure
- Splitting UI into multiple small components
- Import and export between files
- Rendering lists using map()
- Using external data files
- Basic Bootstrap layout classes
- Using Font Awesome icons
- Vite project setup and run workflow

## 3. Project Type

This is a Vite React project.

How to identify:

- package.json scripts use `vite` (`dev`, `build`, `preview`)
- main entry file is `src/main.jsx`

## 4. Folder Structure (Simple)

```text
landing-page/
  index.html
  package.json
  src/
    main.jsx
    App.jsx
    style.css
    Components/
      Header.jsx
      Introduction.jsx
      Skills.jsx
      Projects.jsx
      Footer.jsx
    Data/
      personalData.js
      skillsData.js
      projectsData.js
    Image/
      profile.jpeg
```

## 5. Full App Flow (Most Important)

1. Browser loads `index.html`
2. Vite runs `src/main.jsx`
3. `main.jsx` renders `<App />`
4. `App.jsx` renders all page sections in order
5. Each section component imports data from `src/Data`
6. UI is generated from data using JSX and map()

If you understand this flow, you understand how data-driven React pages are built.

## 6. File-by-File Explanation

### `index.html`

- Contains root container: `<div id="root"></div>`
- Loads Font Awesome CDN for icons
- Loads React entry file through `<script type="module" src="/src/main.jsx"></script>`

Why this matters:

- React needs one root element to mount the app.
- Font Awesome classes used in components need this CDN link.

### `src/main.jsx`

- Imports `createRoot` from `react-dom/client`
- Imports `App` and global CSS
- Renders app inside `<StrictMode>`

Beginner meaning of StrictMode:

- Helps find potential issues while developing.

### `src/App.jsx`

This is the main parent component.

It imports and renders:

- `Header`
- `Introduction`
- `Skills`
- `Projects`
- `Footer`

Also imports Bootstrap CSS and Bootstrap JS bundle.

Why:

- Bootstrap classes used across all components need Bootstrap CSS.
- JS bundle enables Bootstrap interactive behavior if used.

### `src/style.css`

Global custom style.

Current custom style:

- Sets body font-family to `Fira Mono`

Most layout and spacing still come from Bootstrap classes.

### `src/Components/Header.jsx`

Creates top navigation with anchor links:

- Introduction -> `#intro`
- Skills -> `#skills`
- Projects -> `#projects`
- Contacts -> `#contacts`

Important beginner concept:

- In-page navigation works by matching link hash with section `id`.

### `src/Components/Introduction.jsx`

Shows profile intro section.

Data source:

- `personalData` from `src/Data/personalData.js`

Uses:

- profile image (`personalData.img`)
- name (`personalData.name`)
- intro text (`personalData.Introduction`)

Also includes `Contact me` button.

### `src/Components/Skills.jsx`

Shows skills grid.

Data source:

- `skillsData` array from `src/Data/skillsData.js`

Important code pattern:

- `skillsData.map(...)` loops through each skill and renders UI.

This teaches:

- List rendering with map()
- Using object data in JSX
- Showing icon classes dynamically

### `src/Components/Projects.jsx`

Shows projects with details.

Data source:

- `projectsData` from `src/Data/projectsData.js`

Two map loops are used:

- outer map for each project
- inner map for each project feature

This teaches nested rendering from nested data.

### `src/Components/Footer.jsx`

Shows contact information and social links.

Data source:

- `personalData`

Renders:

- name and short description
- address and email
- social links from `socialLink` array
- dynamic current year using `new Date().getFullYear()`

## 7. Data Files (Why They Are Useful)

### `src/Data/personalData.js`

Stores personal profile information:

- name
- image
- introduction text
- social links
- contact info

### `src/Data/skillsData.js`

Stores all skills in one array.

Each skill object has:

- icon
- title
- description

### `src/Data/projectsData.js`

Stores project list.

Each project object has:

- title
- description
- link
- features array

Each feature has:

- icon
- title
- description

Why this structure is good:

- Keeps UI components clean
- Makes content easy to update
- Same component can render many items

## 8. React Basics Used In This Project

- Functional components
- JSX
- Props-like data flow via imports
- map() for list rendering
- Keys in mapped items
- Component composition
- Basic eventless navigation using anchor links

## 9. Bootstrap and Utility Classes Used

Examples used in this project:

- `container`
- `row`, `col-*`
- `d-flex`, `justify-content-center`
- `text-center`
- `btn`, `btn-primary`
- spacing classes like `py-5`, `px-4`, `mb-3`

Beginner tip:

- Bootstrap class names are quick shortcuts for layout and spacing.

## 10. How To Run This Project (Vite)

1. Open terminal inside `landing-page` folder
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Open URL shown in terminal (usually `http://localhost:5173`)

## 11. Build and Preview

```bash
npm run build
npm run preview
```

- `npm run build` creates optimized production files
- `npm run preview` runs that production build locally

## 12. Beginner Practice Tasks

1. Change heading menu labels in Header
2. Add one new skill in `skillsData.js`
3. Add one new project in `projectsData.js`
4. Update social links in `personalData.js`
5. Change theme by editing Bootstrap classes
6. Add one new section component and render it in App

## 13. Common Beginner Mistakes

- Wrong import path for components or data files
- Forgetting default export/import match
- Missing key in map rendering
- Using class instead of className in JSX
- Mismatch between anchor href (`#skills`) and section id (`id="skills"`)

## 14. Quick Revision Checklist

Before moving forward, I should be able to explain:

- How Vite starts React from `main.jsx`
- How `App.jsx` combines sections
- How data files drive section content
- How map() renders repeated items
- How Bootstrap classes control layout
- How header links jump to section ids

## 15. Final Summary

This landing page project is a strong beginner milestone.

It teaches practical React basics with real portfolio content:

- component breakdown,
- data-driven rendering,
- Bootstrap layout,
- and clean file organization.

Once this is clear, next steps like props passing, state, hooks, and API integration become much easier.

---

Learning note: rebuild this project once from scratch without looking at code. That gives best revision.
