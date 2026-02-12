
const occasions = [
  "🎂 Birthday",
  "💑 Anniversary",
  "👯 Friends Night",
  "🌟 Just Because",
  "💍 Proposal",
  "👰 Bachelorette",
  "🎓 Farewell",
  "💼 Team Outing"
];

export default function OccasionsCarousel() {
  return (
    <section className="toi-section toi-section--espresso">
      <div className="toi-section-narrow text-center">
        <div className="toi-occasion-header">
          <span className="toi-eyebrow mb-4 block">EVERY REASON TO CELEBRATE</span>
          <h2 className="toi-occasion-heading text-[var(--toi-page-base)]">
            What's the occasion?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="toi-occasion-tags justify-center">
            {occasions.slice(0, 4).map((tag) => (
              <div key={tag} className="toi-occasion-tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="toi-occasion-tags justify-center">
            {occasions.slice(4).map((tag) => (
              <div key={tag} className="toi-occasion-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
