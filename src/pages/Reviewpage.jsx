import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { IoMdArrowRoundBack } from "react-icons/io";

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
          className="mb-4 text-yellow-400 hover:underline flex gap-1"
        >
          <IoMdArrowRoundBack className="size-6" />
          Back to Results
        </button>
        <div className="flex flex-col space-y-20">
          <h1 className="text-3xl font-bold text-yellow-400">
            Review Question
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20">
            {quiz.questions.map((question, index) => {
              const userAnswer = userAnswers.find(
                (ua) => ua.questionIndex === index
              );
              const selectedOption = userAnswer?.selectedOptionIndex ?? null;
              const correctOption = question.correctOptionIndex;
              const timeTaken = userAnswer?.timeTaken ?? 0;

              const getButtonClass = (idx) => {
                if (idx === correctOption) {
                  return "bg-green-300 border-2 border-green-700 text-green-900";
                }
                if (idx === selectedOption && idx !== correctOption) {
                  return "bg-red-300 border-2 border-red-700 text-red-900 line-through";
                }
                return "bg-slate-100 text-black";
              };

              return (
                <div key={question.id} className="relative">
                  <div className="absolute -top-11 right-0 w-full md:w-auto flex flex-wrap justify-end gap-2 md:gap-3 text-base font-bold">
                    <span
                      className={`flex items-center gap-1 px-3 py-1.5 rounded text-white ${
                        selectedOption === correctOption
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      <span className="text-lg">
                        {selectedOption === correctOption ? "✔️" : "❌"}
                      </span>
                      {selectedOption === correctOption
                        ? "Correct"
                        : "Incorrect"}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-700 px-3 py-1.5 rounded text-white">
                      <span className="text-lg">⏱</span> {timeTaken}s
                    </span>
                    <span className="flex items-center gap-1 bg-yellow-600 px-3 py-1.5 rounded text-white">
                      <span className="text-lg">🪙</span>{" "}
                      {selectedOption === correctOption ? "4" : "0"}
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
    </div>
  );
};

export default ReviewPage;
