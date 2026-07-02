export const CONTACT_EMAIL = 'hello@snabell.com';
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
    tagline: 'A single, sharp landing page — fast.',
    recommended: false,
    features: [
      'One custom landing page',
      'Mobile-responsive build',
      'Basic copy review (1 round)',
      'Contact/lead form',
      'Delivered in 5 business days',
      '7-day support window',
    ],
    ctaLabel: 'Get Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 297,
    tagline: 'Our most popular package — built to convert.',
    recommended: true,
    features: [
      'Everything in Starter',
      'Conversion-focused copywriting',
      'Custom visual design (not a template)',
      'SEO structure & metadata',
      'Analytics + pixel setup',
      '2 rounds of revisions',
      'Delivered in 7 business days',
      '30-day support window',
    ],
    ctaLabel: 'Get Growth',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 497,
    tagline: 'For serious launches with zero compromises.',
    recommended: false,
    features: [
      'Everything in Growth',
      'A/B test variant page included',
      'Advanced animations & interactions',
      'Priority delivery (5 business days)',
      '3 rounds of revisions',
      'Speed optimisation (95+ PageSpeed)',
      '60-day support window',
      'Direct priority email support',
    ],
    ctaLabel: 'Get Pro',
  },
];

export const FEATURES = [
  {
    title: 'Fast Delivery',
    description: 'Most projects ship in 5–7 business days, not months.',
    icon: 'Zap',
  },
  {
    title: 'Conversion-Focused Copy',
    description: 'Every word is written to move visitors toward action.',
    icon: 'Target',
  },
  {
    title: 'Mobile-First',
    description: 'Built and tested to look sharp on every screen size.',
    icon: 'Smartphone',
  },
  {
    title: 'SEO Ready',
    description: 'Clean structure and metadata so search engines find you.',
    icon: 'Search',
  },
  {
    title: 'Analytics Built-in',
    description: 'Track visitors and conversions from day one.',
    icon: 'BarChart3',
  },
  {
    title: 'Ongoing Support',
    description: 'A real support window after delivery, not radio silence.',
    icon: 'LifeBuoy',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Choose Your Package',
    description: 'Pick Starter, Growth, or Pro based on what your launch needs.',
  },
  {
    step: 2,
    title: 'Tell Us About Your Business',
    description: 'Share your goals, brand, and content over email.',
  },
  {
    step: 3,
    title: 'We Design & Build',
    description: 'Our team designs and develops your custom landing page.',
  },
  {
    step: 4,
    title: 'You Launch',
    description: 'Review, approve, and go live with a page built to convert.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Maya Chen',
    role: 'Founder, Loopwell',
    quote:
      'Snabell delivered our landing page in under a week and it converts better than the one our old agency built in a month.',
  },
  {
    name: 'James Okafor',
    role: 'Marketing Lead, Northbridge',
    quote:
      'No back-and-forth nonsense — clear pricing, fast turnaround, and the design felt custom, not templated.',
  },
  {
    name: 'Sara Lindqvist',
    role: 'Founder, Solace Studio',
    quote:
      'The checkout was seamless and their team was in my inbox within hours to kick things off.',
  },
];

export const FAQS = [
  {
    question: 'How fast will my landing page actually be delivered?',
    answer:
      'Starter and Pro packages are delivered in 5 business days, and Growth in 7 business days, starting once you provide your content and business details over email.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer:
      'After checkout, we\'ll email you to gather your business details, brand assets, and any content you want included. The faster you respond, the faster we build.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes. Starter includes 1 round, Growth includes 2 rounds, and Pro includes 3 rounds of revisions. Additional revisions can be purchased separately.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Payment is made securely through Stripe Checkout at the time of purchase. Full payment is required upfront before work begins.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer:
      'Yes — email us and we\'ll work out the difference in price to move you up a tier.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'If we fail to deliver within the agreed timeline (excluding delays caused by late client input), you\'re entitled to a full refund. See our Terms for details.',
  },
  {
    question: 'How do I get in touch after purchasing?',
    answer:
      'We\'ll email you within a few hours of checkout to kick off your project, and you can reach us anytime at hello@snabell.com.',
  },
];
