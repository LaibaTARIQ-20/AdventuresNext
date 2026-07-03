'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Search } from 'lucide-react';

const allSpeakers = [
  {
    name: 'Ali Naseer',
    role: 'Chief Strategy Officer',
    company: 'Jazz',
    type: 'Keynote Speaker',
    image: '/speakers/alinaseer.png',
  },
  {
    name: 'Samia Qamar',
    role: 'Director, People',
    company: 'S&P Global',
    type: 'Keynote Speaker',
    image: '/speakers/samia.png',
  },
  {
    name: 'Tahira Khattak',
    role: 'Director HR Business Partnering',
    company: 'Telenor',
    type: 'Keynote Speaker',
    image: '/speakers/tahira.jpg',
  },
  {
    name: 'Haroon Kanth',
    role: 'Country Director',
    company: 'Teradata Global',
    type: 'Panelist',
    image: '/speakers/haroon.png',
  },
  {
    name: 'Amjad Iqbal',
    role: 'Group VP Business Growth Partners',
    company: 'PTCL',
    type: 'Panelist',
    image: '/speakers/amjad-iqbal.jpg',
  },
  {
    name: 'Sana Hassan',
    role: 'Head of People & Culture',
    company: 'Wateen',
    type: 'Panelist',
    image: '/speakers/sana-hassan.jpg',
  },
  {
    name: 'Abdul Khaliq Khan',
    role: 'Head Talent & Org. Development',
    company: 'HBL',
    type: 'Keynote Speaker',
    image: '/speakers/abdulkhaliq.jpg',
  },
  {
    name: 'Sonia Saleem',
    role: 'Founder',
    company: 'Socio Engineering Technologies',
    type: 'Panelist',
    image: '/speakers/soniasaleem.jpg',
  },
  {
    name: 'Muhammad Ali',
    role: 'General Manager',
    company: 'NUST PDC',
    type: 'Workshop Lead',
    image: '/speakers/muhammadalikhan.jpg',
  },
  {
    name: 'Erum Rizvi',
    role: 'Communications Consultant',
    company: 'AdVentures',
    type: 'Workshop Lead',
    image: '/speakers/erumrizvi.jpg',
  },
  {
    name: 'Parvez Abbasi',
    role: 'Founder',
    company: 'AdVentures',
    type: 'Keynote Speaker',
    image: '/speakers/parvezabbasi.jpg',
  },
  {
    name: 'Kamran Z. Rizvi',
    role: 'Co-founder',
    company: 'Carnelian',
    type: 'Keynote Speaker',
    image: '/speakers/kamranrizvi.png',
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
                className={`font-label-caps text-label-caps py-4 uppercase transition-all ${activeFilter === category
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
