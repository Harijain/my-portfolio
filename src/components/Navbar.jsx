import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Hariyantha C</h1>
        <ul className="flex space-x-6">
          {["home", "about", "education", "career-goals"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
