/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, Globe, ShieldCheck, Cpu, Library, Users, BarChart, HardDrive 
} from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';

interface TrustFocus {
  title: string;
  sub: string;
  description: string;
  icon: React.ComponentType<any>;
}

const FOCUSES: TrustFocus[] = [
  {
    title: 'Prototype Screening',
    sub: 'Pre-vetted Submissions',
    description: 'We prioritize functional viability. Over 250+ teams present prototype entries spanning AI/ML applications, robotics, cyber defense, and green technology architectures.',
    icon: Cpu
  },
  {
    title: 'Research & Development',
    sub: 'Applied Technologies',
    description: 'Establish beneficial connections with young academic researchers, enabling your brand to survey next-generation engineering prototypes and research papers.',
    icon: Library
  },
  {
    title: 'Talent Acquisition',
    sub: 'Diverse Student Pool',
    description: 'Access top student teams skilled in computer science, software architectures, advanced robotics, and electronics engineering for on-ground hiring.',
    icon: Users
  },
  {
    title: 'Corporate Alignment',
    sub: 'Ecosystem Mentoring',
    description: 'Align your corporate strategy with emerging engineering talent pools, providing direct feedback and guidance to young developers.',
    icon: ShieldCheck
  },
  {
    title: 'Aesthetic Brand Visibility',
    sub: 'Multi-Channel Presence',
    description: 'Secure premier brand exposure across high-density exhibition stands, digital web portals, and associated social media tracks.',
    icon: Globe
  },
  {
    title: 'Field Execution',
    sub: 'On-Ground Engagement',
    description: 'Deploy your developer advocates, evaluate working hardware and software stacks live on the main floor, and establish custom mentoring pipelines.',
    icon: HardDrive
  }
];

export default function CorporateTrust() {
  return (
    <SectionContainer id="corporate-trust-section" className="bg-[#050505] border-t border-b border-white/[0.02]" gridBackground={true}>
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        
        {/* Left segment - Executive Column */}
        <div className="w-full md:w-5/12 sticky top-24">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/20 uppercase">
            Executive Briefing
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-5 leading-tight">
            Designed for Collaboration & Absolute Strategic Value
          </h2>
          <p className="text-sm md:text-base text-[#B5B5B5] leading-relaxed mt-5">
            TECH AURA 2026 represents a highly curated, national student innovation exposition, bringing together early-stage tech creators, academic researchers, corporate judges, and student delegates across one unified national platform.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle size={15} className="text-[#00C2FF] mt-1 shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-white">Direct Engagement Pipelines</span>
                <span className="text-2xs text-[#B5B5B5]">Facilitate interactive networking and active dialogue with prototype engineers on-ground.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle size={15} className="text-[#D4AF37] mt-1 shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-white">Comprehensive ROI Reporting</span>
                <span className="text-2xs text-[#B5B5B5]">Receive precise post-event statistics, participant metrics, and brand distribution reports.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right segment - Focus grid cards */}
        <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FOCUSES.map((focus, idx) => {
            const Icon = focus.icon;
            return (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
              >
                <GlassCard className="py-6 px-6 h-full border-white/[0.04] bg-[#050505]/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-xl text-[#00C2FF]">
                        <Icon size={16} />
                      </div>
                      <span className="text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold bg-[#D4AF37]/5 border border-[#D4AF37]/10 px-2 py-0.5 rounded">
                        {focus.sub}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-normal mb-2.5">
                      {focus.title}
                    </h3>

                    <p className="text-2xs sm:text-xs text-[#B5B5B5] leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>

    </SectionContainer>
  );
}
