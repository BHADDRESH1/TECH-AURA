/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, Image, CheckCircle2, Mail, Presentation } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionContainer from '../ui/SectionContainer';
import InteractiveButton from '../ui/InteractiveButton';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'development';
  statusBadge: string;
  size: string;
  format: string;
  icon: typeof FileText;
  fileUrl?: string;
  previewUrl?: string;
  accent: 'cyan' | 'gold' | 'gray';
  buttonText: string;
}

const DOWNLOADS_DATA: DownloadItem[] = [
  {
    id: 'sponsor-deck',
    title: 'Corporate Sponsorship Deck',
    description: 'Official sponsorship deck for corporate partners, industries and organizations.',
    status: 'available',
    statusBadge: 'AVAILABLE',
    size: '2.9 MB',
    format: 'PDF Document',
    icon: FileText,
    fileUrl: '/downloads/TECH_AURA_2026_Corporate_Sponsorship_Deck.pdf',
    accent: 'gold',
    buttonText: 'Download PDF'
  },
  {
    id: 'sponsor-proposal',
    title: 'Corporate Sponsorship Proposal',
    description: 'Official proposal for sponsorship, partnership and collaboration.',
    status: 'available',
    statusBadge: 'AVAILABLE',
    size: '28 KB',
    format: 'PDF Document',
    icon: FileText,
    fileUrl: '/downloads/TECH_AURA_2026_Corporate_Sponsorship_Proposal_.pdf',
    accent: 'gold',
    buttonText: 'Download Proposal'
  },
  {
    id: 'event-poster',
    title: 'Official Event Poster',
    description: 'Official TECH AURA 2026 Event Poster.',
    status: 'available',
    statusBadge: 'AVAILABLE',
    size: '430 KB',
    format: 'PDF Document',
    icon: Image,
    fileUrl: '/downloads/TECH_AURA_2026_Event_Poster.pdf',
    previewUrl: '/images/tech-aura-event-poster.jpg',
    accent: 'cyan',
    buttonText: 'Download Poster'
  },
  {
    id: 'presentation-deck',
    title: 'Presentation Deck',
    description: 'Official TECH AURA 2026 Presentation.',
    status: 'available',
    statusBadge: 'AVAILABLE',
    size: '4.7 MB',
    format: 'PowerPoint Presentation',
    icon: Presentation,
    fileUrl: '/downloads/TECH_AURA_2026_Presentation.pptx',
    accent: 'cyan',
    buttonText: 'Download Presentation'
  }
];

