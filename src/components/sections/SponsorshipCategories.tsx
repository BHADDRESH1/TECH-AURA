/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Mail, Calendar } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import InteractiveButton from '../ui/InteractiveButton';

interface CategoryItem {
  id: string;
  name: string;
  price: string;
  slots: string;
  isPopular?: boolean;
  tier: 'vanguard' | 'technical' | 'academic';
  benefits: string[];
}

const CATEGORIES: CategoryItem[] = [
  // 1. Vanguard Group
  {
    id: 'cat-1',
    name: 'Title Sponsor',
    price: '₹2,00,000',
    slots: '1 Slot Max',
    isPopular: true,
    tier: 'vanguard',
    benefits: [
      'Maximum brand real estate on main pavilion',
      'Exclusive 30-minute keynote session',
      'VIP lounge seating and unlimited corporate host entries',
      'Full website & digital signage real estate'
    ]
  },
  {
    id: 'cat-2',
    name: 'Co-Title Sponsor',
    price: '₹1,50,000',
    slots: '2 Slots Available',
    tier: 'vanguard',
    benefits: [
      'Secondary brand placement on stage arches',
      'Dedicated exhibition booth (Triple Bay)',
      'Direct contact sharing for all regional finalists',
      'Prominent digital collateral logo inclusion'
    ]
  },
  {
    id: 'cat-3',
    name: 'Powered By Sponsor',
    price: '₹1,00,000',
    slots: '2 Slots Available',
    tier: 'vanguard',
    benefits: [
      'Anchor billing as Strategic Infrastructure Partner',
      'Dedicated branding on delegate badges',
      'Full-page feature in print & digital exhibition directories'
    ]
  },
  {
    id: 'cat-4',
    name: 'Platinum Sponsor',
    price: '₹50,000',
    slots: '3 Slots Available',
    tier: 'vanguard',
    benefits: [
      'Logo visibility across zonal platforms',
      'Standard double-bay exhibition area',
      '5 complimentary VIP access tickets'
    ]
  },
  // 2. Technical Domain Partners
  {
    id: 'cat-5',
    name: 'Innovation Partner',
    price: '₹75,000',
    slots: '2 Slots Available',
    tier: 'technical',
    benefits: [
      'Exclusive title tracking of main incubation block',
      'Deliver custom problem hackathon tracks',
      'First-right-refusal for post-event mentoring dockets'
    ]
  },
  {
    id: 'cat-6',
    name: 'Startup Partner',
    price: '₹75,000',
    slots: '2 Slots Available',
    tier: 'technical',
    benefits: [
      'Prominent branding and sponsor placement across startup zones',
      'Feature profile logo on 75+ startup booths',
      'Direct panel slots on investor-startup forums'
    ]
  },
  {
    id: 'cat-7',
    name: 'Technology Partner',
    price: '₹50,000',
    slots: '2 Slots Available',
    tier: 'technical',
    benefits: [
      'Showcase proprietary integrations to developers',
      'Logo on technical tracks and engineering guides',
      'Corporate developer advocates on evaluation panels'
    ]
  },
  {
    id: 'cat-8',
    name: 'Incubation Partner',
    price: '₹50,000',
    slots: '2 Slots Available',
    tier: 'technical',
    benefits: [
      'Direct screening tracks for emerging startup teams',
      'Strategic mentorship alignment with promising finalists',
      'Official partner recognition across incubation avenues'
    ]
  },
  // 3. Academic & Community Enablers
  {
    id: 'cat-9',
    name: 'Internship Partner',
    price: '₹30,000',
    slots: '5 Slots Available',
    tier: 'academic',
    benefits: [
      'Direct recruitment pipeline of up to 40 candidates',
      'Custom placement portal access on-ground',
      'Specialized branding on recruiting screens'
    ]
  },
  {
    id: 'cat-10',
    name: 'Hiring Partner',
    price: '₹30,000',
    slots: '5 Slots Available',
    tier: 'academic',
    benefits: [
      'Exhibition resume database access (first-rights)',
      'Interview room availability on pavilion days',
      'Consolidated candidate profiles delivery post-expo'
    ]
  },
  {
    id: 'cat-11',
    name: 'Knowledge Partner',
    price: '₹25,000',
    slots: '5 Slots Available',
    tier: 'academic',
    benefits: [
      'Host direct technical workshops during zonals',
      'Incorporate learning curricula as recommended criteria',
      'Branded digital certificate integrations'
    ]
  },
  {
    id: 'cat-12',
    name: 'Media Partner',
    price: '₹20,000',
    slots: '3 Slots Available',
    tier: 'academic',
    benefits: [
      'Live podcast/broadcast setup at prime entrance area',
      'Exemplary branding across media panels',
      'Co-branded interview snippets with judges'
    ]
  },
  {
    id: 'cat-13',
    name: 'Community Partner',
    price: 'Free Access',
    slots: 'Unlimited Available',
    tier: 'academic',
    benefits: [
      'Share digital invitation banners across communities',
      'Official community logo representation listing',
      'Delegate passes for community core teams'
    ]
  }
];

