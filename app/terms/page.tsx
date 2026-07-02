import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service — Snabell',
  description: 'Terms of Service for Snabell LLC.',
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="px-[5vw] py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-ink-soft">
            Snabell LLC · Landing page design and development, offered in three fixed packages
            (Starter $97 / Growth $297 / Pro $497).
          </p>

          <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                1. Services Provided
              </h2>
              <p className="mt-3">
                The scope of work is defined by the package tier you select at checkout. See the
                Pricing section of our site for the exact inclusions of each tier.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                2. Payment Terms
              </h2>
              <p className="mt-3">
                Full payment is required upfront via Stripe Checkout before work begins. All
                prices are listed in USD, and payment is due at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                3. Project Timeline
              </h2>
              <p className="mt-3">
                Delivery timelines vary by package: 5 business days for Starter, 7 business days
                for Growth, and 5 business days for Pro. The timeline begins once you provide the
                required content and information via email, within 48 hours of purchase.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                4. Revisions
              </h2>
              <p className="mt-3">
                The number of included revision rounds varies by package tier — see the Pricing
                section for details. Additional revisions beyond those included are billed
                separately at $75 per round.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                5. Client Responsibilities
              </h2>
              <p className="mt-3">
                To keep your project on schedule, you agree to respond to emails and provide
                requested content within 48 hours.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                You own the final deliverable upon completion of your project. Snabell may
                display the completed work in its portfolio unless you opt out.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                7. Refund Policy
              </h2>
              <p className="mt-3">
                You are entitled to a full refund if Snabell fails to deliver within the agreed
                timeline, excluding delays caused by late client input. No refund is available
                once final files have been delivered.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                Snabell&apos;s liability is limited to the amount paid for the package purchased.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                9. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                10. Contact
              </h2>
              <p className="mt-3">
                For any questions about these Terms, contact us at {CONTACT_EMAIL}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
