'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';
import BlobDecoration from './BlobDecoration';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden px-[5vw] py-20 sm:py-28">
      <BlobDecoration color="primary" className="left-1/2 top-0 h-64 w-64 -translate-x-1/2" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
          Ready to launch a page that converts?
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          Pick your package and we&apos;ll have you live in as little as 5 days.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-lt sm:w-auto"
          >
            See Pricing
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
