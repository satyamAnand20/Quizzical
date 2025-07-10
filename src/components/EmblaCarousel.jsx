import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {slides.map((slide, index) => (
            <div
              className="flex-none w-64 md:w-72 lg:w-80"
              key={index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        aria-label="Scroll Prev"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-200 transition"
      >
        {/* You can replace this with your icon */}
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        aria-label="Scroll Next"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-200 transition"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
