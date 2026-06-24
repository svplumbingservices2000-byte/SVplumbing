import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import gallery01 from "/assets/gallery-01.jpeg";
import gallery02 from "/assets/gallery-02.jpeg";
import gallery03 from "/assets/gallery-03.jpeg";
import gallery04 from "/assets/gallery-04.jpeg";
import gallery05 from "/assets/gallery-05.jpeg";
import gallery06 from "/assets/gallery-06.jpeg";
import gallery07 from "/assets/gallery-07.jpeg";
import gallery08 from "/assets/gallery-08.jpeg";
import gallery09 from "/assets/gallery-09.jpeg";
import gallery10 from "/assets/gallery-10.jpeg";
import gallery11 from "/assets/gallery-11.jpeg";
import gallery12 from "/assets/gallery-12.jpeg";
import gallery13 from "/assets/gallery-13.jpeg";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g01", src: gallery01, alt: "Bathroom Leakage Repair – Wall & Shower Mixer Work", category: "Bathroom Repair" },
  { id: "g02", src: gallery02, alt: "Tap & Faucet Repair at Kitchen Sink", category: "Tap & Faucet" },
  { id: "g03", src: gallery03, alt: "New CPVC Pipeline Layout Installation", category: "Pipeline Work" },
  { id: "g04", src: gallery04, alt: "Underground PVC Drainage Pipe Laying", category: "Pipeline Work" },
  { id: "g05", src: gallery05, alt: "Bathroom Wall Pipeline Repair with CPVC", category: "Bathroom Repair" },
  { id: "g06", src: gallery06, alt: "Motor Pump Connection & CPVC Setup", category: "Pump & Motor" },
  { id: "g07", src: gallery07, alt: "SV Plumbing Services – Office Exterior", category: "Our Office" },
  { id: "g08", src: gallery08, alt: "SV Plumbing Services – Business Profile", category: "Our Office" },
  { id: "g09", src: gallery09, alt: "SV Plumbing Services – Office Interior", category: "Our Office" },
  { id: "g10", src: gallery10, alt: "Toilet Waste Pipe & Commode Fitting Work", category: "Bathroom Repair" },
  { id: "g11", src: gallery11, alt: "Underground PVC Pipe Joint Repair", category: "Pipeline Work" },
  { id: "g12", src: gallery12, alt: "Wall-Mounted Brass Tap Fitting Installation", category: "Tap & Faucet" },
  { id: "g13", src: gallery13, alt: "Underground Pipeline Joint Replacement", category: "Pipeline Work" },
];

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

  const filteredImages =
    activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  // Auto-play slideshow
  const startAutoPlay = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
    }, 3500);
  }, [filteredImages.length]);

  useEffect(() => {
    if (isAutoPlaying && filteredImages.length > 1) {
      startAutoPlay();
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [isAutoPlaying, startAutoPlay, filteredImages.length]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  useEffect(() => {
    if (currentSlide >= filteredImages.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, filteredImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (isAutoPlaying) startAutoPlay();
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % filteredImages.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + filteredImages.length) % filteredImages.length);

  // Touch/drag swipe
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setTranslateX(0);
    if (slideInterval.current) clearInterval(slideInterval.current);
  };
  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setTranslateX(clientX - startX);
  };
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(translateX) > 60) {
      if (translateX > 0) prevSlide();
      else nextSlide();
    }
    setTranslateX(0);
    if (isAutoPlaying) startAutoPlay();
  };

  // Lightbox navigation
  const lightboxNext = () => {
    if (!lightboxImage) return;
    const idx = GALLERY_IMAGES.findIndex((i) => i.id === lightboxImage.id);
    setLightboxImage(GALLERY_IMAGES[(idx + 1) % GALLERY_IMAGES.length]);
  };
  const lightboxPrev = () => {
    if (!lightboxImage) return;
    const idx = GALLERY_IMAGES.findIndex((i) => i.id === lightboxImage.id);
    setLightboxImage(GALLERY_IMAGES[(idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
  };

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxImage]);

  return (
    <div className="space-y-6" id="gallery-content">

      {/* CATEGORY FILTER PILLS */}
      <div className="w-full flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin" id="gallery-filters">
        {categories.map((cat) => {
          const count = cat === "All" ? GALLERY_IMAGES.length : GALLERY_IMAGES.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#0f1c3f] text-white shadow-sm border border-[#0f1c3f]"
                  : "bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-800"
              }`}
              id={`gallery-filter-${cat.replace(/\s+/g, "")}`}
            >
              {cat}
              <span className={`ml-1.5 text-[10px] ${activeFilter === cat ? "text-white/70" : "text-slate-400"}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* SLIDESHOW CAROUSEL */}
      <div className="relative bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl" id="gallery-slideshow">
        {/* Main Slide Area */}
        <div
          ref={sliderRef}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ aspectRatio: "16 / 10" }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => isDragging && handleDragEnd()}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {filteredImages.map((image, index) => {
            const offset = index - currentSlide;
            return (
              <div
                key={image.id}
                className="absolute inset-0"
                style={{
                  transform: `translateX(${offset * 100 + (isDragging && index === currentSlide ? (translateX / (sliderRef.current?.offsetWidth || 1)) * 100 : 0)}%)`,
                  transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: Math.abs(offset) <= 1 ? 1 : 0,
                  zIndex: offset === 0 ? 10 : 5,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-slate-900"
                  loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            );
          })}

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
            <div className="p-4 sm:p-6">
              <span className="inline-block bg-[#d32f2f] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md font-mono mb-1.5">
                {filteredImages[currentSlide]?.category}
              </span>
              <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg leading-snug max-w-xl">
                {filteredImages[currentSlide]?.alt}
              </h3>
              <p className="text-white/50 text-[10px] sm:text-xs font-mono mt-1">
                {currentSlide + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>

        {/* Controls - top right */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center space-x-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white transition-all"
            title={isAutoPlaying ? "Pause" : "Play"}
            id="slideshow-play-pause"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
          <button
            onClick={() => filteredImages[currentSlide] && setLightboxImage(filteredImages[currentSlide])}
            className="p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white transition-all"
            title="View full size"
            id="slideshow-zoom"
          >
            <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 bg-white/90 hover:bg-white rounded-full shadow-lg text-slate-700 hover:text-slate-900 transition-all hover:scale-110 active:scale-95"
          id="slideshow-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 bg-white/90 hover:bg-white rounded-full shadow-lg text-slate-700 hover:text-slate-900 transition-all hover:scale-110 active:scale-95"
          id="slideshow-next"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center space-x-1.5 pb-2 sm:pb-3 pointer-events-auto">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-7 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-slate-400 font-mono">
        {filteredImages.length} project photos • Swipe or use arrows to browse • Click zoom to view full size
      </div>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4"
          onClick={() => setLightboxImage(null)}
          id="gallery-lightbox"
        >
          <div className="relative max-w-5xl w-full max-h-[95vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-1 right-0 sm:-top-10 sm:right-0 flex items-center space-x-2 text-white/70 hover:text-white transition-colors z-20 p-2"
              id="lightbox-close-btn"
              aria-label="Close"
            >
              <span className="text-xs font-medium hidden sm:inline">ESC</span>
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-1 sm:-left-14 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full text-white transition-all"
              id="lightbox-prev"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full text-white transition-all"
              id="lightbox-next"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center min-h-0 pt-8 sm:pt-0">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[82vh] object-contain rounded-lg sm:rounded-2xl"
              />
            </div>

            {/* Caption */}
            <div className="mt-3 sm:mt-4 text-center flex-shrink-0">
              <p className="text-white font-bold text-sm sm:text-lg">{lightboxImage.alt}</p>
              <span className="text-white/40 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                {lightboxImage.category} • {GALLERY_IMAGES.findIndex((i) => i.id === lightboxImage.id) + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
