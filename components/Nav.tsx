'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-[5vw]">
      <header className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line bg-bg/90 px-5 py-3 shadow-sm backdrop-blur">
        <a href="/" className="font-display text-lg font-bold tracking-tight text-ink">
          Snabell
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/#pricing"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-lt"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-lg p-2 text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-bg px-5 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
