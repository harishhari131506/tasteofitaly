import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { menuData } from "@/data/venueData";

type TabKey = "pizzas" | "pastas" | "appetizers" | "beverages";

const tabs: { key: TabKey; label: string }[] = [
  { key: "appetizers", label: "APPETIZERS" },
  { key: "pizzas", label: "PIZZAS" },
  { key: "pastas", label: "PASTA" },
  { key: "beverages", label: "BEVERAGES" },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("pizzas");

  const getItems = () => {
    if (activeTab === "pizzas") {
      return [
        ...menuData.pizzas.veg.map(i => ({ ...i, veg: true })),
        ...menuData.pizzas.nonVeg.map(i => ({ ...i, veg: false }))
      ];
    }

    // For other categories which are direct arrays
    const items = menuData[activeTab];
    if (Array.isArray(items)) {
      return items.map(i => ({ ...i, veg: (i as any).veg !== undefined ? (i as any).veg : true }));
    }
    return [];
  };



  return (
    <div className="toi-shell">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="toi-section-inner text-center mb-16 px-6">
          <h1 className="toi-display-hero text-6xl md:text-8xl font-light italic mb-8">The Menu</h1>
          <div className="toi-gold-rule mx-auto" style={{ width: 120 }}></div>
        </div>

        <div className="toi-section-inner px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-[rgba(184,150,90,0.2)] pb-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`text-sm tracking-[0.2em] pb-4 transition-all relative ${activeTab === t.key
                  ? "text-[var(--toi-gold)]"
                  : "text-[var(--toi-espresso)] hover:text-[var(--toi-gold)]"
                  }`}
              >
                {t.label}
                {activeTab === t.key && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--toi-gold)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto">
            {getItems().map((item, index) => (
              <div
                key={index}
                className="group relative flex justify-between items-start border-b border-[rgba(184,150,90,0.1)] pb-4 hover:border-[var(--toi-gold)] transition-colors duration-300"
              >
                <div className="flex-1 pr-8">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-xl tracking-wide text-[var(--toi-espresso)] group-hover:text-[var(--toi-gold)] transition-colors">
                      {item.name}
                    </h3>
                    <span
                      className={`text-[0.6rem] px-1.5 py-0.5 border ${item.veg
                        ? "border-green-600 text-green-700"
                        : "border-red-600 text-red-700"
                        }`}
                    >
                      {item.veg ? "VEG" : "NON-VEG"}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[var(--toi-subheading)] opacity-80 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
