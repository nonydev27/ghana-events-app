
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
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
                <label className="text-ghana-red font-bold" htmlFor="name">Name:</label>
                <input className="border border-ghana-red focus:outline-none focus:ring-2 focus:ring-ghana-gold" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label className="text-ghana-red font-bold" htmlFor="email">Email:</label>
                <input className="border border-ghana-red focus:outline-none focus:ring-2 focus:ring-ghana-gold" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="text-ghana-red font-bold" htmlFor="message">Message:</label>
                <textarea className="border border-ghana-red focus:outline-none focus:ring-2 focus:ring-ghana-gold" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button className="link hover:cursor-pointer mt-4" type="submit">Send</button>
            </form>
            </>
        )
    }

