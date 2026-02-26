import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../assets/SQ_Square-EI-Assets-300SQ_Secondary-Logo-grain_Final.png';

// 0. Coming Soon Banner
export const ComingSoonBanner = () => (
  <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 py-2 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 text-white text-sm font-bold tracking-widest uppercase">
          ✦ Coming Soon ✦ Under Construction ✦ Sneak Peek
        </span>
      ))}
    </div>
  </div>
);

// 1. The "Noise" Overlay for that textured, retro-print feel (matches logo grain)
export const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.07] mix-blend-overlay"
       style={{
         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
       }} 
  />
);

// 2. Glitter Particle Effect
export const Glitter = () => {
  const [particles] = useState(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// 3. Glass Card Component
export const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-xl overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    {children}
  </div>
);

// 4. Shiny Button
export const ShinyButton = ({ text, onClick, primary = false, to }: { text: string; onClick?: () => void; primary?: boolean; to?: string }) => {
  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {text} {primary && <ArrowRight size={16} />}
      </span>
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
    </>
  );

  const className = `relative px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all overflow-hidden group ${
    primary 
      ? "bg-gradient-to-r from-orange-300 via-pink-300 to-teal-300 text-slate-900 shadow-[0_0_20px_rgba(255,192,203,0.5)]" 
      : "bg-transparent border border-white/30 text-white hover:bg-white/10"
  }`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {buttonContent}
    </motion.button>
  );
};

// 5. Background Gradients
export const BackgroundGradients = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-900/20 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-pink-900/20 rounded-full blur-[100px] mix-blend-screen" />
  </div>
);

// 6. Navigation
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Tools', path: '/tools' },
    { label: 'For Individuals', path: '/for-individuals' },
    { label: 'For Therapists', path: '/for-therapists' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="px-6 py-3 flex justify-between items-center !rounded-full !bg-slate-900/60 !border-white/5">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                 <img src={logo} alt="Encouragement Ink Logo" className="w-full h-full object-contain" /> 
              </div>
              <span className="font-serif text-xl tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-white">
                Encouragement Ink
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              {navItems.map((item) => (
                <Link key={item.label} to={item.path} className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </GlassCard>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-slate-900/95 backdrop-blur-xl pt-32 px-6 flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <Link key={item.label} to={item.path} className="text-3xl font-serif text-white/80" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// 7. Footer
export const Footer = () => (
  <footer className="relative z-10 py-20 px-6 border-t border-white/10 bg-slate-900/50">
    <div className="max-w-4xl mx-auto text-center">
      {/* Footer Logo */}
      <div className="w-24 h-24 mx-auto mb-8">
        <img src={logo} alt="Encouragement Ink Logo" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to turn insight into action?</h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <ShinyButton text="Visit The Shop" primary />
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; 2026 Encouragement Ink. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
           <a href="https://reagleeagle.com/privacy" target="_blank" rel="noreferrer" className="hover:text-slate-300">Privacy Policy</a>
           <a href="https://reagleeagle.com/terms" target="_blank" rel="noreferrer" className="hover:text-slate-300">Terms and Conditions</a>
           <a href="https://reagleeagle.com/cookies" target="_blank" rel="noreferrer" className="hover:text-slate-300">Cookie Policy</a>
           <a href="https://rindieme.formaloo.me/contact" target="_blank" rel="noreferrer" className="hover:text-slate-300">Contact</a>
           <a href="https://reagleeagle.com" target="_blank" rel="noreferrer" className="hover:text-slate-300">Happy Brain Universe</a>
        </div>
      </div>
    </div>
  </footer>
);

// 8. Page Layout wrapper
export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#0f1115] text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
    <ComingSoonBanner />
    <NoiseOverlay />
    <BackgroundGradients />
    <Navigation />
    {children}
    <Footer />
  </div>
);

// 9. Page Header for inner pages
export const PageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <section className="relative z-10 pt-48 pb-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);
