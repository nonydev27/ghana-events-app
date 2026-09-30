// ============================================================
// STEP 2 of 10: Turn on React Router
// ============================================================
// This file is where your React app starts. You'll only change it ONCE.
//
// QUICK LESSON: What is React Router?
//   Normally a React app is just ONE page. React Router lets you have
//   several "pages" (Home, About, Events...) and shows the right one
//   based on the URL in the address bar:
//     yoursite.com/        -> Home page
//     yoursite.com/about   -> About page
//   It does this WITHOUT reloading the browser, so it feels fast.
//
// WHAT TO DO:
//   1. Look at the import lines below. Add ONE more import line that
//      brings in BrowserRouter from "react-router".
//      Hint: it uses curly braces { } just like the StrictMode line does.
//
//   2. Look at the part lower down where <App /> sits inside <StrictMode>.
//      Put <BrowserRouter> just before <App /> and </BrowserRouter>
//      just after it, so App is "wrapped" inside BrowserRouter.
//
//   Why? BrowserRouter is like switching the router ON for your whole app.
//   Everything inside it (your App and all its pages) can now use routing.
//
// HOW TO CHECK IT WORKED:
//   Run `npm run dev` in the terminal and open the link it shows.
//   The page should still look the same as before, with no errors.
//   (Right-click the page > Inspect > Console shows any errors.)
//
// NEXT: Step 3 is in src/App.jsx
// ============================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
