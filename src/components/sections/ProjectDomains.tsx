/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import { PROJECT_DOMAINS } from '../../data/mockData';

export default function ProjectDomains() {
  return (
    <SectionContainer id="domains-section" className="bg-[#0D0D0D]/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
            Incubator Focus Labs
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Project Domains
          </h2>
          <p className="text-sm md:text-base text-[#B5B5B5] max-w-xl mt-3">
            Highly demanding categories evaluating applied science foundations and physical implementation standards of excellence.
          </p>
        </div>
        
        <div className="text-xs font-mono text-[#D4AF37] font-semibold bg-[#D4AF37]/5 border border-[#D4AF37]/10 px-4 py-2 rounded-xl">
          11 ENTERPRISE FIELDS OF INTEREST
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECT_DOMAINS.map((domain, index) => {
          // Resolve icon dynamically or fallback to Cpu
          const Icon = (LucideIcons as any)[domain.iconName] || LucideIcons.Cpu;
          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
            >
              <GlassCard
                accent={index % 2 === 0 ? 'hover-cyan' : 'hover-gold'}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-2xl bg-white/[0.02]"
                      style={{
                        border: `1px solid ${domain.accentColor}15`,
                        color: domain.accentColor,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                      DOM-0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white tracking-tight mb-2">
                    {domain.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/40">Category Status</span>
                  <span className="text-[#00C2FF] font-semibold tracking-wider">ACTIVE</span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
