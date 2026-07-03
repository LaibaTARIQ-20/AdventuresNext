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
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255, 107, 0, 0.15) 0%, transparent 60%)`
  );

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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

      <div className="relative z-30 text-center px-margin-mobile max-w-4xl mx-auto">
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
            className="h-20 md:h-28 w-auto mx-auto mb-6"
            priority
          />
          <h1 className="font-headline-lg md:text-headline-lg text-on-surface">
            Where Pakistan's HR leaders come to think, connect, and shape the future of work.
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
            className="w-full sm:w-auto bg-primary-container text-white px-10 py-4 rounded-lg font-bold text-lg hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Reserve Your Seat
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto border border-secondary text-secondary px-10 py-4 rounded-lg font-bold text-lg hover:bg-secondary/5 hover:border-secondary/80 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Last Edition
          </a>
        </motion.div>
      </div>
    </section>
  );
}
