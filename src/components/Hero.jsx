import React from "react";
import { AlertTriangle, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const Hero = () => {
  // Seamlessly targets your active Grievance Form Section ID
  const handleScrollToGrievance = (e) => {
    e.preventDefault();
    const element = document.getElementById("grievance-portal");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f5] via-[#fef6f1] to-[#fffde6] py-16 md:py-24 border-b border-orange-100/50">
      
      {/* Premium Ambient Soft Red & Yellow Glow Layers (Mild & Elite) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#c8102e]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#ffd60a]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Clean Elegant Technical Blueprint Grid Alignment Matrix */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          {/* Executive Regional Jurisdiction Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200/40 shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
            <p className="text-[11px] sm:text-xs font-black tracking-wider text-gray-500 uppercase">
              Karur West District — Eastern Part <span className="text-orange-300 mx-1">|</span> கரூர் மேற்கு மாவட்டம் — கிழக்கு பகுதி
            </p>
          </div>

          {/* Core Master Statement Segment */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              மக்களுக்காக மட்டுமே பணியாற்றும் <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] via-[#f05a28] to-[#fbc02d]">
                ஒரே அரசியல் பேரியக்கம்!
              </span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-400 uppercase tracking-widest max-w-3xl mx-auto">
              The Premier Political Movement Solely Dedicated to Serving the People
            </h2>
          </div>

          {/* Symmetrical Structural Divider Line */}
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#ffd60a] mx-auto rounded-full" />

          {/* Dynamic Dual-Language Mission Brief */}
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-base sm:text-lg leading-relaxed font-semibold text-gray-700">
              உங்கள் குறைகளை எங்களிடம் பகிர்ந்து கொள்ளுங்கள். பொதுமக்களின் பிரச்சினைகளுக்கு விரைவான தீர்வும், வெளிப்படையான நிர்வாகமும் வழங்குவதே நமது முதன்மை நோக்கம்.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed tracking-wide text-gray-400 italic font-medium max-w-2xl mx-auto">
              Voice your infrastructure concerns directly. Our administrative network ensures your regional grievances are heard, tracked, and systematically resolved.
            </p>
          </div>

          {/* Premium Executive Call-To-Action Button Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#grievance-portal"
              onClick={handleScrollToGrievance}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ffd60a] to-[#fbc02d] text-black font-black text-xs sm:text-sm tracking-wider uppercase rounded-full hover:shadow-xl hover:shadow-orange-500/10 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <AlertTriangle className="w-4 h-4 text-gray-900" /> குறைதீர்க்கும் படிவம் / Register Complaint
            </a>

            <a
              href="/vision"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-black text-xs sm:text-sm tracking-wider uppercase rounded-full border border-gray-200 shadow-sm transition-all duration-200"
            >
              கழகக் கொள்கைகள் / Our Vision <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          {/* High-Density Statistical Trust Matrix Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16 pt-8 border-t border-orange-200/30 text-left">
            
            <div className="bg-white/70 border border-orange-200/20 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100/50 flex items-center justify-center text-[#c8102e] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-gray-900 font-black text-base sm:text-lg leading-tight">100% தூய்மை</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider truncate">Absolute Transparency</p>
              </div>
            </div>

            <div className="bg-white/70 border border-orange-200/20 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100/50 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-gray-900 font-black text-base sm:text-lg leading-tight">24/7 மக்கள் சேவை</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider truncate">Continuous Public Service</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-white/70 border border-orange-200/20 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-[#f05a28] flex-shrink-0">
                <span className="text-xs font-black">2026</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-gray-900 font-black text-base sm:text-lg leading-tight">மாற்றத்தை நோக்கி</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider truncate">Targeted Growth Matrix</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;