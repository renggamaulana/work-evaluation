'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { lessonsLearnedContent } from '@/data/content';
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

export default function Slide4Lessons() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen min-h-screen md:h-[100dvh] flex flex-col items-center bg-grid-pattern bg-[length:40px_40px] px-4 md:px-12 py-8 md:py-12 pb-24 md:pb-28 overflow-y-auto md:overflow-hidden"
    >
      <motion.h1 variants={itemVariants} className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center flex-shrink-0">
        {lessonsLearnedContent.title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl w-full px-2 md:px-0 flex-1 min-h-0">
        {lessonsLearnedContent.categories.map((category) => {
          const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
          return (
            <motion.div key={category.title} variants={itemVariants} className="min-h-0">
              <Card className="h-full max-h-[calc(100dvh-14rem)]">
                <div className={`inline-flex p-2 md:p-3 rounded-xl ${category.color} mb-3 md:mb-4 flex-shrink-0`}>
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-sans text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex-shrink-0">{category.title}</h3>
                <ul className="space-y-1.5 md:space-y-2 overflow-y-auto pr-1 flex-1 min-h-0" style={{maxHeight: 'calc(100dvh - 20rem)'}}>
                  {category.items.map((item, i) => (
                    <li key={i} className="font-sans text-xs md:text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.generalAwareness && (
                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10 flex-shrink-0">
                    <Badge variant="tag" className="mb-2">
                      General Awareness
                    </Badge>
                    <p className="text-xs text-gray-500 mt-2 font-sans">
                      Exposure only, not hands-on usage
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.generalAwareness.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
