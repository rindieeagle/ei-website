import { motion } from 'framer-motion';
import { Wrench, BookOpen, Brain, Sparkles } from 'lucide-react';
import { PageLayout, PageHeader, GlassCard, Glitter, ShinyButton } from '../components/shared';

const ToolsPage = () => {
  const tools = [
    {
      icon: <BookOpen className="text-orange-300" />,
      title: "Interactive Workbooks",
      description: "Hands-on exercises designed to transform knowledge into lasting behavioral change.",
      color: "orange"
    },
    {
      icon: <Brain className="text-teal-300" />,
      title: "Visual Brain Maps",
      description: "Understand your brain patterns with beautifully designed QEEG interpretation guides.",
      color: "teal"
    },
    {
      icon: <Sparkles className="text-pink-300" />,
      title: "Action Cards",
      description: "Quick-reference cards for daily encouragement and practical psychological insights.",
      color: "pink"
    },
    {
      icon: <Wrench className="text-purple-300" />,
      title: "Clinical Resources",
      description: "Session-ready materials for therapists implementing Adlerian and neurofeedback approaches.",
      color: "purple"
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Our Tools" 
        subtitle="Psychology-based resources designed to bridge the gap between insight and action."
      />

      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group p-8 hover:bg-white/10 transition-colors duration-500 h-full">
                <Glitter />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-${tool.color}-500/20 flex items-center justify-center mb-6 border border-${tool.color}-500/30`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{tool.title}</h3>
                  <p className="text-slate-400 mb-6">{tool.description}</p>
                  <ShinyButton text="Learn More" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Looking for something specific?</h2>
          <p className="text-slate-400 mb-8">
            Browse our complete catalog of tools designed for both individuals and clinicians.
          </p>
          <ShinyButton text="Visit The Shop" primary />
        </div>
      </section>
    </PageLayout>
  );
};

export default ToolsPage;
