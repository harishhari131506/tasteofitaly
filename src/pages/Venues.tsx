
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cineplexImg from "@/assets/venue-cineplex.jpg";
import miniplexImg from "@/assets/venue-miniplex.jpg";
import rooftopImg from "@/assets/venue-rooftop.jpg";
import { ArrowRight } from "lucide-react";

const venueList = [
  {
    id: "cineplex",
    name: "Cineplex",
    floor: "GROUND FLOOR",
    capacity: "3–20 guests",
    starting: "From ₹3,000",
    description: "Our flagship mini-theatre with karaoke, PS5, pool table, and foot massagers.",
    image: cineplexImg,
  },
  {
    id: "miniplex",
    name: "Miniplex",
    floor: "FIRST FLOOR",
    capacity: "2–6 guests",
    starting: "From ₹2,000",
    description: "An intimate, cozy space perfect for couples and small families.",
    image: miniplexImg,
  },
  {
    id: "rooftop",
    name: "Rooftop",
    floor: "SECOND FLOOR",
    capacity: "3–20 guests",
    starting: "From ₹3,000",
    description: "Open-air celebration space under the stars with private dining.",
    image: rooftopImg,
  },
];

export default function Venues() {
  return (
    <div className="toi-shell">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="toi-section-inner text-center mb-16 px-6">
          <span className="toi-eyebrow mb-4 block">CHOOSE YOUR SPACE</span>
          <h1 className="toi-display text-6xl md:text-7xl font-light">
            Our Venues
          </h1>
        </div>

        <div className="toi-section-inner px-6 flex flex-col gap-20">
          {venueList.map((venue, i) => (
            <div key={venue.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden relative group aspect-[4/3]">
                  <img src={venue.image} alt={venue.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <span className="toi-floor-badge mb-4">{venue.floor}</span>
                <h2 className="toi-display text-4xl md:text-5xl mb-4">{venue.name}</h2>
                <p className="toi-body text-[var(--toi-muted)] mb-6 max-w-md">{venue.description}</p>

                <div className="w-full h-px bg-[var(--toi-gold)] opacity-30 mb-6"></div>

                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-xs text-[var(--toi-muted)] uppercase tracking-wider mb-1">Capacity</div>
                    <div className="font-medium text-[var(--toi-subheading)]">{venue.capacity}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--toi-muted)] uppercase tracking-wider mb-1">Price</div>
                    <div className="font-medium text-[var(--toi-gold-text)]">{venue.starting}</div>
                  </div>
                </div>

                <Link to={`/venues/${venue.id}`} className="toi-btn-primary">
                  <span>EXPLORE {venue.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
