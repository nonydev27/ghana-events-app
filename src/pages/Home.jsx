import {Link} from "react-router";
import events from "../data/events.js";
import EventCard from "../components/EventCard.jsx";
import {Star, ArrowRight} from "lucide-react";

export default function Home() {
    // Only the first 3 events are "featured"
    const featured = events.slice(0, 3);

    return(
        <>
           {/* ---------- Hero (the big top section) ---------- */}
           <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
                {/* Layer 1: background image */}
                <div className="absolute inset-0 bg-[url('https://images.pixels.com/images/artworkimages/medium/2/ghana-country-flag-map-design-turnpike.jpg')] bg-cover bg-center"></div>
                {/* Layer 2: dark see-through overlay, so the white text is easy to read */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Layer 3: your content, on top */}
                <div className="relative flex flex-col items-center text-white">
                    <p className="mb-4 flex items-center gap-2 rounded-full bg-ghana-gold px-4 py-1 text-sm font-bold text-black">
                        {/* fill-current = fill the star with the text color (black, like the flag's Black Star) */}
                        <Star className="size-4 fill-current" /> Akwaaba!
                    </p>
                    <h1 className="text-4xl md:text-7xl">Welcome to Ghana Events</h1>
                    <p className="mt-4 max-w-xl text-lg text-gray-200">
                        Your one-stop destination for all Ghanaian events!
                    </p>
                    <Link className="link mt-8 text-lg" to="/events">Browse events</Link>
                </div>
           </section>

           {/* ---------- Featured events ---------- */}
           <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl text-center text-ghana-red mb-10">Featured Events</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((e) => (
                        <EventCard key={e.id} event={e} />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link className="inline-flex items-center gap-1 font-bold text-ghana-green hover:underline" to="/events">
                        See all events <ArrowRight className="size-4" />
                    </Link>
                </div>
           </section>
        </>
    )
}
