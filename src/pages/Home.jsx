import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Hero from "../components/Hero";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizzes";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Home() {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: false, speed: 2, dragFree:true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: false, speed: 2, dragFree:true });

  const scrollPrev = useCallback((emblaApi) => {
    if (emblaApi) emblaApi.scrollPrev();
  }, []);

  const scrollNext = useCallback((emblaApi) => {
    if (emblaApi) emblaApi.scrollNext();
  }, []);

  return (
    <>
      <Hero />

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto py-10">

        {/* Featured Quizzes */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Featured Quizzes</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollPrev(emblaApi1)}
                className="bg-gray-100 hover:bg-gray-300 rounded-full shadow-md transition-colors p-1"
                aria-label="Scroll Left"
              >
                <FaArrowAltCircleLeft size={28} />
              </button>
              <button
                onClick={() => scrollNext(emblaApi1)}
                className="bg-gray-100 hover:bg-gray-300 rounded-full shadow-md transition-colors p-1"
                aria-label="Scroll Right"
              >
                <FaArrowAltCircleRight size={28} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden px-2" ref={emblaRef1}>
            <div className="flex">
              {quizzes.map((quiz) => (
                <div
                  key={`featured-${quiz.id}`}
                  className="flex-none w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px]"
                >
                  <QuizCard {...quiz} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Quizzes */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">More Quizzes</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollPrev(emblaApi2)}
                className="bg-gray-100 hover:bg-gray-300 rounded-full shadow-md transition-colors p-1"
                aria-label="Scroll Left"
              >
                <FaArrowAltCircleLeft size={28} />
              </button>
              <button
                onClick={() => scrollNext(emblaApi2)}
                className="bg-gray-100 hover:bg-gray-300 rounded-full shadow-md transition-colors p-1"
                aria-label="Scroll Right"
              >
                <FaArrowAltCircleRight size={28} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden px-2" ref={emblaRef2}>
            <div className="flex">
              {quizzes.map((quiz) => (
                <div
                  key={`more-${quiz.id}`}
                  className="flex-none w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px]"
                >
                  <QuizCard {...quiz} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;
