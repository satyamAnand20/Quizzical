import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NormalShapes from "../components/NormalShapes";

function CountdownPage() {
  const [phase, setPhase] = useState("ready");
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  const selectedQuizId = location.state?.quizId || 1;

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setPhase("countdown"), 1000));
    timers.push(setTimeout(() => setCount(2), 2000));
    timers.push(setTimeout(() => setCount(1), 3000));
    timers.push(setTimeout(() => setPhase("go"), 4000));
    timers.push(
      setTimeout(() => {
        navigate(`/play/${selectedQuizId}`);
      }, 5000)
    );

    return () => timers.forEach(clearTimeout);
  }, [navigate, selectedQuizId]);

  return (
    <div className="relative min-h-screen bg-[#133239] flex items-center justify-center text-white text-center px-4">
      <NormalShapes />
      <style>
        {`
          @keyframes zoomFadeIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-zoomFade {
            animation: zoomFadeIn 0.8s ease-out forwards;
          }
        `}
      </style>

      <div>
        {phase === "ready" && (
          <h1 className="text-5xl sm:text-6xl font-bold animate-zoomFade">
            READY
          </h1>
        )}

        {phase === "countdown" && (
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Quiz Starts in
            </h2>
            <div className="text-5xl sm:text-6xl font-bold text-green-400">
              {count}
            </div>
          </>
        )}

        {phase === "go" && (
          <h1 className="text-6xl sm:text-7xl font-extrabold text-green-400 animate-zoomFade">
            GO!
          </h1>
        )}
      </div>
    </div>
  );
}

export default CountdownPage;
