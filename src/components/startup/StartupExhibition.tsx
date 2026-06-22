/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Filter, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  UserPlus, 
  Share2, 
  Megaphone, 
  Sprout, 
  Cpu, 
  Building, 
  FlaskConical, 
  GraduationCap, 
  Microscope, 
  Atom, 
  Check, 
  ArrowRight, 
  Download, 
  Calendar, 
  Mail, 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  AlertCircle, 
  Info, 
  Send,
  Sparkles,
  Layers,
  ChevronRight,
  MapPin,
  Clock,
  HelpCircle,
  X
} from 'lucide-react';

import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import AmbientOrb from '../ui/AmbientOrb';
import InteractiveButton from '../ui/InteractiveButton';

// -------------------------------------------------------------
// Core Data Structures
// -------------------------------------------------------------

interface PackageTier {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  badge?: string;
  description: string;
  features: string[];
  accent: 'cyan' | 'gold' | 'purple';
}

const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'pkg-standard',
    name: 'STANDARD',
    price: '₹16,400',
    rawPrice: 16400,
    description: 'Essential exhibition capacity designed for early-stage teams looking to validate products with raw builder demographics.',
    features: [
      'Standard Placement',
      'Student Interaction',
      'Startup Visibility',
      'Event Listing'
    ],
    accent: 'cyan'
  },
  {
    id: 'pkg-growth',
    name: 'GROWTH',
    price: '₹24,800',
    rawPrice: 24800,
    badge: 'MOST POPULAR',
    description: 'Enhanced exposure positioning designed for funded or post-revenue teams seeking premium brand distribution channels.',
    features: [
      'Prime Placement',
      'Enhanced Branding',
      'Social Media Feature',
      'Higher Engagement'
    ],
    accent: 'gold'
  },
  {
    id: 'pkg-premium',
    name: 'PREMIUM',
    price: '₹38,600',
    rawPrice: 38600,
    badge: 'ELITE ENGAGEMENT',
    description: 'Sovereign presentation space with dedicated customer interface modules and exclusive access to the central investor hub.',
    features: [
      'Best Hall Placement',
      'Dedicated Demo Zone',
      'Founder Networking',
      'Priority Media Coverage',
      'Post Event Promotion'
    ],
    accent: 'purple'
  }
];

interface StallBenefit {
  title: string;
  description: string;
  icon: typeof Rocket;
  accent: string;
}

const STALL_BENEFITS: StallBenefit[] = [
  {
    title: 'Launch Products',
    description: 'Evaluate prototypes live in front of tech builders, developers, and potential initial test user cohorts.',
    icon: Rocket,
    accent: '#00C2FF'
  },
  {
    title: 'Generate Leads',
    description: 'Capture detailed interest from innovative student groups, engineering partners, and prospective clients.',
    icon: Filter,
    accent: '#D4AF37'
  },
  {
    title: 'Meet Customers',
    description: 'Secure instant real-world product usage feedback loops and understand immediate local market demands.',
    icon: Users,
    accent: '#a855f7'
  },
  {
    title: 'Investor Access',
    description: 'Engage with corporate representatives, institutional scouts, and advisory venture panelists.',
    icon: TrendingUp,
    accent: '#22c55e'
  },
  {
    title: 'Collect Feedback',
    description: 'Initiate physical quality evaluation parameters and benchmark application performance against on-site logs.',
    icon: MessageSquare,
    accent: '#00C2FF'
  },
  {
    title: 'Recruitment',
    description: 'Interview, pre-vet, and acquire leading national student engineering, design, and product managers directly.',
    icon: UserPlus,
    accent: '#D4AF37'
  },
  {
    title: 'Networking',
    description: 'Build strategic long-term connections with fellow founders, technology leaders, and educational supervisors.',
    icon: Share2,
    accent: '#a855f7'
  },
  {
    title: 'Brand Awareness',
    description: 'Establish high-visibility placement across diverse digital, on-floor media, and national press networks.',
    icon: Megaphone,
    accent: '#3b82f6'
  }
];

interface ParticipantCategory {
  title: string;
  description: string;
  icon: typeof Sprout;
  useCase: string;
}

