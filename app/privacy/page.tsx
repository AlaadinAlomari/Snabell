import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Snabell',
  description: 'Privacy Policy for Snabell LLC.',
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="px-[5vw] py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink-soft">
            Snabell LLC (snabell.com) · Contact: WhatsApp +44 7442 967254
          </p>

          <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                1. Information We Collect
              </h2>
              <p className="mt-3">
                We collect your name and business details when you share them with us via
                WhatsApp. Payment data is processed directly by Stripe — Snabell does not store
                your card details. We also collect analytics data through Google Analytics when
                you visit our site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                2. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information you provide to scope and deliver your landing page
                project, to process payment for your chosen package, and to communicate project
                updates with you via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                3. Data Sharing
              </h2>
              <p className="mt-3">
                We share data with the following third parties strictly to operate our service:
                Stripe for payment processing, Google Analytics for site analytics, and
                Meta/WhatsApp for messaging. We do not sell your data to anyone.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                4. Cookies &amp; Analytics
              </h2>
              <p className="mt-3">
                Our site may use cookies and similar technologies through Google Analytics to
                understand how visitors use our site and to improve our service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                5. Data Retention
              </h2>
              <p className="mt-3">
                Project data is retained for 1 year following delivery. Payment records are
                retained for as long as required by applicable legal and tax requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                6. Your Rights
              </h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal data at
                any time. Send your request via WhatsApp and we will respond promptly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                7. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes will be posted
                on this page.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                8. Contact Us
              </h2>
              <p className="mt-3">
                For any privacy-related questions or requests, contact us via WhatsApp at
                +44 7442 967254.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
