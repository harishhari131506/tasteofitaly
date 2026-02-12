
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Venues", path: "/venues" },
  { name: "Menu", path: "/menu" },
  { name: "Decor", path: "/decorations" },
  { name: "Packages", path: "/packages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? "bg-[#faf6f0]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex flex-col select-none cursor-hover">
            <span className={`font-serif text-2xl font-bold tracking-widest transition-colors ${scrolled ? "text-[#1c1410]" : "text-[#1c1410] md:text-white"}`}>TOI</span>
            <span className={`text-[10px] tracking-[0.3em] transition-colors ${scrolled ? "text-[#5c4a38]" : "text-[#5c4a38] md:text-white/80"}`}>TASTE OF ITALY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium tracking-widest cursor-hover group ${scrolled || pathname !== '/' ? "text-[#1c1410]" : "text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] w-0 bg-[var(--toi-gold)] transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
            <Link
              to="/book"
              className={`cursor-hover border px-6 py-2 text-sm font-medium tracking-widest transition-all hover:bg-[var(--toi-gold)] hover:border-[var(--toi-gold)] hover:text-white ${scrolled || pathname !== '/'
                  ? "border-[#1c1410] text-[#1c1410]"
                  : "border-white text-white"
                }`}
            >
              BOOK NOW
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden cursor-hover ${scrolled ? "text-[#1c1410]" : "text-[#1c1410] md:text-white"}`}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--toi-espresso)] text-[#faf6f0]"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="font-serif text-4xl italic hover:text-[var(--toi-gold)] transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-block border border-[#faf6f0] px-10 py-4 font-label tracking-widest hover:bg-[#faf6f0] hover:text-[var(--toi-espresso)] transition-colors"
                >
                  BOOK NOW
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
