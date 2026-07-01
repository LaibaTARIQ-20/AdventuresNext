'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ChevronLeft, ChevronRight, Play, Star, ArrowRight, School, Users, MessageCircle } from 'lucide-react';

// Hero Section Component
function HeroSection() {
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
        <img
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtYBGebFQF-2OQLaOFUOC_RQjD3T7VL9nvSh0CFM12FRcSlh9_AoqrXMPot_s4Ccaa7Wo9O8NsiEiXp19DGJlqD6yq3hS8tAlIph0m60ikja6WwZhBTYk89FMnJrwrPrcSWivR83OnKVWfhvqFUXDxlJc0OgAWjIRWe5dM945FRECeE59pEi7FrATGaXxfwuijA3Ucx5X2aldIHbBrZRnXrldUYWz2RryZIChmk78rvlL1QoEEF-U57OaSAt4h21ltOJWYttJY6BR7"
        />
        <div className="absolute inset-0 bg-surface/70 z-10" />
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: gradientBackground }}
        />
      </div>

      <div className="relative z-30 text-center px-margin-mobile max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
        >
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase">
            Pakistan's Premier HR Networking Event
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display-lg text-[64px] md:text-display-lg leading-tight mb-8"
        >
          <span className="text-white">NE</span>
          <span className="text-primary-container">X</span>
          <span className="text-white">T</span>
          <span className="block font-headline-lg md:text-headline-lg text-on-surface mt-2">
            Where Pakistan's HR leaders come to think, connect, and shape the future of work.
          </span>
        </motion.h1>

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

