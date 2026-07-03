'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GallerySection() {
  const images = [
    { src: '/nextsummit/2024/1.jpg', year: '2024', span: 'col-span-2 row-span-2' },
    { src: '/nextsummit/2024/2.jpg', year: '2024', span: '' },
    { src: '/nextsummit/2024/3.jpg', year: '2024', span: '' },
    { src: '/nextsummit/2024/4.jpg', year: '2024', span: 'col-span-2' },
    { src: '/nextsummit/2025/1.jpg', year: '2025', span: 'col-span-2' },
    { src: '/nextsummit/2025/2.jpg', year: '2025', span: '' },
    { src: '/nextsummit/2025/3.jpg', year: '2025', span: '' },
  ];

  const years = Array.from(new Set(images.map((img) => img.year))).sort();
  const [activeYear, setActiveYear] = useState(years[years.length - 1]); // defaults to latest year (2025)

  const filteredImages = images.filter((img) => img.year === activeYear);

  return (
    <section id="gallery" className="py-32 bg-surface-container-lowest relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8"
        >
          <div>
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block">
              Flashback
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white">
              Moments That Made NEXT
            </h2>
          </div>
        </motion.div>

        {/* Year filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`${activeYear === year
                ? 'bg-primary-container text-white'
                : 'border border-border-default text-text-muted hover:border-primary-container hover:text-white'
                } font-label-caps text-label-caps px-5 py-2 rounded-full uppercase tracking-widest transition-colors`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${img.span} overflow-hidden rounded-xl group relative glass-card p-0`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={img.src}
                alt={`NEXT Summit ${img.year}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
