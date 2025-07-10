import React, { useState ,useEffect } from "react";

const dummyUsers = Array.from({ length: 25 }, (_, i) => ({
  name: `Player ${i + 1}`,
  coins: Math.floor(Math.random() * 100),
  avatar: `https://i.pravatar.cc/150?img=${(i % 10) + 1}`,
})).sort((a, b) => b.coins - a.coins);

const LeaderboardPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://run.confettipage.com/here.js";
    script.setAttribute(
      "data-confetticode",
      "U2FsdGVkX1/sYKFg/dwe6HiXywN3UZzDDE8fvGScCU+roAvMvBkjX6fVJW6uP1SyaG9YWk2wKvSALm24XSFwWgsSZYsDhHeBiqTd5ERhoPMgSVE/Seqe767RouJpmNmw5E+EEtnXmvIj0UlCGHPI8NPKGK2DHSsApxWMqzzFCJovlpo1q9vz/muJSgLxA/+92DllJfxppmLQm7S5IIyLhtJZIqv0gMgpwUHke1RVHG/uV/PxUpr3YCB8ZRD8neO7WUeklqzzZj/v6lJwTrJZ6iB1RNMWG5atfoqzjsOBNeqfHHp9sgr7yoev4TwxxGqezNnt2LqONbHrZG8mhFT0JuSCGt2o3WhDAOoKbQJFid/QW3Pjn6r/WwdyuhVrSBpG5S/TzbnqLHwnh99wnNOFX33SmdYsadSKi7LCvcO677LEiNcH7ahZtbO9zUr9D4zCRzECKhLOucstuC+GnKpcVT04aCT4gWrRUQnOn+W1GgYiz5UpOY8V5wF4Yr8WvXmTPf1x6RJdz/h36Ck6kjTyKr51xyw12aex9z3kWtj4zV1/vDADbzMzTE/qYCtrE0YSGFF9suvSTMSrv/L8XOYsrFDRheIjGPeTLNDO4AR3YZvrfUp6kUAZlHckSu0eOeJUrrCDhBstn9Kqq9TpOOVVqzOXWmO9NGZX+rw1giUwEVFouSx+X8db6Lix6wmKq68GILcMGe9FMFIy15vot3uMq2ApmkpfMyBn+/MPa05SfVJthOY+di6KbJo1ARZIaGsp6zW4sSyA4GO/c+x/tvih3Qz0A7vQJj5RpX8evfOl60Y="
    );
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const topThree = dummyUsers.slice(0, 3);
  const rest = dummyUsers.slice(3);

  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, rest.length));
  };

  return (
    <div className="min-h-screen bg-[#102935] text-white py-6 px-4 sm:px-8">
      <h1 className="text-5xl font-bold text-center mb-15 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
        Leaderboard
      </h1>

      {/* Podium */}
      <div className="flex justify-center items-end gap-8 mb-20">
        <PodiumItem user={topThree[1]} rank={2} podiumHeight="h-36" />
        <PodiumItem user={topThree[0]} rank={1} podiumHeight="h-52" />
        <PodiumItem user={topThree[2]} rank={3} podiumHeight="h-28" />
      </div>

      {/* List from rank 4 onward */}
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
  );
};

const PodiumItem = ({ user, rank, podiumHeight }) => {
  const rankLabels = {
    1: { label: "1st Place", bg: "bg-yellow-400", emoji: "👑" },
    2: { label: "2nd Place", bg: "bg-gray-400", emoji: "🥈" },
    3: { label: "3rd Place", bg: "bg-orange-500", emoji: "🥉" },
  };

  return (
    <div className="flex flex-col items-center justify-end">
      <div className="relative mb-3">
        <div className="absolute -top-10 w-full text-center">
          <span
            className={`px-4 py-1 rounded-full text-sm font-bold ${rankLabels[rank].bg}`}
          >
            {rankLabels[rank].label} {rankLabels[rank].emoji}
          </span>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className={`w-32 ${podiumHeight} bg-[#1e3b4c] rounded-t-md flex flex-col items-center justify-center`}
      >
        <div className="font-semibold text-lg mt-2">{user.name}</div>
        <div className="text-sm text-yellow-300">{user.coins} 🪙</div>
      </div>
    </div>
  );
};

const LeaderboardRow = ({ rank, user }) => (
  <div className="w-full bg-[#1e3b4c] rounded-lg p-4 flex items-center justify-between text-lg">
    <div className="flex items-center gap-4">
      <span className="font-bold text-yellow-400 w-6 text-center">{rank}</span>
      <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
      <span className="font-medium text-white w-60 truncate">{user.name}</span>
    </div>
    <div className="text-yellow-300 font-semibold">{user.coins} 🪙</div>
  </div>
);

export default LeaderboardPage;
