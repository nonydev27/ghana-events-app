
    import {useParams, Link} from "react-router";
    import events from "../data/events.js"

    export default function EventDetails() {
        
        const {id} = useParams();
        const event = events.find((e) => e.id === Number(id));

        if (!event) {
            return (
                <>
                    <h1>Event not found</h1>
                    <Link to="/events">Back to events</Link>
                </>
            )
        }
        
        return(
            <>
                <h1>{event.title}</h1>
                <p>{event.date} in {event.location}</p>
                <p>Price: {event.price}</p>
                <p>{event.description}</p>
                <Link className="link" to="/events">Back to events</Link>
            </>
        )
    }
