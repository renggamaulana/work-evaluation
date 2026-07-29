'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { coverContent } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const checklistItems = [
  'Backend Developer',
  'Performance Review'
];

export default function Slide1Cover() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[100dvh] flex items-center justify-center bg-grid-pattern bg-[length:40px_40px] px-6 py-8"
    >
      <div className="max-w-4xl w-full mx-auto">

        {/* Tag + Status — digabung satu baris */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-teal-400">
            {coverContent.tag}
          </span>

          <div className="flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
            <span className="font-mono text-[11px] tracking-wider text-teal-400">
              {coverContent.statusLabel}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-4xl font-bold leading-[1.1] text-white lg:text-5xl"
        >
          {coverContent.title.split('—').map((part, i, arr) => (
            <span key={i}>
              {i === arr.length - 1
                ? part.split(' ').map((word, j, words) => (
                    <span key={j}>
                      {j === words.length - 1 ? (
                        <span className="text-teal-400">{word}</span>
                      ) : (
                        word + ' '
                      )}
                    </span>
                  ))
                : part + ' —'}
            </span>
          ))}
        </motion.h1>

        {/* Terminal */}
        <motion.div
          variants={itemVariants}
          className="mb-6 overflow-hidden rounded-xl border border-slate-700 bg-[#1E1E1E] shadow-[0_20px_80px_rgba(0,0,0,.45)]"
        >
          <div className="flex items-center justify-between border-b border-slate-700 bg-[#2B2B2B] px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="font-mono text-[11px] text-gray-400">Terminal</span>
            <div className="w-12" />
          </div>

          <div className="p-5 font-mono text-[13px]">
            {/* Satu baris command saja, tidak duplikat path */}
            <div className="mb-3 flex flex-wrap items-center">
              <span className="text-green-400">rengga@MacBook-Pro</span>
              <span className="mx-2 text-gray-500">~/performance-review</span>
              <span className="text-cyan-400">%</span>
              <span className="ml-2 text-white">{coverContent.terminalLine}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="ml-1 inline-block h-4 w-[2px] bg-white"
              />
            </div>

            <div className="space-y-1.5 text-gray-300">
              {checklistItems.map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <span className="text-teal-400">✔</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Metadata — divider tipis, bukan gap besar */}
        <motion.div
          variants={itemVariants}
          className="mb-6 grid grid-cols-2 gap-6 border-t border-slate-800 pt-6"
        >
          <div>
            <div className="mb-1 font-mono text-[11px] tracking-widest text-gray-500 uppercase">
              Candidate
            </div>
            <div className="text-base text-gray-300">{coverContent.candidate}</div>
          </div>

          <div>
            <div className="mb-1 font-mono text-[11px] tracking-widest text-gray-500 uppercase">
              Evaluation Date
            </div>
            <div className="text-base text-gray-300">{coverContent.evaluationDate}</div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center">
          <span className="font-mono text-[11px] tracking-widest text-gray-600 uppercase">
            {coverContent.hint}
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}