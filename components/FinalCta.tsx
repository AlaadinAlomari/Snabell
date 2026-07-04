'use client';

import { useState } from 'react';
import { startCheckout } from '@/lib/checkout';
import BlobDecoration from './BlobDecoration';

export default function FinalCta() {
  const [loading, setLoading] = useState(false);

  async function handleBuyNow() {
    setLoading(true);
    const redirected = await startCheckout('growth');
    if (!redirected) setLoading(false);
  }

  return (
    <section className="relative overflow-hidden px-[5vw] py-20 sm:py-28">
      <BlobDecoration color="primary" className="left-1/2 top-0 h-64 w-64 -translate-x-1/2" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
          Ready to launch your own branded platform?
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          Pick a plan and get onboarded within 24 hours.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#pricing"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-lt sm:w-auto"
          >
            See Plans
          </a>
          <button
            type="button"
            disabled={loading}
            onClick={handleBuyNow}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {loading ? 'Redirecting...' : 'Start Growth — $297/mo'}
          </button>
        </div>
      </div>
    </section>
  );
}
