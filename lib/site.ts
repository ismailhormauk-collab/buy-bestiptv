export const siteConfig = {
  name: "Buy Best IPTV",
  shortName: "Buy Best IPTV",
  domain: "buy-bestiptv.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://buy-bestiptv.com",
  tagline: "Premium IPTV player software for your streaming setup",
  description:
    "Buy Best IPTV offers premium IPTV player software with M3U playlist support, EPG guides, multi-device compatibility and dedicated setup support. Software only — bring your own legally licensed content.",
  locale: "en_US",
  contact: {
    whatsappNumber: "+447576599069",
    whatsappHref: "https://wa.me/447576599069",
    telegramHref: "https://t.me/pulseiptv4k",
  },
  social: {
    // Reserved for future profile links.
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Installation", href: "/installation" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function absoluteUrl(path: string) {
  const url = new URL(path, siteConfig.url);
  return url.toString();
}
