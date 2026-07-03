'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Briefcase, Rocket, GraduationCap, Users, Network } from 'lucide-react';

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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [start, end, duration]);

  return count;
}

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
      initial={{ opacity: 0, y: 10 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="flex flex-col items-start"
    >
      <span className="text-white font-extrabold text-[32px] md:text-[38px] leading-none tracking-[-1px] tabular-nums">
        {count}
        <span className="text-[#FF914D]">{suffix}</span>
      </span>
      <span className="text-[9px] text-white/40 uppercase tracking-[2.5px] mt-1.5 font-bold whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
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
/* Orbiting particle ring                                              */
/* ------------------------------------------------------------------ */
function OrbitRing({
  size,
  duration,
  reverse,
  dotColor,
  dotSize = 6,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  dotColor: string;
  dotSize?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        marginTop: -size / 2,
        marginLeft: -size / 2,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      <span
        className="absolute rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          background: dotColor,
          top: -dotSize / 2,
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: `0 0 8px 2px ${dotColor}99`,
        }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Rotating gradient scan-ring — thin arc of light sweeping the orbit  */
/* ------------------------------------------------------------------ */
function ScanRing({
  size,
  duration,
  color,
  reverse,
  thickness = 1.4,
}: {
  size: number;
  duration: number;
  color: string;
  reverse?: boolean;
  thickness?: number;
}) {
  const inner = 50 - thickness;
  const innerEdge = 50 - thickness - 0.6;
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        marginTop: -size / 2,
        marginLeft: -size / 2,
        background: `conic-gradient(from 0deg, transparent 0%, ${color} 8%, transparent 22%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle, transparent ${innerEdge}%, black ${inner}%, black 50%, transparent 51%)`,
        maskImage: `radial-gradient(circle, transparent ${innerEdge}%, black ${inner}%, black 50%, transparent 51%)`,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Orbit visualization — signature element                             */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  { id: 0, label: 'HR Directors', percent: 35, color: '#FF914D', Icon: Briefcase },
  { id: 1, label: 'Founders & CEOs', percent: 25, color: '#0EA5E9', Icon: Rocket },
  { id: 2, label: 'L&D Heads', percent: 20, color: '#FFB78A', Icon: GraduationCap },
  { id: 3, label: 'Students', percent: 20, color: '#4FD1C5', Icon: Users },
];

function OrbitVisual({
  isInView,
  reduceMotion,
}: {
  isInView: boolean;
  reduceMotion: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const SIZE = 440;
  const CENTER = SIZE / 2;
  const BADGE_RADIUS = 138;
  const LABEL_RADIUS = 186;
  const ANGLES = [45, 135, 225, 315];

  const nodes = CATEGORIES.map((cat, i) => {
    const rad = (ANGLES[i] * Math.PI) / 180;
    return {
      ...cat,
      bx: CENTER + BADGE_RADIUS * Math.cos(rad),
      by: CENTER + BADGE_RADIUS * Math.sin(rad),
      lx: CENTER + LABEL_RADIUS * Math.cos(rad),
      ly: CENTER + LABEL_RADIUS * Math.sin(rad),
    };
  });

  return (
    <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
      {/* ambient glow */}
      <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(255,145,77,0.28),transparent_70%)] blur-3xl" />

      {/* guide rings */}
      <div
        className="absolute rounded-full border border-white/[0.09]"
        style={{ width: BADGE_RADIUS * 2, height: BADGE_RADIUS * 2, top: CENTER - BADGE_RADIUS, left: CENTER - BADGE_RADIUS }}
      />
      <div
        className="absolute rounded-full border border-dashed border-white/[0.06]"
        style={{ width: BADGE_RADIUS * 1.45, height: BADGE_RADIUS * 1.45, top: CENTER - (BADGE_RADIUS * 1.45) / 2, left: CENTER - (BADGE_RADIUS * 1.45) / 2 }}
      />

      {/* rotating light sweeps + orbiting particles */}
      {!reduceMotion && (
        <>
          <ScanRing size={BADGE_RADIUS * 2} duration={14} color="rgba(255,145,77,0.9)" />
          <ScanRing size={BADGE_RADIUS * 1.45} duration={10} color="rgba(14,165,233,0.85)" reverse thickness={1} />
          <OrbitRing size={BADGE_RADIUS * 2 + 36} duration={30} dotColor="#FFB78A" dotSize={3.5} />
        </>
      )}

      {/* spokes */}
      <svg className="absolute inset-0" width={SIZE} height={SIZE}>
        {nodes.map((n) => (
          <motion.line
            key={n.id}
            x1={CENTER}
            y1={CENTER}
            x2={n.bx}
            y2={n.by}
            stroke={active === n.id ? n.color : 'rgba(255,255,255,0.1)'}
            strokeWidth={active === n.id ? 1.5 : 1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + n.id * 0.1 }}
          />
        ))}
      </svg>

      {/* central hub */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.15 }}
        className="absolute rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: 128,
          height: 128,
          top: CENTER - 64,
          left: CENTER - 64,
          boxShadow: '0 0 60px rgba(255,145,77,0.25)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A5F95] to-[#0A042D]" />
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          <Network className="w-9 h-9 text-[#FF914D]" strokeWidth={1.75} />
        </motion.div>
      </motion.div>

      {/* hub caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute text-center"
        style={{ width: 130, left: CENTER - 65, top: CENTER + 76 }}
      >
        <span className="text-white/70 text-[9.5px] font-bold uppercase tracking-[2px]">
          Pakistan&apos;s HR Network
        </span>
      </motion.div>

      {/* category badges + labels */}
      {nodes.map((n, i) => {
        const NodeIcon = n.Icon;
        return (
          <div key={n.id}>
            <motion.button
              type="button"
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive(null)}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.4 + i * 0.08 }}
              whileHover={{ scale: 1.12 }}
              whileFocus={{ scale: 1.12 }}
              className="absolute rounded-full flex items-center justify-center transition-colors duration-300"
              style={{
                width: 54,
                height: 54,
                left: n.bx - 27,
                top: n.by - 27,
                background: active === n.id ? `${n.color}26` : 'rgba(255,255,255,0.03)',
                border: `1.5px solid ${active === n.id ? n.color : 'rgba(255,255,255,0.12)'}`,
                boxShadow: active === n.id ? `0 0 22px ${n.color}55` : 'none',
              }}
            >
              <NodeIcon className="w-5 h-5" style={{ color: n.color }} strokeWidth={1.75} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
              className="absolute flex flex-col items-center text-center pointer-events-none"
              style={{ width: 96, left: n.lx - 48, top: n.ly - 15 }}
            >
              <span className="text-[13px] font-extrabold leading-none" style={{ color: n.color }}>
                {n.percent}%
              </span>
              <span className="text-[8.5px] text-white/55 font-semibold leading-tight mt-1">
                {n.label}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scrolling credits marquee                                           */
/* ------------------------------------------------------------------ */
function CreditsMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative mt-5 w-full max-w-md overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] py-2.5">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A042D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A042D] to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-8 whitespace-nowrap px-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-[13px] text-white/60 font-medium flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#FF914D] shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export default function WhoAttendsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  const credits = [
    'Chief Strategy Officer @ Jazz',
    'Director People @ S&P Global',
    'Director HR Business Partnering @ Telenor',
    'Country Director @ Teradata',
    'Group VP Business Growth @ PTCL',
    'Head of People & Culture @ Wateen',
    'Head Talent & Org. Development @ HBL',
    'Founder @ Socio Engineering Technologies',
    'General Manager @ NUST PDC',
    'Communications Consultant @ AdVentures',
    'Founder @ AdVentures',
    'Co-founder @ Carnelian',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A042D] py-16 md:py-20 border-b border-border-default z-10"
    >
      {/* layered ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_12%_15%,rgba(26,95,149,0.28),transparent),radial-gradient(ellipse_700px_500px_at_92%_85%,rgba(255,145,77,0.14),transparent)]" />
      <Starfield count={55} />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">
        {/* Left column — copy */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-[3px] text-[#FF914D] mb-2"
          >
            The Room
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-[28px] md:text-[38px] font-extrabold text-white leading-[1.05] tracking-[-1px]"
          >
            Who&apos;s in the{' '}
            <span className="bg-gradient-to-r from-[#FF914D] to-[#FFB78A] bg-clip-text text-transparent">
              Room
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-white/50 mt-2.5 max-w-sm"
          >
            Pakistan&apos;s most senior HR community. All in one evening.
          </motion.p>

          {/* Stats row — tight, no dead air */}
          <div className="mt-6 flex items-stretch">
            <div className="pr-5">
              <StatItem value={500} suffix="+" label="Attendees" start={isInView} delay={0.15} />
            </div>
            <div className="px-5 border-l border-white/[0.08]">
              <StatItem value={50} suffix="+" label="Leaders" start={isInView} delay={0.2} />
            </div>
            <div className="pl-5 border-l border-white/[0.08]">
              <StatItem value={10} suffix="+" label="Speakers" start={isInView} delay={0.25} />
            </div>
          </div>

          <CreditsMarquee items={credits} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <a
              href="#register"
              className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#FF914D] to-[#FF6B00] text-white px-7 py-3 rounded-full font-bold text-[15px] overflow-hidden group hover:shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Reserve Your Seat{' '}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute top-0 left-0 w-[30%] h-full bg-white/20 skew-x-12 -translate-x-[150%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out pointer-events-none" />
            </a>
          </motion.div>
        </div>

        {/* Right column — orbit visualization */}
        <div className="lg:col-span-7 flex items-center justify-center overflow-visible">
          <OrbitVisual isInView={isInView} reduceMotion={!!reduceMotion} />
        </div>
      </div>
    </section>
  );
}