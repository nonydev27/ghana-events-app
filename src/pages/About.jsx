import {Music, Palette, UtensilsCrossed} from "lucide-react";

// The "What we offer" cards are stored in an array and shown with .map()
// "Icon" holds the icon component itself (no < /> yet), so we can draw it later
const offers = [
    { Icon: Music, title: "Music & Festivals", text: "From Afrobeats concerts to traditional festivals across the country." },
    { Icon: Palette, title: "Art & Culture", text: "Street art, exhibitions, and celebrations of Ghanaian heritage." },
    { Icon: UtensilsCrossed, title: "Food & Fun", text: "Food festivals, markets, and the best places to enjoy jollof." },
];

export default function About() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl text-ghana-red">About Ghana Events</h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">
                Ghana Events is a platform that provides information about upcoming events in Ghana.
                Our mission is to connect people with the vibrant culture and community of Ghana
                through events and activities.
            </p>

            <h2 className="mt-16 text-3xl text-ghana-green">What we offer</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {offers.map((offer) => (
                    <div key={offer.title} className="rounded-xl bg-white p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
                        {/* A circle with the icon inside */}
                        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-ghana-green/10">
                            <offer.Icon className="size-8 text-ghana-green" />
                        </div>
                        <h3 className="mt-4 text-xl text-ghana-black">{offer.title}</h3>
                        <p className="mt-2 text-gray-600">{offer.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
