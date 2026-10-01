import {Link} from "react-router";
export default function Home() {
    return(
        <>
            <h1 className="text-4xl">Welcome to Ghana Events</h1>
            <p >Your one-stop destination for all Ghanaian events!</p>

            <h2>Go to Events</h2>
            <Link to="/events">Browse events</Link>
        </>
    )
}