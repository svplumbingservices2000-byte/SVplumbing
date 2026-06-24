import React, { useState } from "react";
import { SERVICE_LIST, ServiceItem } from "./data";
import SVLogo from "./components/SVLogo";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import QuoteEstimator from "./components/QuoteEstimator";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import { WhatsAppIcon } from "./components/Icons";
import svLogoImg from "/assets/sv-logo.jpg";
import { 
  Wrench, Search, Phone, MessageSquare, ShieldCheck, 
  MapPin, Clock, Calendar, ChevronRight, X, AlertCircle, Info 
} from "lucide-react";

export default function App() {
  // Navigation & Page State
  const [activeSection, setActiveSection] = useState("services");
  
  // Selected services cart state for the Estimator
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  
  // Modal State for service details reveal
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);

  // Search & Category Filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const categories = [
    "All Services",
    "General & Inspection",
    "Bathroom & Kitchen",
    "Toilets & Drains",
    "Appliances & Geysers",
    "Pipes, Tanks & Pumps",
    "Commercial & Emergency"
  ];

  // Toggle adding/removing service to/from Estimator cart
  const handleToggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearSelection = () => {
    setSelectedServiceIds([]);
  };

  // Filter our 30 services based on search queries and category filters
  const filteredServices = SERVICE_LIST.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Services" || s.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="app-root">
      {/* Navbar component */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleScrollToSection}
        onRequestClick={() => handleScrollToSection("estimator")}
      />

      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-gradient-to-br from-[#0f1c3f] via-[#152554] to-[#0a132c] text-white overflow-hidden py-16 sm:py-24 border-b border-[#d32f2f]/30"
        id="hero"
      >
        {/* Subtle decorative grid lines representing pipeline layouts */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        {/* Abstract blue soft glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left" id="hero-text-block">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/15 text-[10px] sm:text-xs font-bold text-slate-100" id="hero-badge">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-emerald-400" />
                <span className="font-mono uppercase tracking-wider">
                  <span className="inline sm:hidden">#1 Plumber in East Hyderabad</span>
                  <span className="hidden sm:inline">#1 Plumbing Service in East Hyderabad</span>
                </span>
              </div>

              {/* Catchy headline */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
                  SV PLUMBING <br className="hidden sm:inline" />
                  <span className="text-[#ef4444] block sm:inline">SERVICES</span>
                </h1>
                <p className="font-display font-medium text-slate-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
                  Reliable. Professional. Trusted. Your 24/7 expert plumber serving Kothapet, Mohan Nagar, and Srinagar Colony.
                </p>
              </div>

              {/* Descriptive list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto lg:mx-0 text-slate-300 text-sm">
                <li className="flex items-center space-x-2.5">
                  <span className="h-2.5 w-2.5 bg-[#ef4444] rounded-full shrink-0 ring-2 ring-[#ef4444]/30"></span>
                  <span><strong>30+ Core Services</strong> available on-demand</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="h-2.5 w-2.5 bg-[#ef4444] rounded-full shrink-0 ring-2 ring-[#ef4444]/30"></span>
                  <span><strong>Instant Quote Estimator</strong> online</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="h-2.5 w-2.5 bg-[#ef4444] rounded-full shrink-0 ring-2 ring-[#ef4444]/30"></span>
                  <span><strong>24/7 Emergency</strong> technician dispatches</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="h-2.5 w-2.5 bg-[#ef4444] rounded-full shrink-0 ring-2 ring-[#ef4444]/30"></span>
                  <span><strong>Zero consultation fee</strong> for bookings</span>
                </li>
              </ul>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handleScrollToSection("services")}
                  className="w-full sm:w-auto bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-black uppercase tracking-wider text-sm px-8 py-4.5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 border border-red-500/10"
                  id="hero-explore-btn"
                >
                  <span>Explore 30 Services</span>
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => handleScrollToSection("estimator")}
                  className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm px-8 py-4.5 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center space-x-2 backdrop-blur-md"
                  id="hero-ai-btn"
                >
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span>Book Appointment</span>
                </button>
              </div>

              {/* Direct call banner */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-slate-300 text-xs font-mono pt-2" id="hero-call-footer">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#ef4444]" />
                  <span>Immediate Emergency Hotline:</span>
                </div>
                <a href="tel:+918008693712" className="font-extrabold text-[#ef4444] hover:underline hover:scale-102 transition-transform">
                  +91 80086 93712
                </a>
              </div>
            </div>

            {/* Right graphic column - Actual Logo Image */}
            <div className="lg:col-span-5 flex justify-center items-center" id="hero-graphic-block">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl flex items-center justify-center">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d32f2f]/20 to-sky-500/20 rounded-full blur-2xl scale-110"></div>
                <img
                  src={svLogoImg}
                  alt="SV Plumbing Services Logo"
                  className="relative w-full h-full object-contain rounded-full drop-shadow-2xl"
                  id="hero-logo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE BENTO BAR */}
      <div className="bg-white border-y border-slate-200 py-6 shadow-sm" id="highlights-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Block 1 */}
            <div className="p-2 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
              <div className="p-3 bg-red-50 text-[#d32f2f] rounded-2xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-base">Based in Mohan Nagar</h4>
                <p className="text-slate-500 text-xs mt-1">Providing prompt dispatches to Kothapet, Srinagar Colony & Vijayapuri.</p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="p-2 pt-6 md:pt-2 md:pl-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-base">On-time Every Time</h4>
                <p className="text-slate-500 text-xs mt-1">Standard schedules within 1-2 hours or immediate 30-min emergency visits.</p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="p-2 pt-6 md:pt-2 md:pl-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-base">30 Professional Services</h4>
                <p className="text-slate-500 text-xs mt-1">From a leaky tap fix to industrial underground pipeline works.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN APPLICATION FRAME */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="main-content-area">
        
        {/* 2. SERVICES CATALOG SECTION */}
        <section className="space-y-8 scroll-mt-24" id="services">
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-sm text-slate-500">
              SV Plumbing offers 30 specialized plumbing services across East Hyderabad. Use the search bar or category filters below to locate what you need.
            </p>
          </div>

          {/* Filtering Tools block */}
          <div className="bg-white border border-slate-200 shadow-md p-4 rounded-2xl space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4" id="filter-bar">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search dripping taps, blockages, tanks, geysers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent transition-all"
                id="search-services-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold p-1"
                  id="clear-search-btn"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Selected Count Indicator */}
            {selectedServiceIds.length > 0 && (
              <div className="flex items-center space-x-3 self-center shrink-0">
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  Selected: <strong className="text-[#ef4444]">{selectedServiceIds.length}</strong> services
                </span>
                <button
                  onClick={handleClearSelection}
                  className="text-xs text-[#ef4444] hover:underline font-bold"
                  id="catalog-clear-selection"
                >
                  Reset Selection
                </button>
              </div>
            )}
          </div>

          {/* Category Navigation Pills */}
          <div className="w-full flex items-center space-x-1.5 overflow-x-auto pb-3 scrollbar-thin" id="category-scroller">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#0f1c3f] text-white shadow-sm border border-[#0f1c3f]"
                    : "bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-800"
                }`}
                id={`cat-btn-${cat.replace(/\s+/g, "")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid (filtered) */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-6" id="catalog-no-results">
              <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-md font-bold text-slate-800">No matching services found</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Try searching for simple words like "tap", "sink", "pump", "pipe", or clear the current search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Services");
                }}
                className="mt-4 bg-[#0f1c3f] hover:bg-[#1a2d5e] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all"
                id="reset-all-filters-btn"
              >
                Show All 30 Services
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-container">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedServiceIds.includes(service.id)}
                  onToggleSelect={handleToggleService}
                  onViewDetails={setDetailService}
                />
              ))}
            </div>
          )}

          {/* Fast-Track to Estimator Prompt */}
          {selectedServiceIds.length > 0 && (
            <div className="bg-red-50 border border-[#d32f2f]/30 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-scaleIn" id="estimator-prompt-bar">
              <div className="flex items-center space-x-3 text-center sm:text-left">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  You have compiled <strong className="text-slate-900">{selectedServiceIds.length} works</strong>. Confirm details and schedule your visit.
                </span>
              </div>
              <button
                onClick={() => handleScrollToSection("estimator")}
                className="w-full sm:w-auto bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-2.5 px-6 rounded-xl text-xs font-bold shadow transition-all"
                id="prompt-estimator-btn"
              >
                Go to Booking Form →
              </button>
            </div>
          )}
        </section>

        {/* 3. BOOKING REQUEST SECTION */}
        <section className="space-y-8 scroll-mt-24" id="estimator">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Book Appointment Now
            </h2>
            <p className="text-sm text-slate-500">
              Fill out the details below to request a technician visit. Submitting will immediately redirect you to WhatsApp for direct dispatch.
            </p>
          </div>

          <QuoteEstimator />
        </section>

        {/* 5. ABOUT US SECTION (Separated) */}
        <section className="space-y-8 scroll-mt-24" id="about">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Who We Are
            </h2>
            <p className="text-sm text-slate-500">
              Learn about our legacy, values, and why households in Kothapet trust us for premium plumbing workmanship.
            </p>
          </div>

          <AboutSection />
        </section>

        {/* GALLERY SECTION */}
        <section className="space-y-8 scroll-mt-24" id="gallery">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Work Gallery
            </h2>
            <p className="text-sm text-slate-500">
              See our completed plumbing projects across Kothapet, Mohan Nagar, and Srinagar Colony. Quality workmanship you can trust.
            </p>
          </div>

          <GallerySection />
        </section>

        {/* 6. CONTACT US SECTION (Separated) */}
        <section className="space-y-8 scroll-mt-24" id="contact">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get in Touch with SV Plumbing
            </h2>
            <p className="text-sm text-slate-500">
              We operate 24/7 across East Hyderabad. Visit our registered Mohan Nagar office or connect immediately via hotline or WhatsApp.
            </p>
          </div>

          <ContactSection />
        </section>
      </main>

      {/* BRAND PERSISTENT FLOATING OVERLAPPING CALL & WHATSAPP WIDGET (Exactly like the uploaded screenshot) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-2.5 sm:space-y-3 pointer-events-none" id="floating-brand-widget">
        {/* Call Now Button (stacked above WhatsApp, Orange background, black text, with outline phone icon) */}
        <div className="pointer-events-auto transform hover:scale-105 active:scale-95 transition-all">
          <a
            href="tel:+918008693712"
            className="flex items-center space-x-2 sm:space-x-3 bg-[#FFA000] hover:bg-[#E08F00] text-black px-4 py-2.5 sm:px-7 sm:py-4 rounded-full text-xs sm:text-base font-black tracking-wide shadow-2xl border border-black/10 whitespace-nowrap"
            id="sticky-call-now-btn"
          >
            <Phone className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-black stroke-[2.5]" />
            <span>
              <span className="inline sm:hidden">Call Now</span>
              <span className="hidden sm:inline">Call Now: +91 80086 93712</span>
            </span>
          </a>
        </div>

        {/* WhatsApp Button (slightly shifted right, Green background, white text, with official logo) */}
        <div className="pointer-events-auto transform hover:scale-105 active:scale-95 transition-all -mt-1 mr-2 sm:mr-4">
          <a
            href="https://wa.me/918008693712?text=Hello SV Plumbing! I want to book a plumbing service."
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 bg-[#00A884] hover:bg-[#009675] text-white px-4 py-2.5 sm:px-7 sm:py-4 rounded-full text-xs sm:text-base font-black tracking-wide shadow-2xl border border-[#00A884]/20 whitespace-nowrap"
            id="sticky-whatsapp-btn"
          >
            <WhatsAppIcon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 fill-white" />
            <span>
              <span className="inline sm:hidden">WhatsApp Chat</span>
              <span className="hidden sm:inline">Chat on WhatsApp</span>
            </span>
          </a>
        </div>
      </div>



      {/* SERVICE DETAILS MODAL (Details Reveal) */}
      {detailService && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4" id="service-detail-modal">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden animate-scaleIn" id="modal-content">
            {/* Banner top */}
            <div className="bg-slate-900 text-white p-5 flex items-start justify-between border-b border-[#d32f2f]/30">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono block mb-1">
                  {detailService.category}
                </span>
                <h4 className="font-display font-extrabold text-lg text-white">
                  {detailService.name}
                </h4>
              </div>
              <button
                onClick={() => setDetailService(null)}
                className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                id="modal-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 space-y-5">
              <div className="text-sm text-slate-600 leading-relaxed">
                {detailService.description}
                <p className="mt-3 text-xs text-slate-500">
                  Our professional plumbing team in Hyderabad executes this service with high-precision jointing, leakage-proofing, and genuine fittings.
                </p>
              </div>

              {/* Data list */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block">
                    Estimated Duration
                  </span>
                  <span className="text-md font-bold text-[#0f1c3f] mt-0.5 font-mono block">
                    {detailService.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block text-right">
                    Service Support
                  </span>
                  <span className="text-xs font-bold text-emerald-600 mt-0.5 block text-right font-mono">
                    24/7 Available
                  </span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block font-mono">
                  What is included:
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-medium">
                  <li>Complete inspection & problem diagnostic before work start.</li>
                  <li>Labour cost of standard installation/repair fitting.</li>
                  <li>30-day SV Service quality warranty.</li>
                  <li>Clean up of work-site post-completion.</li>
                </ul>
              </div>

              {/* Informative notice */}
              <div className="flex items-start space-x-2.5 bg-blue-50/50 border border-blue-100 p-3 rounded-xl text-[11px] text-blue-700">
                <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Materials like piping, couplings, tape sealant, and fittings are charged extra based on client requirements (CPVC/PVC/GI).</span>
              </div>
            </div>

            {/* Footer with actions */}
            <div className="bg-slate-50 p-4 border-t border-slate-150 flex gap-3">
              <button
                onClick={() => setDetailService(null)}
                className="flex-1 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 py-3 rounded-xl text-xs font-bold transition-all"
                id="modal-cancel-btn"
              >
                Back to Catalog
              </button>
              
              {selectedServiceIds.includes(detailService.id) ? (
                <button
                  onClick={() => {
                    handleToggleService(detailService.id);
                    setDetailService(null);
                  }}
                  className="flex-1 bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-xl text-xs font-bold transition-all"
                  id="modal-toggle-remove-btn"
                >
                  Remove from Booking
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleToggleService(detailService.id);
                    setDetailService(null);
                    handleScrollToSection("estimator");
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-bold transition-all"
                  id="modal-toggle-add-btn"
                >
                  Select for Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BAR */}
      <footer className="bg-[#0f1c3f] text-slate-400 py-12 border-t border-[#d32f2f]/30" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-10">
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <SVLogo className="w-12 h-12" showText={false} />
                <div>
                  <h4 className="font-display font-extrabold text-white text-lg tracking-tight">
                    SV PLUMBING SERVICES
                  </h4>
                  <p className="text-[10px] text-[#ef4444] font-bold uppercase tracking-wider font-mono">
                    Reliable • Professional • Trusted
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Hyderabad's trusted residential and commercial plumbing specialists. Active across Mohan Nagar, Srinagar Colony, Kothapet, and East Hyderabad.
              </p>
            </div>

            {/* Quick links Column */}
            <div className="md:col-span-3 space-y-3.5">
              <h5 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
                Explore Sections
              </h5>
              <ul className="text-xs space-y-2.5">
                <li>
                  <button onClick={() => handleScrollToSection("services")} className="hover:text-white transition-colors">
                    Our 30 Services Catalog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("estimator")} className="hover:text-white transition-colors">
                    Book Appointment Form
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("about")} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("gallery")} className="hover:text-white transition-colors">
                    Work Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Address Summary Column */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
                Office Location
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                11-87-4, Vijayapuri Colony Main Road,<br />
                Mohan Nagar, Srinagar Colony,<br />
                Kothapet, Hyderabad – 500102
              </p>
              <div className="pt-2 text-xs text-slate-300">
                Direct Hotline: <strong className="text-white font-mono">+91 86391 21227</strong>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} SV Plumbing Services. All rights reserved.
            </p>
            <p className="text-slate-500 font-mono text-[10px] text-center sm:text-right">
              Serving Kothapet & Srinagar Colony • Hyderabad, Telangana
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
