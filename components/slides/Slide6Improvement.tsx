'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { improvementPlanContent } from '@/data/content';
import * as LucideIcons from 'lucide-react';

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

export default function Slide6Improvement() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[100dvh] flex flex-col items-center justify-center bg-grid-pattern bg-[length:40px_40px] px-4 md:px-8 pt-10 pb-28"
    >
      <motion.h1 variants={itemVariants} className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
        {improvementPlanContent.title}
      </motion.h1>

      <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2 max-w-6xl w-full px-2">
        {improvementPlanContent.phases.map((phase, index) => {
          const IconComponent = LucideIcons[phase.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          const isLast = index === improvementPlanContent.phases.length - 1;

          return (
            <motion.div key={phase.term} variants={itemVariants} className="flex-1 flex flex-col md:flex-row items-stretch md:items-center">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-teal-400/40 transition-all duration-300 flex-1 flex flex-col w-full">
                <div className={`inline-flex p-2 rounded-lg ${phase.color} mb-3 flex-shrink-0`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-2 flex-shrink-0">
                  {phase.term}
                </h3>
                <ul className="space-y-1.5 flex-1">
                  {phase.items.map((item, i) => (
                    <li key={i} className="font-sans text-xs md:text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
                      <span className="leading-snug line-clamp-2">{item}</span>
                    </li> 
                  ))}
                </ul>
              </div>

              {!isLast && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 px-2">
                  <ArrowRight className="w-5 h-5 text-teal-400/30" />
                </div>
              )}

              {!isLast && (
                <div className="flex md:hidden items-center justify-center py-2 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-teal-400/30 rotate-90" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
