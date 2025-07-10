import { Link } from "react-router-dom";

function QuizCard({ id, title, plays, image }) {
  return (
    <Link to={`/quiz/${id}`}>
      <div className="group w-64 sm:w-72 md:w-80 shrink-0 bg-white rounded-lg shadow hover:shadow-lg transition p-4 border border-gray-400">
        <div className="overflow-hidden rounded">
          <img
            src={image || "https://via.placeholder.com/300x180?text=Quiz+Image"}
            alt={title || "Quiz image"}
            className="w-full h-40 sm:h-44 md:h-48 object-cover rounded transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-3 font-semibold text-base sm:text-lg text-gray-800">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{plays} Plays</p>
      </div>
    </Link>
  );
}

export default QuizCard;
