import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const TIER_DETAILS: Record<string, { name: string; amount: number; description: string }> = {
  starter: {
    name: 'Snabell — Starter Package',
    amount: 9700,
    description: 'A single, sharp landing page — fast.',
  },
  growth: {
    name: 'Snabell — Growth Package',
    amount: 29700,
    description: 'Our most popular package — built to convert.',
  },
  pro: {
    name: 'Snabell — Pro Package',
    amount: 49700,
    description: 'For serious launches with zero compromises.',
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const tier = body?.tier;

    if (!tier || !(tier in TIER_DETAILS)) {
      return NextResponse.json({ error: 'Invalid package tier.' }, { status: 400 });
    }

    const details = TIER_DETAILS[tier];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
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
