'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Search } from 'lucide-react';

const allSpeakers = [
  {
    name: 'Majid Almegil',
    role: 'Chief Technology Officer',
    company: 'Innovation Hub',
    type: 'Keynote Speaker',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuHkSGDJTaWIZcX99EYZM5wrzf3eDoGKeTCObbgfN71EN-O6xCsbqM0QfN8amCzUR7C694lnJXCfjytYAeh0HtYbVqgocxSJkHtRESWCBn9RlLpb9mbwPbPO3BNDO785dQ3cxLG1wsmJRtlCZYIrrFrGoyuhqFIvDDFNNGaZGN2PzQNQYUb7u1DUsW6v2abSaRxQ0Ygs2u9fYdr7wIYxvzx4MAlFQpe1zQWsRaiQLR6vCYQXrWyUP3Ao0I1',
  },
  {
    name: 'Huda Al-Abbar',
    role: 'Director of AI Strategy',
    company: 'Global Data Corp',
    type: 'Panelist',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsTGwUmWDh3hnP2pQhIRrCnjvPnLHCC-gSMfYZhd6EDF0PybYnCLszVHRGgji4m-vjge373GYoH9ApxGeOVoaMGsoGZAj6nx4ZGIhX3xiVQxuKjxeCJ3GGCD2CA81Tt3drdTAPIiNEkQG4P_xmbArtL5U1Tvb5lHyMymKmWhyHV3RAXY_WzrKf6zx17YA3yC1wazBdmgKtXMXVq4K7ZqAiOOZ4-dMv8KzFx9Ht3S0wrFMbMAQVIj0QNhUw',
  },
  {
    name: 'Azzah AlSharhan',
    role: 'Head of People & Culture',
    company: 'Future Talent Systems',
    type: 'Workshop Lead',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsbGwy7B_ac7TPSJ617BPlOssifbIcfGyj8Lh25UbOZ40UMSUUFoCOLWskS_3RIoD8oWzIrhm76oMAPmhmt6f4bMN1BFcs6TTjWPw5Eo_t2mKiWkDXZJ2mtICdHF3okmFU8OYvpYIpwWcNNBHl7PngWNxxQWPphZioZM2e7dbMpZkWzq9H85Fttm62VPYPHZrZCzOiKgRKfdD9vQtxfvcXUdyV1-6UgwiZLcPWrRlWpQWNGHWaHTg6J377o',
  },
  {
    name: 'Marie-Louise Ek',
    role: 'VP HR EEMEA',
    company: 'Hilton Worldwide',
    type: 'Keynote Speaker',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLtlg1OQG9DoPN_0t1g7Vg0nsPXj6ngEeWITLi1kVymjG4StOO9StnjzKEo8f_aZ5oE8__9A_xg77i5orXhoz44XkSBR_J4V8wDyFU46-E71AQNg_-xzdrmdV4TUZxfxOmyctqMQTbpoLnhrRajRwjdbVlZuNwUGoOcORluC-uBTT-quCbyn7Kc4qYGaLjEiuY7mRjieAA51t-wSAacoCBN1MEFTd-EaiqoibLFp6-8wYpb0u2zEWB0Ud4I',
  },
  {
    name: 'Nate Busa',
    role: 'Founder & CEO',
    company: 'Quantum Logic',
    type: 'Panelist',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLttEifia0nqwLGoaTwkMmH6DR6JLEztvVjj1yuGOSkxi1g7TXZnp1XT9dMHcRzh44aaOEeouwMYWy5Tw9_RUoIhf_S0w_28mzU_xTzi7NpQZpl56xhCq0FxMn4Zv2XkFwHZcpauqlGwzaGWlygv2eYrTcL65pd9Sy4pjGGHNAopalaXb-mYWKgLzKbAnMp9voqm1Pkh5X6bqqpsOxwAnFcFFh-OR7O1QelmAXuRUmB3YtxXBmoW8gd2Bi1d',
  },
  {
    name: 'Betul Yalcin Emlek',
    role: 'Sr. HR Business Partner',
    company: 'Tech Dynamics',
    type: 'Panelist',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLu0kW9d4STxlvKhGwnMRYb8ncYKR-x9RBhPf3t4UjVFhWZefnfklmN7oDFlo8C27chi5N1IBamIdBFoEYTYHmoUG3WdE0ozV7cFe59ZnQ6HBxNuSicHRoI2aFF7dAHSpuN9HzQSmjsssLzA3PAgj8dzj6r4F9-yhZW_tXtlH0yxeSZuLjqj8O7gCDTya61bwKhFwJZ-dBQRX1RonsQIY0CHIwaZqrRz-A3ZN-3gCsYCqbhg0YxfjPlBb_20',
  },
  {
    name: 'Jacob Jacob',
    role: 'Chief People Officer',
    company: 'Miral Asset Management',
    type: 'Keynote Speaker',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLswMyX9f5SV_WUiMuoFzWrtFJX2IDOhI-Upyl3xRXkr0RVii_u9SSfCCAf5tduuFVoqQtI4rKTadGbtzKcy4vKhvRvOtAS2loBlEfFyISEMnFD5SK_gdeMayARTSMOULMWyt9xwhVIAQp3pBPKPS4tQZ6tqa9bE0Ke4Sk8Mnhvs4ON-c3AcyYAq7AHopHsVX1rUYZhobR5Hk_EHnNOCTHodkfGEjzx806A8ZXipWlDYpXsDGKFdLV1s_6Mn',
  },
  {
    name: 'Yusra Baqi',
    role: 'VP Human Capital',
    company: 'Aramco Digital',
    type: 'Workshop Lead',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLshadgfGBVOSsLq-q6jhnvlyPiP17WHHNe3RK4bZX2BmkzE4W3qUQq3xIQLFx2aMFcVWDtDErkbcTFnd0mODNTF_56ESQ7hSxn7oDCwYAmsfgHZR8dGCmSIRLTIrm_piAIFnfO1KylDEKxp-C-tKS6OFRC6l-HQ1Twu3kLEJ3XkKh9-uCLhUUQQrlNJD3GgvYFtzxsqaYdf5Wh0NLkJXQf0HdlMbzTArP5jhTBMYd_P3QK0_cwREtmCsCoj',
  },
];

