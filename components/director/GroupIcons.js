// Small 16x16 outline icons used inside .skill-group-label rows on the
// Enterprise Services and Small Business Services director pages. Each one
// corresponds 1:1 to an icon shape reused (verbatim) many times across the
// source HTML files' skill-card detail groups.
const base = {
  className: 'group-icon',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

export const IconCylinder = () => (
  <svg {...base}>
    <path d="M8 2C5 2 2.5 2.8 2.5 4S5 6 8 6s5.5-.8 5.5-2S11 2 8 2Z" />
    <path d="M2.5 4v8c0 1.2 2.46 2 5.5 2s5.5-.8 5.5-2V4" />
    <path d="M2.5 8c0 1.2 2.46 2 5.5 2s5.5-.8 5.5-2" />
  </svg>
);

export const IconDownload = () => (
  <svg {...base}>
    <path d="M8 2v7" />
    <path d="M5 6.3L8 9.3L11 6.3" />
    <path d="M2.5 10.2V12c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-1.8" />
  </svg>
);

export const IconTriNetwork = () => (
  <svg {...base}>
    <circle cx="3.2" cy="3.6" r="1.5" />
    <circle cx="12.8" cy="3.6" r="1.5" />
    <circle cx="8" cy="12.4" r="1.5" />
    <path d="M4.5 4.4L7 11M11.5 4.4L9 11M4.7 3.6H11.3" />
  </svg>
);

export const IconHouse = () => (
  <svg {...base}>
    <path d="M2 14V6.2L8 2l6 4.2V14" />
    <path d="M2 14h12" />
    <path d="M6 14V9h4v5" />
  </svg>
);

export const IconWave = () => (
  <svg {...base}>
    <path d="M1 8.5h2.6l1.5-4.3 2.6 8 1.6-5.6 1.1 1.9H15" />
  </svg>
);

export const IconShieldCheck = () => (
  <svg {...base}>
    <path d="M8 1.6l5.2 1.9v3.8c0 3.8-2.2 6.1-5.2 6.7-3-.6-5.2-2.9-5.2-6.7V3.5Z" />
    <path d="M5.4 8.1l1.7 1.7 3.1-3.3" />
  </svg>
);

export const IconDoubleChevron = () => (
  <svg {...base}>
    <path d="M5.6 3.4L2 8l3.6 4.6" />
    <path d="M10.4 3.4L14 8l-3.6 4.6" />
  </svg>
);

export const IconGauge = () => (
  <svg {...base}>
    <path d="M2 12.5a6 6 0 0112 0" />
    <path d="M8 12.5L11 7.3" />
    <circle cx="8" cy="12.5" r="1" />
  </svg>
);

export const IconDashedSquare = () => (
  <svg {...base}>
    <rect x="4.5" y="4.5" width="7" height="7" rx="1" />
    <path d="M6.7 4.5V1.8M9.3 4.5V1.8M6.7 14.2v-2.7M9.3 14.2v-2.7M4.5 6.7H1.8M4.5 9.3H1.8M14.2 6.7h-2.7M14.2 9.3h-2.7" />
  </svg>
);

export const IconHub = () => (
  <svg {...base}>
    <circle cx="4" cy="3" r="1.5" />
    <circle cx="4" cy="13" r="1.5" />
    <circle cx="12" cy="8.5" r="1.5" />
    <path d="M4 4.5V11.5" />
    <path d="M4 6.2c0 2 1.8 2.7 3.8 3.1L10.6 9" />
  </svg>
);

export const IconBell = () => (
  <svg {...base}>
    <path d="M6.3 1.5h3.4" />
    <path d="M6.9 1.5v3.6L3.5 12c-.5 1.1.3 2.5 1.6 2.5h5.8c1.3 0 2.1-1.4 1.6-2.5L9.1 5.1V1.5" />
    <path d="M5.3 9.8h5.4" />
  </svg>
);

export const IconRefresh = () => (
  <svg {...base}>
    <path d="M13 4.6A5.6 5.6 0 003 6.3" />
    <path d="M3 3.8v3h3" />
    <path d="M13 11.4A5.6 5.6 0 013 9.7" />
    <path d="M13 12.2v-3h-3" />
  </svg>
);
