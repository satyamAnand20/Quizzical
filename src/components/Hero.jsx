import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

function Hero() {
  return (
    <>
      <div className="relative bg-[#501578] pt-6 pb-6 sm:pt-8 sm:pb-10 min-h-[20vh] sm:min-h-[35vh] lg:min-h-[50vh] overflow-hidden">
        <FloatingShapes />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left shadow-md rounded-md p-6 bg-[#501578] bg-opacity-10">
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent mb-4"
            >
              Create Quiz
            </motion.h1>

            <p className="text-white text-base sm:text-lg font-semibold mb-6">
              Create interactive quizzes in minutes with our online quiz maker.
            </p>
            <motion.button
              whileHover={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-2 text-lg font-bold rounded-lg"
            >
              Create Quiz
            </motion.button>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left shadow-md rounded-md p-6 bg-[#501578] bg-opacity-10">
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent mb-4"
            >
              Generate Quiz
            </motion.h1>
            <p className="text-white text-base sm:text-lg font-semibold mb-6">
              Create quizzes instantly with AI — enter a topic and get engaging
              questions in seconds!
            </p>
            <motion.button
              whileHover={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-2 text-lg font-bold rounded-lg"
            >
              Generate Quiz
            </motion.button>
          </div>
        </div>
      </div>
      <div className="-mt-1">
        <svg
          className="block w-full"
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#501578"
            fillOpacity="1"
            d="M0,96L60,90.7C120,85,240,75,360,80C480,85,600,106,720,104C840,101,960,75,1080,58.7C1200,43,1320,37,1380,34.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
    </>
  );
}

export default Hero;
