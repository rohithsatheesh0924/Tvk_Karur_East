import React from "react";
import { Phone, Mail, MessageSquare, MapPin, ShieldCheck } from "lucide-react";
import tvkLogo from "../assets/Logo.jpeg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0203] text-gray-400 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Accent subtle background glow to match premium interface standards */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c8102e]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content High-Density Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5">
          
          {/* COLUMN 1: Brand Profile (Spans 4 Columns) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl p-[1px] bg-gradient-to-tr from-[#c8102e] to-[#f05a28] shadow-xl flex-shrink-0 overflow-hidden">
                <img
                  src={tvkLogo}
                  alt="TVK Logo"
                  className="h-full w-full object-cover rounded-xl bg-[#0a0203]"
                  draggable="false"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-black text-white tracking-wide leading-tight">
                  தமிழக வெற்றிக் கழகம்
                </h3>
                <p className="text-[10px] text-[#ffd60a] font-bold tracking-widest uppercase mt-0.5">
                  Tamilaga Vettri Kazhagam
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              மக்களுக்கான வெளிப்படையான, தூய்மையான மற்றும் நேர்மையான அரசியல் மாற்றத்தை நோக்கி கரூர் மேற்கு மாவட்டம் — கிழக்கு பகுதி என்றும் மக்கள் பணியில்.
            </p>
          </div>

          {/* COLUMN 2: Contact Desk (Spans 4 Columns) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-xs font-black text-white tracking-widest uppercase border-b border-[#c8102e] pb-1">
              தொடர்புகளுக்கு / Contact Desk
            </h4>
            <div className="w-full space-y-3 text-xs sm:text-sm flex flex-col items-center md:items-start">
              <a
                href="tel:+919344330970"
                className="group flex items-center gap-3 text-gray-400 hover:text-[#ffd60a] transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#c8102e]/10 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ffd60a]" />
                </div>
                <span className="font-semibold tracking-wide">+91 9344330970</span>
              </a>

              <a
                href="https://wa.me/919750565041"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-400" />
                </div>
                <span className="font-semibold tracking-wide">WhatsApp Support</span>
              </a>

              <a
                href="mailto:karurnortheast.tvk@gmail.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="font-semibold break-all">karurnortheast.tvk@gmail.com</span>
              </a>
            </div>
          </div>

          {/* COLUMN 3: Identity Card (Spans 4 Columns) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4 w-full">
            <h4 className="text-xs font-black text-white tracking-widest uppercase border-b border-[#c8102e] pb-1">
              வடிவமைப்பு & பராமரிப்பு / Administration Desk
            </h4>
            <div className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#f05a28]" />
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f05a28] mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-xs font-black text-gray-200">கரூர் மேற்கு மாவட்டம்</h5>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Eastern Part Regional Office</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed border-t border-white/5 pt-2 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                முழுமையாக அங்கீகரிக்கப்பட்டு பராமரிக்கப்படுகிறது.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Professional Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-gray-600 font-semibold tracking-wider uppercase">
            © {new Date().getFullYear()} TVK — Karur West District Eastern Part. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffd60a] animate-pulse" />
            <p className="text-[10px] sm:text-xs text-gray-400 font-black tracking-widest uppercase">
              Developed by <span className="text-white hover:text-[#ffd60a] transition-colors cursor-default">ROHITH</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;