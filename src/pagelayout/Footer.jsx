import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-lg font-semibold mb-4 md:mb-0">MovieFlix © 2025</p>

        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
        </ul>

        <p className="text-sm">Data powered by OMDb API</p>
      </div>
    </footer>
  );
};

export default Footer;
