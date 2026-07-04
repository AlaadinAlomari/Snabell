'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { PACKAGES } from '@/lib/constants';
import { startCheckout } from '@/lib/checkout';
import { useReveal } from '@/hooks/useReveal';

function PricingCard({ pkg }: { pkg: (typeof PACKAGES)[number] }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const redirected = await startCheckout(pkg.id);
    if (!redirected) setLoading(false);
  }

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-3xl border bg-card-bg p-8 shadow-sm transition-all ${
        pkg.recommended
          ? 'border-accent shadow-lg scale-100 sm:scale-105'
          : 'border-line hover:shadow-md'
      } ${className}`}
    >
      {pkg.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
        {pkg.name}
      </h3>
      <p className="mt-2 text-sm text-ink-soft">{pkg.tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">
          ${pkg.price}
        </span>
        <span className="text-sm text-ink-soft">/month</span>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={loading}
        onClick={handleCheckout}
        className={`mt-8 w-full rounded-full px-6 py-3.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${
          pkg.recommended
            ? 'bg-accent text-white hover:bg-accent-lt'
            : 'bg-primary text-white hover:bg-primary-lt'
        }`}
      >
        {loading ? 'Redirecting...' : pkg.ctaLabel}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-[5vw] py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Three plans, billed monthly. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
