import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Brain, Heart, Layers } from 'lucide-react';
import { PageLayout, GlassCard, Glitter, ShinyButton } from '../components/shared';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <PageLayout>
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
            Tools for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-teal-300 drop-shadow-[0_0_30px_rgba(236,72,153,0.3)] italic">
              Courageous Movement.
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
            <ShinyButton text="I'm an Individual" primary to="/for-individuals" />
            <ShinyButton text="I'm a Therapist" to="/for-therapists" />
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
    </PageLayout>
  );
};

export default HomePage;
