import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Film, Mic, Gamepad2, TreePine, Footprints, Dices, Pizza, Music, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { venues, timeSlots, policies } from "@/data/venueData";
import cineplexImg from "@/assets/venue-cineplex.jpg";
import miniplexImg from "@/assets/venue-miniplex.jpg";
import rooftopImg from "@/assets/venue-rooftop.jpg";
import { ArrowRight } from "lucide-react";

const images: Record<string, string> = { cineplex: cineplexImg, miniplex: miniplexImg, rooftop: rooftopImg };
const iconMap: Record<string, React.ElementType> = {
  "Mini Theatre": Film, "Karaoke": Mic, "PS5": Gamepad2, "Pool Table": Dices,
  "Board Games": Dices, "Foot Massager": Footprints, "Garden Area": TreePine,
  "Private Dining": Utensils, "Dolby Atmos": Music
};

export default function VenueDetail() {
  const { venueId } = useParams();
  const venue = venues[venueId as keyof typeof venues];
  const [pricingTab, setPricingTab] = useState<"weekday" | "weekend">("weekday");

  if (!venue) return <div className="flex min-h-screen items-center justify-center">Venue not found</div>;

  const img = images[venue.id];

  return (
    <div className="toi-shell">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] flex items-end">
          <div className="absolute inset-0">
            <img src={img} alt={venue.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--toi-espresso)]/90 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 toi-section-inner w-full px-6 pb-20">
            <span className="toi-floor-badge mb-4 bg-white/10 backdrop-blur-md border-white/30 text-white">
              {venue.floor}
            </span>
            <h1 className="toi-display-hero text-[#faf6f0] leading-none mb-6">
              {venue.name}
            </h1>
            <p className="toi-subhead-serif text-2xl text-[#faf6f0] opacity-90 max-w-2xl">
              {venue.tagline}
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="toi-section toi-section--base">
          <div className="toi-section-inner">
            <div className="toi-eyebrow mb-12 text-center">WHAT'S INCLUDED</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {venue.facilities.map((f) => {
                const Icon = iconMap[f] || Film;
                return (
                  <div key={f} className="flex flex-col items-center text-center gap-4 p-6 border border-[rgba(184,150,90,0.2)] bg-[var(--toi-card-surface)]">
                    <Icon className="h-8 w-8 text-[var(--toi-gold)]" strokeWidth={1} />
                    <span className="font-serif text-lg text-[var(--toi-subheading)]">{f}</span>
                  </div>
                );
              })}
              <div className="flex flex-col items-center text-center gap-4 p-6 border border-[rgba(184,150,90,0.2)] bg-[var(--toi-card-surface)]">
                <Pizza className="h-8 w-8 text-[var(--toi-gold)]" strokeWidth={1} />
                <span className="font-serif text-lg text-[var(--toi-subheading)]">Food & Drinks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="toi-section toi-section--linen">
          <div className="toi-section-inner">
            <div className="text-center mb-12">
              <h2 className="toi-display text-5xl mb-4">Pricing</h2>
              <p className="toi-body text-[var(--toi-muted)]">Includes food coupon worth ₹300 per person</p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="toi-pricing-toggle bg-white">
                <button
                  onClick={() => setPricingTab("weekday")}
                  className={`toi-pricing-toggle-btn ${pricingTab === "weekday" ? "toi-pricing-toggle-btn--active" : ""}`}
                >
                  WEEKDAY
                </button>
                <button
                  onClick={() => setPricingTab("weekend")}
                  className={`toi-pricing-toggle-btn ${pricingTab === "weekend" ? "toi-pricing-toggle-btn--active" : ""}`}
                >
                  WEEKEND & HOLIDAYS
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {venue.pricing[pricingTab].map((tier) => (
                <div key={tier.guests} className="bg-[var(--toi-card-surface)] p-8 border border-[rgba(184,150,90,0.2)] shadow-sm text-center">
                  <div className="toi-eyebrow mb-2">GUEST COUNT</div>
                  <h3 className="font-serif text-2xl mb-6">{tier.guests}</h3>
                  <div className="w-12 h-px bg-[var(--toi-gold)] mx-auto mb-6"></div>
                  <div className="toi-oldstyle-num text-4xl text-[var(--toi-gold-text)] font-semibold mb-2">
                    ₹{tier.price.toLocaleString()}
                  </div>
                  <p className="text-xs text-[var(--toi-muted)] italic">Total for 3 hours</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slots & Policies */}
        <section className="toi-section toi-section--base">
          <div className="toi-section-inner grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="toi-eyebrow mb-6">AVAILABLE TIME SLOTS</h3>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((s) => (
                  <div key={s} className="px-4 py-2 border border-[rgba(28,20,16,0.2)] text-[var(--toi-body)] text-sm">
                    {s}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--toi-muted)] mt-4 italic">
                *Slot timings are fixed. Extension subject to availability.
              </p>
            </div>

            <div>
              <h3 className="toi-eyebrow mb-6">THINGS TO KNOW</h3>
              <ul className="space-y-3">
                {policies.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-[var(--toi-body)]">
                    <span className="text-[var(--toi-gold)]">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sticky Mobile Bar / Bottom CTA */}
        <section className="fixed bottom-0 left-0 right-0 z-40 md:static md:z-0 bg-[var(--toi-espresso)] p-4 md:py-20 text-center border-t border-[rgba(184,150,90,0.3)] md:border-none">
          <div className="flex items-center justify-between md:justify-center md:flex-col md:gap-8 max-w-7xl mx-auto">
            <div className="text-left md:text-center">
              <div className="toi-eyebrow text-[#faf6f0] opacity-70 mb-1 md:mb-4">READY TO BOOK?</div>
              <div className="toi-display text-white text-xl md:text-5xl">{venue.name}</div>
            </div>

            <div className="flex gap-4">
              <Link to="/book" className="toi-btn-primary h-12 px-6 md:h-14 md:px-10">
                <span>BOOK NOW</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Spacer for mobile fixed bar */}
        <div className="h-24 md:hidden"></div>

      </main>
      <Footer />
    </div>
  );
}
