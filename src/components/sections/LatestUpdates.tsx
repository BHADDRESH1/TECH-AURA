/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { RefreshCw, Bell, Sparkles, ArrowRight } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import { LATEST_UPDATES } from '../../data/mockData';

export default function LatestUpdates() {
  return (
    <SectionContainer id="updates-section" gridBackground={true}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
            Expo Feed
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Latest Updates
          </h2>
          <p className="text-sm md:text-base text-[#B5B5B5] max-w-xl mt-3">
            Real-time status announcements and scheduling revisions issued by the National Executive Board.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono">
          <RefreshCw size={14} className="animate-spin-infinite" />
          <span>REAL-TIME PIPELINE MONITOR</span>
        </div>
      </div>

      {/* Horizontal horizontal flex/scroll grid of status card updates */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {LATEST_UPDATES.map((update, index) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
          >
            <GlassCard
              accent="hover-cyan"
              className="h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/15">
                      <Bell size={12} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                      ANN-0{index + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-white/[0.03] text-[#D4AF37] px-2.5 py-1 rounded border border-white/5">
                    {update.date}
                  </span>
                </div>

                <h3 className="text-base font-heading font-semibold text-white tracking-tight min-h-[48px]">
                  {update.title}
                </h3>

                <p className="text-xs text-[#B5B5B5] leading-relaxed mt-3">
                  {update.description}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-amber-400 tracking-wider font-semibold uppercase">
                    {update.status}
                  </span>
                </div>
                <ArrowRight size={12} className="text-white/20 hover:text-[#00C2FF] transition-colors" />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
