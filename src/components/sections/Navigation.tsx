/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X, ArrowRight, ArrowLeft, Award, Sparkles, Building, Briefcase } from 'lucide-react';
import InteractiveButton from '../ui/InteractiveButton';

interface NavigationProps {
  currentView: 'expo' | 'sponsor' | 'startup';
  onViewChange: (view: 'expo' | 'sponsor' | 'startup') => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const expoMenuItems = [
    { label: 'Overview', target: 'about-section' },
    { label: 'Timeline', target: 'journey-section' },
    { label: 'Domains', target: 'domains-section' },
    { label: 'Audience', target: 'audience-section' },
    { label: 'Partnerships', target: 'partnership-section' },
  ];

  const sponsorMenuItems = [
    { label: 'Benefits', target: 'why-sponsor-section' },
    { label: 'Insights', target: 'insights-section' },
    { label: 'Categories', target: 'categories-section' },
    { label: 'Matrix', target: 'benefits-matrix-section' },
    { label: 'Availability', target: 'slot-tracker-section' },
  ];

  const startupMenuItems = [
    { label: 'Packages', target: 'startup-packages' },
    { label: 'Benefits', target: 'startup-benefits' },
    { label: 'Audience', target: 'startup-audience' },
    { label: 'Why Exhibit', target: 'startup-why' },
    { label: 'Journey', target: 'startup-journey' },
  ];

  const activeMenuItems = currentView === 'expo' 
    ? expoMenuItems 
    : currentView === 'sponsor' 
      ? sponsorMenuItems 
      : startupMenuItems;

