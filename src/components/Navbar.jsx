import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import vijay from "../assets/vijay.jpeg";

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
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0f0203]/95 backdrop-blur-md border-white/10 shadow-xl shadow-black/40 py-2.5 sm:py-3"
            : "bg-[#0f0203]/85 backdrop-blur-lg border-white/5 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-shrink-0">
            <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#c8102e] via-[#ffd60a] to-[#f05a28] shadow-lg flex-shrink-0 overflow-hidden">
              <img
                src={vijay}
                alt="TVK Logo"
                className="h-full w-full object-cover rounded-full bg-[#0f0203]"
                draggable="false"
              />
            </div>

            <NavLink to="/" className="flex flex-col min-w-0 justify-center">
              <h1 className="text-sm sm:text-base md:text-xl font-black tracking-wide text-white leading-tight whitespace-nowrap">
                தமிழக வெற்றிக் கழகம்
              </h1>
              {/* 🔹 Enhanced Mobile Responsive Text Alignment */}
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 font-bold tracking-wider uppercase leading-normal mt-0.5 whitespace-nowrap sm:whitespace-normal truncate sm:overflow-visible">
                கரூர் மேற்கு மாவட்டம் — கிழக்கு நகரம், வடக்கு பகுதி
              </p>
            </NavLink>
          </div>

          {/* Desktop Links (Classy Minimalist Style) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold tracking-wider uppercase">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-300 hover:text-white ${
                  isActive ? "text-[#ffd60a] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffd60a]" : "text-gray-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/vision"
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-300 hover:text-white ${
                  isActive ? "text-[#ffd60a] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffd60a]" : "text-gray-400"
                }`
              }
            >
              Vision
            </NavLink>
            <NavLink
              to="/agenda"
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-300 hover:text-white ${
                  isActive ? "text-[#ffd60a] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffd60a]" : "text-gray-400"
                }`
              }
            >
              Agenda
            </NavLink>
            <NavLink
              to="/complaint"
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-300 hover:text-white normal-case flex items-center gap-1 ${
                  isActive ? "text-[#ffd60a] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffd60a]" : "text-gray-400"
                }`
              }
            >
              <span className="font-black text-sm">புகார்</span>
              <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">/ Complaint</span>
            </NavLink>
          </div>

          {/* DESKTOP CTA LINK */}
          <a
            href="https://tvk.family/"
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-[#ffd60a] to-[#fbc02d] text-black text-xs font-black tracking-wider uppercase whitespace-nowrap flex-shrink-0"
          >
            Join TVK Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 shadow-md hover:bg-white/10 transition-all duration-200 z-50 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-4 h-4 text-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0f0203]/98 border-t border-white/10 shadow-2xl z-50 py-3 px-4 animate-fade-in">
            <div className="flex flex-col gap-1 text-xs font-bold tracking-wider uppercase text-left">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2.5 px-4 rounded-xl transition-all duration-200 ${
                    isActive ? "bg-white/10 text-[#ffd60a] font-black" : "text-gray-400 hover:bg-white/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/vision"
                className={({ isActive }) =>
                  `block py-2.5 px-4 rounded-xl transition-all duration-200 ${
                    isActive ? "bg-white/10 text-[#ffd60a] font-black" : "text-gray-400 hover:bg-white/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vision
              </NavLink>
              <NavLink
                to="/agenda"
                className={({ isActive }) =>
                  `block py-2.5 px-4 rounded-xl transition-all duration-200 ${
                    isActive ? "bg-white/10 text-[#ffd60a] font-black" : "text-gray-400 hover:bg-white/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </NavLink>
              <NavLink
                to="/complaint"
                className={({ isActive }) =>
                  `block py-2.5 px-4 rounded-xl transition-all duration-200 normal-case ${
                    isActive ? "bg-white/10 text-[#ffd60a]" : "text-gray-400 hover:bg-white/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-black text-sm">புகார்</span>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80"> / Complaint</span>
              </NavLink>
              
              <a
                href="https://tvk.family/"
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-3 px-4 rounded-xl bg-gradient-to-r from-[#ffd60a] to-[#fbc02d] text-black font-black text-center mt-3 transition-all uppercase tracking-wider shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join TVK Now
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Dynamic Mobile Offset Spacer */}
      <div className="h-[58px] sm:h-[73px]" />
    </>
  );
};

export default Navbar;