import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { AnimatePresence, motion } from "framer-motion";
import QuestionCard from "../components/QuestionCard";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const questions = quiz?.questions || [];

  const coinRef = useRef();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [timer, setTimer] = useState(60);
  const [coinCount, setCoinCount] = useState(0);
  const [coins, setCoins] = useState([]);
  const [showTimeoutOverlay, setShowTimeoutOverlay] = useState(false);
  const [countdownToNext, setCountdownToNext] = useState(3);

  // ⏱️ Stats
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [unattemptedCount, setUnattemptedCount] = useState(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // ✅ new state

  if (!quiz || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        <h2 className="text-2xl font-bold">
          Quiz not found or no questions available.
        </h2>
      </div>
    );
  }

  useEffect(() => {
    if (timer === 0 && selectedOption === null) {
      const isLastQuestion = currentQuestion === questions.length - 1;

      setUnattemptedCount((prev) => prev + 1);
      setUserAnswers((prev) => [
        ...prev,
        {
          questionIndex: currentQuestion,
          selectedOptionIndex: null,
          isCorrect: false,
          timeTaken: 60,
        },
      ]);

      if (isLastQuestion) {
        // Directly submit quiz without countdown
        navigate("/result", {
          state: {
            correct: correctCount,
            incorrect: incorrectCount,
            unattempted: unattemptedCount + 1,
            totalQuestions: questions.length,
            timeSpent: totalTimeSpent + 60,
            coins: coinCount,
            rank: Math.floor(Math.random() * 500) + 1,
            quizName: quiz.title,
            quiz,
            userAnswers,
          },
        });
      } else {
        // Show timeout overlay with 3-second countdown
        setShowTimeoutOverlay(true);
        let countdown = 3;
        setCountdownToNext(countdown);

        const interval = setInterval(() => {
          countdown -= 1;
          setCountdownToNext(countdown);
          if (countdown === 0) {
            clearInterval(interval);
            setTimeout(() => {
              setShowTimeoutOverlay(false);
              handleNext();
            }, 1000);
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    }

    if (selectedOption !== null) {
      setShowNext(true);
      const timeout = setTimeout(() => handleNext(), 3000);
      return () => clearTimeout(timeout);
    }

    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer, selectedOption]);

  const handleOptionClick = (index, e) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correct = index === questions[currentQuestion].correctOptionIndex;
    setIsCorrect(correct);

    // ✅ Record user answer
    setUserAnswers((prev) => [
      ...prev,
      {
        questionIndex: currentQuestion,
        selectedOptionIndex: index,
        isCorrect: correct,
        timeTaken: 60 - timer,
      },
    ]);

    if (correct) {
      setCorrectCount((prev) => prev + 1);
      const optionRect = e.currentTarget.getBoundingClientRect();
      const coinRect = coinRef.current.getBoundingClientRect();

      const coinsToAnimate = Array.from({ length: 20 }).map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const spread = Math.random() * 80 + 40;
        const offsetX = Math.cos(angle) * spread;
        const offsetY = Math.sin(angle) * spread;

        return {
          id: Date.now() + i,
          x: optionRect.left + optionRect.width / 2,
          y: optionRect.top + optionRect.height / 2,
          dx: coinRect.left + coinRect.width / 2 + offsetX,
          dy: coinRect.top + coinRect.height / 2 + offsetY,
          delay: Math.random() * 0.3,
        };
      });

      setCoins((prev) => [...prev, ...coinsToAnimate]);

      setTimeout(() => {
        setCoinCount((prev) => prev + 4);
        setCoins([]);
      }, 1200);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setTotalTimeSpent((prev) => prev + (60 - timer));

    if (selectedOption === null) {
      setUnattemptedCount((prev) => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowNext(false);
      setTimer(60);
    } else {
      navigate("/result", {
        state: {
          correct: correctCount,
          incorrect: incorrectCount,
          unattempted: unattemptedCount + (selectedOption === null ? 1 : 0),
          totalQuestions: questions.length,
          timeSpent: totalTimeSpent + (60 - timer),
          coins: coinCount,
          rank: Math.floor(Math.random() * 500) + 1,
          quizName: quiz.title,
          quiz, // ✅ added
          userAnswers, // ✅ added
          fromQuiz: true,
        },
      });
    }
  };

  const getButtonClass = (index) => {
    if (selectedOption === null) return "bg-white text-black";
    const correctIndex = questions[currentQuestion].correctOptionIndex;

    if (index === selectedOption) {
      return index === correctIndex
        ? "bg-green-500 text-white"
        : "bg-red-500 text-white animate-shake";
    }

    return index === correctIndex
      ? "bg-green-500 text-white"
      : "bg-white text-black";
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 relative overflow-hidden">
      <style>
        {`
        .animated-coin {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle at 30% 30%, gold, goldenrod);
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(255, 215, 0, 0.8);
          z-index: 50;
          animation: fly 1s ease-in forwards;
        }
        @keyframes fly {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--dx), var(--dy)) scale(0.4); }
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          10% { transform: translateX(-10px); }
          20% { transform: translateX(10px); }
          30% { transform: translateX(-12px); }
          40% { transform: translateX(12px); }
          50% { transform: translateX(-8px); }
          60% { transform: translateX(8px); }
          70% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
          90% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97);
        }  
      `}
      </style>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-yellow-400 text-2xl sm:text-3xl font-bold truncate max-w-[200px] sm:max-w-none">
          {quiz.title}
        </h1>
        <div className="relative" ref={coinRef}>
          <div className="bg-white text-[#FF6C86] font-bold px-3 py-1 rounded-full shadow-sm text-xl">
            🪙 {coinCount}
          </div>
        </div>
      </div>

      {/* Coin Animation */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="animated-coin"
          style={{
            top: coin.y,
            left: coin.x,
            "--dx": `${coin.dx - coin.x}px`,
            "--dy": `${coin.dy - coin.y}px`,
            animationDelay: `${coin.delay}s`,
          }}
        ></div>
      ))}

      {/* Timeout Overlay */}
      {showTimeoutOverlay && (
        <div className="absolute inset-0 z-50 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center text-black">
          <h2 className="text-4xl font-bold mb-6 text-pink-600">TIME'S UP!</h2>
          <div className="relative w-20 h-20">
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#ccc"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#FF6C86"
                strokeWidth="8"
                strokeDasharray="226"
                strokeDashoffset={226 - (countdownToNext / 3) * 226}
                fill="none"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
              {countdownToNext}
            </div>
          </div>
        </div>
      )}

      {/* Question */}
      {/* <AnimatePresence mode="wait">
        <QuestionCard
          keyProp={currentQuestion}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          questionData={questions[currentQuestion]}
          quizImage={quiz.image}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
          getButtonClass={getButtonClass}
          showNext={showNext}
          handleNext={handleNext}
          timer={timer}
        />
      </AnimatePresence> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="will-change-transform"
          style={{
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          <QuestionCard
            keyProp={currentQuestion}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            questionData={questions[currentQuestion]}
            quizImage={quiz.image}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
            getButtonClass={getButtonClass}
            showNext={showNext}
            handleNext={handleNext}
            timer={timer}
          />
        </motion.div>
      </AnimatePresence>

      {showNext && (
        <div className="fixed bottom-2 inset-x-0 flex justify-center z-40">
          <button
            onClick={handleNext}
            className="w-full px-6 py-4 mt-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            {currentQuestion + 1 === questions.length
              ? "Submit Quiz"
              : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
