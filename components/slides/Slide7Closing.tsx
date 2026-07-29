'use client';

import { motion } from 'framer-motion';
import { closingContent } from '@/data/content';
import { ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Slide7Closing() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[100dvh] flex items-center justify-center bg-grid-pattern bg-[length:40px_40px]"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Status Indicator */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span className="font-mono text-xs text-teal-400 tracking-wide">
              SESSION COMPLETE
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {closingContent.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 variants={itemVariants} className="font-sans text-xl sm:text-2xl md:text-3xl text-gray-400 mb-16">
          {closingContent.subtitle}
        </motion.h2>

        {/* Signature Line */}
        <motion.div variants={itemVariants} className="pt-6 border-t border-white/10">
          <code className="font-mono text-sm text-gray-500">
            {closingContent.signature}
          </code>
        </motion.div>

        {/* Terminal-style accent */}
        <motion.div variants={itemVariants} className="mt-8">
          <code className="font-mono text-xs text-gray-600">
            root@rengga:~/performance-review-2026 --exit
          </code>
        </motion.div>
      </div>
    </motion.div>
  );
}
