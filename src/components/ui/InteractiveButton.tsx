/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface InteractiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary-cyan' | 'primary-gold' | 'glass' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function InteractiveButton({
  children,
  variant = 'glass',
  size = 'md',
  icon,
  className = '',
  ...buttonProps
}: InteractiveButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  const variantStyles = {
    'primary-cyan': 'bg-[#00C2FF] text-black font-semibold hover:bg-[#009ECC] shadow-[0_4px_20px_rgba(0,194,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,194,255,0.45)]',
    'primary-gold': 'bg-[#D4AF37] text-black font-semibold hover:bg-[#B3922B] shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.45)]',
    glass: 'bg-white/[0.03] text-white border border-white/10 hover:border-white/20 hover:bg-white/[0.06] backdrop-blur-md',
    subtle: 'bg-transparent text-gray-400 hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative 
        inline-flex 
        items-center 
        justify-center 
        gap-2 
        rounded-full 
        font-medium 
        tracking-wide 
        overflow-hidden 
        cursor-pointer 
        transition-all 
        duration-300
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        ${className}
      `}
      {...buttonProps}
    >
      {/* Glow highlight for primary variants */}
      {(variant === 'primary-cyan' || variant === 'primary-gold') && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      )}
      
      {children}
      
      {icon && <span className="relative z-10">{icon}</span>}
    </motion.button>
  );
}