export default function SponsorshipCategories() {
  const [activeTier, setActiveTier] = useState<'vanguard' | 'technical' | 'academic'>('vanguard');

  const filteredCategories = CATEGORIES.filter(cat => cat.tier === activeTier);

  const handleApplyNow = (category: string) => {
    alert(`System Message: Request to establish alliance for "${category}" recognized. Executive documents and transaction instructions have been mapped for delivery.`);
  };

  return (
    <SectionContainer id="categories-section" className="bg-[#050505] relative pt-24 pb-32">
      <div className="absolute inset-0 grid-bg opacity-[0.22] pointer-events-none z-0" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/20 uppercase">
          Sponsorship Allocations
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-4">
          Sponsorship Categories
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          Uncompromised marketing exposure surfaces, VIP credentials distribution, and technical recruitment access across 13 unique strategic lanes.
        </p>

        {/* Categories Tab Selector with Premium Slider pill */}
        <div className="flex items-center justify-center gap-2 mt-10 p-1 bg-white/[0.02] border border-white/5 rounded-full max-w-md mx-auto backdrop-blur-md">
          {(['vanguard', 'technical', 'academic'] as const).map((tierType) => (
            <button
              key={tierType}
              onClick={() => setActiveTier(tierType)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider font-semibold uppercase cursor-pointer transition-all duration-300 ${
                activeTier === tierType
                  ? 'bg-[#D4AF37] text-black font-extrabold shadow-[0_2px_10px_rgba(212,175,55,0.2)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {tierType === 'vanguard' ? 'Vanguard' : tierType === 'technical' ? 'Technical' : 'Enablers'}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              <GlassCard
                accent={cat.isPopular ? 'gold' : 'none'}
                className="h-full flex flex-col justify-between py-8 px-7 relative"
              >
                {/* Popularity Visual Anchor */}
                {cat.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/35 text-[9px] font-mono rounded px-2.5 py-0.5 tracking-widest font-bold uppercase animate-pulse">
                    HIGHLY EXCLUSIVE
                  </div>
                )}

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00C2FF] font-semibold">
                    Tier Category
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight mt-1">
                    {cat.name}
                  </h3>

                  <div className="mt-4 pb-4 border-b border-white/[0.04] flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-[#D4AF37] tracking-tight">
                      {cat.price}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">
                      {cat.slots}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {cat.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-[#00C2FF] mt-0.5 shrink-0" />
                        <span className="text-2xs sm:text-xs text-[#B5B5B5]/90 leading-normal">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.04] flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest leading-none">Agreement</span>
                    <span className="text-[10px] font-semibold text-white tracking-wide mt-1">MoU Enabled</span>
                  </div>
                  
                  <InteractiveButton
                    variant={cat.isPopular ? 'primary-gold' : 'glass'}
                    size="sm"
                    onClick={() => handleApplyNow(cat.name)}
                    className="shrink-0"
                  >
                    Partner Now
                  </InteractiveButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}
