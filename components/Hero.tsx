'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { startCheckout } from '@/lib/checkout';
import BlobDecoration from './BlobDecoration';

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleBuyNow() {
    setLoading(true);
    setError(false);
    const redirected = await startCheckout('starter');
    if (!redirected) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <section className="relative overflow-hidden px-[5vw] pb-20 pt-16 sm:pb-28 sm:pt-20">
      <BlobDecoration color="primary" className="-left-32 -top-32 h-72 w-72 sm:h-96 sm:w-96" />
      <BlobDecoration color="accent" className="-right-24 top-40 h-56 w-56 sm:h-80 sm:w-80" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-line bg-bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            Your business, one platform
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl">
            Run your business on one powerful platform — starting at $97/mo.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-ink-soft sm:text-lg lg:mx-0">
            CRM, funnels, email, and more — all under your brand. Choose your plan, get
            onboarded in 24 hours, and start running your business like a software company.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="/#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-lt sm:w-auto"
            >
              See Plans
              <ArrowRight size={16} />
            </a>
            <button
              type="button"
              disabled={loading}
              onClick={handleBuyNow}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {loading ? 'Redirecting...' : 'Start Starter — $97/mo'}
            </button>
          </div>
          {error && (
            <p className="mt-3 text-xs text-accent">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-3xl border border-line bg-card-bg shadow-md">
            <div className="flex items-center gap-2 border-b border-line bg-bg-soft px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
              <div className="ml-4 h-6 flex-1 rounded-md bg-bg" />
            </div>
            <div className="flex">
              <div className="hidden w-16 flex-col items-center gap-4 border-r border-line bg-bg-soft py-6 sm:flex">
                <div className="h-8 w-8 rounded-lg bg-primary/20" />
                <div className="h-8 w-8 rounded-lg bg-primary/10" />
                <div className="h-8 w-8 rounded-lg bg-primary/10" />
                <div className="h-8 w-8 rounded-lg bg-primary/10" />
              </div>
              <div className="flex-1 space-y-4 p-6 text-left">
                <div className="h-4 w-1/3 rounded-full bg-primary/15" />
                <div className="h-7 w-2/3 rounded-full bg-ink/10" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-bg-soft p-3">
                    <div className="h-3 w-1/2 rounded-full bg-line" />
                    <div className="mt-2 h-5 w-2/3 rounded-full bg-primary/20" />
                  </div>
                  <div className="rounded-xl bg-bg-soft p-3">
                    <div className="h-3 w-1/2 rounded-full bg-line" />
                    <div className="mt-2 h-5 w-2/3 rounded-full bg-accent/30" />
                  </div>
                </div>
                <div className="h-3 w-full rounded-full bg-line" />
                <div className="h-3 w-4/5 rounded-full bg-line" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-line bg-card-bg px-4 py-3 shadow-md sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-xs text-ink-soft">This month</p>
              <p className="font-display text-sm font-semibold text-ink">+38% leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
