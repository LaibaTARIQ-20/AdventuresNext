'use client';

import { motion } from 'framer-motion';
import { School, Users, MessageCircle, ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      icon: School,
      title: 'Expert Speakers',
      description:
        'Gain actionable insights from industry-leading HR professionals to accelerate your execution plans and achieve key objectives.',
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description:
        'Connect with industry leaders, exchange disruptive ideas, and build valuable relationships that last beyond the event floor.',
    },
    {
      icon: MessageCircle,
      title: 'Panel Discussions',
      description:
        'Explore pressing HR topics with seasoned professionals sharing real-world solutions and strategies for the modern workforce.',
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] -rotate-12 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block">
            The Experience
          </span>
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">
            Designed for Meaningful Impact
          </h2>
          <p className="text-text-muted font-body-lg">
            NEXT is a platform dedicated to shaping the future of work by empowering professionals through rigorous insights and elite networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 rounded-xl group transition-all duration-500"
            >
              <exp.icon
                size={40}
                className="text-primary mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,107,0,0.4)] transition-transform"
              />
              <h3 className="font-headline-md text-headline-md text-white mb-4 group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-text-muted font-body-md mb-8 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
