import React from "react";
import { Award, Star, ShieldCheck } from "lucide-react";

// Leadership Image Assets Mapping
const presidentImg = "./vijay.jpeg";      
const genSecretaryImg = "./Bussy.jpg"; 
const mlaImg = "./kishore.png";  // 🔹 Town Secretary / MLA Image  
const westDistrictSecImg = "./Mathi.jpg";    // 🔹 District Head / Secretary Image

const CardsSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fff5f5] via-[#fef6f1] to-[#fffde6] py-20 md:py-28 border-t border-b border-orange-100/60 overflow-hidden">
      {/* Structural Technical Grid Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#c8102e]/5 to-[#f05a28]/5 border border-orange-200/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8102e]">
              கழகத் தலைமை வழிகாட்டிகள் / Movement Leadership
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            கழகத்தின் வழிகாட்டும் சக்திகள்
          </h3>
          <p className="text-sm md:text-base text-gray-500 font-semibold tracking-widest uppercase mt-3">
            Tamilaga Vettri Kazhagam Apex Command Center
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#ffd60a] mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= TIER 1: PARTY PRESIDENT (MAX SIZE) ================= */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-orange-200/30 relative overflow-hidden shadow-sm mb-16">
          <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#c8102e] via-[#f05a28] to-[#ffd60a]" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image Column */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="w-full aspect-[4/5] max-w-[280px] md:max-w-none rounded-2xl overflow-hidden p-1.5 bg-gradient-to-tr from-[#c8102e] to-[#ffd60a] border border-orange-100 shadow-md">
                <img
                  src={presidentImg}
                  alt="Thalapathy Vijay"
                  className="w-full h-full object-cover rounded-xl bg-gray-50"
                  draggable="false"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=TVK+President+Vijay"; }}
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="md:col-span-7 lg:col-span-8 text-center md:text-left space-y-4">
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-white bg-[#c8102e] px-3 py-1 rounded-md mb-3 shadow-sm">
                  <Star className="w-3 h-3 fill-current text-[#ffd60a]" /> கழகத் தலைவர் / Party President
                </span>
                <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">தளபதி விஜய்</h4>
                <p className="text-xs text-gray-400 font-black tracking-widest uppercase mt-0.5">Thalapathy Vijay — Future of Tamil Nadu 2026</p>
              </div>
              
              <div className="bg-gradient-to-r from-[#fffbf9] to-[#fef6f1] p-5 rounded-2xl border border-orange-100/50 text-left space-y-3">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-bold">
                  "மக்களுக்காக மட்டுமே பணியாற்றும் உன்னதப் பாதை!" 2026 சட்டமன்றத் தேர்தலில் தமிழக மக்கள் எதிர்பார்க்கும் அரசியல் மாற்றத்தை உள்கட்டமைப்புத் தூய்மையுடன் கொண்டுவரத் தலைமை தாங்குகிறார்.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed italic border-t border-orange-100/40 pt-2 font-medium">
                  Spearheading a milestone socio-political transformation for Tamil Nadu. Empowering citizens through institutional accountability and progressive public administration loops.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TIER 2: GENERAL SECRETARY (COMPACT DESIGN) ================= */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl p-5 md:p-6 border border-orange-200/20 shadow-sm text-center">
            <div className="space-y-4">
              <div className="w-36 aspect-[4/5] mx-auto rounded-xl overflow-hidden p-1 bg-gradient-to-tr from-amber-100 to-red-100 border border-orange-100/60 shadow-inner">
                <img
                  src={genSecretaryImg}
                  alt="Bussy N. Anand"
                  className="w-full h-full object-cover rounded-lg bg-gray-50"
                  draggable="false"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=Bussy+Anand"; }}
                />
              </div>

              <div>
                <span className="inline-block text-[9px] font-black uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full mb-2">
                  தலைமைப் பொதுச் செயலாளர் / General Secretary
                </span>
                <h5 className="text-xl font-black text-gray-900 tracking-tight">புஸ்ஸி N. ஆனந்த்</h5>
                <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">Bussy N. Anand — Executive Management</p>
              </div>

              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed font-semibold px-4">
                கழகத்தின் உள்கட்டமைப்பை மாநிலம் முழுவதும் முறைப்படுத்தி, தலைவர் அவர்களின் மக்கள் நலத் திட்டங்களை அடிமட்டக் குடிமக்களிடம் கொண்டு சேர்க்கும் முதன்மைப் பொறுப்பாளர்.
              </p>
            </div>
          </div>
        </div>

        {/* ================= TIER 3: DISTRICT HEAD / SECRETARY (BIG MAX SIZE) ================= */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-orange-200/30 relative overflow-hidden shadow-sm mb-16">
          <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#c8102e] to-[#f05a28]" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image Column - Promoted to Big Sizing Dimensions */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="w-full aspect-[4/5] max-w-[280px] md:max-w-none rounded-2xl overflow-hidden p-1.5 bg-gradient-to-tr from-[#c8102e] to-[#f05a28] border border-orange-100 shadow-md">
                <img
                  src={westDistrictSecImg}
                  alt="District Secretary"
                  className="w-full h-full object-cover rounded-xl bg-gray-50"
                  draggable="false"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=District+Secretary"; }}
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="md:col-span-7 lg:col-span-8 text-center md:text-left space-y-4">
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-white bg-[#c8102e] px-2.5 py-1 rounded-md mb-3 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffd60a]" /> மாவட்டச் செயலாளர் / District Head
                </span>
                <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">V.P. மதியழகன்</h4>
                <p className="text-xs text-gray-400 font-black tracking-widest uppercase mt-0.5">V.P. Mathialagan — Karur West District Secretary</p>
              </div>
              
              <div className="bg-gradient-to-r from-[#fffbf9] to-[#fef6f1] p-5 rounded-2xl border border-orange-100/50 text-left space-y-3">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-bold">
                  கரூர் மேற்கு மாவட்ட மக்களின் உரிமைகளை மீட்டெடுக்கவும், முறையான உள்கட்டமைப்பு மற்றும் வெளிப்படையான மக்கள் சேவை வழங்கிட முன்னின்று செயல்படுகிறார்.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed italic border-t border-orange-100/40 pt-2 font-medium">
                  Leading the movement forward to ensure transparent governance and swift grievance redressal for every citizen across the region.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TIER 4: TOWN SECRETARY (COMPACT DESIGN) ================= */}
<div className="flex justify-center">
  <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl p-5 md:p-6 border border-orange-200/20 shadow-sm text-center">
    <div className="space-y-4">
      {/* Profile Canvas - Downsized to match the exact dimensions of Tier 2 */}
      <div className="w-36 aspect-[4/5] mx-auto rounded-xl overflow-hidden p-1 bg-gradient-to-tr from-amber-100 to-red-100 border border-orange-100/60 shadow-inner">
        <img
          src={mlaImg} // 🔹 உங்களின் கிஷோர் ராமலிங்கம் புகைப்பட வேரியபிளை இங்கே மாற்றிக்கொள்ளலாம் (e.g., secretaryImg)
          alt="Town Secretary Kishore Ramalingam"
          className="w-full h-full object-cover rounded-lg bg-gray-50"
          draggable="false"
          onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=TVK+Town+Secretary"; }}
        />
      </div>

      <div>
        <span className="inline-block text-[9px] font-black uppercase tracking-widest text-black bg-[#ffd60a] border border-yellow-300 px-2.5 py-0.5 rounded-full mb-2 shadow-sm">
          <Award className="w-3 h-3 inline mr-1 text-black" /> நகரச் செயலாளர் / Town Secretary
        </span>
        <h5 className="text-xl font-black text-gray-900 tracking-tight">கிஷோர் ராமலிங்கம்</h5>
        <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">Karur West District — Eastern Town Secretary</p>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed font-semibold px-4">
        கிழக்கு நகரப் பகுதி மக்களின் அடிப்படைத் தேவைகளான குடிநீர், சாலை வசதிகள் மற்றும் உள்கட்டமைப்புப் பிரச்சினைகளைத் தீர்க்கவும், பொதுமக்களுக்கு எளிதில் அணுகக்கூடிய தூய்மையான மக்கள் சேவையை வழங்கிடவும் முன்னின்று செயல்படுகிறார்.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default CardsSection;