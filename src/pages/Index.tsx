
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import VenueStrip from "@/components/home/VenueStrip";
import FeaturesSection from "@/components/home/FeaturesSection";
import OccasionsCarousel from "@/components/home/OccasionsCarousel";
import PricingTeaser from "@/components/home/PricingTeaser";
import GalleryMosaic from "@/components/home/GalleryMosaic";
import BookingCTA from "@/components/home/BookingCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <PageTransition>
      <div className="toi-shell bg-[var(--toi-page-base)] text-[var(--toi-body)] selection:bg-[var(--toi-gold)] selection:text-white">
        <Navbar />
        <main>
          <HeroSection />
          <Marquee />
          <VenueStrip />
          <FeaturesSection />
          <OccasionsCarousel />
          <PricingTeaser />
          <GalleryMosaic />
          <BookingCTA />
        </main>
        <Footer />

        {/* Intro Curtain */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] origin-top bg-[var(--toi-espresso)]"
        />
      </div>
    </PageTransition>
  );
};

export default Index;