const filterCategories = ['All', 'Keynote', 'Panel', 'Workshop'];

export default function SpeakersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpeakers = allSpeakers.filter((speaker) => {
    const matchesFilter =
      activeFilter === 'All' ||
      speaker.type.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-surface-container-lowest">
      <Navbar />

      <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="font-display-md text-display-md mb-4 text-white">
            Meet the <span className="text-primary">Visionaries</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
            The global stage for leaders, thinkers, and innovators. Join the architects of the future as they share insights that redefine industries.
          </p>
        </motion.header>

        {/* Search and Filters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center mb-12"
        >
          <div className="flex gap-6 border-b border-border-default w-full md:w-auto">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-label-caps text-label-caps py-4 uppercase transition-all ${
                  activeFilter === category
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-muted hover:text-on-surface'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80 group">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-secondary-container"
            />
            <input
              className="w-full bg-surface-container-low border border-border-default rounded-lg pl-12 pr-4 py-3 text-on-surface focus:outline-none focus:border-secondary-container transition-all"
              placeholder="Search speakers..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.section>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-surface border border-border-default p-8 rounded-xl transition-all duration-300 hover:border-primary-container/40 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] hover:-translate-y-1"
            >
              <div className="mb-6 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-border-default group-hover:border-primary-container transition-colors duration-500">
                  <img
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={speaker.image}
                  />
                </div>
              </div>
              <div className="text-center">
                <span className="font-label-caps text-label-caps text-secondary-container uppercase mb-2 block">
                  {speaker.type}
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-1 group-hover:text-primary transition-colors">
                  {speaker.name}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted">{speaker.role}</p>
                <p className="font-body-sm text-body-sm text-primary font-bold">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-surface border border-border-default rounded-2xl p-12 overflow-hidden relative"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                Want to Join the Stage?
              </h2>
              <p className="font-body-md text-body-md text-text-muted max-w-xl">
                We are always looking for visionary leaders to share their journey. Submit your proposal for the next global summit.
              </p>
            </div>
            <button className="border border-secondary text-secondary px-8 py-4 rounded font-bold hover:bg-secondary/10 transition-all uppercase tracking-widest text-sm whitespace-nowrap">
              Apply to Speak
            </button>
          </div>
        </motion.section>
      </div>

      {/* Call for Speakers Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 bg-surface-container-lowest relative overflow-hidden border-t border-border-default"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-margin-mobile relative z-10">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block tracking-[0.3em]">
              Call for Speakers
            </span>
            <h2 className="font-display-md text-headline-lg md:text-display-md text-white mb-6">
              Join the Stage
            </h2>
            <p className="text-text-muted font-body-lg max-w-2xl mx-auto">
              Share your expertise with Pakistan's HR leaders. We're looking for innovative topics and visionary perspectives.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface p-8 md:p-12 rounded-2xl border border-border-default shadow-2xl">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">Full Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="w-full bg-surface-container-low border border-border-default rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">Professional Title</label>
              <input
                type="text"
                placeholder="e.g. Chief People Officer"
                className="w-full bg-surface-container-low border border-border-default rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container transition-all"
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-label-caps text-label-caps text-text-muted uppercase">Company</label>
              <input
                type="text"
                placeholder="e.g. Global Tech Solutions"
                className="w-full bg-surface-container-low border border-border-default rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container transition-all"
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
                className="w-full bg-surface-container-low border border-border-default rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container transition-all resize-none"
                required
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-primary-container text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] active:scale-[0.98] transition-all uppercase tracking-widest"
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
