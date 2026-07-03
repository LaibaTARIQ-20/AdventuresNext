'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [failedVideos, setFailedVideos] = useState<Set<string>>(new Set());

  const videos = [
    { src: '/testimonials/Azam.mp4' },
    { src: '/testimonials/uk.mp4' },
    { src: '/testimonials/noureen.mp4' },
    { src: '/testimonials/manal.mp4' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveVideo(video.src)}
              className="glass-card rounded-xl overflow-hidden group relative aspect-[9/16] cursor-pointer border-0 bg-black"
            >
              {failedVideos.has(video.src) ? (
                <div className="w-full h-full flex items-center justify-center text-text-muted text-xs p-4 text-center">
                  File not found:<br />{video.src}
                </div>
              ) : (
                <video
                  className="w-full h-full object-cover"
                  src={video.src}
                  muted
                  playsInline
                  preload="auto"
                  onError={() =>
                    setFailedVideos((prev) => new Set(prev).add(video.src))
                  }
                />
              )}
              <div className="absolute inset-0 bg-surface/30 group-hover:bg-surface/10 transition-colors pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-110 group-hover:shadow-primary-container/40 transition-all duration-300">
                  <Play className="ml-1" size={22} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-md w-full aspect-[9/16] bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-contain"
              src={activeVideo}
              controls
              autoPlay
              playsInline
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-primary transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
