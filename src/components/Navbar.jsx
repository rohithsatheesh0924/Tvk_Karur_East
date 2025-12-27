import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import tvkLogo from "../assets/Logo.jpeg"; // 🔹 add this import

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`w-full bg-white/95 backdrop-blur-md border-b border-yellow-200/50 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg shadow-red-100/50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo & Brand - Always Visible */}
          <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
            {/* 🔹 Replaced TVK circle with image, same size & alignment */}
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
              <img
                src={tvkLogo}
                alt="TVK Logo"
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>

            <NavLink to="/" className="flex flex-col min-w-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 leading-tight whitespace-nowrap">
                தமிழக வெற்றிக் கழகம்
              </h1>
              <p className="text-xs text-yellow-700 font-semibold tracking-wide whitespace-nowrap">
                TVK - Tamilaga Vettri Kazhagam
              </p>
            </NavLink>
          </div>

          {/* Desktop Navigation - SAME DESIGN */}
          <div className="hidden lg:flex items-center gap-10 lg:gap-12 text-base font-semibold text-gray-800 mx-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-red-600 bg-red-50 border-2 border-red-600 shadow-md font-black"
                    : "text-gray-800 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm"
                } whitespace-nowrap`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/vision"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-red-600 bg-red-50 border-2 border-red-600 shadow-md font-black"
                    : "text-gray-800 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm"
                } whitespace-nowrap`
              }
            >
              Vision
            </NavLink>
            <NavLink
              to="/agenda"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-red-600 bg-red-50 border-2 border-red-600 shadow-md font-black"
                    : "text-gray-800 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm"
                } whitespace-nowrap`
              }
            >
              Agenda
            </NavLink>
          </div>

          {/* Single CTA Button - VISIBLE ON TABLET+ ONLY */}
          <NavLink
            to="/join"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 hidden md:block"
          >
            Join TVK Now
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-red-50 to-yellow-50 border border-red-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 z-50 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-red-600 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown - BLACK TEXT FOR VISIBILITY */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-2xl border-t border-red-200/50 z-50 py-4 px-4 sm:px-6">
            <div className="flex flex-col gap-2 text-lg font-semibold text-black">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-4 px-6 rounded-xl transition-all duration-300 w-full text-left text-black hover:text-black font-semibold shadow-sm hover:shadow-md ${
                    isActive
                      ? "bg-red-100 border-2 border-red-600 shadow-lg font-black"
                      : "hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/vision"
                className={({ isActive }) =>
                  `block py-4 px-6 rounded-xl transition-all duration-300 w-full text-left text-black hover:text-black font-semibold shadow-sm hover:shadow-md ${
                    isActive
                      ? "bg-red-100 border-2 border-red-600 shadow-lg font-black"
                      : "hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vision
              </NavLink>
              <NavLink
                to="/agenda"
                className={({ isActive }) =>
                  `block py-4 px-6 rounded-xl transition-all duration-300 w-full text-left text-black hover:text-black font-semibold shadow-sm hover:shadow-md ${
                    isActive
                      ? "bg-red-100 border-2 border-red-600 shadow-lg font-black"
                      : "hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </NavLink>
              <NavLink
                to="/join"
                className={({ isActive }) =>
                  `block py-5 px-6 rounded-xl transition-all duration-300 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold shadow-xl hover:from-red-700 hover:to-red-600 hover:shadow-2xl hover:-translate-y-1 w-full text-center mt-3 ${
                    isActive ? "ring-4 ring-red-300/50" : ""
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join TVK Now
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
