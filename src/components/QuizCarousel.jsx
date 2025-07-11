import { useRef, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const QuizCarousel = ({ title, items }) => {
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
      {/*Header with heading and scroll buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button
            className="bg-white shadow rounded-full p-1 hover:bg-gray-200 transition"
            onClick={() => scrollBy(-300)}
            aria-label="Scroll Left"
          >
            <MdKeyboardArrowLeft size={28} />
          </button>
          <button
            className="bg-white shadow rounded-full p-1 hover:bg-gray-200 transition"
            onClick={() => scrollBy(300)}
            aria-label="Scroll Right"
          >
            <MdKeyboardArrowRight size={28} />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 pb-2"
        style={{
          WebkitOverflowScrolling: "touch",
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
