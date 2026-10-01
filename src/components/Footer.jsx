import {Link} from "react-router";
import FlagStripe from "./FlagStripe.jsx";

// Shown at the bottom of every page (it sits below <Routes> in App.jsx).
export default function Footer() {
    return (
        <footer className="bg-ghana-black text-white">
            <FlagStripe />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8 max-w-6xl mx-auto">
                <p className="font-display text-2xl text-ghana-gold">Ghana Events</p>

                <div className="flex gap-6 text-sm">
                    <Link className="hover:text-ghana-gold transition-colors" to="/events">Events</Link>
                    <Link className="hover:text-ghana-gold transition-colors" to="/about">About</Link>
                    <Link className="hover:text-ghana-gold transition-colors" to="/contact">Contact</Link>
                </div>

                <p className="text-sm text-gray-400">© 2026 Ghana Events. Akwaaba!</p>
            </div>
        </footer>
    )
}
