'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Monitor, Activity, Globe, GitBranch, Archive, ImageOff } from 'lucide-react';
import { projectsContent } from '@/data/content';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const icons = {
  LayoutDashboard: Monitor,
  Activity: Activity,
  Globe: Globe,
  GitBranch: GitBranch,
  Archive: Archive,
};

function ProjectCard({
  project,
  onOpenGallery,
}: {
  project: typeof projectsContent.projects[0];
  onOpenGallery: () => void;
}) {
  const [thumbFailed, setThumbFailed] = useState(false);
  const Icon = icons[project.icon as keyof typeof icons] || Monitor;
  const textColor = project.color.split(' ')[1] || 'text-teal-400';
  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.03] transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      <div className="p-5 md:p-6 flex flex-col h-full min-h-0">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 flex-shrink-0">
          <div className={`p-3 rounded-xl ${project.color} bg-opacity-20`}>
            <Icon className="w-6 h-6" />
          </div>
          {hasImages && (
            <span className="text-xs font-mono text-gray-500">
              {project.images!.length} Overviews
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-sans text-lg font-bold text-white mb-3 flex-shrink-0 ${textColor}`}>
          {project.title}
        </h3>

        {/* Description — takes remaining space and scrolls internally if long,
            never pushes the thumbnail below the card / viewport */}
        <ul className="space-y-1.5 mb-4 overflow-y-auto pr-1 flex-1 min-h-0">
          {project.description.map((item, i) => (
            <li key={i} className="font-sans text-sm text-gray-400 flex items-start gap-2 leading-snug">
              <span className={`mt-0.5 flex-shrink-0 ${textColor}`}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Thumbnail / gallery trigger — pinned to bottom, fixed height, never grows */}
        {hasImages && (
          <button
            onClick={onOpenGallery}
            className="relative w-full rounded-lg overflow-hidden h-24 border border-white/10 hover:border-teal-400/40 transition-all group bg-[#0F172A] flex-shrink-0"
          >
            {!thumbFailed ? (
              <img
                src={project.images![0]}
                alt=""
                onError={() => setThumbFailed(true)}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/[0.04] to-transparent">
                <ImageOff className="w-5 h-5 text-gray-600" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-xs font-mono text-white/90 bg-black/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                Explore Projects →
              </span>
            </div>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Slide3Projects() {
  const [galleryProject, setGalleryProject] = useState<typeof projectsContent.projects[0] | null>(null);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-screen h-[100dvh] flex flex-col bg-grid-pattern bg-[length:40px_40px] px-6 md:px-12 pt-10 pb-8 overflow-hidden"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8 flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full" />
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-white">
              {projectsContent.title}
            </h1>
          </div>
          <p className="font-mono text-sm text-gray-500 ml-4">Key contributions & delivered solutions</p>
        </motion.div>

        {/* Projects Grid — takes exactly the remaining height, never overflows the slide */}
        <div className="flex-1 min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-4 md:gap-5 h-full">
            {projectsContent.projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenGallery={() => setGalleryProject(project)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {galleryProject && galleryProject.images && (
        <ImageGalleryModal
          title={galleryProject.title}
          images={galleryProject.images}
          onClose={() => setGalleryProject(null)}
        />
      )}
    </>
  );
}