import { Clapperboard } from "lucide-react";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Footer Top */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Clapperboard className="h-6 w-6 text-red-600" />

            <span>
              Movie<span className="text-red-600">Explorer</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <Link to="/movies" className="transition hover:text-white">
              Movies
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="rounded-full border border-white/10 p-2.5 text-gray-400 transition duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-2.5 text-gray-400 transition duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-2.5 text-gray-400 transition duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © 2026 <span className="text-gray-300">MovieExplorer</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
