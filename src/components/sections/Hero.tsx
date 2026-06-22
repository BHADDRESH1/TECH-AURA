/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Layers, Users, Building, ShieldCheck, Download, MapPin, Calendar, CheckCircle, Info } from 'lucide-react';
import InteractiveButton from '../ui/InteractiveButton';
import AmbientOrb from '../ui/AmbientOrb';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 250, suffix: '+', label: 'Innovation Teams', icon: Layers },
    { value: 15000, suffix: '+', label: 'Student Audience', icon: Users },
    { value: 1000, suffix: '+', label: 'External Participants', icon: Users },
    { value: 75, suffix: '+', label: 'Startup Stalls', icon: Building },
    { value: 28, suffix: '', label: 'States Represented', icon: MapPin },
  ];

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadDeck = () => {
    alert("System Message: Download request registered. The official Tech Aura 2026 Executive Sponsorship Portfolio is being initiated for download.");
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#050505] pt-28 pb-16"
      id="hero-section"
    >
      {/* 1. Ambient Background Layering */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay opacity-[0.15] pointer-events-none z-0" />
      
      {/* Interactive mouse light tracking */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-[180px] bg-gradient-to-r from-[#00C2FF]/5 to-[#D4AF37]/5 transition-all duration-300 z-0"
        style={{
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      />

      <AmbientOrb color="cyan" size="xl" className="left-[-20%] top-[-20%] opacity-30" delay={0} />
      <AmbientOrb color="gold" size="lg" className="right-[-10%] bottom-[-10%] opacity-20" delay={4} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Partnership / Strategic Branding Cluster */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-3.5 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-md mb-8 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] font-heading font-semibold tracking-wider text-white">TECH AURA 2026</span>
            </div>
            <span className="text-white/20 text-xs">|</span>
            <span className="text-[11px] font-heading font-semibold tracking-wider text-[#00C2FF]">DOMINOVA</span>
          </div>
          
          <div className="hidden sm:block w-[1px] h-4 bg-white/10" />
          
          <span className="text-[10px] uppercase font-mono tracking-widest font-semibold bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Strategic Partnership Hub
          </span>
        </motion.div>

        {/* Hero Central Typography Panel */}
        <div className="text-center max-w-4xl flex flex-col items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-fill-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-[1.05] mb-5 text-center"
          >
            TECH AURA <span className="text-[#D4AF37]">2026</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.25em] text-[#00C2FF] mt-3 font-sans uppercase">
              National Innovation Expo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl font-heading text-white font-medium tracking-wide max-w-2xl mb-4 text-glow-cyan"
          >
            Transforming Student Innovation Into A National Movement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[#B5B5B5] max-w-3xl leading-relaxed mb-8"
          >
            TECH AURA 2026 aims to build India's next-generation innovation ecosystem by connecting students, startups, industries, investors, incubators and institutions through one national platform.
          </motion.p>

          {/* Luxury Call-To-Action Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-10 w-full px-4"
          >
            <InteractiveButton
              variant="primary-gold"
              size="lg"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Become Sponsor
            </InteractiveButton>

            <InteractiveButton
              variant="primary-cyan"
              size="lg"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Book Startup Stall
            </InteractiveButton>

            <InteractiveButton
              variant="glass"
              size="lg"
              icon={<Download size={16} className="text-[#D4AF37]" />}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Download Sponsorship Deck
            </InteractiveButton>
          </motion.div>

          {/* Restricted Registration Phase Badge / COMING SOON with Premium Interactive Hover Tooltip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group inline-flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-[#B5B5B5] font-semibold uppercase">Attendee Registration</span>
            </div>
            
            <div className="font-heading text-xs font-bold text-red-400 bg-red-400/5 px-2.5 py-1 rounded border border-red-400/20">
              COMING SOON
            </div>

            {/* Custom Tooltip on Hover */}
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-black/90 border border-white/10 text-[10px] font-mono tracking-wide text-white py-2 px-4 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-1.5 z-25">
              <Info size={12} className="text-[#00C2FF]" />
              <span>Registration opens soon.</span>
            </div>
          </motion.div>
        </div>

        {/* 2. Horizontal Statistics Array */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-8 bg-white/[0.01] border border-white/5 rounded-[24px] backdrop-blur-md p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle line glow details to define luxury bounding box */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/25 to-transparent" />
          <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center justify-center p-4 ${
                    idx > 1 ? 'pt-8 md:pt-4' : ''
                  }`}
                >
                  <div className="p-2.5 rounded-full bg-[#050505] border border-white/5 mb-3">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-1 text-glow-cyan">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-[#B5B5B5] font-normal uppercase">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
