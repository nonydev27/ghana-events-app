
    import {useState} from "react";
  
    export default function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

        
    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
    }
        return(
            <>

            {submitted && <p>Thanks! We'll get back to you soon.</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit">Send</button>
            </form>
            </>
        )
    }

