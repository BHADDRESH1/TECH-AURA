/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SponsorTier = 'principal' | 'platinum' | 'gold' | 'silver' | 'partner' | 'academic';

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  tier: SponsorTier;
  website: string;
  highlight?: boolean;
}

export interface SecurityAndMetric {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface TrackType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'cyan' | 'gold' | 'purple';
  topics: string[];
}

export interface ResourceAsset {
  id: string;
  title: string;
  category: 'sponsorship' | 'startup' | 'academic' | 'guideline';
  fileSize: string;
  fileFormat: 'PDF' | 'ZIP' | 'DOCX';
  downloadLabel: string;
  url: string;
}

export interface ExhibitionStartup {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  stage: 'Seed' | 'Series A' | 'R&D' | 'Stealth';
  origin: string;
  logo: string;
  highlights: string[];
}
