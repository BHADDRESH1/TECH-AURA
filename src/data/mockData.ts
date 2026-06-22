/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sponsor, TrackType, ResourceAsset, ExhibitionStartup } from '../types';

export interface UpdateItem {
  id: string;
  title: string;
  status: 'Soon' | 'Active' | 'Updated';
  date: string;
  description: string;
}

export interface WhyItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface DomainItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface AudienceCard {
  id: string;
  category: string;
  percentage?: string;
  metrics: string;
  description: string;
}

export interface PartnerStep {
  step: string;
  title: string;
  description: string;
  action: string;
}

export const LATEST_UPDATES: UpdateItem[] = [
  {
    id: 'u1',
    title: 'Startup Registrations Opening Soon',
    status: 'Soon',
    date: 'Q3 2026',
    description: 'Enabling early-stage ventures to reserve prime exhibition space directly adjacent to state incubators.'
  },
  {
    id: 'u2',
    title: 'Poster Version 2 Coming Soon',
    status: 'Soon',
    date: 'Coming Soon',
    description: 'Publishing optimized interactive digital collateral, track syllabi, and official branding assets.'
  },
  {
    id: 'u3',
    title: 'Speaker Announcements Coming Soon',
    status: 'Soon',
    date: 'Q4 2026',
    description: 'Securing thought leaders from global deep-tech corporations and national research institutes.'
  },
  {
    id: 'u4',
    title: 'More Sponsorship Categories Coming Soon',
    status: 'Soon',
    date: 'Q3 2026',
    description: 'Introducing bespoke integration slots for specialized regional accelerators and technical universities.'
  }
];

export const WHY_TECH_AURA: WhyItem[] = [
  {
    id: 'why-1',
    title: 'Innovation Lab',
    tagline: 'Bridging Concept & Commercialization',
    description: 'We translate raw research and advanced prototypes into real-world commercial opportunities, matching student ingenuity with professional intellectual property standards.',
    bullets: [
      'Over 250 verified engineering prototypes',
      'Direct exposure to intellectual property consulting',
      'Exclusive incubation pipeline opportunities'
    ]
  },
  {
    id: 'why-2',
    title: 'Industry Integration',
    tagline: 'Venture Capital & Enterprise Synergy',
    description: 'Sponsors and corporate teams gain immediate first-mover access to emerging technical minds, offering a highly curated recruitment pipeline and custom strategic alignment.',
    bullets: [
      'Unmatched direct access to top-tier technical scholars',
      'Custom stage branding and dedicated keynote slots',
      'Sponsor-curated problem statements & hackathons'
    ]
  },
  {
    id: 'why-3',
    title: 'Student Empowerment',
    tagline: 'Developing India’s Brightest Innovators',
    description: 'Empowering the next generation of engineers to present working hardware, software architectures, and sustainable technology layers before real venture capital blocks.',
    bullets: [
      'National exposure with representation across 28 states',
      'Direct feedback channels from industry visionaries',
      'Access to seed-funding opportunities and grant pools'
    ]
  }
];

export const EVENT_JOURNEY: TimelineStep[] = [
  {
    step: '01',
    title: 'Registration Phase',
    description: 'Teams file online abstract entries, project outlines, and hardware schematics across multiple tracks.',
    deliverable: 'Prototype Design Document'
  },
  {
    step: '02',
    title: 'State Level Evaluation',
    description: 'Decentralized screening boards assess architectural feasibility and practical innovation levels.',
    deliverable: 'Regional Shortlist'
  },
  {
    step: '03',
    title: 'Zonal Competition',
    description: 'Advanced live presentations to zonal technical panels to identify benchmark innovations.',
    deliverable: 'Working Prototype & Video Demo'
  },
  {
    step: '04',
    title: 'National Finals',
    description: 'The premier live expo floor. Qualified groups demonstrate working systems to global judges and investors.',
    deliverable: 'Live Exhibition Stall'
  },
  {
    step: '05',
    title: 'Awards Ceremony',
    description: 'Recognizing superior engineering with prestige plaques, non-dilutive grant funds, and incubator slots.',
    deliverable: 'Commercialization Grants'
  },
  {
    step: '06',
    title: 'Networking & Integration',
    description: 'Direct matches between finalists and venture funds, state accelerators, and corporate talent scouts.',
    deliverable: 'MOU & Investment Term Sheets'
  }
];

