import { Clapperboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "")}
      >
        <li className="hover:underline decoration-red-500">Home</li>
      </NavLink>

      <NavLink
        to={"/movies"}
        className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "")}
      >
        <li className="hover:underline decoration-red-500">Movies</li>
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl py-3 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xl md:text-[22px] font-bold text-white">
          <Clapperboard className="h-6 w-6 text-red-600"></Clapperboard>
          <span>
            Movie<span className="text-red-600">Explorer</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-4 text-white">
          {links}
        </ul>

        <div className="hidden md:block">
          <button className="bg-red-600 hover:bg-red-700 md:px-5 px-3 md:py-2.5 py-1 rounded-md text-white font-medium transition-all duration-300 hover:cursor-pointer">
            Explore Movies
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="rounded-md border border-white p-2 text-white"
          >
            {showMenu ? (
              <X className="h-5 w-5"></X>
            ) : (
              <Menu className="h-5 w-5"></Menu>
            )}
          </button>

          {showMenu && (
            <div className="absolute left-0 top-full w-full border-t border-b border-white/10 bg-black/90 px-6 py-6 shadow-xl backdrop-blur-md md:hidden">
              <div className="flex flex-col items-center gap-6">
                {/* Mobile Links */}
                <ul className="flex flex-col items-center gap-5 text-base text-white">
                  {links}
                </ul>

                {/* Explore Button */}
                <Link to={"/movies"}>
                  <button className="w-full max-w-xs rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30">
                    Explore Movies
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
