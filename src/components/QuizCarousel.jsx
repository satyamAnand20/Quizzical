import { useRef, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const QuizCarousel = ({ items }) => {
  const containerRef = useRef(null);
  const [scrollLeftMax, setScrollLeftMax] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setScrollLeftMax(container.scrollWidth - container.clientWidth);
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, [items]);

  const scrollBy = (offset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Arrow Buttons */}
      <button
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-1 hover:bg-gray-200 transition"
        onClick={() => scrollBy(-300)}
        aria-label="Scroll Left"
      >
        <FaArrowAltCircleLeft size={28} />
      </button>

      <button
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-1 hover:bg-gray-200 transition"
        onClick={() => scrollBy(300)}
        aria-label="Scroll Right"
      >
        <FaArrowAltCircleRight size={28} />
      </button>

      {/* Scrollable container (touch-drag enabled) */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2"
        style={{
          WebkitOverflowScrolling: "touch", // iOS momentum scroll
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-none w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCarousel;
