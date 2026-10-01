import {Link} from "react-router";
import {Calendar, MapPin} from "lucide-react";

// A reusable card for ONE event. Home and Events both use it.
// The page passes the event in like this:  <EventCard event={e} />
// and we receive it here as { event } (that's called a "prop").
export default function EventCard({ event }) {
    return (
        <Link
            to={`/events/${event.id}`}
            className="group flex flex-col bg-white rounded-xl shadow-md p-6 text-left border-t-4 border-ghana-green hover:-translate-y-1 hover:shadow-xl transition duration-300"
        >
            {/* Category badge */}
            <span className="self-start rounded-full bg-ghana-gold px-3 py-1 text-xs font-bold text-black">
                {event.category}
            </span>

            <h2 className="mt-4 text-2xl text-ghana-black group-hover:text-ghana-red transition-colors">
                {event.title}
            </h2>

            {/* Icons are components too: size with "size-4", color with "text-..." */}
            <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="size-4 text-ghana-red" /> {event.date}
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="size-4 text-ghana-red" /> {event.location}
            </p>

            {/* mt-auto pushes the price to the bottom, so all cards line up */}
            <p className="mt-auto pt-4 font-bold text-ghana-green">{event.price}</p>
        </Link>
    )
}
