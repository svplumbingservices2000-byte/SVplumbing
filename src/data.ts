export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  basePrice: string;
  duration: string;
  iconName: string;
}

export const CATEGORIES = [
  "All Services",
  "General & Inspection",
  "Bathroom & Kitchen",
  "Toilets & Drains",
  "Appliances & Geysers",
  "Pipes, Tanks & Pumps",
  "Commercial & Emergency"
];

export const SERVICE_LIST: ServiceItem[] = [
  // General & Inspection
  {
    id: "s1",
    name: "General Plumbing Works",
    category: "General & Inspection",
    description: "Complete household plumbing diagnostics, routine tune-ups, and custom repair works.",
    basePrice: "₹199 onwards",
    duration: "30 - 90 mins",
    iconName: "Wrench"
  },
  {
    id: "s30",
    name: "Plumbing Inspection and Maintenance Services",
    category: "General & Inspection",
    description: "Full inspection of joints, valves, pressure levels, and pipeline health to prevent future emergencies.",
    basePrice: "₹499 fixed",
    duration: "45 - 60 mins",
    iconName: "ClipboardCheck"
  },
  {
    id: "s25",
    name: "Water Pressure Problem Solutions",
    category: "General & Inspection",
    description: "Repair and configuration of pressure booster pumps, pressure release valves, and clearing air-locks.",
    basePrice: "₹349 onwards",
    duration: "1 - 2 hours",
    iconName: "Gauge"
  },
  {
    id: "s5",
    name: "Leakage Detection and Repair",
    category: "General & Inspection",
    description: "High-precision acoustic and visual tracking of hidden leakages in walls or floors and instant sealing.",
    basePrice: "₹299 onwards",
    duration: "1 - 3 hours",
    iconName: "Droplets"
  },

  // Bathroom & Kitchen
  {
    id: "s3",
    name: "Bathroom and Kitchen Plumbing",
    category: "Bathroom & Kitchen",
    description: "Dedicated fitting, plumbing layout planning, and fixtures installation for bathrooms and kitchens.",
    basePrice: "₹599 onwards",
    duration: "Flexible",
    iconName: "Bath"
  },
  {
    id: "s4",
    name: "Tap and Faucet Installation & Repairs",
    category: "Bathroom & Kitchen",
    description: "Repair of dripping taps or installation of luxury modern faucets, sink mixers, and health faucets.",
    basePrice: "₹149 onwards",
    duration: "20 - 40 mins",
    iconName: "Droplet"
  },
  {
    id: "s24",
    name: "Wash Basin Installation and Repairs",
    category: "Bathroom & Kitchen",
    description: "Wall-mount or table-top wash basin installation, pedestal setup, and waste-coupling repair.",
    basePrice: "₹399 onwards",
    duration: "1 - 2 hours",
    iconName: "SquareDot"
  },
  {
    id: "s7",
    name: "Sink Installation and Repairs",
    category: "Bathroom & Kitchen",
    description: "Granite, stainless steel, or ceramic sink installation in kitchens with proper drainage sealing.",
    basePrice: "₹499 onwards",
    duration: "1 - 2 hours",
    iconName: "Grid"
  },
  {
    id: "s29",
    name: "Kitchen Sink and Drain Line Works",
    category: "Bathroom & Kitchen",
    description: "Clearing waste pipe blockages, installing grease trap filters, and upgrading under-sink pipelines.",
    basePrice: "₹299 onwards",
    duration: "30 - 60 mins",
    iconName: "ChefHat"
  },
  {
    id: "s28",
    name: "Bathroom Accessories Installation",
    category: "Bathroom & Kitchen",
    description: "Sleek mounting of towel rods, mirror cabinets, soap holders, toilet paper stands, and shower glass.",
    basePrice: "₹199 onwards",
    duration: "30 - 90 mins",
    iconName: "Layers"
  },
  {
    id: "s23",
    name: "Sanitary Fittings Installation",
    category: "Bathroom & Kitchen",
    description: "High-quality fitment of wall mixers, health faucets, divertors, and luxury brand bath fittings.",
    basePrice: "₹349 onwards",
    duration: "1 - 2 hours",
    iconName: "Sparkles"
  },

  // Toilets & Drains
  {
    id: "s8",
    name: "Toilet Installation and Maintenance",
    category: "Toilets & Drains",
    description: "Western commode or Indian style toilet seat installation, flushing system repairs, and wax ring replacement.",
    basePrice: "₹799 onwards",
    duration: "2 - 3 hours",
    iconName: "Activity"
  },
  {
    id: "s6",
    name: "Drain Cleaning and Blockage Removal",
    category: "Toilets & Drains",
    description: "Removal of organic hair, grease, or heavy debris blocks from floor traps, sinks, and primary drainage lines.",
    basePrice: "₹299 onwards",
    duration: "30 - 60 mins",
    iconName: "Trash2"
  },
  {
    id: "s15",
    name: "Sewage and Drainage Solutions",
    category: "Toilets & Drains",
    description: "Laying main sewer pipes, septic tank connection alignments, and commercial heavy drainage repair.",
    basePrice: "₹999 onwards",
    duration: "Flexible",
    iconName: "ArrowDownToLine"
  },
  {
    id: "s27",
    name: "Rainwater Drainage Solutions",
    category: "Toilets & Drains",
    description: "Installation of rooftop rainwater pipes, grating filters, and connection to rainwater harvesting pits.",
    basePrice: "₹599 onwards",
    duration: "Flexible",
    iconName: "CloudRain"
  },

  // Appliances & Geysers
  {
    id: "s13",
    name: "Shower and Geyser Installation",
    category: "Appliances & Geysers",
    description: "Secure mounting of electric/gas geysers, shower arm adjustments, and hot-cold water line split setting.",
    basePrice: "₹499 onwards",
    duration: "1 - 2 hours",
    iconName: "Flame"
  },
  {
    id: "s14",
    name: "Water Heater Installation and Repairs",
    category: "Appliances & Geysers",
    description: "Troubleshooting geyser heating issues, replacing thermostats, coil replacement, and fixing leakage.",
    basePrice: "₹399 onwards",
    duration: "1 - 2 hours",
    iconName: "Zap"
  },

  // Pipes, Tanks & Pumps
  {
    id: "s2",
    name: "Water Pipeline Installation and Repair",
    category: "Pipes, Tanks & Pumps",
    description: "New pipeline construction or repair of burst, rusted, or scaled internal and external pipelines.",
    basePrice: "₹399 onwards",
    duration: "1 - 4 hours",
    iconName: "Waypoints"
  },
  {
    id: "s9",
    name: "Water Tank Installation and Cleaning",
    category: "Pipes, Tanks & Pumps",
    description: "Professional cleaning of overhead water tanks (sludge removal, high pressure washing, and disinfection).",
    basePrice: "₹699 onwards",
    duration: "2 - 3 hours",
    iconName: "Database"
  },
  {
    id: "s10",
    name: "Borewell and Motor Pump Connections",
    category: "Pipes, Tanks & Pumps",
    description: "Wiring and plumbing connections for submersible pumps, monoblock pumps, and automatic water controllers.",
    basePrice: "₹899 onwards",
    duration: "2 - 4 hours",
    iconName: "ShieldAlert"
  },
  {
    id: "s11",
    name: "Overhead Tank Plumbing Works",
    category: "Pipes, Tanks & Pumps",
    description: "Connecting water tanks to multi-story buildings, fixing automatic overflow controllers, and float valve setup.",
    basePrice: "₹499 onwards",
    duration: "1 - 3 hours",
    iconName: "Upload"
  },
  {
    id: "s12",
    name: "Pipe Fitting and Replacement",
    category: "Pipes, Tanks & Pumps",
    description: "Precision thread joints, elbow fittings, Tee couplings, and valve repairs for multi-room distributions.",
    basePrice: "₹249 onwards",
    duration: "1 - 2 hours",
    iconName: "Hammer"
  },
  {
    id: "s16",
    name: "PVC, CPVC, and GI Pipe Works",
    category: "Pipes, Tanks & Pumps",
    description: "Sleek plumbing works using food-grade CPVC for hot water, PVC for cold drainage, or heavy-duty iron (GI) pipes.",
    basePrice: "₹349 onwards",
    duration: "Flexible",
    iconName: "CheckSquare"
  },
  {
    id: "s26",
    name: "Underground Pipeline Works",
    category: "Pipes, Tanks & Pumps",
    description: "Trench excavation, heavy-duty pipe laying, and high-strength joint alignment for fresh water inlets.",
    basePrice: "₹1,499 onwards",
    duration: "Flexible",
    iconName: "Disc"
  },

  // Commercial & Emergency
  {
    id: "s18",
    name: "Residential Plumbing Services",
    category: "Commercial & Emergency",
    description: "Comprehensive home services tailored for independent houses, villas, and residential complexes in Hyderabad.",
    basePrice: "₹199 onwards",
    duration: "Flexible",
    iconName: "Home"
  },
  {
    id: "s17",
    name: "Commercial Plumbing Services",
    category: "Commercial & Emergency",
    description: "Heavy-duty plumbing infrastructure setup, kitchen grease interceptors, and pipeline layout designs.",
    basePrice: "₹1,199 onwards",
    duration: "Flexible",
    iconName: "Building2"
  },
  {
    id: "s19",
    name: "Emergency Plumbing Services",
    category: "Commercial & Emergency",
    description: "24/7 priority response for critical pipeline bursts, severe leakages, sewage overflows, and pump failures.",
    basePrice: "₹499 booking",
    duration: "Immediate",
    iconName: "PhoneCall"
  },
  {
    id: "s20",
    name: "Apartment Plumbing Maintenance",
    category: "Commercial & Emergency",
    description: "Contract-based routine audits, tank cleaning, and rapid troubleshooting for entire gated societies.",
    basePrice: "On Quote",
    duration: "Recurring",
    iconName: "Building"
  },
  {
    id: "s21",
    name: "Office Plumbing Maintenance",
    category: "Commercial & Emergency",
    description: "Corporate bathroom fitting checks, water cooler connections, pantry plumbing, and regular inspections.",
    basePrice: "On Quote",
    duration: "Recurring",
    iconName: "Briefcase"
  },
  {
    id: "s22",
    name: "Renovation and Remodeling Plumbing Works",
    category: "Commercial & Emergency",
    description: "Full bathroom remodeling, converting traditional bathrooms to premium wall-hung concealed structures.",
    basePrice: "On Quote",
    duration: "Flexible",
    iconName: "RefreshCw"
  }
];

export interface BookingRequest {
  id: string;
  customerName: string;
  customerPhone: string;
  address: string;
  colony: string;
  selectedServices: string[];
  notes: string;
  status: "Pending" | "Confirmed" | "Completed";
  date: string;
  timeSlot: string;
}

export const HYDERABAD_COLONIES = [
  "Vijayapuri Colony",
  "Mohan Nagar",
  "Srinagar Colony",
  "Kothapet",
  "Dilsukhnagar",
  "Saroornagar",
  "Chaitanyapuri",
  "Nagole",
  "L.B. Nagar",
  "Other Area (Hyderabad)"
];