const PARTICIPANT_CATEGORIES: ParticipantCategory[] = [
  {
    title: 'Early-stage Startups',
    description: 'Teams validating post-development functional prototypes looking for immediate pre-market momentum.',
    icon: Sprout,
    useCase: 'Deploy pre-alpha software/hardware versions to gather mass data.'
  },
  {
    title: 'Growth-stage Startups',
    description: 'Scale-oriented groups optimizing unit economics and looking to announce live talent-recruitment tracks.',
    icon: TrendingUp,
    useCase: 'Source technical leads and lock in next-gen client contracts.'
  },
  {
    title: 'Technology Companies',
    description: 'Established firms demoing dev platforms, sandbox products, hardware systems, or APIs to builder communities.',
    icon: Cpu,
    useCase: 'Increase proprietary tool adoption rates among student developers.'
  },
  {
    title: 'Incubators',
    description: 'Institutional accelerators representing startup batches looking for strategic visibility.',
    icon: Building,
    useCase: 'Secure co-investment opportunities for existing portfolio cohorts.'
  },
  {
    title: 'Innovation Labs',
    description: 'Corporate and state-backed research groups showcasing long-term disruptive hardware prototypes.',
    icon: FlaskConical,
    useCase: 'Identify commercial use cases for deep-tech research milestones.'
  },
  {
    title: 'Student Startups',
    description: 'Academic-led technology groups seeking raw validation and startup launch guidance.',
    icon: GraduationCap,
    useCase: 'Apply for incubation grants and meet expert technical mentors.'
  },
  {
    title: 'Research Teams',
    description: 'University-associated researchers seeking strategic pathways to market and technology licenses.',
    icon: Microscope,
    useCase: 'Co-develop patents and identify commercial production partners.'
  },
  {
    title: 'Deep Tech Ventures',
    description: 'Teams creating complex solutions spanning material science, applied physics, AI, or core cyber defense.',
    icon: Atom,
    useCase: 'Present specialized proofs-of-concept to venture panels.'
  }
];

interface ValueProp {
  title: string;
  description: string;
}

const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Product Visibility',
    description: 'Present operational software applications or hardware installations to over 15,000 active students and professional attendees in high-density exhibition environments.'
  },
  {
    title: 'Networking',
    description: 'Participate in structured collaboration workshops with university heads, national incubator networks, corporate sponsors, and deep-tech founders.'
  },
  {
    title: 'Brand Exposure',
    description: 'Enhance your brand presence alongside leading national corporations, technical associations, and featured academic innovation teams featured in official communications.'
  },
  {
    title: 'Student Engagement',
    description: 'Connect directly with high-performance candidates trained in fields such as advanced robotics, computer science, next-gen systems, and cyber security.'
  },
  {
    title: 'Industry Connections',
    description: 'Interact with corporate evaluator and advisory tables, enabling real-time professional review of startup architectures and commercial products.'
  },
  {
    title: 'Innovation Showcase',
    description: 'Position your organization as an active leader within a high-credibility, research-driven technical exhibition hub built on practical field validation.'
  }
];

interface JourneyStep {
  title: string;
  description: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    title: 'Reserve Stall',
    description: 'Submit your formal reservation request with selected tier preferences via our secure digital partner allocation portal.'
  },
  {
    title: 'Confirmation',
    description: 'Receive strategic review and credentials confirmation, verifying eligibility parameters for high-fidelity booth staging.'
  },
  {
    title: 'Booth Allocation',
    description: 'Secure precise booth configurations, electrical systems layout, and digital access passes to the prime exhibition floor.'
  },
  {
    title: 'Event Participation',
    description: 'Stage live product demonstrations on the showroom floor, engaging deeply with active reviewers, partners, and user candidates.'
  },
  {
    title: 'Networking',
    description: 'Engage in dedicated investor-startup roundtable sessions, professional mentorship pipelines, and on-site executive luncheons.'
  },
  {
    title: 'Post Event Follow-up',
    description: 'Receive detailed brand engagement statistics, participant traction figures, and resume libraries for hiring pipelines.'
  }
];

