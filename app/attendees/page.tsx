'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Search, Link as LinkIcon, Mail, ArrowRight } from 'lucide-react';

const attendees = [
  {
    name: 'Sarah Ahmed',
    role: 'Chief Technology Officer',
    company: 'Telenor Pakistan',
    sector: 'Telecom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOt3mdqLnpM4Yylo-ZeXnqCE7EG4IGRdMvNXPy2Dh8GxrCzzRyXOyM1ijCreJFLK2Hz42-wUxsESU1lYlCyBNpWO5au-u9buncY2bwEViHBsZb6B6Ui-K_RbzXEpe9-nveZGsyIG800CaKTe1DH4Zx7roQ0HMbbyVlRVt5T5KsDK4FtM1ZyAtLY0iOaviY28PfHIa2IYVm4p7CRKWY4BtlQALEKtuBn3epXLcBC02bETwmInD_nhsMr9nxB8rJ0Lsw-EP0TZtKp-dv',
  },
  {
    name: 'Bilal Khan',
    role: 'Founder & CEO',
    company: 'Nexus Venture Partners',
    sector: 'Finance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC-trjnLa4_WhdIxn4TUTNZTdDy8nTuNkYlnj3wH3L7Itjn8pPJAUquf1Zs1oo-8HHecXs2ZP_-JTSqqL6HrkAZyr6_WaJ-RAceWTZDBbQtPj5vTV3j3kBeh17jqTXZeBoXjogSK9gXoe0rJyDCZnUIcyq6s_7lCrLAnQzyRA8B3J5zGcjwfC6IJNJm_6ErDMUDvx7XxwcEKuY1b9doFvcgMloHB7pZdFABlKJyNBFAA1hTnGs9gRpYHZOLG7UQp1NNYEs62GCED25',
  },
  {
    name: 'Amina Qureshi',
    role: 'Head of Digital Banking',
    company: 'Standard Chartered',
    sector: 'Finance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJmAzd-d5NUIycySlTFVfh_y9QuqRhnKlDIHa1C9RikrHUdbdTHX-UQhCquJG_3bjHR7im4SvZ6YpLiBB63fVUvhuyMEX1igxzWttZsLYcnCs-Aw0vLWc7AqbF-wLQnyA4KZ0H6MQjvmPH8iw7R-tZa_EpohagHE7VmvnPw-LfgOjfoJfdKYAKcWMdy6jbIjtA1IzsH-YtW2P_jzyBZx2PuvzJdbyrzYHzIBZZdMpS3l-BeHN4BGwZi8jP84cZECOlot0VmKk185qw',
  },
  {
    name: 'Zain Malik',
    role: 'Director of Innovation',
    company: 'Huawei Pakistan',
    sector: 'Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gAcO-diytuhltL3Vd4ahEs7pZZK8gRDMQzC_JL06PqtXOJ1xHJ0lC9aiYIROiof-9c3IyPRhh0kqhhNXGKlll3UiDEEu_K4kiLbaeXQEP7eFXHyqF63GPUYO1Aeb-pnEA1FItihTJAWug7F3QC-XpGcAkDJGlcwsA3_lyhbmM_SOb17FQM9A7Tr5yNm87hEI5up1HP0ak6N8Gf8USqBrrm3s8nWuBcR5D4emQ8E5XLRmJ3EkzmI3vOo28UKtNPGR60U5jBP4gghj',
  },
  {
    name: 'Dr. Omar Farooq',
    role: 'Dean of Research',
    company: 'LUMS',
    sector: 'Education',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0SI5HVXEC4qBR2FhWomlxTzMi2rd6anScqm2qBnL18AfhHHLyBAtYkKmxj1fsJ6tG4CObhJuVrOf5-UfvH9aVjES4hBgX3wb0ErgRk5ItPeBv6CXDTGStrjYmHkAHAnkKnIZ-LXIaxhe2zlDFHkzcuHAAtxPRkzcXXq_LcBr_lq4KUGB9mH2Q_JFhrSZj5ZHKSREokG5MSY8Qc2Ue99dO1yDg8OpfOnyw2efPj1mwRGk3CQ4yov_4GPP3UcKqjCQnHdQaJDhNr7xn',
  },
  {
    name: 'Mariam Saeed',
    role: 'Operations Lead',
    company: 'Graana.com',
    sector: 'Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq2TpZppYFiJMBmWu0s-CnS8b3w9aHjsptFgO1WaynE6x3iOMHINtM_tiEbkGDaaAGfYSQCxWizA199eSlMUWtDcFn1oBghPSfIPBED8xse8YcC20-b_yvzKmjNngreFjbIzqnn15TdAETSmIjnjYNCHrMssyDBT31McpCPzhF90uEGHgMC_7DM3FmWrm8ha6n007Ti7VUtQjXSr6Xo2uHH9t9SVPsVX8kuliSz5E_n8mfoFHR6pN87OstiK3Cvsa8v7MIG222geh-',
  },
  {
    name: 'Hamza Ali',
    role: 'VP People & Culture',
    company: 'Jazz Pakistan',
    sector: 'Telecom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrmQ-KTRLsSYviP7zV-_lTmLehfn6PbRIqYDvu9MUGlwwNCAQ1HQHGnxlqeTp80vciq8vZ5AVVEaUfz9UOFSeVdmR9Ptrqkq2tFT1iplLFwWA7Ii6Ly7qGdL8NPOQln90RX12WAwLZDOHAbuE9ljyyc6EvHumrV5EgX5ljSA84mpIUrwi1wO8HGn9II2jpEelnlHVlwKDP3gmg6nB9D3JihK-aLO8EEa72dugdkTMIT_wIwrII-67lM4sSmJMNEnHvefpEttdXSXKN',
  },
  {
    name: 'Fatima Jinnah',
    role: 'Country Representative',
    company: 'The Asia Foundation',
    sector: 'Education',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxrhjD5HBwoysYgGzYOevxptx5wab8gKUn1tOxy-bCFIJS2O0di1rUSf6X-xEC4VKT1LZRZwJ1a3AsoLDdCLhU8hWmkLwyjr6KnPyfRr963oUxDI85WnkYlPUXJHLd-OmOvYK3sW8JAqE6Msit0mrov1VXDovNLMHf6ekslL6RwQ96uCQQanD3NQfaQQhZohCcEfIBYB8SSgyzH_2rBSt8jJjuNi8rcs6EjSWkMPPQAp9VpicsYYMM56VR7WNXkQ61Qk3jZCjjdz5P',
  },
];

