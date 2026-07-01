'use client';

import { motion } from 'framer-motion';
import { Globe, Share2, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const resourcesLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Media Kit', href: '#' },
];

const communityLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Partnerships', href: '#' },
  { label: 'FAQs', href: '#' },
];

export default function Footer() {
  return (
    <footer className="mesh-gradient border-t border-border-default pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24 relative z-10"
        >
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <div className="font-headline-md text-headline-md font-black text-on-surface tracking-tighter">
              <span className="text-white">NE</span>
              <span className="text-primary-container">X</span>
              <span className="text-white">T</span>
            </div>
            <p className="text-text-muted font-body-sm leading-relaxed max-w-xs">
              Connecting Pakistan's HR community through innovation, collaboration, and high-impact networking events since 2014.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="font-label-caps text-label-caps text-white mb-8 uppercase tracking-[0.2em]">
              Resources
            </h5>
            <ul className="space-y-5">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors font-body-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="font-label-caps text-label-caps text-white mb-8 uppercase tracking-[0.2em]">
              Community
            </h5>
            <ul className="space-y-5">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors font-body-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="font-label-caps text-label-caps text-white mb-8 uppercase tracking-[0.2em]">
              Official Partners
            </h5>
            <div className="flex flex-wrap gap-4 opacity-40 mb-8">
              <span className="font-bold text-xs">AdVentures Studio</span>
              <span className="font-bold text-xs">NUST PDC</span>
              <span className="font-bold text-xs">Career Launchpad</span>
            </div>
            <div>
              <p className="text-text-muted font-body-sm mb-2">Got questions? Reach out at</p>
              <a
                href="mailto:hello@nextsummit.pk"
                className="text-primary font-bold hover:text-primary-container transition-colors inline-flex items-center gap-2 group"
              >
                hello@nextsummit.pk
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-border-default/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="font-label-caps text-label-caps text-text-muted uppercase">
            © 2024 NEXT Summit by AdVentures Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-muted">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-label-caps text-[10px] uppercase tracking-widest">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
