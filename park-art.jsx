// Stylized park "imagery" — abstract SVGs (no real branded assets)
// Each is a small landscape illustration in the brand palette

const ParkArtCastle = () => (
  <svg className="park-svg" viewBox="0 0 200 88" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky-castle" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F4D8C5"/>
        <stop offset="1" stopColor="#E8B4A0"/>
      </linearGradient>
    </defs>
    <rect width="200" height="88" fill="url(#sky-castle)"/>
    {/* sun */}
    <circle cx="155" cy="32" r="14" fill="#FAE6CC" opacity="0.6"/>
    <circle cx="155" cy="32" r="9" fill="#F8D5A8"/>
    {/* castle silhouette */}
    <g fill="#7A2E3A">
      <path d="M40 88V52l8-6v-6h6v6l4-4 4 4v-6h6v6l8 6v-2h6v8l8 6v36z"/>
      <path d="M82 88V42l6-4v-4h4v4l3-3 3 3v-4h4v4l3-3 3 3v-4h4v4l6 4v46z"/>
      <path d="M122 88V52l8-6v-6h6v6l4-4 4 4v-6h6v6l8 6v36z"/>
      <rect x="92" y="62" width="8" height="14" rx="4"/>
    </g>
    {/* tower tops */}
    <g fill="#C9A961">
      <path d="M52 40l4-8 4 8z"/>
      <path d="M64 40l4-8 4 8z"/>
      <path d="M93 32l3-6 3 6z"/>
      <path d="M99 32l3-6 3 6z"/>
      <path d="M105 32l3-6 3 6z"/>
      <path d="M134 40l4-8 4 8z"/>
      <path d="M146 40l4-8 4 8z"/>
    </g>
    {/* sparkles */}
    <g fill="#C9A961" opacity="0.7">
      <circle cx="20" cy="20" r="1"/>
      <circle cx="180" cy="14" r="1"/>
      <circle cx="170" cy="50" r="1"/>
      <circle cx="30" cy="40" r="0.8"/>
    </g>
  </svg>
);

const ParkArtCoaster = () => (
  <svg className="park-svg" viewBox="0 0 200 88" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky-coaster" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1F1230"/>
        <stop offset="1" stopColor="#5C2A3A"/>
      </linearGradient>
    </defs>
    <rect width="200" height="88" fill="url(#sky-coaster)"/>
    {/* coaster track */}
    <g fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round">
      <path d="M-10 70 Q30 20 60 50 Q90 80 120 30 Q150 -10 180 50 L210 50"/>
      <path d="M-10 75 Q30 25 60 55 Q90 85 120 35 Q150 -5 180 55 L210 55" opacity="0.5"/>
    </g>
    {/* support pillars */}
    <g stroke="#7A2E3A" strokeWidth="1.5">
      <line x1="20" y1="60" x2="20" y2="88"/>
      <line x1="60" y1="50" x2="60" y2="88"/>
      <line x1="100" y1="55" x2="100" y2="88"/>
      <line x1="140" y1="20" x2="140" y2="88"/>
      <line x1="180" y1="50" x2="180" y2="88"/>
    </g>
    {/* fireworks */}
    <g fill="#FFE099">
      <circle cx="40" cy="22" r="1.5"/>
      <circle cx="36" cy="18" r="1"/>
      <circle cx="44" cy="18" r="1"/>
      <circle cx="36" cy="26" r="1"/>
      <circle cx="44" cy="26" r="1"/>
    </g>
    <g fill="#D4A5A5">
      <circle cx="160" cy="14" r="1.2"/>
      <circle cx="156" cy="10" r="0.8"/>
      <circle cx="164" cy="10" r="0.8"/>
      <circle cx="156" cy="18" r="0.8"/>
      <circle cx="164" cy="18" r="0.8"/>
    </g>
    {/* stars */}
    <g fill="#FAF6F1" opacity="0.6">
      <circle cx="80" cy="14" r="0.8"/>
      <circle cx="120" cy="10" r="0.6"/>
      <circle cx="180" cy="32" r="0.8"/>
      <circle cx="20" cy="16" r="0.6"/>
    </g>
  </svg>
);

