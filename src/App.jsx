// ============================================================
// STEP 3 of 10: Connect your pages to URLs
// ============================================================
// App.jsx is like a MAP for your website. It says:
// "when the URL is THIS, show THAT page".
//
// QUICK LESSON: Routes and Route
//   <Routes> is a box that holds all your routes.
//   <Route> is one rule inside that box. Each rule has two parts:
//     path    = the URL, like "/about"
//     element = the page to show, like <About />
//   A single rule looks like this (fill in the blanks):
//     <Route path="____" element={____} />
//
// WHAT TO DO (start small, with just 2 pages):
//   1. At the top of this file, import Routes and Route from "react-router".
//
//   2. Import your Home page. Its path is "./pages/Home.jsx".
//      Do the same for your About page.
//
//   3. Inside the <> </> in the return below, add a <Routes> ... </Routes> box.
//
//   4. Inside the box, add two Route rules:
//        path "/"       -> shows Home
//        path "/about"  -> shows About
//
// HOW TO CHECK IT WORKED:
//   With `npm run dev` running:
//     - open  http://localhost:5173/        -> you should see Home
//     - open  http://localhost:5173/about   -> you should see About
//   (Your port number might differ; use the one the terminal shows.)
//   If that works, you just built multi-page routing!
//
// ADD MORE LATER (come back here as you build each page):
//   "/events"      -> Events        (Step 6)
//   "/events/:id"  -> EventDetails  (Step 7)
//   "/contact"     -> Contact       (Step 9)
//   "*"            -> NotFound      (Step 10, always the LAST rule)
//
// NEXT: Step 4 is in src/components/Navbar.jsx
// ============================================================
import {Routes, Route} from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
