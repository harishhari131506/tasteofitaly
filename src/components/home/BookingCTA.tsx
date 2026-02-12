
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[var(--toi-espresso)] overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none">
        <span className="font-serif font-extrabold text-[40vw] text-[#faf6f0] leading-none">TOI</span>
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="toi-eyebrow block mb-8">READY WHEN YOU ARE</span>

        <h2 className="flex flex-col gap-2">
          <span className="toi-display-hero text-[#faf6f0] font-light italic text-[clamp(2.5rem,6vw,5.5rem)]">Your celebration</span>
          <span className="toi-display-hero text-[#faf6f0] font-light italic text-[clamp(2.5rem,6vw,5.5rem)]">starts with a</span>
          <span className="toi-display-hero text-[var(--toi-gold)] font-bold text-[clamp(2.5rem,6vw,5.5rem)]">single call.</span>
        </h2>

        <div className="mt-12 mb-12">
          <div className="font-serif text-3xl md:text-4xl text-[#faf6f0] font-semibold tracking-wide">
            <a href="tel:+917708993061" className="hover:text-[var(--toi-gold)] transition-colors">77089 93061</a>
            <span className="mx-4 text-[var(--toi-gold)]">|</span>
            <a href="tel:+919176707775" className="hover:text-[var(--toi-gold)] transition-colors">91767 07775</a>
          </div>
          <p className="mt-4 text-[var(--toi-muted)] text-sm font-[Jost]">
            Calls & WhatsApp · 9 AM – 11 PM
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/book" className="toi-btn-primary min-w-[240px]">
            <span>BOOK YOUR CELEBRATION</span>
          </Link>

          <a
            href={`https://wa.me/917708993061?text=${encodeURIComponent("Hi! I'd like to book a celebration at Taste of Italy.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="toi-btn-secondary border border-[#faf6f0] text-[#faf6f0] px-8 py-4 hover:bg-[#faf6f0] hover:text-[var(--toi-espresso)] min-w-[240px] justify-center transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WHATSAPP US
          </a>
        </div>

        <div className="mt-12 h-px w-32 bg-[var(--toi-gold)] mx-auto opacity-50"></div>
      </div>
    </section>
  );
}