export const PROJECT_DOMAINS: DomainItem[] = [
  {
    id: 'dom-1',
    title: 'Artificial Intelligence',
    description: 'Advanced vision stacks, large language workflows, and deep predictive models designed for industrial applications.',
    iconName: 'BrainCircuit',
    accentColor: '#00C2FF'
  },
  {
    id: 'dom-2',
    title: 'Machine Learning',
    description: 'High-utility classification pipelines, customized model fine-tuning, and robust automated analytical services.',
    iconName: 'GitBranch',
    accentColor: '#D4AF37'
  },
  {
    id: 'dom-3',
    title: 'Robotics',
    description: 'Autonomous systems, dynamic physical kinematics, feedback control frameworks, and computer vision guidance.',
    iconName: 'Cpu',
    accentColor: '#8F00FF'
  },
  {
    id: 'dom-4',
    title: 'Automation',
    description: 'Industrial assembly solutions, workflow optimization schedulers, and precise real-time hardware execution.',
    iconName: 'Workflow',
    accentColor: '#00C2FF'
  },
  {
    id: 'dom-5',
    title: 'Cybersecurity',
    description: 'Zero-trust design patterns, immutable ledger networks, vulnerability mitigation, and predictive threat analyzers.',
    iconName: 'ShieldAlert',
    accentColor: '#D4AF37'
  },
  {
    id: 'dom-6',
    title: 'Internet of Things (IoT)',
    description: 'Ultra-low latency mesh networking, intelligent sensor deployments, and edge calculation modules.',
    iconName: 'Radio',
    accentColor: '#8F00FF'
  },
  {
    id: 'dom-7',
    title: 'Healthcare Tech',
    description: 'Digital diagnostic workflows, biometric tele-monitoring integrations, and assistive robotics.',
    iconName: 'Activity',
    accentColor: '#00C2FF'
  },
  {
    id: 'dom-8',
    title: 'Agritech Solutions',
    description: 'Precision automated irrigation algorithms, crop health spectral analysis scanners, and distribution trackers.',
    iconName: 'Leaf',
    accentColor: '#D4AF37'
  },
  {
    id: 'dom-9',
    title: 'FinTech Integrations',
    description: 'Decentralized peer transaction protocols, high-frequency compliance engines, and automated risk calculators.',
    iconName: 'Wallet',
    accentColor: '#8F00FF'
  },
  {
    id: 'dom-10',
    title: 'Green Technology',
    description: 'Renewable grid optimization processors, smart carbon emissions audits, and circular material lifecycles.',
    iconName: 'Zap',
    accentColor: '#00C2FF'
  },
  {
    id: 'dom-11',
    title: 'Software Technologies',
    description: 'Optimized cloud native micro-services, secure web frameworks, computational compiler optimization, and high-performance databases.',
    iconName: 'Globe',
    accentColor: '#D4AF37'
  }
];

export const AUDIENCE_PROFILE: AudienceCard[] = [
  {
    id: 'aud-1',
    category: 'Engineering Students',
    metrics: 'Top 0.1% Technical Minds',
    description: 'Elite researchers and coders with verified prototypes eager to present breakthroughs to national industries.'
  },
  {
    id: 'aud-2',
    category: 'Venture Capital & Investors',
    metrics: 'Angel Networks, VCs & Angel Syndicates',
    description: 'Scouting top technological assets to invest early capital, accelerate incubation, and license patents.'
  },
  {
    id: 'aud-3',
    category: 'Industries & Corporates',
    metrics: 'Fortune 500 Enterprise Leaders',
    description: 'Building custom external collaboration mechanisms, finding proprietary answers, and securing elite hires.'
  },
  {
    id: 'aud-4',
    category: 'Startup Stalls',
    metrics: '75+ Verified Exhibiting Teams',
    description: 'Showing live hardware, proprietary consumer stacks, or high-growth SaaS business models ready to scale.'
  },
  {
    id: 'aud-5',
    category: 'Incubators & Tech Hubs',
    metrics: 'State Accelerators & Research Parks',
    description: 'Partnering to absorb high-impact concepts directly into structured mentorship environments.'
  },
  {
    id: 'aud-6',
    category: 'Academic Boards & Faculty',
    metrics: 'Senior R&D Scientists & PHD Scholars',
    description: 'Assisting deep academic framework alignment and providing scientific peer validations.'
  }
];

export const PARTNERSHIP_JOURNEY: PartnerStep[] = [
  {
    step: '01',
    title: 'Choose Partnership Tier',
    description: 'Assess ROI projections across Principal, Platinum, Gold, Silver, or Specialty tracks.',
    action: 'Select Category'
  },
  {
    step: '02',
    title: 'Strategic Consultation',
    description: 'Schedule a discovery review with the Dominova executive alignment committee.',
    action: 'Technical Mapping'
  },
  {
    step: '03',
    title: 'Formal Agreement',
    description: 'Finalize brand exposure vectors, exclusive presentation slots, and talent recruitment protocols.',
    action: 'MOU Ratification'
  },
  {
    step: '04',
    title: 'Asset Allocation',
    description: 'Coordinated digital distribution of corporate signage, press announcement integration, and platform branding.',
    action: 'Marketing Kickoff'
  },
  {
    step: '05',
    title: 'On-Ground Execution',
    description: 'Deliver keynotes, host custom panel segments, and evaluate finalist projects on the main stage.',
    action: 'Event Integration'
  },
  {
    step: '06',
    title: 'Detailed Analytical Report',
    description: 'Post-event comprehensive statistics on talent recruitment matches, lead capture surveys, and ROI coverage metrics.',
    action: 'Exposure Analytics'
  }
];
