import { CONTACT_EMAIL_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft px-[5vw] py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="font-display text-lg font-semibold text-ink">Snabell</div>
        <p className="order-3 text-xs text-ink-soft sm:order-none">
          © 2026 Snabell LLC · snabell.com
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:justify-end">
          <a href={CONTACT_EMAIL_LINK} className="text-ink-soft transition-colors hover:text-primary">
            Email Support
          </a>
          <a href={CONTACT_PHONE_LINK} className="text-ink-soft transition-colors hover:text-primary">
            {CONTACT_PHONE}
          </a>
          <a href="/#pricing" className="text-ink-soft transition-colors hover:text-primary">
            Pricing
          </a>
          <a href="/#faq" className="text-ink-soft transition-colors hover:text-primary">
            FAQ
          </a>
          <a href="/privacy" className="text-ink-soft transition-colors hover:text-primary">
            Privacy
          </a>
          <a href="/terms" className="text-ink-soft transition-colors hover:text-primary">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
