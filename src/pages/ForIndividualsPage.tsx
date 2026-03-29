import { motion } from 'framer-motion';
import { Heart, ArrowRight, Target, Zap, Move } from 'lucide-react';
import { PageLayout, PageHeader, GlassCard, Glitter, ShinyButton } from '../components/shared';

const ForIndividualsPage = () => {
  const resources = [
    {
      icon: <Heart className="text-orange-300" />,
      title: "Overthinking & Anxiety",
      description: "Break free from the cycle of anxious thoughts with The Overthinking Interrupt and the Over-functioning Bundle.",
    },
    {
      icon: <Target className="text-pink-300" />,
      title: "People-Pleasing Recovery",
      description: "Set boundaries and prioritize your own needs without guilt. Start with The Approval Detox.",
    },
    {
      icon: <Zap className="text-teal-300" />,
      title: "Over-Functioning & Boundaries",
      description: "Stop doing everyone else's emotional labor. Tools to recognize the pattern and reclaim your energy.",
    },
    {
      icon: <Move className="text-purple-300" />,
      title: "Motivation & Movement",
      description: "Motivation is not a feeling you wait for. It is movement you generate. Explore Motivation as Movement.",
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="For Individuals" 
        subtitle="Stop waiting to feel ready. Get practical tools designed to turn insight into action."
      />

      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <GlassCard className="p-10">
              <Glitter />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif mb-6">
                  Struggling with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">overthinking</span>?
                </h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  You're not alone. Many people find themselves stuck in cycles of anxiety, people-pleasing, and waiting for the "right moment" to take action. Our tools are designed to help you break free from these patterns and start living with courage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://reagleeagle.gumroad.com/" target="_blank" rel="noopener noreferrer">
                    <ShinyButton text="Explore Resources" primary />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="group p-8 hover:bg-white/10 transition-colors duration-500 h-full">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-serif mb-3">{resource.title}</h3>
                    <p className="text-slate-400 mb-6">{resource.description}</p>
                    <div className="flex items-center text-orange-300 font-bold tracking-widest text-xs uppercase group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to take the first step?</h2>
          <p className="text-slate-400 mb-8">
            Remember: Act before you feel ready. Confidence follows courage.
          </p>
          <a href="https://reagleeagle.gumroad.com/" target="_blank" rel="noopener noreferrer">
            <ShinyButton text="Browse The Shop" primary />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForIndividualsPage;
