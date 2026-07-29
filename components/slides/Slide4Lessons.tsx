'use client';

import { motion } from 'framer-motion';
import { Briefcase, Cpu, Network, Users, Info } from 'lucide-react';
import { lessonsLearnedContent } from '@/data/content';

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

interface CategoryCardProps {
  category: typeof lessonsLearnedContent.categories[0];
}

function CategoryCard({ category }: CategoryCardProps) {
  const icons = {
    'Briefcase': Briefcase,
    'Cpu': Cpu,
    'Network': Network,
    'Users': Users,
  };

  const Icon = icons[category.icon as keyof typeof icons] || Briefcase;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <div className="relative h-full group">
        {/* Background */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10" />

        {/* Content */}
        <div className="relative h-full p-4 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${category.color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-semibold text-white">{category.title}</h3>
          </div>

          {/* Items */}
          <ul className="space-y-1.5 flex-1">
            {category.items.map((item, i) => (
              <li key={i} className="font-sans text-xs text-gray-300 flex items-start gap-2">
                <span className={`mt-0.5 flex-shrink-0 ${category.color.replace('bg-', 'text-').split(' ')[0]}`}>→</span>
                <span className="leading-snug line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>

          {/* General Awareness Badge */}
          {category.generalAwareness && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Info className="w-3.5 h-3.5 text-teal-400" />
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-wide">General Awareness</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.generalAwareness.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-white/5 border border-white/10 text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide4Lessons() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[100dvh] flex flex-col bg-grid-pattern bg-[length:40px_40px] px-6 md:px-10 pt-8 pb-28 overflow-hidden"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-1 h-6 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full" />
          <h1 className="font-sans text-2xl md:text-3xl font-bold text-white">
            {lessonsLearnedContent.title}
          </h1>
        </div>
        <p className="font-mono text-xs text-gray-500 ml-4">Skills acquired & guidance from peers</p>
      </motion.div>

      {/* Categories Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden">
        {lessonsLearnedContent.categories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </motion.div>
  );
}
