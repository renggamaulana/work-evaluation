'use client';

import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SlideNavProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export default function SlideNav({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
}: SlideNavProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* Fullscreen Toggle */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5 text-gray-400" />
        ) : (
          <Maximize className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {/* Previous Button */}
      {currentSlide > 0 && (
        <button
          onClick={onPrevious}
          className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-400/40 transition-all group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
        </button>
      )}

      {/* Dot Indicators */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-teal-400'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          className="fixed bottom-6 right-24 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-400/40 transition-all group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
        </button>
      )}

      {/* Slide Counter */}
      <div className="fixed bottom-6 right-6 z-50 font-mono text-sm text-gray-500">
        {currentSlide === totalSlides - 1 ? (
          <span className="text-teal-400/60">{String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
        ) : (
          <span>{String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
        )}
      </div>
    </>
  );
}
