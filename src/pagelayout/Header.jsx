import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // you can use lucide-react or heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto h-[60px] px-10 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-blue-700">MovieFlix</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {["/", "about", "movies", "contact"].map((path, index) => {
            const name =
              path === "/"
                ? "Home"
                : path.charAt(0).toUpperCase() + path.slice(1);
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `hover:text-blue-700 ${
                    isActive ? "text-blue-800 font-medium" : "text-gray-800"
                  }`
                }
              >
                {name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-4">
            {["/", "about", "movies", "contact"].map((path, index) => {
              const name =
                path === "/"
                  ? "Home"
                  : path.charAt(0).toUpperCase() + path.slice(1);
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-blue-700 ${
                        isActive ? "text-blue-800 font-medium" : "text-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
