import {useState} from "react";
import events from "../data/events.js";
import EventCard from "../components/EventCard.jsx";

// Build the list of filter buttons from the data itself:
// "All" + every category, without duplicates (new Set removes repeats)
const categories = ["All", ...new Set(events.map((e) => e.category))];

export default function Events() {
    // Which filter button is selected right now
    const [selected, setSelected] = useState("All");

    // NEW IDEA: .filter() keeps only the events that pass the test
    const shownEvents = selected === "All"
        ? events
        : events.filter((e) => e.category === selected);

    return(
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl text-center text-ghana-red">Upcoming Events</h1>
            <p className="mt-2 text-center text-gray-600">Find something fun happening across Ghana</p>

            {/* Filter buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelected(cat)}
                        // The selected button is green; the others are white
                        className={
                            "rounded-full px-4 py-2 text-sm font-bold transition-colors cursor-pointer " +
                            (selected === cat
                                ? "bg-ghana-green text-white"
                                : "bg-white text-ghana-black hover:bg-ghana-gold")
                        }
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Event cards: 1 column on phones, 2 on tablets, 3 on laptops */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {shownEvents.map((e) => (
                    <EventCard key={e.id} event={e} />
                ))}
            </div>
        </div>
    )
}
