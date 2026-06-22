/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Users, Globe, Briefcase, Award, ShieldCheck } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import { AUDIENCE_PROFILE } from '../../data/mockData';

export default function AudienceProfile() {
  const profileIcons = [Users, Target, Briefcase, Award, Globe, ShieldCheck];

  return (
    <SectionContainer id="audience-section" gridBackground={true}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
          Ecosystem Demographics
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Audience Profile
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          TECH AURA 2026 aggregates a premier cohort of technical developers, academic research chairs, state regulatory boards, and incubation managers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AUDIENCE_PROFILE.map((profile, index) => {
          const Icon = profileIcons[index % profileIcons.length];
          return (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <GlassCard
                accent={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'gold' : 'none'}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[#00C2FF]">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">
                      SEGMENT-0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-white tracking-tight mb-1">
                    {profile.category}
                  </h3>
                  
                  <span className="text-xs font-mono font-semibold text-[#D4AF37] block mb-4 uppercase tracking-wider">
                    {profile.metrics}
                  </span>

                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>Exposure Weight</span>
                  <span className="text-[#00C2FF] font-semibold">CRITICAL PATHWAY</span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
