import {Link} from "react-router";

export default function NotFound() {

    return(
        <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
            <h1 className="text-9xl text-ghana-gold drop-shadow">404</h1>
            <h2 className="mt-4 text-3xl text-ghana-red">Oops, you're out of bounds!</h2>
            <p className="mt-2 text-gray-600">Sorry, this page does not exist.</p>
            <Link className="link mt-8" to="/">Take me home</Link>
        </div>
    )
}
