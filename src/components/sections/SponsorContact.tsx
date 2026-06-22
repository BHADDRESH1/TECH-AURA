/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Calendar, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import InteractiveButton from '../ui/InteractiveButton';

export default function SponsorContact() {
  const handleSwitchView = (view: 'expo' | 'sponsor' | 'startup', targetId?: string) => {
    // Dispatch general custom event
    const event = new CustomEvent('switch-to-view', { detail: view });
    window.dispatchEvent(event);

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <SectionContainer id="final-sponsor-contact" className="bg-[#0b0b0b]/60 border-b border-white/[0.04]">
      
      <div className="max-w-[1400px] mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info layout - Left column */}
          <div className="col-span-1 lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 text-2xs font-mono font-bold uppercase tracking-widest text-[#00C2FF]">
                <ShieldCheck size={12} /> Alliance Registry Active
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight leading-[1.1]">
                Coordinate Your <br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">Participation Framework</span>
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-[#B5B5B5] leading-relaxed max-w-2xl">
                Engage directly with the central Advisory Review Board to define physical stall coordinates, branding alignments, and technology sandboxes for current and future tech cohorts.
              </p>
            </div>

            {/* Structured Verified Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Organized By */}
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
                <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest">Organizing Institution</span>
                
                <div className="space-y-1">
                  <span className="text-sm font-heading font-black text-white tracking-wide block uppercase">Sathyabama</span>
                  <span className="text-[10px] text-gray-400 font-mono block">Institute of Science and Technology</span>
                </div>
                
                <span className="inline-block text-[8.5px] font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/10 uppercase font-bold">
                  NAAC A++ Grade University
                </span>
              </div>

              {/* Strategic Partner */}
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
                <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest">Innovation Strategic Partner</span>
                
                <div className="space-y-2">
                  <img 
                    src="/logos/dominova-logo.png" 
                    alt="Dominova Logo" 
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-[9px] font-mono tracking-tight text-[#00C2FF] font-semibold uppercase block">
                    Innovation Strategic Partner
                  </span>
                </div>
              </div>

            </div>

            {/* Official contact details */}
            <div className="flex flex-wrap gap-6 py-3 px-5 rounded-xl bg-white/[0.01] border border-white/5 w-fit items-center">
              <div className="flex items-center gap-3">
                <span className="text-sm">📧</span>
                <div>
                  <span className="block text-[8px] font-mono tracking-wider text-gray-500 uppercase">OFFICIAL EMAIL</span>
                  <a 
                    href="mailto:info@dominova.tech" 
                    className="text-xs sm:text-sm font-mono font-extrabold text-white hover:text-[#00C2FF] transition-colors block"
                  >
                    info@dominova.tech
                  </a>
                </div>
              </div>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <div className="flex items-center gap-3">
                <span className="text-sm">📞</span>
                <div>
                  <span className="block text-[8px] font-mono tracking-wider text-gray-500 uppercase">PHONE</span>
                  <a 
                    href="tel:+919025092699" 
                    className="text-xs sm:text-sm font-mono font-extrabold text-white hover:text-[#00C2FF] transition-colors block"
                  >
                    +91 90250 92699
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Verification / Active Action buttons Panel - Right column */}
          <div className="col-span-1 lg:col-span-5">
            <GlassCard isHoverable={false} className="border-white/5 p-8 text-center space-y-6 bg-black/40">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">Action Hub</span>
                <h3 className="text-xl font-heading font-bold text-white tracking-tight">Alliance Channels</h3>
                <p className="text-2xs sm:text-xs text-[#B5B5B5] leading-relaxed max-w-sm mx-auto">
                  Execute routing triggers to configure packages, reserve booth staging plots, or align with advisory networks.
                </p>
              </div>

              {/* Direct Buttons Layout stack */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.04]">
                
                <InteractiveButton
                  variant="primary-gold"
                  className="w-full text-xs py-3.5 flex items-center justify-center gap-2 font-mono uppercase tracking-wider"
                  icon={<ArrowUpRight size={14} className="text-black" />}
                  onClick={() => window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Sponsorship%20Enquiry"}
                >
                  Become Sponsor
                </InteractiveButton>

                <InteractiveButton
                  variant="glass"
                  className="w-full text-xs py-3.5 flex items-center justify-center gap-2 font-mono uppercase tracking-wider text-white border-white/10 hover:bg-white/[0.02]"
                  icon={<ArrowUpRight size={14} className="text-[#00C2FF]" />}
                  onClick={() => window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Startup%20Stall%20Booking"}
                >
                  Reserve Startup Stall
                </InteractiveButton>

                <a
                  href="mailto:info@dominova.tech?subject=TECH%20AURA%202026%20-%20Meeting%20Request"
                  className="w-full py-3 px-4 rounded-xl border border-white/5 text-gray-300 font-mono text-center text-xs tracking-wider uppercase bg-[#111] hover:bg-white/[0.02] transition-all flex items-center justify-center gap-2 hover:border-white/15"
                >
                  <Calendar size={13} /> Schedule Meeting
                </a>

                <a
                  href="mailto:info@dominova.tech"
                  className="w-full py-3 px-4 rounded-xl text-gray-400 font-mono text-center text-xs tracking-wider uppercase bg-transparent border border-transparent hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail size={13} /> Email Team
                </a>

              </div>

              <div className="text-[10px] font-mono text-gray-500 leading-normal border-t border-white/[0.04] pt-4 select-none">
                Formal inquiries will typically receive structural validation and a coordinate map blueprint invitation within 24 operational hours.
              </div>

            </GlassCard>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
