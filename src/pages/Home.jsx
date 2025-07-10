import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizzes } from "../data/quizzes";

import Hero from "../components/Hero";
import QuizCard from "../components/QuizCard";
import QuizCarousel from "../components/QuizCarousel";

function Home() {
  const texts = ["FLEX YOUR BRAIN..", "PLAY. LEARN. WIN."];
  const [textIndex, setTextIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <Hero />

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Rotating Text Banner */}
        <div className="h-28 sm:h-32 md:h-36 flex items-center justify-center text-center overflow-hidden bg-[#501578] rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-clip-text text-transparent leading-tight"
            >
              {texts[textIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto py-10">
        {/* Featured Quizzes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured Quizzes</h2>
          <QuizCarousel
            items={quizzes.map((quiz) => (
              <QuizCard key={`featured-${quiz.id}`} {...quiz} />
            ))}
          />
        </section>

        {/* More Quizzes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">More Quizzes</h2>
          <QuizCarousel
            items={quizzes.map((quiz) => (
              <QuizCard key={`more-${quiz.id}`} {...quiz} />
            ))}
          />
        </section>
      </div>
    </>
  );
}

export default Home;
