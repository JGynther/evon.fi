module.exports = {
  env: {
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID,
    GOOGLE_SHEETS_6554_ID: process.env.GOOGLE_SHEETS_6554_ID,
    MAILGUN_API: process.env.MAILGUN_API,
    MAILGUN_URL: process.env.MAILGUN_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_BUCKET_URL:
      process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL.replace("https://", ""),
    ],
  },
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/osakeanti",
        destination: "/",
        permanent: true,
      },
      {
        source: "/osakeanti/sitoumus",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
