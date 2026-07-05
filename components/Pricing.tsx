'use client';

import { Fragment, useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { ALL_FEATURES, CONTACT_EMAIL, PACKAGES, type PackageId } from '@/lib/constants';
import { startCheckout } from '@/lib/checkout';
import { useReveal } from '@/hooks/useReveal';

function useTierCheckout(tier: PackageId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    setError(false);
    const redirected = await startCheckout(tier);
    if (!redirected) {
      setLoading(false);
      setError(true);
    }
  }

  return { loading, error, handleCheckout };
}

function PlanButton({ pkg }: { pkg: (typeof PACKAGES)[number] }) {
  const { loading, error, handleCheckout } = useTierCheckout(pkg.id);

  return (
    <div>
      <button
        type="button"
        disabled={loading}
        onClick={handleCheckout}
        className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${
          pkg.recommended
            ? 'bg-accent text-white hover:bg-accent-lt'
            : 'bg-primary text-white hover:bg-primary-lt'
        }`}
      >
        {loading ? 'Redirecting...' : pkg.ctaLabel}
      </button>
      {error && (
        <p className="mt-2 text-xs text-accent">
          Something went wrong. Please try again or email {CONTACT_EMAIL}.
        </p>
      )}
    </div>
  );
}

function PricingCard({ pkg }: { pkg: (typeof PACKAGES)[number] }) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-3xl border bg-card-bg p-8 shadow-sm transition-all ${
        pkg.recommended ? 'border-accent shadow-lg' : 'border-line hover:shadow-md'
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
        {pkg.includedFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PlanButton pkg={pkg} />
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-line lg:block">
      <div className="grid grid-cols-[1.4fr,1fr,1fr,1fr]">
        <div className="border-b border-r border-line bg-bg-soft" />
        {PACKAGES.map((pkg, i) => (
          <div
            key={pkg.id}
            className={`border-b border-line p-6 text-center ${
              i < PACKAGES.length - 1 ? 'border-r' : ''
            } ${pkg.recommended ? 'bg-accent/5' : 'bg-bg-soft'}`}
          >
            {pkg.recommended && (
              <span className="mb-2 inline-block rounded-full bg-accent px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
              {pkg.name}
            </h3>
            <p className="mt-1 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
              ${pkg.price}
              <span className="text-sm font-medium text-ink-soft">/mo</span>
            </p>
            <div className="mt-4">
              <PlanButton pkg={pkg} />
            </div>
          </div>
        ))}

        {ALL_FEATURES.map((feature, rowIndex) => {
          const isLastRow = rowIndex === ALL_FEATURES.length - 1;
          return (
            <Fragment key={feature}>
              <div
                className={`border-r border-line p-4 text-sm text-ink-soft ${
                  isLastRow ? '' : 'border-b'
                }`}
              >
                {feature}
              </div>
              {PACKAGES.map((pkg, i) => (
                <div
                  key={`${feature}-${pkg.id}`}
                  className={`flex items-center justify-center p-4 ${
                    i < PACKAGES.length - 1 ? 'border-r' : ''
                  } ${isLastRow ? '' : 'border-b'} ${
                    pkg.recommended ? 'bg-accent/5' : ''
                  } border-line`}
                >
                  {pkg.includedFeatures.includes(feature) ? (
                    <Check size={18} className="text-primary" />
                  ) : (
                    <Minus size={18} className="text-line" />
                  )}
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
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

        <div className="mt-14">
          <ComparisonTable />

          <div className="grid grid-cols-1 gap-8 lg:hidden">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
