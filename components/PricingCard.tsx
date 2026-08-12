import type { PricingPlan } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";
import { CheckIcon } from "./icons";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
        plan.popular
          ? "glass-strong border-brand-400/50 shadow-glow"
          : "glass"
      }`}
    >
      {plan.popular ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-glow">
          Most Popular
        </span>
      ) : null}

      <h3 className="font-display text-xl font-semibold text-ice">{plan.duration}</h3>
      <p className="mt-1 text-sm text-mist">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-bold text-ice">{plan.currency}{plan.price}</span>
      </div>
      <p className="mt-1 text-xs font-medium text-mist-dim">{plan.perMonth}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-mist">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`focus-ring mt-7 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          plan.popular
            ? "bg-gradient-to-r from-brand-500 to-cyan-glow text-white shadow-[0_12px_30px_-10px_rgba(33,102,240,0.65)]"
            : "border border-line bg-surface text-ice hover:border-brand-400/50"
        }`}
      >
        Get This Plan
      </a>
    </div>
  );
}
