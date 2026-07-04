export const CONTACT_EMAIL = 'support@snabell.com';
export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;

export type PackageId = 'starter' | 'growth' | 'pro';

export interface Package {
  id: PackageId;
  name: string;
  price: number;
  tagline: string;
  recommended: boolean;
  features: string[];
  ctaLabel: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 97,
    tagline: 'Everything you need to manage leads and bookings.',
    recommended: false,
    features: [
      'CRM & Pipeline Management',
      'Website Builder',
      'Surveys & Forms',
      'Email Marketing',
      'Booking & Appointments',
      'White-labeled under your brand',
    ],
    ctaLabel: 'Start Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 297,
    tagline: 'Our most popular plan — built to scale your marketing.',
    recommended: true,
    features: [
      'Everything in Starter',
      'Unlimited Sales Funnels',
      '2-Way SMS Marketing',
      'Workflow Automations',
      'Tracking & Analytics',
    ],
    ctaLabel: 'Start Growth',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 497,
    tagline: 'The complete white-label growth stack — nothing held back.',
    recommended: false,
    features: [
      'Everything in Growth',
      'Courses/Products',
      'Call Tracking',
      'Reputation Management',
      'Communities',
      'Document Signing',
    ],
    ctaLabel: 'Start Pro',
  },
];

export const FEATURES = [
  {
    title: 'All-in-One Platform',
    description: 'Replace 10+ scattered tools with a single white-labeled dashboard.',
    icon: 'Layers',
  },
  {
    title: 'Fully White-Labeled',
    description: 'Your brand, your domain — clients never see GoHighLevel underneath.',
    icon: 'Palette',
  },
  {
    title: 'Fast Onboarding',
    description: 'Your workspace is provisioned and ready within 24 hours.',
    icon: 'Zap',
  },
  {
    title: 'Cancel Anytime',
    description: 'No long-term contracts — upgrade, downgrade, or cancel whenever.',
    icon: 'RefreshCw',
  },
  {
    title: 'Real Support',
    description: 'Our team helps you configure funnels, automations, and more.',
    icon: 'LifeBuoy',
  },
  {
    title: 'Continuous Updates',
    description: 'New platform features roll out to your account automatically.',
    icon: 'TrendingUp',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Choose Your Plan',
    description: 'Pick Starter, Growth, or Pro based on the tools your business needs.',
  },
  {
    step: 2,
    title: 'Get Instant Access',
    description: 'Your white-labeled workspace is provisioned within 24 hours.',
  },
  {
    step: 3,
    title: 'We Help You Set Up',
    description: 'Our team helps configure your CRM, funnels, and automations.',
  },
  {
    step: 4,
    title: 'Grow On Autopilot',
    description: 'Launch campaigns, book clients, and scale every month.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Derek Lawson',
    role: 'Owner, Lawson Digital Agency',
    quote:
      'Snabell let us launch our own branded software product in a week instead of building it ourselves.',
  },
  {
    name: 'Priya Nair',
    role: 'Founder, Nair Marketing Co.',
    quote:
      'The CRM and funnels alone replaced four separate tools we were paying for every month.',
  },
  {
    name: 'Tomás Rivera',
    role: 'Consultant, Rivera Growth Partners',
    quote:
      'Our clients think we built this platform ourselves — that\'s exactly the point.',
  },
];

export const FAQS = [
  {
    question: 'What exactly am I getting with Snabell?',
    answer:
      'A fully white-labeled version of the GoHighLevel platform — under your brand and domain — with the CRM, funnels, and marketing tools included in your plan.',
  },
  {
    question: 'Is this a monthly subscription?',
    answer:
      'Yes. All three plans bill monthly via Stripe. There are no long-term contracts — you can upgrade, downgrade, or cancel anytime.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes — email us anytime and we\'ll move you to a new plan starting on your next billing cycle.',
  },
  {
    question: 'What\'s the difference between the three plans?',
    answer:
      'Starter covers the essentials — CRM, website builder, forms, email, and booking. Growth adds unlimited funnels, SMS, automations, and analytics. Pro unlocks the full suite, including courses, call tracking, reputation management, communities, and document signing.',
  },
  {
    question: 'Is there a setup fee or free trial?',
    answer:
      'No hidden setup fees. Your first payment activates your workspace, and our team onboards you within 24 hours.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. Cancel anytime by emailing us — your plan stays active until the end of the current billing period, with no cancellation fees.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Because your workspace is provisioned immediately, we don\'t offer refunds for partial billing periods, but you\'re never billed again after cancelling.',
  },
];
