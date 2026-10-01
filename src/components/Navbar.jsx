import {NavLink} from "react-router";
import FlagStripe from "./FlagStripe.jsx";

// The links live in an array, so I can .map() over them
// and write the long className only ONCE.
const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50">
            <nav className="bg-ghana-red flex flex-wrap items-center justify-between gap-4 px-6 py-4">
                {/* Site name on the left */}
                <NavLink to="/" className="font-display text-2xl text-ghana-gold">
                    Ghana Events
                </NavLink>

                {/* Page links on the right */}
                <div className="flex gap-6 font-bold">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            // "end" stops Home from looking active on every page
                            end={link.to === "/"}
                            // [&.active] = style the link for the page you're on, the one you will see
                            className="text-white hover:text-ghana-gold transition-colors duration-300 [&.active]:text-ghana-gold [&.active]:underline underline-offset-8"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
            <FlagStripe />
        </header>
    )
}
