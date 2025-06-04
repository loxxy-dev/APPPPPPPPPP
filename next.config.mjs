/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test_client_id",
    PAYPAL_WEBHOOK_ID: process.env.PAYPAL_WEBHOOK_ID || "test_webhook_id",
  },
}

export default nextConfig
