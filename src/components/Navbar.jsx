import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./basic/PrimaryButton";
import { trackButtonClick } from "../lib/analytics";
import logoImg1 from "../assets/images/logo-ca.jpg";
import logoImg2 from "../assets/images/logo-global.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex gap-1">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logoImg1}
                alt="OceanStar Logo"
                className="h-auto w-auto sm:h-10 md:h-16 object-contain transition-all duration-200"
              />
            </Link>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logoImg2}
                alt="OceanStar Logo"
                className="h-auto w-auto sm:h-10 md:h-16 object-contain transition-all duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { to: "/", text: "Home" },
              { to: "/about", text: "About" },
              { to: "/products", text: "Products" },
              { to: "/services", text: "Services" },
              { to: "/blog", text: "Blog" },
            ].map((item) => (
              <Link
                key={item.text}
                to={item.to}
                onClick={() => trackButtonClick(`Nav - ${item.text}`, "Header")}
                className="group relative px-4 py-2"
              >
                <div className="nav-text-wrap relative">
                  <div className="text-gray-600 transform transition-transform group-hover:-translate-y-full">
                    {item.text}
                  </div>
                  <div className="text-gray-900 absolute top-0 left-0 transform translate-y-full transition-transform group-hover:translate-y-0">
                    {item.text}
                  </div>
                </div>
              </Link>
            ))}

            <PrimaryButton to="/contact" text="Contact Us Now" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h12M4 18h8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t border-gray-200`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {[
            { to: "/", text: "Home" },
            { to: "/about", text: "About" },
            { to: "/products", text: "Products" },
            { to: "/services", text: "Services" },
            { to: "/blog", text: "Blog" },
          ].map((item) => (
            <Link
              key={item.text}
              to={item.to}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Contact Us Now</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
