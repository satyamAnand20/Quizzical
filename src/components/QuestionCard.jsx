import { motion } from "framer-motion";

const QuestionCard = ({
  keyProp,
  questionNumber,
  totalQuestions,
  questionData,
  quizImage,
  selectedOption,
  handleOptionClick,
  getButtonClass,
  showNext,
  handleNext,
  timer,
  reviewMode = false,
  correctOption = null,
}) => {
  return (
    <motion.div
      key={keyProp}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="bg-slate-800 p-4 rounded-lg max-w-2xl mx-auto relative"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="font-bold">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="ml-2 bg-slate-700 px-2 py-1 rounded text-sm">
            Single Select Question
          </span>
        </div>
        {!reviewMode && (
          <div className="relative w-12 h-12">
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#ccc"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#FF6C86"
                strokeWidth="4"
                strokeDasharray="125.6"
                strokeDashoffset={(1 - timer / 60) * 125.6}
                fill="none"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
              {timer}
            </div>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="w-[75%] h-52 overflow-hidden rounded-xl mx-auto mb-4 sm:h-56 md:h-60 sm:max-w-sm max-[849px]:w-[90%] max-[849px]:h-72">
        <img
          src={questionData.image}
          alt="quiz"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Question Text */}
      <p className="text-lg font-medium mb-4">{questionData.question}</p>

      {/* Options */}
      <div className="space-y-4">
        {questionData.options.map((opt, idx) => (
          <div key={idx} className="relative">
            <button
              onClick={(e) => {
                if (!reviewMode) handleOptionClick(idx, e);
              }}
              className={`font-semibold w-full px-6 py-4 rounded-lg text-left flex items-center gap-4 transition-all duration-300 ${getButtonClass(
                idx
              )}`}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold">
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
