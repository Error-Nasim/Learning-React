# Part-1 Fundamentals

This folder is my React basics revision notebook.

I am learning React from fundamentals and using these small projects to practice each concept. Later, I can read this file to quickly revise the core topics.

## What Is React

React is a JavaScript library for building user interfaces using reusable components.

- It helps build UI in small pieces called components.
- UI updates automatically when data changes.
- It follows a component-based and declarative approach.

## Core React Basics (Quick Revision)

### 1. Components

Components are reusable blocks of UI.

- Functional components are normal JavaScript functions.
- A component returns JSX.
- Component names should start with a capital letter.

Example:

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}
```

### 2. JSX

JSX is syntax that looks like HTML inside JavaScript.

- Use `className` instead of `class`.
- Wrap JavaScript expressions with `{}`.
- Return one parent element (or use fragments `<>...</>`).

Example:

```jsx
const name = "Aman";
return <p>Hello, {name}</p>;
```

### 3. Props

Props are used to pass data from parent component to child component.

- Props are read-only.
- They make components reusable.

Example:

```jsx
function Card(props) {
  return <h2>{props.title}</h2>;
}

<Card title="React Basics" />;
```

### 4. State (Important)

State is data that changes inside a component.

- Use `useState` hook.
- When state updates, component re-renders.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### 5. Events

React handles events using camelCase.

- `onClick`, `onChange`, `onSubmit`
- Pass a function, not a function call.

Example:

```jsx
<button onClick={handleClick}>Click Me</button>
```

### 6. Conditional Rendering

Show UI based on conditions.

- Use `if`, ternary operator, or `&&`.

Example:

```jsx
{
  isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>;
}
```

### 7. Lists and Keys

Render arrays using `map()`.

- Every list item needs a unique `key`.
- Keys help React track changes efficiently.

Example:

```jsx
{
  products.map((product) => <li key={product.id}>{product.name}</li>);
}
```

### 8. Forms (Controlled Components)

React form inputs are usually controlled by state.

- Input value comes from state.
- `onChange` updates state.

Example:

```jsx
const [email, setEmail] = useState("");

<input value={email} onChange={(e) => setEmail(e.target.value)} />;
```

### 9. useEffect (Basic Idea)

`useEffect` runs side effects (API call, timer, document title, etc.).

- Runs after render.
- Dependency array controls when it runs.

Example:

```jsx
import { useEffect } from "react";

useEffect(() => {
  document.title = "React App";
}, []);
```

## Folder Projects And What I Learn From Them

### 1. first-app

Focus:

- Basic project structure
- Simple components
- JSX practice

### 2. landing-page

Focus:

- Component splitting (`Header`, `Skills`, `Projects`, `Footer`)
- Passing static/dynamic data
- Styling and layout practice

### 3. product-list

Focus:

- Rendering array data with `map()`
- Reusable product card components
- Props-based UI building

## How To Create A New Project Using Vite

First you need Node.js installed in your computer. If you don't have it installed, you can download it from here:

https://nodejs.org

After installation check the version of Node and npm by running the following commands in your terminal:

```bash
node -v
npm -v
```

If a version number is shown then you are good to go. 

Now,Use these steps when I want to start a fresh React project with Vite.

1. Open terminal in the folder where I want to create the project.
2. Run:

```bash
npm create vite@latest
```

3. Enter project name.
4. Select framework: `React`.
5. Select variant: `JavaScript` (or `TypeScript` if needed).
6. Move into project folder:

```bash
cd project-name
```

7. Install dependencies:

```bash
npm install
```

8. Start development server:

```bash
npm run dev
```

9. Open browser and visit the local URL shown in terminal (usually `http://localhost:5173`).

Useful commands:

```bash
npm run build
npm run preview
```

- `npm run build` makes production build.
- `npm run preview` runs the production build locally.

## Common Mistakes To Avoid

- Using `class` instead of `className` in JSX
- Forgetting `key` in list rendering
- Directly changing state instead of using setter function
- Calling event handlers immediately (for example `onClick={handleClick()}`)
- Writing component names in lowercase

## Quick Revision Checklist

Before moving to next topics, I should be able to explain and build:

- Component and JSX basics
- Props and one-way data flow
- State updates with `useState`
- Event handling
- Conditional rendering
- List rendering with keys
- Basic controlled forms
- Basic `useEffect` usage

## Goal

Build a strong foundation in React by understanding concepts and applying them through mini projects.

---

Learning in progress. Keep building.
