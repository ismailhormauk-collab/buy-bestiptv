import type { Feature } from "@/lib/features";
import { featureIconMap } from "./icons";

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = featureIconMap[feature.icon];
  return (
    <div className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-glow/20 text-brand-300">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>
      <h3 className="relative mt-5 font-display text-lg font-semibold text-ice">{feature.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-mist">{feature.description}</p>
    </div>
  );
}
