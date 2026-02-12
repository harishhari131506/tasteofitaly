import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { timeSlots, occasions } from "@/data/venueData";
import { MessageCircle, Check } from "lucide-react";

export default function Book() {
  const [form, setForm] = useState({
    venue: "",
    date: "",
    slot: "",
    guests: 2,
    name: "",
    phone: "",
    whatsapp: "",
    occasion: "",
    decor: false,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string | number | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const venueOptions = [
    { id: "cineplex", label: "Cineplex", sub: "Ground Floor · 3–20 guests" },
    { id: "miniplex", label: "Miniplex", sub: "First Floor · 2–6 guests" },
    { id: "rooftop", label: "Rooftop", sub: "Second Floor · 3–20 guests" },
  ];

  if (submitted) {
    return (
      <div className="toi-shell">
        <Navbar />
        <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
          <div className="toi-section-inner text-center max-w-2xl px-6">
            <div className="w-20 h-20 bg-[var(--toi-gold)] rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h1 className="toi-display text-5xl mb-6">Request Received</h1>
            <p className="toi-body text-[var(--toi-subheading)] text-lg mb-8">
              Thank you, {form.name}. Our team will check availability for <span className="font-semibold">{form.venue}</span> on <span className="font-semibold">{form.date}</span> and confirm via WhatsApp shortly.
            </p>
            <a
              href={`https://wa.me/917708993061?text=${encodeURIComponent(`Hi! I'd like to follow up on my booking request for ${form.venue}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="toi-btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>CHAT WITH US</span>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="toi-shell">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="toi-section-inner text-center mb-12 px-6">
          <h1 className="toi-display-hero text-5xl md:text-7xl font-light italic mb-4">
            Start your celebration
          </h1>
          <p className="toi-body text-[var(--toi-muted)]">
            Fill availability request form below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Venue Selection */}
            <div className="space-y-4">
              <label className="toi-eyebrow block">SELECT VENUE</label>
              <div className="grid md:grid-cols-3 gap-4">
                {venueOptions.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => update("venue", v.label)}
                    className={`p-6 border text-left transition-all ${form.venue === v.label
                        ? "border-[var(--toi-gold)] bg-[var(--toi-section-alt)]"
                        : "border-[rgba(184,150,90,0.2)] hover:border-[var(--toi-gold)]"
                      }`}
                  >
                    <div className="font-serif text-xl mb-1">{v.label}</div>
                    <div className="text-xs text-[var(--toi-muted)]">{v.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="toi-eyebrow block">DATE</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full bg-transparent border-b border-[rgba(184,150,90,0.3)] py-3 font-serif text-xl focus:outline-none focus:border-[var(--toi-gold)]"
                />
              </div>
              <div className="space-y-4">
                <label className="toi-eyebrow block">TIME SLOT</label>
                <select
                  required
                  value={form.slot}
                  onChange={(e) => update("slot", e.target.value)}
                  className="w-full bg-transparent border-b border-[rgba(184,150,90,0.3)] py-3 font-serif text-xl focus:outline-none focus:border-[var(--toi-gold)]"
                >
                  <option value="">Select a slot</option>
                  {timeSlots.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="toi-eyebrow block">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full bg-transparent border-b border-[rgba(184,150,90,0.3)] py-3 font-serif text-xl focus:outline-none focus:border-[var(--toi-gold)]"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-4">
                <label className="toi-eyebrow block">Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full bg-transparent border-b border-[rgba(184,150,90,0.3)] py-3 font-serif text-xl focus:outline-none focus:border-[var(--toi-gold)]"
                  placeholder="+91"
                />
              </div>
            </div>

            {/* Guest Count & Occasion */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="toi-eyebrow block">GUEST COUNT</label>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => update("guests", Math.max(1, form.guests - 1))}
                    className="w-10 h-10 border border-[rgba(184,150,90,0.3)] flex items-center justify-center hover:bg-[var(--toi-gold)] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="font-serif text-2xl w-8 text-center">{form.guests}</span>
                  <button
                    type="button"
                    onClick={() => update("guests", Math.min(20, form.guests + 1))}
                    className="w-10 h-10 border border-[rgba(184,150,90,0.3)] flex items-center justify-center hover:bg-[var(--toi-gold)] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <label className="toi-eyebrow block">OCCASION</label>
                <select
                  value={form.occasion}
                  onChange={(e) => update("occasion", e.target.value)}
                  className="w-full bg-transparent border-b border-[rgba(184,150,90,0.3)] py-3 font-serif text-xl focus:outline-none focus:border-[var(--toi-gold)]"
                >
                  <option value="">Select occasion</option>
                  {occasions.map((o) => (
                    <option key={o.label} value={o.label}>{o.emoji} {o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Extras */}
            <div className="space-y-4">
              <label className="toi-eyebrow block">ADDITIONAL REQUESTS</label>
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                rows={3}
                className="w-full bg-transparent border border-[rgba(184,150,90,0.3)] p-4 font-body focus:outline-none focus:border-[var(--toi-gold)]"
                placeholder="Decor preferences, food allergies, etc."
              />
            </div>

            <div className="pt-8">
              <button type="submit" className="toi-btn-primary w-full md:w-auto md:px-16 mx-auto block">
                <span>SEND REQUEST</span>
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
