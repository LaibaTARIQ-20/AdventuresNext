'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RegistrationSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="register" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-margin-mobile relative z-10 text-center"
      >
        <span className="font-label-caps text-label-caps text-primary uppercase mb-6 block tracking-[0.3em]">
          Join Us in {currentYear}
        </span>
        <h2 className="font-display-md text-headline-lg md:text-display-md text-white mb-8 flex items-center justify-center gap-3 flex-wrap">
          Be Part Of What's
          <Image
            src="/logo.svg"
            alt="NEXT"
            width={160}
            height={48}
            className="h-9 md:h-12 w-auto inline-block align-middle"
          />
        </h2>
        <p className="text-text-muted font-body-lg mb-12 max-w-2xl mx-auto">
          Early bird registrations are now open. Secure your place among Pakistan's HR elite and gain access to exclusive content tracks and networking sessions.
        </p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-3 p-2 bg-surface/50 backdrop-blur-md border border-border-default rounded-xl focus-within:border-primary/50 transition-all">
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 text-white px-4 font-body-md py-3 outline-none"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button
              className="bg-primary-container text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] active:scale-95 transition-all"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
