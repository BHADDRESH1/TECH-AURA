/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface AmbientOrbProps {
  color?: 'cyan' | 'gold' | 'purple' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
}

export default function AmbientOrb({
  color = 'cyan',
  className = '',
  size = 'md',
  delay = 0,
}: AmbientOrbProps) {
  const sizeClasses = {
    sm: 'w-[150px] h-[150px] blur-[60px]',
    md: 'w-[300px] h-[300px] blur-[100px]',
    lg: 'w-[500px] h-[500px] blur-[150px]',
    xl: 'w-[800px] h-[800px] blur-[220px]',
  };

  const colorClasses = {
    cyan: 'bg-[#00C2FF]/10',
    gold: 'bg-[#D4AF37]/10',
    purple: 'bg-[#8F00FF]/10',
    white: 'bg-white/5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.12, 1],
        x: [0, 40, -20, 0],
        y: [0, -50, 30, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute rounded-full pointer-events-none mix-blend-screen opacity-40 ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    />
  );
}
