# Deploy Snabell to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Next.js (auto-detected)
4. Add environment variables:
   - STRIPE_SECRET_KEY (from dashboard.stripe.com)
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - NEXT_PUBLIC_SITE_URL = https://snabell.com
5. Set custom domain: snabell.com
6. Click Deploy

# Local dev
pnpm install
pnpm dev
