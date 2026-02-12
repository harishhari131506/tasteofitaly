
import { Instagram } from "lucide-react";
import cineplexImg from "@/assets/venue-cineplex.jpg";
import miniplexImg from "@/assets/venue-miniplex.jpg";
import rooftopImg from "@/assets/venue-rooftop.jpg";

export default function GalleryMosaic() {
    return (
        <section className="toi-section toi-section--base">
            <div className="toi-section-inner">
                <div className="mb-12">
                    <h2 className="font-serif text-5xl md:text-6xl text-[var(--toi-espresso)] leading-tight">
                        <span className="font-light italic text-[var(--toi-gold-text)]">A glimpse inside</span><br />
                        your celebration.
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 md:grid-rows-[300px_300px]">
                    {/* Big Left */}
                    <div className="md:row-span-2 overflow-hidden relative group">
                        <img src={cineplexImg} alt="Gallery 1" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[.2] group-hover:sepia-0" />
                    </div>

                    {/* Right Top */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="overflow-hidden relative group h-full">
                            <img src={miniplexImg} alt="Gallery 2" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[.2] group-hover:sepia-0" />
                        </div>
                        <div className="overflow-hidden relative group h-full">
                            <img src={rooftopImg} alt="Gallery 3" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[.2] group-hover:sepia-0" />
                        </div>
                    </div>

                    {/* Right Bottom (Wide) */}
                    <div className="overflow-hidden relative group">
                        <img src={cineplexImg} alt="Gallery 4" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[.2] group-hover:sepia-0" />
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://instagram.com/_tasteofitaly_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-serif italic text-xl text-[var(--toi-espresso)] hover:underline"
                    >
                        <Instagram className="h-5 w-5 text-[var(--toi-gold)]" />
                        @_tasteofitaly_
                    </a>
                </div>
            </div>
        </section>
    );
}
