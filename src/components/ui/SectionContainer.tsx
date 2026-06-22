/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  gridBackground?: boolean;
  noiseBg?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className = '',
  gridBackground = false,
  noiseBg = true,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`
        relative 
        w-full 
        py-16 
        md:py-24 
        lg:py-32 
        overflow-hidden
        ${className}
      `}
    >
      {/* Background Structures */}
      {gridBackground && (
        <div className="absolute inset-0 grid-bg opacity-[0.22] pointer-events-none z-0" />
      )}
      
      {noiseBg && (
        <div className="absolute inset-0 noise-overlay opacity-[0.13] pointer-events-none z-0 mix-blend-overlay" />
      )}

      {/* Radial soft ambient fade masking the boundaries of the grid background */}
      {gridBackground && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-0" />
      )}

      {/* Content wrapper keeping strict constraints of 1400px */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
