import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Calendar, Wrench, Users, Image, MapPin } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import svLogoImg from "/assets/sv-logo.jpg";

interface NavbarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
  onRequestClick: () => void;
}

export default function Navbar({ onNavClick, activeSection, onRequestClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { id: "services", label: "Services", icon: Wrench },
    { id: "estimator", label: "Book Now", icon: Calendar },
    { id: "about", label: "About", icon: Users },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "contact", label: "Contact", icon: MapPin },
  ];

  const handleNav = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 text-white border-b border-[#d32f2f]/30 transition-all duration-300 ${
        scrolled ? "bg-[#0a1530] shadow-lg" : "bg-[#0f1c3f] shadow-md"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Name */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNav("hero")}
            id="nav-brand"
          >
            <img
              src={svLogoImg}
              alt="SV Plumbing Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-[#ef4444]/40 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-2xl font-extrabold tracking-tight leading-none text-white">
                SV PLUMBING
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#ef4444] leading-none mt-1">
                Services • Hyderabad
              </span>
            </div>
          </div>

          {/* Desktop / Tablet Navigation — visible from md (768px) */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-2.5 lg:px-3.5 py-2 rounded-md text-xs lg:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-[#ef4444] bg-white/5"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {/* Active bottom indicator bar */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#ef4444] rounded-full transition-all duration-300 ${
                    activeSection === item.id ? "w-4/5 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Fast Action Buttons — visible only on lg+ */}
          <div className="hidden lg:flex items-center space-x-3.5" id="desktop-actions">
            <a
              href="tel:+918008693712"
              className="flex items-center space-x-2 bg-[#FFA000] hover:bg-[#E08F00] text-black px-5 py-2.5 rounded-full text-xs font-black tracking-wide shadow-md transition-all border border-[#FFA000]/10"
              id="quick-call-btn"
            >
              <Phone className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Call Now: +91 80086 93712</span>
            </a>
            <a
              href="https://wa.me/918008693712?text=Hello SV Plumbing! I want to book a plumbing service."
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-[#00A884] hover:bg-[#009675] text-white px-5 py-2.5 rounded-full text-xs font-black tracking-wide shadow transition-all border border-[#00A884]/10"
              id="header-whatsapp-btn"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls — visible below md */}
          <div className="flex items-center space-x-2 md:hidden" id="mobile-controls">
            <a
              href="tel:+918008693712"
              className="p-2.5 bg-[#FFA000] rounded-full text-black hover:bg-[#E08F00]"
              title="Call Us Now"
              id="mobile-call-icon"
            >
              <Phone className="w-5 h-5 text-black stroke-[2.5]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer — backdrop + slide-down panel */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 top-20 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`absolute left-0 right-0 top-full z-50 md:hidden bg-[#0d1733] border-t border-[#d32f2f]/30 px-4 pt-2 pb-6 space-y-2 transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
        }`}
        id="mobile-drawer"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex items-center w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all ${
                activeSection === item.id
                  ? "bg-[#d32f2f]/10 text-[#ef4444] border-l-[3px] border-[#ef4444]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white border-l-[3px] border-transparent"
              }`}
              id={`mobile-link-${item.id}`}
            >
              <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
              {item.label}
            </button>
          );
        })}

        <div className="pt-4 border-t border-slate-800 space-y-3">
          <a
            href="tel:+918008693712"
            className="flex items-center justify-center space-x-2 w-full bg-[#FFA000] hover:bg-[#E08F00] text-black py-3 rounded-lg text-sm font-black shadow-md"
            id="mobile-call-btn-drawer"
          >
            <Phone className="w-4 h-4 text-black stroke-[2.5]" />
            <span>Call Now: +91 80086 93712</span>
          </a>
          <a
            href="https://wa.me/918008693712?text=Hello SV Plumbing! I want to request a plumber."
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2 w-full bg-[#00A884] hover:bg-[#009675] text-white py-3 rounded-lg text-sm font-bold shadow-md"
            id="mobile-whatsapp-btn"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => {
              onRequestClick();
              setIsOpen(false);
            }}
            className="flex items-center justify-center space-x-2 w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-3 rounded-lg text-sm font-bold shadow-md"
            id="mobile-quote-btn"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment Now</span>
          </button>
          <div className="text-center text-xs text-slate-400 pt-2 font-mono">
            Vijayapuri Colony, Kothapet, Hyd
          </div>
        </div>
      </div>
    </header>
  );
}
