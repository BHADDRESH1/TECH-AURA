/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Award, Megaphone, Search, Layers, PlayCircle, GraduationCap, Microscope, Rocket, FileText 
} from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  accent: 'cyan' | 'gold' | 'purple';
}

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'b-1',
    title: 'Talent Acquisition',
    description: 'Establish direct pipelines to the top 0.1% technical minds, software developers, and engineering innovators.',
    icon: Users,
    accent: 'cyan'
  },
  {
    id: 'b-2',
    title: 'Employer Branding',
    description: 'Inject your corporate values, work cultures, and system toolkits directly into India’s premier student cohorts.',
    icon: Award,
    accent: 'gold'
  },
  {
    id: 'b-3',
    title: 'Lead Generation',
    description: 'Capture active opt-in corporate, researcher, and institutional contact records to feed marketing funnels.',
    icon: Megaphone,
    accent: 'purple'
  },
  {
    id: 'b-4',
    title: 'Startup Discovery',
    description: 'Identify outstanding pre-seed technological teams, hardware breakthroughs, and scalable early-stage SaaS ventures.',
    icon: Search,
    accent: 'cyan'
  },
  {
    id: 'b-5',
    title: 'Media Exposure',
    description: 'Maximize brand real estate with featured logo allocations, live expo broadcast rollouts, and national press coverage.',
    icon: Layers,
    accent: 'gold'
  },
  {
    id: 'b-6',
    title: 'Product Demonstrations',
    description: 'Engage thousands of developers face-to-face with dedicated staging, sandboxed APIs, and physical exhibition booths.',
    icon: PlayCircle,
    accent: 'purple'
  },
  {
    id: 'b-7',
    title: 'Academic Partnerships',
    description: 'Foster durable alliances with leading academic institutes, research coordinators, and national student technical associations.',
    icon: GraduationCap,
    accent: 'cyan'
  },
  {
    id: 'b-8',
    title: 'Research Collaborations',
    description: 'Establish research linkages, review promising project abstracts, and support students in building commercially viable technology layers.',
    icon: Microscope,
    accent: 'gold'
  },
  {
    id: 'b-9',
    title: 'Innovation Scouting',
    description: 'Directly identify, mentor, and fund promising student-led intellectual property, design blueprints, and next-generation systems.',
    icon: Rocket,
    accent: 'purple'
  },
  {
    id: 'b-10',
    title: 'MoU Opportunities',
    description: 'Execute formalized Memorandums of Understanding (MoU) and strategic collaboration agreements with emerging startup founders and talent groups.',
    icon: FileText,
    accent: 'cyan'
  }
];

export default function WhySponsor() {
  const getAccentClass = (accent: 'cyan' | 'gold' | 'purple') => {
    switch (accent) {
      case 'cyan':
        return 'border-[#00C2FF]/15 text-[#00C2FF]';
      case 'gold':
        return 'border-[#D4AF37]/15 text-[#D4AF37]';
      case 'purple':
        return 'border-[#8F00FF]/15 text-[#8F00FF]';
      default:
        return 'border-white/10 text-white';
    }
  };

  return (
    <SectionContainer id="why-sponsor-section" className="bg-[#0D0D0D]/30" gridBackground={true}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
            Value Parameters
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Why Partner with TECH AURA
          </h2>
          <p className="text-sm md:text-base text-[#B5B5B5] max-w-xl mt-3">
            Examine the structural return on collaboration channels integrated directly within our national innovation exposition.
          </p>
        </div>

        <div className="text-xs font-mono text-[#00C2FF] bg-[#00C2FF]/5 border border-[#00C2FF]/15 px-3.5 py-2 rounded-xl uppercase font-semibold">
          10 Strategic Channels
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {BENEFIT_ITEMS.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="group"
            >
              <GlassCard
                accent={benefit.accent === 'cyan' ? 'hover-cyan' : benefit.accent === 'gold' ? 'hover-gold' : 'none'}
                className="h-full flex flex-col justify-between py-8 px-6 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-xl bg-white/[0.02] border ${getAccentClass(benefit.accent)}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
                      ROI-0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-heading font-extrabold text-white tracking-normal group-hover:text-white transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-2xs sm:text-xs text-[#B5B5B5] leading-relaxed mt-2.5">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.04]">
                  <span className="text-[9px] font-mono tracking-wider text-white/30 group-hover:text-[#00C2FF] transition-colors">
                    Leverage Channel →
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
