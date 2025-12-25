import React from "react";

const cards = [
  {
    title: "நீங்கள் இணைந்து கொள்ளுங்கள்",
    desc: "தமிழக வெற்றிக் கழகத்தில் உறுப்பினராக இணைந்து கொள்ளுங்கள். TVK-வின் வெற்றி பயணத்தில் சேருங்கள்!",
    icon: "✊",
    accent: "bg-gradient-to-r from-red-500/10 to-yellow-500/10 border-red-200 text-red-700",
    link: "https://tvk.family/" // Replace with actual join link
  },
  {
    title: "மாற்றப்பட்ட வாக்காளர் பட்டியல்",
    desc: "உங்கள் பகுதியின் மாற்றப்பட்ட வாக்காளர் பட்டியலை இங்கே சரிபார்க்கவும். உங்கள் வாக்குரிமை உறுதி செய்யுங்கள்.",
    icon: "📋",
    accent: "bg-gradient-to-r from-yellow-500/10 to-red-500/10 border-yellow-200 text-yellow-700",
    link: "https://electoralsearch.eci.gov.in/" // Official voter list site
  },
  {
    title: "மாற்றப்பட்ட கருப்பு எண்",
    desc: "உங்கள் புதிய கருப்பு எண்ணை இங்கே சரிபார்க்கவும். வாக்குப்பதிவு இடத்தை உறுதி செய்யுங்கள்.",
    icon: "📍",
    accent: "bg-gradient-to-r from-red-400/10 to-yellow-400/10 border-red-100 text-red-600",
    link: "https://voters.eci.gov.in" // Booth details site
  },
];

const CardsSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-yellow-50/50 to-red-50/30 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4">
            TVK - உங்கள் செயல்பாடுகள்
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            இன்றே TVK-வில் இணைந்து கொள்ளுங்கள், வாக்காளர் பட்டியலை சரிபார்த்து, உங்கள் கருப்பு எண்ணை உறுதி செய்யுங்கள்.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group h-full rounded-3xl p-8 border-2 ${card.accent} bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-red-300`}
            >
              <div className={`text-4xl mb-6 ${index === 1 ? 'text-yellow-600' : 'text-red-600'} group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {card.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {card.desc}
              </p>
              <a 
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent hover:from-red-700 hover:to-yellow-600 transition-all inline-flex items-center gap-2 group-hover:translate-x-1 hover:underline"
              >
                இப்போது செய்யுங்கள் <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
