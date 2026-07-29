'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Monitor, Activity, Globe, GitBranch, X } from 'lucide-react';
import { projectsContent } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Project showcase component
function ProjectShowcase({ project, index, onClick, isActive }: {
  project: typeof projectsContent.projects[0];
  index: number;
  onClick: () => void;
  isActive: boolean;
}) {
  const icons = {
    'LayoutDashboard': Monitor,
    'Activity': Activity,
    'Globe': Globe,
    'GitBranch': GitBranch,
  };

  const Icon = icons[project.icon as keyof typeof icons] || Monitor;
  const colors = {
    'bg-teal-500/20 text-teal-400': 'from-teal-500/20 to-teal-500/5',
    'bg-orange-500/20 text-orange-400': 'from-orange-500/20 to-orange-500/5',
    'bg-cyan-500/20 text-cyan-400': 'from-cyan-500/20 to-cyan-500/5',
    'bg-pink-500/20 text-pink-400': 'from-pink-500/20 to-pink-500/5',
  };

  const gradientClass = colors[project.color as keyof typeof colors] || 'from-teal-500/20 to-teal-500/5';
  const textColor = project.color.split(' ')[1] || 'text-teal-400';

  return (
    <motion.div
      variants={itemVariants}
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Background Card */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientClass} border border-white/10 group-hover:border-white/20 transition-all duration-300`} />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${project.color} bg-opacity-20`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            {project.images && (
              <span className="text-xs text-gray-500 font-mono">{project.images.length} shots</span>
            )}
            <ChevronRight className={`w-5 h-5 text-gray-600 group-hover:${textColor} transition-all duration-300`} />
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-sans text-lg font-bold text-white mb-2 group-hover:${textColor} transition-colors`}>
          {project.title}
        </h3>

        {/* Description Preview */}
        <p className="font-sans text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {project.description.slice(0, 2).join(' • ')}
        </p>

        {/* Tech Tags */}
        {project.techTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techTags.slice(0, isActive ? 6 : 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-400"
              >
                {tag}
              </span>
            ))}
            {!isActive && project.techTags.length > 3 && (
              <span className="text-xs text-gray-500">+{project.techTags.length - 3}</span>
            )}
          </div>
        )}

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
}

// Expanded view modal
function ExpandedView({ project, onClose }: { project: typeof projectsContent.projects[0]; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  const icons = {
    'LayoutDashboard': Monitor,
    'Activity': Activity,
    'Globe': Globe,
    'GitBranch': GitBranch,
  };

  const Icon = icons[project.icon as keyof typeof icons] || Monitor;
  const textColor = project.color.split(' ')[1] || 'text-teal-400';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90dvh] bg-[#0B1120] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${project.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className={`font-sans text-2xl font-bold text-white group-hover:${textColor}`}>{project.title}</h2>
              {project.images && (
                <span className="text-xs text-gray-500 font-mono">{project.images.length} screenshots</span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="relative aspect-video bg-[#0F172A]">
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + project.images!.length) % project.images!.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-white rotate-180" />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % project.images!.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 rounded-full transition-all ${i === currentImage ? 'w-8 bg-teal-400' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Details */}
        <div className="p-6 overflow-y-auto max-h-[40dvh]">
          <h3 className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-4">Project Details</h3>
          <ul className="space-y-3 mb-6">
            {project.description.map((item, i) => (
              <li key={i} className="font-sans text-sm text-gray-300 flex items-start gap-3">
                <span className={`mt-1 ${textColor}`}>→</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {project.techTags.length > 0 && (
            <>
              <h3 className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-teal-400/40 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Slide3Projects() {
  const [expandedProject, setExpandedProject] = useState<typeof projectsContent.projects[0] | null>(null);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-screen h-[100dvh] flex flex-col bg-grid-pattern bg-[length:40px_40px] px-6 md:px-12 pt-10 pb-28 overflow-hidden"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full" />
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-white">
              {projectsContent.title}
            </h1>
          </div>
          <p className="font-mono text-sm text-gray-500 ml-4">Key contributions & delivered solutions</p>
        </motion.div>

        {/* Projects Grid - Bento Box Style */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 overflow-hidden">
          {projectsContent.projects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
              onClick={() => setExpandedProject(project)}
              isActive={expandedProject?.title === project.title}
            />
          ))}
        </div>
      </motion.div>

      {/* Expanded View Modal */}
      {expandedProject && (
        <ExpandedView
          project={expandedProject}
          onClose={() => setExpandedProject(null)}
        />
      )}
    </>
  );
}
