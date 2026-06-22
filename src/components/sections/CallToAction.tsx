/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Download, Building, ShieldCheck, Mail, MapPin } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import InteractiveButton from '../ui/InteractiveButton';
import AmbientOrb from '../ui/AmbientOrb';

export default function CallToAction() {
  return (
    <SectionContainer id="contact-section" gridBackground={true} className="relative py-24 sm:py-32">
      <AmbientOrb color="gold" size="lg" className="left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[130px]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content - Conversional Hooks & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/20 uppercase mb-6">
            Executive Advisory Council
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Become Part of India's Emerging Innovation Ecosystem
          </h2>
          
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mb-8 max-w-2xl">
            Align your enterprise with top academic hubs and advanced engineering streams. Partner with TECH AURA 2026 to foster patents, deploy custom research statements, and curate an elite tech recruitment pipeline.
          </p>

          {/* Fully Interactive Call To Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <InteractiveButton
              variant="primary-gold"
              size="lg"
              onClick={() => {
                window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Sponsorship%20Enquiry";
              }}
            >
              Become Sponsor
            </InteractiveButton>

            <InteractiveButton
              variant="glass"
              size="lg"
              icon={<Calendar size={16} />}
              onClick={() => {
                window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Meeting%20Request";
              }}
            >
              Schedule Meeting
            </InteractiveButton>

            <InteractiveButton
              variant="subtle"
              size="lg"
              icon={<Download size={16} className="text-[#B5B5B5]" />}
              onClick={() => {
                window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Request%20for%20Sponsorship%20Deck";
              }}
            >
              Download Deck
            </InteractiveButton>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/[0.04] w-full text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#00C2FF]" />
              <span>National R&D Alliance Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#D4AF37]" />
              <span>info@dominova.tech</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gray-400" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>

        {/* Right Side - Premium Corporate Contact Card */}
        <div className="lg:col-span-5 w-full">
          <GlassCard accent="gold" className="p-8 sm:p-10" isHoverable={false}>
            <div className="mb-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                Let's Build the Future Together
              </h3>
              <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                Interested in sponsoring TECH AURA 2026 or showcasing your startup? Our team would be happy to discuss sponsorship opportunities, startup exhibition packages, partnerships, and collaborations.
              </p>
            </div>

            {/* Official Email Display */}
            <div className="flex items-center gap-4 py-4 px-5 rounded-2xl bg-white/[0.02] border border-white/5 mb-8">
              <div className="p-3 bg-white/[0.04] text-[#D4AF37] rounded-xl border border-white/5 flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <span className="block text-[8px] font-mono tracking-wider text-gray-500 uppercase">OFFICIAL EMAIL</span>
                <a 
                  href="mailto:info@dominova.tech" 
                  className="text-sm font-mono font-extrabold text-white hover:text-[#00C2FF] transition-colors block mt-0.5"
                >
                  info@dominova.tech
                </a>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="flex flex-col gap-3.5">
              <InteractiveButton
                variant="primary-gold"
                size="md"
                className="w-full text-xs font-mono uppercase tracking-wider py-3 flex items-center justify-center gap-2"
                onClick={() => {
                  window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Sponsorship%20Enquiry";
                }}
              >
                Become Sponsor
              </InteractiveButton>

              <InteractiveButton
                variant="glass"
                size="md"
                className="w-full text-xs font-mono uppercase tracking-wider py-3 border-white/10 flex items-center justify-center gap-2"
                icon={<Building size={14} className="text-[#00C2FF]" />}
                onClick={() => {
                  window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Startup%20Stall%20Booking";
                }}
              >
                Book Startup Stall
              </InteractiveButton>

              <InteractiveButton
                variant="glass"
                size="md"
                className="w-full text-xs font-mono uppercase tracking-wider py-3 border-white/10 flex items-center justify-center gap-2"
                icon={<Calendar size={14} className="text-[#D4AF37]" />}
                onClick={() => {
                  window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Meeting%20Request";
                }}
              >
                Schedule Meeting
              </InteractiveButton>

              <InteractiveButton
                variant="glass"
                size="md"
                className="w-full text-xs font-mono uppercase tracking-wider py-3 border-white/10 flex items-center justify-center gap-2"
                icon={<Download size={14} className="text-[#B5B5B5]" />}
                onClick={() => {
                  window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Request%20for%20Sponsorship%20Deck";
                }}
              >
                Download Sponsorship Deck
              </InteractiveButton>
            </div>
          </GlassCard>
        </div>

      </div>
    </SectionContainer>
  );
}
