'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { startCheckout } from '@/lib/checkout';
import BlobDecoration from './BlobDecoration';

export default function Hero() {
  const [loading, setLoading] = useState(false);

  async function handleBuyNow() {
    setLoading(true);
    const redirected = await startCheckout('starter');
    if (!redirected) setLoading(false);
  }

  return (
    <section className="relative overflow-hidden px-[5vw] pb-20 pt-16 sm:pb-28 sm:pt-24">
      <BlobDecoration color="primary" className="-left-32 -top-32 h-72 w-72 sm:h-96 sm:w-96" />
      <BlobDecoration color="accent" className="-right-24 top-24 h-56 w-56 sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-line bg-bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          Landing pages, done fast
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl">
          Launch a landing page that actually converts — starting at $97.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-ink-soft sm:text-lg">
          Choose your package, tell us about your business, and get a custom-built landing page in
          as little as 5 days. No agencies. No guesswork. No bloated retainers.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-lt sm:w-auto"
          >
            See Pricing
            <ArrowRight size={16} />
          </a>
          <button
            type="button"
            disabled={loading}
            onClick={handleBuyNow}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {loading ? 'Redirecting...' : 'Buy Now — $97'}
          </button>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-line bg-card-bg shadow-md">
            <div className="flex items-center gap-2 border-b border-line bg-bg-soft px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
              <div className="ml-4 h-6 flex-1 rounded-md bg-bg" />
            </div>
            <div className="space-y-4 p-8 text-left">
              <div className="h-4 w-1/3 rounded-full bg-primary/15" />
              <div className="h-8 w-2/3 rounded-full bg-ink/10" />
              <div className="h-3 w-full rounded-full bg-line" />
              <div className="h-3 w-4/5 rounded-full bg-line" />
              <div className="mt-6 flex gap-3">
                <div className="h-10 w-32 rounded-full bg-primary/80" />
                <div className="h-10 w-32 rounded-full border border-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
