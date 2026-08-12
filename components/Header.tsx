"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";
import { Container, PrimaryButton } from "./ui";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 overflow-hidden border-b border-line/40 bg-ink/95 backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 180% at 6% 0%, rgba(33,102,240,0.26), transparent 65%), radial-gradient(45% 160% at 100% 0%, rgba(55,211,240,0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 sm:py-4 lg:py-4">
        <Link href="/" className="focus-ring shrink-0 justify-self-start rounded-lg" aria-label="Buy Best IPTV — Home">
          <Logo className="h-16 w-auto sm:h-20 lg:h-24" priority />
        </Link>

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border border-brand-400/40 bg-brand-500/10 text-ice"
                    : "border border-transparent text-mist hover:text-ice"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <div className="hidden lg:block">
            <PrimaryButton href="/pricing" className="px-5 py-2.5 text-sm">
              View Pricing
            </PrimaryButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-ice lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`relative overflow-hidden border-t border-line/40 bg-ink-soft transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`focus-ring rounded-lg px-3 py-3 text-base font-medium ${
                  active
                    ? "border border-brand-400/40 bg-brand-500/10 text-ice"
                    : "border border-transparent text-mist hover:bg-surface hover:text-ice"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <PrimaryButton href="/pricing" className="mt-2 w-full">
            View Pricing
          </PrimaryButton>
        </Container>
      </div>
    </header>
  );
}
