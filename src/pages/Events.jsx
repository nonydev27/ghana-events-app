// ============================================================
// STEP 6 of 10: Events page  (shows at: yoursite.com/events)
// ============================================================
// This page shows ALL your events as a list of cards.
//
// QUICK LESSON: .map() turns a list of data into a list of things on screen
//   You have an array of events. You want one card per event.
//   Instead of writing each card by hand, .map() goes through the array
//   and runs your code once for EACH event:
//       events.map((event) => ( ...the card for this event... ))
//   Inside, event.title gives that event's title, event.date its date, etc.
//   To show a JavaScript value inside JSX, wrap it in curly braces { }.
//
//   IMPORTANT: React needs the outer tag of each card to have a
//   unique "key" so it can tell the cards apart. Use the id:
//   key={event.id}. You'll see a warning in the console if you forget.
//
// WHAT TO DO:
//   1. Import your events list: import events from "../data/events.js"
//      (The ../ means "go up one folder", from pages/ to src/.)
//
//   2. Make a component called Events with "export default".
//
//   3. In the return, add an <h1> like "Upcoming Events".
//
//   4. Below the heading, use events.map(...) to show a card for each
//      event. Start simple: a <div> with the title in an <h2>, and
//      a <p> for the date and location.
//
//   5. Connect it: in App.jsx, import Events and add a Route for "/events".
//      In Navbar.jsx, add a NavLink to "/events".
//
// HOW TO CHECK IT WORKED:
//   Click "Events" in your navbar. You should see a card for every
//   event in your data file. Add a new event to events.js and it
//   should appear here by itself.
//
// LATER (after Step 7): make each card clickable so it opens that event's
// own page. Import Link from "react-router" and wrap the title like this:
//   <Link to={"/events/" + event.id}> ...title... </Link>
//
// NEXT: Step 7 is in src/pages/EventDetails.jsx
// ============================================================
