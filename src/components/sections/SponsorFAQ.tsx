/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, Info, Award, ShieldCheck } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'RECRUITMENT' | 'STAGING' | 'PARTNERS' | 'LOGISTICS';
}

const FAQS_DATA: FaqItem[] = [
  {
    id: 1,
    question: "Can companies recruit students?",
    category: "RECRUITMENT",
    answer: "Yes. Core sponsors receive structured access to Sathyabama's high-performance candidate databases, pre-verified CV indexes across diverse tech domains, and on-ground private interviewer cubicles."
  },
  {
    id: 2,
    question: "Can sponsors conduct workshops?",
    category: "STAGING",
    answer: "Yes. High-tier strategic partners can secure scheduled technical workshops, tech-stack masterclasses, or open sandbox demonstrations in designated lecture theatres."
  },
  {
    id: 3,
    question: "Can startups showcase products?",
    category: "STAGING",
    answer: "Yes. Early-stage, growth-stage, and deep-tech teams can reserve space inside the primary Startup Exhibition pavilion to showcase functional prototypes under standard commercial formats."
  },
  {
    id: 4,
    question: "Can incubators participate?",
    category: "PARTNERS",
    answer: "Yes. We offer strategic incubation clusters where regional incubators can present multiple pre-vetted portfolio companies and engage directly with seed networks."
  },
  {
    id: 5,
    question: "Can investors interact with startups?",
    category: "PARTNERS",
    answer: "Yes. Dedicated investor lounges coordinate private roundtables, closed pitch sequences, and strategic networking sessions throughout the exposition timeline."
  },
  {
    id: 6,
    question: "Can organizations reserve multiple stalls?",
    category: "STAGING",
    answer: "Yes. Organizations can aggregate adjacent booth structures to expand their on-ground demo pavilion footprint, subject to layout availability and administrative approval."
  },
  {
    id: 7,
    question: "Can sponsorship benefits be customized?",
    category: "PARTNERS",
    answer: "Yes. Our executive operations board permits tailored integration profiles, custom branding placements, and targeted student engagement modules for platinum partnerships."
  },
  {
    id: 8,
    question: "Can international companies participate?",
    category: "PARTNERS",
    answer: "Yes. Global agencies and overseas enterprise groups can establish digital showcase interfaces, remote demonstration desks, or delegate representation hubs."
  },
  {
    id: 9,
    question: "Can organizations sign MoUs?",
    category: "PARTNERS",
    answer: "Yes. Sathyabama’s administration welcomes strategic, long-term industry-academia alignments and coordinates on-site signing ceremonies during flagship sessions."
  },
  {
    id: 10,
    question: "How many visitors are expected?",
    category: "LOGISTICS",
    answer: "The exposition expects over 15,000 professional attendees, including academic researchers, premier student developers, startup founders, venture capitalists, and brand stakeholders."
  },
  {
    id: 11,
    question: "Can companies conduct product launches?",
    category: "STAGING",
    answer: "Yes. Major sponsors can coordinate central keynotes or scheduled product launches supported by state-of-the-art visual systems and national media coverage."
  },
  {
    id: 12,
    question: "Can sponsors display banners?",
    category: "STAGING",
    answer: "Yes. Brand positioning assets, physical scroll banners, external architectural rollups, and digital terminal graphics are distributed according to assigned package rights."
  },
  {
    id: 13,
    question: "Will accommodation be available?",
    category: "LOGISTICS",
    answer: "Yes. Out-of-state representatives can leverage coordinated partner hotel tariffs, pre-vetted local transit networks, and comfortable campus VIP guest blocks."
  }
];

export default function SponsorFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'RECRUITMENT' | 'STAGING' | 'PARTNERS' | 'LOGISTICS'>('ALL');

  const categories = [
    { label: 'ALL INQUIRIES', value: 'ALL' },
    { label: 'RECRUITMENT & TALENT', value: 'RECRUITMENT' },
    { label: 'STALLS & STAGING', value: 'STAGING' },
    { label: 'ALLIANCES & INVESTORS', value: 'PARTNERS' },
    { label: 'LOGISTICS & OPERATIONS', value: 'LOGISTICS' }
  ] as const;

  const filteredFaqs = activeCategory === 'ALL' 
    ? FAQS_DATA 
    : FAQS_DATA.filter(faq => faq.category === activeCategory);

  return (
    <SectionContainer id="faq-accordions" className="bg-[#050505] border-b border-white/[0.04]">
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative">
        <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
          Factual Support Matrix
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          Review direct structural answers to strategic questions on sponsorship recruitment pathways, operational coordination, and brand positioning formats.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Category filtering rails */}
        <div className="flex flex-wrap justify-center gap-2 pb-6 border-b border-white/[0.03]">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setActiveId(null);
              }}
              className={`px-4 py-2 text-3xs font-mono font-bold tracking-wider rounded-full border transition-all duration-300 ${
                activeCategory === cat.value
                  ? cat.value === 'ALL'
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#D4AF37]'
                  : 'bg-transparent border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions rendering block */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isOpen = activeId === faq.id;
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white/[0.02] border-white/10 shadow-[0_4px_30px_rgba(255,255,255,0.01)]' 
                      : 'bg-white/[0.005] border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setActiveId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Mini indicator icon */}
                      <HelpCircle size={16} className={`shrink-0 mt-1 transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                      
                      <div className="space-y-1">
                        <span className="inline-block text-[8px] font-mono tracking-widest text-[#00C2FF] font-semibold select-none">
                          {faq.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-heading font-bold text-white tracking-wide leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`p-1.5 rounded-full bg-white/[0.01] border border-white/5 text-gray-400 transition-all duration-300 ${isOpen ? 'rotate-90 border-[#D4AF37]/20 text-[#D4AF37]' : ''}`}>
                      <ChevronRight size={14} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#B5B5B5] leading-relaxed border-t border-white/[0.03] space-y-3">
                          <p>{faq.answer}</p>
                          <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-gray-500">
                            <ShieldCheck size={11} className="text-[#00C2FF]" />
                            <span>Academic & Commercial Integrity Vetted Framework</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Fallback info layout */}
        <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between">
          <div className="flex items-center gap-3">
            <Info size={16} className="text-[#00C2FF]" />
            <span className="text-2xs font-mono text-gray-400 uppercase tracking-widest">
              Need detailed custom architectural clearances?
            </span>
          </div>
          <a
            href="mailto:info@dominova.tech"
            className="text-2xs font-mono font-bold text-[#D4AF37] hover:underline"
          >
            STAGINGADMIN@DOMINOVA.TECH
          </a>
        </div>

      </div>
    </SectionContainer>
  );
}
