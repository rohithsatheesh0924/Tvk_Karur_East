import React, { useState, useRef } from "react";
import { User, Phone, Mail, MapPin, AlertTriangle, Camera, Send, CheckCircle2, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const GrievanceFormSection = () => {
  const formRef = useRef(); 
  const [isSending, setIsSending] = useState(false); 
  const [fileName, setFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ward: "", 
    constituency: "", 
    street: "",
    complaint: ""
  });

  // Dynamic lookup mapping wards to constituencies
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

  // Handles text input changes safely
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles and validates image attachment constraints up to 5MB
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 🔹 Max file threshold calculation set to exactly 5MB
      if (file.size > 5 * 1024 * 1024) {
        alert("புகைப்படத்தின் அளவு 5MB-க்கு குறைவாக இருக்க வேண்டும். / Photo proof must be under 5MB.");
        e.target.value = ""; 
        setFileName("");
        return;
      }
      setFileName(file.name);
    }
  };

  // Generates a clean, readable text string for WhatsApp transmissions
  const triggerWhatsAppFallback = () => {
    const WHATSAPP_NUMBER = "919750565041"; // Primary administrative node
    
    const messageText = 
`*புதிய புகார் பதிவு (Grievance Portal)*
--------------------------------------------
*பெயர்:* ${formData.name || "Not Provided"}
*அலைபேசி:* ${formData.phone || "Not Provided"}
*மின்னஞ்சல்:* ${formData.email || "Not Provided"}
*வார்டு எண்:* ${formData.ward || "Not Selected"}
*தொகுதி:* ${formData.constituency || "Not Derived"}
*தெரு விவரம்:* ${formData.street || "Not Provided"}
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
          setFormData({ name: "", phone: "", email: "", ward: "", constituency: "", street: "", complaint: "" });
          setFileName("");
      })
      .catch((error) => {
          console.error("EmailJS Failed. Routing via WhatsApp Desk:", error);
          setIsSending(false);
          
          // 🔹 Seamless client notification followed by secondary fallback execution
          alert("மின்னஞ்சல் சேவையில் தற்காலிக சிக்கல் உள்ளது. உங்கள் புகார் வாட்ஸ்அப் (WhatsApp) மூலம் நேரடியாக அனுப்பப்படும். / Email pipeline busy. Redirecting to WhatsApp desk...");
          triggerWhatsAppFallback();
      });
  };

  return (
    <section id="grievance-portal" className="relative w-full bg-gradient-to-b from-[#fefbf9] via-[#fef6f1] to-[#fcf0e7] py-20 md:py-28 border-t border-b border-orange-100/60 overflow-hidden">
      {/* Structural Accent Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Layout Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#c8102e]/5 to-[#f05a28]/5 border border-orange-200/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8102e]">
              பொதுமக்கள் குறைதீர்க்கும் மையம் / Public Grievance Portal
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            குறைகளைப் பதிவு செய்ய
          </h3>
          <p className="text-sm md:text-base text-gray-500 font-semibold tracking-widest uppercase mt-3">
            Ward & Constituency Action Center
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Structural Guidelines Panel */}
          <div className="lg:col-span-4 bg-white/60 border border-orange-200/20 backdrop-blur-sm rounded-2xl p-6 space-y-6">
            <div>
              <h4 className="text-lg font-black text-gray-900">முறையான உள்கட்டமைப்பு மாற்றம்</h4>
              <p className="text-xs text-gray-500 font-bold tracking-wide uppercase mt-0.5">Transparent Resolution Tracking</p>
            </div>
            
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              உங்கள் தெருக்களில் உள்ள சாக்கடை வசதி, குடிநீர் பற்றாக்குறை, சாலை பழுதுகள் அல்லது தெருவிளக்கு மின்பிரச்சினைகளை ஆதாரப் படங்களுடன் பதிவிடவும். பெறப்படும் புகார்கள் அனைத்தும் நேரடியாக சரிபார்க்கப்படும்.
            </p>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 space-y-3">
              <span className="text-[11px] font-black uppercase text-[#c8102e] tracking-wider block">
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

            <div className="pt-4 border-t border-orange-100">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2026 மாற்றத்தை நோக்கி</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Grievance Form Panel Block */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-orange-200/30 shadow-xl shadow-orange-900/[0.01] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#c8102e] to-[#f05a28]" />
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900">புகார் வெற்றிகரமாகப் பதிவு செய்யப்பட்டது!</h4>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Thank you. Your grievance report has been accurately logged for review. Our local field representatives will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-gray-900 text-white text-xs font-bold tracking-wider uppercase hover:bg-gray-800 transition"
                  >
                    மீண்டும் பதிவு செய்ய / File Another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  {/* HIDDEN FIELDS: Data targets for primary administration routing hooks */}
                  <input type="hidden" name="to_email" value="karurnorthwest.tvk@gmail.com" />
                  <input type="hidden" name="to_name" value="TVK Administration Desk" />

                  {/* Row 1: Name & Phone Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#f05a28] focus:bg-white transition"
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
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#f05a28] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Ward Select Dropdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#f05a28] focus:bg-white transition"
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
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#f05a28] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="">-- Select Ward --</option>
                        <option value="12">Ward 12 / வார்டு 12</option>
                        <option value="13">Ward 13 / வார்டு 13</option>
                        <option value="14">Ward 14 / வார்டு 14</option>
                        <option value="16">Ward 16 / வார்டு 16</option>
                        <option value="17">Ward 17 / வார்டு 17</option>
                        <option value="18">Ward 18 / வார்டு 18</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Auto-Derived Assembly Constituency Input Container */}
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
                      className="w-full px-4 py-3 bg-orange-50/30 border border-orange-100 rounded-xl text-sm text-gray-600 font-bold focus:outline-none cursor-not-allowed select-none"
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
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#f05a28] focus:bg-white transition"
                    />
                  </div>

                  {/* Row 5: Detailed Problem Statement Textarea Container */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-gray-400" /> புகாரின் விவரம் / Complaint Details *
                    </label>
                    <textarea 
                      required
                      name="complaint"
                      rows="4"
                      placeholder="Please explicitly describe the infrastructure problem here..."
                      value={formData.complaint}
                      onChange={handleTextChange}
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#f05a28] focus:bg-white transition resize-none"
                    />
                  </div>

               

                  {/* Action Buttons High-Density Layout Row Array */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    {/* Primary Email Submission Route */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#ffd60a] to-[#fbc02d] text-black font-black text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md w-full sm:w-auto disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" /> 
                      {isSending ? "அனுப்பப்படுகிறது... / Sending..." : "இணையவழியே சமர்ப்பிக்க / Submit Online"}
                    </button>

                    {/* Secondary Manual WhatsApp Fallback Route */}
                    <button
                      type="button"
                      onClick={triggerWhatsAppFallback}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 text-white font-black text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md w-full sm:w-auto hover:bg-emerald-700 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      வாட்ஸ்அப் மூலம் அனுப்ப / Send via WhatsApp
                    </button>
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