import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { decorTiers } from "@/data/venueData";
import decorImg from "@/assets/decor-premium.jpg";
import { Check } from "lucide-react";

export default function Decorations() {
  return (
    <div className="toi-shell">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="toi-section-inner text-center mb-16 px-6">
          <span className="toi-eyebrow mb-4 block">MAKE IT UNFORGETTABLE</span>
          <h1 className="toi-display-hero text-6xl md:text-8xl font-light italic mb-8">Dress the room.</h1>
        </div>

        <div className="toi-section-inner px-6 flex flex-col gap-12">
          {decorTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col md:flex-row bg-[var(--toi-card-surface)] border ${tier.name === 'Premium'
                  ? 'border-[var(--toi-gold)] shadow-lg'
                  : 'border-[rgba(184,150,90,0.2)]'
                } ${tier.name === 'Deluxe' ? 'shadow-md md:-ml-4 md:-mr-4 relative z-10' : ''}`}
            >
              {/* Image side */}
              <div className="w-full md:w-1/2">
                <div className="h-64 md:h-full overflow-hidden relative">
                  {/* Using same image for now, ideally would vary per tier */}
                  <img src={decorImg} alt={tier.name} className="w-full h-full object-cover" />
                  {tier.popular && (
                    <div className="absolute top-4 left-4 bg-[var(--toi-gold)] text-[#faf6f0] px-3 py-1 text-xs tracking-widest font-bold">
                      RECOMMENDED
                    </div>
                  )}
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-4">
                  <h2 className="toi-subhead-serif text-3xl text-[var(--toi-headline)]">
                    {tier.name} Decor
                  </h2>
                  <span className="toi-display text-4xl text-[var(--toi-gold-text)] font-bold">
                    ₹{tier.price.toLocaleString()}
                  </span>
                </div>

                <p className="toi-body text-sm text-[var(--toi-subheading)] mb-6 italic">
                  {tier.theme}
                </p>

                <div className="space-y-3 mb-8">
                  {tier.features.map(f => (
                    <div key={f} className="flex gap-3 text-[var(--toi-body)]">
                      <Check className="h-5 w-5 text-[var(--toi-gold)] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {tier.colors && tier.colors.length > 0 && (
                  <div className="mb-8 p-4 bg-[var(--toi-section-alt)] border border-[rgba(184,150,90,0.1)]">
                    <span className="text-xs uppercase tracking-wider text-[var(--toi-muted)] mb-3 block">Available Colors (Choose 2)</span>
                    <div className="flex gap-3 flex-wrap">
                      {tier.colors.map(c => (
                        <div key={c} className="flex flex-col items-center gap-1">
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: c.toLowerCase() === 'gold' ? '#b8965a' : c.toLowerCase() }}
                          ></div>
                          <span className="text-[10px] text-[var(--toi-muted)]">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link to="/book" className="toi-btn-secondary border border-[var(--toi-espresso)] justify-center py-3 hover:bg-[var(--toi-espresso)] hover:text-white transition-colors">
                  ADD TO BOOKING
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
