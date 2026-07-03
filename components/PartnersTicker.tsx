'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Telenor', logo: '/sponsers/telenor.svg' },
  { name: 'Jazz', logo: '/sponsers/JAZZ.svg' },
  { name: 'PTCL', logo: '/sponsers/PTCL.svg' },
  { name: 'Standard Chartered', logo: '/sponsers/standard.svg' },
  { name: 'Huawei', logo: '/sponsers/HUAWEI.svg' },
  { name: 'Graana.com', logo: '/sponsers/GARAANA.svg' },
  { name: 'The Asia Foundation', logo: '/sponsers/ASIAFOUNDATION.svg' },
  { name: 'Nexus Venture Partners', logo: '/sponsers/NEXUS.svg' },
  { name: 'Wateen', logo: '/sponsers/wateen.svg' },
  { name: 'Weather walay', logo: '/sponsers/weatherwalay.svg' },
  { name: 'zindigi', logo: '/sponsers/zindigi.svg' },
  { name: 'S&P global', logo: '/sponsers/s&p.svg' },
];

export default function PartnersTicker() {
  return (
    <section className="py-16 bg-background overflow-hidden border-b border-border-default">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-container-max mx-auto px-margin-mobile mb-8"
      >
        <h3 className="font-label-caps text-label-caps text-text-muted text-center uppercase tracking-widest">
          Global Partners & Collaborators
        </h3>
      </motion.div>
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="animate-ticker flex items-center gap-16 px-6 group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,107,0,0.35)] transition-all duration-300 cursor-default"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
