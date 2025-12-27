import React from "react";
import tvkLogo from "../assets/Logo.jpeg"; // 🔹 add this import

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Compact Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          
          {/* TVK Logo - Compact */}
          <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
              {/* 🔹 Replaced TVK text box with image, same size & style */}
              <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg ring-2 ring-white/40 overflow-hidden">
                <img
                  src={tvkLogo}
                  alt="TVK Logo"
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent leading-tight truncate">
                  தமிழக வெற்றிக் கழகம்
                </h3>
                <p className="text-xs sm:text-sm text-yellow-200 font-semibold tracking-wide hidden sm:block">
                  TVK
                </p>
              </div>
            </div>
          </div>

          {/* Contact - Clean List (NO BOXES) */}
          <div className="text-center lg:text-left order-3 lg:order-2 space-y-1.5 sm:space-y-2">
            <h4 className="text-sm sm:text-base lg:text-lg font-black text-yellow-300 mb-2 lg:mb-3 tracking-wide uppercase">
              தொடர்புக்கு
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <a
                href="tel:+919344330970"
                className="group flex items-center gap-2.5 p-1 hover:p-2 transition-all duration-300 hover:text-yellow-50"
              >
                <span className="text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  📞
                </span>
                <span className="font-medium hover:underline">
                  +91 9344330970
                </span>
              </a>
              <a
                href="mailto:karurnorthwest.tvk@gmail.com"
                className="group flex items-center gap-2.5 p-1 hover:p-2 transition-all duration-300 hover:text-yellow-50"
              >
                <span className="text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  ✉️
                </span>
                <span className="font-medium break-words hover:underline">
                  karurnorthwest.tvk@gmail.com
                </span>
              </a>
              <a
                href="https://wa.me/919750565041"
                className="group flex items-center gap-2.5 p-1 hover:p-2 transition-all duration-300 hover:text-emerald-50"
              >
                <span className="text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  💬
                </span>
                <span className="font-medium hover:underline">
                  WhatsApp: +91 9750565041
                </span>
              </a>
            </div>
          </div>

          {/* Credits - Highlighted */}
          <div className="text-center lg:text-left order-2 lg:order-3">
            <h4 className="text-sm sm:text-base lg:text-lg font-black text-yellow-300 mb-3 lg:mb-4 tracking-wide uppercase">
              கடன்
            </h4>
            <div className="bg-gradient-to-br from-yellow-500/15 to-yellow-600/15 backdrop-blur-sm border border-yellow-400/50 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400">
              <p className="text-xs sm:text-sm text-yellow-50 font-semibold leading-tight">
                <span className="block text-yellow-200 mb-1">🌐</span>
                <strong>கரூர் மேற்கு மாவட்ட கிழக்கு பகுதி</strong>
                <br />
                <span className="text-yellow-100 font-bold text-sm block mt-1">
                  முழுமையாக வளர்க்கப்பட்டு
                  <br />
                  பராமரிக்கப்படுகிறது
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Compact Copyright */}
        <div className="border-t border-red-500/30 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-yellow-100/90 font-medium tracking-wide">
            © {new Date().getFullYear()} TVK - Karur West District Eastern Part{" "}
            <span className="hidden sm:inline">| </span>
            <span className="text-yellow-200 font-semibold block sm:inline-block sm:ml-2">
              Developed by ROHITH
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
