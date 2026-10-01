// ============================================================
// STEP 7 of 10: One event's page  (shows at: yoursite.com/events/1, /events/2, ...)
// ============================================================
// This is the trickiest step, so take your time!
// Instead of making a separate page for EVERY event, you make ONE page
// that reads the event's id from the URL and shows the matching event.
//
// QUICK LESSON: URL parameters
//   In App.jsx you'll add a route with path "/events/:id".
//   The colon (:) means "this part can be anything". So:
//       /events/1  -> id is "1"
//       /events/5  -> id is "5"
//   Inside this page, a "hook" called useParams() reads that value.
//   (A hook is a special React function whose name starts with "use".)
//
// WHAT TO DO:
//   1. Import useParams and Link from "react-router".
//      Import your events list from "../data/events.js".

    import {useParams, Link} from "react-router";
    import events from "../data/events.js"

    export default function EventDetails() {
        
        const {id} = useParams();
        const event = events.find((e) => e.id === Number(id));

        if (!event) {
            return (
                <>
                    <h1>Event not found</h1>
                    <Link to="/events">Back to events</Link>
                </>
            )
        }
        
        return(
            <>
                <h1>{event.title}</h1>
                <p>{event.date} in {event.location}</p>
                <p>Price: {event.price}</p>
                <p>{event.description}</p>
                <Link to="/events">Back to events</Link>
            </>
        )
    }
//
//   2. Make a component called EventDetails with "export default".
//
//   3. At the top of the function (BEFORE the return), get the id:
//        const { id } = useParams()
//      (That's the one line of code I'm giving you. The { } pulls
//       "id" out of what useParams gives back.)
//
//   4. Still before the return, find the matching event with .find():
//        go through events and find the one where event.id equals id.
//      WATCH OUT: the id from the URL is TEXT ("1"), but your ids are
//      NUMBERS (1). Text and numbers aren't equal, so convert the
//      text to a number first with Number(id).
//
//   5. If NO event was found (someone typed /events/999), return a
//      message like "Event not found" and a Link back to "/events".
//
//   6. Otherwise, return the event's info: title in an <h1>, then the
//      date, location, price, and description. Finish with a
//      Link back to "/events" that says "Back to events".
//
//   7. Connect it: in App.jsx, import EventDetails and add a Route
//      with path "/events/:id".
//
// HOW TO CHECK IT WORKED:
//   Visit /events/1: you should see your first event.
//   Visit /events/999: you should see "Event not found".
//   Then go back to Events.jsx and do its "LATER" step so the cards link here.
//
// NEXT: Step 8 is in src/pages/Home.jsx
// ============================================================
