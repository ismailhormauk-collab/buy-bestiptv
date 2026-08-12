import Link from "next/link";
import type { SVGProps } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Logo";
import {
  TelegramIcon,
  WhatsAppIcon,
  HomeIcon,
  CrownIcon,
  FavoritesIcon,
  InstallIcon,
  QuestionIcon,
  DocumentIcon,
  MailIcon,
  MapIcon,
  SupportIcon,
  ShieldIcon,
  ZapIcon,
  GlobeIcon,
  ParentalIcon,
} from "./icons";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const siteIconMap: Record<string, IconComponent> = {
  "/": HomeIcon,
  "/pricing": CrownIcon,
  "/features": FavoritesIcon,
  "/installation": InstallIcon,
  "/faq": QuestionIcon,
  "/blog": DocumentIcon,
  "/contact": MailIcon,
};

const resourceLinks: { label: string; href: string; icon: IconComponent }[] = [
  { label: "FAQ", href: "/faq", icon: QuestionIcon },
  { label: "Blog", href: "/blog", icon: DocumentIcon },
  { label: "Installation Guides", href: "/installation", icon: MapIcon },
  { label: "Support", href: "/contact", icon: SupportIcon },
  { label: "Privacy Policy", href: "/faq#legal", icon: ShieldIcon },
  { label: "Terms of Service", href: "/faq#legal", icon: DocumentIcon },
];

const trustBadges: { label: string; icon: IconComponent }[] = [
  { label: "Ultra HD / 4K", icon: ZapIcon },
  { label: "Worldwide Access", icon: GlobeIcon },
  { label: "Secure & Private", icon: ParentalIcon },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative pb-3 font-display text-sm font-semibold uppercase tracking-wide text-ice">
      {children}
      <span
        className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-400 to-cyan-glow"
        aria-hidden="true"
      />
    </h3>
  );
}

function FooterLink({ href, icon: Icon, children }: { href: string; icon: IconComponent; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="focus-ring group flex items-center gap-2.5 rounded-lg py-0.5 text-sm text-mist transition-colors hover:text-ice"
    >
      <Icon className="h-4 w-4 shrink-0 text-mist-dim transition-colors group-hover:text-brand-300" />
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line/40 bg-ink-soft">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 120% at 10% 0%, rgba(33,102,240,0.14), transparent 65%), radial-gradient(40% 100% at 100% 100%, rgba(55,211,240,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <Link href="/" className="focus-ring inline-block w-fit rounded-lg" aria-label="Buy Best IPTV — Home">
            <Logo
              className="h-20 w-auto drop-shadow-[0_0_26px_rgba(70,140,255,0.35)] sm:h-24"
              priority
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            Premium IPTV player software for managing your own playlists, EPG guides and devices —
            built for a clean, modern streaming setup.
          </p>
          <div className="flex items-center gap-4 pt-1">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="focus-ring inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-400/30 bg-emerald-500/5 text-emerald-400 shadow-[0_0_18px_-4px_rgba(16,185,129,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:shadow-[0_0_26px_-2px_rgba(16,185,129,0.8)]"
            >
              <WhatsAppIcon className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.contact.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on Telegram"
              className="focus-ring inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-400/30 bg-brand-500/5 text-brand-300 shadow-[0_0_18px_-4px_rgba(33,102,240,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400/70 hover:shadow-[0_0_26px_-2px_rgba(33,102,240,0.8)]"
            >
              <TelegramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-10 lg:contents">
          <nav aria-label="Site" className="flex flex-col gap-3">
            <ColumnHeading>Site</ColumnHeading>
            {navItems.map((item) => (
              <FooterLink key={item.href} href={item.href} icon={siteIconMap[item.href] ?? HomeIcon}>
                {item.label}
              </FooterLink>
            ))}
          </nav>

          <nav aria-label="Resources" className="flex flex-col gap-3">
            <ColumnHeading>Resources</ColumnHeading>
            {resourceLinks.map((item) => (
              <FooterLink key={item.label} href={item.href} icon={item.icon}>
                {item.label}
              </FooterLink>
            ))}
          </nav>
        </div>
      </Container>

      <Container>
        <div className="divider-glow" aria-hidden="true" />
      </Container>

      <Container className="flex flex-col gap-5 py-6 text-xs text-mist-dim sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <p>
            © {year} <strong className="font-semibold text-ice">{siteConfig.name}</strong>. All rights
            reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed text-mist-dim/80">
            {siteConfig.name} provides IPTV player software and setup support only. We do not supply
            TV channels, movies or copyrighted broadcasts — you are responsible for using your own
            legally licensed playlists and content sources.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {trustBadges.map((badge, index) => (
            <div key={badge.label} className="flex items-center gap-3">
              {index > 0 ? <span className="hidden h-3 w-px bg-line/70 sm:inline-block" aria-hidden="true" /> : null}
              <span className="inline-flex items-center gap-1.5 text-mist">
                <badge.icon className="h-3.5 w-3.5 text-brand-300" />
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
