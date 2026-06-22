/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Info, Sparkles, TrendingUp } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';

interface SlotTracker {
  label: string;
  taken: number;
  total: number;
  advisory: string;
  accent: 'cyan' | 'gold' | 'purple';
}

const TRACKERS: SlotTracker[] = [
  {
    label: 'Title Sponsor',
    taken: 0,
    total: 1,
    advisory: 'CRITICAL VALUE LANE — Primary Brand Alignment Under Active Negotiation.',
    accent: 'gold'
  },
  {
    label: 'Powered By Partner',
    taken: 1,
    total: 2,
    advisory: '50% ALLOCATED — Only One Anchor Slot Remains Active.',
    accent: 'cyan'
  },
  {
    label: 'Innovation Partner',
    taken: 1,
    total: 2,
    advisory: '50% ALLOCATED — Only One Partner Position Remains Open.',
    accent: 'purple'
  },
  {
    label: 'Hiring Partner',
    taken: 2,
    total: 5,
    advisory: '40% RESERVED — India’s Premier Recruiters Confirming Allocation.',
    accent: 'cyan'
  },
  {
    label: 'Startup Stalls',
    taken: 18,
    total: 75,
    advisory: '18/75 RESERVED — Hardware Exhibits and Regional Hub Teams Registered.',
    accent: 'purple'
  }
];

export default function SlotAvailability() {
  const getAccentBar = (accent: 'cyan' | 'gold' | 'purple') => {
    switch (accent) {
      case 'cyan':
        return 'bg-[#00C2FF] shadow-[0_0_12px_rgba(0,194,255,0.4)]';
      case 'gold':
        return 'bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]';
      case 'purple':
        return 'bg-[#8F00FF] shadow-[0_0_12px_rgba(143,0,255,0.4)]';
      default:
        return 'bg-white';
    }
  };

  return (
    <SectionContainer id="slot-tracker-section" className="relative bg-[#050505] pt-24 pb-32">
      <div className="absolute inset-0 grid-bg opacity-[0.22] pointer-events-none z-0" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/20 uppercase">
          Live Board Intake
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-4">
          Slot Availability
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          Direct monitoring of active corporate reservations. All assignments are processed on a first-come, first-serve baseline subject to academic screening boards.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        {TRACKERS.map((tracker, idx) => {
          const percentage = Math.min((tracker.taken / tracker.total) * 100, 100);
          
          return (
            <motion.div
              key={tracker.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
            >
              <GlassCard className="py-6 px-7 border-white/[0.04] bg-[#050505]/75 hover:border-white/10 transition-colors">
                
                {/* Information Header Block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#00C2FF] animate-pulse" />
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-normal uppercase">
                      {tracker.label}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-2xs sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
                      Reservation Density
                    </span>
                    <span className="px-3.5 py-1 text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
                      {tracker.taken} / {tracker.total} Slots
                    </span>
                  </div>
                </div>

                {/* Progress bar housing */}
                <div className="w-full h-2.5 bg-white/[0.03] border border-white/5 rounded-full overflow-hidden mb-3.5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + idx * 0.05, ease: 'easeOut' }}
                    className={`h-full ${getAccentBar(tracker.accent)} rounded-full`}
                  />
                </div>

                {/* Advisories footer details */}
                <div className="flex items-center gap-2 mt-2">
                  <Info size={11} className="text-[#00C2FF]" />
                  <span className="text-[10px] font-mono tracking-wide text-gray-400">
                    {tracker.advisory}
                  </span>
                </div>

              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
