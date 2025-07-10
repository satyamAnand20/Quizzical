import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="w-full bg-purple-800 shadow-md py-4 px-4 sm:px-8 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-bold tracking-wide text-yellow-400"
        >
          QUIZZICAL
        </Link>

        {/* Navigation Links + Burger */}
        <div className="flex items-center gap-6 text-white text-lg font-bold">
          {/* These links are hidden on screens <= 725px (md:hidden) */}
          <div className="hidden md:flex gap-12 items-center">
            <span className="cursor-pointer hover:underline">Home</span>
            <span className="cursor-pointer hover:underline">Discover</span>
            <span className="cursor-pointer hover:underline">AI</span>
            <div className="bg-white text-[#FF6C86] font-bold px-3 py-1 rounded-full shadow-sm text-sm">
              🪙 12
            </div>
          </div>

          {/* Burger Menu only on small screens (≤ 725px) */}
          <GiHamburgerMenu className="md:hidden text-3xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
