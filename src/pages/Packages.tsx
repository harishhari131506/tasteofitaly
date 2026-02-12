import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { venues } from "@/data/venueData";
import { Check } from "lucide-react";

export default function Packages() {
  return (
    <div className="toi-shell">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="toi-section-inner text-center mb-16 px-6">
          <span className="toi-eyebrow mb-4 block">SIMPLE & TRANSPARENT</span>
          <h1 className="toi-display-hero text-6xl md:text-8xl font-light italic mb-8">Packages</h1>
          <p className="toi-body max-w-2xl mx-auto text-[var(--toi-muted)]">
            Choose your venue and guest count. All packages include food coupons, access to all amenities, and a private celebration space.
          </p>
        </div>

        <div className="toi-section-inner px-6 grid gap-20">
          {Object.values(venues).map((venue) => (
            <div key={venue.id} className="border border-[rgba(184,150,90,0.2)] bg-[var(--toi-card-surface)] p-8 md:p-12 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${venue.colorClass.replace('venue-card-', 'bg-')}`}></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                  <span className="toi-floor-badge mb-2">{venue.floor}</span>
                  <h2 className="toi-display text-4xl mb-2">{venue.name}</h2>
                  <p className="toi-body text-sm text-[var(--toi-muted)]">{venue.tagline}</p>
                </div>
                <Link to={`/venues/${venue.id}`} className="toi-btn-secondary mt-6 md:mt-0">
                  VIEW VENUE DETAILS
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Weekday */}
                <div>
                  <h3 className="toi-eyebrow mb-6 text-[var(--toi-headline)]">WEEKDAY PRICING</h3>
                  <div className="space-y-4">
                    {venue.pricing.weekday.map((tier) => (
                      <div key={tier.guests} className="flex justify-between items-center border-b border-[rgba(184,150,90,0.1)] pb-2">
                        <span className="toi-body text-sm">{tier.guests} Guests</span>
                        <span className="font-serif font-bold text-[var(--toi-gold-text)]">₹{tier.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekend */}
                <div>
                  <h3 className="toi-eyebrow mb-6 text-[var(--toi-headline)]">WEEKEND & HOLIDAYS</h3>
                  <div className="space-y-4">
                    {venue.pricing.weekend.map((tier) => (
                      <div key={tier.guests} className="flex justify-between items-center border-b border-[rgba(184,150,90,0.1)] pb-2">
                        <span className="toi-body text-sm">{tier.guests} Guests</span>
                        <span className="font-serif font-bold text-[var(--toi-gold-text)]">₹{tier.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="toi-section-inner text-center mt-20 px-6">
          <h3 className="toi-display text-3xl mb-8">All packages include</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Private Theatre", "Food Coupons", "Decor Options", "Clean Up", "Service Staff"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-[var(--toi-section-alt)] px-6 py-3 rounded-full border border-[rgba(184,150,90,0.2)]">
                <Check className="h-4 w-4 text-[var(--toi-gold)]" />
                <span className="toi-body text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/book" className="toi-btn-primary">
              <span>BOOK YOUR SLOT</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
