import {Link} from "react-router";
export default function Home() {
    return(
        <>
           <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl text-7xl">Welcome to Ghana Events</h1>
                <p >Your one-stop destination for all Ghanaian events!</p>

                <div className="flex flex-col items-center justify-center mt-4">
                    <h2>Go to Events</h2>
                     <Link  className="link" to="/events">Browse events</Link>
                </div>
           </div>
        </>
    )
}