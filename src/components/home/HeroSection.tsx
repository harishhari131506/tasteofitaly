import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import heroBg from "@/assets/hero-cineplex.jpg";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  // Intensified parallax: Background moves fast to create depth
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  // Text moves slower or counter-moves
  const yText = useTransform(scrollY, [0, 500], [0, 100]);

  const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterItem: Variants = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[var(--toi-page-base)] flex flex-col md:flex-row">
      {/* Background Text Watermark - Fixed position for depth */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03] pointer-events-none select-none"
      >
        <h1 className="text-[40vw] font-serif leading-none text-[var(--toi-espresso)]">TOI</h1>
      </motion.div>

      {/* Left Content */}
      <motion.div
        style={{ y: yText, marginLeft: "-5%" }}
        className="relative z-10 flex h-full w-full flex-col justify-center px-6 md:w-1/2 md:pl-20 lg:pl-32"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-[var(--toi-gold)]"></div>
          <span className="font-label text-xs tracking-[0.4em] text-[var(--toi-espresso)]">
            ANNA NAGAR · CHENNAI
          </span>
        </motion.div>

        <motion.div
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <div className="overflow-hidden">
            <motion.h1 className="font-serif-display text-[15vw] md:text-[8vw] leading-[0.85] text-[var(--toi-espresso)] italic tracking-tight">
              <motion.span variants={letterItem} className="inline-block">Celebrate</motion.span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 className="font-display text-[12vw] md:text-[6vw] leading-[0.85] font-bold text-[var(--toi-espresso)] tracking-tight">
              <motion.span variants={letterItem} className="inline-block">in your own</motion.span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 className="font-serif-display text-[15vw] md:text-[8vw] leading-[0.85] text-[var(--toi-gold)] italic tracking-tight">
              <motion.span variants={letterItem} className="inline-block">private world.</motion.span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-md font-body text-lg text-[var(--toi-subheading)]"
        >
          Chennai's first private mini-theatre celebration space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          <Link
            to="/book"
            className="cursor-hover group relative overflow-hidden bg-[var(--toi-espresso)] px-8 py-4 text-white transition-all hover:px-10"
          >
            <span className="relative z-10 font-label tracking-widest">BOOK CELEBRATION</span>
            <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-[var(--toi-gold)] transition-transform duration-500 group-hover:translate-x-0"></div>
          </Link>
          <Link to="/venues" className="cursor-hover group flex items-center gap-2 border border-[var(--toi-espresso)] px-8 py-4 font-label tracking-widest text-[var(--toi-espresso)] transition-colors hover:bg-[var(--toi-espresso)] hover:text-white">
            <span>EXPLORE VENUES</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Image Parallax */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[60%] -z-10 md:z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--toi-espresso)]/5 z-10 mix-blend-multiply pointer-events-none"></div>
        <motion.img
          src={heroBg}
          alt="Cinema ambiance"
          style={{ y: y1 }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Price Card Float - Moves faster for depth */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-60 left-10 z-20 hidden md:block backdrop-blur-xl bg-white/10 border border-white/20 p-8 text-white max-w-xs shadow-2xl"
        >
          <div className="font-display text-5xl mb-2 tracking-tight">From ₹2k</div>
          <div className="font-body text-xs opacity-80 uppercase tracking-widest">Starting Price / Couple</div>
        </motion.div>
      </div>
    </section>
  );
}