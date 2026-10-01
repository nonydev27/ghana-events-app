import {useState} from "react";
import {PartyPopper} from "lucide-react";

// The same classes are used on every input box, so keep them in one place
const inputStyle = "w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-ghana-gold";
const labelStyle = "mb-1 block text-left font-bold text-ghana-red";

export default function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
        // Clear the boxes after sending
        setName("");
        setEmail("");
        setMessage("");
    }

    return(
        <div className="flex justify-center px-4 py-16">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">

                {/* NEW IDEA: condition ? A : B
                    If submitted is true show the thank-you message, otherwise show the form */}
                {submitted ? (
                    <div className="flex flex-col items-center text-center">
                        <PartyPopper className="size-16 text-ghana-gold" />
                        <h1 className="mt-4 text-3xl text-ghana-green">Thank you!</h1>
                        <p className="mt-2 text-gray-600">We'll get back to you soon.</p>
                        <button className="link mt-6 cursor-pointer" onClick={() => setSubmitted(false)}>
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="text-center">
                            <h1 className="text-4xl text-ghana-red">Contact Us</h1>
                            <p className="mt-2 text-gray-600">Questions, or want your event listed? Send us a message.</p>
                        </div>

                        <div>
                            <label className={labelStyle} htmlFor="name">Name</label>
                            <input className={inputStyle} type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <label className={labelStyle} htmlFor="email">Email</label>
                            <input className={inputStyle} type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label className={labelStyle} htmlFor="message">Message</label>
                            <textarea className={inputStyle} id="message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <button className="link w-full cursor-pointer text-lg" type="submit">Send</button>
                    </form>
                )}
            </div>
        </div>
    )
}
