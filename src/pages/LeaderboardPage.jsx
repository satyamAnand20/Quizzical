import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NormalShapes from "../components/NormalShapes";

const dummyUsers = Array.from({ length: 25 }, (_, i) => ({
  name: `Player ${i + 1}`,
  coins: Math.floor(Math.random() * 100),
  avatar: `https://i.pravatar.cc/150?img=${(i % 10) + 1}`,
})).sort((a, b) => b.coins - a.coins);

const LeaderboardPage = () => {
  const topThree = dummyUsers.slice(0, 3);
  const rest = dummyUsers.slice(3);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://run.confettipage.com/here.js";
    script.setAttribute(
      "data-confetticode",
      "U2FsdGVkX18a4URI0L7z3yvhIAaKFhChgXbMBjoL1FVQWsQIQVBJ/9A1l8EVXQoXSJI+J07VDBIW6Z9Ql1Sfal9WDdAYvbUEoGUjVPpAasxfcRTew7s/h657DP7F63hidNz9gEf7UpNbIeHR0GLh3zOyx2F0MQh39AN5JG3B5c9GsQKC22Ez1/EcoxrcY5MvLZsRK41n7HqP1aLgP1AiAStjHQONmd0MyjNECXjCR6Gw3B/2bo9zF2rxF4K1xu0jnXfvDM0FWn6vmwYj4b7CWcT3YofRxtaHnc+KSOnirnbVewNToPq1llYRe1WQ3RniVKswE6IOj6N8F6gBRxjy6gigueVWKZNewU0oL1goNVC9zXQp52uIsYpD5QPD/GbfCQCFL8DQI9GSJQM3jqsF+aSAZ5d/i+BE9XKQhbXntaN8L6XgDWgYMUunQJQm/huntpBF5KQ8S7GkhP/RRUcC99usZfsZINu7rewIKvG2clgVxxBWZHxVME60cukHZfyuhuzrNFD24On2YQaRmh0FWDjlDnTLCuvdKUZvYVc5w1bSvX2NI/tBfB4ocbS8oFVaI2CspMORnHoIrBSmUcY03MHd0xALni3oJ68CoZP2W22+8vYJzezr4vBbIJSVo4OO8VgrF0g5AdxHS4tq6nPaWqXExSlrQ8q+AgWEwjBr1cRCRqAsUnjHKoMY82qzdBqgI2mznZTnf8d+VIGjYcMoVmEuvvDZ1Jt9H1v3dkWBbMCXTimfwohi/C7Aem0SlHV6118qtMlTi6/oeYPBBOpsEKIKlD0nkaOQKoSmRjKmI3Y="
    );
    script.async = true;

    script.onload = () => {
      if (window.runConfetti) {
        window.runConfetti();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, rest.length));
  };

  return (
    <div className="min-h-screen bg-[#102935] text-white py-6 px-4 sm:px-8 relative overflow-hidden">
      <NormalShapes />

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
