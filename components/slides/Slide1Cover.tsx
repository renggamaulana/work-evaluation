'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { coverContent } from '@/data/content';

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

export default function Slide1Cover() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen min-h-screen md:h-[100dvh] flex items-center justify-center bg-grid-pattern bg-[length:40px_40px] overflow-y-auto md:overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24">
        {/* Top Tag */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block font-mono text-xs tracking-widest text-teal-400 uppercase">
            {coverContent.tag}
          </span>
        </motion.div>

        {/* Status Indicator */}
        <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span className="font-mono text-xs text-teal-400 tracking-wide">
              {coverContent.statusLabel}
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight">
          {coverContent.title.split('—').map((part, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                part.split(' ').map((word, j, words) => (
                  <span key={j}>
                    {j === words.length - 1 ? (
                      <span className="text-teal-400">{word}</span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))
              ) : (
                part + ' —'
              )}
              {' '}
            </span>
          ))}
        </motion.h1>

        {/* Terminal Line */}
        <motion.div variants={itemVariants} className="mb-12">
          <code className="font-mono text-sm text-gray-500">
            {coverContent.terminalLine}
          </code>
        </motion.div>

        {/* Metadata Columns */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="font-mono text-xs text-gray-500 tracking-wide mb-2">CANDIDATE</div>
            <div className="font-sans text-base md:text-lg text-gray-300">{coverContent.candidate}</div>
          </div>
          <div>
            <div className="font-mono text-xs text-gray-500 tracking-wide mb-2">EVALUATION DATE</div>
            <div className="font-sans text-base md:text-lg text-gray-300">{coverContent.evaluationDate}</div>
          </div>
        </motion.div>

        {/* Hint Text */}
        <motion.div variants={itemVariants} className="text-center pb-12 md:pb-0">
          <span className="font-mono text-xs text-gray-600 tracking-wide">
            {coverContent.hint}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
