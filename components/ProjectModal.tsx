'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Badge from '@/components/ui/Badge';

interface ProjectModalProps {
  project: {
    title: string;
    description: string[];
    techTags: string[];
    color: string;
  };
  images: string[];
  onClose: () => void;
}

export default function ProjectModal({ project, images, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal Content — fixed height flex column so image + details always fit */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl h-[90dvh] md:h-[85dvh] bg-[#0B1120] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-400/40 transition-all text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Slideshow — capped height, never grows past its share */}
          <div className="relative flex-shrink-0 h-[42vh] md:h-[48vh] bg-[#0F172A] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-teal-400/40 transition-all text-white backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-teal-400/40 transition-all text-white backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'w-8 bg-teal-400'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                <span className="font-mono text-xs text-white">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>

          {/* Project Details — takes remaining space, scrolls internally, never clipped */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6 md:p-8">
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h2>

            <div className="mb-6">
              <h3 className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-3">Project Details</h3>
              <ul className="space-y-2">
                {project.description.map((item, i) => (
                  <li key={i} className="font-sans text-sm text-gray-300 flex items-start gap-3">
                    <span className="text-teal-400 mt-1 flex-shrink-0">→</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.techTags.length > 0 && (
              <div>
                <h3 className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <Badge key={tag} className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}