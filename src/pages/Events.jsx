
import events from "../data/events.js"
import {Link} from "react-router";

export default function Events() {
    return(
        <>
        <div className="flex flex-col items-center justify-center h-screen">
             <h1 className="text-ghana-red font-bold text-2xl mb-4">Upcoming Events</h1>
         {events.map((e) => (
            <div key={e.id}  className="border border-ghana-red p-4 mb-4 w-1/2">
                <h2 className=""><Link className="link" to={`/events/${e.id}`}>{e.title}</Link></h2>
                <p className="mt-4">{e.date} in {e.location}</p>
            </div>
        ))}
        </div>
        </>
    )
}
