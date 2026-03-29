import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { PageLayout, GlassCard, Glitter, ShinyButton } from '../components/shared';

const ForTherapistsPage = () => {
  return (
    <PageLayout>
      <section className="relative z-10 pt-48 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-12 md:p-16">
              <Glitter />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-8 border border-teal-500/30">
                  <BookOpen className="w-8 h-8 text-teal-300" />
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                  We built an entire planet for you.
                </h1>

                <p className="text-lg text-slate-300 mb-4 leading-relaxed max-w-xl mx-auto">
                  Therapist Resources is our dedicated space for clinicians. Practical tools, SOAP notes training, session-ready templates, and strategies for using AI and tech in your practice.
                </p>

                <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                  Same encouragement philosophy. Built specifically for how you work.
                </p>

                <a href="https://therapistresources.com" target="_blank" rel="noopener noreferrer">
                  <ShinyButton text="Visit Therapist Resources" primary />
                </a>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-slate-500 mb-4">What you'll find there:</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">SOAP Notes Course</span>
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">AI for Therapists</span>
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Documentation Templates</span>
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">The Modern Therapist Newsletter</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <a href="/" className="inline-flex items-center text-slate-500 hover:text-slate-300 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Encouragement Ink
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForTherapistsPage;
