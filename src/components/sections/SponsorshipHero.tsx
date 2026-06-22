/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Download, Award, Target, Landmark, Building2, BarChart2 } from 'lucide-react';
import InteractiveButton from '../ui/InteractiveButton';
import AmbientOrb from '../ui/AmbientOrb';

export default function SponsorshipHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleActionRequest = (type: string) => {
    alert(`System Message: Sponsoring request for "${type}" registered. Official executive prospectus and slot details have been queued for transport.`);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-[#050505] pt-32 pb-16"
      id="sponsorship-hero"
    >
      {/* Visual Canvas Elements */}
      <div className="absolute inset-0 grid-bg opacity-[0.22] pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay opacity-[0.12] pointer-events-none z-0" />

      {/* Radial soft lighting anchor */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-[200px] bg-gradient-to-r from-[#D4AF37]/5 via-[#00C2FF]/3 to-transparent transition-all duration-500 z-0"
        style={{
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />

      <AmbientOrb color="gold" size="xl" className="left-[-10%] top-[-10%] opacity-20" delay={0} />
      <AmbientOrb color="cyan" size="lg" className="right-[-5%] bottom-[5%] opacity-25" delay={3} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center text-center">
        
        {/* Executive Header Sub-Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full backdrop-blur-md mb-8 inline-flex"
        >
          <Award size={14} className="text-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-semibold uppercase">
            Exclusive Collaboration Portfolio 2026
          </span>
        </motion.div>

        {/* Dynamic Executive Typography Header */}
        <div className="max-w-4xl flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-fill-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            Sponsor <span className="text-[#D4AF37]">TECH AURA 2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl md:text-2xl font-light text-[#B5B5B5] max-w-3xl leading-relaxed mb-4 text-glow-gold"
          >
            Partner with one of India's emerging innovation ecosystems and connect directly with future innovators, researchers, startups, and talent.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed mb-10"
          >
            Accelerate corporate visibility, establish key memorandums of understanding (MoU), execute strategic on-ground recruiting campaigns, and support high-impact R&D.
          </motion.p>

          {/* Action Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <InteractiveButton
              variant="primary-gold"
              size="lg"
              onClick={() => handleActionRequest('Strategic Partnership')}
            >
              Become Partner Sponsor
            </InteractiveButton>

            <InteractiveButton
              variant="glass"
              size="lg"
              icon={<Download size={16} className="text-[#D4AF37]" />}
              onClick={() => handleActionRequest('Download Prospectus Deck')}
            >
              Download Sponsorship Deck
            </InteractiveButton>
          </motion.div>
        </div>

        {/* Bottom trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-20 pt-8 border-t border-white/[0.05]"
        >
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl text-[#00C2FF]">
              <Landmark size={18} />
            </div>
            <div className="text-left">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Ecosystem Footprint</span>
              <span className="text-xs font-semibold text-white tracking-wide">28 States Represented</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center">
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl text-[#D4AF37]">
              <ShieldCheck size={18} />
            </div>
            <div className="text-left">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Innovation Scale</span>
              <span className="text-xs font-semibold text-white tracking-wide">250+ Innovation Teams</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center sm:justify-end">
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl text-[#00C2FF]">
              <BarChart2 size={18} />
            </div>
            <div className="text-left">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Participant Pool</span>
              <span className="text-xs font-semibold text-white tracking-wide">15,000+ Active Students</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
