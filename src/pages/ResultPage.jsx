import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NormalShapes from "../components/NormalShapes";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    quizName = "Your Quiz Results",
    quiz,
    userAnswers,
    correct = 0,
    incorrect = 0,
    unattempted = 0,
    timeSpent = 0,
    rank = 0,
    totalQuestions = 1,
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
      "U2FsdGVkX1/XTyqt2F6b+lrCaoF4pge1lRHJipBFgu6epPWI147wkqg0JEcjrjTxvXh2BMASSlD+j18pGT88aV0Z76+jhXBhrSVn3pXIUJg1kXg+upzuEZ+4vtFyVKn/9puIgeowdX8I733tm8BrJxRj6PAJw8c3fEsSSFHGbEgIEcgT/ihfcu71pU1em7fYyHg4//batFjHcgd6432IY/niAiaU6Gsfq4UDmYl34M3Ud3RUDoobHH7joe1aeFNNCGz9Fe8VrDrLjAmRtzWNB9a0H5WSStFWzbgXp/oYNnfjv0EC05g1lQtttF9k/VEXswfb8QdVbHyq3mOBeem0ai9IlEOvmrVwXkRvCndWgYsw3XSta1q7qESaZACtDZD8qr6H7vE1saHgE8MYGynFXldhV7we6IVsY3xY7jpyicrmlIIoisivYG4J6zPJfzy44uFwbSb1hKygx7N59EcY/53PThfoP+bmayEmBBGo5guU+B3OJJXZM7OtsDX8wLVwRY9ctN8JvakYe2rq6EwjUJYbkFxQeWhYnEMIX1Je4myqXWpO/MvlRKPC2Q1S3dqsirFaJQhLo59wu908ecDhTpAuNj4exrpVKiXGHsqiU6iDGyZDxYrB6Ix39mA9RgZiHPX0clOdeyE3ljKB5MSh0EgCCjL5pWH4Jfnzgn/VWqFtdVolMELEYd2Q+93H8nQ/u3gnssAnIaJ+MHkV3gAG3ykNRx3M2/uU22ChglpXLPjaukapZVOSosoP5i50tELSmQTw5EtNNs4YoyTyRciRJve9dQXAQgTrc8BZSApxNiM="
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

  const handleReviewClick = () => {
    if (!quiz || !userAnswers) {
      alert("Cannot load review. Missing quiz data.");
      return;
    }

    navigate("/review", {
      state: { quiz, userAnswers },
    });
  };

  return (
    <div className="relative min-h-screen bg-[#102935] text-white flex flex-col items-center py-8 px-4 sm:px-0">
      <NormalShapes />
      {/* Quiz Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">{quizName}</h1>

      <div className="w-full max-w-4xl flex flex-col items-center space-y-8 z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 bg-[#1e3b4c] p-4 rounded-xl shadow-lg w-full z-10">
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
        <div className="w-full space-y-4 z-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-[#501578] px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800 flex items-center justify-between text-left border border-gray-400">
              <span>Share Score</span>
              <IoShareSocialOutline  className="text-2xl" />
            </button>
            <button
              onClick={handleReviewClick}
              className="flex-1 bg-[#501578] px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800 flex items-center justify-between text-left border border-gray-400"
            >
              <span>Review Questions</span>
              <GoArrowRight className="text-2xl" />
            </button>
          </div>

          <button
            onClick={() => navigate("/leaderboardPage")}
            className="w-full bg-[#501578] px-6 py-5 rounded-lg font-semibold shadow-md hover:bg-purple-800 flex items-center justify-between text-left border border-gray-400"
          >
            <span>Leaderboard</span>
            <BsArrowRightCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, icon, fullWidth = false }) => (
  <div
    className={`flex items-center bg-[#123040] p-4 max-[389px]:p-2 rounded-xl w-full ${
      fullWidth ? "col-span-2" : ""
    }`}
  >
    <div className="text-2xl mr-4 max-[378px]:mr-1.5">{icon}</div>
    <div>
      <div className="text-sm font-semibold text-gray-300">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  </div>
);

export default ResultPage;
