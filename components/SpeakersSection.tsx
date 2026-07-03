'use client';

import { motion } from 'framer-motion';

export default function SpeakersSection() {
  const speakers = [
    { name: 'Ali Naseer', role: 'Chief Strategy Officer', company: 'Jazz', image: '/speakers/alinaseer.png' },
    { name: 'Samia Qamar', role: 'Director, People', company: 'S&P Global', image: '/speakers/samia.png' },
    { name: 'Tahira Khattak', role: 'Director HR Business Partnering', company: 'Telenor', image: '/speakers/tahira.jpg' },
    { name: 'Haroon Kanth', role: 'Country Director', company: 'Teradata Global', image: '/speakers/haroon.png' },
    { name: 'Amjad Iqbal', role: 'Group VP Business Growth Partners', company: 'PTCL', image: '/speakers/amjad-iqbal.jpg' },
    { name: 'Sana Hassan', role: 'Head of People & Culture', company: 'Wateen', image: '/speakers/sana-hassan.jpg' },
    { name: 'Abdul Khaliq Khan', role: 'Head Talent & Org. Development', company: 'HBL', image: '/speakers/abdulkhaliq.jpg' },
    { name: 'Sonia Saleem', role: 'Founder', company: 'Socio Engineering Technologies', image: '/speakers/soniasaleem.jpg' },
    { name: 'Muhammad Ali', role: 'General Manager', company: 'NUST PDC', image: '/speakers/muhammadalikhan.jpg' },
    { name: 'Erum Rizvi', role: 'Communications Consultant', company: 'AdVentures', image: '/speakers/erumrizvi.jpg' },
    { name: 'Parvez Abbasi', role: 'Founder', company: 'AdVentures', image: '/speakers/parvezabbasi.jpg' },
    { name: 'Kamran Z. Rizvi', role: 'Co-founder', company: 'Carnelian', image: '/speakers/kamranrizvi.png' },
  ];

  return (
    <section id="speakers" className="py-32 bg-surface-dim overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline-lg text-headline-lg text-white">Our Distinguished Speakers</h2>
        </motion.div>
      </div>

      <div className="relative group">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-ticker flex items-center gap-10 px-6 group-hover:[animation-play-state:paused]">
            {[...speakers, ...speakers].map((speaker, index) => (
              <div
                key={index}
                className="w-[200px] flex-shrink-0 whitespace-normal flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-border-default hover:border-primary-container hover:scale-105 transition-all duration-500 mb-5 shadow-lg">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={speaker.image}
                    alt={speaker.name}
                  />
                </div>
                <h4 className="font-headline-md text-lg text-white mb-1 hover:text-primary transition-colors">
                  {speaker.name}
                </h4>
                <p className="text-primary font-bold font-body-sm mb-2 leading-snug">{speaker.role}</p>
                <p className="text-text-muted font-body-sm uppercase tracking-wider">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <a
          href="/speakers"
          className="font-label-caps text-label-caps text-white border-b-2 border-primary/50 pb-2 hover:border-primary hover:text-primary transition-all uppercase tracking-[0.2em] transform hover:-translate-y-1 inline-block"
        >
          View All Speakers
        </a>
      </motion.div>
    </section>
  );
}
