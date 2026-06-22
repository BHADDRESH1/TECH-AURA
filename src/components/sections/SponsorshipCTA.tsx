/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Download, Building, ShieldCheck, ArrowUpRight } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import InteractiveButton from '../ui/InteractiveButton';

export default function SponsorshipCTA() {
  const handleAction = (actionLabel: string) => {
    alert(`System Message: Action "${actionLabel}" initiated. Dedicated coordination assistants are compiling credentials for delivery.`);
  };

  return (
    <SectionContainer id="final-sponsor-cta" className="relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0D0D0D] pt-24 pb-32">
      <div className="absolute inset-0 grid-bg opacity-[0.25] pointer-events-none z-0" />
      
      {/* Decorative gradient soft backlights */}
      <div className="absolute top-[10%] left-[50%] -translate-x-[50%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full opacity-[0.08] blur-[150px] bg-[#D4AF37] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] left-[30%] w-[250px] h-[250px] rounded-full opacity-[0.06] blur-[120px] bg-[#00C2FF] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        
        {/* Top security validation shield */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md mb-8"
        >
          <ShieldCheck size={13} className="text-[#D4AF37]" />
          <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
            Strategic Partnerships
          </span>
        </motion.div>

        {/* Strategic Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white leading-tight mb-6"
        >
          Become a Strategic Partner of <span className="text-[#D4AF37]">TECH AURA 2026</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg font-light text-[#B5B5B5] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Secure exclusive brand rights, configure your corporate recruitment parameters, and showcase your technology stacks directly on the national exposition floor.
        </motion.p>

        {/* Custom 4-Column Strategic Grid Trigger Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {/* Main Sponsor Button */}
          <a
            href="mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Sponsorship%20Enquiry"
            className="flex flex-col items-center justify-between p-5 bg-white/[0.01] hover:bg-white/[0.03] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-2xl transition-all duration-300 text-center cursor-pointer group"
          >
            <div className="p-3 bg-[#D4AF37]/5 text-[#D4AF37] rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck size={20} />
            </div>
            <div>
              <span className="block font-heading font-extrabold text-xs text-white uppercase tracking-wider">Become Sponsor</span>
              <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">Tier-level allocations</span>
            </div>
          </a>

          {/* Download Deck Button */}
          <a
            href="mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Request%20for%20Sponsorship%20Deck"
            className="flex flex-col items-center justify-between p-5 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/25 rounded-2xl transition-all duration-300 text-center cursor-pointer group"
          >
            <div className="p-3 bg-gray-500/5 text-white rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Download size={20} />
            </div>
            <div>
              <span className="block font-heading font-bold text-xs text-white uppercase tracking-wider">Download Deck</span>
              <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">Sponsoring prospectus</span>
            </div>
          </a>

          {/* Schedule Meeting Button */}
          <a
            href="mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Meeting%20Request"
            className="flex flex-col items-center justify-between p-5 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/25 rounded-2xl transition-all duration-300 text-center cursor-pointer group"
          >
            <div className="p-3 bg-purple-500/5 text-[#8F00FF] rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Calendar size={20} />
            </div>
            <div>
              <span className="block font-heading font-bold text-xs text-white uppercase tracking-wider">Schedule Meeting</span>
              <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">15 min strategic sync</span>
            </div>
          </a>

          {/* Reserve Startup Stall Button */}
          <a
            href="mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Startup%20Stall%20Reservation"
            className="flex flex-col items-center justify-between p-5 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/25 rounded-2xl transition-all duration-300 text-center cursor-pointer group"
          >
            <div className="p-3 bg-emerald-500/5 text-emerald-400 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Building size={20} />
            </div>
            <div>
              <span className="block font-heading font-bold text-xs text-white uppercase tracking-wider">Reserve Stall</span>
              <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">Exhibition spaces</span>
            </div>
          </a>
        </motion.div>

        {/* Email Direct Access Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
            Direct Executive Contact
          </span>
          <a
            href="mailto:info@dominova.tech"
            className="group flex items-center gap-2.5 mt-2.5 px-6 py-3.5 bg-white/[0.02] border border-white/5 hover:border-white/15 rounded-full transition-all duration-300"
          >
            <Mail size={15} className="text-[#D4AF37]" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">
              info@dominova.tech
            </span>
            <ArrowUpRight size={13} className="text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </SectionContainer>
  );
}
