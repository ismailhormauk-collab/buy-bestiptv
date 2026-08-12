"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { ChatIcon, CloseIcon, TelegramIcon, WhatsAppIcon } from "./icons";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
    >
      <div
        role="menu"
        aria-label="Contact options"
        className={`flex flex-col items-end gap-3 transition-all duration-200 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <a
          role="menuitem"
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pop-in focus-ring glass-strong flex items-center gap-3 rounded-full py-2.5 pl-4 pr-5 text-sm font-medium text-ice shadow-glow transition-colors hover:border-emerald-400/40"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
          WhatsApp
        </a>
        <a
          role="menuitem"
          href={siteConfig.contact.telegramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pop-in focus-ring glass-strong flex items-center gap-3 rounded-full py-2.5 pl-4 pr-5 text-sm font-medium text-ice shadow-glow transition-colors hover:border-brand-400/50"
          style={{ animationDelay: "40ms" }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
            <TelegramIcon className="h-5 w-5" />
          </span>
          Telegram
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="focus-ring pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-glow text-white shadow-[0_14px_34px_-8px_rgba(33,102,240,0.75)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <ChatIcon
            className={`absolute h-6 w-6 transition-all duration-200 ${open ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
          />
          <CloseIcon
            className={`absolute h-6 w-6 transition-all duration-200 ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          />
        </span>
      </button>
    </div>
  );
}
