/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, Image, FolderArchive, BookOpen, Clock, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
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
  accent: 'cyan' | 'gold' | 'gray';
}

const DOWNLOADS_DATA: DownloadItem[] = [
  {
    id: 'sponsor-deck',
    title: 'Sponsorship Deck',
    description: 'Explore our complete core alignment matrix, branding assets, pavilion maps, and strategic corporate tier details.',
    status: 'development',
    statusBadge: 'COMING SOON',
    size: '--',
    format: 'PDF Document',
    icon: FileText,
    accent: 'gold'
  },
  {
    id: 'event-poster',
    title: 'Event Poster',
    description: 'High-resolution official campaign poster designed for digital showcase and academic notice board exhibits.',
    status: 'development',
    statusBadge: 'COMING SOON',
    size: '--',
    format: 'PNG Archive',
    icon: Image,
    accent: 'cyan'
  },
  {
    id: 'brochure',
    title: 'Exhibition Brochure',
    description: 'Stall design dimensions, architectural guidelines, hardware loading logs, and custom setup directives.',
    status: 'development',
    statusBadge: 'COMING SOON',
    size: '--',
    format: 'Digital booklet',
    icon: BookOpen,
    accent: 'gray'
  },
  {
    id: 'media-kit',
    title: 'Media Press Kit',
    description: 'Logo vector packets, official font sets, press releases, and corporate presentation template files.',
    status: 'development',
    statusBadge: 'COMING SOON',
    size: '--',
    format: 'ZIP Archive',
    icon: FolderArchive,
    accent: 'gray'
  },
  {
    id: 'rulebook',
    title: 'Event Rulebook',
    description: 'Comprehensive evaluation matrices, safety protocols, lab sandboxes, and intellectual property provisions.',
    status: 'development',
    statusBadge: 'COMING SOON',
    size: '--',
    format: 'PDF Guide',
    icon: FileText,
    accent: 'gray'
  }
];

export default function DownloadsCenter() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownload = (item: DownloadItem) => {
    if (item.status === 'development') return;
    
    // Simulate high-fidelity asset generation on keypress
    const element = document.createElement('a');
    const b64 = "data:text/plain;base64,VEVDSCBBVVJBIDIwMjYgLSBTUE9OU09SU0hJUCBERUNLClRoaXMgaXMgYSBzaW11bGF0ZWQgZG9jdW1lbnQgZm9yIFRlY2ggQXVyYSAyMDI2LiBPZmZpY2lhbCBjb250YWN0OiBpbmZvQGRvbWlub3ZhLnRlY2g=";
    element.setAttribute('href', b64);
    element.setAttribute('download', `TechAura_2026_${item.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setToastMessage(`Initiated download: ${item.title}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
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
                <span className="font-bold block text-white">Download Complete</span>
                <span>{toastMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative">
        <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 uppercase">
          Authorized Resources
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mt-3">
          Sponsorship Downloads Center
        </h2>
        <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mt-4">
          Access high-fidelity resources, layouts, design elements, and compliance frameworks to draft your engagement blueprint.
        </p>
      </div>

      {/* Grid structure mapping the items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {DOWNLOADS_DATA.map((item, index) => {
          const IconComponent = item.icon;
          const isAvailable = item.status === 'available';
          const isGold = item.accent === 'gold';
          const isCyan = item.accent === 'cyan';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
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

                  <h3 className="text-lg font-heading font-black text-white tracking-wide mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.04] mt-auto">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <div>
                      <span className="block text-gray-500 text-[8px] uppercase">FORMAT</span>
                      <span className="text-white mt-0.5 block">{item.format}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-gray-500 text-[8px] uppercase">SIZE</span>
                      <span className="text-white mt-0.5 block">{item.size}</span>
                    </div>
                  </div>

                  {isAvailable ? (
                    <InteractiveButton
                      variant={isGold ? 'primary-gold' : 'glass'}
                      className="w-full text-xs font-mono py-2.5 flex items-center justify-center gap-2"
                      onClick={() => handleDownload(item)}
                    >
                      <Download size={14} /> DOWNLOAD DOCUMENT
                    </InteractiveButton>
                  ) : (
                    <button
                      disabled
                      className="w-full border border-white/5 bg-white/[0.01] text-gray-500 text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed uppercase"
                    >
                      <Clock size={14} /> Coming Soon
                    </button>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
