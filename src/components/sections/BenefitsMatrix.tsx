/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, Minus, HelpCircle, ShieldAlert } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';

interface MatrixRow {
  benefit: string;
  category: 'Branding' | 'Exhibition' | 'Engagement' | 'Talent';
  title: string;       // Title Sponsor (₹2L)
  coTitle: string;     // Co-Title Sponsor (₹1.5L)
  platinum: string;    // Platinum/Powered-By Sponsor (₹50k-₹1L)
  partners: string;    // Special Track Partners (₹30k-₹75k)
}

const MATRIX_ROWS: MatrixRow[] = [
  {
    benefit: 'Website Logo',
    category: 'Branding',
    title: 'Prominent Premium Placement (Top Hub)',
    coTitle: 'Bold Primary Alignment',
    platinum: 'Standard Tier Representation',
    partners: 'Grid Allocation'
  },
  {
    benefit: 'Stage Branding',
    category: 'Branding',
    title: 'Mega Center Stage Arch Projection + Audio Roll',
    coTitle: 'Primary Banner Side Pillars',
    platinum: 'Co-Branded Stage Footer Banners',
    partners: 'None'
  },
  {
    benefit: 'Exhibition Booth',
    category: 'Exhibition',
    title: 'Custom Pavilion Space (4x4m Triple Bay)',
    coTitle: 'Double Bay Space (3x3m)',
    platinum: 'Standard Bay Space (3x3m)',
    partners: 'Recruiting Kiosk (2x2m)'
  },
  {
    benefit: 'Social Media Promotion',
    category: 'Branding',
    title: 'Dynamic Pre, Mid, Post Series (6 posts)',
    coTitle: 'Integration Spotlight Series (4 posts)',
    platinum: 'Standard Co-Partner Mention (2 posts)',
    partners: 'Standard Joint Post (1 post)'
  },
  {
    benefit: 'Speaking Opportunity',
    category: 'Engagement',
    title: '30-minute Corporate Keynote Slot',
    coTitle: '15-minute Specialized Presentation Slot',
    platinum: 'None (Panelist Slot)',
    partners: 'None'
  },
  {
    benefit: 'Video Advertisement',
    category: 'Branding',
    title: '60s High-Res Loop on Main Stage Screens',
    coTitle: '30s Loop on Stage Screens',
    platinum: '15s Loop on Stage Screens',
    partners: 'None'
  },
  {
    benefit: 'Press Coverage',
    category: 'Branding',
    title: 'Name inclusion in all national press releases',
    coTitle: 'Tier logo inclusion in select media articles',
    platinum: 'None',
    partners: 'None'
  },
  {
    benefit: 'VIP Networking',
    category: 'Engagement',
    title: 'Executive VIP Lounge Access & Elite Networking Passes',
    coTitle: 'Standard VIP Lounge Access',
    platinum: 'Exhibition VIP Entry Passes (5 units)',
    partners: 'Exhibition Passes (2 units)'
  },
  {
    benefit: 'Recruitment Support',
    category: 'Talent',
    title: 'Direct Access to Student Recruitment Database',
    coTitle: 'Access to Finalists Merit Database',
    platinum: 'Interview Space Assistance',
    partners: 'General Resume Folder Access'
  },
  {
    benefit: 'Student Access',
    category: 'Talent',
    title: 'Define custom evaluation benchmarks & lead mentoring sessions',
    coTitle: 'Host specialized track problem statement evaluation',
    platinum: 'Student Volunteer Coordinator Allocation',
    partners: 'Targeted internship direct review channels'
  }
];

