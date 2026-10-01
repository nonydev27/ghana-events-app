// A thin red-gold-green stripe, like the Ghana flag.
// Used under the navbar and above the footer.
export default function FlagStripe() {
    return (
        <div className="flex h-1.5">
            <div className="flex-1 bg-ghana-red"></div>
            <div className="flex-1 bg-ghana-gold"></div>
            <div className="flex-1 bg-ghana-green"></div>
        </div>
    )
}
