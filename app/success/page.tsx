import { CheckCircle2, Mail } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_EMAIL_LINK } from '@/lib/constants';

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-[5vw] py-20">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-ink">
          Payment received — thank you!
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          We&apos;ll email you at {CONTACT_EMAIL} within a few hours to kick off your project.
        </p>
        <a
          href={CONTACT_EMAIL_LINK}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-lt"
        >
          <Mail size={16} />
          Email Us
        </a>
      </div>
    </main>
  );
}