export default function BenefitsMatrix() {
  return (
    <SectionContainer id="benefits-matrix-section" className="bg-[#0D0D0D]/30 relative pt-24 pb-32">
      <div className="absolute inset-0 grid-bg opacity-[0.11] pointer-events-none z-0" />

      {/* Title Segment */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
            Value Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Benefits Matrix
          </h2>
          <p className="text-sm md:text-base text-[#B5B5B5] max-w-xl mt-3">
            A meticulous multi-tiered breakdown showing marketing exposure and operational support allocations across major categories.
          </p>
        </div>

        <div className="px-4 py-2 bg-white/[0.01] border border-white/5 rounded-xl font-mono text-[9px] text-gray-500 max-w-xs">
          💡 Swipe horizontally to view full tier comparison data on smaller screens.
        </div>
      </div>

      {/* Enterprise Desk Table Container */}
      <div className="w-full overflow-x-auto relative rounded-3xl border border-white/5 bg-[#050505]/60 backdrop-blur-md scrollbar-thin scrollbar-thumb-white/10">
        <table className="w-full border-collapse min-w-[900px] text-left">
          
          {/* Header Segment */}
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.01]">
              <th className="py-6 px-8 text-2xs font-mono tracking-widest text-gray-500 uppercase font-semibold">
                Core Deliverable
              </th>
              <th className="py-6 px-6 text-2xs font-mono tracking-widest text-gray-500 uppercase font-semibold">
                Class
              </th>
              <th className="py-6 px-6 text-[#D4AF37] font-heading font-extrabold text-sm tracking-wide">
                Title Tier
                <span className="block text-[8px] font-mono text-[#D4AF37]/50 tracking-wider font-medium uppercase mt-0.5">
                  ₹2,00,000 / 1 Slot
                </span>
              </th>
              <th className="py-6 px-6 text-white font-heading font-extrabold text-sm tracking-wide">
                Co-Title Tier
                <span className="block text-[8px] font-mono text-white/50 tracking-wider font-medium uppercase mt-0.5">
                  ₹1,50,000 / 2 Slots
                </span>
              </th>
              <th className="py-6 px-6 text-[#00C2FF] font-heading font-extrabold text-sm tracking-wide">
                Gold & Platinum
                <span className="block text-[8px] font-mono text-[#00C2FF]/50 tracking-wider font-medium uppercase mt-0.5">
                  ₹50,000 - ₹1,00,000
                </span>
              </th>
              <th className="py-6 px-6 text-[#B5B5B5] font-heading font-extrabold text-sm tracking-wide">
                Specialty Partners
                <span className="block text-[8px] font-mono text-gray-500 tracking-wider font-medium uppercase mt-0.5">
                  ₹20,000 - ₹50,000
                </span>
              </th>
            </tr>
          </thead>

          {/* Body Rows */}
          <tbody>
            {MATRIX_ROWS.map((row, idx) => {
              const classColors: Record<string, string> = {
                Branding: 'text-[#00C2FF] bg-[#00C2FF]/5 border-[#00C2FF]/10',
                Exhibition: 'text-[#D4AF37] bg-[#D4AF37]/5 border-[#D4AF37]/10',
                Engagement: 'text-[#8F00FF] bg-[#8F00FF]/5 border-[#8F00FF]/10',
                Talent: 'text-emerald-400 bg-emerald-400/5 border-emerald-400/10'
              };

              return (
                <tr 
                  key={row.benefit} 
                  className={`border-b border-white/[0.03] transition-colors duration-150 hover:bg-white/[0.01]`}
                >
                  {/* Benefit Label */}
                  <td className="py-5 px-8 font-heading font-bold text-sm text-white max-w-xs">
                    {row.benefit}
                  </td>

                  {/* Benefit Class */}
                  <td className="py-5 px-6">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase border ${classColors[row.category]}`}>
                      {row.category}
                    </span>
                  </td>

                  {/* Title Tier Value */}
                  <td className="py-5 px-6 font-mono text-xs text-[#D4AF37]/90 leading-relaxed font-medium">
                    {row.title === 'None' ? (
                      <span className="text-gray-600">—</span>
                    ) : (
                      row.title
                    )}
                  </td>

                  {/* Co-Title Tier Value */}
                  <td className="py-5 px-6 font-mono text-xs text-white/90 leading-relaxed">
                    {row.coTitle === 'None' ? (
                      <span className="text-gray-600">—</span>
                    ) : (
                      row.coTitle
                    )}
                  </td>

                  {/* Platinum Tier Value */}
                  <td className="py-5 px-6 font-mono text-xs text-[#00C2FF]/90 leading-relaxed">
                    {row.platinum === 'None' ? (
                      <span className="text-gray-600">No Allocation</span>
                    ) : (
                      row.platinum
                    )}
                  </td>

                  {/* Specialty Tier Value */}
                  <td className="py-5 px-6 font-mono text-xs text-[#B5B5B5]/90 leading-relaxed">
                    {row.partners === 'None' ? (
                      <span className="text-gray-600">No Allocation</span>
                    ) : (
                      row.partners
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  );
}
