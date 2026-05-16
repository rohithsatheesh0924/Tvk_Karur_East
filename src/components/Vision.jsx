import React from "react";

const Vision = () => {
  const corePrinciples = [
    {
      icon: "⚖️",
      titleTa: "சமூக நீதி",
      titleEn: "Social Justice",
      descTa: "அம்பேத்கர், பெரியார் சிந்தனைகளின் அடிப்படையில் விகிதாச்சார இட ஒதுக்கீடு. சாதி, மதம், பாலின பேதமின்றி அனைவருக்கும் சம வாய்ப்பு.",
      descEn: "Proportional reservation based on the ideals of Ambedkar and Periyar. Equal opportunities for all regardless of caste, creed, or gender.",
      accent: "border-red-100"
    },
    {
      icon: "🕌",
      titleTa: "சமயச்சார்பின்மை",
      titleEn: "Secularism",
      descTa: "அனைத்து மதங்களையும் மதித்தல். மத வெறி மற்றும் பிரிவினைவாத சக்திகளுக்கு எதிரான சமரசமற்ற நிலைப்பாடு. ஜனநாயக உரிமைகள் பாதுகாப்பு.",
      descEn: "Respecting all faiths equally. An uncompromising stance against communalism and divisive forces while fiercely safeguarding democratic rights.",
      accent: "border-orange-100"
    },
    {
      icon: "📚",
      titleTa: "மொழிக் கொள்கை & கல்வி",
      titleEn: "Language Policy & Education",
      descTa: "இரு மொழிக் கொள்கை (தமிழ் + ஆங்கிலம்). தமிழ் மொழி பாதுகாப்புடன் உலகமயமாக்கல் வாய்ப்புகள். நீட் தேர்வு ரத்து மற்றும் இலவச கல்வி.",
      descEn: "Two-language policy (Tamil + English) balancing cultural heritage preservation with global opportunities. Anti-NEET stance and free quality education.",
      accent: "border-amber-100"
    }
  ];

  const corePillars = [
    { ta: "விகிதாச்சார இட ஒதுக்கீடு", en: "Proportional Reservation" },
    { ta: "இரு மொழிக் கொள்கை (தமிழ் + ஆங்கிலம்)", en: "Two-Language Policy (Tamil + English)" },
    { ta: "போதை இல்லா தமிழ்நாடு", en: "Drug-Free Tamil Nadu" },
    { ta: "மாநில தன்னாட்சி", en: "State Autonomy & Rights" },
    { ta: "இளையோர் ஆற்றல் & வேலைவாய்ப்பு", en: "Youth Empowerment & Employment" }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fefbf9] via-[#fef6f1] to-[#fcf0e7] py-20 md:py-28 border-t border-b border-orange-100/60 overflow-hidden">
      {/* Structural Blueprint Grid Background for Elite Aesthetic */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER: Ideology & Doctrine */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#c8102e]/5 to-[#f05a28]/5 border border-orange-200/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8102e]">
              தவெகக் கொள்கை & விளக்கம் / TVK Ideology & Doctrine
            </span>
          </div>
          
          {/* Proclaimers Badge */}
          <div className="block mt-2 mb-6 text-xs sm:text-sm font-black uppercase text-gray-500 tracking-wider">
            சமூக நீதி <span className="text-orange-300 mx-1">|</span> சமயச்சார்பின்மை <span className="text-orange-300 mx-1">|</span> சமத்துவம்
            <span className="block md:inline md:ml-2 text-gray-400 font-medium tracking-normal lowercase">
              (Social Justice • Secularism • Equality)
            </span>
          </div>

          {/* Central Ideology Quote */}
          <div className="max-w-3xl mx-auto mt-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-2">
              "பிறப்பொக்கும் எல்லா உயிர்க்கும்"
            </h2>
            <h4 className="text-sm sm:text-base text-gray-400 font-bold tracking-wider uppercase italic">
              "All living beings are equal by birth"
            </h4>
            <p className="text-xs sm:text-sm text-[#c8102e] font-black tracking-widest uppercase mt-3">
              — திருக்குறள் / The Thirukkural
            </p>
          </div>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28] mx-auto mt-8 rounded-full" />
        </div>

        {/* THREE CORE PRINCIPLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {corePrinciples.map((principle, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 border ${principle.accent} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group relative`}
            >
              <div>
                {/* Minimalist Professional Floating Icon Frame */}
                <div className="w-12 h-12 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center justify-center text-xl mb-5 shadow-inner group-hover:scale-105 transition-transform">
                  {principle.icon}
                </div>
                
                {/* Title Segment */}
                <div className="space-y-0.5 mb-4">
                  <h5 className="text-lg font-black text-gray-900 group-hover:text-[#c8102e] transition-colors">
                    {principle.titleTa}
                  </h5>
                  <h6 className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    {principle.titleEn}
                  </h6>
                </div>

                {/* Description Segment */}
                <div className="space-y-3 pt-2 border-t border-gray-50">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {principle.descTa}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed italic block border-t border-dashed border-gray-100 pt-2">
                    {principle.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRIMARY TARGET MANIFESTO SEGMENT */}
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 border border-orange-200/30 shadow-sm relative overflow-hidden max-w-6xl mx-auto">
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28]" />
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              கழகக் குறிக்கோள் / Core Objectives
            </h3>
            
            {/* Horizontal Blueprint Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-600">
              <span className="px-3 py-1 rounded bg-gray-50 border border-gray-100">மாநில தன்னாட்சி / State Autonomy</span>
              <span className="px-3 py-1 rounded bg-gray-50 border border-gray-100">போதை இல்லா தமிழகம் / Drug-Free TN</span>
              <span className="px-3 py-1 rounded bg-gray-50 border border-gray-100">சமநிலை சமூகம் / Egalitarian Society</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Block: Direct Declarative Policy Quote */}
            <div className="lg:col-span-6 space-y-4">
              <blockquote className="text-base sm:text-lg md:text-xl font-black text-gray-800 leading-relaxed border-l-4 border-[#c8102e] pl-5 py-2 italic bg-gradient-to-r from-red-50/30 to-transparent rounded-r-xl">
                "தமிழ்நாட்டில் வாழும் அனைத்து மக்களின் தனிமனித, சமூக, அரசியல், பொருளாதார உரிமைகளை நிலைநிறுத்தி எல்லோருக்கும் எல்லாமுமான சமநிலை சமூகத்தை உருவாக்குவது."
              </blockquote>
              <div className="text-left pl-5">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wider">
                  — தவெக அதிகாரப்பூர்வ கொள்கை அறிக்கை
                </p>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                  Official TVK Policy Declaration Statement
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed italic pt-4 border-t border-gray-100 block">
                "To strictly preserve individual, social, political, and economic rights for every citizen within Tamil Nadu, creating an egalitarian social structure where everything is accessible to everyone."
              </p>
            </div>

            {/* Right Block: Systematic High-Density Framework Lists */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-2">
                முக்கியக் கொள்கை வரைவு / Policy Framework
              </h4>
              <div className="space-y-2">
                {corePillars.map((pillar, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#fdfbf9] to-[#fef6f1] rounded-xl border-l-2 border-orange-300 hover:border-[#c8102e] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-5 h-5 rounded bg-gray-900 text-white font-black text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-black text-gray-800 block leading-tight group-hover:text-[#c8102e] transition-colors">
                        {pillar.ta}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 block leading-none tracking-wide">
                        {pillar.en}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

       {/* EXECUTIVE FOUNDER & CHIEF MINISTER DECK */}
<div className="text-center mt-24 pt-16 border-t border-orange-100 max-w-3xl mx-auto relative">
  {/* Elegant Background Subtle Halo for High-Class Leadership Presence */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-[#c8102e]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

  {/* Prestigious Executive Leadership Badge Component with Image */}
<div className="relative w-20 h-20 bg-gradient-to-tr from-[#c8102e] via-[#ffd60a] to-[#f05a28] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-white transition-transform duration-500 hover:scale-105 overflow-hidden group">
  {/* Subtle depth overlay to make the image pop against the gradient ring */}
  <div className="absolute inset-0.5 rounded-full bg-[#0a0203] opacity-10 z-10" />

  {/* Image Container with precise inset from the gradient border */}
  <div className="absolute inset-1 rounded-full overflow-hidden z-0 bg-white">
    <img
      src="./vijay.jpeg" // 🔹 Replace with your actual image path (e.g., districtSecImg)
      alt="Hon'ble Chief Minister & TVK President"
      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      draggable="false"
    />
  </div>
</div>

  {/* Central Creed Proclamation */}
  <h4 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight leading-tight">
    "ஜனநாயகப் போர் - மக்களுக்கான வெற்றி"
  </h4>
  <h5 className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest mt-1.5 opacity-80">
    "Democratic Warfare — Victory for the People"
  </h5>

  {/* High-Density Administrative Governance Credentials */}
  <div className="mt-8 space-y-2">
    {/* Full Name Signature Render */}
    <p className="text-lg md:text-xl font-black text-gray-900 tracking-wide">
      தளபதி விஜய்
    </p>

    {/* Dual-Language Executive Credentials Panel */}
    <div className="inline-flex flex-col items-center gap-1 px-6 py-3 bg-white border border-orange-200/50 rounded-2xl shadow-sm max-w-xl mx-auto">
      <span className="text-xs sm:text-sm font-black text-[#c8102e] tracking-wide text-center">
        மாண்புமிகு தமிழக முதலமைச்சர் & தவெக தலைவர்
      </span>
      <div className="w-12 h-px bg-orange-100 my-0.5" />
      <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest text-center">
        Hon'ble Chief Minister of Tamil Nadu & President, TVK
      </span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Vision;