// ============================================================
// STEP 8 of 10: Upgrade the Home page  (shows at: yoursite.com/)
// ============================================================
// You already built the basics of this page. Nice! Now you'll use what
// you learned in Steps 4-7 to make it better. No new ideas here,
// just practice.
//
// WHAT TO DO:
//   1. Add a button that takes people to the Events page:
//        - import Link from "react-router"
//        - under your <p>, add a Link with to="/events" and the text
//          "Browse events"
//
//   2. Show a few "Featured events" (just the first 3, not all of them):
//        - import your events list from "../data/events.js"
//        - add an <h2> "Featured Events"
//        - events.slice(0, 3) gives you only the first 3 events.
//          Then use .map() on that, just like in Events.jsx.
//        - don't forget key={event.id}!
//        - make each title a Link to that event's page (like in Events.jsx)
//
// HOW TO CHECK IT WORKED:
//   The Home page shows your button and 3 event cards.
//   Clicking a card opens that event's page.
//
// NOTICE: you just wrote the same card code in TWO places (here and in
// Events.jsx). Later you can learn about "props" and turn the card into
// its own reusable component. Ask me when you're ready!
//
// NEXT: Step 9 is in src/pages/Contact.jsx
// ============================================================
import {Link} from "react-router";
export default function Home() {
    return(
        <>
            <h1>Welcome to Ghana Events</h1>
            <p>Your one-stop destination for all Ghanaian events!</p>

            <h2>Go to Events</h2>
            <Link to="/events">Browse events</Link>
        </>
    )
}