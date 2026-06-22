/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Common Shell Components
import Navigation from './components/sections/Navigation';
import Footer from './components/sections/Footer';

// Core Expo Homepage Sections
import Hero from './components/sections/Hero';
import LatestUpdates from './components/sections/LatestUpdates';
import WhyTechAura from './components/sections/WhyTechAura';
import EventJourney from './components/sections/EventJourney';
import ProjectDomains from './components/sections/ProjectDomains';
import AudienceProfile from './components/sections/AudienceProfile';
import PartnershipJourney from './components/sections/PartnershipJourney';
import CallToAction from './components/sections/CallToAction';

// Corporate Conversion / Sponsorship Hub Sections
import SponsorshipHero from './components/sections/SponsorshipHero';
import WhySponsor from './components/sections/WhySponsor';
import EventInsights from './components/sections/EventInsights';
import SponsorshipCategories from './components/sections/SponsorshipCategories';
import BenefitsMatrix from './components/sections/BenefitsMatrix';
import SlotAvailability from './components/sections/SlotAvailability';
import CorporateTrust from './components/sections/CorporateTrust';
import SponsorshipCTA from './components/sections/SponsorshipCTA';
import DownloadsCenter from './components/sections/DownloadsCenter';
import SponsorFAQ from './components/sections/SponsorFAQ';
import SponsorContact from './components/sections/SponsorContact';

// Startup Showcase components
import StartupExhibition from './components/startup/StartupExhibition';

export default function App() {
  const [currentView, setCurrentView] = useState<'expo' | 'sponsor' | 'startup'>('expo');

  // Register a defensive custom event listener to facilitate jumping across layouts from deep components
  useEffect(() => {
    const handleViewSwitch = (e: Event) => {
      const customEvent = e as CustomEvent<'expo' | 'sponsor' | 'startup'>;
      if (customEvent.detail) {
        setCurrentView(customEvent.detail);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('switch-to-view', handleViewSwitch);
    return () => window.removeEventListener('switch-to-view', handleViewSwitch);
  }, []);

  const handleViewChange = (view: 'expo' | 'sponsor' | 'startup') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] antialiased text-white selection:bg-[#00C2FF]/30 selection:text-white">
      {/* Absolute layer noise background to simulate tactile matte paper finishes */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-30 opacity-[0.02] mix-blend-overlay" />
      
      {/* Navigation Shell with dual-view coordination */}
      <Navigation currentView={currentView} onViewChange={handleViewChange} />

      {/* Dynamic Content Transitions */}
      <AnimatePresence mode="wait">
        {currentView === 'expo' ? (
          <motion.div
            key="expo-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="relative z-10 w-full"
          >
            <main>
              {/* 1. Hero Landing Block */}
              <Hero />

              {/* 2. Latest Updates Panel */}
              <LatestUpdates />

              {/* 3. Value Propositions */}
              <WhyTechAura />

              {/* 4. Multi-Variant Interactive Timeline */}
              <EventJourney />

              {/* 5. Venture Focus Domain Stack */}
              <ProjectDomains />

              {/* 6. Participant Demographic Matrices */}
              <AudienceProfile />

              {/* 7. Corporate Workflow Tracker */}
              <PartnershipJourney />

              {/* 8. Conversion Acquisition CTA Frame */}
              <CallToAction />
            </main>
          </motion.div>
        ) : currentView === 'sponsor' ? (
          <motion.div
            key="sponsor-hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="relative z-10 w-full"
          >
            <main>
              {/* 1. Hero Landing Block */}
              <SponsorshipHero />

              {/* 2. Value Propositions & Benefits Grid */}
              <WhySponsor />

              {/* 3. Live Statistics Counter insights */}
              <EventInsights />

              {/* 4. Sponsorship Categories Pricing Matrices */}
              <SponsorshipCategories />

              {/* 5. Benefits Matrix Tabular Comparison */}
              <BenefitsMatrix />

              {/* 6. Live Intake Progress Slot Availability */}
              <SlotAvailability />

              {/* 7. Corporate Trust Institutional Focus */}
              <CorporateTrust />

              {/* 8. strategic partner capture call to action */}
              <SponsorshipCTA />

              {/* 9. Authorized operational downloads repository */}
              <DownloadsCenter />

              {/* 10. Comprehensive informational queries matrix */}
              <SponsorFAQ />

              {/* 11. Strategic liaison communications cluster */}
              <SponsorContact />
            </main>
          </motion.div>
        ) : (
          <motion.div
            key="startup-exhibition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="relative z-10 w-full"
          >
            <main>
              <StartupExhibition />
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Branding Component */}
      <Footer />
    </div>
  );
}