export default function DownloadsCenter() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const handleDownload = (item: DownloadItem) => {
    if (!item.fileUrl || downloadingId || successId) return;
    
    setDownloadingId(item.id);
    
    setTimeout(() => {
      const element = document.createElement('a');
      element.setAttribute('href', item.fileUrl || '');
      element.setAttribute('download', item.fileUrl?.split('/').pop() || '');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setDownloadingId(null);
      setSuccessId(item.id);
      setToastMessage(`✅ Download started: ${item.title}`);
      
      setTimeout(() => {
        setSuccessId(null);
        setToastMessage(null);
      }, 3000);
    }, 1200);
  };

  return (
    <SectionContainer id="insights-downloads" className="bg-[#050505] border-b border-white/[0.04]" gridBackground={true}>
      
      {/* Toast Notification for downloaded files */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-4 rounded-xl border border-[#22c55e]/20 bg-[#09150f] text-[#22c55e] flex items-center gap-3 backdrop-blur-md shadow-2xl pointer-events-auto"
            >
              <CheckCircle2 size={18} className="shrink-0" />
              <div className="text-xs">
                <span className="font-bold block text-white">System Confirmation</span>
                <span>{toastMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative">
        <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
          Official Resources
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Resource Center
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          Download official TECH AURA 2026 documents, sponsorship material, event resources and presentation files.
        </p>
      </div>

      {/* Grid structure mapping the items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {DOWNLOADS_DATA.map((item, index) => {
          const IconComponent = item.icon;
          const isAvailable = item.status === 'available';
          const isGold = item.accent === 'gold';
          const isCyan = item.accent === 'cyan';
          const isDownloading = downloadingId === item.id;
          const isSuccess = successId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <GlassCard
                isHoverable={true}
                className={`flex flex-col justify-between h-full border-white/5 transition-all duration-500 overflow-hidden relative group hover:border-white/10 ${
                  !isAvailable ? 'opacity-85' : ''
                }`}
                id={`download-card-${item.id}`}
              >
                <div>
                  {/* Card head layout */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-2.5 rounded-xl border ${
                      isGold 
                        ? 'bg-[#D4AF37]/5 border-[#D4AF37]/10 text-[#D4AF37]' 
                        : isCyan 
                          ? 'bg-[#00C2FF]/5 border-[#00C2FF]/10 text-[#00C2FF]' 
                          : 'bg-white/[0.02] border-white/5 text-gray-500'
                    }`}>
                      <IconComponent size={20} />
                    </div>

                    {/* Styled Status Badge */}
                    <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded border-xs tracking-wider ${
                      isAvailable 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : 'bg-yellow-500/10 text-yellow-500/90 border-yellow-500/20'
                    }`}>
                      {item.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-black text-white tracking-wide mb-2 min-h-[56px] flex items-center">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.previewUrl && (
                    <div 
                      className="mb-6 relative group/poster overflow-hidden rounded-xl border border-white/5 cursor-pointer" 
                      onClick={() => window.open(item.previewUrl, '_blank')}
                    >
                      <img 
                        src={item.previewUrl} 
                        alt="Event Poster Preview" 
                        className="w-full h-32 object-cover object-top transition-transform duration-500 group-hover/poster:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                          Preview Poster
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.04] mt-auto">
                  
                  {/* Detailed Metadata Grid */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[10px] font-mono text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <span>📄</span> 
                      <div>
                        <span className="block text-gray-500 text-[7px] uppercase">Type</span>
                        <span className="text-white font-medium block">{item.format}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <span>📦</span> 
                      <div className="text-right">
                        <span className="block text-gray-500 text-[7px] uppercase">Size</span>
                        <span className="text-white font-medium block">{item.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>📅</span> 
                      <div>
                        <span className="block text-gray-500 text-[7px] uppercase">Version</span>
                        <span className="text-white font-medium block">v1.0.0</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <div className="text-right">
                        <span className="block text-gray-500 text-[7px] uppercase">Status</span>
                        <span className="text-emerald-400 font-semibold block">Available</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    {item.id === 'event-poster' ? (
                      <div className="grid grid-cols-2 gap-3 w-full">
                        <InteractiveButton
                          variant="glass"
                          className="text-[10px] font-mono py-2.5 flex items-center justify-center border-white/10 hover:bg-white/[0.02] transform transition-transform hover:-translate-y-0.5"
                          onClick={() => window.open(item.previewUrl, '_blank')}
                        >
                          Preview Poster
                        </InteractiveButton>
                        <InteractiveButton
                          variant="primary-gold"
                          className="text-[10px] font-mono py-2.5 flex items-center justify-center gap-1 transform transition-transform hover:-translate-y-0.5"
                          onClick={() => handleDownload(item)}
                          disabled={isDownloading || isSuccess}
                        >
                          {isDownloading ? (
                            <span className="flex items-center gap-1">
                              <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin inline-block"></span>
                              Wait...
                            </span>
                          ) : isSuccess ? (
                            <span className="flex items-center gap-0.5 text-emerald-950 font-bold">
                              ✓ Started
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Download size={11} /> Download
                            </span>
                          )}
                        </InteractiveButton>
                      </div>
                    ) : isAvailable ? (
                      <InteractiveButton
                        variant={isGold ? 'primary-gold' : 'glass'}
                        className="w-full text-xs font-mono py-2.5 flex items-center justify-center gap-2 transform transition-transform hover:-translate-y-0.5"
                        onClick={() => handleDownload(item)}
                        disabled={isDownloading || isSuccess}
                      >
                        {isDownloading ? (
                          <span className="flex items-center gap-2">
                            <span className={`w-4 h-4 border-2 rounded-full animate-spin inline-block ${isGold ? 'border-black/30 border-t-black' : 'border-white/30 border-t-white'}`}></span>
                            Downloading...
                          </span>
                        ) : isSuccess ? (
                          <span className="flex items-center gap-2 text-emerald-400 font-bold">
                            ✓ Download Started
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Download size={14} /> {item.buttonText.toUpperCase()}
                          </span>
                        )}
                      </InteractiveButton>
                    ) : (
                      <InteractiveButton
                        variant="glass"
                        className="w-full text-xs font-mono py-2.5 flex items-center justify-center gap-2 border-white/10"
                        onClick={() => {
                          let subject = `TECH AURA 2026 - Request for ${item.title}`;
                          window.location.href = `mailto:info@dominova.tech?subject=${encodeURIComponent(subject)}`;
                        }}
                      >
                        <Mail size={14} className="text-[#00C2FF]" /> REQUEST VIA EMAIL
                      </InteractiveButton>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