// Stats Section
function StatsSection() {
  const stats = [
    { value: '500+', label: 'Participants' },
    { value: '50+', label: 'Industry Leaders' },
    { value: '10+', label: 'Speakers' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 border-y border-border-default bg-surface-container-lowest relative overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-unit*4 bg-surface border border-border-default rounded-xl glass-card transition-all duration-300 text-center group py-12"
            >
              <div className="font-display-md text-display-md text-primary-container mb-2 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,107,0,0.3)] transition-all">
                {stat.value}
              </div>
              <div className="font-label-caps text-label-caps text-text-muted uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Partners Ticker
function PartnersTicker() {
  const partners = [
    'HUAWEI',
    'TELENOR',
    'STANDARD CHARTERED',
    'GRAANA.COM',
    'THE ASIA FOUNDATION',
    'NEXUS',
  ];

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
        <div className="animate-ticker flex items-center gap-12 px-6 group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <span
              key={index}
              className="text-3xl font-bold text-text-muted/40 font-headline-md hover:text-primary-container/60 transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Speakers Carousel
function SpeakersSection() {
  const [isPaused, setIsPaused] = useState(false);

  const speakers = [
    {
      name: 'Huda Al-Abbar',
      role: 'Director of HR Strategy',
      company: 'HR Tech MENA',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLsTGwUmWDh3hnP2pQhIRrCnjvPnLHCC-gSMfYZhd6EDF0PybYnCLszVHRGgji4m-vjge373GYoH9ApxGeOVoaMGsoGZAj6nx4ZGIhX3xiVQxuKjxeCJ3GGCD2CA81Tt3drdTAPIiNEkQG4P_xmbArtL5U1Tvb5lHyMymKmWhyHV3RAXY_WzrKf6zx17YA3yC1wazBdmgKtXMXVq4K7ZqAiOOZ4-dMv8KzFx9Ht3S0wrFMbMAQVIj0QNhUw',
    },
    {
      name: 'Jacob Jacob',
      role: 'Chief People Officer',
      company: 'Miral Asset Management',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLswMyX9f5SV_WUiMuoFzWrtFJX2IDOhI-Upyl3xRXkr0RVii_u9SSfCCAf5tduuFVoqQtI4rKTadGbtzKcy4vKhvRvOtAS2loBlEfFyISEMnFD5SK_gdeMayARTSMOULMWyt9xwhVIAQp3pBPKPS4tQZ6tqa9bE0Ke4Sk8Mnhvs4ON-c3AcyYAq7AHopHsVX1rUYZhobR5Hk_EHnNOCTHodkfGEjzx806A8ZXipWlDYpXsDGKFdLV1s_6Mn',
    },
    {
      name: 'Yusra Baqi',
      role: 'VP Human Capital',
      company: 'Aramco Digital',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLshadgfGBVOSsLq-q6jhnvlyPiP17WHHNe3RK4bZX2BmkzE4W3qUQq3xIQLFx2aMFcVWDtDErkbcTFnd0mODNTF_56ESQ7hSxn7oDCwYAmsfgHZR8dGCmSIRLTIrm_piAIFnfO1KylDEKxp-C-tKS6OFRC6l-HQ1Twu3kLEJ3XkKh9-uCLhUUQQrlNJD3GgvYFtzxsqaYdf5Wh0NLkJXQf0HdlMbzTArP5jhTBMYd_P3QK0_cwREtmCsCoj',
    },
  ];

  return (
    <section id="speakers" className="py-32 bg-surface-dim overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block">Confirmed for 2026</span>
          <h2 className="font-headline-lg text-headline-lg text-white">Our Distinguished Speakers</h2>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex gap-8 px-margin-mobile overflow-x-auto hide-scrollbar ${isPaused ? '[animation-play-state:paused]' : ''}`}>
          {[...speakers, ...speakers].map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] glass-card rounded-xl overflow-hidden group transition-all duration-500 flex-shrink-0"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  src={speaker.image}
                  alt={speaker.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <h4 className="font-headline-md text-headline-md text-white mb-1 group-hover:text-primary transition-colors">
                  {speaker.name}
                </h4>
                <p className="text-primary font-bold font-body-sm mb-4">{speaker.role}</p>
                <p className="text-text-muted font-body-sm uppercase tracking-wider">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
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
          View All 2026 Speakers
        </a>
      </motion.div>
    </section>
  );
}

// Attendees Section
function AttendeesSection() {
  const attendees = [
    { title: 'Director of HR', company: 'Telenor Pakistan', sector: 'Telecom Sector', icon: '🏢' },
    { title: 'CHRO', company: 'Jazz', sector: 'Digital Communications', icon: '👤' },
    { title: 'Head of Talent', company: 'Standard Chartered', sector: 'Financial Services', icon: '💳' },
    { title: 'VP People & Culture', company: 'Huawei', sector: 'Technology & Infrastructure', icon: '📡' },
  ];

  return (
    <section className="py-32 bg-surface-container-lowest overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <span className="font-label-caps text-label-caps text-primary-container uppercase mb-4 block">
              FEATURED ATTENDEES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white">
              Leaders from Pakistan's Top Organizations
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attendees.map((attendee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 group flex flex-col items-center text-center transition-all duration-500"
            >
              <div className="w-20 h-20 bg-surface-variant rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 transition-all">
                <span className="text-4xl">{attendee.icon}</span>
              </div>
              <h4 className="font-headline-md text-xl text-white mb-2 group-hover:text-primary transition-colors">
                {attendee.title}
              </h4>
              <p className="text-primary font-bold font-body-sm mb-1 uppercase tracking-wider">
                {attendee.company}
              </p>
              <p className="text-text-muted font-body-sm">{attendee.sector}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'The insights on digital transformation in HR were a game-changer for our 2025 strategy.',
      name: 'Sara Ahmed',
      role: 'HR Director, Tech Global',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLv4vXDOzLtwMpVteBVoZQ3MSPZMejnwnTcy0Pr0oZL8mb8OoHldivDacEpNgtARy_TRLaEBkehmUmhfE9nubsdLju0FVI6z3lnZ5jNNbW-GJ-6DaeKeUW8mQ1KtHtvjNL-aNRXjYNZFdl1XMvQXId95s9qjrFG92mvAV_08SNtcJUI0C0doyhgqJ7jX9SvFECUnLe1ywAbxzT06W1taajZJvK3MI9nAvTXwkLnI3bmp17IQpMsOnCAzjhjm',
    },
    {
      quote: "Unparalleled networking. I've met more industry peers in two days than I did in the last two years.",
      name: 'Omar Khalid',
      role: 'VP People, Fintech Solution',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLv4vXDOzLtwMpVteBVoZQ3MSPZMejnwnTcy0Pr0oZL8mb8OoHldivDacEpNgtARy_TRLaEBkehmUmhfE9nubsdLju0FVI6z3lnZ5jNNbW-GJ-6DaeKeUW8mQ1KtHtvjNL-aNRXjYNZFdl1XMvQXId95s9qjrFG92mvAV_08SNtcJUI0C0doyhgqJ7jX9SvFECUnLe1ywAbxzT06W1taajZJvK3MI9nAvTXwkLnI3bmp17IQpMsOnCAzjhjm',
    },
    {
      quote: 'The panel discussions were refreshingly honest. We tackled real workforce issues head-on.',
      name: 'Ayesha Khan',
      role: 'Head of Talent, Retail Group',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLv4vXDOzLtwMpVteBVoZQ3MSPZMejnwnTcy0Pr0oZL8mb8OoHldivDacEpNgtARy_TRLaEBkehmUmhfE9nubsdLju0FVI6z3lnZ5jNNbW-GJ-6DaeKeUW8mQ1KtHtvjNL-aNRXjYNZFdl1XMvQXId95s9qjrFG92mvAV_08SNtcJUI0C0doyhgqJ7jX9SvFECUnLe1ywAbxzT06W1taajZJvK3MI9nAvTXwkLnI3bmp17IQpMsOnCAzjhjm',
    },
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="font-label-caps text-label-caps text-primary-container uppercase mb-4 block tracking-[0.3em]">
            Testimonials
          </span>
          <h2 className="font-headline-lg text-headline-lg text-white">What Our Community Says</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-lg overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden cursor-pointer">
                <img
                  alt="Video Testimonial Thumbnail"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={testimonial.image}
                />
                <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-110 group-hover:shadow-primary-container/30 transition-all duration-300">
                    <Play className="ml-1" size={28} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary-container fill-primary-container" />
                  ))}
                </div>
                <p className="text-on-surface font-body-md mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-headline-md text-lg text-white group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-container font-label-caps text-[10px] uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
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
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold font-label-caps text-label-caps uppercase hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBasc1qUG8RyTmj3vbK3bjn_Hq6S7uOTpGjeIxtldkyKSDvOuGBpeeIxIlgDK_aTpzWWkFClH8pRXcaosV1abieTqfE6k0i1_ah3UTDgRfoesG07M6At1YKQYjsTrgoDYySzQMeb1d-xfRu1g_wKOIhSR2pFmqcW0wU3tESuK4e45_QkfBKX92TdneOkB7EqJ3Im3Xpzwry6AjIsNdb_F68Wv17MYPh2MsZykPKCQ9q9jDAkRQmD0JAPrC1CYjj5fu0MFkX7XgdOQ33',
      span: 'col-span-2 row-span-2',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCueyedn1qWA-nRqclDxoc6VbPza88YOdi2mB-ZnQ1iw9P4gib-YHW14ATchOVjvBnE8JKy5DuJmfo_fKejEwQYbxrA5Hbd9o2re7I3Wy7p9bWuGMCsNJpJSrIUQHyj9YYRcQzZvcWKAXhHp1FOQ6Sn6rGsVyS3ezU9krMr-gySCsi70M1J9comv0gyRzVleyLqCZKKH2WokUtSynNjm01kyWkaGq-0uhcRv9IUK569eOCW_N_OHPW32nyjEZBok5za5pTGB4JPh9gx',
      span: 'col-span-2',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByzOg37nFRe9AXPD6avWz6W0DwbbpzSeWip3veJJHyBC7RQLcwygJuMwbAT2n3oQaTojjAwTmDRuiL8MhxqAxFOFLO0WR3tMXHHOyyARoCMVpgXIRaxY3tndgfxIB0DRHXYHy7Jm0Wd5GJ0AZi9aZEbqKwbjGNoocvjduewrwvy-Dhoi36WqH7R4YgpNtfwQCYGbxhhsDB_ET9jlUoLoOs8NW4XanJ6L-ZNp39DoPprcQqWz-t3C1S2f9qov8-48qvn6ERYyV6TXZV',
      span: '',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmlxpOV_8Md-3BmTH6KEJT63LqIGFkDxy88UwETpZmd5ezm1RZVHcYlxnDLIDPGXtvT_lxNHf7oBDnuC6iQ-Pgr79hnc_Tv-D_6Drx-0g2i11RCKH6BnUR1z2O3PpP7a5Xss1yQZ7JotzGvD4cPlwDDnaheozbBSeMN2x9r-i5-eISZOG54KFnqPVIS-Aqd5TQXG0rxv4db1hCUu0Zx62P2r_CY0Ty6arq-TDyxpuq_X8F0TFNf-wSW6JvzfE0L8jjEUHY5Yq_3zFk',
      span: '',
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-surface-container-lowest relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block">
              Flashback
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white">NEXT 2024 in Photos</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${img.span} overflow-hidden rounded-xl group relative glass-card p-0`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={img.src}
                alt={`Gallery image ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Registration Section
function RegistrationSection() {
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
          Join Us in 2026
        </span>
        <h2 className="font-display-md text-headline-lg md:text-display-md text-white mb-8">
          Be part of what's NEXT.
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
          <p className="text-text-muted font-body-sm mt-4 italic opacity-60">
            Join 2,000+ others already on the waitlist.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PartnersTicker />
      <SpeakersSection />
      <AttendeesSection />
      <TestimonialsSection />
      <ExperienceSection />
      <GallerySection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
