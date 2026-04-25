// Flor — line icons in dorado / borgona style
// All 24x24, stroke-based, hand-drawn-feel

const Icon = ({ children, size = 22, stroke = 'currentColor', fill = 'none', ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const IconCastle = (p) => (
  <Icon {...p}>
    <path d="M3 21V11l2-2v3l3-3v3l4-4 4 4v-3l3 3V9l2 2v10z"/>
    <path d="M11 21v-5h2v5"/>
    <path d="M5 9V5M19 9V5M12 4V2"/>
    <circle cx="12" cy="6.5" r="0.5" fill={p.stroke || 'currentColor'}/>
  </Icon>
);

const IconCoaster = (p) => (
  <Icon {...p}>
    <path d="M2 18C5 18 5 10 9 10s4 8 7 8 3-12 6-12"/>
    <circle cx="6" cy="20" r="1.5"/>
    <circle cx="18" cy="20" r="1.5"/>
    <path d="M2 20h20"/>
  </Icon>
);

const IconEiffel = (p) => (
  <Icon {...p}>
    <path d="M12 2L8 22M12 2l4 20"/>
    <path d="M9.5 11h5"/>
    <path d="M8.5 16h7"/>
    <path d="M7.5 21h9"/>
    <path d="M11 6h2"/>
  </Icon>
);

const IconWaves = (p) => (
  <Icon {...p}>
    <path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
    <path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
    <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
  </Icon>
);

const IconStar = (p) => (
  <Icon {...p}>
    <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z"/>
  </Icon>
);

const IconHeart = (p) => (
  <Icon {...p}>
    <path d="M20.84 4.6a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </Icon>
);

const IconSuitcase = (p) => (
  <Icon {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2"/>
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>
    <path d="M3 13h18"/>
  </Icon>
);

const IconTicket = (p) => (
  <Icon {...p}>
    <path d="M3 8a2 2 0 002-2h14a2 2 0 002 2v3a2 2 0 000 4v3a2 2 0 00-2 2H5a2 2 0 00-2-2v-3a2 2 0 000-4z"/>
    <path d="M9 6v12" strokeDasharray="2 2"/>
  </Icon>
);

const IconHotel = (p) => (
  <Icon {...p}>
    <rect x="3" y="6" width="18" height="14" rx="1"/>
    <path d="M3 11h18"/>
    <path d="M7 11V8M11 11V8M15 11V8M19 11V8"/>
    <path d="M7 16h2M11 16h2M15 16h2"/>
    <path d="M3 20V4M21 20V4"/>
  </Icon>
);

const IconCalendar = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M3 10h18"/>
    <path d="M8 3v4M16 3v4"/>
    <circle cx="8" cy="15" r="1" fill={p.stroke || 'currentColor'}/>
    <circle cx="12" cy="15" r="1" fill={p.stroke || 'currentColor'}/>
  </Icon>
);

const IconCalendarSoft = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M3 10h18" strokeDasharray="2 2"/>
    <path d="M8 3v4M16 3v4"/>
  </Icon>
);

const IconCloud = (p) => (
  <Icon {...p}>
    <path d="M6 18a4 4 0 010-8 5.5 5.5 0 0110.5-1.5A4 4 0 0118 18z"/>
    <path d="M9 18l-1 3M15 18l-1 3M12 18l-1 3"/>
  </Icon>
);

const IconCheck = (p) => (
  <Icon {...p}>
    <path d="M5 13l4 4L19 7"/>
  </Icon>
);

const IconArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </Icon>
);

const IconArrowLeft = (p) => (
  <Icon {...p}>
    <path d="M19 12H5M11 5l-7 7 7 7"/>
  </Icon>
);

const IconSparkle = ({ size = 16, color = '#C9A961', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
    <path d="M12 0l1.8 8.4L22 12l-8.2 3.6L12 24l-1.8-8.4L2 12l8.2-3.6z"/>
  </svg>
);

const IconInfo = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v.01M12 12v4"/>
  </Icon>
);

const IconWhatsApp = (p) => (
  <Icon {...p}>
    <path d="M3 21l1.65-3.8a9 9 0 113.4 3.4L3 21z"/>
    <path d="M9 10c.5 2 2 3.5 4 4l1.5-1.5c.3-.3.7-.4 1-.2l2 .8c.4.2.6.6.5 1l-.3 1.4c-.1.4-.5.7-.9.7-3.5-.1-7.4-3.9-7.5-7.5 0-.4.3-.8.7-.9l1.4-.3c.4-.1.8.1 1 .5l.8 2c.2.3.1.7-.2 1z" strokeWidth="1.2"/>
  </Icon>
);

const IconUser = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>
  </Icon>
);

const IconChild = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="6" r="3"/>
    <path d="M9 13a3 3 0 016 0v3l1 5h-2l-.5-3h-3l-.5 3h-2l1-5z"/>
  </Icon>
);

const IconChevron = (p) => (
  <Icon {...p}>
    <path d="M9 6l6 6-6 6"/>
  </Icon>
);

const IconPlus = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14"/>
  </Icon>
);

const IconMinus = (p) => (
  <Icon {...p}>
    <path d="M5 12h14"/>
  </Icon>
);

const IconLeaf = (p) => (
  <Icon {...p}>
    <path d="M11 20A7 7 0 014 13V8a8 8 0 0116 0v5a7 7 0 01-7 7z"/>
    <path d="M12 4v16"/>
  </Icon>
);

const IconDiamond = (p) => (
  <Icon {...p}>
    <path d="M12 2l4 6-4 14-4-14z"/>
    <path d="M3 8h18"/>
    <path d="M8 8L4 8M16 8l4 0"/>
  </Icon>
);

const IconScale = (p) => (
  <Icon {...p}>
    <path d="M5 7h14"/>
    <path d="M5 7l-2 5h4z"/>
    <path d="M19 7l-2 5h4z"/>
    <path d="M12 4v16"/>
    <path d="M8 20h8"/>
  </Icon>
);

Object.assign(window, {
  IconCastle, IconCoaster, IconEiffel, IconWaves, IconStar, IconHeart,
  IconSuitcase, IconTicket, IconHotel, IconCalendar, IconCalendarSoft,
  IconCloud, IconCheck, IconArrowRight, IconArrowLeft, IconSparkle,
  IconInfo, IconWhatsApp, IconUser, IconChild, IconChevron, IconPlus,
  IconMinus, IconLeaf, IconDiamond, IconScale,
});
