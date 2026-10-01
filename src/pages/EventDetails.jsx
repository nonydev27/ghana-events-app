import {useParams, Link} from "react-router";
import events from "../data/events.js"
import {Calendar, MapPin, Ticket, SearchX, ArrowLeft} from "lucide-react";

export default function EventDetails() {

    const {id} = useParams();
    const event = events.find((e) => e.id === Number(id));

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
                <SearchX className="size-16 text-ghana-gold" />
                <h1 className="mt-4 text-4xl text-ghana-red">Event not found</h1>
                <p className="mt-2 text-gray-600">We couldn't find that event. It may have been removed.</p>
                <Link className="link mt-6" to="/events">Back to events</Link>
            </div>
        )
    }

    return(
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Link className="inline-flex items-center gap-1 text-sm font-bold text-ghana-green hover:underline" to="/events">
                <ArrowLeft className="size-4" /> Back to events
            </Link>

            <article className="mt-6 overflow-hidden rounded-2xl bg-white shadow-lg">
                {/* Colored banner at the top of the card */}
                <div className="bg-ghana-green px-8 py-10 text-white">
                    <span className="rounded-full bg-ghana-gold px-3 py-1 text-xs font-bold text-black">
                        {event.category}
                    </span>
                    <h1 className="mt-4 text-4xl md:text-5xl">{event.title}</h1>
                </div>

                <div className="p-8">
                    {/* Quick facts */}
                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2">
                            <Calendar className="size-5 text-ghana-red" /> {event.date}
                        </span>
                        <span className="flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2">
                            <MapPin className="size-5 text-ghana-red" /> {event.location}
                        </span>
                        <span className="flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2 font-bold text-ghana-green">
                            <Ticket className="size-5" /> {event.price}
                        </span>
                    </div>

                    <h2 className="mt-8 text-2xl text-ghana-red">About this event</h2>
                    <p className="mt-2 leading-relaxed text-gray-700">{event.description}</p>

                    <Link className="link mt-8 inline-block" to="/contact">Ask about this event</Link>
                </div>
            </article>
        </div>
    )
}
