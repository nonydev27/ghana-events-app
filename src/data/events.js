// ============================================================
// STEP 5 of 10: Your event data
// ============================================================
// This isn't a page, it's a list of events. Both Home and Events
// will use it. Keeping it in ONE file means that if you change an
// event here, it updates everywhere.
// (Later on, this data could come from a real server/database instead.)
//
// QUICK LESSON: arrays and objects
//   An OBJECT holds info about one thing, in name: value pairs:
//       { id: 1, title: "Afrochella", location: "Accra" }
//   An ARRAY is a list, written with square brackets [ ].
//   Here you'll make an array of objects: a list of events.
//
// WHAT TO DO:
//   1. Create a variable called events and set it to an array [ ].
//
//   2. Inside the array, add 4-6 event objects, separated by commas.
//      Give every event the SAME fields, for example:
//        id          -> a number: 1, 2, 3... (must be different for each event!)
//        title       -> the event name
//        date        -> e.g. "2026-12-20"
//        location    -> e.g. "Accra", "Kumasi", "Cape Coast"
//        category    -> e.g. "Music", "Food", "Tech", "Festival"
//        price       -> e.g. "Free" or "GHS 150"
//        description -> 1-2 sentences about the event
//
//   3. Put "export default" in front of the variable, so other
//      files can import it.
//
// HOW TO CHECK IT WORKED:
//   No red underlines. Check your commas: one after each field,
//   and one after each } between events.
//
// NEXT: Step 6 is in src/pages/Events.jsx
// ============================================================

const events = [
    {
        id:1,
        title: "Afrochella",
        date: "2026-12-20",
        location: "Accra",
        category: "Music",
        price: "GHS 150",
        description: "Afrochella is a vibrant music festival celebrating African culture, music, and art. Join us for an unforgettable experience!"
    },
    {
        id:2,
        title: "Chale Wote Street Art Festival",
        date: "2026-08-15",
        location: "Accra",
        category: "Art",
        price: "Free",
        description: "Chale Wote is an annual street art festival that transforms the streets of Accra into a canvas for artists from around the world."
    },

    {
        id:3,
        title: "Accra Food Festival",
        date: "2026-09-10",
        location: "Accra",
        category: "Food",
        price: "GHS 50",
        description: "The Accra Food Festival is a culinary celebration featuring local and international cuisines, cooking demonstrations, and food competitions."
    },
    {
        id:4,
        title: "Kumasi Cultural Festival",
        date: "2026-11-05",
        location: "Kumasi",
        category: "Culture",
        price: "GHS 30",
        description: "Experience the rich cultural heritage of Kumasi at the Kumasi Cultural Festival, with traditional music, dance, and crafts."
    },
    {
        id:5,
        title: "Cape Coast Carnival",
        date: "2026-10-25",
        location: "Cape Coast",
        category: "Festival",
        price: "GHS 100",
        description: "Join the Cape Coast Carnival for a lively celebration of music, dance, and local traditions in the historic city of Cape Coast."
    }
]

export default events;