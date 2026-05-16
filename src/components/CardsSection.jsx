import React from "react";

// Safe public directory paths - no imports required
const districtSecImg = "./Mathi.jpg"; 
const secretaryImg = "./Kishore .jpg"; 
const jointSecImg = "./rohith.jpg"; 
const treasurerImg = "./sakthi.jpeg"; 

const CardsSection = () => {
  // District Secretary Contact Configuration
  

  const officeBearers = [
    {
      roleTa: "செயலாளர்",
      roleEn: "Secretary",
      nameTa: "கிஷோர்",
      nameEn: "Kishore",
      part: "Karur West, Eastern Part",
      image: secretaryImg,
      phone: "+919344330970",
      whatsapp: "919344330970"
    },
    {
      roleTa: "இணைச் செயலாளர்",
      roleEn: "Joint Secretary",
      nameTa: "ரோஹித்",
      nameEn: "Rohith",
      part: "Karur West, Eastern Part",
      image: jointSecImg,
      phone: "+919750565041", 
      whatsapp: "919750565041"
    },
    {
      roleTa: "பொருளாளர்",
      roleEn: "Treasurer",
      nameTa: "சக்தி",
      nameEn: "Sakthi",
      part: "Karur West, Eastern Part",
      image: treasurerImg,
      phone: "+918098989862",
      whatsapp: "918098989862"
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fefbf9] via-[#fef6f1] to-[#fcf0e7] py-20 md:py-28 border-t border-b border-orange-100/60 overflow-hidden">
      {/* Structural Blueprint Grid Background for Elite Aesthetic */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#c8102e]/5 to-[#f05a28]/5 border border-orange-200/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8102e]">
              நிர்வாகப் பொறுப்பாளர்கள் / Office Bearers
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            கழக நிர்வாகத் தூண்கள்
          </h3>
          <p className="text-sm md:text-base text-gray-500 font-semibold tracking-widest uppercase mt-3">
            Karur West District, Eastern Part Hierarchy
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28] mx-auto mt-6 rounded-full" />
        </div>

        {/* ROW 1: District Secretary Core Feature (Image Left, Content Right) */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-8 border border-orange-200/30 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group mb-12">
          {/* Fine top accent line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28]" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Profile Image - Sized to aspect-[4/5] for absolute consistency */}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center">
              <div className="w-full aspect-[4/5] max-w-[200px] md:max-w-none rounded-xl overflow-hidden p-1 bg-gradient-to-tr from-orange-200/50 via-transparent to-red-200/50 border border-orange-100/50 shadow-inner relative">
                <img
                  src={districtSecImg}
                  alt="District Secretary"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 bg-gray-50"
                />
              </div>
            </div>

            {/* Right Side: Identity Details & Content */}
            <div className="md:col-span-8 lg:col-span-9 text-center md:text-left space-y-4">
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-widest text-white bg-[#c8102e] px-2.5 py-1 rounded mb-3">
                  மாவட்டச் செயலாளர் / District Secretary
                </span>
                <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">V.P. மதியழகன்</h4>
                <p className="text-xs text-gray-400 font-bold tracking-wider uppercase">V.P. Mathialagan</p>
              </div>

              
              <div className="bg-gradient-to-r from-[#fdfbf9] to-[#fef6f1] p-4 rounded-xl border border-orange-100/40 max-w-4xl text-left">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  📌 கரூர் மேற்கு மாவட்ட மக்களின் உரிமைகளை மீட்டெடுக்கவும், முறையான உள்கட்டமைப்பு மற்றும் வெளிப்படையான மக்கள் சேவை வழங்கிட முன்னின்று செயல்படுகிறார்.
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed italic mt-2 border-t border-orange-100/40 pt-2">
                  Leading the movement forward to ensure transparent governance and swift grievance redressal for every citizen across the region.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ROW 2: Executive Committee Banner Label */}
        <div className="w-full bg-white/40 border border-orange-200/20 backdrop-blur-sm p-3 px-4 rounded-xl flex items-center justify-between mb-6">
          <span className="text-xs font-black uppercase tracking-wider text-gray-500">
            கழக நிர்வாகிகள் / Executive Committee
          </span>
          <span className="w-2 h-2 rounded-full bg-[#f05a28]/40 animate-pulse" />
        </div>

        {/* ROW 3: Tier Leadership Grid (3 Column System) - Images are completely identical in shape */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {officeBearers.map((bearer, idx) => (
    <div 
      key={idx} 
      className="bg-white rounded-3xl p-5 border border-orange-200/30 shadow-sm hover:shadow-md text-center flex flex-col justify-between group relative overflow-hidden"
    >
      <div>
        {/* Profile Image Canvas - Fully Static with Zero Animation */}
        <div className="w-full max-w-[220px] aspect-[4/5] mx-auto rounded-2xl overflow-hidden mb-5 p-1 bg-gradient-to-tr from-orange-100 via-transparent to-red-100 border border-orange-100 shadow-inner relative group-hover:border-red-200">
          <img
            src={bearer.image}
            alt={bearer.nameEn}
            className="w-full h-full object-cover rounded-xl bg-gray-50"
            draggable="false"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x400?text=TVK+Leader";
            }}
          />
          
          {/* Label Strip Overlay */}
          <div className="absolute bottom-1 inset-x-1 rounded-b-xl bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-10 backdrop-blur-[0.5px]">
            <span className="text-xs font-black text-[#ffd60a] uppercase tracking-wider block leading-tight">
              {bearer.roleTa}
            </span>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block mt-0.5 opacity-90 leading-none">
              {bearer.roleEn}
            </span>
          </div>
        </div>

        {/* Typography Block */}
        <div className="space-y-1 px-1 mb-4">
          <h5 className="text-base sm:text-lg font-black text-gray-900 group-hover:text-[#c8102e] tracking-tight">
            {bearer.nameTa}
          </h5>
          <h6 className="text-xs text-gray-400 font-bold uppercase tracking-wider">
            {bearer.nameEn}
          </h6>
        </div>

        {/* Action Grid for Communication - Instant Hover Color Swapping */}
        <div className="flex flex-col gap-2 px-1 mb-1">
          <a 
            href={`tel:${bearer.phone}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-red-50 text-[#c8102e] text-xs font-black border border-red-100/40 hover:bg-[#c8102e] hover:text-white uppercase tracking-wider"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.926.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            அழைக்க / Call
          </a>
          <a 
            href={`https://wa.me/${bearer.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-black border border-emerald-100/40 hover:bg-emerald-600 hover:text-white uppercase tracking-wider"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.488 4.653 1.489 5.432 0 9.85-4.331 9.853-9.643.002-2.573-1.002-4.991-2.83-6.822-1.829-1.83-4.253-2.834-6.83-2.835-5.437 0-9.856 4.332-9.86 9.645-.001 2.126.561 4.15 1.624 5.923l-.993 3.626 3.733-.964z" />
            </svg>
            வாட்ஸ்அப் / Chat
          </a>
        </div>
      </div>

      {/* Region Footer Tag */}
      <div className="mt-5 pt-3 border-t border-orange-100/60">
        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block bg-orange-50/60 py-1.5 rounded-xl border border-orange-100/30">
          {bearer.part}
        </span>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default CardsSection;