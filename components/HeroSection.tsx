'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const gradientBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255, 145, 77, 0.18) 0%, rgba(26, 95, 149, 0.14) 35%, transparent 65%)`
  );

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grain-overlay">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-surface/70 z-10" />
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: gradientBackground }}
        />
      </div>

      {/* Floating gradient orbs for depth */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 glow-orb rounded-full z-10 animate-float-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 glow-orb rounded-full z-10 animate-float-slow pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-30 text-center px-margin-mobile max-w-4xl mx-auto">
        {/* Shimmering badge */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <Image
            src="/logo.svg"
            alt="NEXT Summit"
            width={400}
            height={120}
            className="h-20 md:h-28 w-auto mx-auto mb-6 drop-shadow-[0_0_30px_rgba(255,145,77,0.3)]"
            priority
          />
          <h1 className="font-headline-lg md:text-headline-lg text-on-surface">
            Where Pakistan's HR leaders come to{' '}
            <span className="gradient-text-pop font-bold">think, connect,</span> and shape the future of work.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a

            href="#register"
            className="relative w-full sm:w-auto text-white px-10 py-4 rounded-lg font-bold text-lg overflow-hidden group hover:scale-105 active:scale-95 transition-transform duration-300 btn-gradient-animated hover:shadow-[0_0_35px_rgba(255,145,77,0.5)]"
          >
            <span className="relative z-10">Reserve Your Seat</span>
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto border border-white/25 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/5 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Last Edition
          </a>
        </motion.div>
      </div>
    </section>
  );
}