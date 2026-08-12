import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function PlaylistIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 6h12M3 12h12M3 18h7" />
      <circle cx="19" cy="16" r="2.5" />
      <path d="M21.5 16V7l-4 1.2" />
    </svg>
  );
}

export function M3uIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9h10M7 13h6M7 17h4" />
    </svg>
  );
}

export function EpgIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 5v14" />
    </svg>
  );
}

export function DevicesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="13" height="9" rx="1.5" />
      <path d="M3 17h13" />
      <rect x="17" y="9" width="4" height="8" rx="1" />
    </svg>
  );
}

export function HdIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 9v6M7 12h3M10 9v6M14 9h2.2a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8H14V9Z" />
    </svg>
  );
}

export function FavoritesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 17.5 5.6 21l1.2-7.1L2 9.2l7.1-1L12 1.8l2.9 6.4 7.1 1-4.8 4.7L18.4 21Z" />
    </svg>
  );
}

export function InterfaceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstallIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="m5.5 5.5 3.2 3.2M18.5 5.5l-3.2 3.2M5.5 18.5l3.2-3.2M18.5 18.5l-3.2-3.2" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function MultiScreenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="11" rx="2" />
      <path d="M8 20h8M12 15v5" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.1 11.1 3.8 3.8 0 0 0 7 18Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5.5c0 4.4 3 7.6 7 9.5 4-1.9 7-5.1 7-9.5V6Z" />
      <path d="m9.2 12 2 2 3.6-4" />
    </svg>
  );
}

export function UpdateIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </svg>
  );
}

export function ParentalIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={22} height={22} fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4.03 8.37 4.03 15c0 2.24.61 4.34 1.67 6.14L3 29l8.06-2.63A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.63 28 15S22.65 3 16.02 3Zm0 21.6a9.5 9.5 0 0 1-4.87-1.34l-.35-.2-4.79 1.56 1.57-4.66-.23-.36A9.55 9.55 0 1 1 16.02 24.6Zm5.27-7.14c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.77 1.16 2.96c.14.19 2 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={22} height={22} fill="currentColor" {...props}>
      <path d="M29 4.6 25.1 27c-.29 1.29-1.06 1.6-2.14.99l-5.9-4.35-2.85 2.74c-.32.32-.58.58-1.19.58l.43-6.03L24.9 9.5c.5-.44-.11-.68-.77-.25L9.8 17.9l-5.83-1.82c-1.27-.4-1.29-1.27.26-1.88L27.4 4.24c1.06-.4 1.98.25 1.6 2.35Z" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8 8 11l4-6 4 6 4-3-1.6 9H5.6L4 8Z" />
      <path d="M6 20h12" />
    </svg>
  );
}

export function QuestionIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.2a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1.2.9-1.2 1.7v.3" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3h7l4 4v14H7Z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 12h6M9.5 15.5h6M9.5 8.5h2" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export const featureIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  playlist: PlaylistIcon,
  m3u: M3uIcon,
  epg: EpgIcon,
  devices: DevicesIcon,
  hd: HdIcon,
  favorites: FavoritesIcon,
  interface: InterfaceIcon,
  install: InstallIcon,
  support: SupportIcon,
  search: SearchIcon,
  multiscreen: MultiScreenIcon,
  cloud: CloudIcon,
  shield: ShieldIcon,
  update: UpdateIcon,
  parental: ParentalIcon,
};
