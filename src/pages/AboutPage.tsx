import { motion } from 'framer-motion';
import { Heart, Sparkles, Target } from 'lucide-react';
import { PageLayout, PageHeader, GlassCard, Glitter } from '../components/shared';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="text-pink-300" />,
      title: "Encouragement Over Praise",
      description: "We believe in recognizing effort and progress, not just achievement. True growth comes from feeling capable, not from seeking approval."
    },
    {
      icon: <Target className="text-orange-300" />,
      title: "Action Before Confidence",
      description: "Confidence doesn't come before action. It follows it. We help you take courageous steps even when you don't feel ready."
    },
    {
      icon: <Sparkles className="text-teal-300" />,
      title: "Psychology Made Accessible",
      description: "Complex psychological concepts shouldn't stay locked in textbooks. We create visual, tangible tools that make insight actionable."
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="About Us" 
        subtitle="Bridging the gap between knowing and doing through Adlerian psychology."
      />

      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="p-10 mb-16">
              <Glitter />
              <div className="relative z-10">
                <h2 className="text-3xl font-serif mb-6 text-center">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-pink-300 to-teal-300">Story</span>
                </h2>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Encouragement Ink was born from a simple observation: most people know what they should do, but struggle to actually do it. This gap between insight and action is where real change happens. Or doesn't.
                  </p>
                  <p>
                    Rooted in Adlerian psychology, we believe that every person is creative, capable, and whole. Our role isn't to fix you. It's to help you recognize the courage you already have and put it into motion.
                  </p>
                  <p>
                    Whether you're an individual breaking free from overthinking, a clinician looking for better tools, or a brain professional deepening your training, we create resources that bridge the gap between knowing and doing.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <h2 className="text-3xl font-serif mb-8 text-center">Our Values</h2>
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                      <p className="text-slate-400">{value.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-10 text-center">
            <Glitter />
            <div className="relative z-10">
              <h2 className="text-3xl font-serif mb-6">The Adlerian Foundation</h2>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                Alfred Adler believed that all behavior is purposeful and that humans are driven by social interest and a desire to belong. Our tools help you understand your unique "lifestyle" (the patterns of thinking and behaving that shape your life) so you can make intentional changes. This foundation shapes everything we create, from individual courage tools to clinical resources to brain science training.
              </p>
              <blockquote className="text-xl italic text-slate-400 border-l-4 border-pink-500/50 pl-6 text-left max-w-xl mx-auto">
                "It is easier to fight for one's principles than to live up to them."
                <footer className="text-sm text-slate-500 mt-2 not-italic">— Alfred Adler</footer>
              </blockquote>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