  const handleToggleView = (view: 'expo' | 'sponsor' | 'startup') => {
    setMobileMenuOpen(false);
    onViewChange(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#050505]/85 backdrop-blur-md border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Typographic Logos & Brand Cluster */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleToggleView('expo')}>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg tracking-wide text-white">TECH AURA</span>
                <span className="font-heading text-xs font-semibold px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">2026</span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-[#B5B5B5] uppercase">National Innovation Expo</span>
            </div>
            
            <div className="hidden lg:flex items-center h-8 pl-4 border-l border-white/10 gap-2.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-white/40">Partnered With</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-heading font-medium tracking-wide text-white">DOMINOVA</span>
                <span className="text-[7.5px] font-mono tracking-tight text-[#00C2FF]">INNOVATION STRATEGIC PARTNER</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.02] border border-white/5 p-1.5 rounded-full backdrop-blur-sm">
            <button
              onClick={() => handleToggleView('expo')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                currentView === 'expo' 
                  ? 'bg-white/10 text-white font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              National Expo
            </button>

            <button
              onClick={() => handleToggleView('startup')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                currentView === 'startup' 
                  ? 'bg-[#00C2FF]/10 text-[#00C2FF] font-semibold border border-[#00C2FF]/20' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Startup Exhibition
            </button>

            <button
              onClick={() => handleToggleView('sponsor')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                currentView === 'sponsor' 
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold border border-[#D4AF37]/20' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Sponsor Portfolio
            </button>

            <span className="w-[1px] h-4 bg-white/10 mx-2" />

            {activeMenuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="px-3 py-1 text-2xs font-mono text-gray-400 hover:text-white rounded-full hover:bg-white/[0.04] transition-all duration-300 cursor-pointer uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Fallback compact Nav for smaller tablet widths */}
          <nav className="hidden md:flex xl:hidden items-center gap-2 bg-white/[0.02] border border-white/5 p-1.5 rounded-full">
            <button
              onClick={() => handleToggleView('expo')}
              className={`px-3 py-1.5 text-xs rounded-full cursor-pointer ${currentView === 'expo' ? 'text-white bg-white/10' : 'text-gray-400'}`}
            >
              Expo
            </button>
            <button
              onClick={() => handleToggleView('startup')}
              className={`px-3 py-1.5 text-xs rounded-full cursor-pointer ${currentView === 'startup' ? 'text-[#00C2FF] bg-[#00C2FF]/10' : 'text-gray-400'}`}
            >
              Startups
            </button>
            <button
              onClick={() => handleToggleView('sponsor')}
              className={`px-3 py-1.5 text-xs rounded-full cursor-pointer ${currentView === 'sponsor' ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-400'}`}
            >
              Sponsors
            </button>
          </nav>

          {/* Action Button CTA */}
          <div className="hidden md:flex items-center gap-4">
            {currentView === 'expo' ? (
              <InteractiveButton
                variant="primary-gold"
                size="sm"
                icon={<ArrowRight size={14} className="text-black" />}
                onClick={() => handleToggleView('startup')}
              >
                Startup Exhibition
              </InteractiveButton>
            ) : currentView === 'startup' ? (
              <InteractiveButton
                variant="primary-gold"
                size="sm"
                icon={<ArrowRight size={14} className="text-black" />}
                onClick={() => scrollToSection('startup-final-cta')}
              >
                Book Stall Plot
              </InteractiveButton>
            ) : (
              <InteractiveButton
                variant="glass"
                size="sm"
                icon={<ArrowRight size={14} className="text-[#D4AF37]" />}
                onClick={() => scrollToSection('final-sponsor-cta')}
              >
                Contact Advisory
              </InteractiveButton>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 w-full bg-[#050505]/95 backdrop-blur-lg border-t border-white/5 md:hidden px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              
              {/* Main Routing Views */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B5B5B5] font-semibold mb-1">
                  Exposition Hubs
                </span>
                
                <button
                  onClick={() => handleToggleView('expo')}
                  className={`text-left text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    currentView === 'expo' ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>National Expo Overview</span>
                  <ChevronProgress isActive={currentView === 'expo'} color="gray" />
                </button>

                <button
                  onClick={() => handleToggleView('startup')}
                  className={`text-left text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    currentView === 'startup' ? 'text-[#00C2FF] bg-[#00C2FF]/5' : 'text-gray-400 hover:text-[#00C2FF]'
                  }`}
                >
                  <span>Startup Exhibition Hub</span>
                  <ChevronProgress isActive={currentView === 'startup'} color="cyan" />
                </button>

                <button
                  onClick={() => handleToggleView('sponsor')}
                  className={`text-left text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    currentView === 'sponsor' ? 'text-[#D4AF37] bg-[#D4AF37]/5' : 'text-gray-400 hover:text-[#D4AF37]'
                  }`}
                >
                  <span>Sponsorship Portfolio</span>
                  <ChevronProgress isActive={currentView === 'sponsor'} color="gold" />
                </button>
              </div>

              {/* Sub items of Current Active View */}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.04]">
                <span className="text-[9px] uppercase font-mono tracking-widest text-gray-500 font-medium px-3">
                  Current View Index
                </span>
                <nav className="flex flex-col">
                  {activeMenuItems.map((item) => (
                    <button
                      key={item.target}
                      onClick={() => scrollToSection(item.target)}
                      className="text-left text-sm font-heading font-medium text-gray-300 hover:text-white transition-all py-2 px-3 rounded-md hover:bg-white/[0.02]"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

            </div>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-2 py-3 px-4 bg-white/[0.01] border border-white/5 rounded-xl">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span className="text-[11px] text-gray-400 font-mono">Official Strategic Collaboration Portal</span>
              </div>
              <InteractiveButton
                variant={currentView === 'startup' ? 'primary-gold' : 'glass'}
                size="md"
                className="w-full"
                onClick={() => {
                  if (currentView === 'expo') {
                    handleToggleView('startup');
                  } else if (currentView === 'startup') {
                    scrollToSection('startup-final-cta');
                  } else {
                    scrollToSection('final-sponsor-cta');
                  }
                }}
              >
                {currentView === 'expo' ? 'Enter Startup Exhibition' : currentView === 'startup' ? 'Secure Stall space' : 'Partner Register'}
              </InteractiveButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Small helper for chevron highlight state
function ChevronProgress({ isActive, color }: { isActive: boolean; color: 'gray' | 'cyan' | 'gold' }) {
  if (!isActive) return <ArrowRight size={16} className="opacity-30" />;
  
  const colors = {
    gray: 'text-white',
    cyan: 'text-[#00C2FF]',
    gold: 'text-[#D4AF37]'
  };

  return <span className={`text-xs font-mono font-bold uppercase tracking-wider ${colors[color]}`}>ACTIVE</span>;
}
