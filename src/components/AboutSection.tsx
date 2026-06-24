import React from "react";
import { Shield, Award, CheckCircle2, Users, Flame, HeartHandshake } from "lucide-react";
import svBanner from "/assets/gallery-08.jpeg";

export default function AboutSection() {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "15+ Years of Excellence",
      description: "Serving East Hyderabad since 2011 with a track record of reliable, honest, and high-quality plumbing solutions."
    },
    {
      icon: <Shield className="w-6 h-6 text-sky-500" />,
      title: "100% Verified Plumbers",
      description: "Every member of our team is fully vetted, police-verified, and highly trained to ensure absolute security and peace of mind."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
      title: "Transparent Standards",
      description: "We believe in direct, upfront communication. No surprise markups or hidden charges. Standardized rates for every single service."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#d32f2f]" />,
      title: "30-Day Service Guarantee",
      description: "We back our workmanship. If any issues arise within 30 days of service, we will return and fix it completely free of charge."
    }
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl p-4 min-[380px]:p-5 sm:p-8 space-y-8 sm:space-y-10" id="about-us-section">
      {/* Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Content (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest font-mono block">
              Established 2011 • Hyderabad
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
              About SV Plumbing Services
            </h3>
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed">
            SV Plumbing Services was founded on a simple promise: to provide immediate, high-quality, and transparent plumbing support to families and business owners in East Hyderabad. Operating directly from our hub at <strong>Mohan Nagar / Kothapet</strong>, we have grown into one of the most trusted names in the region.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            Unlike standard individual technicians, SV Plumbing operates as a cohesive, professional crew. We are equipped with modern leak detectors, pipeline cameras, and heavy-duty threading machinery. This allows us to handle everything from standard tap leaks to intricate commercial underground water networks.
          </p>

          {/* Quick Stats banner */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-100 pt-6">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0f1c3f] font-mono">15k+</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Jobs Completed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#d32f2f] font-mono">15+</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">100%</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Verified Plumbers</div>
            </div>
          </div>
        </div>

        {/* Right: Business Banner Image (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center items-center" id="about-illustration-container">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
            <img
              src={svBanner}
              alt="SV Plumbing Services – Business Profile Banner"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="border-t border-slate-100 pt-8">
        <h4 className="font-display font-extrabold text-lg text-slate-900 mb-6 text-center lg:text-left">
          Our Four Pillars of Customer Trust
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="flex flex-col min-[380px]:flex-row items-start gap-4 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200/60 hover:shadow-md transition-shadow"
              id={`about-value-card-${i}`}
            >
              <div className="p-3 bg-white border border-slate-200 rounded-xl shrink-0 shadow-sm">
                {v.icon}
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-slate-900 text-sm">
                  {v.title}
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
