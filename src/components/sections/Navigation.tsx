/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', target: 'hero-section', view: 'expo' as const },
    { label: 'About', target: 'about-section', view: 'expo' as const },
    { label: 'Sponsors', target: 'sponsorship-hero', view: 'sponsor' as const },
    { label: 'Startup Exhibition', target: 'startup-packages', view: 'startup' as const },
    { label: 'Downloads', target: 'insights-downloads', view: 'sponsor' as const },
    { label: 'FAQ', target: 'faq-accordions', view: 'sponsor' as const },
    { label: 'Contact', target: 'contact-section', view: 'expo' as const }
  ] as const;

  const handleNavClick = (view: 'expo' | 'sponsor' | 'startup', targetId: string) => {
    setMobileMenuOpen(false);
    if (currentView !== view) {
      onViewChange(view);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex justify-center"
      >
        <div 
          className={`w-full max-w-[1200px] flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#050505]/85 backdrop-blur-md border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Left Side: Logo */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => handleNavClick('expo', 'hero-section')}>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-sm sm:text-base tracking-tight text-white">TECH AURA</span>
                <span className="font-heading text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">2026</span>
              </div>
              <span className="text-[8.5px] font-mono tracking-wider text-[#B5B5B5] uppercase">National Innovation Expo</span>
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-3 bg-white/[0.02] border border-white/5 p-1 rounded-full">
            {menuItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view, item.target)}
                  className={`px-3.5 py-2 text-[10px] font-mono font-medium rounded-full transition-all duration-200 cursor-pointer uppercase tracking-wider ${
                    isActive 
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20' 
                      : 'text-[#B5B5B5] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Download Deck */}
            <InteractiveButton
              variant="glass"
              size="sm"
              className="border-white/10 text-white text-xs py-2 px-4"
              icon={<Download size={13} className="text-[#B5B5B5]" />}
              onClick={() => {
                window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Request%20for%20Sponsorship%20Deck";
              }}
            >
              Download Deck
            </InteractiveButton>

            {/* Become Sponsor */}
            <InteractiveButton
              variant="primary-gold"
              size="sm"
              className="text-xs py-2 px-4"
              onClick={() => {
                window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Sponsorship%20Enquiry";
              }}
            >
              Become Sponsor
            </InteractiveButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-450 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B5B5B5] font-semibold mb-1">
                Navigation Menu
              </span>
              
              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                  const isActive = currentView === item.view;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.view, item.target)}
                      className={`text-left text-sm font-heading font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                        isActive ? 'text-[#D4AF37] bg-[#D4AF37]/5' : 'text-[#B5B5B5] hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              {/* Mobile Actions */}
              <InteractiveButton
                variant="glass"
                size="md"
                className="w-full text-xs"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Request%20for%20Sponsorship%20Deck";
                }}
              >
                Download Deck
              </InteractiveButton>
              
              <InteractiveButton
                variant="primary-gold"
                size="md"
                className="w-full text-xs"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Sponsorship%20Enquiry";
                }}
              >
                Become Sponsor
              </InteractiveButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