export default function StartupExhibition() {
  const [selectedTier, setSelectedTier] = useState<'STANDARD' | 'GROWTH' | 'PREMIUM'>('GROWTH');
  
  // Interface state for interactive booking engine
  const [bCompany, setBCompany] = useState('');
  const [bFounder, setBFounder] = useState('');
  const [bEmail, setBEmail] = useState('');
  const [bTier, setBTier] = useState<'Standard' | 'Growth' | 'Premium'>('Growth');
  const [bPitch, setBPitch] = useState('');
  
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const bookingFormRef = useRef<HTMLDivElement>(null);

  const handleScrollToBooking = (tierName?: 'Standard' | 'Growth' | 'Premium') => {
    if (tierName) {
      setBTier(tierName);
    }
    bookingFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bCompany || !bFounder || !bEmail) {
      return;
    }

    // Persist to local storage to demonstrate functioning client-side persistence
    const newReservation = {
      id: `res-${Date.now()}`,
      company: bCompany,
      founder: bFounder,
      email: bEmail,
      tier: bTier,
      pitch: bPitch,
      date: new Date().toISOString(),
      statusCode: 'PENDING_ADVISORY_CONFIRMATION'
    };

    const saved = JSON.parse(localStorage.getItem('tech_aura_startup_reservations') || '[]');
    saved.push(newReservation);
    localStorage.setItem('tech_aura_startup_reservations', JSON.stringify(saved));

    setBookingStatus('success');
  };

  const resetBookingForm = () => {
    setBCompany('');
    setBFounder('');
    setBEmail('');
    setBPitch('');
    setBookingStatus('idle');
  };

  const faqs = [
    {
      q: "What equipment is included in each standard startup booth?",
      a: "All basic packages include a professional wooden shell booth, custom title panel vinyl printing, one unified 5A electricity inlet, dual high-back chairs, carpet flooring, and access to secure central client Wi-Fi circuits."
    },
    {
      q: "Can we sell products or clear commercial licenses on the floor?",
      a: "Yes. Direct commercial engagement, corporate license negotiations, software sign-ups, and pre-sales agreements are encouraged on-ground within our professional exposition boundaries."
    },
    {
      q: "How are the investor roundtables structured?",
      a: "Startups registered under Growth and Premium plans receive scheduled invitations to participate in closed sessions with corporate venture teams, academic advisors, and regional institutional representatives."
    }
  ];

  return (
    <div className="relative w-full pt-[72px]">
      
      {/* -------------------------------------------------------------
          SECTION 1 – HERO
         ------------------------------------------------------------- */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col justify-center min-h-[85vh] border-b border-white/[0.04] bg-radial from-[#050505] via-[#050505] to-[#0d0d1e]/10">
        
        {/* Subtle, beautiful ambient decorations */}
        <AmbientOrb color="cyan" size="lg" className="top--20 left--10 opacity-30" />
        <AmbientOrb color="gold" size="md" className="bottom-10 right--10 opacity-20" />
        <div className="absolute inset-0 grid-bg opacity-[0.25] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs text-[#D4AF37] font-semibold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} className="animate-pulse" />
            Exposition Applications Live
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
            id="startup-hero-heading"
          >
            Startup Exhibition <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">Opportunities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed mt-6 mb-10"
          >
            Showcase your products, connect with thousands of students, engage with industry leaders, and expand your network through TECH AURA 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <InteractiveButton 
              variant="primary-gold" 
              size="lg" 
              className="w-full sm:w-auto"
              icon={<ArrowRight size={16} className="text-black" />}
              onClick={() => { window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20Startup%20Stall%20Booking"; }}
              id="startup-hero-btn-book"
            >
              Book Startup Stall
            </InteractiveButton>

            <div className="relative group w-full sm:w-auto">
              <button 
                disabled
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/5 bg-white/[0.01] text-gray-500 text-base font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                id="startup-hero-btn-disabled"
              >
                <Download size={16} /> Coming Soon
              </button>
              <span className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 bg-black border border-white/10 text-[9px] font-mono rounded px-2 py-0.5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Trust Footprint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/[0.03] max-w-4xl mx-auto text-left"
          >
            <div className="border-l border-[#00C2FF]/30 pl-4">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Global Exposure</span>
              <span className="text-sm font-bold text-white mt-1 block">15,000+ Visitors</span>
            </div>
            <div className="border-l border-[#D4AF37]/30 pl-4">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Investor Access</span>
              <span className="text-sm font-bold text-white mt-1 block">50+ VCs & Angels</span>
            </div>
            <div className="border-l border-purple-500/30 pl-4">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Sovereign Focus</span>
              <span className="text-sm font-bold text-white mt-1 block">250+ Dev Teams</span>
            </div>
            <div className="border-l border-green-500/30 pl-4">
              <span className="block text-2xs font-mono text-gray-500 uppercase tracking-widest">Corporate Hubs</span>
              <span className="text-sm font-bold text-white mt-1 block">30+ Industry Leads</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          SECTION 2 – EXHIBITION PACKAGES
         ------------------------------------------------------------- */}
      <SectionContainer id="startup-packages" className="bg-[#050505] border-b border-white/[0.04]" gridBackground={true}>
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
            Sovereign Rates
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Exhibition Packages
          </h2>
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
            Select the tier adapted to your phase of commercial or technological growth. Each placement offers optimal on-ground infrastructure.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PACKAGE_TIERS.map((tier, index) => {
            const isSelected = selectedTier === tier.name;
            const isGold = tier.accent === 'gold';
            const isPurple = tier.accent === 'purple';
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Visual Accent glow */}
                <div className={`absolute inset-0 rounded-[24px] filter blur-xl opacity-[0.03] transition-opacity duration-300 pointer-events-none ${
                  isGold ? 'bg-[#D4AF37]/50' : isPurple ? 'bg-purple-500/50' : 'bg-[#00C2FF]/50'
                }`} />

                <div 
                  onClick={() => setSelectedTier(tier.name as any)}
                  className={`
                    relative cursor-pointer transition-all duration-500 rounded-[24px] p-8 h-full flex flex-col justify-between border bg-[#090909]/90 backdrop-blur-md hover:y-[-6px]
                    ${isSelected 
                      ? isGold 
                        ? 'border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.08)]' 
                        : isPurple 
                          ? 'border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.08)]'
                          : 'border-[#00C2FF] shadow-[0_0_40px_rgba(0,194,255,0.08)]'
                      : 'border-white/10 hover:border-white/20'
                    }
                  `}
                  id={`pkg-card-${tier.id}`}
                >
                  <div>
                    {/* Header bar within pricing card */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className={`text-[10px] font-mono tracking-widest uppercase font-extrabold ${
                        isGold ? 'text-[#D4AF37]' : isPurple ? 'text-purple-400' : 'text-[#00C2FF]'
                      }`}>
                        {tier.name}
                      </span>
                      {tier.badge && (
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${
                          isGold 
                            ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20' 
                            : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    {/* Price structure */}
                    <div className="mb-6 flex items-baseline gap-1.5">
                      <span className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-mono text-gray-500">/ exclusive access</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed mb-8">
                      {tier.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-4 pt-6 border-t border-white/[0.04]">
                      <span className="block text-[10px] font-mono tracking-wider text-gray-500 uppercase">INCLUDED EXPOSURES:</span>
                      {tier.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-white">
                          <div className={`mt-0.5 p-0.5 rounded-full bg-white/[0.02] border ${
                            isGold ? 'text-[#D4AF37] border-[#D4AF37]/20' : isPurple ? 'text-purple-400 border-purple-500/20' : 'text-[#00C2FF] border-[#00C2FF]/20'
                          }`}>
                            <Check size={10} />
                          </div>
                          <span className="text-gray-200 font-medium leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions on base card */}
                  <div className="mt-8 pt-6">
                    <InteractiveButton
                      variant={isGold ? 'primary-gold' : isPurple ? 'glass' : 'glass'}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleScrollToBooking(tier.name as any);
                      }}
                      className="w-full text-center"
                    >
                      Book {tier.name} Stall
                    </InteractiveButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      {/* -------------------------------------------------------------
          SECTION 3 – STALL BENEFITS
         ------------------------------------------------------------- */}
      <SectionContainer id="startup-benefits" className="bg-[#0c0c0c]/40 border-b border-white/[0.04]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
            Value Multiplier
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Core Stall Benefits
          </h2>
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
            Exhibiting live guarantees premium exposure loops helping project founders scale tech stacks, recruit talent, and gather actionable feedback.
          </p>
        </div>

        {/* 8 Stall Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {STALL_BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard 
                  isHoverable={true}
                  className="h-full flex flex-col justify-between border-white/[0.06] hover:border-white/10"
                >
                  <div className="space-y-4">
                    {/* Floating icon box */}
                    <div className="inline-flex p-3 rounded-2xl bg-white/[0.02] border border-white/5" style={{ color: benefit.accent }}>
                      <Icon size={20} />
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      {/* -------------------------------------------------------------
          SECTION 4 – WHO SHOULD EXHIBIT
         ------------------------------------------------------------- */}
      <SectionContainer id="startup-audience" className="bg-[#050505] border-b border-white/[0.04]" gridBackground={true}>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
            Target Alignments
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Who Should Exhibit?
          </h2>
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
            Our exhibition ecosystem coordinates custom pipelines suited for diverse developer teams, research centers, and scaling hardware/software firms.
          </p>
        </div>

        {/* 8 categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {PARTICIPANT_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="glass-panel rounded-[24px] p-6 h-full flex flex-col justify-between border border-white/5 hover:border-[#00C2FF]/20 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5 text-[#00C2FF] group-hover:bg-[#00C2FF]/5 transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                        Category 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-white tracking-wide mb-2 transition-colors group-hover:text-[#00C2FF]">
                      {category.title}
                    </h3>

                    <p className="text-2xs sm:text-xs text-[#B5B5B5] leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.04] mt-auto">
                    <span className="block text-[8px] font-mono tracking-wider text-[#D4AF37] uppercase">PRIMARY USE CASE:</span>
                    <span className="text-2xs text-gray-300 mt-1 block font-medium leading-relaxed">{category.useCase}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      {/* -------------------------------------------------------------
          SECTION 5 – WHY EXHIBIT AT TECH AURA 2026 (Neutral / Factual)
         ------------------------------------------------------------- */}
      <SectionContainer id="startup-why" className="bg-[#0b0b0b]/60 border-b border-white/[0.04]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
            Value Propositions
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Why Exhibit at TECH AURA 2026
          </h2>
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
            An analysis of operational benefits and structured exposure return matrices designed for incoming startup networks.
          </p>
        </div>

        {/* Bento/Value grid of neutral points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard isHoverable={false} className="border-white/5 h-full flex flex-col justify-start">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/[0.02] border border-white/5 text-[#00C2FF] font-mono text-xs w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                    0{index + 1}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-heading font-bold text-white tracking-wide mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* -------------------------------------------------------------
          SECTION 6 – EXHIBITION JOURNEY (Timeline Desktop/Mobile)
         ------------------------------------------------------------- */}
      <SectionContainer id="startup-journey" className="bg-[#050505] border-b border-white/[0.04]" gridBackground={true}>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20 uppercase">
            Staging Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
            Exhibition Journey
          </h2>
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
            Review the structural timelines from initial request, allocation, on-site staging, through post-event engagement analysis.
          </p>
        </div>

        {/* Timeline Desktop: Horizontal | Timeline Mobile: Vertical */}
        <div className="pt-8">
          
          {/* Desktop view: Horizontal Layout */}
          <div className="hidden lg:grid grid-cols-6 gap-6 relative">
            
            {/* Absolute horizontal connector bar */}
            <div className="absolute top-[40px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#00C2FF]/20 via-[#D4AF37]/20 to-[#00C2FF]/20 pointer-events-none z-0" />

            {JOURNEY_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center px-2"
                >
                  {/* Floating Number Badge */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border backdrop-blur-md mb-6 relative group transition-colors duration-300 ${
                    isEven 
                      ? 'bg-white/[0.02] border-white/5 text-[#00C2FF] hover:border-[#00C2FF]/40' 
                      : 'bg-white/[0.02] border-white/5 text-[#D4AF37] hover:border-[#D4AF37]/40'
                  }`}>
                    <span className="font-mono text-sm font-extrabold">0{idx + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-current opacity-[0.01] group-hover:opacity-[0.04] transition-opacity" />
                  </div>

                  <h3 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-[11px] text-[#B5B5B5] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile view: Vertical Layout */}
          <div className="lg:hidden space-y-8 relative pl-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
            {JOURNEY_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative"
                >
                  {/* Circular step dot indicator on connection line */}
                  <div className={`absolute left-[-31px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-mono font-semibold bg-[#050505] transform -translate-x-[2px] z-10 ${
                    isEven ? 'border-[#00C2FF] text-[#00C2FF]' : 'border-[#D4AF37] text-[#D4AF37]'
                  }`}>
                    {idx + 1}
                  </div>

                  <div className="text-left pl-4">
                    <h3 className="text-base font-heading font-bold text-white tracking-wide mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </SectionContainer>

      {/* -------------------------------------------------------------
          INTERACTIVE RESERVATION FORM MODULE
         ------------------------------------------------------------- */}
      <section ref={bookingFormRef} className="relative py-20 bg-[#070707] border-b border-white/[0.04]">
        <AmbientOrb color="purple" size="md" className="top-10 left-10 opacity-15" />
        <AmbientOrb color="cyan" size="md" className="bottom-10 right-10 opacity-15" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <span className="text-[11px] font-mono tracking-widest text-purple-400 font-semibold bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 uppercase">
              Stall Registrations
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-5">
              Secure Your Staging Plot
            </h2>
            <p className="text-sm md:text-base text-[#B5B5B5] leading-relaxed mt-4">
              Enter your enterprise credentials below to construct your registration profile and lock in desired space footprints on our pavilion layout.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {bookingStatus === 'success' ? (
                <motion.div
                  key="booking-confirmed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-[24px] p-8 border border-[#22c55e]/20 bg-[#09150f]/80 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center text-[#22c55e] mx-auto">
                    <CheckCircle size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-extrabold text-white">Stall Reservation Retained</h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Your interest was successfully recorded in local storage protocols for verification by the Advisory Review Council.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 text-left space-y-2.5 border border-white/5">
                    <div className="flex justify-between text-2xs font-mono text-gray-400">
                      <span>ORGANIZATION:</span>
                      <span className="text-white font-semibold">{bCompany}</span>
                    </div>
                    <div className="flex justify-between text-2xs font-mono text-gray-400">
                      <span>CHIEF FOUNDER:</span>
                      <span className="text-white font-semibold">{bFounder}</span>
                    </div>
                    <div className="flex justify-between text-2xs font-mono text-gray-400">
                      <span>SELECTED PLACEMENT:</span>
                      <span className="text-[#D4AF37] font-semibold">{bTier.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between text-2xs font-mono text-gray-400">
                      <span>ADVISORY SYSTEM STATE:</span>
                      <span className="text-[#00C2FF] font-semibold">RESERVED_STAGED</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-center gap-4">
                    <InteractiveButton variant="primary-gold" size="sm" onClick={() => resetBookingForm()}>
                      Reserve Another
                    </InteractiveButton>
                    <a href="mailto:info@dominova.tech" className="text-xs text-gray-400 hover:text-white transition-colors underline">
                      Verify via Email
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="booking-form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 p-8 rounded-[24px] border border-white/5 bg-[#090909]/90 backdrop-blur-md"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Company Name *</label>
                      <input 
                        type="text" 
                        required
                        value={bCompany}
                        onChange={(e) => setBCompany(e.target.value)}
                        placeholder="e.g. Innovate Corp" 
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Founder / Representative *</label>
                      <input 
                        type="text" 
                        required
                        value={bFounder}
                        onChange={(e) => setBFounder(e.target.value)}
                        placeholder="e.g. Dr. Alex Chen" 
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Corporate Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={bEmail}
                      onChange={(e) => setBEmail(e.target.value)}
                      placeholder="e.g. contact@company.com" 
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Desired Placement Tier</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['Standard', 'Growth', 'Premium'] as const).map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBTier(tier)}
                          className={`py-3.5 rounded-xl border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                            bTier === tier 
                              ? 'bg-white/[0.04] border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.06)]' 
                              : 'bg-transparent border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Describe Your Concept / Prototype (Optional)</label>
                    <textarea 
                      value={bPitch}
                      onChange={(e) => setBPitch(e.target.value)}
                      placeholder="Explain what hardware or software system you will demonstrate on the main expo floor." 
                      rows={4}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-2xs font-mono text-gray-500 py-2">
                    <Info size={11} className="text-[#00C2FF] shrink-0" />
                    <span>Submitted proposals are stored securely in local browser caches.</span>
                  </div>

                  <InteractiveButton 
                    type="submit" 
                    variant="primary-gold" 
                    className="w-full py-4 uppercase text-xs tracking-widest"
                    icon={<Send size={15} />}
                  >
                    Submit Reservation Form
                  </InteractiveButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          FAQ SUB-SECTION
         ------------------------------------------------------------- */}
      <section className="relative py-16 bg-[#050505] border-b border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider text-center mb-8">
              Exposition FAQ & Guidelines
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-white hover:bg-white/[0.02] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90 text-[#D4AF37]' : ''}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 text-xs text-[#B5B5B5] leading-relaxed border-t border-white/[0.02] bg-[#050505]/40">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          SECTION 7 – FINAL CALL TO ACTION
         ------------------------------------------------------------- */}
      <section id="startup-final-cta" className="relative py-24 bg-gradient-to-b from-[#050505] to-[#0a0a14] overflow-hidden">
        
        {/* Grids and ambient elements matching standard CTA styling */}
        <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none z-0" />
        <AmbientOrb color="gold" size="lg" className="bottom--40 left-1/3 opacity-20" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.02] border border-white/10 text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold mb-6"
          >
            <ShieldCheck size={13} className="text-[#00C2FF]" />
            Strategic Partnerships
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Showcase Your Innovation at TECH AURA 2026
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto mt-6 mb-12 leading-relaxed"
          >
            Position your hardware innovations, developer applications, or software architectures directly before leading corporate recruiters and venture evaluators.
          </motion.p>

          {/* Action Grid Buttons mapped accurately */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4"
          >
            {/* CTA 1: Reserve Startup Stall */}
            <div className="flex flex-col">
              <InteractiveButton 
                variant="primary-gold" 
                size="md" 
                onClick={() => { window.location.href = "mailto:info@dominova.tech?subject=TECH%20AURA%202026%20Startup%20Stall%20Reservation"; }}
                className="w-full text-xs font-bold uppercase tracking-wider h-14"
              >
                Reserve Startup Stall
              </InteractiveButton>
            </div>

            {/* CTA 2: Schedule Meeting */}
            <div className="flex flex-col">
              <a 
                href="mailto:info@dominova.tech?subject=TECH%20AURA%202026%20Meeting%20Request"
                className="w-full"
              >
                <InteractiveButton 
                  variant="glass" 
                  size="md" 
                  className="w-full text-xs font-bold uppercase tracking-wider h-14"
                  icon={<Calendar size={14} className="text-[#D4AF37]" />}
                >
                  Schedule Meeting
                </InteractiveButton>
              </a>
            </div>

            {/* CTA 3: Contact Team */}
            <div className="flex flex-col">
              <a 
                href="mailto:info@dominova.tech"
                className="w-full"
              >
                <InteractiveButton 
                  variant="glass" 
                  size="md" 
                  className="w-full text-xs font-bold uppercase tracking-wider h-14"
                  icon={<Mail size={14} className="text-[#00C2FF]" />}
                >
                  Contact Team
                </InteractiveButton>
              </a>
            </div>

            {/* CTA 4: Download Sponsorship Deck */}
            <div className="flex flex-col">
              <button 
                disabled
                className="w-full text-xs font-bold uppercase tracking-wider h-14 border border-white/5 bg-white/[0.01] text-gray-500 cursor-not-allowed flex items-center justify-center gap-2 rounded-xl opacity-50"
              >
                <FileText size={14} className="text-gray-500" /> Coming Soon
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-14 inline-flex items-center gap-3 backdrop-blur-md px-6 py-3 rounded-full bg-white/[0.01] border border-white/5"
          >
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-gray-400">
              ADVISORY DESK SUPPORT: <a href="mailto:info@dominova.tech" className="text-white font-semibold hover:text-[#00C2FF] transition-colors">info@dominova.tech</a>
            </span>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
