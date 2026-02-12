
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cineplexImg from "@/assets/venue-cineplex.jpg";
import miniplexImg from "@/assets/venue-miniplex.jpg";
import rooftopImg from "@/assets/venue-rooftop.jpg";
import { Reveal } from "@/components/ui/Reveal";

const venueCards = [
  {
    name: "Cineplex",
    floor: "Ground Floor",
    desc: "The original celebration space. 7.1 Dolby Atmos, 150-inch 4K screen.",
    image: cineplexImg,
    capacity: "3-20 Guests",
    price: "From ₹3,000"
  },
  {
    name: "Miniplex",
    floor: "First Floor",
    desc: "Intimate and cozy. Perfect for couples and small families.",
    image: miniplexImg,
    capacity: "2-6 Guests",
    price: "From ₹2,000"
  },
  {
    name: "Rooftop",
    floor: "Second Floor",
    desc: "Open air cinema with a private garden and dining area.",
    image: rooftopImg,
    capacity: "3-20 Guests",
    price: "From ₹3,000"
  },
];

export default function VenueStrip() {
  return (
    <section className="toi-section toi-section--linen py-24 md:py-32">
      <div className="toi-section-inner max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="toi-venue-heading text-center mb-24">
          <Reveal width="100%">
            <div className="flex items-center justify-center gap-6 mb-8 opacity-60">
              <div className="h-[1px] w-16 bg-[var(--toi-gold)]"></div>
              <span className="toi-eyebrow tracking-[0.3em] text-xs">OUR SPACES</span>
              <div className="h-[1px] w-16 bg-[var(--toi-gold)]"></div>
            </div>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <h2 className="toi-venue-main text-5xl md:text-7xl font-light text-[var(--toi-espresso)] mb-6">
              Three floors. <span className="font-serif italic text-[var(--toi-gold)]">Three worlds.</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="toi-venue-sub text-lg md:text-xl text-[var(--toi-subheading)] max-w-2xl mx-auto font-light leading-relaxed">
              "From intimate celebrations for two to grand gatherings of twenty, find the perfect backdrop for your story."
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {venueCards.map((venue, index) => (
            <Reveal key={venue.name} delay={0.2 * index} direction="up">
              <Link to={`/venues/${venue.name.toLowerCase()}`} className="group block relative">
                {/* Card container with hover lift */}
                <div className="toi-venue-card transition-all duration-500 group-hover:-translate-y-2">

                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#e0dcd5]">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-6 right-6 z-20">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] tracking-widest uppercase border border-[var(--toi-gold)]/20 text-[var(--toi-espresso)]">
                        {venue.floor}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center px-4">
                    <h3 className="font-display text-4xl mb-3 text-[var(--toi-espresso)]">{venue.name}</h3>
                    <p className="font-body text-sm text-[var(--toi-muted)] mb-6 leading-relaxed line-clamp-2">{venue.desc}</p>

                    <div className="w-8 h-[1px] bg-[var(--toi-gold)] mx-auto opacity-40 mb-6"></div>

                    <div className="flex justify-center gap-6 text-xs tracking-widest text-[var(--toi-subheading)] mb-8">
                      <span>{venue.capacity.toUpperCase()}</span>
                      <span className="text-[var(--toi-gold)]">•</span>
                      <span className="font-semibold">{venue.price}</span>
                    </div>

                    <span className="inline-flex items-center gap-3 text-xs tracking-[0.25em] text-[var(--toi-espresso)] border-b border-transparent group-hover:border-[var(--toi-gold)] transition-all pb-1">
                      EXPLORE <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
