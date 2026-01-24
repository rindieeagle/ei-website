import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Brain, Heart, Layers, Menu, X, ExternalLink } from 'lucide-react';

// --- Custom Components ---

// 1. The "Noise" Overlay for that textured, retro-print feel (matches logo grain)
const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.07] mix-blend-overlay"
       style={{
         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
       }} 
  />
);

// 2. Glitter Particle Effect
const Glitter = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate static random particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

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
const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-xl overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    {children}
  </div>
);

// 4. Shiny Button
const ShinyButton = ({ text, onClick, primary = false }: { text: string; onClick?: () => void; primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all overflow-hidden group ${
      primary 
        ? "bg-gradient-to-r from-orange-300 via-pink-300 to-teal-300 text-slate-900 shadow-[0_0_20px_rgba(255,192,203,0.5)]" 
        : "bg-transparent border border-white/30 text-white hover:bg-white/10"
    }`}
  >
    <span className="relative z-10 flex items-center gap-2">
      {text} {primary && <ArrowRight size={16} />}
    </span>
    {/* Shine effect */}
    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
  </motion.button>
);

// --- Main App ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <NoiseOverlay />
      
      {/* Background Gradients (The "Ink" feel) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-pink-900/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="px-6 py-3 flex justify-between items-center !rounded-full !bg-slate-900/60 !border-white/5">
            <div className="flex items-center gap-3">
              {/* Placeholder for Logo */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-teal-400 flex items-center justify-center overflow-hidden border border-white/20">
                 {/* Replace this Img with the uploaded file */}
                 <img src="/api/placeholder/40/40" alt="Encouragement Ink Logo" className="w-full h-full object-cover opacity-90" /> 
              </div>
              <span className="font-serif text-xl tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-white">
                Encouragement Ink
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              {['Tools', 'For Individuals', 'For Therapists', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <ShinyButton text="Get Started" primary />
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
            {['Tools', 'For Individuals', 'For Therapists', 'About'].map((item) => (
              <a key={item} href="#" className="text-3xl font-serif text-white/80" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-200 text-xs font-bold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="inline w-3 h-3 mr-2 text-pink-400" />
            Psychology-Based Tools
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8"
          >
            Act Before You <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-teal-300 drop-shadow-[0_0_30px_rgba(236,72,153,0.3)] italic">
              Feel Ready.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Rooted in Adlerian principles, we help you close the gap between knowing and doing. 
            Courage-based movement over waiting for confidence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <ShinyButton text="I'm an Individual" primary />
            <ShinyButton text="I'm a Therapist" />
          </motion.div>
        </div>

        {/* Floating Abstract Elements */}
        <motion.div style={{ y }} className="absolute top-1/3 left-10 md:left-20 hidden md:block opacity-60">
           <GlassCard className="p-4 !rounded-2xl rotate-[-6deg]">
              <Brain className="w-8 h-8 text-teal-300" />
           </GlassCard>
        </motion.div>
        <motion.div style={{ y }} className="absolute bottom-20 right-10 md:right-20 hidden md:block opacity-60">
           <GlassCard className="p-4 !rounded-2xl rotate-[6deg]">
              <Heart className="w-8 h-8 text-pink-300" />
           </GlassCard>
        </motion.div>
      </section>

      {/* Split Audience Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Individuals Card */}
          <GlassCard className="group p-10 hover:bg-white/10 transition-colors duration-500">
            <Glitter />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
                <Heart className="text-orange-300" />
              </div>
              <h3 className="text-3xl font-serif mb-4">For Individuals</h3>
              <p className="text-slate-400 mb-6 h-24">
                Struggling with overthinking, people-pleasing, or anxiety? Stop waiting to feel "ready." Get practical workbooks and interactive tools designed to turn insight into action.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"/> Interactive Courses</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"/> Visual Action Tools</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"/> Anxiety & Overthinking Resources</li>
              </ul>
              <div className="flex items-center text-orange-300 font-bold tracking-widest text-xs uppercase group-hover:translate-x-2 transition-transform">
                Start Moving <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </GlassCard>

          {/* Therapists Card */}
          <GlassCard className="group p-10 hover:bg-white/10 transition-colors duration-500">
            <Glitter />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-6 border border-teal-500/30">
                <Brain className="text-teal-300" />
              </div>
              <h3 className="text-3xl font-serif mb-4">For Clinicians</h3>
              <p className="text-slate-400 mb-6 h-24">
                Enhance your practice with session-ready clinical tools. Specialized resources for Adlerian therapy, Neurofeedback, and QEEG training to help your clients progress.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2"/> Session-Ready Clinical Tools</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2"/> QEEG / Neurofeedback Training</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2"/> Professional Workbooks</li>
              </ul>
              <div className="flex items-center text-teal-300 font-bold tracking-widest text-xs uppercase group-hover:translate-x-2 transition-transform">
                View Resources <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </GlassCard>

        </div>
      </section>

      {/* Feature Section: The Methodology */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <div className="relative">
               {/* Stacked Glass Cards Effect */}
               <GlassCard className="aspect-square flex items-center justify-center relative z-20">
                 <div className="text-center p-8">
                   <Layers className="w-12 h-12 mx-auto text-pink-300 mb-4 opacity-80" />
                   <h4 className="text-2xl font-serif mb-2">The Gap</h4>
                   <p className="text-slate-400 text-sm">We bridge the divide between cognitive understanding and behavioral change.</p>
                 </div>
               </GlassCard>
               <div className="absolute top-6 left-6 w-full h-full border border-white/10 rounded-3xl z-10 bg-white/5 backdrop-blur-sm transform rotate-3" />
               <div className="absolute top-12 left-12 w-full h-full border border-white/5 rounded-3xl z-0 bg-white/5 backdrop-blur-sm transform rotate-6" />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif mb-6">Not just generic advice. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300">Psychology in action.</span></h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Most self-help tells you to "be confident." We tell you to have courage. Encouragement Ink utilizes Adlerian psychology to help you understand your movement through life. Whether you are a clinician needing tools to explain complex brain maps, or a human trying to stop people-pleasing, we provide the visual, tangible resources to make it stick.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Adlerian Roots", desc: "Purpose-driven behavior" },
                { label: "Neurofeedback", desc: "Brain-based approach" },
                { label: "Visual Tools", desc: "See it to believe it" },
                { label: "Action First", desc: "Confidence follows" }
              ].map((item, i) => (
                <div key={i} className="p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <h5 className="font-bold text-slate-200">{item.label}</h5>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/10 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to turn insight into action?</h2>
          <div className="flex flex-col items-center justify-center gap-6">
            <ShinyButton text="Visit The Shop" primary />
            <a href="https://skill.encouragementink.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm border-b border-transparent hover:border-slate-400 pb-1">
              Visit Skill Academy <ExternalLink size={14} />
            </a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2026 Encouragement Ink. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-slate-300">Privacy Policy</a>
               <a href="#" className="hover:text-slate-300">Terms of Service</a>
               <a href="#" className="hover:text-slate-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
