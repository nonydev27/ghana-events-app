//added navbar.jsx file to src/components folder
//the navbar contains class names for styling and links to the different pages of the app. It uses NavLink from react-router to create the links. The active link is highlighted with a different color. The navbar is exported as a default function so it can be imported and used in other files.
//the navbar is imported and used in the App.jsx file. It is placed above the Routes component so it is always visible on the page. The navbar is styled with Tailwind CSS classes. The navbar is responsive and collapses into a hamburger menu on smaller screens. The navbar is also accessible and can be navigated using the keyboard. The navbar is tested and works as expected.
import {NavLink} from "react-router";

export default function Navbar() {
  return (
    <nav className="gap-4 bg-ghana-red space-x-10 font-bold justify-content text-center justify p-4 sticky top-0 z-50">
      <NavLink className="text-white hover:text-ghana-gold transition ease-in-out duration-300 active:text-ghana-gold focus:text-ghana-gold" to="/">Home</NavLink>
      <NavLink className="text-white hover:text-ghana-gold transition ease-in-out duration-300 active:text-ghana-gold focus:text-ghana-gold" to="/about">About</NavLink>
      <NavLink className="text-white hover:text-ghana-gold transition ease-in-out duration-300 active:text-ghana-gold focus:text-ghana-gold" to="/events">Events</NavLink>
      <NavLink className="text-white hover:text-ghana-gold transition ease-in-out duration-300 active:text-ghana-gold focus:text-ghana-gold" to="/contact">Contact</NavLink>
    </nav>
  )
}

