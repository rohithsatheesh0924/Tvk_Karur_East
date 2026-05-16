import React from "react";
import { 
  Award, 
  Shield, 
  Zap, 
  Heart, 
  Ban, 
  Landmark, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";

const Agenda = () => {
  const agendaItems = [
    {
      icon: Award,
      titleTa: "தமிழர் உயர்வு",
      titleEn: "Tamil Advancement",
      color: "text-red-600 bg-red-50 border-red-100",
      items: [
        { ta: "தமிழ் மொழி பாதுகாப்பு", en: "Preservation of Tamil Language" },
        { ta: "கலாச்சார பெருமை மேம்பாடு", en: "Promotion of Cultural Heritage" },
        { ta: "பாரம்பரிய கலைகள் பாதுகாப்பு", en: "Safeguarding Traditional Arts" }
      ]
    },
    {
      icon: Shield,
      titleTa: "வெற்றி அரசியல்",
      titleEn: "Successful Governance",
      color: "text-amber-600 bg-amber-50 border-amber-100",
      items: [
        { ta: "ஊழல் இல்லா ஆட்சி நிர்வாகம்", en: "Corruption-Free Administration" },
        { ta: "முழு வெளிப்படைத்தன்மை", en: "Absolute Public Transparency" },
        { ta: "திறமையான மக்கள் நிர்வாகம்", en: "Efficient Civil Management" }
      ]
    },
    {
      icon: Zap,
      titleTa: "இளைஞர் வலிமை",
      titleEn: "Youth Empowerment",
      color: "text-orange-600 bg-orange-50 border-orange-100",
      items: [
        { ta: "நவீன வேலைவாய்ப்பு உருவாக்கம்", en: "Modern Employment Creation" },
        { ta: "தொழில்நுட்ப திறன் மேம்பாடு", en: "Technical Skill Development" },
        { ta: "தொழில்முனைவோர் ஊக்கத்தொகை", en: "Entrepreneurial Incentives" }
      ]
    },
    {
      icon: Heart,
      titleTa: "மக்கள் நலன்",
      titleEn: "Public Welfare",
      color: "text-red-600 bg-red-50 border-red-100",
      items: [
        { ta: "தரமான இலவசக் கல்வி", en: "Quality Free Education" },
        { ta: "அனைவருக்குமான உலகத்தர ஆரோக்கியம்", en: "Universal Global Healthcare" },
        { ta: "விவசாயிகள் வாழ்வாதார காப்பு", en: "Agricultural Livelihood Protection" }
      ]
    },
    {
      icon: Ban,
      titleTa: "போதை இல்லா தமிழ்நாடு",
      titleEn: "Drug-Free Tamil Nadu",
      color: "text-amber-600 bg-amber-50 border-amber-100",
      items: [
        { ta: "போதைப்பொருள் முற்றாக ஒழிப்பு", en: "Absolute Eradication of Narcotics" },
        { ta: "இளைஞர் எதிர்காலப் பாதுகாப்பு", en: "Safeguarding Youth Futures" },
        { ta: "விழிப்புணர்வு மற்றும் மறுவாழ்வு", en: "Awareness & Rehabilitation Centers" }
      ]
    },
    {
      icon: Landmark,
      titleTa: "மாநில தன்னாட்சி",
      titleEn: "State Autonomy",
      color: "text-orange-600 bg-orange-50 border-orange-100",
      items: [
        { ta: "மாநில அரசு அதிகார மீட்பு", en: "Reclaiming State Rights & Authority" },
        { ta: "சுயசார்பு நிதி சுதந்திரம்", en: "Self-Reliant Financial Freedom" },
        { ta: "சமூக நீதி அடிப்படையிலான சட்டம்", en: "Social Justice-Based Legal Reform" }
      ]
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fefbf9] via-[#fef6f1] to-[#fcf0e7] py-20 md:py-28 border-t border-b border-orange-100/60 overflow-hidden">
      {/* Structural Blueprint Grid Background for Elite Aesthetic */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#c8102e]/5 to-[#f05a28]/5 border border-orange-200/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8102e]">
              தவெக கொள்கை விளக்க நிகழ்ச்சி நிரல் / TVK Strategic Action Agenda
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mt-2">
            செயல்பாட்டுத் திட்டங்கள்
          </h3>
          <p className="text-sm md:text-base text-gray-500 font-semibold tracking-widest uppercase mt-3">
            தமிழர் நலன் • வெற்றி ஆட்சி • இளைஞர் வலிமை
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28] mx-auto mt-6 rounded-full" />
        </div>

        {/* HIGH-DENSITY AGENDA CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {agendaItems.map((agenda, index) => {
            const IconComponent = agenda.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-orange-200/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Professional Icon Head Container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner mb-5 group-hover:scale-105 transition-transform ${agenda.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title Segment */}
                  <div className="space-y-0.5 mb-5 text-left border-b border-gray-50 pb-3">
                    <h4 className="text-lg font-black text-gray-900 group-hover:text-[#c8102e] transition-colors duration-300">
                      {agenda.titleTa}
                    </h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      {agenda.titleEn}
                    </p>
                  </div>

                  {/* Structured High-Density List Items */}
                  <ul className="space-y-4 text-left">
                    {agenda.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-[#f05a28] mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        <div className="space-y-0.5">
                          <span className="text-xs sm:text-sm font-black text-gray-800 block leading-tight">
                            {item.ta}
                          </span>
                          <span className="text-[11px] font-bold text-gray-400 block leading-none">
                            {item.en}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN MANIFESTO CORE DECLARATION STATEMENT PANEL */}
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 border border-orange-200/30 shadow-sm relative overflow-hidden max-w-6xl mx-auto">
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28]" />
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              முழுமையான கொள்கை வரைவு / Core Action Manifesto
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-600">
              <span className="px-3 py-1 rounded bg-gray-50 border border-gray-100">அனைவருக்கும் நீதி / Justice for All</span>
              <span className="px-3 py-1 rounded bg-gray-50 border border-gray-100">அனைவருக்கும் வளர்ச்சி / Growth for All</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Block: Core Strategic Commitments */}
            <div className="lg:col-span-6">
              <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#c8102e]" /> முக்கிய உறுதிமொழிகள் / Key Pledges
              </h4>
              <div className="space-y-3">
                {[
                  { ta: "விகிதாச்சார இட ஒதுக்கீடு முழுமையான அமலாக்கம்", en: "Full Implementation of Proportional Reservation" },
                  { ta: "இரு மொழிக் கொள்கை சமரசம் இன்றி அமல் (தமிழ் + ஆங்கிலம்)", en: "Strict Enforcement of Two-Language Policy (Tamil + English)" },
                  { ta: "தமிழகத்தில் நீட் (NEET) தேர்வு முற்றிலும் ரத்து", en: "Absolute Scrapping of NEET Examination Within the State" },
                  { ta: "போதைப்பொருள் மற்றும் மதுப் பழக்கங்கள் முற்றாக ஒழிப்பு", en: "Total Eradication of Narcotics and Communal Addiction Platforms" }
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#fdfbf9] to-[#fef6f1] rounded-xl border-l-2 border-orange-300 hover:border-[#c8102e] hover:shadow-md transition-all duration-300 group">
                    <div className="w-5 h-5 rounded bg-gray-900 text-white font-black text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-black text-gray-800 block leading-tight group-hover:text-[#c8102e] transition-colors">
                        {commitment.ta}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 block leading-none">
                        {commitment.en}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Block: Official Standard Quote Card */}
            <div className="lg:col-span-6 space-y-4">
              <blockquote className="text-base sm:text-lg md:text-xl font-black text-gray-800 leading-relaxed border-l-4 border-[#c8102e] pl-5 py-3 italic bg-gradient-to-r from-red-50/30 to-transparent rounded-r-xl">
                "தமிழக வெற்றிக் கழகம் - தமிழ்நாட்டில் வாழும் ஒவ்வொரு குடும்பத்திற்கும் பாதுகாப்பான வீடு, நிலையான வேலை, தரமான இலவசக் கல்வி மற்றும் உலகத்தர ஆரோக்கியத்தை உறுதி செய்யும்."
              </blockquote>
              <div className="text-left pl-5">
                <p className="text-xs font-black text-gray-900 uppercase tracking-wider">
                  — தவெக அதிகாரப்பூர்வ தேர்தல் அறிக்கை குறிக்கோள்
                </p>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                  Official Strategic Vision Statement Blueprint
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed italic pt-4 border-t border-gray-100 block">
                "Tamilaga Vettri Kazhagam guarantees to ensure a safe home, stable employment, premier free education, and state-of-the-art healthcare provisions for every family residing across Tamil Nadu."
              </p>
            </div>

          </div>
        </div>

        {/* EXECUTIVE LEADER & CHIEF MINISTER DECK */}
        <div className="text-center mt-24 pt-16 border-t border-orange-100 max-w-3xl mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-[#c8102e]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Symmetrical Executive Image Round Frame Badge */}
          <div className="relative w-20 h-20 bg-gradient-to-tr from-[#c8102e] via-[#ffd60a] to-[#f05a28] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-white transition-transform duration-500 hover:scale-105 overflow-hidden group">
            <div className="absolute inset-0.5 rounded-full bg-[#0a0203] opacity-10 z-10" />
            <div className="absolute inset-1 rounded-full overflow-hidden z-0 bg-white">
              <img
                src="./vijay.jpeg"
                alt="Hon'ble Chief Minister & TVK President"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                draggable="false"
              />
            </div>
          </div>

          <h4 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight leading-none">
            "மக்களுக்காக, மக்களால், மக்களின் வெற்றி"
          </h4>
          <h5 className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest mt-2 opacity-80">
            "For the People, By the People, Absolute Victory for the People"
          </h5>

          <div className="mt-8 space-y-2">
            <p className="text-lg md:text-xl font-black text-gray-900 tracking-wide">
              தளபதி விஜய்
            </p>

            <div className="inline-flex flex-col items-center gap-1 px-6 py-3 bg-white border border-orange-200/50 rounded-2xl shadow-sm max-w-xl mx-auto">
              <span className="text-xs sm:text-sm font-black text-[#c8102e] tracking-wide text-center flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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

export default Agenda;