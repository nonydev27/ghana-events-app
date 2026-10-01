// ============================================================
// STEP 9 of 10: Contact page  (shows at: yoursite.com/contact)
// ============================================================
// Here you'll learn "state", one of the most important ideas in React.
// Do it in two parts: first build the page, then make it interactive.
//
// ---------- PART A: just the page (easy) ----------
//   1. Make a component called Contact with "export default".
//   2. Return an <h1> "Contact Us" and a <form> containing:
//        - an <input> for the name
//        - an <input type="email"> for the email
//        - a <textarea> for the message
//        - a <button type="submit"> that says "Send"
//      Tip: add a <label> above each box so people know what to type.
//   3. Connect it: add a Route for "/contact" in App.jsx and a
//      NavLink in Navbar.jsx.
//   CHECK: the form shows up, and you can type in it.

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

// ---------- PART B: make it work (new idea: state) ----------
// QUICK LESSON: What is state?
//   State is a variable that React REMEMBERS, and when it changes,
//   React updates the screen automatically. You create it like this:
//       const [name, setName] = useState("")
//     name    = the current value (starts as "", empty text)
//     setName = the function you call to change it
//
//   4. Import useState from "react" (at the very top of the file).
//   5. Inside your function (before the return), create 3 states:
//        name, email, message. Each one starts as "".
//   6. Connect each box to its state by giving it two things:
//        value={name}                                -> the box shows the state
//        onChange={(e) => setName(e.target.value)}   -> typing updates the state
//      Do the same for email and message.
//   7. Make one more state called submitted that starts as false.
//   8. Give the <form> an onSubmit that runs a function you write, which:
//        - calls e.preventDefault() first. Without it, the browser
//          reloads the page when you submit.
//        - sets submitted to true
//   9. Above the form in your return, show a message ONLY when submitted is true:
//        {submitted && <p>Thanks! We'll get back to you soon.</p>}
//      (&& means "if the left side is true, show the right side".)
//
// HOW TO CHECK IT WORKED:
//   Fill in the form, click Send. The page should NOT reload, and
//   your thank-you message should appear.
//
// NEXT: Step 10 is in src/pages/NotFound.jsx
// ============================================================
