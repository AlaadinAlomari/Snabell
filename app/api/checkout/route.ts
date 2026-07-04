import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const TIER_DETAILS: Record<string, { name: string; amount: number; description: string }> = {
  starter: {
    name: 'Snabell — Starter Plan',
    amount: 9700,
    description: 'Everything you need to manage leads and bookings.',
  },
  growth: {
    name: 'Snabell — Growth Plan',
    amount: 29700,
    description: 'Our most popular plan — built to scale your marketing.',
  },
  pro: {
    name: 'Snabell — Pro Plan',
    amount: 49700,
    description: 'The complete growth stack — nothing held back.',
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const tier = body?.tier;

    if (!tier || !(tier in TIER_DETAILS)) {
      return NextResponse.json({ error: 'Invalid plan tier.' }, { status: 400 });
    }

    const details = TIER_DETAILS[tier];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: details.name,
              description: details.description,
            },
            unit_amount: details.amount,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success?tier=${tier}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Unable to create checkout session.' }, { status: 500 });
  }
}