const ParkArtEiffel = () => (
  <svg className="park-svg" viewBox="0 0 200 88" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky-eiffel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#E8C9C9"/>
        <stop offset="1" stopColor="#D4A5A5"/>
      </linearGradient>
    </defs>
    <rect width="200" height="88" fill="url(#sky-eiffel)"/>
    {/* moon */}
    <circle cx="40" cy="22" r="10" fill="#FAF6F1" opacity="0.7"/>
    <circle cx="44" cy="20" r="9" fill="url(#sky-eiffel)"/>
    {/* tower */}
    <g stroke="#7A2E3A" strokeWidth="1.5" fill="none" strokeLinejoin="round">
      <path d="M88 88L96 14L104 14L112 88"/>
      <path d="M92 60h16"/>
      <path d="M88 75h24"/>
      <path d="M94 45h12"/>
      <path d="M97 30h6"/>
    </g>
    {/* horizontal cityscape */}
    <g fill="#5C1F2A">
      <rect x="0" y="68" width="20" height="20"/>
      <rect x="22" y="62" width="14" height="26"/>
      <rect x="38" y="70" width="18" height="18"/>
      <rect x="58" y="64" width="12" height="24"/>
      <rect x="120" y="66" width="20" height="22"/>
      <rect x="142" y="60" width="16" height="28"/>
      <rect x="160" y="68" width="22" height="20"/>
      <rect x="184" y="62" width="16" height="26"/>
    </g>
    {/* sparkles around tower */}
    <g fill="#C9A961">
      <circle cx="80" cy="40" r="1"/>
      <circle cx="120" cy="38" r="1"/>
      <circle cx="100" cy="20" r="1"/>
      <circle cx="76" cy="60" r="0.8"/>
      <circle cx="124" cy="58" r="0.8"/>
    </g>
  </svg>
);

const ParkArtWater = () => (
  <svg className="park-svg" viewBox="0 0 200 88" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky-water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FCDDD0"/>
        <stop offset="1" stopColor="#F4B5A0"/>
      </linearGradient>
      <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#7DB8C9"/>
        <stop offset="1" stopColor="#4E89A0"/>
      </linearGradient>
    </defs>
    <rect width="200" height="88" fill="url(#sky-water)"/>
    {/* sun */}
    <circle cx="100" cy="30" r="12" fill="#FAE6CC" opacity="0.7"/>
    <circle cx="100" cy="30" r="8" fill="#F8C8A0"/>
    {/* water slides */}
    <g fill="none" strokeLinecap="round">
      <path d="M30 20 Q40 60 20 88" stroke="#C9A961" strokeWidth="6"/>
      <path d="M30 20 Q40 60 20 88" stroke="#FAE6CC" strokeWidth="2"/>
      <path d="M170 20 Q160 60 180 88" stroke="#7A2E3A" strokeWidth="6"/>
      <path d="M170 20 Q160 60 180 88" stroke="#E8C9C9" strokeWidth="2"/>
      <path d="M70 30 Q90 70 70 88" stroke="#D4A5A5" strokeWidth="5"/>
      <path d="M130 30 Q110 70 130 88" stroke="#D4A5A5" strokeWidth="5"/>
    </g>
    {/* water surface */}
    <rect x="0" y="72" width="200" height="16" fill="url(#water-grad)" opacity="0.7"/>
    {/* waves */}
    <g fill="none" stroke="#FAF6F1" strokeWidth="1" strokeLinecap="round" opacity="0.6">
      <path d="M0 78 Q10 75 20 78 T40 78 T60 78 T80 78 T100 78 T120 78 T140 78 T160 78 T180 78 T200 78"/>
      <path d="M0 84 Q10 81 20 84 T40 84 T60 84 T80 84 T100 84 T120 84 T140 84 T160 84 T180 84 T200 84"/>
    </g>
  </svg>
);

Object.assign(window, { ParkArtCastle, ParkArtCoaster, ParkArtEiffel, ParkArtWater });
