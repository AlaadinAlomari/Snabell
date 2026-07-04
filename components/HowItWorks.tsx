'use client';

import { HOW_IT_WORKS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

function Step({
  step,
  title,
  description,
  isLast,
}: (typeof HOW_IT_WORKS)[number] & { isLast: boolean }) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`flex gap-6 pb-10 last:pb-0 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-white">
          {step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-line" />}
      </div>
      <div className="pt-1.5">
        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
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

        <div className="mx-auto mt-14 max-w-xl">
          {HOW_IT_WORKS.map((item, i) => (
            <Step key={item.step} {...item} isLast={i === HOW_IT_WORKS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