const sectors = ['All sectors', 'Telecom', 'Finance', 'Tech', 'Education'];

export default function AttendeesPage() {
  const [activeSector, setActiveSector] = useState('All sectors');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSector =
      activeSector === 'All sectors' || attendee.sector === activeSector;
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-headline-lg text-headline-lg md:text-display-md mb-4 text-on-surface">
            Who Attends <span className="text-primary-container">NEXT</span> Summit
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted">
            Connect with visionaries, C-suite executives, and disruptive innovators from Pakistan's most prestigious organizations and global tech giants.
          </p>
        </motion.header>

        {/* Search & Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 sticky top-24 z-40"
        >
          <div className="glass-panel p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xl bg-surface/70 backdrop-blur-md border border-border-default">
            <div className="relative w-full md:w-1/3 border border-border-default rounded-lg bg-surface-container-lowest transition-all focus-within:border-secondary-container">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                className="w-full bg-transparent border-none focus:ring-0 pl-10 pr-4 py-2 text-on-surface placeholder:text-text-muted font-body-md outline-none"
                placeholder="Search by name, title, or company..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveSector(sector)}
                  className={`${
                    activeSector === sector
                      ? 'bg-primary-container text-white'
                      : 'border border-border-default hover:border-primary-container text-on-surface'
                  } font-label-caps text-label-caps px-4 py-2 rounded uppercase tracking-widest transition-colors`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Attendees Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {filteredAttendees.map((attendee, index) => (
            <motion.div
              key={attendee.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-surface border border-border-default p-6 rounded-xl transition-all duration-300 hover:border-primary-container/40 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 mb-6 p-1 rounded-full border-2 border-primary-container/20 group-hover:border-primary-container transition-colors duration-500">
                <img
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={attendee.image}
                  alt={attendee.name}
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                {attendee.name}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary mb-1">{attendee.role}</p>
              <p className="font-label-caps text-label-caps text-text-muted uppercase tracking-[2px] mb-6">
                {attendee.company}
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="#" className="text-text-muted hover:text-on-surface transition-colors">
                  <LinkIcon size={18} />
                </a>
                <a href="#" className="text-text-muted hover:text-on-surface transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 bg-transparent border border-secondary-container text-secondary-container font-bold overflow-hidden transition-all duration-300 rounded-lg hover:bg-secondary-container/10">
            <span className="relative z-10">Load More Attendees</span>
          </button>
          <p className="mt-4 text-text-muted font-body-sm">Showing 8 of 500+ attendees</p>
        </div>
      </div>

      {/* Become the Next Attendee */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 relative overflow-hidden bg-surface-container-lowest border-t border-border-default"
      >
        <div className="absolute inset-0 radial-glow pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-margin-mobile text-center relative z-10">
          <h2 className="font-display-md text-display-md mb-4 text-white">
            Become the <span className="text-primary-container">Next</span> Attendee
          </h2>
          <p className="text-text-muted text-lg mb-10 font-body-md max-w-xl mx-auto">
            Join the ranks of Pakistan's top tech and HR leadership. Secure your place at the most influential gathering of the year.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 glass-panel rounded-xl max-w-4xl mx-auto border border-border-default focus-within:border-primary-container/40 transition-colors bg-surface/70 backdrop-blur-md">
            <input
              className="w-full bg-surface-container border border-border-default rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all outline-none"
              placeholder="Full Name"
              required
              type="text"
            />
            <input
              className="w-full bg-surface-container border border-border-default rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all outline-none"
              placeholder="Work Email"
              required
              type="email"
            />
            <input
              className="w-full bg-surface-container border border-border-default rounded-lg px-4 py-3 text-white placeholder:text-text-muted focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all outline-none"
              placeholder="Job Title"
              required
              type="text"
            />
            <button
              className="w-full bg-primary-container text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,107,0,0.2)]"
              type="submit"
            >
              Join Today
            </button>
          </form>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
