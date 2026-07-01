'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface SessionSpeaker {
  name: string;
  role?: string;
  image: string;
}

interface Session {
  time: string;
  period: string;
  type: string;
  location: string;
  title: string;
  description?: string;
  speaker?: SessionSpeaker;
  speakers?: SessionSpeaker[];
  extraSpeakers?: number;
  isDashed?: boolean;
}

const scheduleData: { day1: Session[]; day2: Session[] } = {
  day1: [
    {
      time: '09:00',
      period: 'AM EST',
      type: 'Keynote',
      location: 'Main Hall',
      title: 'The Quantum Frontier: 2025 and Beyond',
      speaker: {
        name: 'Dr. Aris Thorne',
        role: 'Chief of Strategy, Quantix Labs',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Nh32KCc-MFSmbMbTx6rcRmdYHI5xqoq17b7bwrIHAAwyuteg3rLI4lqE7Y9XWAOFMxIwXbQzhM8wFiu7bbdH2e_aOrr9eGtiK5JX7OuLvLEiUKSCbenq-D_MQNYyaeqb3QUCXOmY101oRX4fME_84lbRkJim9Gj_6T5q9zmvWP17LO1vEIy-yU8i5kZD39gLVze6-NTV1_jChxhtr317vHW_p_AUanD1lcSsKbsiLsApU52qUBdgMne-N3ButR9xVKuHaIoKABvH',
      },
    },
    {
      time: '10:30',
      period: 'AM EST',
      type: 'Panel',
      location: 'Studio A',
      title: 'Ethical AI: Governing the Unstoppable',
      description: 'A deep-dive discussion into the legislative and moral frameworks required for the next generation of LLMs.',
      speakers: [
        {
          name: 'Marcus Chen',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByy0dfn7VMUaeksnTTiBX6QYfIcHoVr7kFRL_X-A_C2tAF4jCNayqDPZGfebFjCDnAN_JOETvO4jKlzOtfcQW53_S9nN9f2ddli9wXanQO709TTdaOSsAg8EXEZnenDQ0LJSzk6tyfN7o9oX84T_gh3Ps2YZu6OcEgarXkYxy8HePWXV7Q3uDizUrKJuch7qL8tG-Xu0RzxDtktCRvXhBZU-7ON0y5uDOTxQ0c_ixxcQGCtv5Sz_6bMKlc32uyarAF-SXBX3BKPh7x',
        },
        {
          name: 'Elena Vasquez',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnUsW3kF7XhzWMycUcvF5T-RgHKsgT3GWAQJtEmjKUYm4pP4ST5WYUl8knWOTZxN_gdMUDqhVbr2xe_-oyVdCqQ_JX_WzOBsibjfADQgye61kqk_gQLChPbw0hmz4oXbcU-JsleDpAbRoh7NtYxTIA-p6i5ZjXtYGlMOC6piV0Z8uq50x1RY41r6rqonPQ4CpsayFrqg-AUaW7349q8gia0mnaSrayY6PAHzlRRUNCC16pDwfKBxKZ3zmZIHQ86zbGMEWlrIBtTdt4',
        },
        {
          name: 'David Park',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSO5grGyfc0TpYOHwKTXJf4QEuKvhib63h7oIHOlEzeIGKzMHUPXYA_vfpntIgnBWLWOCN4CzACgd7E1-lABWJ2Dm2u6R_rGvXVLTwakbzwsJqBv_bbFtypYSqCzZv3rzpPaAIUH_mWCDZFUXVR3dqSZau9JqWWJLXh7KobUUgorWYb5c7SPT0l-m0bpPt4whtywUDfcbcUyKugpLHUGFSrpzsw-nxv7loodOOo8EMDISFnGJ-bPgWuCUeRIEdMi9CMOPL2fP-N5AD',
        },
      ],
      extraSpeakers: 2,
    },
    {
      time: '12:30',
      period: 'PM EST',
      type: 'Networking',
      location: 'Roof Terrace',
      title: 'Venture Connect: Founders & Funders',
      description: 'Casual catered lunch and open-floor networking for registered VIP ticket holders.',
      isDashed: true,
    },
    {
      time: '02:00',
      period: 'PM EST',
      type: 'Workshop',
      location: 'Innovation Lab',
      title: 'Rust for Enterprise Web3',
      speaker: {
        name: 'Marcus Vane',
        role: 'Senior Architect, CoreChain',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKPNGbF8Qii1vZEQIuFSkvubgPkI076zIIHpwTwc_UlEtCKNATnGBQC7OwUzp45lf1NpLdZJtvSBFIre1qSIiP5KF4ZK15AiEAgXnrcdPMaKYNceZe0KUwC3yHRWnU8naLBFhQMyqCwCJSvaYQvIl-ylPAuAFRU_UyWhwM3t1Ef2IkuLK6U1PAFB2xEqsHS7JrMIA4vXOI_V2m5wuDdvgfcyeIcthewUl-d-m-9xasB7jcXK5u8Fzh3cCenf0hnvS3yBmQp8BnUN4B',
      },
    },
  ],
  day2: [
    {
      time: '09:00',
      period: 'AM EST',
      type: 'Keynote',
      location: 'Main Hall',
      title: 'The Future of Remote Work in Pakistan',
      speaker: {
        name: 'Sara Ahmed',
        role: 'HR Director, Tech Global',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLv4vXDOzLtwMpVteBVoZQ3MSPZMejnwnTcy0Pr0oZL8mb8OoHldivDacEpNgtARy_TRLaEBkehmUmhfE9nubsdLju0FVI6z3lnZ5jNNbW-GJ-6DaeKeUW8mQ1KtHtvjNL-aNRXjYNZFdl1XMvQXId95s9qjrFG92mvAV_08SNtcJUI0C0doyhgqJ7jX9SvFECUnLe1ywAbxzT06W1taajZJvK3MI9nAvTXwkLnI3bmp17IQpMsOnCAzjhjm',
      },
    },
    {
      time: '11:00',
      period: 'AM EST',
      type: 'Panel',
      location: 'Studio B',
      title: 'Building Inclusive Workplaces',
      description: 'A conversation about diversity, equity, and inclusion in modern organizations.',
      speakers: [
        {
          name: 'Fatima Khan',
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLsTGwUmWDh3hnP2pQhIRrCnjvPnLHCC-gSMfYZhd6EDF0PybYnCLszVHRGgji4m-vjge373GYoH9ApxGeOVoaMGsoGZAj6nx4ZGIhX3xiVQxuKjxeCJ3GGCD2CA81Tt3drdTAPIiNEkQG4P_xmbArtL5U1Tvb5lHyMymKmWhyHV3RAXY_WzrKf6zx17YA3yC1wazBdmgKtXMXVq4K7ZqAiOOZ4-dMv8KzFx9Ht3S0wrFMbMAQVIj0QNhUw',
        },
        {
          name: 'Ali Raza',
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLswMyX9f5SV_WUiMuoFzWrtFJX2IDOhI-Upyl3xRXkr0RVii_u9SSfCCAf5tduuFVoqQtI4rKTadGbtzKcy4vKhvRvOtAS2loBlEfFyISEMnFD5SK_gdeMayARTSMOULMWyt9xwhVIAQp3pBPKPS4tQZ6tqa9bE0Ke4Sk8Mnhvs4ON-c3AcyYAq7AHopHsVX1rUYZhobR5Hk_EHnNOCTHodkfGEjzx806A8ZXipWlDYpXsDGKFdLV1s_6Mn',
        },
      ],
      extraSpeakers: 3,
    },
    {
      time: '02:00',
      period: 'PM EST',
      type: 'Workshop',
      location: 'Innovation Lab',
      title: 'Design Thinking for HR',
      speaker: {
        name: 'Zain Malik',
        role: 'Design Lead, Creative Hub',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLshadgfGBVOSsLq-q6jhnvlyPiP17WHHNe3RK4bZX2BmkzE4W3qUQq3xIQLFx2aMFcVWDtDErkbcTFnd0mODNTF_56ESQ7hSxn7oDCwYAmsfgHZR8dGCmSIRLTIrm_piAIFnfO1KylDEKxp-C-tKS6OFRC6l-HQ1Twu3kLEJ3XkKh9-uCLhUUQQrlNJD3GgvYFtzxsqaYdf5Wh0NLkJXQf0HdlMbzTArP5jhTBMYd_P3QK0_cwREtmCsCoj',
      },
    },
  ],
};

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'keynote':
      return 'bg-primary-container/10 border-primary-container/20 text-primary-container';
    case 'panel':
      return 'bg-tertiary-container/10 border-tertiary-container/20 text-tertiary-container';
    case 'workshop':
      return 'bg-tertiary-container/10 border-tertiary-container/20 text-tertiary-container';
    case 'networking':
      return 'bg-secondary-fixed-dim/10 border-secondary-fixed-dim/20 text-secondary-fixed-dim';
    default:
      return 'bg-surface-variant text-on-surface';
  }
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(1);
  const currentSchedule = activeDay === 1 ? scheduleData.day1 : scheduleData.day2;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Header */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase">
              The Agenda
            </span>
            <h1 className="font-display-md text-display-md md:text-display-lg text-white leading-none">
              The Plan for NEXT
            </h1>
            <p className="max-w-2xl text-text-muted mt-4 font-body-lg text-body-lg">
              Explore the comprehensive roadmap of the world's most influential technical summit. From quantum breakthroughs to venture capital panel discussions.
            </p>
          </motion.div>
        </header>

        {/* Day Tabs */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-12 border-b border-border-default"
          >
            <button
              onClick={() => setActiveDay(1)}
              className={`pb-4 font-headline-md text-headline-md transition-all duration-300 ${
                activeDay === 1
                  ? 'border-b-2 border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Day One
              <span className="block font-label-caps text-label-caps text-text-muted mt-1 uppercase tracking-widest">
                May 24, 2024
              </span>
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`pb-4 font-headline-md text-headline-md transition-all duration-300 ${
                activeDay === 2
                  ? 'border-b-2 border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Day Two
              <span className="block font-label-caps text-label-caps text-text-muted mt-1 uppercase tracking-widest">
                May 25, 2024
              </span>
            </button>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative">
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-20 hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: activeDay === 1 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeDay === 1 ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {currentSchedule.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 relative"
                >
                  <div className="flex flex-col items-start md:items-end">
                    <span className="font-headline-md text-headline-md text-primary-container">
                      {session.time}
                    </span>
                    <span className="font-label-caps text-label-caps text-text-muted">
                      {session.period}
                    </span>
                  </div>

                  <div
                    className={`${
                      session.isDashed
                        ? 'bg-surface/50 border-dashed'
                        : 'bg-surface'
                    } border border-border-default p-8 rounded-xl transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,107,0,0.1)]`}
                  >
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span
                        className={`px-3 py-1 border font-label-caps text-label-caps rounded-full uppercase ${getTypeColor(
                          session.type
                        )}`}
                      >
                        {session.type}
                      </span>
                      <span className="px-3 py-1 bg-surface-variant text-on-surface font-label-caps text-label-caps rounded-full uppercase">
                        {session.location}
                      </span>
                    </div>

                    <h3 className="font-headline-lg text-headline-lg md:text-headline-md text-white mb-2 group-hover:text-primary transition-colors">
                      {session.title}
                    </h3>

                    {session.description && (
                      <p className="text-text-muted mb-6 max-w-2xl font-body-md text-body-md">
                        {session.description}
                      </p>
                    )}

                    {/* Single Speaker */}
                    {session.speaker && (
                      <div className="flex items-center gap-4 mt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-border-default">
                          <img
                            className="w-full h-full object-cover"
                            src={session.speaker.image}
                            alt={session.speaker.name}
                          />
                        </div>
                        <div>
                          <p className="text-white font-bold font-body-md text-body-md">
                            {session.speaker.name}
                          </p>
                          <p className="text-text-muted font-body-sm text-body-sm">
                            {session.speaker.role}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Multiple Speakers */}
                    {session.speakers && (
                      <div className="flex items-center -space-x-4 mt-6">
                        {session.speakers.map((speaker, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden"
                          >
                            <img
                              className="w-full h-full object-cover"
                              src={speaker.image}
                              alt={speaker.name}
                            />
                          </div>
                        ))}
                        {session.extraSpeakers && (
                          <span className="pl-8 text-text-muted font-body-sm text-body-sm">
                            + {session.extraSpeakers} others
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24"
        >
          <div className="bg-primary-container/5 border border-primary-container/20 rounded-xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 blur-[100px] -z-10" />
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              Don't miss a second of NEXT.
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8 font-body-lg text-body-lg">
              Limited tickets remaining for the main event and exclusive workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                Book Your Ticket
              </button>
              <button className="border border-secondary text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/5 transition-all">
                Download PDF Guide
              </button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Call for Speakers */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 bg-surface-dim border-t border-border-default"
      >
        <div className="max-w-4xl mx-auto px-margin-mobile">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block tracking-[0.3em]">
              Call for Speakers
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">Join as a Speaker</h2>
            <p className="text-text-muted font-body-lg">
              Share your expertise with Pakistan's leading HR professionals and tech innovators.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface p-8 md:p-12 rounded-xl border border-border-default">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Sarah Ahmed"
                className="w-full bg-background border-border-default rounded-lg text-white focus:border-primary focus:ring-0 py-3 px-4 font-body-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">
                Professional Title
              </label>
              <input
                type="text"
                placeholder="e.g. Head of Talent"
                className="w-full bg-background border-border-default rounded-lg text-white focus:border-primary focus:ring-0 py-3 px-4 font-body-md"
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">Company</label>
              <input
                type="text"
                placeholder="e.g. Tech Solutions Inc."
                className="w-full bg-background border-border-default rounded-lg text-white focus:border-primary focus:ring-0 py-3 px-4 font-body-md"
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">
                Proposal / Topic Description
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your proposed session..."
                className="w-full bg-background border-border-default rounded-lg text-white focus:border-primary focus:ring-0 py-3 px-4 font-body-md resize-none"
                required
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-primary-container text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Submit Proposal
              </button>
            </div>
          </form>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
