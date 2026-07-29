'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { challengesContent } from '@/data/content';
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

export default function Slide5Challenges() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[100dvh] flex flex-col items-center justify-center bg-slate-900 bg-grid-pattern bg-[length:40px_40px] px-4 md:px-8 pt-10 pb-28"
    >
      <motion.h1 variants={itemVariants} className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
        {challengesContent.title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl w-full px-2">
        {challengesContent.challenges.map((challenge) => {
          const IconComponent = LucideIcons[challenge.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={challenge.title} variants={itemVariants}>
              <Card variant="challenges" className="h-full flex flex-col">
                <div className={`inline-flex p-2 rounded-lg ${challenge.color} mb-3 flex-shrink-0`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-base md:text-lg font-semibold text-white mb-3">{challenge.title}</h3>
                <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-4">
                  {challenge.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
