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
            Snabell LLC · White-label access to marketing and CRM software, offered as a monthly
            subscription in three plans (Starter $97 / Growth $297 / Pro $497).
          </p>

          <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                1. Services Provided
              </h2>
              <p className="mt-3">
                Snabell provides access to a white-labeled version of a third-party marketing and
                CRM platform. The specific tools included are defined by the plan you select at
                checkout — see the Pricing section of our site for the exact inclusions of each
                plan.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                2. Subscription &amp; Billing
              </h2>
              <p className="mt-3">
                Plans are billed monthly in advance via Stripe and renew automatically until
                cancelled. All prices are listed in USD. Your subscription begins immediately upon
                successful payment.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                3. Onboarding
              </h2>
              <p className="mt-3">
                After your first payment, our team will email you within 24 hours to provision
                your white-labeled workspace and help you get set up.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                4. Plan Changes
              </h2>
              <p className="mt-3">
                You may upgrade or downgrade your plan at any time by emailing us. Changes take
                effect at the start of your next billing cycle.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                5. Cancellation
              </h2>
              <p className="mt-3">
                You may cancel your subscription at any time by emailing us. Your access remains
                active until the end of the current billing period, and no further payments will
                be charged after cancellation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                6. Acceptable Use
              </h2>
              <p className="mt-3">
                You are responsible for the content, campaigns, and communications you send
                through your workspace, and for complying with applicable marketing and messaging
                laws (including CAN-SPAM, TCPA, and GDPR where relevant).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                7. Intellectual Property
              </h2>
              <p className="mt-3">
                Snabell and its underlying software providers retain ownership of the platform
                itself. You retain ownership of your own business data, content, and campaigns
                created within your workspace.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                8. Service Availability
              </h2>
              <p className="mt-3">
                We aim for reliable uptime but do not guarantee uninterrupted access, as the
                platform depends on third-party software infrastructure outside our direct
                control.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                9. Refund Policy
              </h2>
              <p className="mt-3">
                Because your workspace is provisioned immediately upon payment, we do not offer
                refunds for partial billing periods. Cancelling stops all future charges.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                10. Limitation of Liability
              </h2>
              <p className="mt-3">
                Snabell&apos;s liability is limited to the amount paid for your plan in the
                preceding billing period.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                11. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                12. Contact
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
