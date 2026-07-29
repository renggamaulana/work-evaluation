'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SlideNav from './SlideNav';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Scope from './slides/Slide2Scope';
import Slide3Projects from './slides/Slide3Projects';
import Slide4Lessons from './slides/Slide4Lessons';
import Slide5Challenges from './slides/Slide5Challenges';
import Slide6Improvement from './slides/Slide6Improvement';
import Slide7Closing from './slides/Slide7Closing';

const slides = [
  Slide1Cover,
  Slide2Scope,
  Slide3Projects,
  Slide4Lessons,
  Slide5Challenges,
  Slide6Improvement,
  Slide7Closing,
];

const totalSlides = slides.length;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Navigation functions
  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPreviousSlide();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPreviousSlide]);

  const ActiveSlide = slides[currentSlide];

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden bg-[#0B1120]">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>

      <SlideNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={goToPreviousSlide}
        onNext={goToNextSlide}
        onGoToSlide={goToSlide}
      />
    </div>
  );
}
