import { motion } from 'framer-motion';
import { Brain, FileText, Presentation, Users, ArrowRight } from 'lucide-react';
import { PageLayout, PageHeader, GlassCard, Glitter, ShinyButton } from '../components/shared';

const ForTherapistsPage = () => {
  const resources = [
    {
      icon: <Brain className="text-teal-300" />,
      title: "QEEG & Neurofeedback Training",
      description: "Visual guides and training materials for interpreting brain maps and explaining results to clients.",
    },
    {
      icon: <FileText className="text-pink-300" />,
      title: "Session-Ready Clinical Tools",
      description: "Worksheets, handouts, and visual aids designed to enhance your therapy sessions.",
    },
    {
      icon: <Presentation className="text-orange-300" />,
      title: "Adlerian Psychology Resources",
      description: "Materials grounded in Adlerian principles for understanding lifestyle patterns and encouragement.",
    },
    {
      icon: <Users className="text-purple-300" />,
      title: "Client Education Materials",
      description: "Easy-to-understand resources to help your clients grasp complex psychological concepts.",
    }
  ];

  const features = [
    "Evidence-based Adlerian approach",
    "Visual learning materials",
    "Neurofeedback integration",
    "Print-ready formats",
    "Regular content updates",
    "Professional community access"
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="For Therapists" 
        subtitle="Enhance your practice with session-ready clinical tools and professional development resources."
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
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h2 className="text-3xl font-serif mb-6">
                    Tools that help your clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-pink-300">take action</span>
                  </h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Whether you're implementing neurofeedback protocols, explaining QEEG results, or working with clients on lifestyle analysis, our tools make complex concepts accessible and actionable.
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ShinyButton text="Browse Clinical Tools" primary />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                    <Brain className="w-24 h-24 text-teal-300/50" />
                  </div>
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
                    <div className="flex items-center text-teal-300 font-bold tracking-widest text-xs uppercase group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
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
          <h2 className="text-3xl font-serif mb-6">Check out Therapist Resources</h2>
          <p className="text-slate-400 mb-8">
            Access our complete library of professional training and clinical resources.
          </p>
          <a href="https://therapistresources.com" target="_blank" rel="noreferrer">
            <ShinyButton text="Visit Therapist Resources" primary />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForTherapistsPage;
