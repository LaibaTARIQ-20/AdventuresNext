'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/attendees', label: 'Attendees' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-nav border-b border-border-default transition-all duration-300 ${
        isScrolled ? 'shadow-xl border-primary/10' : ''
      }`}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="group relative flex items-center transition-all duration-300 hover:scale-105">
            <span className="font-display-md text-2xl md:text-3xl font-black tracking-tighter uppercase flex items-center group-hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]">
              <span className="text-white">NE</span>
              <span className="text-primary-container relative overflow-hidden">
                X
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-pulse-slow" />
              </span>
              <span className="text-white">T</span>
            </span>
          </Link>
          <span className="hidden md:block font-label-caps text-[10px] mt-1 tracking-widest uppercase">
            <span className="text-primary-container">Ad</span>
            <span className="text-white/60">Ventures</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#register"
            className="bg-primary-container text-white px-6 py-2 rounded-full font-bold hover:brightness-110 active:scale-95 hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all"
          >
            Get Tickets
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-border-default">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#register"
              className="bg-primary-container text-white px-6 py-2 rounded-full font-bold text-center hover:brightness-110 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Tickets
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
