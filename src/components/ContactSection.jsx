import React from "react";
import { Phone, MessageCircle, Mail, PhoneCall, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-yellow-50/30 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-200/20 to-red-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full border border-red-200 mb-6">
            <span className="text-sm font-semibold text-red-700">கரூர் மேற்கு மாவட்ட கிழக்கு பகுதி</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-red-600 to-yellow-500 bg-clip-text text-transparent mb-6 leading-tight">
            TVK- தொடர்பு
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            உங்கள் கருத்துகள், ஆதரவு, இணைந்து கொள்ள விருப்பம் - நேரடியாக எங்களை தொடர்பு கொள்ளுங்கள்
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left - Main Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-100 shadow-2xl sticky top-24 lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">விரைவான தொடர்பு</h4>
                  <p className="text-red-600 font-semibold text-lg">24x7 உடனடி பதில்</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Phone 24/7 */}
                <div className="group">
                  <p className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1">
                    <Phone className="w-4 h-4" /> <span>தொலைபேசி (24x7)</span>
                  </p>
                  <a 
                    href="tel:+919344330970"
                    className="text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent hover:from-red-700 hover:to-yellow-600 transition-all group-hover:translate-x-2 block"
                  >
                    +91 9344330970
                  </a>
                </div>
                
                {/* WhatsApp */}
                <div className="group">
                  <p className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> <span>WhatsApp (24x7)</span>
                  </p>
                  <a 
                    href="https://wa.me/919750565041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl font-black bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent hover:from-green-600 hover:to-green-700 transition-all group-hover:translate-x-2 block"
                  >
                    +91 9750565041
                  </a>
                </div>
                
                {/* Email */}
                <div className="group">
                  <p className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1">
                    <Mail className="w-4 h-4" /> <span>மின்னஞ்சல்</span>
                  </p>
                  <a 
                    href="mailto:karurnortheast.tvk@gmail.com"
                    className="text-lg font-bold text-gray-800 hover:text-red-600 transition-colors break-all"
                  >
                    karurnortheast.tvk@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-4">கரூர் மேற்கு மாவட்ட கிழக்கு பகுதி</p>
                <div className="flex items-center gap-4 text-sm text-yellow-600 font-semibold">
                  <span>TVK Official</span>
                  <div className="w-20 h-px bg-gradient-to-r from-yellow-400 to-red-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/919750565041"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-50 rounded-3xl p-8 border border-green-200 hover:border-green-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h5 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-green-600 transition-colors">
                WhatsApp
              </h5>
              <p className="text-gray-600 text-center mb-6 leading-relaxed text-sm">
                24x7 உடனடி உரையாடல்
              </p>
              <p className="text-2xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent text-center">
                +91 9750565041
              </p>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+919344330970"
              className="group bg-gradient-to-br from-red-50 to-yellow-50 hover:from-red-100 hover:to-yellow-100 rounded-3xl p-8 border border-red-200 hover:border-red-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-10 h-10 text-white" />
              </div>
              <h5 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-red-600 transition-colors">
                24x7 அழைப்பு
              </h5>
              <p className="text-gray-600 text-center mb-6 leading-relaxed text-sm">
                நேரடி ஆதரவு & வழிகாட்டல்
              </p>
              <p className="text-2xl font-black bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent text-center">
                +91 9344330970
              </p>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:karurnortheast.tvk@gmail.com"
              className="group md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-3xl p-10 border border-blue-200 hover:border-blue-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Send className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h5 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  மின்னஞ்சல்
                </h5>
                <p className="text-gray-600 mb-6 leading-relaxed max-w-md mx-auto text-sm">
                  அதிகாரப்பூர்வ கடிதங்கள் & விண்ணப்பங்கள்
                </p>
                <p className="text-lg font-bold text-gray-800 break-words">
                  karurnortheast.tvk@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
