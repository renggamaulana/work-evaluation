'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ProjectModal from '@/components/ProjectModal';
import { projectsContent } from '@/data/content';
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

export default function Slide3Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsContent.projects[0] | null>(null);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-screen min-h-screen md:h-[100dvh] flex flex-col items-center bg-grid-pattern bg-[length:40px_40px] px-4 md:px-12 py-8 md:py-12 pb-24 md:pb-28 overflow-y-auto md:overflow-hidden"
      >
        <motion.h1 variants={itemVariants} className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-center flex-shrink-0">
          {projectsContent.title}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-6xl w-full flex-1 px-2 md:px-0 min-h-0">
          {projectsContent.projects.map((project) => {
            const IconComponent = LucideIcons[project.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon;

            return (
              <motion.div key={project.title} variants={itemVariants} className="min-h-0">
                <Card
                  className="h-full cursor-pointer transition-all duration-300 hover:border-teal-400/40 hover:shadow-teal-500/10 shadow-lg flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex justify-between items-start mb-3 md:mb-4 flex-shrink-0">
                    <div className={`inline-flex p-2 md:p-3 rounded-xl ${project.color}`}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <h3 className="font-sans text-base md:text-lg font-semibold text-white mb-2 md:mb-3 flex-shrink-0">
                    {project.title}
                  </h3>

                  <div className="flex-1 min-h-0">
                    <ul className="space-y-1.5 line-clamp-2 md:line-clamp-3 mb-3">
                      {project.description.slice(0, 3).map((item, i) => (
                        <li key={i} className="font-sans text-xs md:text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-teal-400 mt-0.5 flex-shrink-0 text-xs">•</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {project.images && project.images.length > 0 && (
                      <div className="flex items-center gap-2 text-xs text-teal-400/80 font-mono mb-3">
                        <LucideImages className="w-4 h-4" />
                        <span>{project.images.length} screenshot{project.images.length > 1 ? 's' : ''}</span>
                      </div>
                    )}

                    {project.techTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.techTags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 text-xs text-teal-400/60 font-mono flex items-center gap-1 flex-shrink-0">
                    Click to view details <LucideIcons.ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          images={selectedProject.images || []}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

// Import images icon
function LucideImages({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
