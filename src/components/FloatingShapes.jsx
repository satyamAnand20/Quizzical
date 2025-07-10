import { motion } from "framer-motion";

const shapeStroke = "#facc15"; // yellow-300

const FloatingShapes = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-10 z-10 pointer-events-none">

      {/* Circle */}
      <motion.div
        className="w-8 h-8 border-2 rounded-full absolute bottom-10 left-10 opacity-30"
        style={{ borderColor: shapeStroke }}
        animate={{ x: [0, 300], y: [0, 100] }}
        transition={{
          x: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      />

      {/* Square */}
      <motion.div
        className="w-6 h-6 border-2 absolute top-1/3 left-1/4 opacity-30 rotate-12"
        style={{ borderColor: shapeStroke }}
        animate={{ x: [0, -250], y: [0, 80] }}
        transition={{
          x: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      />

      {/* Diamond */}
      <motion.div
        className="absolute bottom-10 left-1/2 opacity-20 rotate-45"
        animate={{ x: [0, 200], y: [0, -100] }}
        transition={{
          x: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <polygon
            points="50,0 100,50 50,100 0,50"
            fill="none"
            stroke={shapeStroke}
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      {/* Triangle */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-25"
        animate={{ x: [0, -300], y: [0, -150] }}
        transition={{
          x: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100">
          <polygon
            points="50,0 100,100 0,100"
            fill="none"
            stroke={shapeStroke}
            strokeWidth="5"
          />
        </svg>
      </motion.div>

      {/* Star */}
      <motion.div
        className="absolute top-2/3 right-1/5 opacity-20"
        animate={{ x: [0, 350], y: [0, 120] }}
        transition={{
          x: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="44" height="44" viewBox="0 0 24 24">
          <polygon
            fill="none"
            stroke={shapeStroke}
            strokeWidth="2"
            points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10"
          />
        </svg>
      </motion.div>


      {/* Pentagon */}
      <motion.div
        className="absolute bottom-1/5 left-[8%] opacity-20"
        animate={{ x: [0, -200], y: [0, 120] }}
        transition={{
          x: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100">
          <polygon
            points="50,5 95,40 77,95 23,95 5,40"
            fill="none"
            stroke={shapeStroke}
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      {/* Ring */}
      <motion.div
        className="absolute bottom-1/3 left-[10%] opacity-15"
        animate={{ x: [0, 300], y: [0, -100] }}
        transition={{
          x: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={shapeStroke}
            strokeWidth="5"
          />
        </svg>
      </motion.div>

      {/* Concentric Diamonds */}
      <motion.div
        className="absolute bottom-[20%] right-[15%] opacity-15"
        animate={{ x: [0, -180], y: [0, -130] }}
        transition={{
          x: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100">
          <g fill="none" stroke={shapeStroke} strokeWidth="2">
            <polygon points="50,0 100,50 50,100 0,50" />
            <polygon points="50,20 80,50 50,80 20,50" />
          </g>
        </svg>
      </motion.div>

      {/* Asterisk-style Star */}
      <motion.div
        className="absolute top-[15%] right-[35%] opacity-20"
        animate={{ x: [0, 300], y: [0, 150] }}
        transition={{
          x: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100">
          <g stroke={shapeStroke} strokeWidth="4" strokeLinecap="round">
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="20" y1="20" x2="80" y2="80" />
            <line x1="80" y1="20" x2="20" y2="80" />
          </g>
        </svg>
      </motion.div>

      {/* Puzzle Piece */}
      <motion.div
        className="absolute bottom-[15%] left-[25%] opacity-15"
        animate={{ x: [0, 220], y: [0, -150] }}
        transition={{
          x: { duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path
            fill="none"
            stroke={shapeStroke}
            strokeWidth="3"
            d="M10,10 h30 a10,10 0 0,1 0,20 a10,10 0 0,0 0,20 h20 a10,10 0 0,1 0,-20 a10,10 0 0,0 0,-20 h30 v30 h-20 v30 h-60 z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingShapes;
