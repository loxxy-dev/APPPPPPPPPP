# PayPal Integration Setup Guide

## 1. Create PayPal Developer Account

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Sign in with your PayPal account or create a new one
3. Navigate to "My Apps & Credentials"

## 2. Create a New Application

1. Click "Create App"
2. Choose "Default Application" 
3. Select "Sandbox" for testing or "Live" for production
4. Choose "Merchant" as the account type
5. Check the following features:
   - Subscriptions
   - Payments
   - Webhooks

## 3. Get Your Credentials

After creating the app, you'll get:
- **Client ID** (public, goes in NEXT_PUBLIC_PAYPAL_CLIENT_ID)
- **Client Secret** (private, goes in PAYPAL_CLIENT_SECRET)

## 4. Configure Environment Variables

Add to your `.env.local` file:

\`\`\`env
# Sandbox Credentials (for testing)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_sandbox_client_id
PAYPAL_CLIENT_SECRET=your_sandbox_client_secret

# Production Credentials (for live)
# NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_live_client_id
# PAYPAL_CLIENT_SECRET=your_live_client_secret

# Optional: Webhook ID for event verification
PAYPAL_WEBHOOK_ID=your_webhook_id

# Your app's base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
\`\`\`

## 5. Set Up Webhooks (Optional but Recommended)

1. In PayPal Developer Dashboard, go to your app
2. Click "Add Webhook"
3. Set webhook URL to: `https://yourdomain.com/api/paypal/webhook`
4. Select these events:
   - BILLING.SUBSCRIPTION.ACTIVATED
   - BILLING.SUBSCRIPTION.CANCELLED
   - BILLING.SUBSCRIPTION.SUSPENDED
   - BILLING.SUBSCRIPTION.PAYMENT.FAILED
   - PAYMENT.SALE.COMPLETED

## 6. Testing

### Sandbox Testing
- Use sandbox credentials
- Test with PayPal sandbox accounts
- No real money is charged

### Production
- Switch to live credentials
- Test with small amounts first
- Real payments will be processed

## 7. Important Notes

- Keep your Client Secret secure and never expose it in frontend code
- Use sandbox for development and testing
- Switch to live credentials only when ready for production
- PayPal subscriptions are automatically recurring
- Users can cancel subscriptions through PayPal or your app

## 8. Subscription Flow

1. User selects a plan
2. PayPal subscription is created
3. User approves payment on PayPal
4. Webhook confirms subscription activation
5. User gets access to premium features

## 9. Troubleshooting

- **"PayPal is not configured"**: Check environment variables
- **"Loading PayPal" stuck**: Verify Client ID is correct
- **Payment fails**: Check sandbox vs live environment
- **Webhook not working**: Verify webhook URL and events
