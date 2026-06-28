---
name: nextjs-stripe-subscriptions
description: Implement, debug, and production-check Stripe payments and subscriptions in Next.js or React web apps. Use when adding checkout, billing portal access, customer reuse, webhook handling, live/test mode separation, plan-to-price mapping, subscription downgrade/cancel behavior, or Stripe production verification.
---

# Next.js Stripe Subscriptions

## Core Workflow

1. Map product plans before writing code.
   - Define public plan names, internal tier keys, monthly/yearly price IDs, and downgrade behavior.
   - Keep free plans as non-checkout actions.
   - Treat test and live mode as separate worlds; never reuse test customers in live mode.

2. Implement server-only Stripe calls.
   - Create checkout and billing portal sessions in API routes or server actions.
   - Use `STRIPE_SECRET_KEY` only on the server.
   - Use `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` only for browser-safe Stripe.js work.
   - Build success, cancel, and return URLs from a production site URL env var, not hard-coded localhost.

3. Reuse or repair customers carefully.
   - Store `stripe_customer_id` on the app user profile.
   - Before reusing a customer, retrieve it with the active Stripe key.
   - If Stripe says a similar customer exists in another mode, create a new customer for the current mode and replace the stored ID.

4. Make webhooks authoritative.
   - Verify webhook signatures with `STRIPE_WEBHOOK_SECRET`.
   - Handle at least `checkout.session.completed`, `customer.subscription.updated`, and `customer.subscription.deleted`.
   - Update the app profile from Stripe events, not from browser redirects.
   - Make event handlers idempotent.

5. Verify production deliberately.
   - Confirm live env vars use `sk_live`, `pk_live`, live price IDs, and a live webhook secret.
   - Complete a real checkout or a controlled live-mode test transaction.
   - Verify account state, current plan labels, billing portal access, and downgrade/cancel behavior.

## Implementation Checks

- Keep price IDs in env vars:
  - `STRIPE_PRO_MONTHLY_PRICE_ID`
  - `STRIPE_PRO_YEARLY_PRICE_ID`
  - `STRIPE_PREMIUM_MONTHLY_PRICE_ID`
  - `STRIPE_PREMIUM_YEARLY_PRICE_ID`
- Keep one tier resolver function so pricing UI, checkout, webhook, and limits agree.
- Do not let a signed-in free user "upgrade" from the free card.
- Do not trust client-submitted tier names without validating against server-side plan config.
- Return user-friendly errors, but log enough context server-side to debug Stripe failures.

## Production Failure Patterns

- `No such customer ... similar object exists in test mode`: the database has a test-mode customer ID while the app is using live keys. Retrieve, detect failure, create a live customer, and update the profile.
- Checkout redirects to localhost: `NEXT_PUBLIC_SITE_URL` or equivalent is missing in production.
- Webhook updates do not happen: wrong webhook signing secret, endpoint not added in live mode, or event type not handled.
- UI shows paid plan after cancellation: effective tier logic is trusting stale profile tier without checking active subscription state.

## Verification

Run app tests and build before deployment. After deployment, verify:

- paid checkout starts for paid plans only
- free plan is not a checkout action
- webhook writes the expected app profile fields
- billing portal opens for users with a Stripe customer
- canceled subscriptions downgrade or remove paid entitlements
- live and test objects are not mixed
