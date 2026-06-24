import React from "react";
import { WhatsAppIcon } from "./Icons";
import { MapPin, Phone, Clock, Mail, MessageSquare, ChevronRight, PhoneCall } from "lucide-react";

export default function ContactSection() {
  const coverages = [
    "Vijayapuri Colony",
    "Mohan Nagar",
    "Srinagar Colony",
    "Kothapet",
    "Dilsukhnagar",
    "Saroornagar",
    "Chaitanyapuri",
    "Nagole",
    "L.B. Nagar",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="contact-info-grid">
      {/* Left Column: Direct Call, WhatsApp & Hours (5 Cols) */}
      <div className="lg:col-span-5 space-y-6" id="contact-details-side">
        {/* Main Details Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl p-4 min-[380px]:p-5 sm:p-8 space-y-6">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              SV Plumbing Hotline
            </h3>
            <p className="text-xs text-slate-500 mt-1 uppercase font-mono tracking-wider text-[#d32f2f] font-bold">
              Rapid Response Team • 24/7 Service
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            {/* Direct Phone Block (Enhanced) */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-4 flex items-start gap-3.5 hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#d32f2f] text-white rounded-xl shrink-0 mt-0.5 shadow-sm">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-[#d32f2f] text-[11px] uppercase tracking-wide block mb-0.5 font-mono">
                  Primary Emergency Hotline
                </span>
                <a
                  href="tel:+918008693712"
                  className="text-xl min-[380px]:text-2xl font-black text-[#0f1c3f] hover:text-[#d32f2f] transition-colors font-mono block tracking-tight break-all"
                >
                  +91 80086 93712
                </a>
                <p className="text-xs text-slate-500 mt-1">Tap to call directly from your device</p>
              </div>
            </div>

            {/* Direct WhatsApp Block (Enhanced) */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3.5 hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#00A884] text-white rounded-xl shrink-0 mt-0.5 shadow-sm">
                <WhatsAppIcon className="w-5 h-5 fill-white" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-emerald-700 text-[11px] uppercase tracking-wide block mb-0.5 font-mono">
                  WhatsApp Support
                </span>
                <a
                  href="https://wa.me/918008693712?text=Hello SV Plumbing! I want to inquire about a plumbing job."
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-black text-slate-800 hover:text-emerald-600 transition-colors block"
                >
                  Send Message
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Quick replies on text & location sharing</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-3.5 pt-2 px-1">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl shrink-0 mt-0.5 border border-amber-100">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-800 text-xs uppercase tracking-wide block mb-0.5 font-mono">
                  Operational Business Hours
                </span>
                <p className="font-bold text-slate-800">Monday – Sunday: 24 / 7 Available</p>
                <p className="text-xs text-[#ef4444] font-bold mt-0.5">Technicians on standby in Kothapet.</p>
              </div>
            </div>

            {/* Registered Office Address */}
            <div className="flex items-start space-x-3.5 pt-2 px-1">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-0.5 border border-blue-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-800 text-xs uppercase tracking-wide block mb-0.5 font-mono">
                  Registered Office Address
                </span>
                <p className="leading-relaxed text-xs">
                  11-87-4, Vijayapuri Colony Main Road,<br />
                  Mohan Nagar, Srinagar Colony,<br />
                  Kothapet, Hyderabad – 500102
                </p>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start space-x-3.5 pt-2 px-1">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl shrink-0 mt-0.5 border border-purple-100">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-800 text-xs uppercase tracking-wide block mb-0.5 font-mono">
                  Email Support
                </span>
                <p className="font-medium text-xs">support@svplumbing.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Office Location Map & Suburbs Coverage (7 Cols) */}
      <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl p-4 min-[380px]:p-5 sm:p-8 flex flex-col justify-between space-y-6" id="contact-coverage-side">
        {/* Map Vector layout */}
        <div className="space-y-3">
          <h4 className="font-display font-extrabold text-lg text-slate-900">
            Registered Office & Neighborhood Coverage
          </h4>
          <p className="text-xs text-slate-500">
            Our office is located at Mohan Nagar Junction in Kothapet. Plumbing technicians are dispatched from this central base across East Hyderabad within 30 minutes.
          </p>

          {/* Map Graphic container */}
          <div className="relative h-[220px] sm:h-[250px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center group" id="coverage-map-graphic">
            {/* Styled roads grid overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Custom stylized map graphic */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
              <div className="h-0.5 bg-slate-200 w-full absolute top-1/4 left-0"></div>
              <div className="h-0.5 bg-slate-200 w-full absolute top-2/3 left-0"></div>
              <div className="w-0.5 bg-slate-200 h-full absolute left-1/3 top-0"></div>
              <div className="w-0.5 bg-slate-200 h-full absolute left-2/3 top-0"></div>
            </div>

            {/* Highlighting Hyderabad Location Pin */}
            <div className="relative flex flex-col items-center animate-bounce z-10">
              <div className="h-10 w-10 bg-[#d32f2f] text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-red-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="bg-[#0f1c3f] text-white text-[10px] font-extrabold px-2 py-1 rounded-md mt-2 shadow-md uppercase tracking-wider font-mono">
                SV Plumbing HQ
              </div>
            </div>

            {/* Labels floating on Map */}
            <div className="absolute top-10 left-3 min-[390px]:left-8 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-md text-[8px] sm:text-[9px] font-extrabold text-slate-600 shadow-sm font-mono">
              SRINAGAR COLONY
            </div>
            <div className="absolute bottom-10 right-3 min-[390px]:right-12 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-md text-[8px] sm:text-[9px] font-extrabold text-slate-600 shadow-sm font-mono">
              KOTHAPET CROSS ROAD
            </div>
            <div className="absolute top-1/2 right-4 min-[390px]:right-10 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-md text-[8px] sm:text-[9px] font-extrabold text-slate-600 shadow-sm font-mono">
              MOHAN NAGAR
            </div>
            <div className="absolute bottom-7 left-3 min-[390px]:left-16 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-md text-[8px] sm:text-[9px] font-extrabold text-slate-600 shadow-sm font-mono">
              VIJAYAPURI COLONY
            </div>

            <div className="absolute inset-0 bg-slate-900/5 hover:bg-transparent transition-colors duration-300"></div>
          </div>
        </div>

        {/* Suburbs Tags */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono block">
            Rapid Service Suburbs (Within 3 Miles)
          </span>
          <div className="flex flex-wrap gap-2" id="coverage-suburbs-tags">
            {coverages.map((col, idx) => (
              <span
                key={idx}
                className="bg-slate-50 hover:bg-slate-100 hover:text-[#d32f2f] text-slate-600 border border-slate-200 text-xs font-bold px-3 py-1.5 rounded-xl transition-all font-sans cursor-default shadow-sm"
                id={`coverage-tag-${idx}`}
              >
                {col}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Callback CTA prompt */}
        <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-left text-xs text-slate-500">
            <strong>Immediate assistance required?</strong> We recommend calling our hotline or initiating a WhatsApp chat immediately.
          </div>
          <a
            href="https://wa.me/918008693712?text=Hello SV Plumbing! I need help with an urgent plumbing repair at my home."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#00A884] hover:bg-[#009675] text-white font-black py-3.5 px-6 rounded-2xl text-xs flex items-center justify-center space-x-2 shadow-md transition-all shrink-0"
            id="whatsapp-contact-link"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Message on WhatsApp</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
}
