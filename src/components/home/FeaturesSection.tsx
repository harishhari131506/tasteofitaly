
import { Film, Mic, Gamepad2, Pizza } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function FeaturesSection() {
  const features = [
    {
      icon: Film,
      title: "Private Screen",
      desc: "Watch anything, completely private, on a cinema screen."
    },
    {
      icon: Mic,
      title: "Karaoke Stage",
      desc: "Sing your heart out with premium audio and mics."
    },
    {
      icon: Gamepad2,
      title: "PS5 & Pool Table",
      desc: "Gaming console and pool table included in your package."
    },
    {
      icon: Pizza,
      title: "Italian Food Included",
      desc: "Fresh pizzas, pastas, and beverages served hot."
    },
  ];

  return (
    <section className="toi-section toi-section--base">
      <div className="toi-section-inner toi-why-grid">
        {/* Left Col */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="toi-why-quote">
              <div className="toi-gold-rule" style={{ width: 40, marginBottom: 24 }}></div>
              <p className="leading-tight">
                "More than a venue —<br />
                a memory you'll<br />
                revisit forever."
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Col */}
        <div className="toi-why-features">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="toi-feature group">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--toi-gold)]/20 bg-[var(--toi-gold)]/5 transition-colors group-hover:bg-[var(--toi-gold)]/10">
                  <f.icon className="h-8 w-8 text-[var(--toi-gold)]" strokeWidth={1} />
                </div>
                <h3 className="toi-feature-title mt-2">{f.title}</h3>
                <p className="toi-feature-body">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
