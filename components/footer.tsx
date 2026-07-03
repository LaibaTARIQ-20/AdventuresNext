'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const resourcesLinks = [
  { label: 'Speakers', href: '/speakers' },
  { label: 'Past Speakers', href: '/PastSpeakers' },
  { label: 'Upcoming Events', href: '/UpcomingEvents' },
];

const officialPartners = [
  { name: 'AdVentures Studio', href: 'https://adventures.studio/' },
  { name: 'Career Launchpad', href: 'https://careerlaunchpad.pk/' },
  {
    name: 'NUST PDC',
    href: 'https://nust.edu.pk/events/professional-training-programmes-at-nust-pdc/',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com', Icon: Youtube },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your actual newsletter provider (Formspree / EmailJS / etc.)
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden border-t border-border-default bg-[#0A042D] pt-20 pb-10">
      {/* ambient glow — matches the rest of the dark sections on the site */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_800px_420px_at_8%_0%,rgba(26,95,149,0.22),transparent),radial-gradient(ellipse_600px_420px_at_96%_100%,rgba(255,145,77,0.12),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF914D]/40 to-transparent" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 pb-16"
        >
          {/* Column 1: Brand + Socials */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Image
              src="/logo.svg"
              alt="NEXT Summit"
              width={140}
              height={42}
              className="h-9 w-auto"
            />
            <p className="text-text-muted font-body-sm leading-relaxed max-w-xs">
              Connecting Pakistan&apos;s HR community through innovation, collaboration, and
              high-impact networking events.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:shadow-[0_0_14px_rgba(255,145,77,0.3)] transition-all duration-300"
                >
                  <Icon size={15} />
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
            className="lg:col-span-2"
          >
            <h5 className="font-label-caps text-label-caps text-white mb-6 uppercase tracking-[0.2em]">
              Resources
            </h5>
            <ul className="space-y-4">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors font-body-sm flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Official Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h5 className="font-label-caps text-label-caps text-white mb-6 uppercase tracking-[0.2em]">
              Official Partners
            </h5>
            <ul className="space-y-4">
              {officialPartners.map((partner) => (
                <li key={partner.name}>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors font-body-sm flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:w-2 transition-all" />
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter + Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h5 className="font-label-caps text-label-caps text-white mb-6 uppercase tracking-[0.2em]">
              Stay in the Loop
            </h5>
            <p className="text-text-muted font-body-sm mb-4 max-w-xs">
              Event updates and speaker announcements, straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full min-w-0 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2.5 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#FF914D] to-[#FF6B00] text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] active:scale-95 transition-all"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-[12px] mt-2 h-4 text-[#4FD1C5]">
              {submitted ? "You're on the list ✓" : ''}
            </p>

            <a
              href="mailto:hello@nextsummit.pk"
              className="text-primary font-bold text-[13px] hover:text-primary-container transition-colors inline-flex items-center gap-2 group mt-2"
            >
              <Mail size={14} />
              hello@nextsummit.pk
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-label-caps text-label-caps text-text-muted uppercase text-center">
            © {currentYear} NEXT Summit by AdVentures Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[11px] text-text-muted hover:text-primary transition-colors uppercase tracking-wider"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[11px] text-text-muted hover:text-primary transition-colors uppercase tracking-wider"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}