import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import QuizDetail from "./pages/QuizDetail";
import CountdownPage from "./pages/CountdownPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import ReviewPage from "./pages/Reviewpage";

import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
  const location = useLocation();

  const hideLayout = !!(
    matchPath("/countdown", location.pathname) ||
    matchPath("/play/:id", location.pathname)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <ScrollToTop />
      {!hideLayout && <Navbar />}

      <main className="flex-grow w-full max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<QuizDetail />} />
          <Route path="/countdown" element={<CountdownPage />} />
          <Route path="/play/:id" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/leaderboardPage" element={<LeaderboardPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route
            path="*"
            element={
              <div className="text-center text-xl">404 - Page Not Found</div>
            }
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
