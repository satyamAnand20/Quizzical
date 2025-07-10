import React, { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizName = "Your Quiz Results", ...rest } = location.state || {};

  const {
    correct = 0,
    incorrect = 0,
    unattempted = 0,
    timeSpent = 0, // seconds
    rank = 0,
    totalQuestions = 1, // avoid division by 0
    coins = 0,
  } = location.state || {};

  const score = correct * 4;
  const coinEarned = coins || score;
  const accuracy = Math.round((correct / totalQuestions) * 100);
  const avgTimePerQ = Math.round(timeSpent / totalQuestions);

  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://run.confettipage.com/here.js";
  script.setAttribute(
    "data-confetticode",
    "U2FsdGVkX19nFvHOMTuOp5IX3PTwlc4OOiie+L5mpghQDmNfQkJDEn78u2XQ0F1EQojhrPyogXb8VjNat3c4X/WjY19rxmjiKNlS372fxSfMT5ujRaJCEMwbYV4oZoX4L6A3HfypTPGtvE6E2MvGoDwkoKLrDHUf7rA+A335tlIq72edjx2XccmYSIkXXYsIZidktgOZqKTsgG4IHsDib7ZCvp9kP2Yy6QbIep5myIQqynXg+JAIjMlBNWVo1fm5ppxHSShh27Ex8fcHOpXTKvW+5YEQz+EOARMzHj2HAAbQemMMKSYiERmbhbjYA0fLwOBy+QnwmKMn3EjNFYWYwGtJikQicdQ7+12sX6dSEXjsP9mBvxJjgaIPZ/y6fdxy1u6qyh6svqlv7lPuHOh0iaG6neY2GaQ5JOi1kPFRpRUbXAHQGSbdkKNFUUXvELtbmyXjcZgZo2zjfeKV9hVVWGS+U9WAMWqEu6Zkg8nhi4kwGqWcyr8qUTZUZ1FRHfLc/lD31L8iqdvOY7iPMnnLCspSXykr1yEXkHIs64H4HO09GxHgIWWEFak8aCw833rfXOij1Inby1zrg9Iof6Mb9PYcFr9gFhj7Pe4e+2yEmDlbwqF2hYV1T2s/XhfU9xAmtDm3B6rNvgFL/qIInxex3vkn4VON42JLD8qtNeZO4aCF9n1Jxbqv8Oa1aBMhcgTJaKnF9citPRTBxNHlCVm4/CyX7Yt/s19WGt4zbDhNO+6tDYICw186NCh7lmVOT+RyG+RHvZoLMr7sVAJ1s52tPGsUpgMfYWodcPYLkP8YNzI="
  );
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);


  return (
    <div className="min-h-screen bg-[#102935] text-white flex flex-col items-center py-8 px-4 sm:px-0">
      {/* Quiz Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">{quizName}</h1>

      {/* Shared container for stats and buttons */}
      <div className="w-full max-w-4xl flex flex-col items-center space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 bg-[#1e3b4c] p-6 rounded-xl shadow-lg w-full">
          <Stat label="Coin Earned" value={coinEarned} icon="🪙" />
          <Stat label="Your Score" value={score} icon="🏆" />
          <Stat label="Correct" value={correct} icon="✅" />
          <Stat label="Incorrect" value={incorrect} icon="❌" />
          <Stat label="Accuracy" value={`${accuracy} %`} icon="🎯" />
          <Stat
            label="Time Spent"
            value={`${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s`}
            icon="⏱️"
          />
          <Stat label="Unattempted" value={unattempted} icon="➖" />
          <Stat label="Time/Ques" value={`${avgTimePerQ}s`} icon="📊" />
          <div className="col-span-2">
            <Stat label="Live Rank" value={`#${rank}`} icon="🥉" />
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-purple-700 px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800">
              Share Score
            </button>
            <button
              onClick={() => navigate("/review")}
              className="flex-1 bg-purple-700 px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800"
            >
              Review Questions
            </button>
          </div>
          <button
            onClick={() => navigate("/leaderboardPage")}
            className="w-full bg-purple-700 px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800"
          >
            Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, icon, fullWidth = false }) => (
  <div
    className={`flex items-center bg-[#123040] p-4 rounded-xl w-full ${
      fullWidth ? "col-span-2" : ""
    }`}
  >
    <div className="text-2xl mr-4">{icon}</div>
    <div>
      <div className="text-sm text-gray-300">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  </div>
);

export default ResultPage;
