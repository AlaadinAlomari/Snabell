import { XCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-[5vw] py-20">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <XCircle size={32} />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-ink">
          Checkout cancelled — no charge was made.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          You can pick a package again whenever you&apos;re ready, or reach out on WhatsApp if you
          have questions first.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#pricing"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-lt sm:w-auto"
          >
            Back to Pricing
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
    </main>
  );
}
