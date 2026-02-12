
export default function Marquee() {
    const items = [
        "Mini Theatre",
        "Karaoke",
        "Board Games",
        "PS5 & Pool Table",
        "Garden Rooftop",
        "Food Included",
        "Private Celebration",
        "₹2000 Onwards",
        "3 Floors",
        "20 Guests Max"
    ];

    return (
        <div className="toi-marquee">
            <div className="toi-marquee-inner">
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-14">
                        <span>{item}</span>
                        <span className="toi-marquee-separator">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
