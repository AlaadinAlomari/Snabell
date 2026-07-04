'use client';

import { Layers, Palette, Zap, RefreshCw, LifeBuoy, TrendingUp, type LucideIcon } from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, LucideIcon> = {
  Layers,
  Palette,
  Zap,
  RefreshCw,
  LifeBuoy,
  TrendingUp,
};

function FeatureCard({ title, description, icon, size }: (typeof FEATURES)[number]) {
  const { ref, className } = useReveal<HTMLDivElement>();
  const Icon = ICONS[icon];
  const isLarge = size === 'lg';

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center rounded-2xl border border-line bg-card-bg p-6 shadow-sm transition-shadow hover:shadow-md ${
        isLarge ? 'sm:col-span-2 lg:row-span-2 lg:p-8' : ''
      } ${className}`}
    >
      <div
        className={`flex items-center justify-center rounded-xl bg-primary/5 text-primary ${
          isLarge ? 'h-14 w-14' : 'h-11 w-11'
        }`}
      >
        <Icon size={isLarge ? 26 : 22} />
      </div>
      <h3
        className={`mt-4 font-display font-semibold tracking-[-0.02em] text-ink ${
          isLarge ? 'text-2xl' : 'text-lg'
        }`}
      >
        {title}
      </h3>
      <p className={`mt-2 leading-relaxed text-ink-soft ${isLarge ? 'text-base' : 'text-sm'}`}>
        {description}
      </p>
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
            Every plan is built around what actually moves the needle for your business.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[10rem]">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
