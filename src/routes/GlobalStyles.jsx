import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  /* VARIABLES */
  /* Palette Colors */
  --black-color: #191919;
  --white-color: #f0f0f0;
  --white-alpha-color: #f0f0f09a;
  --blue-color: #0a3563;
  --blue-light-color: #3074bd;
  --blue-transparent: #1b376186;
  --gray-color: #1f1f1f;
  --test: rgba(255, 255, 0, 0.219);
  
  /* Fonts */
  --font-title: 3.5rem;
  --font-subtitle: 1.5rem;
  --font-paragraph: 1.1rem;
  --font-small-paragraph: 14px;
  --font-description: 12px;

  /* Borders */
  --border-radius: 10px;
  --border-light: 2px solid var(--blue-light-color);


  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  
  color-scheme: light dark;
  color: #ffffffde;
  background-color: var(--black-color);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--white-color);
}
`;
