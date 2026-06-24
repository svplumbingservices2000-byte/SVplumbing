import React from "react";

interface SVLogoProps {
  className?: string;
  showText?: boolean;
}

export default function SVLogo({ className = "w-24 h-24", showText = true }: SVLogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} id="sv-logo-container">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-md select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="droplet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="pipe-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="30%" stopColor="#cbd5e1" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="valve-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

          {/* Paths for curving text */}
          {/* d description: A semi-circle arc running along the bottom */}
          <path
            id="text-path-main"
            d="M 60,320 A 200,200 0 0,0 440,320"
            fill="none"
          />
          <path
            id="text-path-slogan"
            d="M 110,385 A 160,160 0 0,0 390,385"
            fill="none"
          />
        </defs>

        {/* Outer dark blue circular background */}
        <circle cx="250" cy="250" r="230" fill="#0f1c3f" stroke="#d32f2f" strokeWidth="8" />
        
        {/* Subtle white/silver inner stroke */}
        <circle cx="250" cy="250" r="218" fill="none" stroke="#f1f5f9" strokeWidth="2" opacity="0.4" />

        {/* Droplet above SV */}
        <path
          d="M250,55 C232,85 215,102 215,118 C215,137 230.5,152 250,152 C269.5,152 285,137 285,118 C285,102 268,85 250,55 Z"
          fill="url(#droplet-grad)"
          className="animate-pulse"
        />

        {/* S and V Typography with robust text anchor alignment to look perfect on all screens */}
        <text
          x="240"
          y="250"
          textAnchor="end"
          fill="#ffffff"
          fontSize="165"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          id="sv-logo-s"
        >
          S
        </text>

        <text
          x="248"
          y="250"
          textAnchor="start"
          fill="#d32f2f"
          fontSize="165"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          id="sv-logo-v"
        >
          V
        </text>

        {/* Plumbing Pipeline underneath SV */}
        {/* Horizontal main pipe segment */}
        <rect x="130" y="300" width="240" height="28" rx="2" fill="url(#pipe-grad)" stroke="#1e293b" strokeWidth="1.5" />
        
        {/* Left elbow pipe turning up */}
        <path
          d="M 130,314 C 95,314 85,295 85,260 L 85,250"
          fill="none"
          stroke="url(#pipe-grad)"
          strokeWidth="28"
          strokeLinecap="square"
          id="pipe-left-elbow"
        />
        <path
          d="M 130,314 C 95,314 85,295 85,260 L 85,250"
          fill="none"
          stroke="#1e293b"
          strokeWidth="31"
          strokeLinecap="square"
          opacity="0.1"
          style={{ mixBlendMode: "multiply" }}
        />
        {/* Left flange collar */}
        <rect x="71" y="246" width="28" height="10" fill="#94a3b8" rx="1" stroke="#1e293b" strokeWidth="1" />

        {/* Right elbow pipe turning up */}
        <path
          d="M 370,314 C 405,314 415,295 415,260 L 415,250"
          fill="none"
          stroke="url(#pipe-grad)"
          strokeWidth="28"
          strokeLinecap="square"
          id="pipe-right-elbow"
        />
        <path
          d="M 370,314 C 405,314 415,295 415,260 L 415,250"
          fill="none"
          stroke="#1e293b"
          strokeWidth="31"
          strokeLinecap="square"
          opacity="0.1"
          style={{ mixBlendMode: "multiply" }}
        />
        {/* Right flange collar */}
        <rect x="401" y="246" width="28" height="10" fill="#94a3b8" rx="1" stroke="#1e293b" strokeWidth="1" />

        {/* Pipe joint collars along the pipeline */}
        <rect x="175" y="296" width="16" height="36" fill="#94a3b8" rx="1.5" stroke="#1e293b" strokeWidth="1" />
        <rect x="309" y="296" width="16" height="36" fill="#94a3b8" rx="1.5" stroke="#1e293b" strokeWidth="1" />

        {/* Red Valve Wheel and T-junction in the center */}
        {/* T-junction block */}
        <rect x="233" y="290" width="34" height="36" fill="url(#pipe-grad)" stroke="#1e293b" strokeWidth="1.5" />
        {/* Valve stem */}
        <rect x="244" y="272" width="12" height="20" fill="url(#pipe-grad)" stroke="#1e293b" strokeWidth="1" />
        
        {/* Red turn-valve wheel handle */}
        {/* Outer red ring of the valve */}
        <ellipse cx="250" cy="272" rx="46" ry="12" fill="url(#valve-grad)" stroke="#7f1d1d" strokeWidth="1.5" />
        {/* Spokes on the wheel */}
        <line x1="208" y1="272" x2="292" y2="272" stroke="#7f1d1d" strokeWidth="3" />
        <line x1="250" y1="262" x2="250" y2="282" stroke="#7f1d1d" strokeWidth="3" />
        {/* Center cap of the valve */}
        <ellipse cx="250" cy="272" rx="14" ry="5.5" fill="#f1f5f9" stroke="#7f1d1d" strokeWidth="1" />

        {/* Curving text along the bottom circular path */}
        {showText && (
          <>
            {/* "PLUMBING SERVICES" in white, bold */}
            <text
              fill="#ffffff"
              fontSize="31"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="4"
            >
              <textPath href="#text-path-main" startOffset="50%" textAnchor="middle">
                PLUMBING SERVICES
              </textPath>
            </text>

            {/* Slogan "RELIABLE. PROFESSIONAL. TRUSTED." in red */}
            <text
              fill="#ef4444"
              fontSize="16.5"
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="2.5"
            >
              <textPath href="#text-path-slogan" startOffset="50%" textAnchor="middle">
                RELIABLE. PROFESSIONAL. TRUSTED.
              </textPath>
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
