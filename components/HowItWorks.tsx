'use client';

import { HOW_IT_WORKS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

function Step({ step, title, description }: (typeof HOW_IT_WORKS)[number]) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`flex flex-1 flex-col items-center text-center ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-white">
        {step}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-bg-soft px-[5vw] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Four simple steps from checkout to launch.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:gap-6">
          {HOW_IT_WORKS.map((item) => (
            <Step key={item.step} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
