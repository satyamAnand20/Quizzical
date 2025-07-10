// components/QuizCarousel.jsx
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const QuizCarousel = ({ items }) => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    const calculateScrollWidth = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const totalScrollWidth = container.scrollWidth - container.offsetWidth;
        setMaxX(-totalScrollWidth);
      }
    };
    calculateScrollWidth();
    window.addEventListener("resize", calculateScrollWidth);
    return () => window.removeEventListener("resize", calculateScrollWidth);
  }, [items]);

  const scrollBy = (distance) => {
    const currentX = x.get();
    const nextX = Math.max(Math.min(currentX + distance, 0), maxX);
    animate(x, nextX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-1 hover:bg-gray-200 transition"
        onClick={() => scrollBy(300)}
        aria-label="Scroll Left"
      >
        <FaArrowAltCircleLeft size={28} />
      </button>

      <button
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-1 hover:bg-gray-200 transition"
        onClick={() => scrollBy(-300)}
        aria-label="Scroll Right"
      >
        <FaArrowAltCircleRight size={28} />
      </button>

      {/* Carousel */}
      <motion.div className="overflow-hidden px-2" ref={containerRef}>
        <motion.div
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: maxX, right: 0 }}
          style={{ x }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px]"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizCarousel;
