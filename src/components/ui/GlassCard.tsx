/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  accent?: 'none' | 'cyan' | 'gold' | 'hover-cyan' | 'hover-gold';
  isHoverable?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  accent = 'none',
  isHoverable = true,
  className = '',
  ...motionProps
}: GlassCardProps) {
  const getAccentClass = () => {
    switch (accent) {
      case 'cyan':
        return 'glass-accent-cyan';
      case 'gold':
        return 'glass-accent-gold';
      case 'hover-cyan':
        return 'hover:border-[#00C2FF]/30 hover:shadow-[0_0_40px_rgba(0,194,255,0.05)]';
      case 'hover-gold':
        return 'hover:border-[#D4AF37]/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.05)]';
      default:
        return '';
    }
  };

  return (
    <motion.div
      whileHover={isHoverable ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`
        glass-panel 
        rounded-[24px] 
        p-6 
        relative 
        overflow-hidden 
        transition-colors 
        duration-300 
        ${getAccentClass()} 
        ${className}
      `}
      {...motionProps}
    >
      {/* Dynamic reflective glare line inside card */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      
      {/* Decorative grain/noise pattern overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40 mix-blend-overlay" />
      
      {/* Content slot */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
