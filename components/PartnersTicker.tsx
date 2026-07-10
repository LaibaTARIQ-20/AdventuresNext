"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Telenor", logo: "/sponsers/telenor.svg" },
  { name: "Jazz", logo: "/sponsers/JAZZ.svg" },
  { name: "PTCL", logo: "/sponsers/PTCL.svg" },
  { name: "Standard Chartered", logo: "/sponsers/standard.svg" },
  { name: "Huawei", logo: "/sponsers/HUAWEI.svg" },
  { name: "Graana.com", logo: "/sponsers/GARAANA.svg" },
  { name: "The Asia Foundation", logo: "/sponsers/ASIAFOUNDATION.svg" },
  { name: "Nexus Venture Partners", logo: "/sponsers/NEXUS.svg" },
  { name: "Wateen", logo: "/sponsers/wateen.svg" },
  { name: "Weather walay", logo: "/sponsers/weatherwalay.svg" },
  { name: "zindigi", logo: "/sponsers/zindigi.svg" },
  { name: "S&P global", logo: "/sponsers/s&p.svg" },
];

export default function PartnersTicker() {
  return (
    <section className="relative py-16 bg-[#0A042D] overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_300px_at_50%_0%,rgba(26,95,149,0.15),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-container-max mx-auto px-margin-mobile mb-10 flex flex-col items-center"
      >
        <span className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#FF914D] to-transparent mb-4" />
        <h3 className="font-label-caps text-label-caps text-white/50 text-center uppercase tracking-[3px]">
          Global Partners & Collaborators
        </h3>
      </motion.div>

      <div className="relative">
        {/* Gradient fade edges so logos don't hard-cut at container bounds */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0A042D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0A042D] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="animate-ticker flex items-center gap-16 px-6 group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-18 w-auto object-contain opacity-85 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_16px_rgba(255,145,77,0.4)] transition-all duration-300 cursor-default"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
