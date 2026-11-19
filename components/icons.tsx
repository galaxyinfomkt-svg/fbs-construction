import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// Service icons
export function SidingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 9h18M3 13h18M3 17h18" />
    </svg>
  );
}

export function WindowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M4 12h16" />
    </svg>
  );
}

export function DoorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DeckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10h18M3 14h18M6 14v7M18 14v7M4 10l8-6 8 6" />
    </svg>
  );
}

export const serviceIconMap = {
  siding: SidingIcon,
  window: WindowIcon,
  door: DoorIcon,
  deck: DeckIcon,
} as const;

// Remodeling & addition service icons
export function AdditionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V11l6-4 6 4v10" />
      <path d="M3 21h18" />
      <path d="M15 21V6h6v15" />
      <path d="M18 10v5M15.5 12.5h5" />
    </svg>
  );
}

export function InteriorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V5l9-3 9 3v16" />
      <path d="M3 21h18" />
      <path d="M12 21v-7h5v7" />
      <path d="M7 10h3" />
    </svg>
  );
}

export function KitchenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="7" rx="1" />
      <rect x="3" y="14" width="18" height="7" rx="1" />
      <path d="M8 3v7M8 14v7M16 17.5h3" />
    </svg>
  );
}

export function BathIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
      <path d="M6 12V6a2 2 0 0 1 2-2h1" />
      <path d="M11 6h2" />
      <path d="M7 19l-1 2M17 19l1 2" />
    </svg>
  );
}

export function BasementIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v4h14v-4" />
      <rect x="3" y="14" width="18" height="7" rx="1" />
      <path d="M9 17.5h6" />
    </svg>
  );
}

export function SunroomIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9l9-5 9 5" />
      <rect x="5" y="9" width="14" height="12" rx="1" />
      <path d="M12 9v12M5 15h14" />
    </svg>
  );
}

export function PorchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9l10-6 10 6" />
      <path d="M5 9v12M19 9v12M2 21h20" />
      <path d="M9 13h6M9 17h6M12 13v8" />
    </svg>
  );
}

export function DeckRoofIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 8l10-5 10 5" />
      <path d="M5 8v4M19 8v4" />
      <path d="M3 14h18M3 18h18" />
      <path d="M6 18v3M18 18v3" />
    </svg>
  );
}

export const remodelingIconMap = {
  addition: AdditionIcon,
  interior: InteriorIcon,
  kitchen: KitchenIcon,
  bath: BathIcon,
  basement: BasementIcon,
  sunroom: SunroomIcon,
  porch: PorchIcon,
  deckRoof: DeckRoofIcon,
} as const;
