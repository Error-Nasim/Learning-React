# First App (React Absolute Basics)

This project is my first React practice app.

This README is written for complete beginners so anyone can understand what is happening in this app just by reading it.

## 1. What This App Does

This app shows simple text on the screen using React components.

It currently renders:

- A heading from `App` component
- A nested heading from `Hello` component (`Hello World!`)
- A paragraph with text `Nasim`

That is enough to learn the most important starting concepts:

- How React starts
- What a component is
- How one component can call another component
- How JSX works
- How content appears in browser

## 2. Project Type

This is a **Create React App** project (not Vite).

How we know:

- `react-scripts` is used in `package.json`
- Script to run app is `npm start`

## 3. Folder Structure (Beginner View)

```text
first-app/
  public/
    index.html
  src/
    index.js
    App.js
    Hello.js
  package.json
```

Meaning of each important file:

- `public/index.html`: has a `<div id="root"></div>` where React shows your app.
- `src/index.js`: entry point of React code.
- `src/App.js`: main component.
- `src/Hello.js`: small child component used by `App`.
- `package.json`: project metadata, dependencies, and scripts.

## 4. How React Starts In This Project

Main flow is:

1. Browser loads `public/index.html`
2. React finds `div` with id `root`
3. React renders `<App />` inside that root

In this project, this happens in `src/index.js`.

Important ideas from `index.js`:

- `ReactDOM.createRoot(...)` creates a React root.
- `root.render(<App />)` tells React what UI to display.

## 5. App Component (`src/App.js`)

`App` is the main component.

What it does:

- Returns JSX (UI markup)
- Shows one `<h1>`
- Uses another component `<Hello />` inside it
- Shows one paragraph `<p>Nasim</p>`

Concepts you learn here:

- Functional component syntax
- Returning JSX
- Component composition (component inside component)
- JSX tags and text

## 6. Hello Component (`src/Hello.js`)

`Hello` is a very small reusable component.

What it does:

- Returns `<h1>Hello World!</h1>`
- Exported with `export default Hello`

Why this matters:

- You can build UI in small reusable parts.
- Later, large apps are made by combining many small components like this.

## 7. JSX Basics Used In This App

JSX looks like HTML but is written inside JavaScript.

Rules you can see in this project:

- Component names start with capital letter (`App`, `Hello`)
- Use normal tags like `<h1>`, `<p>`
- Use self-closing component tag: `<Hello />`
- Multiple elements are wrapped with fragment: `<> ... </>`

## 8. Import and Export Basics Used

Used in this app:

- `import App from "./App"`
- `import Hello from "./Hello"`
- `export default App`
- `export default Hello`

Simple meaning:

- `export`: make something available from a file
- `import`: bring that thing into another file

## 9. How To Run This Project

1. Open terminal in `first-app` folder.
2. Install packages:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

4. Open browser at:

```text
http://localhost:3000
```

## 10. Scripts You Have In This Project

From `package.json`:

- `npm start`: run app in development mode
- `npm run build`: create production build
- `npm test`: run tests
- `npm run eject`: expose internal config (advanced, usually avoid)

## 11. Beginner Revision Notes

If you understand these points, your base is strong:

- React app starts from `index.js`
- `App` is rendered into `root`
- Components are JavaScript functions returning JSX
- Components can be reused and nested
- `import` and `export` connect files

## 12. Small Practice Tasks (Very Basic)

Try these to learn faster:

1. Change `Hello World!` text in `Hello.js`.
2. Add one more paragraph in `App.js`.
3. Create new component `Name.js` and use it inside `App`.
4. Replace `Nasim` with your own name.

## 13. Common Beginner Mistakes

- Writing component name in lowercase (`hello`) instead of `Hello`
- Forgetting to export component
- Wrong import path (for example missing `./`)
- Returning multiple JSX elements without wrapper

## 14. Final Summary

This first app is intentionally simple.

The goal is not design, but understanding:

- how React starts,
- how components work,
- and how files connect.

Once this is clear, learning props, state, events, and hooks becomes much easier.

---

Learning note: Master the basics first. Speed comes later.
