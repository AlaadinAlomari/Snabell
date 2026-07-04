import { STATS } from '@/lib/constants';

export default function Stats() {
  return (
    <section className="border-y border-line bg-bg-soft px-[5vw] py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-bold tracking-[-0.02em] text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium text-ink-soft sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
