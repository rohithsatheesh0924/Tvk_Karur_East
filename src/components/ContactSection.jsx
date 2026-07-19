import React, { useState, useRef } from "react";
import { User, Phone, Mail, MapPin, AlertTriangle, Send, CheckCircle2, MessageSquare, Edit3 } from "lucide-react";
import emailjs from "@emailjs/browser";

const GrievanceFormSection = () => {
  const formRef = useRef(); 
  const [isSending, setIsSending] = useState(false); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ward: "", 
    constituency: "", 
    street: "",
    complaintType: "", 
    complaint: ""      
  });

  const handleWardChange = (e) => {
    const selectedWard = e.target.value;
    let autoConstituency = "";

    if (["12", "17"].includes(selectedWard)) {
      autoConstituency = "Karur Constituency / கரூர் சட்டமன்றத் தொகுதி";
    } else if (["13", "14", "16", "18"].includes(selectedWard)) {
      autoConstituency = "Krishnarayapuram Constituency / கிருஷ்ணராயபுரம் சட்டமன்றத் தொகுதி";
    }

    setFormData({
      ...formData,
      ward: selectedWard,
      constituency: autoConstituency
    });
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerWhatsAppFallback = () => {
    const WHATSAPP_NUMBER = "919344330970"; 
    
    const messageText = 
`*புதிய புகார் பதிவு (Grievance Portal)*
--------------------------------------------
*பெயர்:* ${formData.name || "Not Provided"}
*அலைபேசி:* ${formData.phone || "Not Provided"}
*மின்னஞ்சல்:* ${formData.email || "Not Provided"}
*வார்டு எண்:* ${formData.ward || "Not Selected"}
*தொகுதி:* ${formData.constituency || "Not Derived"}
*தெரு விவரம்:* ${formData.street || "Not Provided"}
*புகார் வகை:* ${formData.complaintType || "Not Selected"}
*புகார் விவரம்:* ${formData.complaint || "Not Provided"}
--------------------------------------------`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_xg5jvvb";
    const TEMPLATE_ID = "template_29rdchv";
    const PUBLIC_KEY = "ONqjWe3PJDD2qS6OA";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log("EmailJS Success:", result.text);
          setIsSubmitted(true);
          setIsSending(false);
          setFormData({ name: "", phone: "", email: "", ward: "", constituency: "", street: "", complaintType: "", complaint: "" });
      })
      .catch((error) => {
          console.error("EmailJS Failed. Routing via WhatsApp Desk:", error);
          setIsSending(false);
          alert("மின்னஞ்சல் சேவையில் தற்காலிக சிக்கல் உள்ளது. உங்கள் புகார் வாட்ஸ்அப் (WhatsApp) மூலம் நேரடியாக அனுப்பப்படும். / Email pipeline busy. Redirecting to WhatsApp desk...");
          triggerWhatsAppFallback();
      });
  };

  return (
    <section id="grievance-portal" className="relative w-full bg-gradient-to-b from-[#fefbf9] via-[#fef6f1] to-[#fcf0e7] py-16 md:py-28 border-t border-b border-orange-100/60 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Layout Block */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#c8102e]/5 to-[#f05a28]/5 border border-orange-200/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#c8102e]">
              பொதுமக்கள் குறைதீர்க்கும் மையம் / Public Grievance Portal
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            குறைகளைப் பதிவு செய்ய
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 font-semibold tracking-widest uppercase mt-3">
            Ward & Constituency Action Center
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Structural Guidelines Panel */}
          <div className="lg:col-span-4 bg-white/60 border border-orange-200/20 backdrop-blur-sm rounded-2xl p-5 sm:p-6 space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-black text-gray-900">முறையான உள்கட்டமைப்பு மாற்றம்</h4>
              <p className="text-[11px] text-gray-500 font-bold tracking-wide uppercase mt-0.5">Transparent Resolution Tracking</p>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              உங்கள் தெருக்களில் உள்ள சாக்கடை வசதி, குடிநீர் பற்றாக்குறை, சாலை பழுதுகள் அல்லது தெருவிளக்கு மின்பிரச்சினைகளை ஆதாரப் படங்களுடன் பதிவிடவும். பெறப்படும் புகார்கள் அனைத்தும் நேரடியாக சரிபார்க்கப்படும்.
            </p>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 space-y-3">
              <span className="text-[10px] sm:text-[11px] font-black uppercase text-[#c8102e] tracking-wider block">
                தொகுதி எல்லை வழிகாட்டி / Jurisdiction Guide
              </span>
              <ul className="text-[11px] text-gray-600 space-y-2 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] font-bold">•</span>
                  <span><strong>வார்டு 12, 17:</strong> கரூர் சட்டமன்றத் தொகுதி (Karur)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f05a28] font-bold">•</span>
                  <span><strong>வார்டு 13, 14, 16, 18:</strong> கிருஷ்ணராயபுரம் தொகுதி (Krishnarayapuram)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Grievance Form Panel Block */}
          <div className="lg:col-span-8 w-full">
            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-10 border border-orange-200/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28]" />
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-14 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900">புகார் வெற்றிகரமாகப் பதிவு செய்யப்பட்டது!</h4>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto px-2">
                    Thank you. Your grievance report has been accurately logged for review. Our local field representatives will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-gray-900 text-white text-xs font-bold tracking-wider uppercase hover:bg-gray-800 transition"
                  >
                    மீண்டும் பதிவு செய்ய / File Another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                  
                  <input type="hidden" name="to_email" value="karurnorthwest.tvk@gmail.com" />
                  <input type="hidden" name="to_name" value="TVK Administration Desk" />

                  {/* Row 1: Name & Phone Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-gray-400" /> உங்கள் பெயர் / Your Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleTextChange}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition shadow-sm"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gray-400" /> அலைபேசி எண் / Mobile Number *
                      </label>
                      <input 
                        type="tel" 
                        required
                        name="phone"
                        placeholder="Enter 10 digit number"
                        value={formData.phone}
                        onChange={handleTextChange}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Ward Select */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-gray-400" /> மின்னஞ்சல் முகவரி / Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleTextChange}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" /> வார்டு எண் / Select Ward *
                      </label>
                      <select 
                        required
                        name="ward_number"
                        value={formData.ward}
                        onChange={handleWardChange}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition shadow-sm cursor-pointer"
                      >
                        <option value="" className="text-gray-900">-- Select Ward --</option>
                        <option value="12" className="text-gray-900">Ward 12 / வார்டு 12</option>
                        <option value="13" className="text-gray-900">Ward 13 / வார்டு 13</option>
                        <option value="14" className="text-gray-900">Ward 14 / வார்டு 14</option>
                        <option value="16" className="text-gray-900">Ward 16 / வார்டு 16</option>
                        <option value="17" className="text-gray-900">Ward 17 / வார்டு 17</option>
                        <option value="18" className="text-gray-900">Ward 18 / வார்டு 18</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Auto-Derived Assembly Constituency */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider">
                      சட்டமன்றத் தொகுதி / Assembly Constituency
                    </label>
                    <input 
                      type="text" 
                      name="assembly_constituency"
                      readOnly
                      placeholder="Auto-derived from selected ward"
                      value={formData.constituency}
                      className="w-full px-4 py-3 bg-orange-50/30 border border-orange-100 rounded-xl text-xs sm:text-sm text-gray-800 font-bold focus:outline-none cursor-not-allowed select-none"
                    />
                  </div>

                  {/* Row 4: Street & Area Address Info */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> தெருவின் பெயர் மற்றும் கிராமம் / Street & Area Data *
                    </label>
                    <input 
                      type="text" 
                      required
                      name="street"
                      placeholder="e.g. West Cross Street, Gandhi Nagar"
                      value={formData.street}
                      onChange={handleTextChange}
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition shadow-sm"
                    />
                  </div>

                  {/* Row 5: Core Categorized Problem Selection Desk */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-gray-400" /> புகாரின் வகை / Type of Complaint *
                    </label>
                    <select 
                      required
                      name="complaintType"
                      value={formData.complaintType}
                      onChange={handleTextChange}
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition shadow-sm cursor-pointer"
                    >
                      <option value="" className="text-gray-900">-- Select Category --</option>
                      <option value="Drinking Water Issue / குடிநீர் பற்றாக்குறை" className="text-gray-900">குடிநீர் பற்றாக்குறை / Drinking Water Issue</option>
                      <option value="Drainage & Sewage System / சாக்கடை கால்வாய் வசதி" className="text-gray-900">சாக்கடை கால்வாய் வசதி / Drainage & Sewage System</option>
                      <option value="Road Maintenance / சாலை பழுதுகள்" className="text-gray-900">சாலை பழுதுகள் / Road Maintenance</option>
                      <option value="Streetlight Malfunction / தெருவிளக்கு மின்பிரச்சினை" className="text-gray-900">தெருவிளக்கு மின்பிரச்சினை / Streetlight Malfunction</option>
                      <option value="Others" className="text-gray-900">மற்றவை / Others (Explicitly specify below)</option>
                    </select>
                  </div>

                  {/* Dynamic Form Expansion Block */}
                  {(formData.complaintType === "Others" || formData.complaintType !== "") && (
                    <div className="space-y-1.5 transition-all duration-300 animate-fade-in">
                      <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Edit3 className="w-3.5 h-3.5 text-gray-400" /> புகாரின் முழு விவரம் / Detailed Specifications *
                      </label>
                      <textarea 
                        required={formData.complaintType === "Others"}
                        name="complaint"
                        rows="4"
                        placeholder="தயவுசெய்து உங்கள் புகாரின் விரிவான விவரங்களை இங்கே பதிவிடவும்... / Please explicitly describe the infrastructure problem here..."
                        value={formData.complaint}
                        onChange={handleTextChange}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05a28]/20 focus:border-[#f05a28] focus:bg-white transition resize-none shadow-sm"
                      />
                    </div>
                  )}

                  {/* Structural Alignment Matrix & Fallback Controls */}
                  <div className="pt-2 flex flex-col gap-3">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                      <div className="hidden sm:block" />
                      
                      <div className="flex flex-col items-center justify-center w-full space-y-1">
                        <div className="text-emerald-600 font-black text-xl sm:text-2xl select-none leading-none animate-pulse">
                          ↓
                        </div>

                        {/* Premium Symmetrical Notice Box */}
                        <div className="bg-emerald-50/60 border border-emerald-100/70 rounded-xl p-3 flex items-start gap-2.5 shadow-sm w-full">
                          <div className="flex flex-col space-y-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-700 leading-normal">
                            <span>• புகார் தொடர்பான புகைப்படங்கள் ஏதேனும் இருந்தால் கீழே உள்ள வாட்ஸ்அப் (WhatsApp) மூலம் அனுப்பவும்.</span>
                            <span className="text-emerald-600/80 font-semibold">• If you have any related images, please send them via WhatsApp.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Execution Layer */}
                    <div className="flex flex-col-reverse sm:flex-row items-center gap-3 pt-1">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#ffd60a] to-[#fbc02d] text-black font-black text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md w-full sm:flex-1 disabled:opacity-50 transition"
                      >
                        <Send className="w-4 h-4" /> 
                        {isSending ? "அனுப்பப்படுகிறது... / Sending..." : "இணையவழியே சமர்ப்பிக்க / Submit Online"}
                      </button>

                      <button
                        type="button"
                        onClick={triggerWhatsAppFallback}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white font-black text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md w-full sm:flex-1 hover:bg-emerald-700 transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        வாட்ஸ்அப் மூலம் அனுப்ப / Send via WhatsApp
                      </button>
                    </div>

                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GrievanceFormSection;