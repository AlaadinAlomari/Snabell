export const CONTACT_EMAIL = 'support@snabell.com';
export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE = '(307) 401-8476';
export const CONTACT_PHONE_LINK = 'tel:+13074018476';

export type PackageId = 'starter' | 'growth' | 'pro';

export const ALL_FEATURES = [
  'CRM & Pipeline Management',
  'Unlimited Sales Funnels',
  'Website Builder',
  'Surveys & Forms',
  'Email Marketing',
  'Booking & Appointments',
  'Workflow Automations',
  'Courses/Products',
  'Call Tracking',
  'Reputation Management',
  'Tracking & Analytics',
  'Communities',
  'Document Signing',
] as const;

const STARTER_FEATURES = [
  'CRM & Pipeline Management',
  'Website Builder',
  'Surveys & Forms',
  'Email Marketing',
  'Booking & Appointments',
];

const GROWTH_FEATURES = [
  ...STARTER_FEATURES,
  'Unlimited Sales Funnels',
  'Workflow Automations',
  'Tracking & Analytics',
];

const PRO_FEATURES = [
  ...GROWTH_FEATURES,
  'Courses/Products',
  'Call Tracking',
  'Reputation Management',
  'Communities',
  'Document Signing',
];

export interface Package {
  id: PackageId;
  name: string;
  price: number;
  tagline: string;
  recommended: boolean;
  includedFeatures: string[];
  ctaLabel: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 97,
    tagline: 'Everything you need to manage leads and bookings.',
    recommended: false,
    includedFeatures: STARTER_FEATURES,
    ctaLabel: 'Start Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 297,
    tagline: 'Our most popular plan — built to scale your marketing.',
    recommended: true,
    includedFeatures: GROWTH_FEATURES,
    ctaLabel: 'Start Growth',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 497,
    tagline: 'The complete growth stack — nothing held back.',
    recommended: false,
    includedFeatures: PRO_FEATURES,
    ctaLabel: 'Start Pro',
  },
];

export const STATS = [
  { value: '14', label: 'Built-in tools' },
  { value: '24hr', label: 'Onboarding time' },
  { value: '500+', label: 'Businesses powered' },
  { value: '$0', label: 'Setup fees' },
];

export const FEATURES = [
  {
    title: 'All-in-One Platform',
    description: 'Replace 10+ scattered tools with a single dashboard built for growth.',
    icon: 'Layers',
    size: 'lg',
  },
  {
    title: 'Your Brand, Your Domain',
    description: 'Everything runs under your business name — no other platform branding, ever.',
    icon: 'Palette',
    size: 'sm',
  },
  {
    title: 'Fast Onboarding',
    description: 'Your workspace is provisioned and ready within 24 hours.',
    icon: 'Zap',
    size: 'sm',
  },
  {
    title: 'Cancel Anytime',
    description: 'No long-term contracts — upgrade, downgrade, or cancel whenever.',
    icon: 'RefreshCw',
    size: 'sm',
  },
  {
    title: 'Real Support',
    description: 'Our team helps you configure funnels, automations, and more.',
    icon: 'LifeBuoy',
    size: 'sm',
  },
  {
    title: 'Continuous Updates',
    description: 'New platform features roll out to your account automatically.',
    icon: 'TrendingUp',
    size: 'sm',
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
    description: 'Your workspace is provisioned within 24 hours.',
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

export const FAQS = [
  {
    question: 'What exactly am I getting with Snabell?',
    answer:
      'A complete business platform under your own brand — with the CRM, funnels, and marketing tools included in your plan.',
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
      'Starter covers the essentials — CRM, website builder, forms, email, and booking. Growth adds unlimited funnels, automations, and analytics. Pro unlocks the full suite, including courses, call tracking, reputation management, communities, and document signing.',
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
