/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { AlignLeft, HelpCircle, CheckSquare, Presentation, Zap, BarChart3, ArrowRight } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import { PARTNERSHIP_JOURNEY } from '../../data/mockData';

export default function PartnershipJourney() {
  const stepsIcons = [AlignLeft, HelpCircle, CheckSquare, Presentation, Zap, BarChart3];

  return (
    <SectionContainer id="partnership-section" className="bg-[#0D0D0D]/40">
      <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
        <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
          Collaborative Process
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Partnership Journey
        </h2>
        
        {/* Dominova Logo Integration */}
        <div className="flex flex-col items-center gap-1.5 mt-5 mb-2">
          <img 
            src="/logos/dominova-logo.png" 
            alt="Dominova Logo" 
            className="h-6 w-auto object-contain"
          />
          <span className="text-[9px] font-mono tracking-tight text-[#00C2FF] font-semibold uppercase block">
            Innovation Strategic Partner
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          A systematic framework mapping investor integration, CSR compliance allocations, and corporate brand positioning from agreement to detailed analytics reporting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {/* Connection tracks in grid layout */}
        {PARTNERSHIP_JOURNEY.map((pStep, index) => {
          const Icon = stepsIcons[index % stepsIcons.length];
          return (
            <motion.div
              key={pStep.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <GlassCard
                accent={index === 5 ? 'gold' : 'none'}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-heading font-black text-white/5 tracking-wider">
                      PHASE 0{pStep.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[#D4AF37]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white tracking-tight mb-2">
                    {pStep.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed mb-6">
                    {pStep.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-semibold">Action Required</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#00C2FF] font-mono text-xs font-bold">
                    <span>{pStep.action}</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
