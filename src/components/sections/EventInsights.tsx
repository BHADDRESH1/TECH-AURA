/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Layers, Users, Building, MapPin, Globe } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import AnimatedCounter from '../ui/AnimatedCounter';

interface InsightStat {
  end: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
}

const INSIGHTS: InsightStat[] = [
  {
    end: 250,
    suffix: '+',
    label: 'Innovation Teams',
    description: 'Vetted academic researchers presenting active prototypes.',
    icon: Layers,
  },
  {
    end: 15000,
    suffix: '+',
    label: 'Student Audience',
    description: 'Active young technical delegates participating in zonal competitions.',
    icon: Users,
  },
  {
    end: 75,
    suffix: '+',
    label: 'Startup Booths',
    description: 'Dynamic exhibitors showcasing commercially viable technology layers.',
    icon: Building,
  },
  {
    end: 28,
    suffix: '',
    label: 'States Represented',
    description: 'Broad geographic penetration and regional incubator clusters.',
    icon: MapPin,
  }
];

export default function EventInsights() {
  return (
    <SectionContainer id="insights-section" className="relative bg-gradient-to-b from-[#050505] via-[#0D0D0D]/50 to-[#050505]">
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none z-0" />
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
          National Exposition Analytics
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Event Insights
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          Empirical projections indicating our on-ground audience profile, corporate networking densities, and technology clusters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {INSIGHTS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative p-8 rounded-[24px] bg-white/[0.01] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Core Lighting Highlight */}
              <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#00C2FF]/20 to-transparent" />
              
              <div>
                <div className="p-3 bg-black/80 border border-white/10 rounded-2xl max-w-max text-[#D4AF37] mb-6">
                  <Icon size={20} />
                </div>

                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-2 text-glow-cyan">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>

                <h3 className="text-base font-heading font-bold text-white tracking-tight">
                  {stat.label}
                </h3>
              </div>

              <p className="text-2xs sm:text-xs text-[#B5B5B5] leading-relaxed mt-3 pt-3 border-t border-white/[0.04]">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
