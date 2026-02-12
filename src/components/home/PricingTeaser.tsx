import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pricingData = {
  weekday: [
    { venue: "Cineplex", floor: "GROUND FLOOR", guests: "2 guests", price: "₹3,000" },
    { venue: "Miniplex", floor: "FIRST FLOOR", guests: "2 guests", price: "₹2,000" },
    { venue: "Rooftop", floor: "SECOND FLOOR", guests: "2 guests", price: "₹4,500" },
  ],
  weekend: [
    { venue: "Cineplex", floor: "GROUND FLOOR", guests: "2 guests", price: "₹4,000" },
    { venue: "Miniplex", floor: "FIRST FLOOR", guests: "2 guests", price: "₹3,000" },
    { venue: "Rooftop", floor: "SECOND FLOOR", guests: "2 guests", price: "₹5,500" },
  ]
};

export default function PricingTeaser() {
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');

  return (
    <section className="toi-section toi-section--linen">
      <div className="toi-section-inner text-center">
        <div className="toi-eyebrow mb-4">PACKAGES & PRICING</div>
        <h2 className="toi-display text-[var(--toi-espresso)] text-5xl md:text-6xl font-semibold leading-none">
          Transparent pricing.<br />
          <span className="font-light italic text-[var(--toi-muted)]">No surprises.</span>
        </h2>

        <p className="toi-body mt-6 max-w-2xl mx-auto text-[var(--toi-subheading)]">
          Every package includes food coupons, access to all venue facilities,
          and a ₹1,000 reservation fee adjustable against your bill.
        </p>

        {/* Toggle */}
        <div className="toi-pricing-toggle">
          <button
            onClick={() => setActiveTab('weekday')}
            className={`toi-pricing-toggle-btn ${activeTab === 'weekday' ? 'toi-pricing-toggle-btn--active' : ''}`}
          >
            WEEKDAY
          </button>
          <button
            onClick={() => setActiveTab('weekend')}
            className={`toi-pricing-toggle-btn ${activeTab === 'weekend' ? 'toi-pricing-toggle-btn--active' : ''}`}
          >
            WEEKEND & HOLIDAYS
          </button>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingData[activeTab].map((item) => (
            <div key={item.venue} className="bg-[var(--toi-card-surface)] p-8 border border-[rgba(184,150,90,0.2)] shadow-sm">
              <h3 className="font-serif text-2xl text-[var(--toi-headline)]">{item.venue}</h3>
              <div className="toi-eyebrow mt-1 mb-4">{item.floor}</div>
              <div className="h-px w-full bg-[var(--toi-gold)] opacity-30 my-4"></div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-[var(--toi-muted)]">{item.guests}</span>
                <span className="toi-oldstyle-num text-3xl text-[var(--toi-gold-text)] font-semibold">{item.price}</span>
              </div>
              <div className="h-px w-full bg-[var(--toi-gold)] opacity-30 my-4"></div>
              <p className="text-xs italic text-[var(--toi-muted)] font-light">
                Includes food coupon
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/packages" className="toi-btn-secondary group border border-[var(--toi-espresso)] px-8 py-3 hover:bg-[var(--toi-espresso)] hover:text-white transition-colors">
            <span>VIEW ALL PACKAGES</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
