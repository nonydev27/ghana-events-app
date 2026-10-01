
import events from "../data/events.js"
import {Link} from "react-router";

export default function Events() {
    return(
        <>
        <h1>Upcoming Events</h1>
        {events.map((e) => (
            <div key={e.id}>
                <h2><Link to={`/events/${e.id}`}>{e.title}</Link></h2>
                <p>{e.date} in {e.location}</p>
            </div>
        ))}
        </>
    )
}
