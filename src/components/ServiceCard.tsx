import React from "react";
import { ServiceItem } from "../data";
import * as Icons from "lucide-react";
import { Plus, Check, Info, Clock } from "lucide-react";

interface ServiceCardProps {
  key?: string;
  service: ServiceItem;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onViewDetails: (service: ServiceItem) => void;
}

export default function ServiceCard({ service, isSelected, onToggleSelect, onViewDetails }: ServiceCardProps) {
  // Dynamic icon lookup with a safe fallback
  const IconComponent = (Icons as any)[service.iconName] || Icons.Wrench;

  // Specific accent borders and background hues per category to provide visual rhythm
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "General & Inspection":
        return {
          bg: "bg-blue-50/50 hover:bg-blue-50/80",
          iconBg: "bg-blue-100 text-blue-700",
          border: "border-blue-100"
        };
      case "Bathroom & Kitchen":
        return {
          bg: "bg-teal-50/50 hover:bg-teal-50/80",
          iconBg: "bg-teal-100 text-teal-700",
          border: "border-teal-100"
        };
      case "Toilets & Drains":
        return {
          bg: "bg-amber-50/50 hover:bg-amber-50/80",
          iconBg: "bg-amber-100 text-amber-700",
          border: "border-amber-100"
        };
      case "Appliances & Geysers":
        return {
          bg: "bg-rose-50/50 hover:bg-rose-50/80",
          iconBg: "bg-rose-100 text-rose-700",
          border: "border-rose-100"
        };
      case "Pipes, Tanks & Pumps":
        return {
          bg: "bg-sky-50/50 hover:bg-sky-50/80",
          iconBg: "bg-sky-100 text-sky-700",
          border: "border-sky-100"
        };
      case "Commercial & Emergency":
        return {
          bg: "bg-indigo-50/50 hover:bg-indigo-50/80",
          iconBg: "bg-indigo-100 text-indigo-700",
          border: "border-indigo-100"
        };
      default:
        return {
          bg: "bg-slate-50/50 hover:bg-slate-50/80",
          iconBg: "bg-slate-100 text-slate-700",
          border: "border-slate-100"
        };
    }
  };

  const theme = getCategoryTheme(service.category);

  return (
    <div
      className={`relative flex flex-col justify-between p-6 rounded-2xl border-2 transition-all duration-300 ${
        isSelected
          ? "border-[#d32f2f] bg-white shadow-lg scale-[1.02] ring-1 ring-[#d32f2f]/30"
          : `border-slate-200 bg-white hover:border-slate-300 hover:shadow-md`
      }`}
      id={`service-card-${service.id}`}
    >
      {/* Category Tag & Detail Button */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md font-mono">
          {service.category}
        </span>
        <button
          onClick={() => onViewDetails(service)}
          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          title="Service Details"
          id={`service-info-btn-${service.id}`}
        >
          <Info className="w-4.5 h-4.5" />
        </button>
      </div>

      {/* Main Info */}
      <div className="flex items-start space-x-3 mb-4">
        <div className={`p-2.5 rounded-xl shrink-0 ${theme.iconBg}`}>
          <IconComponent className="w-5 h-5 stroke-[2.25]" />
        </div>
        <div>
          <h3 className="font-display font-bold text-slate-900 leading-tight text-base sm:text-md">
            {service.name}
          </h3>
          <p className="text-slate-500 text-xs mt-1.5 line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>

      {/* Selection Control */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        {/* Action Toggle Button */}
        <button
          onClick={() => onToggleSelect(service.id)}
          className={`w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
            isSelected
              ? "bg-[#d32f2f] hover:bg-[#b71c1c] text-white shadow-sm"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900"
          }`}
          id={`service-select-btn-${service.id}`}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Added to List</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Select Service</span>
            </>
          )}
        </button>
      </div>

      {/* Time commitment helper */}
      <div className="flex items-center space-x-1 mt-3 text-[10px] text-slate-400 font-mono">
        <Clock className="w-3 h-3" />
        <span>Takes: {service.duration}</span>
      </div>

      {/* Selection Overlay badge */}
      {isSelected && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d32f2f] ring-2 ring-white text-white text-[10px] font-black animate-scaleIn">
          ✓
        </span>
      )}
    </div>
  );
}
