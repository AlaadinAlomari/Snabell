'use client';

import { useState } from 'react';
import { startCheckout } from '@/lib/checkout';

export default function FinalCta() {
  const [loading, setLoading] = useState(false);

  async function handleBuyNow() {
    setLoading(true);
    const redirected = await startCheckout('growth');
    if (!redirected) setLoading(false);
  }

  return (
    <section className="px-[5vw] py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/40 blur-3xl"
        />

        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            Ready to launch your own branded platform?
          </h2>
          <p className="mt-4 text-base text-white/80">
            Pick a plan and get onboarded within 24 hours.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#pricing"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90 sm:w-auto"
            >
              See Plans
            </a>
            <button
              type="button"
              disabled={loading}
              onClick={handleBuyNow}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {loading ? 'Redirecting...' : 'Start Growth — $297/mo'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
