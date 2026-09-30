// ============================================================
// STEP 4 of 10: Navigation bar (the menu at the top of every page)
// ============================================================
// Right now, the only way to change pages is to type the URL yourself.
// The navbar gives people buttons to click instead.
//
// QUICK LESSON: Why not use a normal <a href="..."> link?
//   A normal <a> link makes the browser reload the whole website.
//   React Router gives you <NavLink> instead. It changes the page
//   instantly with no reload. It works like <a>, but you write
//   to="/about" instead of href="/about".
//
// WHAT TO DO:
//   1. Import NavLink from "react-router".
//
//   2. Make a component called Navbar with "export default"
//      (same shape as your About page).
//
//   3. In the return, use a <nav> tag. Inside it, add one NavLink
//      for each page you have so far:
//        Home  -> to="/"
//        About -> to="/about"
//      (Add Events and Contact links later, once those pages exist.)
//
//   4. Go to App.jsx and:
//        - import Navbar from "./components/Navbar.jsx"
//        - put <Navbar /> ABOVE the <Routes> box.
//      Why above? Everything outside <Routes> shows on EVERY page.
//      Only the part inside <Routes> changes.
//
// HOW TO CHECK IT WORKED:
//   Your links show at the top. Clicking them switches pages
//   without the browser flashing or reloading.
//
// BONUS (optional, later):
//   NavLink automatically adds class="active" to the link for the page
//   you're on. In index.css you can style it, e.g. make .active bold.
//   Tip: add the word end to the Home link (<NavLink to="/" end>),
//   otherwise Home will look "active" on every page.
//
// NEXT: Step 5 is in src/data/events.js
// ============================================================
