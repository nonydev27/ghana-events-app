// ============================================================
// STEP 1 of 10: About page  (shows at: yoursite.com/about)
// ============================================================
// Start here! It's the easiest page, and Home.jsx is already a good
// example to copy from.
//
// QUICK LESSON: What is a "component"?
//   A component is just a JavaScript function that returns what you
//   want to show on the screen. The part inside return( ) looks like HTML,
//   but it's called JSX. Two small differences from HTML:
//     - write className instead of class
//     - everything you return must be inside ONE outer tag.
//       <> and </> are an invisible outer tag you can use for this.
//
// WHAT TO DO:
//   1. Make a function called About. Put "export default" in front of it.
//      (Look at the first line of Home.jsx: same idea, different name.)
//      "export default" lets other files use this component.
//
//   2. Inside the function, add a return( ).
//
//   3. Inside the return, put the <> </> wrapper, and inside that:
//        - an <h1> that says "About Ghana Events"
//        - a <p> with 1-2 sentences about what your app does
//          (for example: helping people find concerts, festivals, and
//          events happening across Ghana)
//
//   4. (Optional) Add an <h2> "What we offer" and a <ul> list with a
//      few <li> items under it.
//
// HOW TO CHECK IT WORKED:
//   You can't see this page in the browser until Step 3 connects it.
//   For now, just make sure VS Code doesn't underline anything in red.
//
// NEXT: Step 2 is in src/main.jsx
// ============================================================


export default function About() {
    return (
        <>
        <h1>About Ghana Events</h1>
        <p>Welcome to Ghana Events! We are dedicated to helping you discover and connect with the vibrant event scene across Ghana.</p>
        <h2>What we offer</h2>
        <ul>
            <li>Discover upcoming events across Ghana</li>
            <li>Connect with event organizers and attendees</li>
            <li>Get real-time updates on event changes</li>
        </ul>
        </>
    )
}
