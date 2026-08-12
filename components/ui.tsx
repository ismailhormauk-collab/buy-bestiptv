import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
}) {
  const Heading = as;
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className={`text-base leading-relaxed text-mist sm:text-lg ${align === "center" ? "max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(33,102,240,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(33,102,240,0.75)] active:translate-y-0 ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-sm font-semibold text-ice backdrop-blur transition-colors duration-200 hover:border-brand-400/50 hover:bg-surface-hi ${className}`}
    >
      {children}
    </Link>
  );
}

export function GlassCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`glass rounded-2xl p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function Divider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" aria-hidden="true" />;
}
