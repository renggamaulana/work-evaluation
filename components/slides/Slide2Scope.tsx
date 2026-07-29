'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { scopeOfWorkContent } from '@/data/content';
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

export default function Slide2Scope() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[100dvh] flex flex-col items-center justify-center bg-grid-pattern bg-[length:40px_40px] px-4 md:px-8 pt-10 pb-28"
    >
      <motion.h1 variants={itemVariants} className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
        {scopeOfWorkContent.title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl w-full px-2">
        {scopeOfWorkContent.categories.map((category) => {
          const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full">
                <div className={`inline-flex p-2 rounded-lg ${category.color} mb-3`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-base md:text-lg font-semibold text-white mb-3">{category.title}</h3>
                <ul className="space-y-1.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="font-sans text-xs md:text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0 text-xs">•</span>
                      <span className="leading-snug line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
