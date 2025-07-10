import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const dummyUsers = Array.from({ length: 25 }, (_, i) => ({
  name: `Player ${i + 1}`,
  coins: Math.floor(Math.random() * 100),
  avatar: `https://i.pravatar.cc/150?img=${(i % 10) + 1}`,
})).sort((a, b) => b.coins - a.coins);

const LeaderboardPage = () => {
  const topThree = dummyUsers.slice(0, 3);
  const rest = dummyUsers.slice(3);
  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, rest.length));
  };

  return (
    <div className="min-h-screen bg-[#102935] text-white py-6 px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Squares */}
        <div className="absolute top-10 left-10 w-16 h-16 border border-white/10 rotate-12" />
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/10 rotate-6" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rotate-45" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10" />
        <div className="absolute top-[55%] left-10 w-12 h-12 border border-white/10 rotate-12" />

        {/* Circles */}
        <div className="absolute top-20 left-[40%] w-16 h-16 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-[10%] left-[35%] w-10 h-10 border-2 border-white/10 rounded-full" />
        <div className="absolute top-[30%] right-[15%] w-12 h-12 border border-white/10 rounded-full" />
        <div className="absolute top-[10%] left-[20%] w-12 h-12 border-2 border-white/10 rounded-full" />

        {/* Triangles */}
        <svg
          className="absolute top-[15%] right-[30%] w-16 h-16 stroke-white/10"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,100 0,100" fill="none" strokeWidth="2" />
        </svg>
        <svg
          className="absolute bottom-[20%] left-[10%] w-16 h-16 stroke-white/10 rotate-180"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,100 0,100" fill="none" strokeWidth="2" />
        </svg>
        <svg
          className="absolute top-[45%] left-[20%] w-12 h-12 stroke-white/10 rotate-12"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,100 0,100" fill="none" strokeWidth="2" />
        </svg>

        {/* Crosses */}
        <div className="absolute top-[35%] left-[60%] w-4 h-4 border-l-2 border-white/10 border-t-2 rotate-45" />
        <div className="absolute bottom-[25%] right-[35%] w-5 h-5 border-l-2 border-white/10 border-t-2 rotate-45" />

        {/* Stars */}
        <svg
          className="absolute top-[25%] left-[75%] w-10 h-10 stroke-white/10"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            strokeWidth="1.5"
            d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"
          />
        </svg>
        <svg
          className="absolute bottom-[15%] right-[15%] w-10 h-10 stroke-white/10"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            strokeWidth="1.5"
            d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center mb-15 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
          Leaderboard
        </h1>

        {/* Podium */}
        <div className="flex justify-center items-end gap-8 max-[461px]:gap-3 mb-20">
          <PodiumItem user={topThree[1]} rank={2} podiumHeight="h-36" />
          <PodiumItem user={topThree[0]} rank={1} podiumHeight="h-52" />
          <PodiumItem user={topThree[2]} rank={3} podiumHeight="h-28" />
        </div>

        {/* Remaining Users */}
        <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto w-full">
          {rest.slice(0, visibleCount).map((user, index) => (
            <LeaderboardRow key={index} rank={index + 4} user={user} />
          ))}
          {visibleCount < rest.length && (
            <button
              onClick={loadMore}
              className="mt-4 bg-purple-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-purple-800"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PodiumItem = ({ user, rank, podiumHeight }) => {
  const rankLabels = {
    1: { label: "1st", bg: "bg-yellow-400", emoji: "👑" },
    2: { label: "2nd", bg: "bg-gray-400", emoji: "🥈" },
    3: { label: "3rd", bg: "bg-orange-500", emoji: "🥉" },
  };

  const delays = { 1: 0, 2: 0.5, 3: 1 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delays[rank], ease: "easeOut" }}
      className="flex flex-col items-center justify-end"
    >
      <div className="relative mb-3">
        <div className="absolute -top-10 w-full text-center">
          <span
            className={`px-4 py-1 rounded-full text-sm font-bold ${rankLabels[rank].bg}`}
          >
            {rankLabels[rank].label} {rankLabels[rank].emoji}
          </span>
        </div>
        <div className="w-32 h-32 max-[461px]:w-25 max-[461px]:h-24 rounded-full overflow-hidden border-4 border-white">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className={`w-32 ${podiumHeight} max-[461px]:w-29 max-[461px]:text-xs max-[461px]:px-1 max-[390px]:w-25 bg-[#1e3b4c] rounded-t-md flex flex-col items-center justify-center`}
      >
        <div className="font-bold text-lg mt-2 max-[461px]:text-lg text-center">
          {user.name}
        </div>
        <div className="font-semibold text-sm text-yellow-300 max-[461px]:text-sm">
          🪙 {user.coins}
        </div>
      </div>
    </motion.div>
  );
};

const LeaderboardRow = ({ rank, user }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.25, ease: "easeInOut" }}
    className="w-full bg-[#1e3b4c] rounded-lg p-4 flex items-center justify-between text-lg shadow-md cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <span className="font-bold text-yellow-400 w-6 text-center">{rank}</span>
      <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
      <span className="font-semibold text-white w-60 truncate max-[461px]:w-32">
        {user.name}
      </span>
    </div>
    <div className="text-yellow-300 font-semibold">{user.coins} 🪙</div>
  </motion.div>
);

export default LeaderboardPage;
