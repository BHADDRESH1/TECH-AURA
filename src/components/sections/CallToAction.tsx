/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Download, Building, Award, CheckCircle, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import GlassCard from '../ui/GlassCard';
import InteractiveButton from '../ui/InteractiveButton';
import AmbientOrb from '../ui/AmbientOrb';

export default function CallToAction() {
  const [formData, setFormData] = useState({
    companyName: '',
    industrySector: '',
    representativeName: '',
    contactEmail: '',
    interestTier: 'Sponsorship Vanguard',
    customMessage: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSponsorApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactEmail || !formData.representativeName) {
      setErrorMessage('Please completely fill in all primary credential fields.');
      return;
    }
    setErrorMessage('');
    setFormSubmitted(true);
  };

  const handleActionRequest = (type: string) => {
    alert(`System Message: Request for "${type}" registered. Our ecosystem operations manager will transmit the credential specifications to your provided email address within one business cycle.`);
  };

  return (
    <SectionContainer id="contact-section" gridBackground={true} className="relative py-24 sm:py-32">
      <AmbientOrb color="gold" size="lg" className="left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[130px]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content - Conversional Hooks & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/20 uppercase mb-6">
            Executive Advisory Council
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Become Part of India's Emerging Innovation Ecosystem
          </h2>
          
          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mb-8 max-w-2xl">
            Align your enterprise with top academic hubs and advanced engineering streams. Partner with TECH AURA 2026 to foster patents, deploy custom research statements, and curate an elite tech recruitment pipeline.
          </p>

          {/* Fully Interactive Call To Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <InteractiveButton
              variant="primary-gold"
              size="lg"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Become Sponsor
            </InteractiveButton>

            <InteractiveButton
              variant="primary-cyan"
              size="lg"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Reserve Startup Stall
            </InteractiveButton>

            <InteractiveButton
              variant="glass"
              size="lg"
              icon={<Calendar size={16} />}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Schedule Meeting
            </InteractiveButton>

            <InteractiveButton
              variant="subtle"
              size="lg"
              icon={<Download size={16} className="text-[#D4AF37]" />}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('switch-to-view', { detail: 'sponsor' }));
              }}
            >
              Download Deck
            </InteractiveButton>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/[0.04] w-full text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#00C2FF]" />
              <span>National R&D Alliance Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#D4AF37]" />
              <span>info@dominova.tech</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gray-400" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Sponsorship Form */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <GlassCard accent="gold" className="p-8 sm:p-10" isHoverable={false}>
                  <div className="mb-6">
                    <h3 className="text-xl font-heading font-extrabold text-white tracking-tight">
                      Sponsorship & Stall Request
                    </h3>
                    <p className="text-xs text-[#B5B5B5] mt-1.5 leading-relaxed">
                      Register your organization credentials to trigger immediate strategic review by the Executive Council.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 text-xs font-mono bg-red-400/5 text-red-400 p-3 rounded-lg border border-red-400/20">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSponsorApply} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. AWS or Web Summit Scale"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                          Industry / Tech Sector
                        </label>
                        <input
                          type="text"
                          name="industrySector"
                          value={formData.industrySector}
                          onChange={handleChange}
                          placeholder="e.g. Artificial Intelligence"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                          Interest Pathway
                        </label>
                        <select
                          name="interestTier"
                          value={formData.interestTier}
                          onChange={handleChange}
                          className="w-full bg-black/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                        >
                          <option value="Sponsorship Vanguard">Sponsorship vanguard</option>
                          <option value="Startup Exhibitor Block">Startup Exhibitor Block</option>
                          <option value="Research & Academic Alliance">Research & Academic Alliance</option>
                          <option value="Venture scouting / VC Panel">Venture scouting / VC Panel</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                        Representative Name *
                      </label>
                      <input
                        type="text"
                        name="representativeName"
                        value={formData.representativeName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        placeholder="johndoe@enterprise.tech"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                        Strategic Alignment Requirements
                      </label>
                      <textarea
                        name="customMessage"
                        value={formData.customMessage}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Details of custom keynotes or recruiting statements..."
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] hover:bg-[#B3922B] text-black font-heading font-bold rounded-xl py-3 text-xs tracking-wider transition-colors cursor-pointer"
                    >
                      SUBMIT ADVISORY PROPOSAL
                    </button>
                  </form>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <GlassCard accent="cyan" className="p-10 text-center" isHoverable={false}>
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20 mb-6 animate-pulse">
                      <CheckCircle size={36} />
                    </div>
                    
                    <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight mb-2">
                      Alliance Docket Generated
                    </h3>
                    
                    <span className="text-xs font-mono font-medium text-[#D4AF37] block mb-4 uppercase tracking-wider">
                      REFERENCE NO: TA-2026-REG
                    </span>

                    <p className="text-xs text-[#B5B5B5] leading-relaxed mb-6">
                      Thank you for submitting your executive application. The Dominova strategic council has registered your credentials. A secure connection link and sponsorship packet has been prepared for transmission to:
                      <span className="block text-white font-mono font-bold mt-2 bg-white/[0.04] p-2 rounded-lg border border-white/5">
                        {formData.contactEmail}
                      </span>
                    </p>

                    <InteractiveButton
                      variant="glass"
                      size="md"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Query
                    </InteractiveButton>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </SectionContainer>
  );
}
