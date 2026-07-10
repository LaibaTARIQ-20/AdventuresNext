'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/UpcomingEvents', label: 'Upcoming Events' },
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
      className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-[0_4px_30px_rgba(255,145,77,0.1)]' : ''
        }`}
      style={{
        borderBottom: isScrolled
          ? '1px solid rgba(255, 145, 77, 0.15)'
          : '1px solid rgba(255, 255, 255, 0.07)',
      }}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="group relative flex flex-col items-start transition-all duration-300 hover:scale-105">
            <Image
              src="/logo.svg"
              alt="NEXT Summit"
              width={140}
              height={40}
              className="h-9 w-auto group-hover:drop-shadow-[0_0_10px_rgba(255,145,77,0.5)] transition-all"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 font-body-md text-body-md group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF914D] to-[#FFB78A] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="#register"
            className="relative overflow-hidden text-white px-6 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform duration-300 btn-gradient-animated hover:shadow-[0_0_20px_rgba(255,145,77,0.5)]"
          >
            <span className="relative z-10">Join NEXT</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
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
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-body-md text-body-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#register"
              className="relative overflow-hidden text-white px-6 py-2 rounded-full font-bold text-center btn-gradient-animated hover:shadow-[0_0_20px_rgba(255,145,77,0.5)] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Join NEXT</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}