import {Link} from "react-router";

export default function NotFound() {

    return(
        <>
            <h1> Page 404</h1>
            <p> Sorry but this page does not exist. Kindly go back <span><Link to="/">home</Link></span></p>
        </>
    )
}