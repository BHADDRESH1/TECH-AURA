/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, Youtube, Mail, ChevronUp, ShieldCheck, Scale, Globe, Check } from 'lucide-react';

export default function Footer() {
  const [showCookieNotice, setShowCookieNotice] = useState(false);
  const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    // Check if cookie consent exists
    const consent = localStorage.getItem('tech-aura-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowCookieNotice(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('tech-aura-cookie-consent', 'accepted');
    setShowCookieNotice(false);
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/[0.05] pt-16 pb-8 overflow-hidden z-20">
      
      {/* Decorative premium illumination strip */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent animate-pulse" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Joint Branding & Identity */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl tracking-wider text-white">
                  TECH AURA <span className="text-[#D4AF37]">2026</span>
                </span>
              </div>
              <p className="text-xs text-[#B5B5B5] leading-relaxed max-w-sm">
                The national blueprint for cooperative student innovation, bridging academic talent with commercial growth corridors under premier organizational direction.
              </p>
            </div>

            {/* Organized By Stylized Insignia */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-2 w-full max-w-sm">
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="tracking-widest uppercase font-semibold">Organized By</span>
              </div>
              <div className="text-xs font-heading font-black text-white tracking-wide uppercase">
                Sathyabama Institute of Science and Technology
              </div>
              <div className="text-[9px] text-gray-500 font-mono">
                Deemed to be University • NAAC Grade A++ Category 1
              </div>
            </div>
          </div>

          {/* Column 2: Legal Frameworks Navigation links */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Legal Registry
            </h4>
            <ul className="space-y-3.5 text-xs text-[#B5B5B5]">
              <li>
                <button 
                  onClick={() => setShowLegalModal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-mono text-[10px] tracking-wider uppercase"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowLegalModal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-mono text-[10px] tracking-wider uppercase"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowAccessibilityModal(true)}
                  className="hover:text-white transition-colors cursor-pointer text-left font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5"
                >
                  <Globe size={11} className="text-[#00C2FF]" /> Accessibility Statement
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Strategic Partnership branding only */}
          <div className="col-span-1 md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF]">
              Strategic Partner
            </h4>
            
            <div className="p-5 rounded-xl bg-[#090909] border border-white/5 relative group overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 p-3 text-white/5 group-hover:text-[#00C2FF]/10 transition-colors">
                <ShieldCheck size={40} />
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <img 
                    src="/logos/dominova-logo.png" 
                    alt="Dominova Logo" 
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-[9px] font-mono tracking-tight text-[#00C2FF] font-semibold uppercase block mt-1">
                    Innovation Strategic Partner
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2 text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#B5B5B5]">
                  <span>📧</span>
                  <a href="mailto:info@dominova.tech" className="hover:text-white transition-colors">
                    info@dominova.tech
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#B5B5B5]">
                  <span>📞</span>
                  <a href="tel:+919025092699" className="hover:text-white transition-colors">
                    +91 90250 92699
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and metadata */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              © 2026 Tech Aura, National Innovation Expo. Organized By Sathyabama Institute of Science and Technology. All rights reserved.
            </div>
            
            <div className="text-[8.5px] font-mono text-gray-650 flex items-center justify-center lg:justify-start gap-1 justify-items-center tracking-wider text-gray-600">
              <span>Last Updated: 2026-06-21 20:31:12 UTC</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block mx-1" />
              <span>Platform Build v2.4.2</span>
            </div>
          </div>

          {/* Social Icons Placeholder and Smooth Back to Top */}
          <div className="flex items-center gap-4">
            
            <ul className="flex items-center gap-3">
              {[
                { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Youtube, url: 'https://youtube.com', label: 'YouTube' },
                { icon: Mail, url: 'mailto:info@dominova.tech', label: 'Email' }
              ].map((social) => {
                const SocialIcon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/5 text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block"
                    >
                      <SocialIcon size={13} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <span className="w-[1px] h-6 bg-white/10" />

            <button
              onClick={scrollUp}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer group flex items-center gap-1 text-2xs font-mono"
            >
              <span className="hidden sm:inline text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-300 tracking-wider">TOP</span>
              <ChevronUp size={13} />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieNotice && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-6 left-6 right-6 z-50 md:left-12 md:right-auto md:max-w-md p-6 rounded-2xl bg-[#090909]/95 border border-white/10 backdrop-blur-md shadow-2xl space-y-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] mt-0.5 border border-[#D4AF37]/20">
                <Scale size={16} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Cookie Consent</h4>
                <p className="text-2xs sm:text-xs text-[#B5B5B5] leading-relaxed">
                  This alliance platform leverages basic authentication variables and localized cache directories to optimize the sponsor matrix dashboard experience.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleAcceptCookies}
                className="px-4 py-2 bg-white text-black font-semibold text-2xs rounded-lg hover:bg-gray-200 transition-colors font-mono uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <Check size={11} className="stroke-[3]" /> Accept terms
              </button>
              <button
                onClick={() => setShowCookieNotice(false)}
                className="px-4 py-2 bg-transparent text-gray-400 font-medium text-2xs rounded-lg hover:text-white transition-colors font-mono"
              >
                DISMISS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Statement Modal Dialog */}
      <AnimatePresence>
        {showAccessibilityModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-lg w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-[#00C2FF] font-bold block uppercase border border-[#00C2FF]/10 bg-[#00C2FF]/5 w-fit px-2.5 py-0.5 rounded">Compliance</span>
                <h3 className="text-lg font-heading font-black text-white uppercase tracking-tight">Accessibility Commitment</h3>
                <p className="text-xs text-[#B5B5B5] leading-relaxed">
                  Tech Aura is dedicated to ensuring that our corporate digital portals are accessible to all participants. We actively coordinate with WCAG accessibility principles to ensure robust contrast thresholds and responsive keyboard patterns.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/[0.04] pt-4 text-2xs sm:text-xs font-mono">
                <div className="flex justify-between text-gray-400 py-1 border-b border-white/[0.02]">
                  <span>CONTRACT VALUE RANGE:</span>
                  <span className="text-white">STRICT COMPLIANCE</span>
                </div>
                <div className="flex justify-between text-gray-400 py-1 border-b border-white/[0.02]">
                  <span>ACCESSIBILITY RATING:</span>
                  <span className="text-white">WCAG 2.1 LEVEL AA</span>
                </div>
                <div className="flex justify-between text-gray-400 py-1 border-b border-white/[0.02]">
                  <span>SCREEN READER OPTIMIZED:</span>
                  <span className="text-emerald-400">VERIFIED VALID</span>
                </div>
              </div>

              <button
                onClick={() => setShowAccessibilityModal(false)}
                className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Close Statement
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confidential Legal Modals (Privacy / Terms) */}
      <AnimatePresence>
        {showLegalModal !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] font-bold block uppercase border border-[#D4AF37]/10 bg-[#D4AF37]/5 w-fit px-2.5 py-0.5 rounded">LEGAL MATTERS</span>
                <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight">
                  {showLegalModal === 'privacy' ? 'Data Privacy Protocol' : 'Terms of Cooperative Engagement'}
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#B5B5B5] leading-relaxed border-t border-white/[0.04] pt-4">
                {showLegalModal === 'privacy' ? (
                  <>
                    <p className="font-bold text-white">1. Scope of Secure Registry Database</p>
                    <p>Sathyabama Institute of Science and Technology handles participant data only for scheduling, space zoning, security clearances, and partnership compliance registry processes.</p>
                    <p className="font-bold text-white">2. External Processing Limits</p>
                    <p>Financial matrices and billing operations are compiled under direct institutional supervision. Zero data vectors are leased or structured for third-party optimization trackers.</p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-white">1. Booth Assignment Clearances</p>
                    <p>Staging spots reserved are subject to physical safety layouts. Floor assignments might undergo spatial adjustments requested by Sathyabama's Central Staging Committee.</p>
                    <p className="font-bold text-white">2. Proprietary Rights Vetting</p>
                    <p>All technology sandboxes, intellectual projects, and functional code showcased must exhibit genuine attribution. Sathyabama defends non-disclosure guidelines strongly.</p>
                  </>
                )}
              </div>

              <button
                onClick={() => setShowLegalModal(null)}
                className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Close Agreement
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}
