import React from "react";
import { useParams } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function QuizDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) {
    return <div className="text-center py-20 text-white">Quiz not found</div>;
  }

  return (
    <div className="bg-[#1a0826] min-h-screen text-white px-4 py-5 flex flex-col items-center">
      <div className="max-w-xl w-full flex flex-col items-center">
        {/* Consistent image container */}
        <div className="group w-[90%] max-w-md h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
          <img
            src={quiz.image}
            alt={quiz.title}
            className="w-full h-full object-cover object-top transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
          {quiz.title}
        </h1>

        <p className="text-center text-lg mb-4">
          Answer these simple questions correctly and earn coins
        </p>

        <div className="text-center space-y-2 mb-6">
          <div>
            <span className="font-semibold">Difficulty Level:</span>
            <span className="bg-[#ffd6c3] text-[#b14f03] font-bold ml-2 px-2 py-1 rounded">
              Medium
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <BsQuestionCircleFill className="text-lg text-yellow-300" />
            <span className="font-semibold">10 Questions</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <button
            className="bg-transparent border-2 border-white text-white font-semibold py-2 rounded-full hover:bg-white hover:text-purple-700 transition"
            onClick={() =>
              navigate("/countdown", { state: { quizId: quiz.id } })
            }
          >
            Play
          </button>
          <button className="bg-pink-500 text-white font-semibold py-2 rounded-full hover:bg-pink-600 transition">
            Play With Friends 🧑‍🤝‍🧑
          </button>
          <button className="bg-[#4a2980] text-white font-semibold py-2 rounded-full hover:bg-[#5e36a1] transition">
            Flashcards 📇
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
