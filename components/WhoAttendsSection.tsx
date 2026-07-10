'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* Count-up hook                                                       */
/* ------------------------------------------------------------------ */
function useCountUp(end: number, duration = 1400, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [start, end, duration]);

  return count;
}

/* ------------------------------------------------------------------ */
/* Starfield — ambient twinkling background                            */
/* ------------------------------------------------------------------ */
function Starfield({ count = 50 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.5,
        duration: 2.5 + Math.random() * 3.5,
        delay: Math.random() * 5,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stat card                                                           */
/* ------------------------------------------------------------------ */
function StatItem({
  value,
  suffix,
  label,
  start,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 1400, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="rounded-[20px] px-8 py-10 text-center bg-white/[0.03] border border-[rgba(255,145,77,0.15)] hover:border-[rgba(255,145,77,0.4)] hover:shadow-[0_0_40px_rgba(255,145,77,0.08)] hover:-translate-y-1 transition-all duration-300"
    >
      <span className="text-white font-extrabold text-[56px] md:text-[72px] leading-none tracking-[-3px] tabular-nums">
        {count}
        <span className="text-[#FF914D]">{suffix}</span>
      </span>
      <div className="w-12 h-[3px] bg-[#FF914D] mx-auto my-4 rounded-full" />
      <span className="text-[11px] text-white/40 uppercase tracking-[3px] font-bold">
        {label}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Role breakdown data                                                 */
/* ------------------------------------------------------------------ */
const ROLES = [
  { label: 'CHROs & HR Directors', percent: 35, color: '#FF914D' },
  { label: 'Founders & CEOs', percent: 25, color: '#1A5F95' },
  { label: 'Talent, L&D & OD Heads', percent: 20, color: '#FFB78A' },
  { label: 'Students & Early Careers', percent: 20, color: '#4FA8D8' },
];

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export default function WhoAttendsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section-navy-glow py-16 md:py-20 border-b border-border-default z-10"
    >
      <Starfield count={55} />

      <div className="relative z-10 max-w-[900px] mx-auto px-margin-mobile md:px-margin-desktop text-center">
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-[#FF914D] mb-2 block"
        >
          The Room
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-[28px] md:text-[38px] font-extrabold text-white leading-[1.05] tracking-[-1px]"
        >
          Who&apos;s in the <span className="gradient-text-pop">Room</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[14px] text-white/50 mt-2.5 max-w-sm mx-auto"
        >
          Pakistan&apos;s most senior HR community. All in one evening.
        </motion.p>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatItem value={500} suffix="+" label="Attendees" start={isInView} delay={0.15} />
          <StatItem value={50} suffix="+" label="Industry Leaders" start={isInView} delay={0.2} />
          <StatItem value={10} suffix="+" label="Speakers" start={isInView} delay={0.25} />
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/[0.06]" />

        {/* Role breakdown */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          {ROLES.map((role) => (
            <div key={role.label} className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: role.color }}
              />
              <span className="text-[14px] text-white/70 font-semibold">{role.label}</span>
              <span
                className="text-[14px] font-extrabold ml-auto"
                style={{ color: role.color }}
              >
                {role.percent}%
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#register"
            className="relative inline-flex items-center justify-center text-white px-7 py-3 rounded-full font-bold text-[15px] overflow-hidden group hover:shadow-[0_0_25px_rgba(255,145,77,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 btn-gradient-animated"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Reserve Your Seat{' '}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}