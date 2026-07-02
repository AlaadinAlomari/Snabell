'use client';

import { Zap, Target, Smartphone, Search, BarChart3, LifeBuoy, type LucideIcon } from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, LucideIcon> = {
  Zap,
  Target,
  Smartphone,
  Search,
  BarChart3,
  LifeBuoy,
};

function FeatureCard({ title, description, icon }: (typeof FEATURES)[number]) {
  const { ref, className } = useReveal<HTMLDivElement>();
  const Icon = ICONS[icon];

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-line bg-card-bg p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="px-[5vw] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Every package is built around what actually moves the needle for a launch.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
