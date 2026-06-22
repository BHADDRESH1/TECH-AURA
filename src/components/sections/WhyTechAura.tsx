/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Activity, Cpu, Check } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import { WHY_TECH_AURA } from '../../data/mockData';

export default function WhyTechAura() {
  const icons = [Cpu, Target, Activity];

  return (
    <SectionContainer id="about-section" className="bg-[#0D0D0D]/45">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
          Ecosystem Positioning
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Why TECH AURA
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          TECH AURA 2026 hosts India’s sovereign innovation showcase, deploying direct connectivity pipelines between commercial venture capital and raw technical prototype engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {WHY_TECH_AURA.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
            >
              <GlassCard
                accent={index === 0 ? 'cyan' : index === 1 ? 'gold' : 'none'}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Decorative badge and background icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-[#D4AF37]">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                      Core Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-medium text-[#00C2FF] mb-4 uppercase tracking-wider">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bullets mapping */}
                <div className="space-y-3 pt-6 border-t border-white/[0.04]">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-2">
                      <div className="mt-1 p-0.5 rounded-full bg-white/[0.03] border border-white/10 text-[#00C2FF]">
                        <Check size={10} />
                      </div>
                      <span className="text-xs text-[#B5B5B5] font-medium leading-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
