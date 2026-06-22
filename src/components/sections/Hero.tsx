/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, Info, Building2, GraduationCap } from 'lucide-react';
import InteractiveButton from '../ui/InteractiveButton';
import AmbientOrb from '../ui/AmbientOrb';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Hero() {
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

  const stats = [
    { value: 250, suffix: '+', label: 'Innovation Teams' },
    { value: 15000, suffix: '+', label: 'Student Audience' },
    { value: 1000, suffix: '+', label: 'External Participants' },
    { value: 75, suffix: '+', label: 'Startup Stalls' },
    { value: 28, suffix: '', label: 'States Represented' },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#050505] pt-32 pb-20"
      id="hero-section"
    >
      {/* Premium Background Layers */}
      <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay opacity-[0.08] pointer-events-none z-0" />
      
      {/* Subtle Animated Background Gradient Grid */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-black/90 pointer-events-none z-0" />

      {/* Mouse Follow Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-[180px] bg-gradient-to-r from-[#00C2FF]/3 to-[#D4AF37]/3 transition-all duration-300 z-0"
        style={{
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />

      {/* Animated Glowing Orbs */}
      <AmbientOrb color="cyan" size="xl" className="left-[-15%] top-[-10%] opacity-20" delay={0} />
      <AmbientOrb color="gold" size="lg" className="right-[-10%] bottom-[5%] opacity-15" delay={4} />

      {/* Soft Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 dark:bg-white/5 blur-[2px]"
            style={{
              width: Math.random() * 6 + 4 + 'px',
              height: Math.random() * 6 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Organizer Section above Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-2xs font-mono tracking-widest text-gray-400 dark:text-gray-400 uppercase select-none bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 py-2 px-5 rounded-full"
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Organized By</span>
            <span className="text-white dark:text-white font-extrabold flex items-center gap-1">
              <GraduationCap size={12} className="text-[#D4AF37]" /> SATHYABAMA
            </span>
          </div>
          <span className="text-gray-650 font-light hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Innovation Partner</span>
            <span className="text-white dark:text-white font-extrabold flex items-center gap-1">
              <Building2 size={11} className="text-[#00C2FF]" /> DOMINOVA
            </span>
          </div>
        </motion.div>

        {/* Hero Central Typography Panel */}
        <div className="text-center max-w-4xl flex flex-col items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-fill-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-[1.05] mb-4 text-center"
          >
            TECH AURA <span className="text-[#D4AF37]">2026</span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-light tracking-[0.25em] text-[#00C2FF] mt-3 font-sans uppercase">
              National Innovation Expo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl font-heading text-white dark:text-white font-medium tracking-wide max-w-2xl mb-4 text-glow-cyan"
          >
            Transforming Student Innovation Into A National Movement
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-gray-400 dark:text-gray-400 max-w-[700px] leading-relaxed mb-10 mx-auto"
          >
            TECH AURA 2026 connects students, startups, industries, investors, incubators and institutions through one national innovation ecosystem focused on collaboration, technology and future-ready talent.
          </motion.p>

          {/* Premium Actions Button Segment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14 w-full px-4"
          >
            {/* Become Sponsor */}
            <InteractiveButton
              variant="primary-gold"
              size="lg"
              onClick={() => {
                window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20Sponsorship%20Enquiry";
              }}
            >
              Become Sponsor
            </InteractiveButton>

            {/* Download Deck (Disabled Coming Soon) */}
            <div className="relative group">
              <InteractiveButton
                variant="glass"
                size="lg"
                disabled
                className="opacity-50 cursor-not-allowed border-black/10 dark:border-white/10"
                icon={<Download size={16} className="text-gray-500" />}
              >
                Download Sponsorship Deck
              </InteractiveButton>
              <span className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2 bg-black border border-white/10 text-[9px] font-mono rounded px-2.5 py-1 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                Coming Soon
              </span>
            </div>

            {/* Attendee Registration COMING SOON */}
            <div className="relative group">
              <div className="flex items-center gap-3.5 px-6 py-4 rounded-full bg-white/[0.01] border border-black/5 dark:border-white/5 backdrop-blur-md cursor-not-allowed select-none opacity-50">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-gray-400 dark:text-gray-400 font-semibold uppercase">Registration</span>
                <span className="font-heading text-[10px] font-bold text-red-400 bg-red-400/5 px-2 py-0.5 rounded border border-red-400/20">
                  COMING SOON
                </span>
              </div>
              <div className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2 bg-black/90 border border-white/10 text-[9px] font-mono tracking-wide text-white py-1 px-3 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-1.5 z-50">
                <Info size={11} className="text-[#00C2FF]" />
                <span>Registration opens soon.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Premium Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/[0.01] border border-black/5 dark:border-white/5 rounded-[24px] backdrop-blur-md p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-12"
        >
          {/* Subtle line glow details to define luxury bounding box */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/20 to-transparent" />
          <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.06] dark:divide-white/[0.06]">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center justify-center p-3 ${
                  idx > 1 ? 'pt-6 md:pt-3' : ''
                }`}
              >
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white dark:text-white tracking-tight mb-1 text-glow-cyan">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-mono tracking-wider text-gray-500 dark:text-gray-400 uppercase font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Supported By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col items-center gap-3 pt-6 border-t border-black/[0.05] dark:border-white/[0.05] w-full max-w-4xl"
        >
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase select-none font-bold">
            Supported By
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {/* Typographic Logos only */}
            <span className="text-xs font-heading font-black text-gray-400 dark:text-gray-400 tracking-wider uppercase">
              Sathyabama University
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 hidden sm:inline" />
            <span className="text-xs font-heading font-black text-gray-400 dark:text-gray-400 tracking-widest uppercase">
              DOMINOVA
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
