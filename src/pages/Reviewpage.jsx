import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quiz, userAnswers } = location.state || {};

  if (!quiz || !userAnswers) {
    return <div className="text-center mt-20 text-white">Invalid data.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-yellow-400 hover:underline"
        >
          ← Back to Results
        </button>
        <h1 className="text-3xl font-bold text-yellow-400 mb-15">
          Review Question
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-18">
          {quiz.questions.map((question, index) => {
            const userAnswer = userAnswers.find(
              (ua) => ua.questionIndex === index
            );
            const selectedOption = userAnswer?.selectedOptionIndex ?? null;
            const correctOption = question.correctOptionIndex;
            const timeTaken = userAnswer?.timeTaken ?? 0;

            const getButtonClass = (idx) => {
              if (idx === correctOption) {
                return "bg-green-100 border-2 border-green-500 text-green-900";
              }
              if (idx === selectedOption && idx !== correctOption) {
                return "bg-red-100 border-2 border-red-500 text-red-900 line-through";
              }
              return "bg-slate-100 text-black";
            };

            return (
              <div key={question.id} className="relative">
                <div className="absolute -top-10 right-0 flex gap-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded font-semibold ${
                      selectedOption === correctOption
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {selectedOption === correctOption
                      ? "✔️ Correct"
                      : "❌ Incorrect"}
                  </span>
                  <span className="bg-slate-700 px-2 py-1 rounded">
                    ⏱ {timeTaken}s
                  </span>
                  <span className="bg-yellow-600 px-2 py-1 rounded">
                    🪙 {selectedOption === correctOption ? "4" : "0"}
                  </span>
                </div>

                <QuestionCard
                  keyProp={index}
                  questionNumber={index + 1}
                  totalQuestions={quiz.questions.length}
                  questionData={question}
                  quizImage={quiz.image}
                  selectedOption={selectedOption}
                  handleOptionClick={() => {}}
                  getButtonClass={getButtonClass}
                  showNext={false}
                  handleNext={() => {}}
                  timer={1}
                  reviewMode={true}
                  correctOption={correctOption}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
