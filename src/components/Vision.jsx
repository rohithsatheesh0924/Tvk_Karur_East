import React from "react";

const Vision = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50/30 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Premium Background Elements - Responsive */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-red-200/40 to-yellow-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-l from-yellow-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Hero Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-red-200/60 mb-4 sm:mb-6 lg:mb-8">
            <span className="text-base sm:text-lg lg:text-xl font-black bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-wide uppercase">
              தவெகக் கொள்கை & விளக்கம்
            </span>
          </div>
          
          <div className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-red-50/90 to-yellow-50/90 backdrop-blur-sm rounded-lg sm:rounded-xl border border-red-200/70 mb-4 sm:mb-6 lg:mb-8 shadow-md max-w-full sm:max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm lg:text-base font-bold text-red-700 tracking-wide text-center sm:text-left">
              சமூக நீதி | சமயச்சார்பின்மை | சமத்துவம்
            </span>
          </div>
          
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-gray-900 via-red-700 to-yellow-500 bg-clip-text text-transparent leading-tight mb-2 sm:mb-4 lg:mb-6">
            "பிறப்பொக்கும் எல்லா உயிர்க்கும்"
          </blockquote>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light italic">
            — <span className="font-black text-red-600">திருக்குறள்</span>
          </p>
        </div>

        {/* Core Principles Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {[
            {
              icon: "⚖️",
              title: "சமூக நீதி",
              desc: "அம்பேத்கர், பெரியார் சிந்தனைகளின் அடிப்படையில் விகிதாச்சார இட ஒதுக்கீடு. சாதி, மதம், பாலின பேதமின்றி அனைவருக்கும் சம வாய்ப்பு.",
              color: "from-red-500 to-red-600",
              textColor: "text-red-600"
            },
            {
              icon: "🕌",
              title: "சமயச்சார்பின்மை",
              desc: "அனைத்து மதங்களையும் மதித்தல். மத வெறி, பிரிவினைக்கு எதிராக நிலைப்பாடு. ஜனநாயக உரிமைகளைப் பாதுகாப்போம்.",
              color: "from-yellow-500 to-yellow-600",
              textColor: "text-yellow-700"
            },
            {
              icon: "🌱",
              title: "இரு மொழிக் கொள்கை",
              desc: "தமிழ் மற்றும் ஆங்கிலம் - தமிழ் மொழி பாதுகாப்பு + உலகமயமாக்கல். NEET ரத்து, இலவச கல்வி, விவசாயிகளுக்கான மானியங்கள்.",
              color: "from-red-500 to-yellow-500",
              textColor: "text-red-600"
            }
          ].map((principle, index) => (
            <div 
              key={principle.title}
              className="group bg-white/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 hover:border-red-200/70 cursor-pointer h-full flex flex-col"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${principle.color} bg-gradient-to-br rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-black text-white mx-auto mb-3 sm:mb-5 lg:mb-6 shadow-lg sm:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500 group-hover:rotate-3 flex-shrink-0`}>
                {principle.icon}
              </div>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-black text-gray-900 text-center mb-3 sm:mb-4 lg:mb-5 group-hover:${principle.textColor} transition-all duration-500 leading-tight flex-grow`}>
                {principle.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center text-xs sm:text-sm lg:text-base opacity-90 group-hover:opacity-100 transition-opacity flex-grow mt-auto">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Vision Statement - Responsive */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-red-200/50 shadow-xl sm:shadow-2xl mx-auto max-w-4xl lg:max-w-5xl">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-gray-900 via-red-700 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-6 leading-tight">
              தவெகக் குறிக்கோள்
            </h2>
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg sm:rounded-2xl border-2 border-red-200/60 shadow-lg max-w-full sm:max-w-2xl mx-auto">
              <span className="text-base sm:text-lg lg:text-xl font-black text-red-700 text-center sm:text-left">மாநில தன்னாட்சி</span>
              <span className="w-px h-5 sm:h-6 bg-red-300/50 hidden sm:block"></span>
              <span className="text-base sm:text-lg lg:text-xl font-black text-yellow-700 text-center">போதை இல்லா தமிழகம்</span>
              <span className="w-px h-5 sm:h-6 bg-yellow-300/50 hidden sm:block"></span>
              <span className="text-base sm:text-lg lg:text-xl font-black text-red-700 text-center sm:text-left">சமநிலை சமூகம்</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Quote */}
            <div className="order-2 lg:order-1">
              <blockquote className="text-sm sm:text-base lg:text-xl xl:text-2xl font-black text-gray-800 leading-tight border-l-4 sm:border-l-6 border-red-500 pl-4 sm:pl-6 lg:pl-8 py-4 sm:py-6 lg:py-8 italic bg-gradient-to-r from-red-50/60 to-transparent rounded-r-lg sm:rounded-r-2xl">
                "தமிழ்நாட்டில் வாழும் அனைத்து மக்களின் தனிமனித, சமூக, 
                அரசியல், பொருளாதார உரிமைகளை நிலைநிறுத்தி 
                எல்லோருக்கும் எல்லாமுமான சமநிலை சமூகத்தை உருவாக்குவது"
              </blockquote>
              <div className="text-right mt-4 sm:mt-6 lg:mt-8">
                <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-600">
                  — தவெக அதிகாரப்பூர்வ அறிக்கை
                </p>
              </div>
            </div>
            
            {/* Key Pillars */}
            <div className="order-1 lg:order-2">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-left">முக்கியக் கொள்கைகள்</h4>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {[
                  "விகிதாச்சார இட ஒதுக்கீடு",
                  "இரு மொழிக் கொள்கை (தமிழ் + ஆங்கிலம்)",
                  "போதை இல்லா தமிழ்நாடு",
                  "மாநில தன்னாட்சி",
                  "இளைஞர் வலிமை & வேலைவாய்ப்பு"
                ].map((pillar, index) => (
                  <div key={pillar} className="group flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-red-50/70 to-yellow-50/70 rounded-lg sm:rounded-xl border-l-4 border-red-400 hover:border-red-500 hover:shadow-md sm:hover:shadow-lg transition-all duration-400 hover:-translate-x-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5 group-hover:scale-105 sm:group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-relaxed group-hover:text-red-600 transition-colors flex-grow">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder Quote - Responsive */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 lg:pt-16 border-t-2 border-red-200/60 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-xl max-w-2xl sm:max-w-3xl mx-auto">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-black text-white mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-xl ring-4 ring-white/60">
            TV
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent mb-2 sm:mb-4 lg:mb-6 leading-tight">
            "ஜனநாயகப் போர் - மக்களுக்கான வெற்றி"
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 tracking-wide">
            தளபதி விஜய் — தவெக நிறுவனர்
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
