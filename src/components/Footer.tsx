import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--toi-espresso)] pt-16 border-t border-[rgba(184,150,90,0.3)]">
      <div className="toi-section-inner px-6 pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-serif text-2xl text-[#faf6f0]">TOI</h3>
              <p className="font-serif text-sm tracking-widest text-[#faf6f0] opacity-80">TASTE OF ITALY</p>
            </div>
            <p className="font-serif italic text-[#faf6f0] text-lg opacity-90 leading-snug">
              Chennai's first private mini-theatre celebration hall.
            </p>
            <a
              href="https://instagram.com/_tasteofitaly_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[var(--toi-gold)] hover:underline"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-medium">@_tasteofitaly_</span>
            </a>
          </div>

          {/* Col 2: Venues */}
          <div>
            <h4 className="toi-eyebrow mb-6 text-[#faf6f0] opacity-70">OUR SPACES</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Cineplex", to: "/venues/cineplex" },
                { label: "Miniplex", to: "/venues/miniplex" },
                { label: "Rooftop", to: "/venues/rooftop" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#faf6f0] hover:text-[var(--toi-gold)] transition-colors text-sm font-light tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Info */}
          <div>
            <h4 className="toi-eyebrow mb-6 text-[#faf6f0] opacity-70">INFORMATION</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Packages", to: "/packages" },
                { label: "Menu", to: "/menu" },
                { label: "Decorations", to: "/decorations" },
                { label: "Gallery", to: "/gallery" },
                { label: "Book Now", to: "/book" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#faf6f0] hover:text-[var(--toi-gold)] transition-colors text-sm font-light tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="toi-eyebrow mb-6 text-[#faf6f0] opacity-70">CONTACT</h4>
            <div className="flex flex-col gap-4 text-[#faf6f0] font-light text-sm tracking-wide opacity-90">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[var(--toi-gold)]" />
                <span>
                  753, 10th Main Rd,<br />
                  Anna Nagar, Chennai
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--toi-gold)]" />
                <div className="flex flex-col">
                  <a href="tel:+917708993061" className="hover:text-[var(--toi-gold)]">77089 93061</a>
                  <a href="tel:+919176707775" className="hover:text-[var(--toi-gold)]">91767 07775</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[rgba(184,150,90,0.2)] bg-[#150f0c] py-6">
        <div className="toi-section-inner px-6 text-center">
          <p className="text-[#9c8878] text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Taste of Italy · 5% GST applicable on all billing · Booking fee non-refundable
          </p>
        </div>
      </div>
    </footer>
  );
}
