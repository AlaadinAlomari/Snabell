'use client';

import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

function TestimonialCard({ name, role, quote }: (typeof TESTIMONIALS)[number]) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl border border-line bg-card-bg p-6 shadow-sm ${className}`}
    >
      <div className="flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6">
        <p className="font-display text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs text-ink-soft">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bg-soft px-[5vw] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
            Loved by agencies and consultants
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
