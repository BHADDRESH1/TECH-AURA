/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Award, Target, GitCommit, Compass, Users } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import { EVENT_JOURNEY } from '../../data/mockData';

export default function EventJourney() {
  const stepIcons = [Target, Compass, GitCommit, Calendar, Award, Users];

  return (
    <SectionContainer id="journey-section" gridBackground={true}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
          Ecosystem Pipeline
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Event Journey
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          A highly structured screening lifecycle mapping research from paper submission to direct industry scale-up.
        </p>
      </div>

      {/* A. DESKTOP TIMELINE (Horizontal) */}
      <div className="hidden lg:block relative py-12">
        {/* Horizontal background connection track line */}
        <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#00C2FF]/15 -translate-y-1/2 z-0" />
        
        {/* Step-by-step grid */}
        <div className="grid grid-cols-6 gap-6 relative z-10">
          {EVENT_JOURNEY.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                {/* Node representation */}
                <div className="w-12 h-12 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center text-white font-mono text-xs font-semibold relative mb-6 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                <GlassCard
                  accent="hover-cyan"
                  className="w-full text-center py-6 px-4 flex flex-col justify-between min-h-[220px]"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-wide text-[#00C2FF] uppercase font-bold">
                      Phase {step.step}
                    </span>
                    <h3 className="text-sm font-heading font-bold text-white tracking-tight mt-2 min-h-[36px] flex items-center justify-center">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[#B5B5B5]/90 leading-relaxed mt-2 min-h-[64px] flex items-center justify-center">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Phase output representation */}
                  <div className="mt-4 pt-3 border-t border-white/[0.04]">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                      Out: {step.deliverable}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* B. MOBILE TIMELINE (Vertical) */}
      <div className="lg:hidden relative space-y-8 pl-8 border-l border-[#00C2FF]/20">
        {EVENT_JOURNEY.map((step, index) => {
          const Icon = stepIcons[index % stepIcons.length];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative"
            >
              {/* Dynamic node placement */}
              <div className="absolute left-[-45px] top-6 w-8 h-8 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center text-white font-mono text-2xs font-semibold shadow-lg">
                {step.step}
              </div>

              <GlassCard accent="hover-cyan" className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
                    Phase {step.step}
                  </span>
                  
                  <div className="inline-flex max-w-max items-center gap-1.5 px-3 py-1 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/10">
                    <Icon size={12} className="text-[#D4AF37]" />
                    <span className="text-[9px] font-mono text-[#D4AF37]">
                      {step.deliverable}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-[#B5B5B5] leading-relaxed mt-2">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
