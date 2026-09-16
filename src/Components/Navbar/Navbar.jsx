import { Clapperboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className="text-sm font-medium text-gray-300 transition hover:text-white"
      >
        Home
      </Link>

      <Link
        to="/movies"
        onClick={() => setIsMenuOpen(false)}
        className="text-sm font-medium text-gray-300 transition hover:text-white"
      >
        Movies
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <Clapperboard className="h-6 w-6 text-red-600" />
          <span>
            Movie<span className="text-red-600">Explorer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">{navLinks}</div>

        {/* Desktop Explore Button */}
        <Link
          to="/movies"
          className="hidden rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 md:block"
        >
          Explore Movies
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {/* Mobile Links */}
            {navLinks}

            {/* Mobile Button */}
            <Link
              to="/movies"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 w-full rounded-md bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Explore Movies
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
